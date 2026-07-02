import React, { useState, useEffect } from 'react';
import { FaEnvelope, FaLinkedin, FaPhone } from 'react-icons/fa';
import { Check } from 'lucide-react';
import Stepper, { Step } from './Stepper';
import { db } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import Confetti from 'react-confetti';
import { motion, AnimatePresence } from 'framer-motion';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleSubmit = async () => {
    if (!name || !email || !message) {
      alert("Please fill in all required fields (Name, Email, Message).");
      return;
    }
    
    try {
      await addDoc(collection(db, 'messages'), {
        name,
        email,
        subject,
        message,
        timestamp: serverTimestamp()
      });
      setIsSuccess(true);
      // Reset form
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
      
      // Auto close after 6 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 6000);
    } catch (error) {
      console.error("Error adding document: ", error);
      alert('Failed to send message. Please try again later.');
    }
  };

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
                <span className="font-semibold text-sm md:text-base break-all">Padmesh M</span>
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
              onFinalStepCompleted={handleSubmit}
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
      
      {/* Success Modal */}
      <AnimatePresence>
        {isSuccess && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <Confetti
              width={windowSize.width}
              height={windowSize.height}
              recycle={false}
              numberOfPieces={600}
              gravity={0.15}
            />
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
              onClick={() => setIsSuccess(false)}
            />
            
            <motion.div
              initial={{ scale: 0.5, opacity: 0, y: 100 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.5, opacity: 0, y: 100 }}
              transition={{ type: "spring", damping: 20, stiffness: 200 }}
              className="relative bg-bgSecondary border border-borderColor p-8 md:p-12 rounded-3xl max-w-md w-full text-center shadow-2xl flex flex-col items-center z-10"
            >
              <div className="w-24 h-24 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mb-6 shadow-[0_0_40px_rgba(34,197,94,0.4)]">
                <Check size={48} strokeWidth={3} />
              </div>
              <h3 className="text-3xl md:text-4xl font-black text-white mb-4">Awesome!</h3>
              <p className="text-white/70 text-lg mb-8">
                Your message has been sent successfully. I'll get back to you soon!
              </p>
              <button 
                onClick={() => setIsSuccess(false)}
                className="bg-accentRed hover:bg-red-600 text-white font-bold text-lg py-4 px-10 rounded-full transition-colors w-full"
              >
                Close
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Contact;
