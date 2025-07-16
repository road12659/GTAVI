import React from 'react'

function Hero() {
  return (
    <section className="hero-section">
        <div className="size-full mask-wrapper">
           <img src="/images/hero-bg.webp" alt="hero-logo" />
           <img src="/images/hero-text.webp" alt="logo" className="title-logo fade-out" />
           <img src="/images/watch-trailer.png" alt="trailer" className="trailer-logo" />
        </div>
    </section>
  )
}

export default Hero
