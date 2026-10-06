import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <section className="page">
      <div className="hero">
        <div className="hero-field" />
        <p className="hero-mark mono">SOUTH BLR</p>

        <h1 className="hero-title display">
          THE NIGHT
          <br />
          STARTS HERE.
        </h1>

        <p className="hero-tagline">
          Events built for South Bengaluru.
        </p>

        <Link to="/Events" className="btn">
          EXPLORE EVENTS <span className="btn-arrow">&rarr;</span>
        </Link>
      </div>

      <div className="wrap section">
        <p className="eyebrow mono">FEATURED EVENT</p>

        <Link to="/Events/pre-halloween" className="event-card">
          <div className="event-image">
            <img
              src="/events/pre-halloween.png"
              alt="Pre-Halloween Party"
            />

            <span className="tag21 mono">21+</span>
          </div>

          <div className="event-body">
            <h2 className="event-title display">
              PRE-HALLOWEEN PARTY
            </h2>

            <p className="event-meta mono">
              BLAH BLA X &middot; YELAHANKA
            </p>

            <p className="event-datetime">
              10 OCT 2026
              <br />
              <span className="d2">2:00 PM – 7:00 PM</span>
            </p>

            <span className="event-cta mono">
              VIEW EVENT <span className="arr">&rarr;</span>
            </span>
          </div>
        </Link>
      </div>
    </section>
  )
}
