
'use client';
import Link from "next/link"
import {
  LayoutDashboard,
  ShoppingCart,
  Users,
  TrendingUp,
  MessageSquareWarning,
  DollarSign,
  Settings,
  LogOut,
  Package2,
  AlertCircle,
  Menu,
  FileText,
  PlusCircle
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import { usePathname, useRouter } from "next/navigation"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Badge } from "./ui/badge";
import { Logo } from "./logo";
import { ScrollArea } from "./ui/scroll-area";

const navItems = [
    { href: "/distributor/dashboard", icon: LayoutDashboard, label: "Dashboard" },
    { href: "/distributor/dashboard/place-order", icon: PlusCircle, label: "Place Order" },
    { href: "/distributor/dashboard/orders", icon: ShoppingCart, label: "My Orders" },
    { href: "/distributor/dashboard/customers", icon: Users, label: "Customers" },
    { href: "/distributor/dashboard/revenue-tracking", icon: TrendingUp, label: "Revenue Tracking" },
    { href: "/distributor/dashboard/commission", icon: DollarSign, label: "Commission" },
    { href: "/distributor/dashboard/order-complaints", icon: AlertCircle, label: "Order Complaints" },
    { href: "/distributor/dashboard/raise-issue", icon: MessageSquareWarning, label: "Raise Issue" },
    { href: "/distributor/dashboard/settings", icon: Settings, label: "Settings" },
];

export function DistributorDashboardLayout({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    const pathname = usePathname();

    const handleSignOut = () => {
        router.push('/login');
    };

    const SidebarContent = () => (
         <div className="flex h-full max-h-screen flex-col gap-2 bg-muted/40 text-foreground">
            <div className="flex h-14 items-center border-b border-border px-4 lg:h-[60px] lg:px-6">
                <Logo />
            </div>
            <ScrollArea className="flex-1">
                 <div className="p-4">
                    <p className="font-semibold">Karunakarreddy Ka...</p>
                    <p className="text-xs text-muted-foreground">ID: DIST0089837X2</p>
                    <Badge variant="outline" className="mt-2 text-green-600 border-green-200 bg-green-50 dark:text-green-400 dark:border-green-800 dark:bg-green-900/20">Active</Badge>
                </div>
                <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
                     {navItems.map((item) => (
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
             <div className="mt-auto p-4 border-t border-border">
                 <Button size="sm" className="w-full mt-4" variant="outline" onClick={handleSignOut}>
                    <LogOut className="mr-2 h-4 w-4" />
                    Logout
                </Button>
            </div>
        </div>
    );

    return (
        <div className="grid min-h-screen w-full md:grid-cols-[240px_1fr] lg:grid-cols-[280px_1fr] bg-background">
            <div className="hidden border-r border-border md:block">
                <SidebarContent />
            </div>
            <div className="flex flex-col">
                <header className="flex h-14 items-center gap-4 border-b border-border bg-muted/40 px-6 lg:h-[60px] md:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button
                                variant="outline"
                                size="icon"
                                className="shrink-0"
                            >
                                <Menu className="h-5 w-5" />
                                <span className="sr-only">Toggle navigation menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="flex flex-col p-0 w-full max-w-sm">
                           <SidebarContent />
                        </SheetContent>
                    </Sheet>
                     <div className="w-full flex-1">
                        <h1 className="text-lg font-semibold">Distributor Portal</h1>
                    </div>
                </header>
                <div className="flex-1 overflow-auto p-4 md:p-8">
                    {children}
                </div>
            </div>
        </div>
    )
}
