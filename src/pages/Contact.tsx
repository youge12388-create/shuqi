import { motion } from 'framer-motion';
import { Phone, Clock, MessageSquare, Heart } from 'lucide-react';

const Contact = () => {
  return (
    <div className="pb-10 pt-4 space-y-8">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h2 className="text-2xl font-bold text-white mb-2">联系我们</h2>
        <p className="text-gray-400 text-sm">随时为您提供支持</p>
      </motion.div>

      {/* Service Hours */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="bg-surface-light/30 backdrop-blur border border-white/10 p-6 rounded-2xl text-center space-y-4"
      >
        <div className="w-12 h-12 bg-primary-purple/20 rounded-full flex items-center justify-center mx-auto text-primary-purple">
          <Clock size={24} />
        </div>
        <div>
          <h3 className="text-lg font-bold text-white">日常答疑时间</h3>
          <p className="text-primary-purple font-mono text-xl font-bold mt-1">09:00 — 22:00</p>
          <p className="text-gray-400 text-xs mt-2">非答疑时间提问，次日第一时间回复</p>
        </div>
      </motion.div>

      {/* Emergency Contact */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4 }}
        className="space-y-4"
      >
        <div className="flex items-center gap-2 mb-2">
          <div className="w-1 h-6 bg-primary-magenta rounded-full"></div>
          <h3 className="text-lg font-bold text-white">紧急问题处理</h3>
        </div>
        <p className="text-gray-400 text-sm mb-4">
          如果遇到严重影响工作的紧急技术问题，请直接拨打电话：
        </p>
        
        <div className="grid gap-4">
          <a href="tel:13265030834" className="block group">
            <div className="bg-gradient-to-r from-surface-light to-surface-dark border border-primary-magenta/30 p-4 rounded-xl flex items-center justify-between group-active:scale-95 transition-all hover:border-primary-magenta hover:shadow-[0_0_15px_rgba(255,79,195,0.3)]">
              <div className="flex items-center gap-3">
                <div className="bg-primary-magenta/20 p-2 rounded-lg text-primary-magenta">
                  <Phone size={20} />
                </div>
                <div>
                  <span className="text-gray-300 text-sm block">贵哥</span>
                  <span className="text-white font-mono font-bold">132-6503-0834</span>
                </div>
              </div>
              <span className="text-xs text-primary-magenta border border-primary-magenta/30 px-2 py-1 rounded">拨打</span>
            </div>
          </a>
          
          <a href="tel:13138760672" className="block group">
            <div className="bg-gradient-to-r from-surface-light to-surface-dark border border-primary-magenta/30 p-4 rounded-xl flex items-center justify-between group-active:scale-95 transition-all hover:border-primary-magenta hover:shadow-[0_0_15px_rgba(255,79,195,0.3)]">
              <div className="flex items-center gap-3">
                <div className="bg-primary-magenta/20 p-2 rounded-lg text-primary-magenta">
                  <Phone size={20} />
                </div>
                <div>
                  <span className="text-gray-300 text-sm block">楚玲</span>
                  <span className="text-white font-mono font-bold">131-3876-0672</span>
                </div>
              </div>
              <span className="text-xs text-primary-magenta border border-primary-magenta/30 px-2 py-1 rounded">拨打</span>
            </div>
          </a>
        </div>
      </motion.div>

      {/* Closing */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="text-center pt-8 pb-4"
      >
        <Heart className="w-8 h-8 text-primary-magenta mx-auto mb-4 animate-pulse" />
        <p className="text-gray-300 text-sm italic">
          "让每一位伙伴都能够真正学会AI、用好AI"
        </p>
        <p className="text-primary-cyan text-sm font-bold mt-2">
          锦囊妙计AI技术交付团队 敬上
        </p>
      </motion.div>
    </div>
  );
};

export default Contact;
