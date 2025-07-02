import React from "react";
import '../PagesCss/Home.css';
function Home() {
    return (
        <main>
            <section className="HomeSection">
                <h1 className="H1Title">Welcome my portfolio</h1>

                <div className="scrolling-container">
                    <span className="scrolling-text">Welcome</span>
                </div>

                <div className="diagonal-container">
                    <span className="scrolling-text">Welcome</span>
                </div>

                <div className="pulsing-container">
                    <span className="pulsing-text">Welcome</span>
                </div>
            </section>
        </main>
    );
}

export default Home;