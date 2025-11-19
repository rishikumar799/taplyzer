
'use client';
import { AdminDashboardLayout } from "@/components/admin-dashboard-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function AdminAboutUsPage() {
    return (
        <AdminDashboardLayout>
            <main className="flex-1 p-4 md:p-8">
                <div className="max-w-4xl mx-auto">
                    <Card>
                        <CardHeader>
                            <CardTitle>About Us Section</CardTitle>
                            <CardDescription>Manage the content for your "About Us" page.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                             <div className="space-y-2">
                                <Label htmlFor="title">Title</Label>
                                <Input id="title" defaultValue="About Taplyzer" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="description">Description</Label>
                                <Textarea id="description" rows={5} defaultValue="We're a team of innovators and creators passionate about transforming how people connect. Discover our story, our mission, and the values that drive us." />
                            </div>
                            <Button>Save Changes</Button>
                        </CardContent>
                    </Card>
                </div>
            </main>
        </AdminDashboardLayout>
    );
}
