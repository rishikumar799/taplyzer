
'use client';
import {
  Activity,
  ArrowRight,
  Boxes,
  Contact,
  FileText,
  MessageSquare,
  Package,
  Users,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { BusinessOwnerDashboardLayout } from "@/components/business-owner-dashboard-layout"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";

const kpiData = [
    { title: "Contact Downloads", value: "0", subtitle: "People who saved your contact", icon: <Contact className="h-6 w-6 text-muted-foreground" /> },
    { title: "Contact Submissions", value: "0", subtitle: "Messages received", icon: <MessageSquare className="h-6 w-6 text-muted-foreground" /> },
    { title: "Testimonials", value: "0", subtitle: "Active testimonials", icon: <Users className="h-6 w-6 text-muted-foreground" /> },
    { title: "Slot Bookings", value: "0", subtitle: "Appointments booked", icon: <FileText className="h-6 w-6 text-muted-foreground" /> },
    { title: "Active Packages", value: "0", subtitle: "Available packages", icon: <Boxes className="h-6 w-6 text-muted-foreground" /> },
    { title: "Products", value: "0", subtitle: "Total products", icon: <Package className="h-6 w-6 text-muted-foreground" /> },
];

const quickActions = [
    { label: "Contact Downloads", icon: <Contact className="h-5 w-5" /> },
    { label: "Manage Testimonials", icon: <Users className="h-5 w-5" /> },
    { label: "Slot Bookings", icon: <FileText className="h-5 w-5" /> },
    { label: "Manage Packages", icon: <Package className="h-5 w-5" /> },
];


export default function BusinessOwnerDashboardPage() {
    return (
        <BusinessOwnerDashboardLayout>
            <main className="flex flex-1 flex-col gap-8 p-4 md:p-8">
                <div>
                    <h1 className="text-3xl font-semibold">Dashboard</h1>
                    <p className="text-muted-foreground">Welcome back! Here's what's happening with your app.</p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
                    {kpiData.map(item => (
                        <Card key={item.title}>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">
                                    {item.title}
                                </CardTitle>
                                {item.icon}
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">{item.value}</div>
                                <p className="text-xs text-muted-foreground">
                                    {item.subtitle}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="grid gap-8 lg:grid-cols-3">
                    <div className="lg:col-span-2 grid gap-8">
                        <Card>
                            <CardHeader>
                                <CardTitle>Overview</CardTitle>
                            </CardHeader>
                            <CardContent>
                            <Tabs defaultValue="timeline">
                                    <TabsList>
                                        <TabsTrigger value="timeline">Timeline</TabsTrigger>
                                        <TabsTrigger value="comparison">Comparison</TabsTrigger>
                                        <TabsTrigger value="distribution">Distribution</TabsTrigger>
                                    </TabsList>
                                    <TabsContent value="timeline" className="mt-4">
                                        <div className="h-72 w-full border-2 border-dashed rounded-lg flex items-center justify-center">
                                            <p className="text-muted-foreground text-sm">Chart data will be displayed here.</p>
                                        </div>
                                    </TabsContent>
                            </Tabs>
                                <div className="flex flex-wrap gap-x-6 gap-y-2 mt-4 text-sm">
                                    <Link href="#" className="flex items-center text-primary hover:underline"><ArrowRight className="h-4 w-4 mr-1"/>Contact Downloads</Link>
                                    <Link href="#" className="flex items-center text-primary hover:underline"><ArrowRight className="h-4 w-4 mr-1"/>Contact Submissions</Link>
                                    <Link href="#" className="flex items-center text-primary hover:underline"><ArrowRight className="h-4 w-4 mr-1"/>Slot Bookings</Link>
                                    <Link href="#" className="flex items-center text-primary hover:underline"><ArrowRight className="h-4 w-4 mr-1"/>Testimonials</Link>
                                </div>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>Quick Actions</CardTitle>
                                <CardDescription>Common tasks at your fingertips</CardDescription>
                            </CardHeader>
                            <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {quickActions.map(action => (
                                    <Button key={action.label} variant="outline" className="justify-start gap-3 p-6 text-left h-auto">
                                        {action.icon}
                                        <span className="text-base font-normal">{action.label}</span>
                                    </Button>
                                ))}
                            </CardContent>
                        </Card>
                    </div>

                    <div className="lg:col-span-1">
                        <Card>
                            <CardHeader>
                                <CardTitle>Recent Activity</CardTitle>
                                <CardDescription>
                                    Latest actions in your application
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="flex flex-col items-center justify-center text-center py-16">
                                <Activity className="h-12 w-12 text-muted-foreground/30 mb-4" />
                                <h3 className="text-lg font-semibold mb-1 text-muted-foreground">No recent activity yet</h3>
                                <p className="text-sm text-muted-foreground/70">Activity will appear here as people interact with your profile</p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </main>
        </BusinessOwnerDashboardLayout>
    )
}
