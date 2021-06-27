import React, {useState, useEffect} from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './styles/App.css';
import Header from './header';
import AddContact from './add_contact';
import ContactList from './contact_list';
import {v4 as uuidv4} from 'uuid';

const App = () => {
    const [contacts, setContacts] = useState([]);
    const addContactHandler = (contact) => {
        setContacts([...contacts, {id: uuidv4(), ...contact}]);
    }

    const remContactHandler = (id) => {
        const newList = contacts.filter(c => {
            return c.id !== id
        });
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
            <Router>
                <Header/>
                <Switch>
                    <Route path={"/"} exact component={() => <ContactList contacts={contacts} deleteContact={remContactHandler}/>}></Route>
                    <Route path={"/add"} exact component={() => <AddContact addHandler={addContactHandler}/>}/>
                </Switch>
            </Router>
        </div>
    )
}

export default App;
