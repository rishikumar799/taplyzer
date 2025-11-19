
'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Activity, CalendarDays, Plane, Users } from "lucide-react"
import { EmployeeDashboardLayout } from "@/components/employee-dashboard-layout"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

export default function EmployeeDashboardPage() {

    return (
        <EmployeeDashboardLayout>
            <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
                <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Card Taps</CardTitle>
                            <Activity className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">+1,230</div>
                            <p className="text-xs text-muted-foreground">
                                +180.1% from last month
                            </p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">New Connections</CardTitle>
                            <Users className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">+452</div>
                            <p className="text-xs text-muted-foreground">
                                +92 from last month
                            </p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">
                                Leave Balance
                            </CardTitle>
                            <Plane className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">12 <span className="text-sm text-muted-foreground">days</span></div>
                            <p className="text-xs text-muted-foreground">
                                2 Casual, 10 Sick
                            </p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Upcoming Holidays</CardTitle>
                            <CalendarDays className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">3</div>
                            <p className="text-xs text-muted-foreground">
                                in the next 30 days
                            </p>
                        </CardContent>
                    </Card>
                </div>
                <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
                    <Card className="xl:col-span-2">
                        <CardHeader>
                            <CardTitle>Recent Activity</CardTitle>
                            <CardDescription>
                                A log of your recent NFC card interactions.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="grid gap-6">
                            <div className="flex items-center gap-4">
                                <Avatar className="h-9 w-9">
                                    <AvatarImage src="https://picsum.photos/seed/user1/32/32" />
                                    <AvatarFallback>OM</AvatarFallback>
                                </Avatar>
                                <div className="grid gap-1">
                                    <p className="text-sm font-medium">Olivia Martin</p>
                                    <p className="text-sm text-muted-foreground">
                                        Shared contact details
                                    </p>
                                </div>
                                <div className="ml-auto text-sm text-muted-foreground">
                                    <Badge variant="outline">Tap</Badge>
                                </div>
                                <div className="ml-4 text-sm text-muted-foreground">
                                    3 min ago
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <Avatar className="h-9 w-9">
                                    <AvatarImage src="https://picsum.photos/seed/user2/32/32" />
                                    <AvatarFallback>JL</AvatarFallback>
                                </Avatar>
                                <div className="grid gap-1">
                                    <p className="text-sm font-medium">Jackson Lee</p>
                                    <p className="text-sm text-muted-foreground">
                                        Viewed your profile
                                    </p>
                                </div>
                                <div className="ml-auto text-sm text-muted-foreground">
                                    <Badge variant="outline">View</Badge>
                                </div>
                                <div className="ml-4 text-sm text-muted-foreground">
                                    10 min ago
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <Avatar className="h-9 w-9">
                                    <AvatarImage src="https://picsum.photos/seed/user3/32/32" />
                                    <AvatarFallback>IN</AvatarFallback>
                                </Avatar>
                                <div className="grid gap-1">
                                    <p className="text-sm font-medium">Isabella Nguyen</p>
                                    <p className="text-sm text-muted-foreground">
                                        Saved your contact
                                    </p>
                                </div>
                                <div className="ml-auto text-sm text-muted-foreground">
                                    <Badge variant="outline" className="text-green-500 border-green-500/50">Lead</Badge>
                                </div>
                                <div className="ml-4 text-sm text-muted-foreground">
                                    1 hour ago
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Upcoming Holidays</CardTitle>
                            <CardDescription>Plan your time off accordingly.</CardDescription>
                        </CardHeader>
                        <CardContent className="grid gap-4">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="font-medium">Diwali</p>
                                    <p className="text-sm text-muted-foreground">Festival of Lights</p>
                                </div>
                                <p className="text-sm font-medium">Nov 1, 2024</p>
                            </div>
                             <div className="flex items-center justify-between">
                                <div>
                                    <p className="font-medium">Christmas Day</p>
                                    <p className="text-sm text-muted-foreground">Celebration of Christmas</p>
                                </div>
                                <p className="text-sm font-medium">Dec 25, 2024</p>
                            </div>
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="font-medium">New Year's Day</p>
                                    <p className="text-sm text-muted-foreground">Start of the new year</p>
                                </div>
                                <p className="text-sm font-medium">Jan 1, 2025</p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </main>
        </EmployeeDashboardLayout>
    )
}
