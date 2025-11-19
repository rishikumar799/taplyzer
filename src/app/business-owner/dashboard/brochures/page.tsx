
'use client';
import { BusinessOwnerDashboardLayout } from "@/components/business-owner-dashboard-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, PlusCircle, Trash2 } from "lucide-react";

const brochures = [
    { name: 'Company Profile 2024.pdf', size: '2.5 MB' },
    { name: 'Product Catalog - Q3.pdf', size: '10.8 MB' },
];

export default function BusinessOwnerBrochuresPage() {
    return (
        <BusinessOwnerDashboardLayout>
            <main className="flex-1 p-4 md:p-8">
                 <div className="flex items-center justify-between mb-6">
                    <h1 className="text-2xl font-semibold">Brochures</h1>
                    <Button>
                        <PlusCircle className="h-4 w-4 mr-2" />
                        Add Brochure
                    </Button>
                </div>
                <Card>
                    <CardHeader>
                        <CardTitle>Manage Brochures</CardTitle>
                        <CardDescription>Upload and manage your company brochures and catalogs.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        {brochures.map(brochure => (
                             <div key={brochure.name} className="flex items-center justify-between p-3 rounded-lg border bg-muted/50">
                                <div className="flex items-center gap-3">
                                    <FileText className="h-6 w-6 text-muted-foreground"/>
                                    <div>
                                        <p className="font-medium">{brochure.name}</p>
                                        <p className="text-sm text-muted-foreground">{brochure.size}</p>
                                    </div>
                                </div>
                                <Button variant="ghost" size="icon">
                                    <Trash2 className="h-4 w-4" />
                                </Button>
                            </div>
                        ))}
                         <div className="flex justify-end mt-4">
                            <Button>Save Changes</Button>
                        </div>
                    </CardContent>
                </Card>
            </main>
        </BusinessOwnerDashboardLayout>
    );
}
