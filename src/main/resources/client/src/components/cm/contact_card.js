import React from "react";
import user from './styles/images/user.jpeg'
const ContactCard = (props) => {
    const {id, name, email} = props.contact;
    return (
        <div className={`item`}>
            <img src={user} className={`ui avatar image`} alt="User image"/>
            <div className={`content`}>
                <div className={`header`}>{name}</div>
                <div>{email}</div>
            </div>
            <i className={`trash alternate outline icon del-icon`} onClick={() => props.clickHandler(id)}></i>
        </div>
    )
}

export default ContactCard;