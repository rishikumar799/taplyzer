
'use client';
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
    PanelLeft,
    Menu,
    ChevronDown,
    Home,
    LineChart,
    Package2,
    ShoppingCart,
    MessageSquareWarning,
    MenuSquare
} from "lucide-react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { ScrollArea } from "./ui/scroll-area";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./ui/collapsible";
import React from "react";


const mainNavItems = [
    { href: "/admin/dashboard", icon: LayoutDashboard, label: "Dashboard" },
    { href: "/admin/dashboard/profile", icon: UserCircle, label: "Profile" },
];

const contentNavItems = [
    { href: "/admin/dashboard/about-us", icon: Info, label: "About Us" },
    { href: "/admin/dashboard/skills", icon: Lightbulb, label: "Skills & Projects" },
    { href: "/admin/dashboard/products", icon: Package, label: "Products" },
    { href: "/admin/dashboard/packages", icon: Boxes, label: "Packages" },
    { href: "/admin/dashboard/videos", icon: Youtube, label: "Videos" },
    { href: "/admin/dashboard/brochures", icon: FileText, label: "Brochures" },
    { href: "/admin/dashboard/quotations", icon: FilePlus, label: "Quotations" },
    { href: "/admin/dashboard/menu-items", icon: MenuSquare, label: "Menu Items" },
    { href: "/admin/dashboard/menu-cards", icon: BookOpen, label: "Menu Cards" },
    { href: "/admin/dashboard/slot-bookings", icon: Contact, label: "Slot Bookings" },
    { href: "/admin/dashboard/testimonials", icon: UserCircle, label: "Testimonials" },
    { href: "/admin/dashboard/contact-downloads", icon: Contact, label: "Contact Downloads" },
];

const featuresNavItems = [
    { href: "/admin/dashboard/services", icon: Server, label: "Services" },
    { href: "/admin/dashboard/gallery", icon: GalleryHorizontal, label: "Gallery" },
    { href: "/admin/dashboard/price-list", icon: List, label: "Price List" },
];

const settingsNavItems = [
    { href: "/admin/dashboard/seo", icon: Search, label: "SEO Management" },
    { href: "/admin/dashboard/color-palette", icon: Palette, label: "Color Palette" },
];

const helpNavItems = [
    { href: "/admin/dashboard/user-manual", icon: HelpCircle, label: "User Manual" },
    { href: "/admin/dashboard/imagekit-guide", icon: Image, label: "ImageKit Guide" },
]

const managementNavItems = [
    { href: "/admin/dashboard/users", icon: Users, label: "Users" },
    { href: "/admin/dashboard/settings", icon: Settings, label: "Settings" },
];


export function AdminDashboardLayout({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    const pathname = usePathname();

    const handleSignOut = async () => {
        router.push('/login');
    };

    const NavGroup = ({ title, items }: { title: string, items: { href: string; icon: React.ElementType; label: string }[] }) => (
        <Collapsible defaultOpen>
            <CollapsibleTrigger className="w-full">
                <div className="flex items-center justify-between px-4 py-2">
                    <h4 className="text-sm font-semibold text-muted-foreground">{title}</h4>
                    <ChevronDown className="h-4 w-4" />
                </div>
            </CollapsibleTrigger>
            <CollapsibleContent className="pl-4">
                {items.map(item => (
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
            </CollapsibleContent>
        </Collapsible>
    )

    const SidebarContent = () => (
        <div className="flex h-full max-h-screen flex-col gap-2">
            <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
                <Link href="/" className="flex items-center gap-2 font-semibold">
                    <Package2 className="h-6 w-6" />
                    <span className="">Taplyzer Inc</span>
                </Link>
            </div>
            <ScrollArea className="flex-1">
                <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
                    {mainNavItems.map(item => (
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
                    <NavGroup title="Content" items={contentNavItems} />
                    <NavGroup title="Features" items={featuresNavItems} />
                    <NavGroup title="Settings" items={settingsNavItems} />
                    <NavGroup title="Help" items={helpNavItems} />
                    <NavGroup title="Management" items={managementNavItems} />
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
                         <h1 className="text-xl font-semibold">
                            Admin Panel
                        </h1>
                    </div>
                    
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button
                                variant="secondary"
                                size="icon"
                                className="overflow-hidden rounded-full"
                            >
                                <Avatar>
                                    <AvatarImage src="https://picsum.photos/seed/admin-avatar/32/32" alt="Admin" data-ai-hint="man portrait"/>
                                    <AvatarFallback>A</AvatarFallback>
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
