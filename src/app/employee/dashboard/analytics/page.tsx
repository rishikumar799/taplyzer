
'use client';
import { EmployeeDashboardLayout } from "@/components/employee-dashboard-layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Activity, Users, Eye, Link as LinkIcon, ExternalLink } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Badge } from "@/components/ui/badge";

const chartData = [
  { month: "Jan", taps: 65 },
  { month: "Feb", taps: 59 },
  { month: "Mar", taps: 80 },
  { month: "Apr", taps: 81 },
  { month: "May", taps: 56 },
  { month: "Jun", taps: 55 },
];

const chartConfig = {
  taps: {
    label: "Taps",
    color: "hsl(var(--primary))",
  },
};

const recentActivities = [
    { time: '2 hours ago', location: 'Mumbai, IN', device: 'iPhone 15 Pro', action: 'Profile View' },
    { time: '1 day ago', location: 'Delhi, IN', device: 'Samsung Galaxy S24', action: 'Contact Saved' },
    { time: '3 days ago', location: 'Bengaluru, IN', device: 'Google Pixel 8', action: 'LinkedIn Click' },
    { time: '5 days ago', location: 'Pune, IN', device: 'iPhone 14', action: 'Profile View' },
    { time: '1 week ago', location: 'Hyderabad, IN', device: 'OnePlus 12', action: 'Contact Saved' },
];

const topLinks = [
    { name: 'LinkedIn Profile', url: 'linkedin.com/in/jane-doe', clicks: 125, icon: <LinkIcon className="h-4 w-4 text-muted-foreground" /> },
    { name: 'Company Website', url: 'taplyzer.com', clicks: 88, icon: <ExternalLink className="h-4 w-4 text-muted-foreground" /> },
    { name: 'Portfolio', url: 'dribbble.com/jane-doe', clicks: 62, icon: <ExternalLink className="h-4 w-4 text-muted-foreground" /> },
];

export default function AnalyticsPage() {
    return (
        <EmployeeDashboardLayout>
            <main className="flex-1 p-4 md:p-8">
                <h1 className="text-3xl font-bold mb-8">My NFC Card Analytics</h1>
                
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Total Card Taps</CardTitle>
                            <Activity className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">1,890</div>
                            <p className="text-xs text-muted-foreground">+20.1% from last month</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">New Connections</CardTitle>
                            <Users className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">+234</div>
                            <p className="text-xs text-muted-foreground">+18.3% from last month</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Profile Views</CardTitle>
                            <Eye className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">3,450</div>
                            <p className="text-xs text-muted-foreground">Total views on your digital profile</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Engagement Rate</CardTitle>
                            <LinkIcon className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">12.4%</div>
                            <p className="text-xs text-muted-foreground">Connections per tap</p>
                        </CardContent>
                    </Card>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    <Card className="lg:col-span-2">
                        <CardHeader>
                            <CardTitle>Tap Performance</CardTitle>
                            <CardDescription>Your card tap activity over the last 6 months.</CardDescription>
                        </CardHeader>
                        <CardContent className="pl-2">
                            <ChartContainer config={chartConfig} className="min-h-[300px] w-full">
                                <BarChart accessibilityLayer data={chartData}>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                                    <XAxis dataKey="month" tickLine={false} axisLine={false} />
                                    <YAxis tickLine={false} axisLine={false} />
                                    <Tooltip
                                        cursor={{fill: 'hsl(var(--muted))'}}
                                        content={<ChartTooltipContent hideIndicator />}
                                    />
                                    <Bar dataKey="taps" fill="var(--color-taps)" radius={[4, 4, 0, 0]} />
                                </BarChart>
                            </ChartContainer>
                        </CardContent>
                    </Card>
                    
                    <Card>
                        <CardHeader>
                            <CardTitle>Top Performing Content</CardTitle>
                            <CardDescription>Most clicked links on your profile.</CardDescription>
                        </CardHeader>
                        <CardContent className="grid gap-4">
                            {topLinks.map(link => (
                                <div key={link.name} className="flex items-center gap-4">
                                    <div className="bg-muted p-2 rounded-lg">{link.icon}</div>
                                    <div className="grid gap-1 flex-1">
                                        <p className="text-sm font-medium leading-none truncate">{link.name}</p>
                                        <p className="text-sm text-muted-foreground truncate">{link.url}</p>
                                    </div>
                                    <div className="ml-auto font-medium">{link.clicks}</div>
                                </div>
                            ))}
                        </CardContent>
                    </Card>
                </div>
                
                <Card className="mt-8">
                    <CardHeader>
                        <CardTitle>Recent Activity</CardTitle>
                        <CardDescription>A log of the latest interactions with your card.</CardDescription>
                    </CardHeader>
                    <CardContent>
                         <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Time</TableHead>
                                    <TableHead>Location</TableHead>
                                    <TableHead>Device</TableHead>
                                    <TableHead>Action</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {recentActivities.map((activity, index) => (
                                     <TableRow key={index}>
                                        <TableCell>{activity.time}</TableCell>
                                        <TableCell>{activity.location}</TableCell>
                                        <TableCell>{activity.device}</TableCell>
                                        <TableCell>
                                            <Badge variant={activity.action === 'Contact Saved' ? 'default' : 'outline'}>
                                                {activity.action}
                                            </Badge>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>

            </main>
        </EmployeeDashboardLayout>
    );
}
