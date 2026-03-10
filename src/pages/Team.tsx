import { motion } from 'framer-motion';
import { User, Code, Zap, Shield, Sparkles } from 'lucide-react';

const members = [
  {
    name: '书棋',
    role: '锦囊妙计AI学院主理人',
    desc: '九大数字军师发明人',
    image: '/书棋.jpg',
    icon: Shield,
    color: 'text-primary-cyan',
    gradient: 'from-primary-cyan/20 to-blue-500/20'
  },
  {
    name: '贵哥',
    role: '技术交付与服务负责人',
    desc: '统筹全局服务',
    image: '/贵哥.jpg',
    icon: User,
    color: 'text-primary-magenta',
    gradient: 'from-primary-magenta/20 to-purple-500/20'
  },
  {
    name: '楚玲',
    role: 'AI整体应用专家',
    desc: '实战派，解决复杂应用场景',
    image: '/楚玲.jpg',
    icon: Zap,
    color: 'text-primary-purple',
    gradient: 'from-primary-purple/20 to-pink-500/20'
  },
  {
    name: '技术答疑团队',
    role: '技术答疑老师',
    desc: '何聪 / 飞宇 / 周惠 - 主力军，随时解决具体问题',
    image: '/技术答疑团队.jpg',
    icon: Code,
    color: 'text-white',
    gradient: 'from-white/10 to-gray-400/10'
  }
];

const Team = () => {
  return (
    <div className="pb-10 pt-4">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <div className="inline-block px-3 py-1 rounded-full border border-primary-cyan/30 bg-primary-cyan/10 mb-3 backdrop-blur-sm">
          <span className="text-primary-cyan font-bold text-[10px] tracking-widest flex items-center gap-1">
            <Sparkles size={10} /> AI GOLDEN DELIVERY TEAM
          </span>
        </div>
        <h2 className="text-2xl font-bold text-white text-shadow-neon">技术交付团队</h2>
        <p className="text-gray-400 text-sm mt-2 max-w-xs mx-auto">不仅是工具提供者，更是学习路上的护航者</p>
      </motion.div>

      <div className="grid gap-5">
        {members.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.15 }}
            className="relative group"
          >
            {/* Glow effect */}
            <div className={`absolute inset-0 bg-gradient-to-r ${member.gradient} rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
            
            <div className="relative bg-surface-light/40 backdrop-blur border border-white/10 p-4 rounded-xl flex items-center gap-4 hover:border-primary-cyan/30 hover:bg-surface-light/60 transition-all duration-300 shadow-lg">
              <div className={`relative w-16 h-16 rounded-full bg-surface-dark border-2 border-white/10 shadow-inner ${member.color} overflow-hidden flex-shrink-0 group-hover:border-opacity-50 transition-colors`}>
                {member.image ? (
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                     <member.icon size={28} />
                  </div>
                )}
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <h3 className={`text-lg font-bold ${member.color} mb-0.5`}>{member.name}</h3>
                </div>
                <p className="text-white text-sm font-medium mb-1">{member.role}</p>
                <p className="text-gray-400 text-xs leading-tight">{member.desc}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Team;
