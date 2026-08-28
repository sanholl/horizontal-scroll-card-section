import { initData } from "./data";

export function HorizontalSection() {
  return (
    <section className="horizontal-section">
      {initData.map((section) => (
        <div key={section.id} className="section-wrapper">
          <div className="inner">
            <div className="row-content-group">
              <h2>{section.title}</h2>
              <p>{section.subtitle}</p>
              <a href={section.moreHref}>더 보기</a>
            </div>
          </div>

          
          <div className="track-wrapper">
            <div className="track">
              {section.cards.map((card) => (
                <div key={card.id} className="card-item">
                  <div className="card-img">
                    <img
                      src={card.image.src}
                      alt={card.image.alt}
                    />
                  </div>
                  <div className="column-content-group">
                    <span>{card.category}</span>
                    <h3>{card.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      
      ))}
    </section>
  );
}
