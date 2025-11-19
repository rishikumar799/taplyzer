
'use client';
import { AdminDashboardLayout } from "@/components/admin-dashboard-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Upload } from "lucide-react";

export default function AdminMenuCardsPage() {
    return (
        <AdminDashboardLayout>
            <main className="flex-1 p-4 md:p-8">
                 <h1 className="text-2xl font-semibold mb-6">Menu Cards</h1>
                <Card>
                    <CardHeader>
                        <CardTitle>Upload Menu Card</CardTitle>
                        <CardDescription>Upload a PDF or image of your menu card.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="border-2 border-dashed rounded-lg p-12 text-center">
                             <Upload className="mx-auto h-12 w-12 text-muted-foreground" />
                            <h3 className="mt-4 text-lg font-medium text-foreground">Drag and drop files here</h3>
                            <p className="mt-1 text-sm text-muted-foreground">or click to browse</p>
                            <Button variant="outline" className="mt-4">
                                Select Files
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </main>
        </AdminDashboardLayout>
    );
}
