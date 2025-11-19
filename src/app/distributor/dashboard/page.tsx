
'use client';
import {
  DollarSign,
  Package,
  BarChart,
  PlusCircle,
  TrendingUp,
  AlertTriangle,
  FileText,
  Mail,
  Phone,
  MapPin,
  Calendar,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { DistributorDashboardLayout } from "@/components/distributor-dashboard-layout";
import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"
import { BarChart as RechartsBarChart, CartesianGrid, XAxis, YAxis, Tooltip, Bar as RechartsBar } from "recharts"


const revenueData = [
  { month: "May", revenue: 0 }, { month: "Jun", revenue: 0 }, { month: "Jul", revenue: 0 },
  { month: "Aug", revenue: 0 }, { month: "Sep", revenue: 0 }, { month: "Oct", revenue: 0 },
];
const chartConfig = {
  revenue: { label: "Revenue", color: "hsl(var(--primary))" },
};


export default function DistributorDashboardPage() {
    return (
        <DistributorDashboardLayout>
            <main className="flex flex-1 flex-col gap-6 p-4 md:p-8">
                <div className="px-4">
                    <h1 className="text-3xl font-semibold">Welcome back, Karunakarreddy Kamireddy!</h1>
                    <p className="text-muted-foreground">Here's your distributor dashboard overview</p>
                </div>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 px-4">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium text-muted-foreground">
                                Total Orders
                            </CardTitle>
                            <Package className="h-5 w-5 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">0</div>
                            <p className="text-xs text-muted-foreground">
                                No orders yet
                            </p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium text-muted-foreground">
                                Sales
                            </CardTitle>
                            <BarChart className="h-5 w-5 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">₹0</div>
                            <p className="text-xs text-muted-foreground">
                                This month
                            </p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium text-muted-foreground">Commission</CardTitle>
                            <DollarSign className="h-5 w-5 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">₹0</div>
                            <p className="text-xs text-muted-foreground">
                                Total earned
                            </p>
                        </CardContent>
                    </Card>
                </div>
                
                <div className="px-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>Revenue Trend (6 Months)</CardTitle>
                        </CardHeader>
                        <CardContent className="pl-2">
                            <ChartContainer config={chartConfig} className="min-h-[250px] w-full">
                                <RechartsBarChart accessibilityLayer data={revenueData}>
                                    <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="hsl(var(--border))" />
                                    <XAxis dataKey="month" tickLine={false} axisLine={false} stroke="hsl(var(--muted-foreground))" />
                                    <YAxis tickLine={false} axisLine={false} stroke="hsl(var(--muted-foreground))" />
                                    <Tooltip
                                        cursor={{fill: 'hsl(var(--muted))'}}
                                        content={<ChartTooltipContent hideIndicator formatter={(value) => `₹${value.toLocaleString()}`} />}
                                    />
                                    <RechartsBar dataKey="revenue" fill="var(--color-revenue)" radius={[4, 4, 0, 0]} />
                                </RechartsBarChart>
                            </ChartContainer>
                        </CardContent>
                    </Card>
                </div>

                <div className="px-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>Quick Actions</CardTitle>
                        </CardHeader>
                        <CardContent className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <Button>
                                <PlusCircle className="mr-2 h-4 w-4"/> Place Order
                            </Button>
                            <Button>
                                <TrendingUp className="mr-2 h-4 w-4"/> Revenue Tracking
                            </Button>
                            <Button>
                                <AlertTriangle className="mr-2 h-4 w-4"/> Raise Issue
                            </Button>
                             <Button>
                                <DollarSign className="mr-2 h-4 w-4"/> Commission
                            </Button>
                        </CardContent>
                    </Card>
                </div>

                 <div className="px-4">
                     <Card>
                        <CardHeader>
                            <CardTitle>Territory & Contact Information</CardTitle>
                        </CardHeader>
                        <CardContent className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
                            <div className="flex items-center gap-3">
                                <MapPin className="h-5 w-5 text-muted-foreground" />
                                <div>
                                    <p className="text-muted-foreground">Territory</p>
                                    <p className="font-medium">South India</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <Calendar className="h-5 w-5 text-muted-foreground" />
                                <div>
                                    <p className="text-muted-foreground">Joined</p>
                                    <p className="font-medium">12/10/2025</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <Mail className="h-5 w-5 text-muted-foreground" />
                                <div>
                                    <p className="text-muted-foreground">Email</p>
                                    <p className="font-medium">karunakarreddykamiruddy01@gmail.com</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone className="h-5 w-5 text-muted-foreground" />
                                <div>
                                    <p className="text-muted-foreground">Phone</p>
                                    <p className="font-medium">7416768741</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                 </div>
            </main>
        </DistributorDashboardLayout>
    )
}
