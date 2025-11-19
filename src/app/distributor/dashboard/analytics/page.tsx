
'use client';
import { DistributorDashboardLayout } from "@/components/distributor-dashboard-layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, Users, CreditCard, Activity, ArrowDown, ArrowUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

const revenueData = [
  { month: "Jan", revenue: 45000 }, { month: "Feb", revenue: 48000 }, { month: "Mar", revenue: 52000 },
  { month: "Apr", revenue: 55000 }, { month: "May", revenue: 60000 }, { month: "Jun", revenue: 65000 },
];
const chartConfig = {
  revenue: { label: "Revenue", color: "hsl(var(--primary))" },
};

export default function AnalyticsPage() {
    return (
        <DistributorDashboardLayout>
            <main className="flex-1 p-4 md:p-8">
                <h1 className="text-3xl font-bold mb-8">Your Analytics</h1>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                            <DollarSign className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">₹4,52,318.89</div>
                            <p className="text-xs text-muted-foreground flex items-center">
                                <ArrowUp className="h-4 w-4 text-green-500" /> +20.1% from last month
                            </p>
                        </CardContent>
                    </Card>
                     <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">New Customers</CardTitle>
                            <Users className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">+23</div>
                            <p className="text-xs text-muted-foreground flex items-center">
                                <ArrowUp className="h-4 w-4 text-green-500" /> +12 from last month
                            </p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Sales</CardTitle>
                            <CreditCard className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">+12,234</div>
                            <p className="text-xs text-muted-foreground flex items-center">
                               <ArrowUp className="h-4 w-4 text-green-500" /> +19% from last month
                            </p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Churn Rate</CardTitle>
                            <Activity className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">1.2%</div>
                            <p className="text-xs text-muted-foreground flex items-center">
                                <ArrowDown className="h-4 w-4 text-red-500" /> -0.5% from last month
                            </p>
                        </CardContent>
                    </Card>
                </div>

                <Card>
                    <CardHeader>
                        <CardTitle>Revenue Over Time</CardTitle>
                        <CardDescription>Your revenue over the past 6 months.</CardDescription>
                    </CardHeader>
                    <CardContent className="pl-2">
                        <ChartContainer config={chartConfig} className="min-h-[300px] w-full">
                            <BarChart accessibilityLayer data={revenueData}>
                                <CartesianGrid vertical={false} />
                                <XAxis dataKey="month" tickLine={false} axisLine={false} />
                                <Tooltip
                                    cursor={{fill: 'hsl(var(--muted))'}}
                                    content={<ChartTooltipContent hideIndicator formatter={(value) => `₹${value.toLocaleString()}`} />}
                                />
                                <Bar dataKey="revenue" fill="var(--color-revenue)" radius={[4, 4, 0, 0]} />
                            </BarChart>
                        </ChartContainer>
                    </CardContent>
                </Card>
            </main>
        </DistributorDashboardLayout>
    )
}
