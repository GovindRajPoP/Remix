import { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { testimonials } from '../data/testimonials';
import hero from '../assets/hero-dog.webp';
import puppy from '../assets/puppy-training.webp';
import adult from '../assets/adult-dog.webp';
import boarding from '../assets/puppy-boarding.webp';
import govind from '../assets/govind-photo.webp';
import logo from '../assets/logo-icon.webp';
import './mockup.css';

const website = 'https://www.pawsofpersistence.com';
const whatsapp = 'https://wa.me/918310406022?text=' + encodeURIComponent('Hello Govind, I’d like to enquire about dog training with Paws of Persistence. Could you please share details about your programmes and availability?');
const programmes = [
  { number: '01', title: 'A gentle start.', name: 'Puppy training', image: puppy, alt: 'Puppy training at Paws of Persistence', description: 'Build everyday habits, from toilet routines and settling to socialisation and first walks.', url: '/services/puppy-training-bangalore', tag: 'Puppy foundations' },
  { number: '02', title: 'Grow together.', name: 'Advanced obedience', image: adult, alt: 'Dog featured in the obedience programme', description: 'Build on the foundations with recall, loose-leash walking and focus around distractions.', url: '/services/advanced-obedience-training-bangalore', tag: 'Beyond the basics' },
  { number: '03', title: 'A little home away.', name: 'Puppy boarding', image: boarding, alt: 'Puppy featured in the boarding programme', description: 'Personal care and familiar routines in a home environment. Ask about suitability and availability.', url: '/services/puppy-boarding-bangalore', tag: 'Care & companionship' },
];
const questions = [
  ['Do you offer training at home?', 'Yes. Home training is available in Bengaluru. Share your locality and your dog’s age so Govind can confirm coverage and availability.'],
  ['What training approach do you use?', 'Training uses positive reinforcement, practical routines and guidance for pet parents. The plan is tailored to your dog and your everyday life.'],
  ['What should I share when I enquire?', 'Tell Govind your dog’s age, your Bengaluru locality and the main things you would like help with. This helps him recommend the next step.'],
  ['When can I contact you?', 'You can contact Paws of Persistence daily from 6 AM to 9 PM. Training sessions are by appointment.'],
];

function Mockup() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  return <div className="pop-design">
    <a className="skip-link" href="#main">Skip to content</a>
    <div className="preview-note">Design preview <span>•</span> Your live website is unchanged</div>
    <header className="site-header">
      <a className="brand" href="#" aria-label="Paws of Persistence home"><img src={logo} width="46" height="46" alt="" /><span>Paws of<br /><strong>Persistence</strong></span></a>
      <nav className="desktop-nav" aria-label="Main navigation"><a href="#programmes">Programmes</a><a href="#govind">Meet Govind</a><a href="#stories">Pet parents</a><a href="#questions">Questions</a></nav>
      <a className="header-cta" href={whatsapp}>Let’s talk <span aria-hidden="true">↗</span></a>
      <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="mobile-menu" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? 'Close' : 'Menu'} <span aria-hidden="true">{menuOpen ? '×' : '☰'}</span></button>
    </header>
    {menuOpen && <nav id="mobile-menu" className="mobile-menu" aria-label="Mobile navigation" onKeyDown={e => { if (e.key === 'Escape') closeMenu(); }}><a href="#programmes" onClick={closeMenu}>Programmes</a><a href="#govind" onClick={closeMenu}>Meet Govind</a><a href="#stories" onClick={closeMenu}>Pet parents</a><a href="#questions" onClick={closeMenu}>Questions</a><a href="#contact" onClick={closeMenu}>Get in touch</a></nav>}
    <main id="main">
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy"><p className="eyebrow">Dog & puppy training · Bengaluru</p><h1 id="hero-title">A happier life.<br />Together, <em>one paw<br className="desktop-break" /> at a time.</em></h1><p className="hero-intro">Patient, reward-based training for your dog.<br className="desktop-break" /> Practical guidance for you.</p><a className="button button-dark" href={whatsapp}>Talk to Govind <span aria-hidden="true">↗</span></a><a className="understated" href="#programmes">Find your programme <span aria-hidden="true">↓</span></a><p className="hero-footnote">At-home sessions · By appointment</p></div>
        <figure className="hero-image"><img src={hero} fetchPriority="high" width="1000" height="1200" alt="Wall-E, Govind’s Beagle" /><figcaption><span>Small steps. Stronger bonds.</span><span className="image-number">01 / EVERYDAY COMPANIONS</span></figcaption></figure>
      </section>
      <div className="approach-strip"><span>Positive reinforcement</span><span>Personal guidance</span><span>Built around real life</span></div>
      <section id="programmes" className="section programmes"><div className="section-heading"><div><p className="eyebrow">Room to learn. Space to grow.</p><h2>Every dog has<br />their own <em>starting point.</em></h2></div><p>New puppy? Growing confidence? Better everyday habits? Start with the support that fits your companion.</p></div>
        <div className="programme-grid">{programmes.map(p => <article className="programme" key={p.number}><a href={website + p.url} aria-label={'Explore ' + p.name}><div className="programme-photo"><img src={p.image} alt={p.alt} loading="lazy" width="600" height="650" /><span>{p.tag}</span></div><div className="programme-heading"><h3>{p.title}</h3><span aria-hidden="true">↗</span></div><p className="programme-name">{p.name}</p></a><p>{p.description}</p></article>)}</div>
        <p className="secondary-service">Memories worth keeping. <a href={website + '/services/pet-photography-bangalore'}>Explore pet photography <span aria-hidden="true">↗</span></a></p>
      </section>
      <section id="govind" className="trainer section"><div className="trainer-photo"><img src={govind} alt="Govind Raj, founder of Paws of Persistence" width="800" height="1000" loading="lazy" /><span>Govind Raj<br /><small>Trainer. Pet parent. Your guide.</small></span></div><div className="trainer-copy"><p className="eyebrow">A familiar face, every step</p><h2>Hello, I’m Govind.<br /><em>Let’s understand<br />your dog, together.</em></h2><p>Training is about the relationship you share with your dog. I help pet parents turn everyday moments into opportunities to learn—with patience, consistency and positive reinforcement.</p><p>As a pet parent to Beagles Wall-E and Mikasa, I know that every dog brings their own personality to the journey.</p><div className="credentials"><p><strong>Certified dog trainer</strong><span>K9 Companions, Pune</span></p><p><strong>Canine behaviour education</strong><span>Shirin Merchant’s Online Canine Behaviour Course</span></p></div><a className="text-link" href={website + '/about/govind'}>More about Govind <span aria-hidden="true">↗</span></a></div></section>
      <section className="section process"><p className="eyebrow">A simple beginning</p><h2>From your first hello<br />to <em>everyday progress.</em></h2><div className="process-grid">{[['01','Tell me about your dog','Share their age, your locality and what you’d like help with.'],['02','Find your starting point','Discuss a suitable programme and a plan for your daily routine.'],['03','Learn together','Practise with guidance, build consistency and take it one step at a time.']].map(([n,title,copy]) => <article key={n}><span className="step-number">{n}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></section>
      <section id="stories" className="section stories"><div className="section-heading"><div><p className="eyebrow">From the people who know us</p><h2>Real dogs.<br /><em>Real relationships.</em></h2></div><a className="text-link" href="https://maps.app.goo.gl/rMWXDCpK97k9AiNp6">View Google reviews <span aria-hidden="true">↗</span></a></div><div className="review-grid">{testimonials.slice(0,3).map(t => <figure className="review" key={t.name}><div className="stars" aria-label={t.rating + ' out of 5 stars'}>{'★'.repeat(t.rating)}</div><blockquote>{t.text}</blockquote><figcaption><strong>{t.name}</strong><span>{t.dog} · {t.area}</span></figcaption></figure>)}</div><a className="text-link all-reviews" href={website + '/testimonials'}>More from pet parents <span aria-hidden="true">↗</span></a></section>
      <section id="questions" className="section questions"><div><p className="eyebrow">Before we begin</p><h2>A few things<br /><em>you might wonder.</em></h2></div><div className="faq-list">{questions.map(([q,a]) => <details key={q}><summary>{q}<span aria-hidden="true">+</span></summary><p>{a}</p></details>)}</div></section>
      <section id="contact" className="contact section"><p className="eyebrow">Your next chapter starts here</p><h2>Tell me about<br /><em>your best friend.</em></h2><p>A little about your dog. A little about your day.<br />Let’s find a starting point together.</p><a className="button button-light" href={whatsapp}>Enquire on WhatsApp <span aria-hidden="true">↗</span></a><p className="contact-hours">6 AM–9 PM daily · Bengaluru · Sessions by appointment</p></section>
    </main>
    <footer className="footer"><div><strong>Paws of Persistence</strong><p>Patient training. Lasting bonds.</p></div><div><a href="tel:+918310406022">+91 83104 06022</a><p>Banashankari 3rd Stage, Bengaluru</p></div><div><a href={website + '/privacy-policy'}>Privacy</a><a href={website + '/blog'}>Training journal</a><a href={website}>Current website ↗</a></div></footer>
    {!menuOpen && <aside className="mobile-contact" aria-label="Quick contact"><a href="tel:+918310406022">Call Govind</a><a href={whatsapp}>WhatsApp <span aria-hidden="true">↗</span></a></aside>}
  </div>;
}

createRoot(document.getElementById('root')!).render(<Mockup />);
