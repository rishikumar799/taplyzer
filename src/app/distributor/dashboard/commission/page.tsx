
'use client';
import { DistributorDashboardLayout } from "@/components/distributor-dashboard-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ArrowLeft, DollarSign, Download, Calendar, Clock, CheckCircle, Wallet } from "lucide-react";
import Link from "next/link";


const kpiData = [
    { title: "Total Earned", value: "₹0", subtitle: "> From 0 orders", icon: <Wallet className="h-5 w-5 text-green-500" />, color: "border-green-500/50 bg-green-500/10" },
    { title: "Pending Payment", value: "₹0", subtitle: "Awaiting payment", icon: <Clock className="h-5 w-5 text-orange-500" />, color: "border-orange-500/50 bg-orange-500/10" },
    { title: "Paid Out", value: "₹0", subtitle: "Successfully paid", icon: <CheckCircle className="h-5 w-5 text-blue-500" />, color: "border-blue-500/50 bg-blue-500/10" },
    { title: "This Month", value: "₹0", subtitle: "Avg 0.0% rate", icon: <Calendar className="h-5 w-5 text-purple-500" />, color: "border-purple-500/50 bg-purple-500/10" },
]

export default function CommissionPage() {
    return (
        <DistributorDashboardLayout>
            <main className="flex-1 p-4 md:p-8 bg-background">
                <div className="flex items-center justify-between mb-6">
                    <div>
                        <Link href="/distributor/dashboard" className="flex items-center text-sm text-muted-foreground hover:text-primary mb-2">
                            <ArrowLeft className="h-4 w-4 mr-2" />
                            Back to Dashboard
                        </Link>
                        <div className="flex items-center gap-3">
                            <DollarSign className="h-8 w-8" />
                            <div>
                                <h1 className="text-2xl font-bold">Commission Tracking</h1>
                                <p className="text-muted-foreground text-sm">Track your earnings and commission payments</p>
                            </div>
                        </div>
                    </div>
                    <Button>
                        <Download className="mr-2 h-4 w-4" /> Export Report
                    </Button>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                    {kpiData.map(item => (
                        <Card key={item.title} className={item.color}>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">{item.title}</CardTitle>
                                {item.icon}
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">{item.value}</div>
                                <p className="text-xs text-muted-foreground">{item.subtitle}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between">
                        <CardTitle>Commission History</CardTitle>
                        <Select defaultValue="all">
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="All Orders" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">All Orders</SelectItem>
                                <SelectItem value="pending">Pending</SelectItem>
                                <SelectItem value="paid">Paid</SelectItem>
                            </SelectContent>
                        </Select>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Order</TableHead>
                                    <TableHead>Customer</TableHead>
                                    <TableHead>Order Value</TableHead>
                                    <TableHead>Commission</TableHead>
                                    <TableHead>Status</TableHead>
                                    <TableHead>Date</TableHead>
                                    <TableHead>Actions</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow>
                                    <TableCell colSpan={7}>
                                        <div className="flex flex-col items-center justify-center text-center py-20">
                                            <DollarSign className="h-16 w-16 text-muted-foreground/30 mb-4" />
                                            <h3 className="text-xl font-semibold mb-1">No commission data found</h3>
                                            <p className="text-muted-foreground">Complete orders to start earning commissions.</p>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </main>
        </DistributorDashboardLayout>
    )
}
