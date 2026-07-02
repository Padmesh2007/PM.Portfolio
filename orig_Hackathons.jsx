import React from 'react';
import CountUp from 'react-countup';
import hackBg from '../assets/hackathon_bg.png';
import hackAward from '../assets/hackathon_award.png';
import hackTeam from '../assets/hackathon_team.png';

const hackathons = [
  { event: 'IDE Bootcamp (AICTE)', org: 'Wadhwani Foundation', year: '2025 & 2026', status: 'finalist', label: 'Finalist' },
  { event: 'International Hackathon 360°', org: 'KPR Institute', year: '2025', status: 'participant', label: 'Participant' },
  { event: 'KreativeGenesis 2026', org: 'National Level', year: '2026', status: 'participant', label: 'Participant' },
  { event: 'Hacksprint 2.0', org: 'ForestShield AI Project', year: '2026', status: 'finalist', label: 'Finalist' },
  { event: 'Israel–India Global Innovation', org: 'International', year: '2026', status: 'participant', label: 'Participant' },
  { event: 'SRCAS 24-Hour Hackathon', org: 'SRCAS', year: '2025', status: 'winner', label: 'Runner-Up' },
];

const participants = [
  { event: 'Frontend Web Development Using React JS and Lovable AI', org: 'Workshop', year: '2025', status: 'participant', label: 'Participant' },
  { event: 'Agentic AI Day', org: 'Google Cloud & Hack2skill', year: '2025', status: 'participant', label: 'Participant' },
  { event: 'Web Technology Webinar', org: 'Study Comrade / Startup India', year: '2025', status: 'participant', label: 'Participant' },
  { event: 'Cloud Computing Architecture, Web hosting and AI model Deployment', org: 'Webinar', year: '2025', status: 'participant', label: 'Participant' },
];

const Hackathons = () => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -360 : 360;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="hackathons">
      <div className="section-label reveal">Competitions</div>
      <h2 className="section-heading reveal delay-1">Hackathons</h2>

      <div className="reveal delay-2" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginBottom: '4rem', marginTop: '2rem' }}>
        <div style={{ background: 'var(--bg-primary)', border: '1.5px solid var(--border-color)', borderRadius: '14px', padding: '2rem', textAlign: 'center', boxShadow: '0 4px 15px rgba(0,0,0,0.03)' }}>
           <div style={{ fontSize: '3.5rem', fontWeight: 800, color: 'var(--accent-red)', lineHeight: 1 }}><CountUp end={1} enableScrollSpy /></div>
           <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: 600, marginTop: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Israel-India Global<br/>Hackathon</div>
        </div>
        <div style={{ background: 'var(--bg-primary)', border: '1.5px solid var(--border-color)', borderRadius: '14px', padding: '2rem', textAlign: 'center', boxShadow: '0 4px 15px rgba(0,0,0,0.03)' }}>
           <div style={{ fontSize: '3.5rem', fontWeight: 800, color: 'var(--accent-red)', lineHeight: 1 }}><CountUp end={1} suffix="+" enableScrollSpy /></div>
           <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: 600, marginTop: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>International Level<br/>Hackathons</div>
        </div>
        <div style={{ background: 'var(--bg-primary)', border: '1.5px solid var(--border-color)', borderRadius: '14px', padding: '2rem', textAlign: 'center', boxShadow: '0 4px 15px rgba(0,0,0,0.03)' }}>
           <div style={{ fontSize: '3.5rem', fontWeight: 800, color: 'var(--accent-red)', lineHeight: 1 }}><CountUp end={5} suffix="+" enableScrollSpy /></div>
           <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: 600, marginTop: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>National Level<br/>Hackathons</div>
        </div>
      </div>

      {/* Fan image slider */}
      <div className="fan-slider-wrap reveal delay-2">
        {[hackBg, hackTeam, hackAward, hackTeam, hackBg].map((img, i) => {
          const angles = [-40, -20, 0, 20, 40];
          const zIndexes = [1, 2, 3, 2, 1];
          return (
            <div
              key={i}
              className="fan-card"
              style={{
                transform: `rotate(${angles[i]}deg)`,
                zIndex: zIndexes[i],
                left: '50%',
                marginLeft: `${(i - 2) * 70}px`,
              }}
            >
              <img src={img} alt={`hackathon-${i}`} />
            </div>
          );
        })}
      </div>

      <div className="hackathon-list reveal delay-2">
        <div className="hackathon-row" style={{ background: 'var(--bg-secondary)', fontWeight: 700, fontSize: '0.78rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
          <span>Event</span><span>Organizer</span><span>Year</span><span>Status</span>
        </div>
        {hackathons.map((r, i) => (
          <div className="hackathon-row" key={i}>
            <div className="hack-event" style={{ fontWeight: 600 }}>{r.event}</div>
            <div className="hack-org">{r.org}</div>
            <div className="hack-year">{r.year}</div>
            <div><span className={`hack-status status-${r.status}`}>{r.label}</span></div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: '5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2rem' }}>
          <div>
            <div className="section-label reveal delay-1">Workshops</div>
            <h2 className="section-heading reveal delay-2" style={{ marginBottom: 0 }}>Participants &amp; Webinars</h2>
          </div>
          <div style={{ display: 'flex', gap: '0.8rem' }}>
            <button onClick={() => scroll('left')} style={{ width: '40px', height: '40px', borderRadius: '50%', border: '1.5px solid var(--border-color)', background: 'var(--bg-primary)', color: 'var(--text-main)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>&lt;</button>
            <button onClick={() => scroll('right')} style={{ width: '40px', height: '40px', borderRadius: '50%', border: '1.5px solid var(--border-color)', background: 'var(--bg-primary)', color: 'var(--text-main)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>&gt;</button>
          </div>
        </div>
        
        <div ref={scrollRef} style={{ overflowX: 'auto', padding: '1rem 0', scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          <div style={{ display: 'flex', gap: '2rem', padding: '0 0.5rem' }}>
            {participants.map((r, i) => (
              <div key={i} style={{
                background: 'var(--bg-primary)', border: '1.5px solid var(--border-color)', borderRadius: '14px',
                padding: '1.5rem', width: '340px', display: 'flex', flexDirection: 'column', gap: '1rem',
                boxShadow: '0 4px 15px rgba(0,0,0,0.03)', transition: 'transform 0.2s', flexShrink: 0
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-4px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                <div style={{ fontWeight: 800, fontSize: '1.1rem', lineHeight: '1.3', color: 'var(--text-main)' }}>{r.event}</div>
                <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{r.org}</div>
                <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '1.5rem', borderTop: '1px solid var(--border-color)' }}>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 600 }}>{r.year}</span>
                  <span className={`hack-status status-${r.status}`}>{r.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hackathons;
