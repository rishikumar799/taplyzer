
'use client';
import { DistributorDashboardLayout } from "@/components/distributor-dashboard-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, Users, TrendingUp, Package, Star, Search, Filter } from "lucide-react";
import Link from "next/link";

const kpiData = [
    { title: "Total Customers", value: "0", subtitle: "Active customers", icon: <Users className="h-5 w-5 text-green-500" />, color: "border-green-500/50 bg-green-500/10" },
    { title: "Total Revenue", value: "₹0", subtitle: "From all orders", icon: <TrendingUp className="h-5 w-5 text-blue-500" />, color: "border-blue-500/50 bg-blue-500/10" },
    { title: "Avg Order Value", value: "₹0", subtitle: "Per order", icon: <Package className="h-5 w-5 text-purple-500" />, color: "border-purple-500/50 bg-purple-500/10" },
    { title: "Repeat Customers", value: "0", subtitle: "Multiple orders", icon: <Star className="h-5 w-5 text-yellow-500" />, color: "border-yellow-500/50 bg-yellow-500/10" },
]

export default function CustomersPage() {
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
                            <Users className="h-8 w-8" />
                            <div>
                                <h1 className="text-2xl font-bold">Customer Management</h1>
                                <p className="text-muted-foreground text-sm">Manage your customer relationships and order history</p>
                            </div>
                        </div>
                    </div>
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

                <div className="flex items-center gap-4 mb-8">
                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                        <Input placeholder="Search customers by name, phone, email, or city..." className="pl-10" />
                    </div>
                    <Select>
                        <SelectTrigger className="w-[180px]">
                            <Filter className="h-4 w-4 mr-2" />
                            <SelectValue placeholder="All Filters" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">All Customers</SelectItem>
                            <SelectItem value="active">Active</SelectItem>
                            <SelectItem value="inactive">Inactive</SelectItem>
                        </SelectContent>
                    </Select>
                     <Select>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Recent Orders" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="recent">Recent Orders</SelectItem>
                            <SelectItem value="oldest">Oldest Orders</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                <div className="flex flex-col items-center justify-center text-center py-20 rounded-lg bg-card/50 border border-dashed">
                    <Users className="h-16 w-16 text-muted-foreground/30 mb-4" />
                    <h3 className="text-xl font-semibold mb-1">No customers found</h3>
                    <p className="text-muted-foreground">Complete orders to see customers here.</p>
                </div>

            </main>
        </DistributorDashboardLayout>
    );
}
