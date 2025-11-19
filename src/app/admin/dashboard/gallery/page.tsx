
'use client';
import { AdminDashboardLayout } from "@/components/admin-dashboard-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PlusCircle, Upload } from "lucide-react";
import Image from "next/image";

export default function AdminGalleryPage() {
    return (
        <AdminDashboardLayout>
            <main className="flex-1 p-4 md:p-8">
                 <div className="flex items-center justify-between mb-6">
                    <h1 className="text-2xl font-semibold">Gallery</h1>
                    <Button>
                        <PlusCircle className="h-4 w-4 mr-2" />
                        Add Image
                    </Button>
                </div>
                <Card>
                    <CardHeader>
                        <CardTitle>Manage Gallery</CardTitle>
                        <CardDescription>Upload and arrange images for your portfolio gallery.</CardDescription>
                    </CardHeader>
                    <CardContent className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <Image src="https://picsum.photos/seed/gallery1/300/300" alt="Gallery image 1" width={300} height={300} className="rounded-lg object-cover aspect-square" />
                        <Image src="https://picsum.photos/seed/gallery2/300/300" alt="Gallery image 2" width={300} height={300} className="rounded-lg object-cover aspect-square" />
                        <Image src="https://picsum.photos/seed/gallery3/300/300" alt="Gallery image 3" width={300} height={300} className="rounded-lg object-cover aspect-square" />
                         <div className="aspect-square border-2 border-dashed rounded-lg flex flex-col items-center justify-center text-center">
                            <Upload className="h-8 w-8 text-muted-foreground mb-2" />
                            <p className="text-sm text-muted-foreground">Drag & drop or</p>
                             <Button variant="link">Upload Image</Button>
                        </div>
                    </CardContent>
                </Card>
            </main>
        </AdminDashboardLayout>
    );
}
