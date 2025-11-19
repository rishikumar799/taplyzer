
"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, Briefcase, Users, User, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Logo } from '@/components/logo';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './ui/collapsible';
import { ScrollArea } from './ui/scroll-area';

const mainLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
];

const companyLinks = [
  { href: '/about', label: 'About Us' },
  { href: '/blogs', label: 'Blog' },
  { href: '/contact-us', label: 'Contact Us' },
];

const solutionsLinks = [
    { href: '/business-owner', label: 'For Business Owners', description: 'Manage your brand & team at scale.', icon: <Briefcase className="h-5 w-5 text-primary" /> },
    { href: '/distributor', label: 'For Distributors', description: 'Grow with us as a partner.', icon: <Users className="h-5 w-5 text-primary" /> },
    { href: '/employee', label: 'For Employees', description: 'Network smarter, not harder.', icon: <User className="h-5 w-5 text-primary" /> },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSolutionsMenuOpen, setSolutionsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavLink = ({ href, children }: { href: string, children: React.ReactNode }) => (
    <Link href={href} className={cn(
      'text-sm font-medium hover:text-primary transition-colors',
      pathname === href ? 'text-primary' : 'text-muted-foreground'
    )}>
      {children}
    </Link>
  );

  const MobileNavLink = ({ href, children }: { href: string, children: React.ReactNode }) => (
    <Link href={href} className="block py-2 text-lg font-medium text-foreground hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
      {children}
    </Link>
  );

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-background/80 backdrop-blur-sm border-b' : 'bg-transparent'
      )}
      onMouseLeave={() => setSolutionsMenuOpen(false)}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Logo />
        <nav className="hidden md:flex items-center gap-8">
          {mainLinks.map((link) => (
            <NavLink key={link.href} href={link.href}>{link.label}</NavLink>
          ))}
          
          <div onMouseEnter={() => setSolutionsMenuOpen(true)}>
            <button className='flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-primary transition-colors'>
              Solutions <ChevronDown className="h-4 w-4" />
            </button>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className='flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-primary transition-colors'>
                Company <ChevronDown className="h-4 w-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {companyLinks.map((link) => (
                <DropdownMenuItem key={link.label} asChild>
                  <Link href={link.href}>{link.label}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>
        
        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost" asChild>
            <Link href="/login">Sign In</Link>
          </Button>
          <Button asChild>
            <Link href="/signup">Get Started</Link>
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs bg-background p-0">
              <div className="flex flex-col h-full">
                <div className="p-4 flex items-center border-b">
                  <Logo />
                </div>
                <ScrollArea className="flex-1">
                  <nav className="flex flex-col gap-4 p-6">
                    {mainLinks.map(link => <MobileNavLink key={link.href} href={link.href}>{link.label}</MobileNavLink>)}
                    
                    <Collapsible>
                      <CollapsibleTrigger className="flex items-center justify-between w-full py-2 text-lg font-medium text-foreground">
                        Solutions <ChevronDown className="h-5 w-5" />
                      </CollapsibleTrigger>
                      <CollapsibleContent className="pl-4">
                        {solutionsLinks.map(link => <MobileNavLink key={link.href} href={link.href}>{link.label}</MobileNavLink>)}
                      </CollapsibleContent>
                    </Collapsible>
                    
                    <Collapsible>
                      <CollapsibleTrigger className="flex items-center justify-between w-full py-2 text-lg font-medium text-foreground">
                        Company <ChevronDown className="h-5 w-5" />
                      </CollapsibleTrigger>
                      <CollapsibleContent className="pl-4">
                        {companyLinks.map(link => <MobileNavLink key={link.href} href={link.href}>{link.label}</MobileNavLink>)}
                      </CollapsibleContent>
                    </Collapsible>
                  </nav>
                </ScrollArea>
                <div className="mt-auto flex flex-col gap-4 p-6 border-t">
                  <Button variant="outline" asChild><Link href="/login" onClick={() => setIsMobileMenuOpen(false)}>Sign In</Link></Button>
                  <Button asChild><Link href="/signup" onClick={() => setIsMobileMenuOpen(false)}>Get Started</Link></Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
      
      {/* Mega Menu */}
      <AnimatePresence>
        {isSolutionsMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="absolute top-full left-0 right-0 hidden md:block"
            onMouseEnter={() => setSolutionsMenuOpen(true)}
            onMouseLeave={() => setSolutionsMenuOpen(false)}
          >
            <div className="bg-background/80 backdrop-blur-lg border-t">
              <div className="container mx-auto grid grid-cols-3 gap-8 px-6 py-8">
                {solutionsLinks.map(link => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="group rounded-lg p-6 hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex items-center gap-4 mb-2">
                        {link.icon}
                        <h3 className="text-base font-semibold text-foreground">{link.label}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">{link.description}</p>
                    <div className="mt-4 flex items-center text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        Learn more <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
