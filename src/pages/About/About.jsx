import React from 'react'
import "./About.css"
const About = () => {
  return (
    <div className='body'>
      <h1>About NewsNest</h1>
      <p>Welcome to <strong>NewsNest</strong>, your personalized news aggregator. NewsNest delivers curated articles based on your preferences, helping you stay updated on what matters most.</p>

      <h2>Key Features</h2>
      <ul>
        <li><strong>Personalized news feeds</strong> based on categories, keywords, and regions.</li>
        <li><strong>Multi-language support</strong>: English, Spanish, French, and German.</li>
        <li><strong>Real-time updates</strong> using trusted APIs, including NYTimes.com for high-quality content.</li>
      </ul>

      <h2>Tech Stack</h2>
      <ul>
        <li><strong>Frontend</strong>: React.js</li>
        <li><strong>Backend</strong>: Node.js,Express.js,axios.js</li>
        <li><strong>Database</strong>: MongoDB</li>
        <li><strong>APIs</strong>: NYTimes.com</li>
      </ul>

      <h2>About the Developer</h2>
      <p>I’m a full-stack developer who built <strong>NewsNest</strong> to practice MERN stack skills and integrate APIs like NYTimes.com for delivering reliable and relevant news.</p>

      <h2>Contact Me</h2>
      <div class="contact-info">
        <p><strong>Email</strong>: <a href="mailto:arbazansari78692s@gmail.com">arbazansari78692s@gmail.com</a></p>
        <p><strong>GitHub</strong>: <a href="https://github.com/Arbaaz0009
" target="_blank">github.com/Arbaaz0009</a></p>
        <p><strong>LinkedIn</strong>: <a href="https://linkedin.com/in/arbaz-ansari-588181264" target="_blank">linkedin.com/in/arbazansari</a></p>
      </div>

      <hr />

    </div>
  )
}

export default About
