
'use client';
import { EmployeeDashboardLayout } from "@/components/employee-dashboard-layout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";

const holidays = [
    { date: '2024-01-26', name: 'Republic Day' },
    { date: '2024-03-25', name: 'Holi' },
    { date: '2024-08-15', name: 'Independence Day' },
    { date: '2024-10-02', name: 'Gandhi Jayanti' },
    { date: '2024-11-01', name: 'Diwali' },
    { date: '2024-12-25', name: 'Christmas Day' },
];


export default function CalendarPage() {
    
    const holidayDates = holidays.map(h => new Date(h.date));

    return (
        <EmployeeDashboardLayout>
            <main className="flex-1 p-4 md:p-8">
                 <h1 className="text-2xl font-semibold mb-6">Company Calendar 2024</h1>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-2">
                        <Card>
                            <CardContent className="p-0">
                                <Calendar
                                    mode="multiple"
                                    selected={holidayDates}
                                    className="p-4 w-full"
                                    disabled
                                    classNames={{
                                        day_selected: "bg-primary text-primary-foreground rounded-full",
                                        day: "h-12 w-12 text-base",
                                        head_cell: "w-12",
                                    }}
                                />
                            </CardContent>
                        </Card>
                    </div>
                    <div>
                        <Card>
                            <CardHeader>
                                <CardTitle>Holiday List</CardTitle>
                                <CardDescription>All official company holidays for the year.</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                {holidays.map(holiday => (
                                    <div key={holiday.name} className="flex justify-between items-center">
                                        <p className="font-medium">{holiday.name}</p>
                                        <p className="text-sm text-muted-foreground">{new Date(holiday.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}</p>
                                    </div>
                                ))}
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </main>
        </EmployeeDashboardLayout>
    );
}
