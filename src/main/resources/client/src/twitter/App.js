import React, {Component} from "react";
import LeftNavigation from "../twitter/components/left_nav";
import RightNavigation from "../twitter/components/right_nav";
import Main from "../twitter/components/main";
import './styles/index.css';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={"t-container"}>
                <LeftNavigation />
                <Main />
                <RightNavigation />
            </div>
        );
    }
}

export default App;