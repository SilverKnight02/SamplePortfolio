import React from 'react'
import './works.css';
import works from '../../assets/works.png';
import works1 from '../../assets/works1.png'

const Works = () => {
  return (
    <section id="works">
        <h2 className="worksTitle">My Portfolio</h2>
        <span className="worksDesc">I take pride in paying attention to the smallest details</span>
        <div className="worksImgs">
            <img src={works} alt="" className="worksImg" />
            <img src={works1} alt="" className="worksImg" />
            <img src={works} alt="" className="worksImg" />
            <img src={works1} alt="" className="worksImg" />
            <img src={works} alt="" className="worksImg" />
            <img src={works1} alt="" className="worksImg" />
        </div>
        <button className="workBtn">See More</button>
    </section>
  )
}

export default Works
