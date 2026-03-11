/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, 
  Gamepad2, 
  Settings, 
  Info, 
  X, 
  Maximize2, 
  ChevronRight,
  ExternalLink,
  Ghost,
  ShieldCheck,
  Zap
} from 'lucide-react';

const GAMES = [
  {
    id: '1',
    title: 'Slope',
    thumbnail: 'https://picsum.photos/seed/slope/400/250',
    url: 'https://wayback.games/games/slope/index.html',
    category: 'Action'
  },
  {
    id: '2',
    title: '1v1.LOL',
    thumbnail: 'https://picsum.photos/seed/1v1/400/250',
    url: 'https://1v1.lol',
    category: 'Shooter'
  },
  {
    id: '3',
    title: 'Minecraft Classic',
    thumbnail: 'https://picsum.photos/seed/mc/400/250',
    url: 'https://classic.minecraft.net',
    category: 'Sandbox'
  },
  {
    id: '4',
    title: 'Retro Bowl',
    thumbnail: 'https://picsum.photos/seed/retro/400/250',
    url: 'https://wayback.games/games/retro-bowl/index.html',
    category: 'Sports'
  },
  {
    id: '5',
    title: 'BitLife',
    thumbnail: 'https://picsum.photos/seed/bitlife/400/250',
    url: 'https://wayback.games/games/bitlife/index.html',
    category: 'Simulation'
  },
  {
    id: '6',
    title: 'Cookie Clicker',
    thumbnail: 'https://picsum.photos/seed/cookie/400/250',
    url: 'https://orteil.dashnet.org/cookieclicker/',
    category: 'Idle'
  }
];

