import React from 'react';
import CountUp from 'react-countup';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const statsData = [
  { label: 'Projects', value: 5, suffix: '+', isFloat: false },
  { label: 'Hackathons', value: 7, suffix: '+', isFloat: false },
  { label: 'Internships', value: 3, suffix: '', isFloat: false },
  { label: 'CGPA', value: 8.08, suffix: '', isFloat: true },
];

const Stats = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-12 relative z-10 bg-bgPrimary" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {statsData.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-cardBg border border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center text-center shadow-lg hover:border-accentRed transition-colors duration-300"
            >
              <div className="text-4xl md:text-5xl font-black text-white mb-2">
                {inView ? (
                  <CountUp
                    start={0}
                    end={stat.value}
                    duration={2.5}
                    decimals={stat.isFloat ? 2 : 0}
                    useEasing={true}
                  />
                ) : (
                  '0'
                )}
                <span className="text-accentRed">{stat.suffix}</span>
              </div>
              <div className="text-sm md:text-base font-semibold text-textMuted uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
