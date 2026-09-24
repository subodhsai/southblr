const MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=Omega+IX+2655+17th+Main+Rd+Sahakar+Nagar+Bengaluru+Karnataka+560092'
const INSTAGRAM_URL = 'https://instagram.com/southblr.ent'

export default function EventDetails() {
  return (
    <section className="page">
      <div className="ev-hero">
        <img
          src="/events/pre-halloween.png"
          alt="Pre-Halloween Party at Omega IX"
          className="ev-hero-image"
        />

        <div className="ev-hero-inner">
          <p className="ev-presents mono">SOUTH BLR PRESENTS</p>
          <h1 className="ev-name display">
            PRE-HALLOWEEN
            <br />
            PARTY
          </h1>
          <p className="ev-venue mono">OMEGA IX &middot; BENGALURU</p>
        </div>
      </div>

      <div className="wrap section" style={{ paddingTop: 60 }}>
        <p className="eyebrow mono">THE EXPERIENCE</p>
        <p className="exp-copy">
          Get ready for the <strong>Pre-Halloween Party</strong> at Omega IX. Dress up, bring your
          crew and get ready for a night of Halloween vibes in South Bengaluru.
        </p>

        <div className="info-grid">
          <div className="info-cell">
            <div className="info-label mono">DATE</div>
            <div className="info-val">03 OCT 2026</div>
          </div>
          <div className="info-cell">
            <div className="info-label mono">TIME</div>
            <div className="info-val">8:00 PM onwards</div>
          </div>
          <div className="info-cell">
            <div className="info-label mono">VENUE</div>
            <div className="info-val">OMEGA IX</div>
          </div>
          <div className="info-cell">
            <div className="info-label mono">AGE</div>
            <div className="info-val">21+</div>
          </div>
        </div>
      </div>

      <div className="wrap section" style={{ paddingTop: 0 }}>
        <p className="eyebrow mono">TICKETS</p>
        <div className="ticket-grid">
          <div className="ticket-cell">
            <div className="tk-label mono">SINGLE</div>
            <div className="tk-price">&#8377;499</div>
            <div className="tk-desc">Entry for 1 person</div>
          </div>
          <div className="ticket-cell">
            <div className="tk-label mono">COUPLE</div>
            <div className="tk-price">&#8377;799</div>
            <div className="tk-desc">Entry for 2 people</div>
          </div>
        </div>
      </div>

      <div className="wrap section" style={{ paddingTop: 0 }}>
        <p className="eyebrow mono">WHERE IT&apos;S HAPPENING</p>
        <div className="location-box">
          <div className="loc-visual">
            <div className="pin" />
          </div>
          <h2 className="loc-venue-name display">OMEGA IX</h2>
          <p className="loc-address">
            2655, 17th Main Rd, near Kodigenahalli Gate,
            <br />
            Sahakar Nagar, Bengaluru, Karnataka 560092
          </p>
          <a className="btn btn-ghost" href={MAPS_URL} target="_blank" rel="noopener noreferrer">
            OPEN IN GOOGLE MAPS <span className="btn-arrow">&rarr;</span>
          </a>
        </div>
      </div>

      <div className="wrap cta-block">
        <p className="cta-title display">INTERESTED?</p>
        <p className="cta-sub">Want to attend the next South BLR experience?</p>
        <div className="cta-buttons">
          <a className="btn" href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
            DM @SOUTH.BLR
          </a>
          <a className="btn btn-ghost" href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
            FOLLOW SOUTH BLR
          </a>
        </div>
      </div>

      <div className="wrap ig-section">
        <p className="ig-handle mono">FOLLOW THE NIGHT &middot; @SOUTH.BLR</p>
        <p className="ig-words">
          Parties. People. Music.
          <br />
          South Bengaluru.
        </p>
        <a className="btn" href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
          FOLLOW ON INSTAGRAM <span className="btn-arrow">&rarr;</span>
        </a>
      </div>
    </section>
  )
}