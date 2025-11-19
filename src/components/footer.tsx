
import { Logo } from '@/components/logo';
import Link from 'next/link';
import { Button } from './ui/button';
import { Twitter, Linkedin, Instagram, Facebook, Youtube, Mail } from 'lucide-react';

export function Footer() {
  const footerLinks = {
    Services: [
      { label: 'Features', href: '#features' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'Industries', href: '#industries' },
    ],
    Company: [
      { label: 'About Us', href: '/about' },
      { label: 'Portfolio', href: '/portfolio' },
      { label: 'Contact Us', href: '/contact-us' },
    ],
    Resources: [
      { label: 'Blogs', href: '/blogs' },
      { label: 'FAQ', href: '/user-manual' },
      { label: 'Help Center', href: '#' },
    ],
    Legal: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
    ],
  };

  const socialLinks = [
    { icon: <Instagram className="h-5 w-5" />, href: '#', 'aria-label': 'Instagram' },
    { icon: <Facebook className="h-5 w-5" />, href: '#', 'aria-label': 'Facebook' },
    { icon: <Youtube className="h-5 w-5" />, href: '#', 'aria-label': 'YouTube' },
    { icon: <Linkedin className="h-5 w-5" />, href: '#', 'aria-label': 'LinkedIn' },
    { icon: <Mail className="h-5 w-5" />, href: 'mailto:contact@taplyzer.com', 'aria-label': 'Email' },
  ];

  return (
    <footer className="bg-muted/40 border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1 space-y-4">
            <Logo />
            <p className="text-muted-foreground text-sm max-w-xs">
              Crafting Digital Connections. The smartest way to network and grow your brand.
            </p>
            <div className="flex space-x-2">
              {socialLinks.map((link, index) => (
                <Button key={index} variant="outline" size="icon" asChild>
                  <Link href={link.href} aria-label={link['aria-label']}>{link.icon}</Link>
                </Button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:col-span-2">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h3 className="font-semibold text-foreground mb-4">{title}</h3>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-muted-foreground hover:text-primary transition-colors text-sm"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-muted-foreground order-2 md:order-1">
            &copy; {new Date().getFullYear()} Taplyzer. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
