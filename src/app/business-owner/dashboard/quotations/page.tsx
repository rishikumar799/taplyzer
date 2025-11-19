
'use client';
import { BusinessOwnerDashboardLayout } from "@/components/business-owner-dashboard-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PlusCircle } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function BusinessOwnerQuotationsPage() {
    return (
        <BusinessOwnerDashboardLayout>
            <main className="flex-1 p-4 md:p-8">
                 <div className="flex items-center justify-between mb-6">
                    <h1 className="text-2xl font-semibold">Quotations</h1>
                </div>
                <Card>
                    <CardHeader>
                        <CardTitle>Manage Quotation Settings</CardTitle>
                        <CardDescription>Set up your default quotation template and terms.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="space-y-2">
                           <Label htmlFor="terms">Terms & Conditions</Label>
                           <Textarea id="terms" rows={8} placeholder="Enter your standard terms and conditions for quotations..." />
                        </div>
                        <div className="space-y-2">
                           <Label htmlFor="footer">Footer Text</Label>
                           <Textarea id="footer" rows={3} placeholder="e.g. Thank you for your business!" />
                        </div>
                         <div className="flex justify-end">
                            <Button>Save Settings</Button>
                        </div>
                    </CardContent>
                </Card>
            </main>
        </BusinessOwnerDashboardLayout>
    );
}
