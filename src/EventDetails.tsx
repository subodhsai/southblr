const MAPS_URL =
  'https://maps.app.goo.gl/tXv7WS2m6tKZzmiVA'
const INSTAGRAM_URL = 'https://instagram.com/southblr.ent'

export default function EventDetails() {
  return (
    <section className="page">
      <div className="ev-hero">
        <img
          src="/events/pre-halloween.png"
          alt="Pre-Halloween Party at BLAH BLA X"
          className="ev-hero-image"
        />

        <div className="ev-hero-inner">
          <p className="ev-presents mono">SOUTH BLR PRESENTS</p>
          <h1 className="ev-name display">
            PRE-HALLOWEEN
            <br />
            PARTY
          </h1>
          <p className="ev-venue mono">BLAH BLA X &middot; YELAHANKA</p>
        </div>
      </div>

      <div className="wrap section" style={{ paddingTop: 60 }}>
        <p className="eyebrow mono">THE EXPERIENCE</p>
        <p className="exp-copy">
          Get ready for the <strong>Pre-Halloween Party</strong> at BLAH BLA X.
          Dress up, bring your crew and get ready for a night of Halloween
          vibes in Bengaluru.
        </p>

        <div className="info-grid">
          <div className="info-cell">
            <div className="info-label mono">DATE</div>
            <div className="info-val">04 OCT 2026</div>
          </div>

          <div className="info-cell">
            <div className="info-label mono">TIME</div>
            <div className="info-val">7:30 PM – 11:30 PM</div>
          </div>

          <div className="info-cell">
            <div className="info-label mono">VENUE</div>
            <div className="info-val">BLAH BLA X</div>
          </div>

          <div className="info-cell">
            <div className="info-label mono">AGE</div>
            <div className="info-val">21+</div>
          </div>
        </div>
      </div>

      <div className="wrap section" style={{ paddingTop: 0 }}>
        <p className="eyebrow mono">WHERE IT&apos;S HAPPENING</p>

        <div className="location-box">
          <div className="loc-visual">
            <div className="pin" />
          </div>

          <h2 className="loc-venue-name display">BLAH BLA X</h2>

          <p className="loc-address">
            Mall of Asia,
            <br />
            Yelahanka, Bengaluru, Karnataka
          </p>

          <a
            className="btn btn-ghost"
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            OPEN IN GOOGLE MAPS <span className="btn-arrow">&rarr;</span>
          </a>
        </div>
      </div>

      <div className="wrap cta-block">
        <p className="cta-title display">INTERESTED?</p>
        <p className="cta-sub">
          Want to attend the next South BLR experience?
        </p>

        <div className="cta-buttons">
          <a
            className="btn"
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            DM @SOUTHBLR.ENT
          </a>

          <a
            className="btn btn-ghost"
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            FOLLOW SOUTHBLR.ENT
          </a>
        </div>
      </div>

      <div className="wrap ig-section">
        <p className="ig-handle mono">
          FOLLOW THE NIGHT &middot; @SOUTHBLR.ENT
        </p>

        <p className="ig-words">
          Parties. People. Music.
          <br />
          South Bengaluru.
        </p>

        <a
          className="btn"
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          FOLLOW ON INSTAGRAM <span className="btn-arrow">&rarr;</span>
        </a>
      </div>
    </section>
  )
}
