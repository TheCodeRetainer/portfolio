import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <header>
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/projects">Projects</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="about-section">
          <h1>About Me</h1>
          <div className="about-content">
            <div className="profile-img">
              <img src="/your-photo.jpg" alt="Your Profile" />
            </div>
            <div className="bio">
              <h2>Hi, I'm [Your Name]</h2>
              <p>
                I'm a passionate Web3 Developer specializing in building
                decentralized applications (dApps) and smart contracts. I have
                experience with blockchain technologies like Ethereum, Solana,
                and Polygon, and I love to create transparent, secure, and
                decentralized solutions.
              </p>
              <p>
                I am proficient in smart contract development using Solidity,
                Web3.js, and Ethers.js. I work on creating decentralized finance
                (DeFi) projects, NFTs, and much more. Let’s shape the future of
                the internet together!
              </p>
              <p>
                Feel free to explore my work or get in touch with me for
                collaboration and consulting.
              </p>
            </div>
          </div>
        </section>

        <section className="skills-section">
          <h2>My Skills</h2>
          <ul className="skills-list">
            <li>Smart Contract Development (Solidity, Vyper)</li>
            <li>Web3.js, Ethers.js</li>
            <li>Decentralized Finance (DeFi)</li>
            <li>NFTs (Non-Fungible Tokens)</li>
            <li>Blockchain Integration</li>
            <li>Solana, Ethereum, Polygon</li>
            <li>Frontend Development (React.js, HTML, CSS)</li>
          </ul>
        </section>
      </main>

      <footer>
        <p>&copy; 2024 [Your Name]. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default About;
