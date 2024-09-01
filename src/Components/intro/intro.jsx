import React from 'react'
import bg from '../../assets/image.jpeg';
import btnImg from '../../assets/hire-me.png';
import './intro.css';
import { Link } from 'react-scroll';


const Intro = () => {
  return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello !</span>
                <span className="introText">I'm <span className="introName">Saiparansothi</span><br />Website Designer</span>
                <p className="introPara">I'm skilled in Website Designing</p>
                <Link>
                <button className="btn">
                    <img src={btnImg} alt="Hire Me" className="btnImg" />Hire Me
                </button>
                </Link>
            </div>
            <img src={bg} alt="" className="bg" />
        </section>
  )
}

export default Intro;
