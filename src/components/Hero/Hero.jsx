import './Hero.scss'

export default function Hero() {
  return (
    <section className="hero-container">
      <h1 className="title is-1 hero-title">
        <span className="hero-span" style={{ fontSize: 200 }}>
          LotusPad
          {/* < p className="subtitle is-3 has-text-white hero-subtitle">
            Unleash Your Creativity.
          </p> */}
        </span>
      </h1 >
    </section>
  )
}
