import React from 'react';
import { useState } from 'react';
import emailjs from "@emailjs/browser";
import './App.css'; // Import your CSS file here
import heroBgImage from '../src/assets/images/hero-bg.jpg';
import Iaeng from "../src/assets/images/iaeng.jpg"
import Blog1 from "../src/assets/images/blog-1.jpg"
import HeroBanner from "../src/assets/images/hero-banner.jpg"
import Portfolio1 from "../src/assets/images/portfolio-1.jpg"
import Portfolio3 from "../src/assets/images/portfolio-3.jpg"
import Portfolio4 from "../src/assets/images/portfolio-4.jpg"
import Portfolio2 from "../src/assets/images/portfolio-2.jpg"
import { MailOpenSharp } from 'react-ionicons'
import { PhonePortraitOutline } from 'react-ionicons'
import { LocationSharp } from 'react-ionicons'
import AA from "../src/assets/images/aa.jpg"
import AbsImg from "../src/assets/images/absolute-image.jpg"
import ScrollToTop from "react-scroll-to-top";
import { GitCompareOutline } from 'react-ionicons'
import { GitBranchOutline } from 'react-ionicons'
import { ArrowForwardSharp } from 'react-ionicons'

import { AnalyticsSharp } from 'react-ionicons'



function App() {

  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const HandleSubmit = (e) => {
    e.preventDefault();

    //email js service id, template id, public key
    const serviceId = 'service_whecm6a';
    const templateId = 'template_zhai9tk';
    const publicKey = 'xw99c06UwUfBK26Uz';

    //create object for naming 
    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: 'Sarthak Singh',
      message: message,
    };

    //send the email using EmailJs
    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully!", response);
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch((error) => {
        console.log("Error sending email:", error);
      })
  }


  return (
    <div >
      {/* Header */}
      <header className={`header ${isOpen ? 'nav-active' : 'header'}`} data-header>
        <div className="container">
          <a href="#">
            <h1 className="logo">Sarthak</h1>
          </a>
          <button
            className="nav-toggle-btn"
            aria-label="Toggle Menu"
            data-nav-toggle-btn
            onClick={toggleNavbar}
          >
            <ion-icon
              name={isOpen ? 'close-outline' : 'menu-outline'}
              className="menu-icon"
            ></ion-icon>
          </button>
          {/* Navigation */}
          <nav className={`navbar container ${isOpen ? 'nav-active' : 'navbar container'}`}>
            <ul className="navbar-list">
              <li>
                <a href="#home" className="navbar-link" data-nav-link>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="navbar-link" data-nav-link>
                  About
                </a>
              </li>
              <li>
                <a href="#portfolio" className="navbar-link" data-nav-link>
                  Projects
                </a>
              </li>
              <li>
                <a href="#skills" className="navbar-link" data-nav-link>
                  Skills
                </a>
              </li>
              <li>
                <a href="#contact" className="navbar-link" data-nav-link>
                  Contact
                </a>
              </li>
              <li>
                <a href="#blog" className="navbar-link" data-nav-link>
                  Societies
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/sarthak661"
                  className="navbar-link"
                  data-nav-link
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main>
        <ScrollToTop smooth color="#6f00ff" />
        <article>
          {/* Hero Section */}
          <section className="hero" id="home" style={{ backgroundImage: `url(${heroBgImage})` }}>

            <div className="container">
              <div className="hero-banner">

                <img src={HeroBanner} width="800" height="864" loading="lazy" alt="Ethan's Photo"
                  className="img-cover" />

              </div>
              {/* Hero Content */}
              <div className="hero-content">
                <h2 className="hero-title">
                  <span>Hello I'm</span>
                  <strong>Sarthak</strong>MERN Stack Developer From India
                </h2>
                <p className="hero-text">
                  A creative developer specializing in Frontend and Backend Web-Dev.
                </p>
                <div className="btn-group">
                  <a href="http://bit.ly/3EHSBz5" className="btn btn-primary blue">Download Resume</a>
                  <a href="#about" className="btn">About Me</a>
                </div>
              </div>
            </div>
          </section>

          {/* About Section */}
          <section className="section about" id="about">
            <div className="container">
              <figure className="about-banner">

                <img src={AA} width="800" height="652" loading="lazy" alt="Ethan's Photo"
                  className="img-cover" />

                <img src={AbsImg} width="800" height="717" loading="lazy" alt="Ethan's Photo"
                  className="abs-img" />

                <div className="abs-icon abs-icon-1">
                  <AnalyticsSharp
                    color={'#ffffff'}
                    title={""}
                    height="60px"
                    width="60px"
                  />
                </div>

                <div className="abs-icon abs-icon-2">
                  <GitCompareOutline
                    color={'#ffffff'}
                    title={""}
                    height="60px"
                    width="60px"
                  />
                </div>

                <div className="abs-icon abs-icon-3">
                  <GitBranchOutline
                    color={'#ffffff'}
                    title={""}
                    height="60px"
                    width="60px"
                  />
                </div>


              </figure>
              {/* About Content */}
              <div class="about-content">
                <p className="section-subtitle">Curious Fellow</p>
                <h2 className="h2 section-title">Exploring New Ideas</h2>
                <p className="section-text" style={{ textAlign: 'justify' }}>
                  I'm a dedicated developer currently pursuing <b>B.Tech degree</b> in <b>Information Technology</b> at{' '}
                  <b>Indian Institute of Information Technology, Una (Himachal Pradesh)</b>.
                </p>
                <p className="section-text" style={{ textAlign: 'justify' }}>
                  Passionate about web development using the MERN (MongoDB, Express.js, React, Node.js) and Next.js stack,
                  with a commitment to creating applications that enhance user experiences and address real-world challenges.
                  Over the past year, I have gathered extensive experience in various web development projects, Institute's
                  platforms, dynamic chat web application. My goal is to leverage my expertise to continue crafting
                  innovative solutions in the realm of MERN and Next.js stack web development, ultimately delivering valuable
                  digital experiences that benefit users.
                </p>
                <a href="#portfolio" className="btn btn-primary blue">View Projects</a>
              </div>
            </div>
          </section>

          {/* Blog Section */}
          <section className="section blog" id="blog">
            <div className="container">
              {/* Blog Content */}
              <p className="section-subtitle">Clubs and Societies</p>
              <h2 className="h2 section-title">Professional bodies Memberships</h2>
              {/* Blog List */}
              <ul className="blog-list">
                {/* Blog Card 1 */}
                <li>
                  <div className="blog-card">
                    <figure className="card-banner">
                      <a href="https://www.iaeng.org/">
                        <img
                          src={Iaeng}
                          width="1181"
                          height="843"
                          loading="lazy"
                          alt="Jim Morisson Says when the musics over turn off the light"
                          className="img-cover"
                        />
                      </a>
                    </figure>
                    <a className="card-tag">International Association of Engineers</a>
                    <h3 className="card-title">
                      <a>Member number: 348896</a>
                    </h3>
                  </div>
                </li>
                {/* Blog Card 2 */}
                <li>
                  <div className="blog-card">
                    <figure className="card-banner">
                      <a href="https://www.internetsociety.org/">
                        <img
                          src={Blog1}
                          width="1181"
                          height="843"
                          loading="lazy"
                          alt="Jim Morisson Says when the musics over turn off the light"
                          className="img-cover"
                        />
                      </a>
                    </figure>
                    <a className="card-tag">Internet Society</a>
                    <h3 className="card-title">
                      <a>Global Member</a>
                    </h3>
                  </div>
                </li>
                {/* More blog cards can be added here */}
              </ul>
            </div>
          </section>

          {/* Portfolio Section */}
          <section className="section portfolio" id="portfolio">
            <div className="container">
              {/* Portfolio Content */}
              <p className="section-subtitle">Domain Experience</p>
              <h2 className="h2 section-title">Projects</h2>
              <p className="section-text">
                These projects reflect my diverse experience in combining technology with real-world applications, with a
                focus on user interface development, efficient data management, and demonstrating proficiency in various web
                development technologies.
              </p>
              {/* Portfolio List */}
              <ul className="portfolio-list">
                {/* Portfolio Card 1 */}
                <li>
                  <div className="portfolio-card" style={{ backgroundImage: `url(${Portfolio1})` }}>
                    <div className="card-content">
                      <p className="card-subtitle">Hostel Website (IIITU)</p>
                      <h3 className="h3 card-title">
                        This platform replaces paper-based processes, enhancing efficiency and convenience. Simplifying
                        administrative work.
                      </h3>
                      <p className="card-subtitle">
                        Skills Used: HTML, CSS, JavaScript and Google-Firebase <br />
                        Hosted at <b>Github.com</b> <br />
                        <br />
                      </p>
                      <br />
                      <span className="btn-link">
                        <a href="https://sarthaksingh007.github.io/hostelwebsite/">
                          <span>Hosted Here</span>
                        </a>
                        <ArrowForwardSharp
                          color={'#df2a2a'}
                          title={""}
                          height="25px"
                          width="25px"
                        />
                      </span>
                      <br />
                      <span className="btn-link">
                        <a href="https://github.com/sarthaksingh007/hostelwebsite">
                          <span>Github</span>
                        </a>
                        <ArrowForwardSharp
                          color={'#df2a2a'}
                          title={""}
                          height="25px"
                          width="25px"
                        />
                      </span>
                      <br />
                    </div>
                  </div>
                </li>
                {/* Portfolio Card 2 */}
                <li>
                  <div className="portfolio-card" style={{ backgroundImage: `url(${Portfolio2})` }}>
                    <div className="card-content">
                      <p className="card-subtitle">
                        <strong>Talk About It</strong>
                      </p>
                      <h3 className="h3 card-title">Counselling Website</h3>
                      <p className="card-subtitle" style={{ color: '#ff0000' }}>
                        Frameworks: HTML, CSS, Bootstrap <br />
                        <b>JavaScript, ReactJs, NodeJs, ExpressJs, Web-socket</b>
                        <br />
                      </p>
                      <br />
                      <span className="btn-link">
                        <a href="https://github.com/sarthaksingh007/letsTalkaboutit">
                          <span>Github</span>
                        </a>
                        <ArrowForwardSharp
                          color={'#df2a2a'}
                          title={""}
                          height="25px"
                          width="25px"
                        />
                      </span>
                      <br />
                      <span className="btn-link">
                        <a href="https://lets-talk-about-it-31u8.onrender.com/">
                          <span>Hosted Here</span>
                        </a>
                        <ArrowForwardSharp
                          color={'#df2a2a'}
                          title={""}
                          height="25px"
                          width="25px"
                        />
                      </span>
                    </div>
                  </div>
                </li>

                <li>
                  <div class="portfolio-card" style={{ backgroundImage: `url(${Portfolio3})` }}>
                    <div class="card-content">

                      <p class="card-subtitle">Simple UI</p>

                      <h3 class="h3 card-title"></h3>

                      <p class="card-subtitle">Frameworks: ReactJs, ChartJs<br />
                        Hosted at <b>Github.com</b> <br /></p>
                      <span class="btn-link">
                        <a href="https://github.com/sarthaksingh007/project"><span>Github</span></a>

                        <ArrowForwardSharp
                          color={'#df2a2a'}
                          title={""}
                          height="25px"
                          width="25px"
                        />
                      </span><br />
                      <span class="btn-link">
                        <a href="https://sarthaksingh007.github.io/project/"><span>Hosted Here</span></a>

                        <ArrowForwardSharp
                          color={'#df2a2a'}
                          title={""}
                          height="25px"
                          width="25px"
                        />
                      </span>
                    </div>
                  </div>
                </li>

                <li>
                  <div class="portfolio-card" style={{ backgroundImage: `url(${Portfolio4})` }}>
                    <div class="card-content">

                      <p class="card-subtitle">Mind-WELL</p>

                      <h3 class="h3 card-title">Consultancy platform for mentally disturbed persons</h3>
                      <p class="card-subtitle"><b>Ongoing</b> <br />
                        Aims: Web-socket for user connection <br /> NodeJs for server, ReactJs for Frontend</p>
                      <span class="btn-link">
                        <a href="coming-soon.html"><span>Github</span></a>


                        <ArrowForwardSharp
                          color={'#df2a2a'}
                          title={""}
                          height="25px"
                          width="25px"
                        />
                      </span>

                    </div>
                  </div>
                </li>

                {/* More portfolio cards can be added here */}
              </ul>
            </div>
          </section>

          {/* Skills Section */}
          <section className="section skills" id="skills">
            <div className="container">
              {/* Skills Content */}
              <p className="section-subtitle">Skills</p>
              <h2 className="h2 section-title">Developing with Age</h2>
              <p className="section-text">
                The combination of technical expertise, interpersonal abilities, and problem-solving aptitude contributes to
                a well-rounded skillset that can lead to success in various aspects of life.
              </p>
              {/* Skills List */}
              <ul className="skills-list">
                <li className="skills-item">
                  <div className="skills-card" style={{ width: '95%' }}>
                    <p className="skills-title">
                      <strong>Tools</strong>
                    </p>
                    <p className="skills-text">
                      <b>VS-Code, Replit <br /> Latex, Github <br /> Matlab, Canva </b>
                    </p>
                  </div>
                </li>
                <li className="skills-item">
                  <div className="skills-card" style={{ width: '95%' }}>
                    <p className="skills-title">
                      <strong>Programming Languages</strong>
                    </p>
                    <p className="skills-text">
                      <b>JavaScript <br /> C <br /> C++</b>
                    </p>
                  </div>
                </li>
                <li class="skills-item">
                  <div class="skills-card" style={{ width: '95%' }}>
                    <p class="skills-title"><strong>Frameworks</strong></p>
                    <p class="skills-text"><b>ReactJs <br /> NextJs <br /> ExpressJs <br /> SASS</b> </p>
                  </div>
                </li>
                <li class="skills-item">
                  <div class="skills-card" style={{ width: '95%' }}>
                    <p class="skills-title"><strong>Tech Skills</strong></p>
                    <p class="skills-text"><b>HTML, CSS, JavaScript <br /> NodeJs, ExpressJs, Firebase <br />MongoDB, ReactJs,
                      NextJs <br />Bootstrap, JQuery, Web-socket </b></p>
                  </div>
                </li>
                <li class="skills-item">
                  <div class="skills-card" style={{ width: '95%' }}>
                    <p class="skills-title">Platforms</p>
                    <p class="skills-text"><b>Linux <br /> Windows</b> </p>
                  </div>
                </li>
                <li class="skills-item">
                  <div class="skills-card" style={{ width: '95%' }}>
                    <p class="skills-title"><strong>Coding Profiles</strong></p>
                    <p class="skills-text"> <a href="https://leetcode.com/sarthak_2022/">LeetCode</a></p>
                    <p class="skills-text"> <a href="https://auth.geeksforgeeks.org/user/sarthak_iiitu/">GeeksforGeeks</a>
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          {/* Contact Section */}
          <section className="section contact" id="contact">
            <div className="container">
              {/* Contact Content */}
              <div className="contact-card">
                {/* Contact Form */}
                <div className="wrapper">
                  <form onSubmit={HandleSubmit} className="contact-form">
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your Name" required className="contact-input" />
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required className="contact-input" />
                    <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Message" required className="contact-input"></textarea>
                    <button type="submit" className="btn-submit">Submit Message</button>
                  </form>
                  {/* Contact List */}
                  <ul className="contact-list">
                    <li className="contact-item">
                      <div className="contact-icon">
                        <LocationSharp
                          color={'#ffffff'}
                          title={""}
                          height="35px"
                          width="35px"
                        />
                      </div>
                      <div>
                        <h3 className="contact-item-title">Address</h3>
                        <address className="contact-item-link">Agra, Uttar Pradesh</address>
                      </div>
                    </li>
                    <li className="contact-item">
                      <div className="contact-icon">
                        <MailOpenSharp
                          color={'#ffffff'}
                          title={""}
                          height="35px"
                          width="35px"
                        />
                      </div>
                      <div>
                        <h3 className="contact-item-title">Email</h3>
                        <a href="mailto:sarthaksingh661@gmail.com" className="contact-item-link">sarthaksingh661@gmail.com</a>
                      </div>
                    </li>
                    <li className="contact-item">
                      <div className="contact-icon">
                        <PhonePortraitOutline
                          color={'#ffffff'}
                          title={""}
                          height="35px"
                          width="35px"
                        />
                      </div>
                      <div>
                        <h3 className="contact-item-title">Phone</h3>
                        <a href="tel:+917248132013" className="contact-item-link">+91 7248132013</a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </article>
      </main>

      {/* Footer */}
      <footer class="footer">
        <div class="container">

          <p class="copyright">
            &copy; 2023 <a href="/" class="copyright-link">Sarthak</a>. All Rights Reseverd
          </p>

          <ul class="footer-list">
            <li>
              <a href="/" class="footer-link">Terms & Condition</a>
            </li>

            <li>
              <a href="/" class="footer-link">Privacy Policy</a>
            </li>
          </ul>

        </div>
      </footer>
    </div>
  );
}

export default App;

