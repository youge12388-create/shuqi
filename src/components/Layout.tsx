import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';
import MusicPlayer from './MusicPlayer';

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans text-white pb-20">
      {/* Background elements - optional, can be enhanced with particles or svg */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-[url('/bg-grid.svg')] opacity-10"></div>
      
      <main className="flex-1 relative z-10 container mx-auto px-4 py-6 max-w-md">
        <Outlet />
      </main>

      <MusicPlayer />
      <Navigation />
    </div>
  );
};

export default Layout;
