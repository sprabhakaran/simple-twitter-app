import React, {Component} from "react";
// import logo from './../styles/images/logo.svg'

export default class LeftNavigation extends Component {
    render() {
        return (
            <div className={"t-nav-left"}>
                <div>
                    <div>
                        <img src="https://image.flaticon.com/icons/png/512/733/733579.png" alt="logo" height={"50"}/>
                    </div>
                    <div className={"t-action-holder"}>
                        <div className={"t-home"}>
                            <img src="https://img.icons8.com/office/2x/home.png" alt="home" className={"ui icon image"} height={"20"}/>
                            <div>Home</div>
                        </div>
                        <div className={"t-explore"}>
                            <img src="https://img.icons8.com/ios-glyphs/2x/hashtag-large.png" alt="explore" className={"ui icon image"} height={"20"}/>
                            <div>Explore</div>
                        </div>
                        <div className={"t-notification"}>
                            <img src="https://img.icons8.com/ios/2x/appointment-reminders.png" alt="notification" className={"ui icon image"} height={"20"}/>
                            <div>Notifications</div>
                        </div>
                        <div className={"t-msg"}>
                            <img src="https://img.icons8.com/fluent/2x/message-preview.png" alt="message" className={"ui icon image"} height={"20"}/>
                            <div>Messages</div>
                        </div>
                        <div className={"t-bookmarks"}>
                            <img src="https://img.icons8.com/ultraviolet/2x/bookmark-ribbon.png" alt="bookmarks" className={"ui icon image"} height={"20"}/>
                            <div>Bookmarks</div>
                        </div>
                        <div className={"t-list"}>
                            <img src="https://img.icons8.com/color/2x/list.png" alt="list" className={"ui icon image"} height={"20"}/>
                            <div>List</div>
                        </div>
                        <div className={"t-profile"}>
                            <img src="https://img.icons8.com/color/2x/test-account.png" alt="profile" className={"ui icon image"} height={"20"}/>
                            <div>Profile</div>
                        </div>
                    </div>
                    {/*<div class="t-nav-footer">
                        <div><img src="https://img.icons8.com/dotty/2x/user.png" className={"t-image"}/></div>
                        <div className={"t-prof-names"}>
                            <div>Prabhakaran S</div>
                            <div>@sprabhakaran</div>
                        </div>

                    </div>*/}
                </div>
            </div>
        )
    }
}