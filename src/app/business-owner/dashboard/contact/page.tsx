
'use client';
import { BusinessOwnerDashboardLayout } from "@/components/business-owner-dashboard-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";

export default function BusinessOwnerContactPage() {
    return (
        <BusinessOwnerDashboardLayout>
            <main className="flex-1 p-4 md:p-8">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-2xl font-semibold mb-6">Contact Page Settings</h1>
                    <Card>
                        <CardHeader>
                            <CardTitle>Contact Form Management</CardTitle>
                            <CardDescription>Configure your contact form settings.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="flex items-center justify-between p-4 border rounded-lg">
                                <Label htmlFor="enable-form" className="font-semibold">Enable Contact Form</Label>
                                <Switch id="enable-form" defaultChecked />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="recipient-email">Recipient Email Address</Label>
                                <Input id="recipient-email" type="email" placeholder="Where should submissions be sent?" defaultValue="contact@yourbusiness.com" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="success-message">Success Message</Label>
                                <Textarea id="success-message" placeholder="Message shown after successful submission." defaultValue="Thank you for your message! We will get back to you shortly."/>
                            </div>
                            <div className="flex justify-end">
                                <Button>Save Settings</Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </main>
        </BusinessOwnerDashboardLayout>
    );
}
