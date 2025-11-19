
'use client';
import { DistributorDashboardLayout } from "@/components/distributor-dashboard-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ArrowLeft, Search, ShoppingCart, Clock, CheckCircle, IndianRupee, PlusCircle } from "lucide-react";
import Link from "next/link";

const kpiData = [
    { title: "Total Orders", value: "0", icon: <ShoppingCart className="h-5 w-5 text-blue-500" />, color: "border-blue-500/50 bg-blue-500/10" },
    { title: "Pending", value: "0", icon: <Clock className="h-5 w-5 text-orange-500" />, color: "border-orange-500/50 bg-orange-500/10" },
    { title: "Completed", value: "0", icon: <CheckCircle className="h-5 w-5 text-green-500" />, color: "border-green-500/50 bg-green-500/10" },
    { title: "Total Value", value: "₹0", icon: <IndianRupee className="h-5 w-5 text-purple-500" />, color: "border-purple-500/50 bg-purple-500/10" },
]

export default function OrdersPage() {
    return (
        <DistributorDashboardLayout>
            <main className="flex-1 p-4 md:p-8">
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-4">
                        <Link href="/distributor/dashboard">
                            <Button variant="outline" size="icon" className="h-9 w-9">
                                <ArrowLeft className="h-5 w-5" />
                            </Button>
                        </Link>
                        <div>
                            <h1 className="text-2xl font-bold">My Orders</h1>
                            <p className="text-muted-foreground text-sm">Track and manage your customer orders</p>
                        </div>
                    </div>
                    <Button>
                        <PlusCircle className="mr-2 h-4 w-4" /> Place New Order
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
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="flex items-center gap-4 mb-6">
                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                        <Input placeholder="Search by order number, customer name, or phone..." className="pl-10" />
                    </div>
                    <Select defaultValue="all">
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="All Status" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">All Status</SelectItem>
                            <SelectItem value="pending">Pending</SelectItem>
                            <SelectItem value="completed">Completed</SelectItem>
                            <SelectItem value="cancelled">Cancelled</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                <Card>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Order</TableHead>
                                <TableHead>Customer</TableHead>
                                <TableHead>Items</TableHead>
                                <TableHead>Amount</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Date</TableHead>
                                <TableHead>Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                           <TableRow>
                                <TableCell colSpan={7}>
                                     <div className="flex flex-col items-center justify-center text-center py-20">
                                        <ShoppingCart className="h-16 w-16 text-muted-foreground/30 mb-4" />
                                        <h3 className="text-xl font-semibold mb-1">No orders found</h3>
                                        <p className="text-muted-foreground">You haven't placed any orders yet.</p>
                                    </div>
                                </TableCell>
                           </TableRow>
                        </TableBody>
                    </Table>
                </Card>
            </main>
        </DistributorDashboardLayout>
    )
}
