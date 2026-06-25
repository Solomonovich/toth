'use client';

import { useState, useEffect } from 'react';
import { motion, useMotionValueEvent, useScroll, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { HeartHandshake } from 'lucide-react';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import { navLinks as NAV_LINKS } from '@/lib/site-config';

export function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'xlarge'>('normal');

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 20);
  });

  // Sync font size from localStorage
  useEffect(() => {
    const savedSize = localStorage.getItem('toth-font-size') as 'normal' | 'large' | 'xlarge';
    if (savedSize && ['normal', 'large', 'xlarge'].includes(savedSize)) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time sync of UI state from localStorage after mount
      setFontSize(savedSize);
      document.documentElement.setAttribute('data-font-size', savedSize);
    } else {
      document.documentElement.setAttribute('data-font-size', 'normal');
    }
  }, []);

  const handleFontSizeChange = (size: 'normal' | 'large' | 'xlarge') => {
    setFontSize(size);
    localStorage.setItem('toth-font-size', size);
    document.documentElement.setAttribute('data-font-size', size);
  };

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  function handleNavClick(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
    setIsMenuOpen(false);
    
    if (href.startsWith('/#')) {
      const anchor = href.substring(1); // e.g. "#about"
      if (pathname === '/') {
        e.preventDefault();
        setTimeout(() => {
          const el = document.querySelector(anchor);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
            history.replaceState(null, '', anchor);
          }
        }, isMenuOpen ? 150 : 0);
      } else {
        e.preventDefault();
        router.push(href);
      }
    } else if (href.startsWith('/')) {
      if (pathname === href) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        e.preventDefault();
        router.push(href);
      }
    }
  }

  return (
    <>
      <motion.header
        className={cn(
          "fixed top-4 md:top-6 left-0 right-0 mx-auto z-[100]",
          "flex items-center justify-between",
          "bg-background/70 backdrop-blur-xl border border-border/60 shadow-2xl shadow-black/10 dark:shadow-black/50",
          "rounded-full transition-[width,padding,background-color,border-color] duration-700",
          isScrolled 
            ? "w-[92%] md:w-fit md:max-w-5xl px-[12px] py-[6px] md:px-6 md:py-2.5" 
            : "w-[95%] md:w-fit md:max-w-5xl px-[16px] py-[10px] md:px-8 md:py-3.5"
        )}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          y: { duration: 1.2, type: "spring", bounce: 0.3 },
          opacity: { duration: 1.2 }
        }}
      >
          {/* Logo */}
          <Link
            href="/"
            onClick={(e) => {
              e.preventDefault();
              setIsMenuOpen(false);
              if (pathname === '/') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                history.replaceState(null, '', '/');
              } else {
                router.push('/');
              }
            }}
            className="relative z-10 flex items-center gap-2 group shrink-0 px-1 py-1"
          >
            <div className="bg-sapphire-600 p-1.5 rounded-lg text-white group-hover:bg-sapphire-700 transition-colors">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-sm md:text-base leading-none text-foreground tracking-tight">TOTH</span>
              <span className="text-[10px] text-sapphire-700 dark:text-sapphire-300 font-medium hidden sm:block">Senior Center</span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex gap-1 items-center bg-foreground/5 p-1 rounded-full border border-foreground/5 overflow-hidden">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="relative px-4 py-2 rounded-full text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
              >
                <span className="relative z-10 whitespace-nowrap">{link.name}</span>
              </a>
            ))}
          </nav>

          {/* Desktop CTA + Theme */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            {/* Font Size Adjuster */}
            <div className="flex items-center gap-1 bg-foreground/5 p-1 rounded-full border border-border/50 overflow-hidden">
              <button
                onClick={() => handleFontSizeChange('normal')}
                className={cn(
                  "w-7 h-7 rounded-full text-xs font-semibold flex items-center justify-center transition-all cursor-pointer",
                  fontSize === 'normal' 
                    ? "bg-sapphire-600 text-white shadow-sm" 
                    : "text-foreground/75 hover:bg-foreground/10"
                )}
                title="Normal Text Size"
                aria-label="Normal Text Size"
              >
                A
              </button>
              <button
                onClick={() => handleFontSizeChange('large')}
                className={cn(
                  "w-7 h-7 rounded-full text-sm font-semibold flex items-center justify-center transition-all cursor-pointer",
                  fontSize === 'large' 
                    ? "bg-sapphire-600 text-white shadow-sm" 
                    : "text-foreground/75 hover:bg-foreground/10"
                )}
                title="Large Text Size"
                aria-label="Large Text Size"
              >
                A+
              </button>
              <button
                onClick={() => handleFontSizeChange('xlarge')}
                className={cn(
                  "w-7 h-7 rounded-full text-base font-bold flex items-center justify-center transition-all cursor-pointer",
                  fontSize === 'xlarge' 
                    ? "bg-sapphire-600 text-white shadow-sm" 
                    : "text-foreground/75 hover:bg-foreground/10"
                )}
                title="Extra Large Text Size"
                aria-label="Extra Large Text Size"
              >
                A++
              </button>
            </div>

            <Link
              href="/#membership"
              onClick={(e) => handleNavClick(e, '/#membership')}
              className="px-5 py-2 rounded-full bg-sapphire-600 hover:bg-sapphire-700 text-white font-medium text-sm transition-all shadow-sm hover:shadow-md"
            >
              Join Today
            </Link>
            <ThemeToggle />
          </div>

          {/* Mobile: Theme + Hamburger */}
          <div className="flex md:hidden items-center gap-[6px] shrink-0">
            <ThemeToggle />
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="w-[40px] h-[40px] flex items-center justify-center text-foreground rounded-full hover:bg-foreground/10 transition-colors active:scale-95 shrink-0 overflow-hidden relative"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
            >
              <div className="relative w-6 h-6 z-10">
                <motion.span
                  animate={isMenuOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -8 }}
                  className="absolute top-1/2 left-0 w-full h-0.5 bg-sapphire-500 rounded-full -translate-y-1/2 origin-center"
                />
                <motion.span
                  animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                  className="absolute top-1/2 left-0 w-full h-0.5 bg-sapphire-500 rounded-full -translate-y-1/2"
                />
                <motion.span
                  animate={isMenuOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 8 }}
                  className="absolute top-1/2 left-0 w-full h-0.5 bg-sapphire-500 rounded-full -translate-y-1/2 origin-center"
                />
              </div>
            </motion.button>
          </div>
        </motion.header>

      {/* Full Screen Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] bg-background/95 backdrop-blur-2xl md:hidden overflow-hidden flex flex-col items-center justify-center"
          >
            <nav className="relative z-10 flex flex-col gap-6 text-center p-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 }}
              >
                <Link
                  href="/"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsMenuOpen(false);
                    if (pathname === '/') {
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                      history.replaceState(null, '', '/');
                    } else {
                      router.push('/');
                    }
                  }}
                  className="text-3xl font-black uppercase tracking-tight text-foreground/50 active:text-sapphire-500 transition-colors"
                >
                  Home
                </Link>
              </motion.div>

              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * (i + 2) }}
                >
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-3xl font-black uppercase tracking-tight text-foreground active:text-sapphire-500 transition-colors"
                  >
                    {link.name}
                  </a>
                </motion.div>
              ))}

              {/* Mobile Font Size Selector */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
                className="mt-6 flex flex-col items-center gap-2"
              >
                <span className="text-xs font-semibold text-foreground/50 uppercase tracking-wider">Text Size</span>
                <div className="flex items-center gap-2 bg-foreground/5 p-1 rounded-full border border-border/50 overflow-hidden">
                  <button
                    onClick={() => handleFontSizeChange('normal')}
                    className={cn(
                      "px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer",
                      fontSize === 'normal' 
                        ? "bg-sapphire-600 text-white shadow-sm" 
                        : "text-foreground/75 hover:bg-foreground/10"
                    )}
                  >
                    A (Default)
                  </button>
                  <button
                    onClick={() => handleFontSizeChange('large')}
                    className={cn(
                      "px-4 py-2 rounded-full text-sm font-semibold transition-all cursor-pointer",
                      fontSize === 'large' 
                        ? "bg-sapphire-600 text-white shadow-sm" 
                        : "text-foreground/75 hover:bg-foreground/10"
                    )}
                  >
                    A+
                  </button>
                  <button
                    onClick={() => handleFontSizeChange('xlarge')}
                    className={cn(
                      "px-4 py-2 rounded-full text-base font-bold transition-all cursor-pointer",
                      fontSize === 'xlarge' 
                        ? "bg-sapphire-600 text-white shadow-sm" 
                        : "text-foreground/75 hover:bg-foreground/10"
                    )}
                  >
                    A++
                  </button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-4"
              >
                <Link
                  href="/#membership"
                  onClick={(e) => handleNavClick(e, '/#membership')}
                  className="px-12 py-4 bg-sapphire-600 text-white font-bold text-lg rounded-full uppercase tracking-tight active:bg-sapphire-700 transition-all shadow-lg inline-block"
                >
                  Join Today
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
