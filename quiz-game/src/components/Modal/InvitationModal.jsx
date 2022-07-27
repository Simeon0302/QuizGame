import React from "react";
import ReactDOM from "react-dom";
import "./modal.css";

function InvitationModal({isOpen, onAccept, onCancel, invitedBy}) {
    if(!isOpen) return null;

    return ReactDOM.createPortal(
        <div id="modal-container">
            <div id="overlay" />
            <div id="modal">
                <div id="modal-header">
                    Invitation!
                </div>

                <div id="modal-body">
                    You have been invited to join a game with {invitedBy}.
                </div>

                <div id="modal-footer">
                    <button onClick={onAccept} id="accept-button">Accept</button>
                    <button onClick={onCancel} id="cancel-button">Decline</button>
                </div>
            </div>
        </div>,
        document.getElementById("portal")
    )
}

export default InvitationModal;
