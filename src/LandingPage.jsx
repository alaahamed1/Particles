import React, { useEffect } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import './LandingPage.css';

const ParticleBackground = () => {
  const Particlesinit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      className="particles-bg"
      init={Particlesinit}
      options={{
        particles: {
          number: {
            value: 90,
            density: { enable: true, value_area: 800 },
          },
          color: { value: '#ffffff' },
          shape: {
            type: 'circle',
            stroke: { width: 0, color: '#000000' },
          },
          opacity: { value: 0.5 },
          size: { value: 3, random: true },
          line_linked: { enable: true, distance: 150, color: '#ffffff', opacity: 0.4, width: 1 },
          move: { enable: true, speed: 3, out_mode: 'out' },
        },
        interactivity: {
          events: {
            onhover: { enable: true, mode: 'repulse' },
            onclick: { enable: true, mode: 'push' },
          },
        },
        retina_detect: true,
        background: { color: '#11243b' },
      }}
    />
  );
};

const LandingPage = () => {
  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector('nav');
      const secondSection = document.querySelector('.second-section');
      const secondSectionTop = secondSection.getBoundingClientRect().top;

      if (secondSectionTop <= 0) {
        nav.classList.add('sticky');
        nav.classList.add('opaque');
      } else {
        nav.classList.remove('sticky');
        nav.classList.remove('opaque');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      {/* First section with particles */}
      <section className="hero-section">
        <ParticleBackground />
        <div className="hero-content">
          <h1>Welcome to Our Website</h1>
          <p>Transforming Desert Lands with Solar Energy</p>
          <button>Learn More</button>
        </div>
        <nav>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>
        </nav>
      </section>

      {/* Second section */}
      <section className="second-section">
        <h2>About Us</h2>
        <p>More content here...</p>
      </section>
    </div>
  );
};

export default LandingPage;