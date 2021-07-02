import React, {Component} from "react";
// import logo from './../styles/images/logo.svg'

export default class LeftNavigation extends Component {
    render() {
        return (
            <div className={"t-nav-left"}>
                <div>
                    <div><img src="https://image.flaticon.com/icons/png/512/733/733579.png" alt="logo" height={"50"}/>
                    </div>
                    <div>

                    </div>
                    <div class="t-nav-footer">
                        <div><img src="https://img.icons8.com/dotty/2x/user.png" className={"t-image"}/></div>
                        <div className={"t-prof-names"}>
                            <div>Prabhakaran S</div>
                            <div>@sprabhakaran</div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}