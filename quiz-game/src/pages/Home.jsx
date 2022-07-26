import React from "react";
import InvitationReceiver from "../components/InvitationReceiver";
import CreateInvitation from "../components/CreateInvitation";


function Home() {
    return (
        <div id="home">
            <h1>Home</h1>
            <InvitationReceiver />
            <CreateInvitation />
        </div>
    )
}

export default Home;
