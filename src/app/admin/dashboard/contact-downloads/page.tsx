
'use client';
import { AdminDashboardLayout } from "@/components/admin-dashboard-layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const contacts = [
    { name: 'John Doe', email: 'john.doe@example.com', phone: '+1-202-555-0178', date: '2024-07-28' },
    { name: 'Jane Smith', email: 'jane.smith@example.com', phone: '+1-202-555-0189', date: '2024-07-27' },
    { name: 'Alice Johnson', email: 'alice.j@example.com', phone: '+1-202-555-0132', date: '2024-07-27' },
];

export default function AdminContactDownloadsPage() {
    return (
        <AdminDashboardLayout>
            <main className="flex-1 p-4 md:p-8">
                 <div className="flex items-center justify-between mb-6">
                    <h1 className="text-2xl font-semibold">Contact Downloads</h1>
                    <Button>
                        <Download className="h-4 w-4 mr-2" />
                        Export All
                    </Button>
                </div>
                <Card>
                    <CardHeader>
                        <CardTitle>Downloaded Contacts</CardTitle>
                        <CardDescription>A list of contacts downloaded by visitors from your profile.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Name</TableHead>
                                    <TableHead>Email</TableHead>
                                    <TableHead>Phone</TableHead>
                                    <TableHead>Date</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {contacts.map(contact => (
                                    <TableRow key={contact.email}>
                                        <TableCell className="font-medium">{contact.name}</TableCell>
                                        <TableCell>{contact.email}</TableCell>
                                        <TableCell>{contact.phone}</TableCell>
                                        <TableCell>{contact.date}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </main>
        </AdminDashboardLayout>
    );
}
