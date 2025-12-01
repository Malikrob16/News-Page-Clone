function NewsList() {
  return(
    <div className="news-list">
      <h2 className="newslist-header">
        New
      </h2>
      {/* News list items go here */}

      <div className="news-items">
        <div className="news-item">
          <div className="news-title">
            <a href="#">Hydrogen VS Electric Cars</a>
          </div>
          <div className="news-summary">
            <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
          </div>
        </div>

        <div className="news-item">
          <div className="news-title">
            <a href="#">The Downsides of AI Artistry</a>
          </div>
          <div className="news-summary">
            <p>What are the possible adverse effects of on-demand AI image generation?</p>
          </div>
        </div>

        <div className="news-item">
          <div className="news-title">
            <a href="#">Is VC Funding Drying Up?</a>
          </div>
          <div className="news-summary">
            <p>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default NewsList;