
'use client';
import { BusinessOwnerDashboardLayout } from "@/components/business-owner-dashboard-layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code } from "lucide-react";

export default function BusinessOwnerImageKitGuidePage() {
    return (
        <BusinessOwnerDashboardLayout>
            <main className="flex-1 p-4 md:p-8">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-2xl font-semibold mb-6">ImageKit Guide</h1>
                    <Card>
                        <CardHeader>
                            <CardTitle>Using ImageKit for Image Optimization</CardTitle>
                            <CardDescription>Follow this guide to host and optimize your images using ImageKit for the best performance.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4 prose prose-sm dark:prose-invert max-w-none">
                            <p>ImageKit is a powerful image optimization and delivery service. We recommend using it to serve all images on your public profile for faster load times.</p>
                            
                            <h3 className="font-semibold">Step 1: Create an ImageKit Account</h3>
                            <p>If you don't have an account, sign up for a free plan at <a href="https://imagekit.io" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">imagekit.io</a>.</p>
                            
                            <h3 className="font-semibold">Step 2: Upload Your Images</h3>
                            <p>In your ImageKit dashboard, go to the "Media Library" and upload your images, such as your profile picture, gallery photos, or product images.</p>

                            <h3 className="font-semibold">Step 3: Get the Image URL</h3>
                            <p>Once uploaded, click on an image to open its detail view. Copy the "URL" provided. It will look something like this:</p>
                            <pre className="bg-muted p-3 rounded-md overflow-x-auto"><code>https://ik.imagekit.io/your_account_id/your_image.jpg</code></pre>
                            
                            <h3 className="font-semibold">Step 4: Use the URL in Your Admin Panel</h3>
                            <p>Paste the copied ImageKit URL into the relevant fields in your admin panel, such as the "Profile Picture URL" field or when adding images to your gallery.</p>
                        </CardContent>
                    </Card>
                </div>
            </main>
        </BusinessOwnerDashboardLayout>
    );
}
