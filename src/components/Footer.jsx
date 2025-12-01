function Footer() {
  return(
    <footer className="footer">
      <div className="article">
        <figure>
          <img src="./assets/images/image-retro-pcs.jpg" alt="Image of retro pc" />
        </figure>
        <div className="article-info">
          <div className="article-number">
            <p>01</p>
          </div>
          <div className="article-title">
            <a href="#">Reviving Retro PCs</a>
          </div>
          <div className="article-summary">
            <p>What happens when old PCs are given modern upgrades?</p>
          </div>
        </div>
      </div>

      <div className="article">
        <figure>
          <img src="./assets/images/image-top-laptops.jpg" alt="Close up of keyboard" />
        </figure>
        <div className="article-info">
          <div className="article-number">
            <p>02</p>
          </div>
          <div className="article-title">
            <a href="#">Top 10 Laptops of 2022</a>
          </div>
          <div className="article-summary">
            <p>Our best picks for various needs and budgets.</p>
          </div>
        </div>
      </div>

      <div className="article">
        <figure>
          <img src="./assets/images/image-gaming-growth.jpg" alt="A playstation controller hovering above a persons hand" />
        </figure>
        <div className="article-info">
          <div className="article-number">
            <p>03</p>
          </div>
          <div className="article-title">
            <a href="#">The Growth of Gaming</a>
          </div>
          <div className="article-summary">
            <p>How the pandemic has sparked fresh opportunities.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;