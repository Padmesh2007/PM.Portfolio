import React, { useState } from 'react';
import img1 from '../assets/anime_project_1.png';
import img2 from '../assets/anime_project_2.png';
import img3 from '../assets/anime_project_3.png';
import imgProfile from '../assets/anime_profile.png';

const certs = [
  { org: 'Canva', title: 'AI Skills for Students', date: 'Issued May 2026', cred: 'Credential ID 257757', skills: 'Artificial Intelligence (AI), Canva, +1 skill', img: img1 },
  { org: 'Wadhwani Foundation', title: 'Ignite Bootcamp - Idea to Plan', date: 'Issued Apr 2026', cred: 'Credential ID 69e705a91b', skills: 'Product Ideation, Prototyping, +3 skills', img: img2 },
  { org: 'LinkedIn', title: 'Practical GitHub Actions', date: 'Issued Apr 2026', cred: 'Credential ID e2ecdfb...', skills: 'GitHub', img: img3 },
  { org: 'LinkedIn', title: 'Learning Docker', date: 'Issued Mar 2026', cred: '', skills: 'Docker Products', img: imgProfile },
  { org: 'Infosys Springboard', title: 'HTML | SQL | Python | CSS | C++ & C | Linux', date: '', cred: '', skills: 'HTML, SQL, Python, CSS, C/C++, Linux', img: img1 },
  { org: 'Alison', title: 'Data, Databases & Mining | Digital Circuits', date: '', cred: '', skills: 'Databases, Digital Circuits', img: img2 },
  { org: 'HP Life', title: 'Effective Presentations | Leadership | Resume Writing', date: '', cred: '', skills: 'Presentations, Leadership, Soft Skills', img: img3 },
  { org: 'Great Learning', title: 'Front End Development | Fullstack Developer', date: '', cred: '', skills: 'Frontend, Fullstack Development', img: imgProfile },
  { org: 'TCS iON', title: 'IT for Non-IT', date: '', cred: '', skills: 'Information Technology', img: img1 },
  { org: 'Easy Learning', title: 'Soft Learning', date: '', cred: '', skills: 'Soft Skills', img: img2 },
];

const VISIBLE = 3;

