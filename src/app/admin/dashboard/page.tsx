'use client';
import {
  Activity,
  ArrowUpRight,
  Users,
  DollarSign,
  Package,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import Link from "next/link"
import { AdminDashboardLayout } from "@/components/admin-dashboard-layout";
import { Badge } from "@/components/ui/badge";

const recentTransactions = [
    { name: "Karunakarreddy Kamireddy", email: "karunakar@nfcbrand.com", amount: "+₹1,45,200.00" },
    { name: "Priya Sharma", email: "priya.sharma@example.com", amount: "+₹98,000.00" },
    { name: "Rajesh Kumar", email: "rajesh.kumar@example.com", amount: "+₹45,000.00" },
    { name: "Anjali Mehta", email: "anjali.mehta@example.com", amount: "+₹1,80,000.00" },
];

const recentSignups = [
    { name: "Nexus Innovations", plan: "Elite" },
    { name: "Quantum Leap Inc", plan: "Custom" },
    { name: "Stellar Solutions", plan: "Standard" },
];

export default function AdminDashboardPage() {
    return (
        <AdminDashboardLayout>
            <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
                <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">
                                Total Revenue
                            </CardTitle>
                            <DollarSign className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">₹12,452,318.89</div>
                            <p className="text-xs text-muted-foreground">
                                +15.2% from last month
                            </p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">
                                Active Users
                            </CardTitle>
                            <Users className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">+2350</div>
                            <p className="text-xs text-muted-foreground">
                                +180.1% from last month
                            </p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">
                                Sales
                            </CardTitle>
                            <Package className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">+12,234</div>
                            <p className="text-xs text-muted-foreground">
                                +19% from last month
                            </p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Platform Activity</CardTitle>
                            <Activity className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">+573</div>
                            <p className="text-xs text-muted-foreground">
                                Connections made in last hour
                            </p>
                        </CardContent>
                    </Card>
                </div>
                <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
                    <Card className="xl:col-span-2">
                        <CardHeader className="flex flex-row items-center">
                            <div className="grid gap-2">
                                <CardTitle>Recent Transactions</CardTitle>
                                <CardDescription>
                                    Recent transactions from your users.
                                </CardDescription>
                            </div>
                            <Button asChild size="sm" className="ml-auto gap-1">
                                <Link href="#">
                                    View All
                                    <ArrowUpRight className="h-4 w-4" />
                                </Link>
                            </Button>
                        </CardHeader>
                        <CardContent>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>User</TableHead>
                                        <TableHead className="text-right">Amount</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {recentTransactions.map(transaction => (
                                        <TableRow key={transaction.name}>
                                            <TableCell>
                                                <div className="font-medium">{transaction.name}</div>
                                                <div className="hidden text-sm text-muted-foreground md:inline">
                                                    {transaction.email}
                                                </div>
                                            </TableCell>
                                            <TableCell className="text-right">{transaction.amount}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>New Users</CardTitle>
                            <CardDescription>
                                Your newest users.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="grid gap-8">
                           {recentSignups.map(signup => (
                                <div key={signup.name} className="flex items-center gap-4">
                                    <div className="grid gap-1">
                                        <p className="text-sm font-medium leading-none">
                                            {signup.name}
                                        </p>
                                    </div>
                                    <div className="ml-auto font-medium">
                                        <Badge variant="outline">{signup.plan} Plan</Badge>
                                    </div>
                                </div>
                           ))}
                        </CardContent>
                    </Card>
                </div>
            </main>
        </AdminDashboardLayout>
    )
}
