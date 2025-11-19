
'use client';
import { DistributorDashboardLayout } from "@/components/distributor-dashboard-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, IndianRupee, TrendingUp, Package, Calendar, Percent, Landmark } from "lucide-react";
import Link from "next/link";
import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"
import { BarChart as RechartsBarChart, CartesianGrid, XAxis, YAxis, Tooltip, Bar as RechartsBar, LineChart, Line } from "recharts"

const revenueData = [
  { month: "May 23", revenue: 0, commission: 0 }, 
  { month: "Jun 23", revenue: 0, commission: 0 }, 
  { month: "Jul 23", revenue: 0, commission: 0 },
  { month: "Aug 23", revenue: 0, commission: 0 }, 
  { month: "Sep 23", revenue: 0, commission: 0 }, 
  { month: "Oct 23", revenue: 0, commission: 0 },
];

const chartConfig = {
  revenue: { label: "Revenue", color: "hsl(var(--primary))" },
  commission: { label: "Commission", color: "hsl(var(--chart-2))" },
};

export default function RevenueTrackingPage() {
    return (
        <DistributorDashboardLayout>
            <main className="flex-1 p-4 md:p-8 bg-background">
                <div className="flex items-center gap-4 mb-6">
                    <Link href="/distributor/dashboard">
                        <Button variant="outline" size="icon" className="h-9 w-9">
                            <ArrowLeft className="h-5 w-5" />
                        </Button>
                    </Link>
                    <div>
                        <h1 className="text-2xl font-bold">Revenue Tracking</h1>
                        <p className="text-muted-foreground text-sm">Track your sales, commission, and payouts</p>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium text-muted-foreground">Total Revenue</CardTitle>
                            <IndianRupee className="h-5 w-5 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">₹0</div>
                            <p className="text-xs text-muted-foreground">Lifetime</p>
                        </CardContent>
                    </Card>
                     <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium text-muted-foreground">Total Commission</CardTitle>
                            <Percent className="h-5 w-5 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">₹0</div>
                            <p className="text-xs text-muted-foreground">Balance due</p>
                        </CardContent>
                    </Card>
                     <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium text-muted-foreground">This Month</CardTitle>
                            <Calendar className="h-5 w-5 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">₹0</div>
                        </CardContent>
                    </Card>
                     <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium text-muted-foreground">Avg Order Value</CardTitle>
                            <Package className="h-5 w-5 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">₹0</div>
                        </CardContent>
                    </Card>
                </div>

                <div className="grid lg:grid-cols-2 gap-6 mb-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Revenue & Commission Trend</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ChartContainer config={chartConfig} className="min-h-[250px] w-full">
                                <LineChart accessibilityLayer data={revenueData}>
                                    <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="hsl(var(--border))" />
                                    <XAxis dataKey="month" tickLine={false} axisLine={false} stroke="hsl(var(--muted-foreground))" />
                                    <YAxis tickLine={false} axisLine={false} stroke="hsl(var(--muted-foreground))" />
                                    <Tooltip
                                        cursor={{stroke: 'hsl(var(--border))', strokeWidth: 2}}
                                        content={<ChartTooltipContent hideIndicator />}
                                    />
                                    <Line dataKey="revenue" type="monotone" stroke="var(--color-revenue)" strokeWidth={2} dot={false} />
                                    <Line dataKey="commission" type="monotone" stroke="var(--color-commission)" strokeWidth={2} dot={false} />
                                </LineChart>
                            </ChartContainer>
                        </CardContent>
                    </Card>
                     <Card>
                        <CardHeader>
                            <CardTitle>Order Status Distribution</CardTitle>
                        </CardHeader>
                        <CardContent className="flex items-center justify-center min-h-[250px]">
                            <p className="text-muted-foreground">No data available</p>
                        </CardContent>
                    </Card>
                </div>

                 <Card className="mb-6">
                    <CardHeader>
                        <CardTitle>Monthly Order Volume</CardTitle>
                    </CardHeader>
                    <CardContent className="flex items-center justify-center min-h-[250px]">
                        <p className="text-muted-foreground">No data available</p>
                    </CardContent>
                </Card>

                <Card className="mb-6">
                    <CardHeader>
                        <CardTitle>Commission Breakdown</CardTitle>
                    </CardHeader>
                    <CardContent className="grid md:grid-cols-3 gap-4">
                        <Card className="bg-green-500/10 border-green-500/50">
                            <CardContent className="p-4 flex items-center gap-4">
                                <IndianRupee className="h-8 w-8 text-green-500"/>
                                <div>
                                    <p className="text-xs text-muted-foreground">Dynamic</p>
                                    <p className="text-xl font-bold">₹0</p>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="bg-blue-500/10 border-blue-500/50">
                            <CardContent className="p-4 flex items-center gap-4">
                                <Package className="h-8 w-8 text-blue-500"/>
                                <div>
                                    <p className="text-xs text-muted-foreground">Orders</p>
                                    <p className="text-xl font-bold">0</p>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="bg-purple-500/10 border-purple-500/50">
                            <CardContent className="p-4 flex items-center gap-4">
                                <TrendingUp className="h-8 w-8 text-purple-500"/>
                                <div>
                                    <p className="text-xs text-muted-foreground">Growth</p>
                                    <p className="text-xl font-bold">0%</p>
                                </div>
                            </CardContent>
                        </Card>
                    </CardContent>
                </Card>

                 <Card className="mb-6">
                    <CardHeader>
                        <CardTitle>Revenue Orders</CardTitle>
                    </CardHeader>
                    <CardContent className="flex items-center justify-center min-h-[150px]">
                         <p className="text-muted-foreground">No orders found</p>
                    </CardContent>
                </Card>

                 <Card>
                    <CardHeader>
                        <CardTitle>Revenue Insights</CardTitle>
                    </CardHeader>
                    <CardContent className="grid md:grid-cols-2 gap-8 text-sm">
                        <div>
                            <h4 className="font-semibold mb-2">Commission Structure</h4>
                            <p className="text-muted-foreground">Your commission is calculated based on total order value and performance. A commission of 10% is calculated for each order and may be subject to different performance-based bonus and higher commission rates.</p>
                        </div>
                         <div>
                            <h4 className="font-semibold mb-2">Payout Schedule</h4>
                            <p className="text-muted-foreground">Payouts are processed on the 1st of every month for the previous month's commission. Ensure your bank details are up to date in the settings for a smooth and successful payout.</p>
                        </div>
                    </CardContent>
                </Card>

            </main>
        </DistributorDashboardLayout>
    )
}
