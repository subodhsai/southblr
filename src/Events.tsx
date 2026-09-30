import { Link } from 'react-router-dom'

export default function Events() {
  return (
    <section className="page">
      <div className="wrap section" style={{ paddingTop: 150 }}>
        <div className="section-head">
          <h1 className="section-title display">EVENTS</h1>
          <p className="section-sub">
            Nights worth remembering. Discover parties, nightlife and events happening
            across South Bengaluru.
          </p>
        </div>

        <div className="exp-grid">
          <Link to="/Events/pre-halloween" className="event-card">
            <div className="event-image">
              <img
                src="/events/pre-halloween.png"
                alt="Pre-Halloween Party"
              />
              <span className="tag21 mono">21+</span>
            </div>

            <div className="event-body">
              <h2 className="event-title display small">
                PRE-HALLOWEEN PARTY
              </h2>

              <p className="event-meta mono">
                BLAH BLA X &middot; MALL OF AISA, YELAHANKA
              </p>

              <p className="event-datetime tight">
                04 OCT 2026 &middot; 7:30 PM – 11:30 PM
              </p>

              <span className="event-cta mono">
                VIEW &rarr;
              </span>
            </div>
          </Link>

          <div className="exp-card soon">
            <p className="soon-title">
              COMING SOON
            </p>
          </div>
        </div>

        <p className="more-soon mono">
          MORE EVENTS COMING SOON
        </p>
      </div>
    </section>
  )
}
