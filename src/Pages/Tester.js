import React from "react";
import '../PagesCss/Test.css';
import storesNight from "../Images/Ambient/LateNightStores.png";
function Tester() {
    return (
        <main>
            <section>
                <h1>Test page</h1>
                <img src={storesNight} alt='stores' className="stores" />
            </section>
        </main>
    );
}
export default Tester;