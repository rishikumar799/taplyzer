
'use client';
import { BusinessOwnerDashboardLayout } from "@/components/business-owner-dashboard-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PlusCircle, Trash2 } from "lucide-react";
import { Switch } from "@/components/ui/switch";

export default function BusinessOwnerMenuItemsPage() {
    return (
        <BusinessOwnerDashboardLayout>
            <main className="flex-1 p-4 md:p-8">
                <div className="max-w-4xl mx-auto">
                    <div className="flex items-center justify-between mb-6">
                        <h1 className="text-2xl font-semibold">Menu Items</h1>
                        <Button>
                            <PlusCircle className="h-4 w-4 mr-2" />
                            Add Item
                        </Button>
                    </div>
                    <Card>
                        <CardHeader>
                            <CardTitle>Restaurant Menu</CardTitle>
                            <CardDescription>Manage the items on your menu.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="space-y-4 p-4 border rounded-lg">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label>Item Name</Label>
                                        <Input defaultValue="Paneer Tikka" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label>Price (₹)</Label>
                                        <Input type="number" defaultValue="350" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label>Description</Label>
                                    <Input defaultValue="Marinated cottage cheese cubes grilled to perfection." />
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <Switch id="veg-paneer" defaultChecked/>
                                        <Label htmlFor="veg-paneer">Veg</Label>
                                    </div>
                                    <Button variant="ghost" size="icon"><Trash2 className="h-4 w-4 text-destructive" /></Button>
                                </div>
                            </div>
                            <div className="space-y-4 p-4 border rounded-lg">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label>Item Name</Label>
                                        <Input defaultValue="Butter Chicken" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label>Price (₹)</Label>
                                        <Input type="number" defaultValue="450" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label>Description</Label>
                                    <Input defaultValue="Tender chicken in a creamy tomato sauce." />
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <Switch id="veg-chicken" />
                                        <Label htmlFor="veg-chicken">Veg</Label>
                                    </div>
                                     <Button variant="ghost" size="icon"><Trash2 className="h-4 w-4 text-destructive" /></Button>
                                </div>
                            </div>
                            <div className="flex justify-end">
                                <Button>Save Menu</Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </main>
        </BusinessOwnerDashboardLayout>
    );
}
