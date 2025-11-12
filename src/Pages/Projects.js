import "../PagesCss/Projects.css";
import React from "react";
import BossMovement from "../Images/VisualSheetBossMovement.png";
import bossShowcase from "../Images/BossShowcase.gif";
function Projects() {
    return (
        <main>
            <h1>Projects</h1>

            <section className="UEBoss">
                <h2 className="TitleUE">Unreal engine Boss fight</h2>
                <div className="container">
                    <p>This is my most recent project.</p>
                    <p>This is my first time using UnrealEngine </p>
                </div>
                <div className="ImgsUE">
                    <img src={BossMovement} alt="BossMovement" className="BossMovementImg" />
                    <img src={bossShowcase} alt="BossShowcase" className="bossShowcaseGif" />
                </div>
                <div className="LinksUE">
                    <a href="https://github.com/BAStudio/NeoNUnreal/tree/development/Content/Blueprints/Boss/AI-Controller/BehaviorTree" target="_blank" rel="noreferrer">Behavior Tree </a>
                    <a href='https://github.com/BAStudio/NeoNUnreal/tree/development/Content/Blueprints/Boss/Screenshake_BP' target='_blank' rel="noreferrer">Screen Shake </a>
                    <a href='https://github.com/BAStudio/NeoNUnreal/tree/development/Content/Pathfinding/Boss/AI' target='_blank' rel="noreferrer">In range check</a>
                </div>
            </section>

            <section>
                <h2>Tower defense</h2>
            </section>

            <section>
                <h2>Vertical slice Hollow Knight</h2>
            </section>

        </main>
    );
}

export default Projects;