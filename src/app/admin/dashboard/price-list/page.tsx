
'use client';
import { AdminDashboardLayout } from "@/components/admin-dashboard-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PlusCircle, Trash2 } from "lucide-react";

export default function AdminPriceListPage() {
    return (
        <AdminDashboardLayout>
            <main className="flex-1 p-4 md:p-8">
                 <div className="flex items-center justify-between mb-6">
                    <h1 className="text-2xl font-semibold">Price List</h1>
                    <Button>
                        <PlusCircle className="h-4 w-4 mr-2" />
                        Add Item
                    </Button>
                </div>
                <Card>
                    <CardHeader>
                        <CardTitle>Manage Price List</CardTitle>
                        <CardDescription>Set the prices for your services or products.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="grid grid-cols-[1fr_auto_auto] items-center gap-4">
                            <Label className="font-semibold">Item / Service</Label>
                            <Label className="font-semibold">Price (₹)</Label>
                            <span className="w-8"></span>
                        </div>
                        <div className="grid grid-cols-[1fr_auto_auto] items-center gap-4">
                            <Input placeholder="e.g. Standard NFC Card" defaultValue="Standard NFC Card" />
                            <Input type="number" placeholder="Price" defaultValue="999" className="w-28"/>
                            <Button variant="ghost" size="icon"><Trash2 className="h-4 w-4"/></Button>
                        </div>
                         <div className="grid grid-cols-[1fr_auto_auto] items-center gap-4">
                            <Input placeholder="e.g. Pro Digital Profile" defaultValue="Pro Digital Profile" />
                            <Input type="number" placeholder="Price" defaultValue="299" className="w-28"/>
                            <Button variant="ghost" size="icon"><Trash2 className="h-4 w-4"/></Button>
                        </div>
                        <div className="flex justify-end">
                            <Button>Save Price List</Button>
                        </div>
                    </CardContent>
                </Card>
            </main>
        </AdminDashboardLayout>
    );
}
