
'use client';
import { BusinessOwnerDashboardLayout } from "@/components/business-owner-dashboard-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { PlusCircle, Trash2 } from "lucide-react";

export default function BusinessOwnerSlotBookingsPage() {
    return (
        <BusinessOwnerDashboardLayout>
            <main className="flex-1 p-4 md:p-8">
                 <h1 className="text-2xl font-semibold mb-6">Slot Booking Settings</h1>
                <Card>
                    <CardHeader>
                        <CardTitle>Manage Your Availability</CardTitle>
                        <CardDescription>Set up the time slots when clients can book appointments with you.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="space-y-4">
                            <h3 className="font-medium">Working Hours</h3>
                            {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map(day => (
                                <div key={day} className="flex items-center justify-between p-4 border rounded-lg">
                                    <Label className="font-semibold">{day}</Label>
                                    <div className="flex items-center gap-4">
                                        <Switch defaultChecked={day !== 'Sunday'}/>
                                        <div className="flex items-center gap-2">
                                            <Input type="time" defaultValue="09:00" className="w-28" />
                                            <span>-</span>
                                            <Input type="time" defaultValue="17:00" className="w-28" />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                         <div className="space-y-4">
                            <h3 className="font-medium">Appointment Settings</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label>Slot Duration (minutes)</Label>
                                    <Input type="number" defaultValue="30"/>
                                </div>
                                <div className="space-y-2">
                                    <Label>Buffer Time (minutes)</Label>
                                    <Input type="number" defaultValue="15"/>
                                </div>
                            </div>
                        </div>

                         <div className="flex justify-end">
                            <Button>Save Availability</Button>
                        </div>
                    </CardContent>
                </Card>
            </main>
        </BusinessOwnerDashboardLayout>
    );
}
