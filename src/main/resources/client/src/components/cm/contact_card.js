import React from "react";
import user from './styles/images/user.jpeg'
import {Link} from "react-router-dom";

const ContactCard = (props) => {
    const {id, name, email} = props.contact;
    return (
        <div className={`item`}>
            <img src={user} className={`ui avatar image`} alt="User image"/>

            <div className={`content`}>
                <Link to={{pathname:`/contact/${id}`, state: {props: props.contact}}}>
                    <div className={`header`}>{name}</div>
                    <div>{email}</div>
                </Link>
            </div>

            <i className={`trash alternate outline icon del-icon`} onClick={() => props.clickHandler(id)}></i>
        </div>
    )
}

export default ContactCard;