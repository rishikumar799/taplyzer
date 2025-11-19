
'use client';
import { EmployeeDashboardLayout } from "@/components/employee-dashboard-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon, PlusCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";


const leaves = [
    { type: 'Casual Leave', from: '2024-07-15', to: '2024-07-15', reason: 'Personal work', status: 'Approved' },
    { type: 'Sick Leave', from: '2024-06-20', to: '2024-06-21', reason: 'Fever', status: 'Approved' },
    { type: 'Casual Leave', from: '2024-05-10', to: '2024-05-10', reason: 'Family function', status: 'Approved' },
];

export default function LeavesPage() {
    return (
        <EmployeeDashboardLayout>
            <main className="flex-1 p-4 md:p-8">
                <div className="flex items-center justify-between mb-6">
                    <h1 className="text-2xl font-semibold">Leave Management</h1>
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button>
                                <PlusCircle className="h-4 w-4 mr-2" />
                                Request Leave
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-96">
                            <div className="grid gap-4">
                                <div className="space-y-2">
                                    <h4 className="font-medium leading-none">Apply for Leave</h4>
                                    <p className="text-sm text-muted-foreground">
                                        Fill in the details to request a new leave.
                                    </p>
                                </div>
                                <div className="grid gap-2">
                                    <div className="grid grid-cols-3 items-center gap-4">
                                        <Label htmlFor="leave-type">Leave Type</Label>
                                        <Select>
                                            <SelectTrigger className="col-span-2 h-8">
                                                <SelectValue placeholder="Select type" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="casual">Casual</SelectItem>
                                                <SelectItem value="sick">Sick</SelectItem>
                                                <SelectItem value="earned">Earned</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="grid grid-cols-3 items-center gap-4">
                                        <Label htmlFor="from-date">From</Label>
                                        <Popover>
                                            <PopoverTrigger asChild>
                                                <Button
                                                    variant={"outline"}
                                                    className={cn(
                                                        "w-[240px] justify-start text-left font-normal col-span-2",
                                                        !Date && "text-muted-foreground"
                                                    )}
                                                >
                                                    <CalendarIcon className="mr-2 h-4 w-4" />
                                                    {format(new Date(), "PPP")}
                                                </Button>
                                            </PopoverTrigger>
                                            <PopoverContent className="w-auto p-0" align="start">
                                                <Calendar
                                                    mode="single"
                                                    initialFocus
                                                />
                                            </PopoverContent>
                                        </Popover>
                                    </div>
                                    <div className="grid grid-cols-3 items-center gap-4">
                                        <Label htmlFor="to-date">To</Label>
                                        <Popover>
                                            <PopoverTrigger asChild>
                                                <Button
                                                    variant={"outline"}
                                                    className={cn(
                                                        "w-[240px] justify-start text-left font-normal col-span-2",
                                                        !Date && "text-muted-foreground"
                                                    )}
                                                >
                                                    <CalendarIcon className="mr-2 h-4 w-4" />
                                                    {format(new Date(), "PPP")}
                                                </Button>
                                            </PopoverTrigger>
                                            <PopoverContent className="w-auto p-0" align="start">
                                                <Calendar
                                                    mode="single"
                                                    initialFocus
                                                />
                                            </PopoverContent>
                                        </Popover>
                                    </div>
                                    <div className="grid grid-cols-3 items-center gap-4">
                                        <Label htmlFor="reason">Reason</Label>
                                        <Textarea id="reason" className="col-span-2" placeholder="Reason for your leave" />
                                    </div>
                                    <Button className="mt-2">Submit Request</Button>
                                </div>
                            </div>
                        </PopoverContent>
                    </Popover>
                </div>
                <div className="grid gap-6">
                    <div className="grid md:grid-cols-3 gap-6">
                        <Card>
                            <CardHeader>
                                <CardTitle>Total Leaves</CardTitle>
                                <CardDescription>Your total leave allowance for the year.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-3xl font-bold">24 <span className="text-sm font-normal text-muted-foreground">days</span></p>
                            </CardContent>
                        </Card>
                         <Card>
                            <CardHeader>
                                <CardTitle>Leaves Taken</CardTitle>
                                <CardDescription>Total leaves you've taken this year.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-3xl font-bold">4 <span className="text-sm font-normal text-muted-foreground">days</span></p>
                            </CardContent>
                        </Card>
                         <Card>
                            <CardHeader>
                                <CardTitle>Leaves Remaining</CardTitle>
                                <CardDescription>Your available leave balance.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-3xl font-bold">20 <span className="text-sm font-normal text-muted-foreground">days</span></p>
                            </CardContent>
                        </Card>
                    </div>

                    <Card>
                        <CardHeader>
                            <CardTitle>Leave History</CardTitle>
                            <CardDescription>A record of your past leave requests.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Leave Type</TableHead>
                                        <TableHead>From</TableHead>
                                        <TableHead>To</TableHead>
                                        <TableHead>Reason</TableHead>
                                        <TableHead>Status</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {leaves.map((leave, index) => (
                                        <TableRow key={index}>
                                            <TableCell className="font-medium">{leave.type}</TableCell>
                                            <TableCell>{format(new Date(leave.from), "PPP")}</TableCell>
                                            <TableCell>{format(new Date(leave.to), "PPP")}</TableCell>
                                            <TableCell>{leave.reason}</TableCell>
                                            <TableCell>
                                                <Badge
                                                    className={cn(
                                                        leave.status === 'Approved' && 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
                                                        leave.status === 'Pending' && 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300',
                                                        leave.status === 'Rejected' && 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300',
                                                    )}
                                                >
                                                    {leave.status}
                                                </Badge>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                </div>
            </main>
        </EmployeeDashboardLayout>
    );
}
