
'use client';
import { BusinessOwnerDashboardLayout } from "@/components/business-owner-dashboard-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { PlusCircle, Trash2, Server } from "lucide-react";

export default function BusinessOwnerServicesPage() {
    return (
        <BusinessOwnerDashboardLayout>
            <main className="flex-1 p-4 md:p-8">
                <div className="max-w-4xl mx-auto">
                    <div className="flex items-center justify-between mb-6">
                        <h1 className="text-2xl font-semibold">Services</h1>
                        <Button>
                            <PlusCircle className="h-4 w-4 mr-2" />
                            Add Service
                        </Button>
                    </div>
                    <Card>
                        <CardHeader>
                            <CardTitle>Manage Services</CardTitle>
                            <CardDescription>Add, edit, or remove the services you offer.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="p-4 border rounded-lg space-y-3">
                                <div className="flex items-center gap-4">
                                    <Server className="h-5 w-5 text-muted-foreground" />
                                    <Input className="flex-grow" placeholder="Service Title" defaultValue="Custom Card Design" />
                                    <Button variant="ghost" size="icon"><Trash2 className="h-4 w-4 text-destructive"/></Button>
                                </div>
                                <Input placeholder="Service Description" defaultValue="Create a lasting first impression with a smart card designed to match your brand." />
                            </div>
                             <div className="p-4 border rounded-lg space-y-3">
                                <div className="flex items-center gap-4">
                                    <Server className="h-5 w-5 text-muted-foreground" />
                                    <Input className="flex-grow" placeholder="Service Title" defaultValue="Team & Enterprise Solutions" />
                                     <Button variant="ghost" size="icon"><Trash2 className="h-4 w-4 text-destructive"/></Button>
                                </div>
                                <Input placeholder="Service Description" defaultValue="Equip your entire organization with smart cards and manage them from a centralized dashboard." />
                            </div>
                            <div className="flex justify-end">
                                <Button>Save Services</Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </main>
        </BusinessOwnerDashboardLayout>
    );
}
