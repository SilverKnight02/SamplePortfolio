import React from 'react'
import './skills.css';
import UIDesign from '../../assets/Ux Design.png';
import WebDesign from '../../assets/Web Design.png';
import AppDesign from '../../assets/App Design.png';

const Skills = () => {
  return (
    <section id="skills">
        <span className="skillTitle">What i do</span>
        <span className="skillDesc">I am Skilled And Passionate Web Designer</span>

        <div className="skillBars">

            <div className="skillBar">
                <img src={UIDesign} alt="UIDesign/" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>UI/UX Design</h2>
                    <p>This is a demo text</p>
                </div>
            </div>

            <div className="skillBar">
                <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Web Design</h2>
                    <p>This is a demo text</p>
                </div>
            </div>

            <div className="skillBar">
                <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>App Design</h2>
                    <p>This is a demo text</p>
                </div>
            </div>
        </div>

    </section>
  )
}

export default Skills
