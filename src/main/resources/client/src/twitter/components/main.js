import React, {Component} from "react";

export default class Main extends Component {
    render() {
        return (
            <div className={"t-main-center"}>
                <div className={"ui fixed t-main-home"}>Home</div>
                <div className={"t-post-input"}>
                    <div className={"t-post-input-holder"}>
                        <textarea className={"t-txtarea"} id="" rows="3" placeholder={"Whats New?"}></textarea>
                        <button className={"ui button blue"}>Tweet</button>
                    </div>
                </div>
            </div>
        )
    }
}