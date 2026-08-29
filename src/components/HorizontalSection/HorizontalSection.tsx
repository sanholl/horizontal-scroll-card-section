import { initData } from "./data";

export function HorizontalSection() {
  return (
    <div className="horizontal-wrapper">
      <div className="sticky-pin">
        <div className="track-wrapper">
          <div className="track">
            {initData.map((section) => (
              <div key={section.id} className="section-wrapper">
                <div className="section-heading">
                  <h1>{section.title}</h1>
                  <p>{section.subtitle}</p>
                  <a href={section.moreHref}>더보기</a>
                </div>

                <div className="card-wrapper">
                  {section.cards.map((card) => (
                    <div key={card.id} className="card-item">
                      <div className="card-img">
                        <img src={card.image.src} alt={card.image.alt} />
                      </div>
                      <div className="card-content">
                        <span>{card.category}</span>
                        <h3>{card.title}</h3>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