const Experience = () => {
  const [certPage, setCertPage] = useState(0);
  const maxPage = certs.length - VISIBLE;
  const prevCert = () => setCertPage(p => Math.max(0, p - 1));
  const nextCert = () => setCertPage(p => Math.min(maxPage, p + 1));
  const visibleCerts = certs.slice(certPage, certPage + VISIBLE);

  return (
    <section id="experience">
      <div className="section-label reveal">Background</div>
      <h2 className="section-heading reveal delay-1">Experience &amp; Education</h2>

      <div className="exp-grid">
        <div>
          <h3 style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '2rem', color: 'var(--text-main)' }}>Work Experience</h3>
          <div className="exp-timeline">
            {[
              { date: 'Jan 2026 — Mar 2026', role: 'Software Team Lead Intern', company: 'Aethonix Solutions', bullets: ['Led development of 3 projects using web technologies and cloud tools', 'Worked with AWS (EC2, EKS) and Docker for deployment', 'Coordinated team tasks and ensured timely delivery'] },
              { date: 'May 2025 — Jun 2025', role: 'Hardware Intern', company: 'Doswin Computers', bullets: ['Hands-on experience in system assembly and troubleshooting'] },
            ].map((e, i) => (
              <div className="exp-entry reveal" key={i} style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="exp-dot"></div>
                <div className="exp-date">{e.date}</div>
                <div className="exp-role">{e.role}</div>
                <div className="exp-company">{e.company}</div>
                <ul className="exp-bullets">{e.bullets.map((b, j) => <li key={j}>{b}</li>)}</ul>
              </div>
            ))}
          </div>

          <h3 style={{ fontWeight: 700, fontSize: '1.1rem', marginTop: '3rem', marginBottom: '2rem', color: 'var(--text-main)' }}>Tech Talks &amp; Events</h3>
          <div className="exp-timeline">
            {[
              { date: 'Event Organizer', role: 'Student Volunteer', company: 'Science Club', bullets: ['Volunteered 4+ Events including Faculty Development Program'] },
              { date: 'Coordinator', role: 'Student Coordinator', company: 'SRCAS', bullets: ['Organized National Conference in SRCAS'] },
            ].map((e, i) => (
              <div className="exp-entry reveal" key={i} style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="exp-dot"></div>
                <div className="exp-date">{e.date}</div>
                <div className="exp-role">{e.role}</div>
                <div className="exp-company">{e.company}</div>
                <ul className="exp-bullets">{e.bullets.map((b, j) => <li key={j}>{b}</li>)}</ul>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '2rem', color: 'var(--text-main)' }}>Education</h3>
          <div className="exp-timeline">
            {[
              { date: 'Current', role: 'B.Sc Computer Technology', company: 'SRCAS', bullets: ['Current CGPA: 8.08 (80.8%)'] },
              { date: '2023 — 2024', role: 'Higher Secondary (Computer Science)', company: 'Bharathi Higher Secondary School, Namakkal', bullets: ['Percentage: 76%'] },
              { date: '2021 — 2022', role: 'SSLC', company: 'Bharathi Higher Secondary School, Namakkal', bullets: ['Percentage: 78%'] },
            ].map((e, i) => (
              <div className="exp-entry reveal" key={i} style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="exp-dot"></div>
                <div className="exp-date">{e.date}</div>
                <div className="exp-role">{e.role}</div>
                <div className="exp-company">{e.company}</div>
                <ul className="exp-bullets">{e.bullets.map((b, j) => <li key={j}>{b}</li>)}</ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Certifications — Flip Card Carousel */}
      <div style={{ marginTop: '5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
          <h3 style={{ fontWeight: 700, fontSize: '1.5rem', color: 'var(--text-main)' }}>Licenses &amp; Certifications</h3>
          <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'center' }}>
            <button onClick={prevCert} disabled={certPage === 0} style={{ width: '44px', height: '44px', borderRadius: '50%', border: '1.5px solid var(--border-color)', background: certPage === 0 ? 'var(--bg-secondary)' : 'var(--accent-red)', color: certPage === 0 ? 'var(--text-muted)' : '#fff', cursor: certPage === 0 ? 'default' : 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.3rem', transition: 'all 0.2s', fontWeight: 700 }}>‹</button>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', minWidth: '60px', textAlign: 'center' }}>{certPage + 1} / {maxPage + 1}</span>
            <button onClick={nextCert} disabled={certPage >= maxPage} style={{ width: '44px', height: '44px', borderRadius: '50%', border: '1.5px solid var(--border-color)', background: certPage >= maxPage ? 'var(--bg-secondary)' : 'var(--accent-red)', color: certPage >= maxPage ? 'var(--text-muted)' : '#fff', cursor: certPage >= maxPage ? 'default' : 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.3rem', transition: 'all 0.2s', fontWeight: 700 }}>›</button>
          </div>
        </div>

        {/* Flip Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          {visibleCerts.map((c, i) => (
            <div className="flip-card" key={`${certPage}-${i}`} style={{ height: '320px' }}>
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img src={c.img} alt={c.org} />
                  <div className="flip-card-front-label">{c.org}</div>
                </div>
                <div className="flip-card-back" style={{ justifyContent: 'flex-start', paddingTop: '2rem', gap: '0.6rem' }}>
                  <div style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--accent-red)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{c.org}</div>
                  <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-main)', lineHeight: 1.3 }}>{c.title}</div>
                  {c.date && <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{c.date}</div>}
                  {c.cred && <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', wordBreak: 'break-all' }}>{c.cred}</div>}
                  <div style={{ marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid var(--border-color)', fontSize: '0.82rem' }}>
                    <strong style={{ color: 'var(--text-main)' }}>Skills: </strong>
                    <span style={{ color: 'var(--text-muted)' }}>{c.skills}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dot indicators */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginTop: '2rem' }}>
          {Array.from({ length: maxPage + 1 }).map((_, i) => (
            <button key={i} onClick={() => setCertPage(i)} style={{ width: i === certPage ? '24px' : '8px', height: '8px', borderRadius: '4px', border: 'none', background: i === certPage ? 'var(--accent-red)' : 'var(--border-color)', cursor: 'pointer', transition: 'all 0.3s', padding: 0 }} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
