import React from "react";
import ContactCard from "./contact_card";
import {Link} from "react-router-dom";

const ContactList = (props) => {
    const deleteContactHandler = (id) => {
        props.deleteContact(id);
    }

    const renderContactList = props.contacts.map((contact) => {
        return <ContactCard contact={contact} clickHandler={deleteContactHandler}/>;
    })

    return (
        <div className="main">
            <h2>Contact List</h2>
            <Link to={"add"}>
                <button className={"ui button blue right"}>Add Contact</button>
            </Link>
            <div className={`ui celled list`}> {renderContactList}</div>
        </div>
    )
}

export default ContactList;