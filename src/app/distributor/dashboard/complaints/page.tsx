
'use client';
import { DistributorDashboardLayout } from "@/components/distributor-dashboard-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, PlusCircle, AlertTriangle } from "lucide-react";
import Link from "next/link";

export default function ComplaintsPage() {
    return (
        <DistributorDashboardLayout>
            <main className="flex-1 p-4 md:p-8">
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-4">
                         <Link href="/distributor/dashboard">
                            <Button variant="ghost" size="icon" className="h-9 w-9">
                                <ArrowLeft className="h-5 w-5" />
                            </Button>
                        </Link>
                        <div>
                            <h1 className="text-2xl font-bold">Issues & Support</h1>
                            <p className="text-sm text-muted-foreground">Raise issues and track their status</p>
                        </div>
                    </div>
                    <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                        <PlusCircle className="h-4 w-4 mr-2" />
                        Raise New Issue
                    </Button>
                </div>
                
                <Card className="mb-8">
                    <CardHeader>
                        <CardTitle className="text-base font-semibold">Your Issues</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col items-center justify-center text-center py-16">
                        <AlertTriangle className="h-12 w-12 text-muted-foreground/30 mb-4" />
                        <h3 className="text-lg font-semibold mb-1 text-muted-foreground">No issues found</h3>
                        <p className="text-sm text-muted-foreground/70">You haven't raised any issues yet.</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="text-base font-semibold">
                            Tips for Raising Issues
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="grid md:grid-cols-2 gap-x-8 gap-y-6">
                        <div>
                            <h4 className="font-semibold text-foreground text-sm">Be Specific</h4>
                            <p className="text-xs text-muted-foreground">Provide clear and detailed information about the issue you're experiencing.</p>
                        </div>
                        <div>
                            <h4 className="font-semibold text-foreground text-sm">Include Context</h4>
                            <p className="text-xs text-muted-foreground">Mention when the issue occurred and what you were trying to do.</p>
                        </div>
                        <div>
                            <h4 className="font-semibold text-foreground text-sm">Set Priority</h4>
                            <p className="text-xs text-muted-foreground">Choose the appropriate priority level based on how urgently you need resolution.</p>
                        </div>
                        <div>
                            <h4 className="font-semibold text-foreground text-sm">Follow Up</h4>
                            <p className="text-xs text-muted-foreground">Check back regularly for updates and provide additional information if requested.</p>
                        </div>
                    </CardContent>
                </Card>
            </main>
        </DistributorDashboardLayout>
    );
}
