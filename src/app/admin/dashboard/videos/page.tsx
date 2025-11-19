
'use client';
import { AdminDashboardLayout } from "@/components/admin-dashboard-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PlusCircle, Upload } from "lucide-react";
import Image from "next/image";

export default function AdminVideosPage() {
    return (
        <AdminDashboardLayout>
            <main className="flex-1 p-4 md:p-8">
                 <div className="flex items-center justify-between mb-6">
                    <h1 className="text-2xl font-semibold">Videos</h1>
                    <Button>
                        <PlusCircle className="h-4 w-4 mr-2" />
                        Add Video
                    </Button>
                </div>
                <Card>
                    <CardHeader>
                        <CardTitle>Manage Videos</CardTitle>
                        <CardDescription>Upload and manage videos for your profile.</CardDescription>
                    </CardHeader>
                    <CardContent className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <Card>
                            <div className="aspect-video bg-muted rounded-t-lg flex items-center justify-center">
                                <Image src="https://picsum.photos/seed/video1/300/169" alt="Video thumbnail" width={300} height={169} className="rounded-t-lg object-cover" />
                            </div>
                            <div className="p-4">
                                <Input defaultValue="Product Demo Video" />
                            </div>
                        </Card>
                         <Card>
                            <div className="aspect-video bg-muted rounded-t-lg flex items-center justify-center">
                                <Image src="https://picsum.photos/seed/video2/300/169" alt="Video thumbnail" width={300} height={169} className="rounded-t-lg object-cover" />
                            </div>
                            <div className="p-4">
                                <Input defaultValue="Customer Testimonial" />
                            </div>
                        </Card>
                        <div className="aspect-video border-2 border-dashed rounded-lg flex flex-col items-center justify-center text-center">
                            <Upload className="h-8 w-8 text-muted-foreground mb-2" />
                            <p className="text-sm text-muted-foreground">Drag & drop or</p>
                             <Button variant="link">Upload Video</Button>
                        </div>
                    </CardContent>
                </Card>
            </main>
        </AdminDashboardLayout>
    );
}