export default function App() {
  const [selectedGame, setSelectedGame] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('games');

  const filteredGames = GAMES.filter(game => 
    game.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#0f0f13] text-zinc-100 font-sans selection:bg-indigo-500/30">
      {/* Doge Proxy Style Background */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-600/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/10 blur-[120px] rounded-full" />
      </div>

      {/* Sidebar Navigation (Classic Proxy Layout) */}
      <aside className="fixed left-0 top-0 bottom-0 w-20 bg-[#16161e] border-r border-white/5 z-40 flex flex-col items-center py-8 gap-8">
        <div className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-600/20">
          <Ghost className="w-7 h-7 text-white" />
        </div>

        <nav className="flex flex-col gap-4 mt-8">
          {[
            { id: 'games', icon: Gamepad2, label: 'Games' },
            { id: 'proxy', icon: Zap, label: 'Proxy' },
            { id: 'settings', icon: Settings, label: 'Settings' },
            { id: 'about', icon: Info, label: 'About' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-200 group relative ${
                activeTab === item.id 
                  ? 'bg-indigo-600/20 text-indigo-400' 
                  : 'text-zinc-500 hover:bg-white/5 hover:text-zinc-300'
              }`}
            >
              <item.icon className="w-6 h-6" />
              <span className="absolute left-full ml-4 px-2 py-1 bg-zinc-800 text-xs rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap z-50">
                {item.label}
              </span>
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="pl-20 relative z-10">
        {/* Header / Search Bar */}
        <header className="p-8 flex flex-col items-center justify-center max-w-6xl mx-auto pt-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-black tracking-tighter mb-8 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent uppercase"
          >
            The Unity Project
          </motion.h1>

          <div className="relative w-full max-w-2xl group">
            <div className="absolute inset-0 bg-indigo-600/20 blur-xl opacity-0 group-focus-within:opacity-100 transition-opacity duration-500" />
            <div className="relative flex items-center bg-[#16161e] border border-white/10 rounded-2xl p-1 focus-within:border-indigo-500/50 transition-all shadow-2xl">
              <div className="pl-4 text-zinc-500">
                <Search className="w-5 h-5" />
              </div>
              <input 
                type="text" 
                placeholder="Search games or enter URL..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent border-none focus:ring-0 px-4 py-3 text-lg placeholder:text-zinc-600"
              />
              <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-3 rounded-xl font-bold transition-colors">
                Go
              </button>
            </div>
          </div>
        </header>

        {/* Games Grid */}
        <section className="max-w-7xl mx-auto px-8 pb-24">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <Gamepad2 className="w-6 h-6 text-indigo-500" />
              Trending Games
            </h2>
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-indigo-600/10 text-indigo-400 rounded-full text-xs font-bold border border-indigo-500/20">
                {filteredGames.length} Games
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredGames.map((game, index) => (
                <motion.div
                  key={game.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => setSelectedGame(game)}
                  className="group cursor-pointer"
                >
                  <div className="relative aspect-video rounded-2xl overflow-hidden bg-[#16161e] border border-white/5 group-hover:border-indigo-500/50 transition-all duration-300 shadow-lg">
                    <img 
                      src={game.thumbnail} 
                      alt={game.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                    
                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 transition-transform">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-indigo-400 mb-1">{game.category}</p>
                      <h3 className="text-lg font-bold truncate">{game.title}</h3>
                    </div>

                    <div className="absolute top-4 right-4 w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity scale-75 group-hover:scale-100 duration-300 shadow-xl">
                      <ChevronRight className="w-6 h-6" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </section>
      </main>

      {/* Game Iframe Overlay */}
      <AnimatePresence>
        {selectedGame && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#0f0f13] flex flex-col"
          >
            {/* Control Bar */}
            <div className="h-16 bg-[#16161e] border-b border-white/5 flex items-center justify-between px-6">
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                  <Gamepad2 className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2 className="font-bold text-sm leading-none">{selectedGame.title}</h2>
                  <p className="text-[10px] text-zinc-500 uppercase tracking-widest mt-1">Playing on Unity Project</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button 
                  onClick={() => window.open(selectedGame.url, '_blank')}
                  className="p-2 hover:bg-white/5 rounded-lg text-zinc-400 transition-colors"
                  title="Open in new tab"
                >
                  <ExternalLink className="w-5 h-5" />
                </button>
                <button className="p-2 hover:bg-white/5 rounded-lg text-zinc-400 transition-colors" title="Fullscreen">
                  <Maximize2 className="w-5 h-5" />
                </button>
                <div className="w-px h-6 bg-white/10 mx-2" />
                <button 
                  onClick={() => setSelectedGame(null)}
                  className="p-2 bg-red-500/10 hover:bg-red-500/20 text-red-500 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Iframe Container */}
            <div className="flex-1 bg-black relative">
              <iframe 
                src={selectedGame.url}
                className="w-full h-full border-none"
                allow="autoplay; fullscreen; keyboard"
                title={selectedGame.title}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer Info */}
      <footer className="pl-20 py-12 border-t border-white/5 bg-[#16161e]/50">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Ghost className="w-6 h-6 text-indigo-500" />
              <span className="font-black uppercase tracking-tighter text-xl">Unity Project</span>
            </div>
            <p className="text-sm text-zinc-500 leading-relaxed">
              The ultimate unblocked gaming destination. Fast, secure, and always online.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-bold text-sm uppercase tracking-widest text-zinc-400">Security</h4>
            <div className="flex items-center gap-3 text-sm text-zinc-500">
              <ShieldCheck className="w-5 h-5 text-emerald-500" />
              <span>SSL Encrypted Connection</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-zinc-500">
              <Zap className="w-5 h-5 text-amber-500" />
              <span>High-Speed Global CDN</span>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-sm uppercase tracking-widest text-zinc-400">Links</h4>
            <div className="flex flex-wrap gap-4 text-sm text-zinc-500">
              <a href="#" className="hover:text-indigo-400 transition-colors">Games</a>
              <a href="#" className="hover:text-indigo-400 transition-colors">Apps</a>
              <a href="#" className="hover:text-indigo-400 transition-colors">Discord</a>
              <a href="#" className="hover:text-indigo-400 transition-colors">GitHub</a>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-8 mt-12 pt-8 border-t border-white/5 text-center text-[10px] text-zinc-600 font-mono uppercase tracking-[0.2em]">
          © 2026 THE UNITY PROJECT // POWERED BY DOGE-CORE
        </div>
      </footer>
    </div>
  );
}
