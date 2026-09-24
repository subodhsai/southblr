const PHONE_NUMBERS = [
  '+91 89512 27481',
  '+91 93877 63070',
  '+91 73495 01612',
]

const EMAIL = 'southblr.ent@gmail.com'

export default function Contact() {
  return (
    <section className="page">
      <div className="contact-page">
        <div className="contact-hero">
          <p className="eyebrow mono">GET IN TOUCH</p>

          <h1 className="contact-title display">
            CONTACT
            <br />
            SOUTH BLR.
          </h1>

          <p className="contact-subtitle">
            For event enquiries, collaborations, partnerships and anything
            South BLR.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-card">
            <p className="contact-label mono">CALL US</p>

            <div className="contact-list">
              {PHONE_NUMBERS.map((number) => (
                <a
                  key={number}
                  href={`tel:${number.replace(/\s/g, '')}`}
                  className="contact-link"
                >
                  {number}
                  <span>&rarr;</span>
                </a>
              ))}
            </div>
          </div>

          <div className="contact-card">
            <p className="contact-label mono">EMAIL</p>

            <a
              href={`mailto:${EMAIL}`}
              className="contact-link email-link"
            >
              {EMAIL}
              <span>&rarr;</span>
            </a>
          </div>
        </div>

        <div className="contact-bottom">
          <p className="contact-label mono">SOUTH BLR</p>

          <h2 className="display">
            LET'S MAKE
            <br />
            <span>SOMETHING HAPPEN.</span>
          </h2>
        </div>
      </div>
    </section>
  )
}