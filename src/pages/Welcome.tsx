import { motion, Variants } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { welcomeContent } from '../data/welcomeContent';

const Welcome = () => {
  const navigate = useNavigate();
  
  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Faster stagger for long content
        delayChildren: 0.3
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  // Render helper
  const renderContent = (item: any, index: number) => {
    switch (item.type) {
      case 'title':
        return (
          <motion.h1 
            key={index} 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-cyan to-primary-magenta mb-6"
          >
            {item.content}
          </motion.h1>
        );
      case 'heading':
        return (
          <motion.h2 
            key={index} 
            variants={itemVariants}
            className="text-2xl md:text-3xl font-bold text-primary-cyan mt-8 mb-4 border-l-4 border-primary-magenta pl-3"
          >
            {item.content}
          </motion.h2>
        );
      case 'subheading':
        return (
          <motion.h3 
            key={index} 
            variants={itemVariants}
            className="text-xl font-semibold text-white mt-4 mb-2"
          >
            {item.content}
          </motion.h3>
        );
      case 'paragraph':
        return (
          <motion.p 
            key={index} 
            variants={itemVariants}
            className="text-gray-300 leading-relaxed mb-3 text-lg"
          >
            {item.content}
          </motion.p>
        );
      case 'list':
        return (
          <motion.ul 
            key={index} 
            variants={itemVariants}
            className="space-y-4 mb-6 ml-0"
          >
            {item.content.map((li: string, i: number) => (
              <li key={i} className="flex items-start gap-3 text-gray-300 text-lg">
                <span className="text-primary-magenta mt-1 shrink-0">•</span>
                <span className="leading-relaxed">{li}</span>
              </li>
            ))}
          </motion.ul>
        );
      case 'highlight':
        return (
          <motion.div 
            key={index} 
            variants={itemVariants}
            className="bg-surface-light/50 border border-primary-cyan/30 rounded-lg p-5 my-4 text-primary-cyan font-medium text-xl shadow-[0_0_20px_rgba(54,226,255,0.15)] backdrop-blur-sm hover:border-primary-cyan/60 hover:shadow-[0_0_25px_rgba(54,226,255,0.25)] transition-all duration-300"
          >
            {item.content}
          </motion.div>
        );
      case 'signature':
        return (
          <motion.div 
            key={index} 
            variants={itemVariants}
            className="text-right mt-10 mb-20 text-xl font-bold text-white whitespace-pre-line"
          >
            {item.content}
          </motion.div>
        );
      case 'separator':
        return (
          <motion.hr 
            key={index} 
            variants={itemVariants}
            className="border-white/10 my-8" 
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="relative z-10 max-w-2xl mx-auto px-6 py-12 pb-32">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="space-y-2"
        >
          {welcomeContent.map((item, index) => renderContent(item, index))}
          
          {/* Navigation Button at the bottom */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center pt-8"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(54, 226, 255, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/team')}
              className="px-8 py-3 bg-surface-light/80 backdrop-blur-md border border-primary-cyan text-primary-cyan font-bold rounded-full shadow-[0_0_10px_rgba(54,226,255,0.2)] flex items-center gap-2"
            >
              认识我们的团队 <ChevronRight size={18} />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
  );
};

export default Welcome;
