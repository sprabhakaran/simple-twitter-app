import React, {useState, useEffect} from "react";
import './styles/App.css';
import Header from './header';
import AddContact from './add_contact';
import ContactList from './contact_list';
import uuid from 'uuidv4';

const App = () => {
    const [contacts, setContacts] = useState([]);
    const addContactHandler = (contact) => {
        setContacts([...contacts, {id: uuid(), ...contact}]);
    }

    const remContactHandler = (id) => {
        const newList = contacts.filter(c => {return c.id !== id});
        setContacts(newList);
    }

    useEffect(() => {
        const retrive = JSON.parse(localStorage.getItem("contacts"));
        if (retrive) {
            setContacts(retrive);
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("contacts", JSON.stringify(contacts));
    }, [contacts])

    return (
        <div className="ui container center">
            <Header />
            <AddContact addHandler={addContactHandler}/>
            <ContactList props={contacts} deleteContact={remContactHandler}/>
        </div>
    )
}

export default App;
