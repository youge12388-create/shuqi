import { NavLink } from 'react-router-dom';
import { Home, Users, BookOpen, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const Navigation = () => {
  const navItems = [
    { path: '/', icon: Home, label: '欢迎' },
    { path: '/team', icon: Users, label: '团队' },
    { path: '/services', icon: BookOpen, label: '服务' },
    { path: '/contact', icon: Phone, label: '联系' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-surface-dark/90 backdrop-blur-md border-t border-primary-cyan/20 pb-safe">
      <div className="flex justify-around items-center h-16 max-w-md mx-auto px-2">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `relative flex flex-col items-center justify-center w-full h-full py-1 transition-colors duration-300 ${
                isActive ? 'text-primary-cyan' : 'text-gray-400 hover:text-gray-200'
              }`
            }
          >
            {({ isActive }) => (
              <>
                {isActive && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute -top-[1px] w-8 h-[2px] bg-primary-cyan shadow-[0_0_10px_#36e2ff]"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <item.icon size={20} className={isActive ? "drop-shadow-[0_0_5px_rgba(54,226,255,0.5)]" : ""} />
                <span className="text-[10px] mt-1">{item.label}</span>
              </>
            )}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
