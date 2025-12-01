function HeroSection() {
  return(
    <div className="hero-section">
      <figure className="hero-image">
        <img src="./assets/images/image-web-3-desktop.jpg" alt="Shapes of assorted sizes"/>
      </figure>
      {/* Hero subsection goes here */}
      <div className="hero-subsection">
        <div className="hero-title">
          <h1>The Bright Future of Web 3.0?</h1>
        </div>
        <div className="hero-description">
          <p>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>
          <button className="hero-button">READ MORE</button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;