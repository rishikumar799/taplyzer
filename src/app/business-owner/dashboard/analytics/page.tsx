
'use client';
import { BusinessOwnerDashboardLayout } from "@/components/business-owner-dashboard-layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ArrowUpRight, Users, BarChart3, Link as LinkIcon, Activity } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

const tapData = [
  { date: "2024-07-01", taps: 120 }, { date: "2024-07-02", taps: 150 }, { date: "2024-07-03", taps: 180 },
  { date: "2024-07-04", taps: 130 }, { date: "2024-07-05", taps: 200 }, { date: "2024-07-06", taps: 220 },
  { date: "2024-07-07", taps: 250 },
];
const chartConfig = { taps: { label: "Taps", color: "hsl(var(--primary))" } };

const topEmployees = [
    { name: 'Liam Johnson', department: 'Sales', taps: 258, connections: 45 },
    { name: 'Olivia Smith', department: 'Marketing', taps: 212, connections: 38 },
    { name: 'Noah Williams', department: 'Engineering', taps: 189, connections: 25 },
    { name: 'James Jones', department: 'Sales', taps: 175, connections: 35 },
    { name: 'Sophia Davis', department: 'HR', taps: 150, connections: 20 },
];

export default function AnalyticsPage() {
    return (
        <BusinessOwnerDashboardLayout>
            <main className="flex-1 p-4 md:p-8">
                <h1 className="text-3xl font-bold mb-8">Team Analytics</h1>

                 <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Total Taps</CardTitle>
                            <Activity className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">12,540</div>
                            <p className="text-xs text-muted-foreground">+15% from last month</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Total Connections</CardTitle>
                            <Users className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">1,892</div>
                            <p className="text-xs text-muted-foreground">+22% from last month</p>
                        </CardContent>
                    </Card>
                     <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Link Clicks</CardTitle>
                            <LinkIcon className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">8,230</div>
                            <p className="text-xs text-muted-foreground">Clicks on all profile links</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Top Employee</CardTitle>
                            <Users className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">Liam Johnson</div>
                            <p className="text-xs text-muted-foreground">258 Taps this month</p>
                        </CardContent>
                    </Card>
                </div>

                <Card className="mb-8">
                    <CardHeader>
                        <CardTitle>Tap Activity (Last 7 Days)</CardTitle>
                    </CardHeader>
                    <CardContent className="pl-2">
                        <ChartContainer config={chartConfig} className="min-h-[300px] w-full">
                            <BarChart accessibilityLayer data={tapData}>
                                <CartesianGrid vertical={false} />
                                <XAxis dataKey="date" tickFormatter={(val) => new Date(val).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} tickLine={false} axisLine={false} />
                                <YAxis tickLine={false} axisLine={false} />
                                <Tooltip cursor={{ fill: 'hsl(var(--muted))' }} content={<ChartTooltipContent hideIndicator />} />
                                <Bar dataKey="taps" fill="var(--color-taps)" radius={[4, 4, 0, 0]} />
                            </BarChart>
                        </ChartContainer>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Top Performing Employees</CardTitle>
                        <CardDescription>Employees with the most networking activity.</CardDescription>
                    </CardHeader>
                    <CardContent>
                         <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Employee</TableHead>
                                    <TableHead>Department</TableHead>
                                    <TableHead className="text-right">Taps</TableHead>
                                    <TableHead className="text-right">Connections</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {topEmployees.map((employee, index) => (
                                    <TableRow key={index}>
                                        <TableCell className="font-medium">{employee.name}</TableCell>
                                        <TableCell>{employee.department}</TableCell>
                                        <TableCell className="text-right">{employee.taps}</TableCell>
                                        <TableCell className="text-right">{employee.connections}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </main>
        </BusinessOwnerDashboardLayout>
    );
}
