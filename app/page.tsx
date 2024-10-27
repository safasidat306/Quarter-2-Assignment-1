import React from 'react'
import Image from 'next/image'
const page = () => {
  return (
    <div>
      <header>
      <nav className="navbar">
                <div className="logo">NOTE:   Welcome to my portfolio!</div>
                <ul className="nav-links">
                    <li><a href="#about">About</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
            <div className="hero-content">
                <h1>SAFA NASIR SIDAT</h1>
                <p className="hero-tagline">Graphic Designer | Web Developer | Cloud Applied Generative Ai Student</p>
                <a href="#portfolio" className="cta-btn">Explore My Work</a>
            </div>
      </header>
      
        <section id="about" className="about-section">
            <h2><b>About</b></h2>
            <p className="about-text">I am a Software Engineering student with over 4 years of graphic design experience and a strong foundation in Web development. My expertise lies in blending creative design with cutting-edge technology to deliver stunning and functional web applications. I'm passionate about exploring cloud computing and Generative AI to push the boundaries of innovation.</p>
        </section>

        <section id="skills" className="skills-section">
            <h2><b>Skills</b></h2>
            <div className="skills-container">
                <div className="skill-card">
                    <h3>Graphic Design</h3>
                    <Image src="/that'sFinal.png" alt="Graphic Design" height="400" width="400"/>
                    <p>Creating clean and impactful designs for both digital and print media. Expertise in Adobe Creative Suite and Figma.</p>
                </div>
                <div className="skill-card2">
                    <h3>Web Development</h3>
                    <Image src="/webdev.jpeg" alt="Web Development" height="50" width={200}/>
                    <p>Building responsive and efficient web applications using modern technologies like React, Node.js, and Express.</p>
                </div>
                <div className="skill-card3">
                    <h3>Brand Identity</h3>
                    <Image src="/logo.png" alt="Brand Identity" height="100" width="100"/>
                    <p>Helping businesses create consistent and powerful brand identities through creative visual assets.</p>
                </div>
            </div>
        </section>

     
        <section id="portfolio" className="portfolio-section">
            <h2><b>Portfolio</b></h2>
            <div className="portfolio-gallery">
                <div className="portfolio-item">
                    <Image src="/editorial.jpg" alt="Editorial Design" height="50" width="50"/>
                    <h3>Editorial Design</h3>
                    <p>Art direction and layout design for a series of publications, including Tawlley and Mauro (2021).</p>
                </div>
                <div className="portfolio-item2">
                    <Image src="/web.webp" alt="Web Design" height="800" width="500"></Image>
                    <h3>Web Design</h3>
                    <p>End-to-end web design and development for a digital bookstore, Keel and Briar (2021).</p>
                </div>
                <div className="portfolio-item3">
                    <Image src="/poster.jpg" alt="Poster Design" height="500" width="500"></Image>
                    <h3>Poster Design</h3>
                    <p>Posters created for arts and culture clients, focusing on dynamic and engaging visuals (2022).</p>
                </div>
            </div>
        </section>

        <section id="contact" className="contact-section">
            <h2><b>Contact Me</b></h2>
            <p>If you'd like to collaborate on a project, feel free to reach out. I'm always open to discussing new opportunities.</p>
            <p>Email: <a href="mailto:hello@reallygreatsite.com">hello@reallygreatsite.com</a></p>
            <p>Phone: <a href="tel:+1234567890">+123-456-7890</a></p>
        </section>

      <footer className="footer">
            <p>© 2024 Safa Nasir Sidat. All Rights Reserved.</p>
        </footer>
    </div>
  )
}

export default page
