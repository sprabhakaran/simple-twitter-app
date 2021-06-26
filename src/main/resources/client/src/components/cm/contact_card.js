import React from "react";

const ContactCard = () => {
    return (
        <div className="ui form">
                <h2>Add Contact</h2>
                <form className={`ui form`}>
                    <div className="field">
                        <label>Name</label>
                        <input type="text" name="name" placeholder="Name"/>
                    </div>
                    <div className="field">
                        <label>Email</label>
                        <input type="text" name="email" placeholder="Email"/>
                    </div>
                    <button className="fluid ui button">Click Me</button>
                </form>
            </div>
    )
}

export default ContactCard;