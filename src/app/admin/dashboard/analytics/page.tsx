
'use client';
import { AdminDashboardLayout } from "@/components/admin-dashboard-layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ArrowUpRight, DollarSign, Users, Package, Activity, ArrowDown } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

const revenueData = [
  { month: "Jan", revenue: 145000 }, { month: "Feb", revenue: 148000 }, { month: "Mar", revenue: 152000 },
  { month: "Apr", revenue: 155000 }, { month: "May", revenue: 160000 }, { month: "Jun", revenue: 165000 },
];
const chartConfig = {
  revenue: { label: "Revenue", color: "hsl(var(--primary))" },
};

const topUsers = [
    { name: 'Karunakarreddy Kamireddy', revenue: '₹1,45,200.00', newCustomers: 45 },
    { name: 'Priya Sharma', revenue: '₹98,000.00', newCustomers: 38 },
    { name: 'Rajesh Kumar', revenue: '₹45,000.00', newCustomers: 25 },
    { name: 'Anjali Mehta', revenue: '₹1,80,000.00', newCustomers: 35 },
];

export default function AdminAnalyticsPage() {
    return (
        <AdminDashboardLayout>
            <main className="flex-1 p-4 md:p-8">
                <h1 className="text-3xl font-bold mb-8">Platform Analytics</h1>

                 <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                            <DollarSign className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">₹12,452,318.89</div>
                            <p className="text-xs text-muted-foreground flex items-center">
                                <ArrowUpRight className="h-4 w-4 text-green-500" /> +15.2% from last month
                            </p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Active Users</CardTitle>
                            <Users className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">+2350</div>
                            <p className="text-xs text-muted-foreground flex items-center">
                                +180.1% from last month
                            </p>
                        </CardContent>
                    </Card>
                     <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Plans Sold</CardTitle>
                            <Package className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">+1,234</div>
                            <p className="text-xs text-muted-foreground flex items-center">
                                <ArrowUpRight className="h-4 w-4 text-green-500" /> +12% from last month
                            </p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">User Churn</CardTitle>
                            <Activity className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">2.1%</div>
                             <p className="text-xs text-muted-foreground flex items-center">
                                <ArrowDown className="h-4 w-4 text-red-500" /> -0.2% from last month
                            </p>
                        </CardContent>
                    </Card>
                </div>

                <Card className="mb-8">
                    <CardHeader>
                        <CardTitle>Revenue Over Time</CardTitle>
                        <CardDescription>Platform revenue over the past 6 months.</CardDescription>
                    </CardHeader>
                    <CardContent className="pl-2">
                        <ChartContainer config={chartConfig} className="min-h-[300px] w-full">
                            <BarChart accessibilityLayer data={revenueData}>
                                <CartesianGrid vertical={false} />
                                <XAxis dataKey="month" tickLine={false} axisLine={false} />
                                <YAxis tickLine={false} axisLine={false} tickFormatter={(value) => `₹${Number(value) / 1000}k`} />
                                <Tooltip cursor={{ fill: 'hsl(var(--muted))' }} content={<ChartTooltipContent hideIndicator formatter={(value) => `₹${value.toLocaleString()}`} />} />
                                <Bar dataKey="revenue" fill="var(--color-revenue)" radius={[4, 4, 0, 0]} />
                            </BarChart>
                        </ChartContainer>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Top Performing Users</CardTitle>
                        <CardDescription>Users with the most revenue generated.</CardDescription>
                    </CardHeader>
                    <CardContent>
                         <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>User</TableHead>
                                    <TableHead className="text-right">Revenue</TableHead>
                                    <TableHead className="text-right">New Customers</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {topUsers.map((user, index) => (
                                    <TableRow key={index}>
                                        <TableCell className="font-medium">{user.name}</TableCell>
                                        <TableCell className="text-right">{user.revenue}</TableCell>
                                        <TableCell className="text-right">{user.newCustomers}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </main>
        </AdminDashboardLayout>
    );
}
