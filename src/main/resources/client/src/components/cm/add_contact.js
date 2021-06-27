import React from "react";

class AddContact extends React.Component {
    state = {
        name:"",
        email: ""
    }

    add = (ev) => {
        ev.preventDefault();
        if (this.state.name === "" || this.state.email === ""){
            alert("All fields are mandatory!")
        }
        this.props.addHandler(this.state);
        console.log(this.props);
    }
    render() {
        return(
            <div className="ui form">
                <h2>Add Contact</h2>
                <form className={`ui form`} onSubmit={this.add}>
                    <div className="field">
                        <label>Name</label>
                        <input type="text" name="name" placeholder="Name" value={this.state.name} onChange={(e) => this.setState({name: e.target.value})}/>
                    </div>
                    <div className="field">
                        <label>Email</label>
                        <input type="text" name="email" placeholder="Email" value={this.state.email} onChange={(e) => this.setState({email: e.target.value})}/>
                    </div>
                    <button className="fluid ui button">Click Me</button>
                </form>
            </div>
        );
    }
}

export default AddContact;