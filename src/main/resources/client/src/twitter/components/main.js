import React, {Component} from "react";

export default class Main extends Component {
    render() {
        return (
            <main>
                <article id="profile-tile" class="tile">
                    <header>
                        <h2>Profile Area</h2>
                    </header>
                </article>
                <section id="feed-tile" class="tile">
                    <header>
                        <h2>Feed</h2>
                    </header>
                </section>
                <aside id="trending-tile" class="tile">
                    <header>
                        <h2>Trending</h2>
                    </header>
                </aside>
                <article id="notice-tile" class="tile">
                    <header>
                        <h2>Notice</h2>
                    </header>
                </article>
                <aside id="follow-tile" class="tile">
                    <header>
                        <h2>Follow</h2>
                    </header>
                </aside>
                <aside id="links-tile" class="tile">
                    <header>
                        <h2>Links</h2>
                    </header>
                </aside>
            </main>
        );
    }
}