import React, { useState } from 'react';
import { FaEnvelope, FaLinkedin, FaPhone } from 'react-icons/fa';
import Stepper, { Step } from './Stepper';
const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  return (
    <section id="contact" className="py-32 px-6 lg:px-16 bg-bgSecondary relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-accentRed text-sm font-bold tracking-widest uppercase mb-4 reveal">Get In Touch</div>
        <h2 className="text-4xl md:text-6xl font-black text-white mb-16 reveal delay-1">Contact Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="reveal delay-1">
            <p className="text-base md:text-lg text-white/70 leading-relaxed mb-10">
              Open to full-time roles, freelance projects, and collaborative opportunities. Let's create something remarkable together.
            </p>
            <div className="flex flex-col gap-6">
              <a className="flex items-center gap-4 text-white hover:text-accentRed transition-colors group" href="mailto:padmeshmurugan07@gmail.com">
                <div className="w-12 h-12 rounded-full border border-borderColor bg-bgPrimary flex items-center justify-center text-accentRed group-hover:bg-accentRed group-hover:text-white transition-colors">
                  <FaEnvelope />
                </div>
                <span className="font-semibold text-sm md:text-base break-all">padmeshmurugan07@gmail.com</span>
              </a>
              <a className="flex items-center gap-4 text-white hover:text-accentBlue transition-colors group" href="https://linkedin.com/in/padmesh-m-3b8ba4314" target="_blank" rel="noreferrer">
                <div className="w-12 h-12 rounded-full border border-borderColor bg-bgPrimary flex items-center justify-center text-accentBlue group-hover:bg-accentBlue group-hover:text-white transition-colors">
                  <FaLinkedin />
                </div>
                <span className="font-semibold text-sm md:text-base break-all">linkedin.com/in/padmesh-m-3b8ba4314</span>
              </a>
              <a className="flex items-center gap-4 text-white hover:text-accentOrange transition-colors group" href="tel:9363983922">
                <div className="w-12 h-12 rounded-full border border-borderColor bg-bgPrimary flex items-center justify-center text-accentOrange group-hover:bg-accentOrange group-hover:text-white transition-colors">
                  <FaPhone />
                </div>
                <span className="font-semibold text-sm md:text-base">+91 93639 83922</span>
              </a>
            </div>
          </div>

          <div className="reveal delay-2">
            <Stepper
              initialStep={1}
              onFinalStepCompleted={() => alert('Message Sent!')}
              backButtonText="Previous"
              nextButtonText="Next"
              stepCircleContainerClassName="bg-bgPrimary border-borderColor"
            >
              <Step>
                <div className="flex flex-col gap-4 text-white">
                  <h3 className="text-2xl font-bold mb-2">Who are you?</h3>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-textMuted uppercase tracking-widest">Your Name</label>
                    <input value={name} onChange={(e) => setName(e.target.value)} className="w-full bg-bgSecondary border border-borderColor rounded-xl px-4 py-3 text-white focus:border-accentRed focus:outline-none transition-colors" type="text" placeholder="John Smith" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-textMuted uppercase tracking-widest">Email Address</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} className="w-full bg-bgSecondary border border-borderColor rounded-xl px-4 py-3 text-white focus:border-accentRed focus:outline-none transition-colors" type="email" placeholder="john@company.com" />
                  </div>
                </div>
              </Step>
              <Step>
                <div className="flex flex-col gap-4 text-white">
                  <h3 className="text-2xl font-bold mb-2">What's this about?</h3>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-textMuted uppercase tracking-widest">Subject</label>
                    <input value={subject} onChange={(e) => setSubject(e.target.value)} className="w-full bg-bgSecondary border border-borderColor rounded-xl px-4 py-3 text-white focus:border-accentRed focus:outline-none transition-colors" type="text" placeholder="Job Opportunity / Collaboration" />
                  </div>
                </div>
              </Step>
              <Step>
                <div className="flex flex-col gap-4 text-white">
                  <h3 className="text-2xl font-bold mb-2">Your Message</h3>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-textMuted uppercase tracking-widest">Message</label>
                    <textarea value={message} onChange={(e) => setMessage(e.target.value)} className="w-full bg-bgSecondary border border-borderColor rounded-xl px-4 py-3 text-white focus:border-accentRed focus:outline-none transition-colors min-h-[150px] resize-y" placeholder="Tell me about the project or role..."></textarea>
                  </div>
                </div>
              </Step>
              <Step>
                <div className="flex flex-col items-center justify-center gap-4 text-white text-center py-6">
                  <div className="w-16 h-16 bg-accentRed/20 text-accentRed rounded-full flex items-center justify-center text-3xl mb-2">
                    <FaEnvelope />
                  </div>
                  <h3 className="text-2xl font-bold">Ready to send?</h3>
                  <p className="text-textMuted text-sm">Click Complete to send your message.</p>
                </div>
              </Step>
            </Stepper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
