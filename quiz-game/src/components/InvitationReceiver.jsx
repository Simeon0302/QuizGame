import React, { useContext, useState } from "react";
import { UserAuthContext } from "../components/UserAuth";
import InvitationModal from "../components/Modal/InvitationModal";

function InvitationReceiver() {
    const { token, username } = useContext(UserAuthContext);
    const socketURL = `ws://192.168.182.94:8001/ws/invitations/${token}/`;
    const ws = new WebSocket(socketURL);
    const [isOpen, setIsOpen] = useState(false);
    const [invitedBy, setInvitedBy] = useState("");

    function handleAccept() {
        console.log("Invitation accepted");
        setIsOpen(false);
    }

    function handleCancel() {
        console.log("Invitation cancelled");
        setIsOpen(false);
    }

    ws.onopen = () => {
        console.log("Connected");
    }

    ws.onmessage = resJSON => {
        const res = JSON.parse(resJSON.data);
        if (res.type === "game_invitation" && res.data.invited === username) {
            console.log("Invited by " + res.data.invited);
            setIsOpen(true);
            setInvitedBy(res.data.invited);
        }
    }

    ws.onerror = (e) => {
        console.error(e);
    }

    ws.onclose = res => {
        console.log("Connection closed");
    }

    return (
        <div id="invitation-receiver">
            <InvitationModal
                isOpen={isOpen}
                onAccept={handleAccept}
                onCancel={handleCancel}
                invitedBy={invitedBy}
            />
        </div>
    )
}

export default InvitationReceiver;
