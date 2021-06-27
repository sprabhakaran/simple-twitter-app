import React from "react";
import ContactCard from "./contact_card";

const ContactList = (props) => {
    const deleteContactHandler = (id) => {
        props.deleteContact(id);
    }

    const renderContactList = props.props.map((contact) =>  {
        return <ContactCard contact={contact} clickHandler={deleteContactHandler}/>;
    })

    return <div className={`ui celled list`}> {renderContactList}</div>;
}

export default ContactList;