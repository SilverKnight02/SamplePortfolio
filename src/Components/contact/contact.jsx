import React from 'react';
import './contact.css';
import Adobe from '../../assets/Adobe-Logo.png';
import FaceBook from '../../assets/FaceBook.png';
import MicroSoft from '../../assets/MicroSoft.png';
import icon1 from '../../assets/icons-facebook.png';
import icon2 from '../../assets/icons-instagram.png';
import icon3 from '../../assets/icons-twitter.png';


const Contact = () => {
  return (
    <section id="ContactPage">
        <div id="Client">
            <h1 className="ContactPageTitle">My Clients</h1>
            <p className="ClientDesc">I have Opportunity to work with a diverse of companies</p>
            <div className="ClientImgs">
              <img src={FaceBook} alt="Clients" className="ClientImg" />
              <img src={Adobe} alt="Clients" className="ClientImg" />
              <img src={MicroSoft} alt="Clients" className="ClientImg" />
            </div>
        </div>

        <div id="Contact">
          <h1 className="ContactPageTitle">Contact Me</h1>
          <span className="ContactDesc">Please fill out the form belpw to discuss any work opportunities</span>
          <form className="ContactForm">
             <input type="text" className="name"  placeholder='Your Name'/>
             <input type="email" className="email"  placeholder='Your Email'/>
             <textarea className='msg' name="message" rows="5" placeholder='Your Message'></textarea>
             <button type='submit' value='send' className='SubmitBtn'>Submit</button>
             <div className="links">
              <img src={icon1} alt="FaceBook" className="link" />
              <img src={icon2} alt="Instagram" className="link" />
              <img src={icon3} alt="Twitter" className="link" />
             </div>
          </form>

        </div>

    </section>
  )
}

export default Contact
