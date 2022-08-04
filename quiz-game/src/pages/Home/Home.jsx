import React, { useContext } from "react";
import InvitationReceiver from "../../components/InvitationReceiver";
import CreateInvitation from "../../components/CreateInvitation/CreateInvitation";
import { UserAuthContext } from "../../components/UserAuth";
import homeStyles from "./home.module.css";

function Home() {
    const { token, username } = useContext(UserAuthContext);
    const socketURL = `ws://192.168.182.94:8001/ws/invitations/${token}/`;
    const ws = new WebSocket(socketURL);

    return (
        <div id={homeStyles.home}>
            <InvitationReceiver ws={ws} username={username}/>
            <CreateInvitation />
        </div>
    )
}

export default Home;
