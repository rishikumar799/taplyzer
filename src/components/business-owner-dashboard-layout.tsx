
'use client';
import Link from "next/link"
import {
    LayoutDashboard,
    UserCircle,
    Info,
    Lightbulb,
    Package,
    Boxes,
    Youtube,
    FileText,
    FilePlus,
    BookOpen,
    Contact,
    Server,
    GalleryHorizontal,
    List,
    Search,
    Palette,
    HelpCircle,
    Image,
    Users,
    Settings,
    LogOut,
    Menu,
    ChevronDown,
    Package2,
    MenuSquare,
    Globe
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import { usePathname, useRouter } from "next/navigation"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { ScrollArea } from "./ui/scroll-area"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./ui/collapsible"
import React from "react"
import { Logo } from "./logo"


const navItems = [
    { href: "/business-owner/dashboard", icon: LayoutDashboard, label: "Dashboard" },
    { href: "/business-owner/dashboard/taplyzer-hub", icon: Globe, label: "Taplyzer Hub" },
    { href: "/business-owner/dashboard/profile", icon: UserCircle, label: "Profile" },
    { href: "/business-owner/dashboard/about-us", icon: Info, label: "About Us" },
    { href: "/business-owner/dashboard/skills", icon: Lightbulb, label: "Skills & Projects" },
    { href: "/business-owner/dashboard/products", icon: Package, label: "Products" },
    { href: "/business-owner/dashboard/packages", icon: Boxes, label: "Packages" },
    { href: "/business-owner/dashboard/videos", icon: Youtube, label: "Videos" },
    { href: "/business-owner/dashboard/brochures", icon: FileText, label: "Brochures" },
    { href: "/business-owner/dashboard/quotations", icon: FilePlus, label: "Quotations" },
    { href: "/business-owner/dashboard/menu-items", icon: MenuSquare, label: "Menu Items" },
    { href: "/business-owner/dashboard/menu-cards", icon: BookOpen, label: "Menu Cards" },
    { href: "/business-owner/dashboard/slot-bookings", icon: Contact, label: "Slot Bookings" },
    { href: "/business-owner/dashboard/testimonials", icon: UserCircle, label: "Testimonials" },
    { href: "/business-owner/dashboard/contact-downloads", icon: Contact, label: "Contact Downloads" },
    { href: "/business-owner/dashboard/contact", icon: Contact, label: "Contact" },
    { href: "/business-owner/dashboard/services", icon: Server, label: "Services" },
    { href: "/business-owner/dashboard/gallery", icon: GalleryHorizontal, label: "Gallery" },
    { href: "/business-owner/dashboard/price-list", icon: List, label: "Price List" },
    { href: "/business-owner/dashboard/seo", icon: Search, label: "SEO Management" },
    { href: "/business-owner/dashboard/color-palette", icon: Palette, label: "Color Palette" },
    { href: "/business-owner/dashboard/user-manual", icon: HelpCircle, label: "User Manual" },
    { href: "/business-owner/dashboard/imagekit-guide", icon: Image, label: "ImageKit Guide" },
    { href: "/business-owner/dashboard/users", icon: Users, label: "Users" },
    { href: "/business-owner/dashboard/settings", icon: Settings, label: "Settings" },
];

export function BusinessOwnerDashboardLayout({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    const pathname = usePathname();

    const handleSignOut = () => {
        router.push('/login');
    };

    const SidebarContent = () => (
        <div className="flex h-full max-h-screen flex-col gap-2">
            <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
                <h1 className="text-xl font-semibold">Admin Panel</h1>
            </div>
            <ScrollArea className="flex-1">
                <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
                    {navItems.map(item => (
                        <Link
                            key={item.label}
                            href={item.href}
                            className={cn(
                                "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary",
                                pathname === item.href && "bg-muted text-primary"
                            )}
                        >
                            <item.icon className="h-4 w-4" />
                            {item.label}
                        </Link>
                    ))}
                </nav>
            </ScrollArea>
            <div className="mt-auto p-4">
                <Button size="sm" className="w-full" variant="outline" onClick={handleSignOut}>
                    <LogOut className="mr-2 h-4 w-4" />
                    Logout
                </Button>
            </div>
        </div>
    );

    return (
        <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
            <div className="hidden border-r bg-muted/40 md:block">
                <SidebarContent />
            </div>
            <div className="flex flex-col">
                <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button
                                variant="outline"
                                size="icon"
                                className="shrink-0 md:hidden"
                            >
                                <Menu className="h-5 w-5" />
                                <span className="sr-only">Toggle navigation menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="flex flex-col p-0">
                           <SidebarContent />
                        </SheetContent>
                    </Sheet>
                    <div className="w-full flex-1">
                        <Logo />
                    </div>
                    
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button
                                variant="secondary"
                                size="icon"
                                className="overflow-hidden rounded-full"
                            >
                                <Avatar>
                                    <AvatarImage src="https://picsum.photos/seed/owner-avatar/32/32" data-ai-hint="woman portrait"/>
                                    <AvatarFallback>BO</AvatarFallback>
                                </Avatar>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Settings</DropdownMenuItem>
                            <DropdownMenuItem>Support</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem onClick={handleSignOut}>Logout</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </header>
                <ScrollArea className="flex-1">
                    {children}
                </ScrollArea>
            </div>
        </div>
    )
}
