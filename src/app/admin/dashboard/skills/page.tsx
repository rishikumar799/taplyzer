
'use client';
import { AdminDashboardLayout } from "@/components/admin-dashboard-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { PlusCircle, Trash2 } from "lucide-react";

export default function AdminSkillsPage() {
    return (
        <AdminDashboardLayout>
            <main className="flex-1 p-4 md:p-8">
                <div className="max-w-4xl mx-auto">
                    <Card>
                        <CardHeader>
                            <CardTitle>Skills & Projects</CardTitle>
                            <CardDescription>Showcase your skills and link to your projects.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="space-y-4">
                                <div className="flex gap-4 items-end">
                                    <div className="flex-grow space-y-2">
                                        <Input placeholder="e.g. Web Development" />
                                    </div>
                                    <Button variant="outline" size="icon"><Trash2 className="h-4 w-4" /></Button>
                                </div>
                                <div className="flex gap-4 items-end">
                                     <div className="flex-grow space-y-2">
                                        <Input placeholder="e.g. UI/UX Design" />
                                    </div>
                                    <Button variant="outline" size="icon"><Trash2 className="h-4 w-4" /></Button>
                                </div>
                            </div>
                            <Button variant="outline">
                                <PlusCircle className="mr-2 h-4 w-4" />
                                Add Skill
                            </Button>
                            <div className="flex justify-end">
                                <Button>Save Changes</Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </main>
        </AdminDashboardLayout>
    );
}
