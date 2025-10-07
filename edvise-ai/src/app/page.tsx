"use client";
import Link from "next/link";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

// Ultra-premium standing book with realistic page-turning animations
function FloatingBook() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isTurning, setIsTurning] = useState(false);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTurning(true);
      setTimeout(() => {
        setCurrentPage(prev => (prev + 1) % 8);
        setIsTurning(false);
      }, 800);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <group rotation={[0, 0.2, 0]} position={[0, -0.5, 0]}>
      {/* Book base/stand */}
      <mesh position={[0, -0.8, 0]} rotation={[0, 0, 0]}>
        <boxGeometry args={[2.2, 0.1, 3.0]} />
        <meshStandardMaterial 
          color="#0a0f1a" 
          metalness={0.8} 
          roughness={0.2}
          emissive="#1a2332"
          emissiveIntensity={0.1}
        />
      </mesh>
      
      {/* Book spine - standing upright */}
      <mesh position={[-0.9, 0, 0]} rotation={[0, 0, 0]}>
        <boxGeometry args={[0.1, 1.6, 2.8]} />
        <meshStandardMaterial 
          color="#1a252f" 
          metalness={0.6} 
          roughness={0.4}
          emissive="#2c3e50"
          emissiveIntensity={0.05}
        />
      </mesh>
      
      {/* Book cover - standing */}
      <mesh position={[0, 0, 0]} rotation={[0, 0, 0]}>
        <boxGeometry args={[0.05, 1.6, 2.8]} />
        <meshStandardMaterial 
          color="#2c3e50" 
          metalness={0.4} 
          roughness={0.3}
          emissive="#3d8bff"
          emissiveIntensity={0.1}
        />
      </mesh>
      
      {/* Book title on spine */}
      <mesh position={[-0.85, 0.3, 0]} rotation={[0, 0, Math.PI/2]}>
        <boxGeometry args={[0.02, 0.8, 0.1]} />
        <meshStandardMaterial 
          color="#3d8bff" 
          metalness={0.8} 
          roughness={0.2}
          emissive="#3d8bff"
          emissiveIntensity={0.3}
        />
      </mesh>
      
      {/* Pages stack - standing */}
      <mesh position={[0.02, 0, 0]} rotation={[0, 0, 0]}>
        <boxGeometry args={[0.03, 1.5, 2.7]} />
        <meshStandardMaterial 
          color="#f8f9fa" 
          metalness={0.02} 
          roughness={0.9}
        />
      </mesh>
      
      {/* Individual pages with turning animation */}
      {Array.from({ length: 8 }).map((_, i) => {
        const isCurrentPage = i === currentPage;
        const isTurningPage = isCurrentPage && isTurning;
        const pageRotation = isTurningPage ? Math.PI * 0.8 : 0;
        const pageOffset = isTurningPage ? 0.1 : 0;
        
        return (
          <mesh 
            key={i}
            position={[0.05 + i * 0.002 + pageOffset, 0, 0]} 
            rotation={[0, pageRotation, 0]}
          >
            <boxGeometry args={[0.01, 1.4, 2.6]} />
            <meshStandardMaterial 
              color={isCurrentPage ? "#ffffff" : "#f0f0f0"} 
              metalness={0.01} 
              roughness={0.95}
              transparent
              opacity={isCurrentPage ? 1 : 0.8}
              emissive={isCurrentPage ? "#ffffff" : "#f8f9fa"}
              emissiveIntensity={isCurrentPage ? 0.1 : 0.02}
            />
          </mesh>
        );
      })}
      
      {/* Page content - only visible on current page */}
      {Array.from({ length: 12 }).map((_, i) => (
        <mesh 
          key={`content-${i}`}
          position={[
            0.08 + currentPage * 0.002, 
            -0.4 + i * 0.1, 
            -0.8
          ]} 
          rotation={[0, 0, 0]}
        >
          <boxGeometry args={[0.005, 0.08, 0.6]} />
          <meshStandardMaterial 
            color="#333333" 
            metalness={0.1} 
            roughness={0.8}
            transparent
            opacity={0.9}
          />
        </mesh>
      ))}
      
      {/* Floating page particles */}
      {Array.from({ length: 3 }).map((_, i) => (
        <mesh 
          key={`particle-${i}`}
          position={[
            0.3 + Math.sin(Date.now() * 0.001 + i) * 0.2, 
            0.2 + Math.cos(Date.now() * 0.001 + i) * 0.1, 
            -0.5 + Math.sin(Date.now() * 0.002 + i) * 0.3
          ]} 
          rotation={[
            Math.sin(Date.now() * 0.001 + i) * 0.2, 
            Math.cos(Date.now() * 0.001 + i) * 0.3, 
            Math.sin(Date.now() * 0.001 + i) * 0.1
          ]}
        >
          <boxGeometry args={[0.3, 0.005, 0.4]} />
          <meshStandardMaterial 
            color="#ffffff" 
            metalness={0.05} 
            roughness={0.9}
            transparent
            opacity={0.6}
            emissive="#ffffff"
            emissiveIntensity={0.2}
          />
        </mesh>
      ))}
      
      {/* Holographic projection effect */}
      <mesh position={[0.2, 0.8, 0]} rotation={[0, 0, 0]}>
        <boxGeometry args={[0.8, 0.01, 1.2]} />
        <meshStandardMaterial 
          color="#3d8bff" 
          metalness={0.9} 
          roughness={0.1}
          transparent
          opacity={0.3}
          emissive="#3d8bff"
          emissiveIntensity={0.5}
        />
      </mesh>
    </group>
  );
}

