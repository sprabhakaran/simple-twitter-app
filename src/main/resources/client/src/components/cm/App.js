// import logo from './logo.svg';
import React from "react";
import './App.css';
import Header from './header';
import AddContact from './add_contact';
import ContactList from './contact_list';

const App = () => {
    const props = [
        {
            id: "1",
            name: "P1",
            email: "p1@gmail.com"
        },
        {
            id: "2",
            name: "P2",
            email: "p2@gmail.com"
        }
    ];
    return (
        <div className="ui container center">
            <Header />
            <AddContact />
            <ContactList props={props}/>
        </div>
    )
}

export default App;
