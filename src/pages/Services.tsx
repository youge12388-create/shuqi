import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown, BookOpen, Rocket, Monitor } from 'lucide-react';

const faqs = [
  {
    question: '这个群是做什么的？',
    answer: '不仅是一个技术答疑群，更是一个AI学习与成长的深度社群。我们将为大家提供即时的技术支持、前沿AI工具分享以及实用的iPad与智能体应用技巧。',
    icon: HelpCircle
  },
  {
    question: '如果群里无法解决怎么办？',
    answer: '对于复杂问题、涉及隐私或需要演示的情况，我们会主动邀请添加老师的企业微信，进行一对一视频指导和远程演示，确保问题彻底解决。',
    icon: Monitor
  },
  {
    question: '配套课程学习安排',
    answer: '我们将统一开通《锦囊妙计·九大AI数字军师系统》视频课程。建议采用"边学习，边操作"的模式。完成学习目标还可申请解锁额外3套精品AI实战课程！',
    icon: BookOpen
  },
  {
    question: '30天AI成长陪跑计划',
    answer: '前30天每天早上10:00，群内分享一个核心知识点（1-3分钟）。只要坚持30天持续实践，您将熟练掌握iPad与AI工具的使用方法。',
    icon: Rocket
  }
];

const Services = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="pb-10 pt-4">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <h2 className="text-2xl font-bold text-white mb-2">服务说明</h2>
        <p className="text-gray-400 text-sm">全方位的学习支持体系</p>
      </motion.div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="overflow-hidden rounded-xl border border-white/10 bg-surface-light/30 backdrop-blur-sm"
          >
            <button
              onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              className="w-full flex items-center justify-between p-4 text-left transition-colors hover:bg-white/5"
            >
              <div className="flex items-center gap-3">
                <faq.icon className={`w-5 h-5 ${activeIndex === index ? 'text-primary-cyan' : 'text-gray-400'}`} />
                <span className={`font-medium ${activeIndex === index ? 'text-primary-cyan' : 'text-white'}`}>
                  {faq.question}
                </span>
              </div>
              <ChevronDown 
                className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`}
              />
            </button>

            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="px-4 pb-4 pt-0 text-sm text-gray-300 leading-relaxed border-t border-white/5 mt-2">
                    <div className="pt-4">
                      {faq.answer}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-8 p-4 rounded-lg bg-gradient-to-r from-primary-purple/10 to-primary-magenta/10 border border-primary-purple/20 text-center"
      >
        <p className="text-sm text-primary-purple font-medium">
          💡 小贴士：遇到问题请直接在群里提出，老师看到后会第一时间解答。
        </p>
      </motion.div>
    </div>
  );
};

export default Services;
