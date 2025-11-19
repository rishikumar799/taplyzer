
'use client';
import { BusinessOwnerDashboardLayout } from "@/components/business-owner-dashboard-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Upload } from "lucide-react";
import Image from "next/image";

export default function BusinessOwnerSeoPage() {
    return (
        <BusinessOwnerDashboardLayout>
            <main className="flex-1 p-4 md:p-8">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-2xl font-semibold mb-6">SEO Management</h1>
                    <Card>
                        <CardHeader>
                            <CardTitle>Search Engine Optimization</CardTitle>
                            <CardDescription>Manage your site's SEO settings to improve visibility on search engines.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="space-y-2">
                                <Label htmlFor="meta-title">Meta Title</Label>
                                <Input id="meta-title" placeholder="Your Page Title" defaultValue="Taplyzer | Smart Business Cards for Modern Networking" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="meta-description">Meta Description</Label>
                                <Textarea id="meta-description" rows={3} placeholder="A brief description of your page." defaultValue="Connect instantly with Taplyzer's NFC-powered smart business cards. Create, customize, and share your digital identity with a single tap." />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="meta-keywords">Meta Keywords</Label>
                                <Input id="meta-keywords" placeholder="keyword1, keyword2, keyword3" defaultValue="NFC card, smart business card, digital profile, networking" />
                            </div>
                            <div className="space-y-2">
                                <Label>Social Share Image (OG Image)</Label>
                                <div className="flex items-center gap-4">
                                    <div className="w-48 h-24 border rounded-lg bg-muted flex items-center justify-center">
                                       <Image src="https://picsum.photos/seed/og-image/192/96" alt="OG Image preview" width={192} height={96} className="object-cover rounded-md"/>
                                    </div>
                                    <Button variant="outline"><Upload className="h-4 w-4 mr-2" /> Change Image</Button>
                                </div>
                            </div>
                            <div className="flex justify-end">
                                <Button>Save SEO Settings</Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </main>
        </BusinessOwnerDashboardLayout>
    );
}
