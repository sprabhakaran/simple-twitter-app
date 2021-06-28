import React from "react";
import user from "./styles/images/user.jpeg";
const ContactDetails = () => {
    return (
        <div className={"main"}>
            <div className={"ui card centered"}>
                <div className={"image"}>
                    <img src={user} alt="user"/>
                </div>
                <div className={"content"}>
                    <div className={"header"}>SPK</div>
                    <div className={"description"}>spk@gmail.com</div>
                </div>
            </div>
        </div>
    );
}

export default ContactDetails;