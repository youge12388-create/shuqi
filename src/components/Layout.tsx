import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';
import MusicPlayer from './MusicPlayer';

const Layout = () => {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-[#0a0f1c] font-sans text-white pb-20">
      {/* Tech Blue Background */}
      {/* Base Deep Blue Gradient */}
      <div className="fixed inset-0 z-0 bg-gradient-to-br from-[#0a0f1c] via-[#0f172a] to-[#1e293b]" />
      
      {/* Animated Grid Background */}
      <div 
        className="fixed inset-0 z-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(54, 226, 255, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(54, 226, 255, 0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(circle at center, black 40%, transparent 100%)'
        }}
      />

      {/* Glowing Orbs */}
      <div className="fixed top-[-10%] right-[-10%] w-[500px] h-[500px] bg-primary-cyan/20 rounded-full blur-[100px] animate-pulse" />
      <div className="fixed bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary-magenta/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
      
      <main className="flex-1 relative z-10 container mx-auto px-4 py-6 max-w-md">
        <Outlet />
      </main>

      <MusicPlayer />
      <Navigation />
    </div>
  );
};

export default Layout;
