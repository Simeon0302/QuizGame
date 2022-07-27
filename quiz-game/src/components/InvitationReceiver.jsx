import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import InvitationModal from "../components/Modal/InvitationModal";

function InvitationReceiver({ws, username}) {
    const [isOpen, setIsOpen] = useState(false);
    const [invitedBy, setInvitedBy] = useState("");
    const [gameId, setGameId] = useState(null);
    const navigate = useNavigate();

    function handleAccept() {
        navigate(`/game/${gameId}`);
        setIsOpen(false);
    }

    function handleCancel() {
        console.log("Invitation cancelled");
        setIsOpen(false);
    }

    ws.onopen = () => {
        console.log("Listening for invites...");
    }

    ws.onmessage = resJSON => {
        const {type, data} = JSON.parse(resJSON.data);

        if (type === "game_invitation" && data.invited === username) {
            setGameId(data.channel);
            setIsOpen(true);
            setInvitedBy(data.invited);
        }
    }

    ws.onerror = (e) => {
        console.error(e);
    }

    ws.onclose = (res) => {
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