export default function Home() {
  // Avoid hydration mismatches: use deterministic seeded numbers instead of Math.random in render
  const seeded = (n: number) => {
    // Simple LCG for stable pseudo-random in [0,1)
    const a = 1664525;
    const c = 1013904223;
    const m = 2 ** 32;
    let x = (n * 9301 + 49297) % m;
    x = (a * x + c) % m;
    return (x >>> 0) / m;
  };

  // Gate truly dynamic client-only visuals if needed
  const [isClient, setIsClient] = useState(false);
  useEffect(() => setIsClient(true), []);
  return (
    <div className="min-h-dvh w-full relative overflow-hidden">
      {/* Ultra-premium floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 30 }).map((_, i) => {
          const s1 = seeded(i + 1);
          const s2 = seeded(i + 101);
          const s3 = seeded(i + 1001);
          const s4 = seeded(i + 10001);
          const s5 = seeded(i + 100001);
          const left = `${(s1 * 100).toFixed(3)}%`;
          const top = `${(s2 * 100).toFixed(3)}%`;
          const delay = `${(s3 * 6).toFixed(3)}s`;
          const duration = `${(4 + s4 * 4).toFixed(3)}s`;
          const alpha = (0.3 + s5 * 0.4).toFixed(3);
          return (
            <div
              key={i}
              className="floating-particle neural-pulse"
              style={{
                left,
                top,
                animationDelay: delay,
                animationDuration: duration,
                background: `radial-gradient(circle, rgba(61, 139, 255, ${alpha}), transparent)`,
              }}
            />
          );
        })}
      </div>

      {/* Ultra-premium geometric shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="drift-element absolute top-20 left-10 w-20 h-20 border-2 border-[var(--primary)]/40 rounded-full neural-pulse" />
        <div className="drift-element absolute top-40 right-20 w-16 h-16 border-2 border-[var(--accent)]/40 rotate-45 quantum-shift" style={{ animationDelay: '5s' }} />
        <div className="drift-element absolute bottom-40 left-20 w-24 h-24 border-2 border-[var(--primary)]/30 rounded-full hologram-flicker" style={{ animationDelay: '10s' }} />
        <div className="drift-element absolute bottom-20 right-10 w-18 h-18 border-2 border-[var(--accent)]/35 rotate-12 neural-pulse" style={{ animationDelay: '15s' }} />
        
        {/* Additional premium shapes */}
        <div className="drift-element absolute top-60 left-1/2 w-12 h-12 border border-[var(--primary)]/20 rotate-45 quantum-shift" style={{ animationDelay: '8s' }} />
        <div className="drift-element absolute bottom-60 right-1/3 w-16 h-16 border border-[var(--accent)]/25 rounded-full hologram-flicker" style={{ animationDelay: '12s' }} />
      </div>

      {/* Holographic grid overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(rgba(61, 139, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(61, 139, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          animation: 'cyber-grid 30s linear infinite'
        }} />
      </div>

      <div className="absolute inset-0 opacity-40">
        <Canvas camera={{ position: [0, 0, 4], fov: 60 }}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[4, 6, 5]} intensity={1.2} />
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.4} />
          <FloatingBook />
        </Canvas>
      </div>

      {/* Ultra-premium data streams */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 8 }).map((_, i) => {
          const s = seeded(5000 + i);
          const duration = `${(3 + s * 2).toFixed(3)}s`;
          return (
            <div
              key={i}
              className="data-stream"
              style={{
                left: `${10 + i * 12}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: duration,
              }}
            />
          );
        })}
      </div>

      {/* Neural network background */}
      <div className="absolute inset-0 neural-network-bg opacity-30 pointer-events-none" />

      <main className="relative z-10 flex flex-col items-center justify-center text-center px-6 pt-24 pb-16 md:pt-32 gap-8">
        {/* Ultra-premium status indicators */}
        <motion.div 
          className="flex items-center gap-4 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="holographic-card premium-hover flex items-center gap-2 px-4 py-2 rounded-full text-sm neural-pulse">
            <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-pulse"></div>
            <span className="text-green-300 futuristic-text">LIVE PLATFORM</span>
          </div>
          <div className="holographic-card premium-hover flex items-center gap-2 px-4 py-2 rounded-full text-sm quantum-shift">
            <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full"></div>
            <span className="text-blue-300 futuristic-text">AI POWERED</span>
          </div>
          <div className="holographic-card premium-hover flex items-center gap-2 px-4 py-2 rounded-full text-sm hologram-flicker">
            <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full"></div>
            <span className="text-purple-300 futuristic-text">FREE ACCESS</span>
          </div>
        </motion.div>

        <motion.h1
          className="text-5xl md:text-7xl font-bold cyber-text futuristic-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          EDVISE AI
        </motion.h1>
        
        <motion.div
          className="max-w-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-lg md:text-xl text-white/90 mb-6 leading-relaxed">
            Next-generation education counselling powered by advanced AI. Discover government colleges, scholarships, exams, and career pathways with unprecedented precision.
          </p>
          
          {/* Ultra-premium feature grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="holographic-card premium-hover p-4 rounded-xl">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-500 rounded-lg flex items-center justify-center">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div className="text-left">
                  <div className="text-green-300 font-semibold">Free Resources</div>
                  <div className="text-xs text-[var(--text-muted)]">Premium content</div>
                </div>
              </div>
            </div>
            
            <div className="holographic-card premium-hover p-4 rounded-xl">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-lg flex items-center justify-center">
                  <span className="text-white text-sm">👨‍🏫</span>
                </div>
                <div className="text-left">
                  <div className="text-blue-300 font-semibold">Expert Mentors</div>
                  <div className="text-xs text-[var(--text-muted)]">Industry leaders</div>
                </div>
              </div>
            </div>
            
            <div className="holographic-card premium-hover p-4 rounded-xl">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-500 rounded-lg flex items-center justify-center">
                  <span className="text-white text-sm">🤖</span>
                </div>
                <div className="text-left">
                  <div className="text-purple-300 font-semibold">AI Guidance</div>
                  <div className="text-xs text-[var(--text-muted)]">Machine learning</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="flex flex-col sm:flex-row gap-6 mt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Link
            href="/counselling"
            className="quantum-button premium-hover rounded-2xl px-8 py-4 text-lg font-bold text-white shadow-2xl"
          >
            <span className="relative z-10">START COUNSELLING</span>
          </Link>
          <Link
            href="/browse"
            className="holographic-card premium-hover rounded-2xl px-8 py-4 text-lg font-bold text-white border-2 border-[var(--primary)]/50"
          >
            <span className="relative z-10">BROWSE OPPORTUNITIES</span>
          </Link>
        </motion.div>

        <section className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full pt-8">
          {[
            { 
              title: "AI Guidance", 
              desc: "Personalised streams & subjects", 
              href: "/counselling",
              icon: "🤖",
              color: "from-blue-500/20 to-purple-500/20"
            },
            { 
              title: "College Finder", 
              desc: "Govt. colleges & seat insights", 
              href: "/browse",
              icon: "🏛️",
              color: "from-green-500/20 to-teal-500/20"
            },
            { 
              title: "Scholarships & Exams", 
              desc: "Deadlines & alerts", 
              href: "/tracker",
              icon: "🎓",
              color: "from-yellow-500/20 to-orange-500/20"
            },
            { 
              title: "Resource Hub", 
              desc: "Open-source eBooks & material", 
              href: "/resources",
              icon: "📚",
              color: "from-indigo-500/20 to-blue-500/20"
            },
            { 
              title: "AI Mentorship", 
              desc: "Match with expert mentors", 
              href: "/mentorship",
              icon: "👨‍🏫",
              color: "from-pink-500/20 to-rose-500/20"
            },
            { 
              title: "Skill Gap Analysis", 
              desc: "Personalized roadmap", 
              href: "/skills",
              icon: "📊",
              color: "from-cyan-500/20 to-blue-500/20"
            },
            { 
              title: "Resume Builder", 
              desc: "AI-powered CV templates", 
              href: "/resume",
              icon: "📄",
              color: "from-emerald-500/20 to-green-500/20"
            },
            { 
              title: "Achievements", 
              desc: "Badges & progress tracking", 
              href: "/achievements",
              icon: "🏆",
              color: "from-amber-500/20 to-yellow-500/20"
            },
            { 
              title: "EI Tracking", 
              desc: "Monitor stress & motivation", 
              href: "/ei-tracking",
              icon: "🧠",
              color: "from-violet-500/20 to-purple-500/20"
            },
            { 
              title: "Interactive Quizzes", 
              desc: "Fun concept reinforcement", 
              href: "/quizzes",
              icon: "❓",
              color: "from-red-500/20 to-pink-500/20"
            },
            { 
              title: "Confidence Tasks", 
              desc: "Progressive challenges", 
              href: "/confidence",
              icon: "💪",
              color: "from-orange-500/20 to-red-500/20"
            },
            { 
              title: "Exploration Mode", 
              desc: "Discover opportunities", 
              href: "/explore",
              icon: "🔍",
              color: "from-teal-500/20 to-cyan-500/20"
            },
            { 
              title: "Dashboard", 
              desc: "Personal progress overview", 
              href: "/dashboard",
              icon: "📈",
              color: "from-indigo-500/20 to-purple-500/20"
            },
          ].map((f, index) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link 
                href={f.href} 
                className="holographic-card premium-hover premium-glass rounded-3xl p-8 text-left group block"
              >
                <div className="flex items-start gap-6">
                  <div className={`feature-icon text-4xl p-4 rounded-2xl bg-gradient-to-br ${f.color} backdrop-blur-sm status-indicator neural-pulse`}>
                    {f.icon}
                  </div>
                  <div className="flex-1">
                    <div className="text-2xl font-bold mb-3 group-hover:text-[var(--primary)] transition-colors futuristic-text">
                      {f.title}
                    </div>
                    <div className="text-[var(--text-muted)] text-base leading-relaxed mb-4">
                      {f.desc}
                    </div>
                    <div className="flex items-center gap-3 text-sm text-[var(--primary)] font-semibold">
                      <span>EXPLORE FEATURE</span>
                      <span className="transform group-hover:translateX(2px) transition-transform">→</span>
                    </div>
                  </div>
                </div>
                
                {/* Ultra-premium progress indicator */}
                <div className="mt-6 h-1 bg-white/10 rounded-full overflow-hidden">
                    <div 
                    className="h-full bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] transition-all duration-1000"
                    style={{ width: `${(60 + seeded(9000 + index) * 40).toFixed(2)}%` }}
                  />
                </div>
              </Link>
            </motion.div>
          ))}
        </section>
      </main>
    </div>
  );
}
