
'use client';
import { DistributorDashboardLayout } from "@/components/distributor-dashboard-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, PlusCircle, Search } from "lucide-react";
import Link from "next/link";

function ComplaintBoxIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 10V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h5"/>
            <path d="M14 15c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-2z"/>
            <path d="M18 23v-3.5"/>
            <path d="M18 10V5"/>
            <path d="m14 8 8 8"/>
            <path d="m14 20 8-8"/>
        </svg>
    )
}

export default function OrderComplaintsPage() {
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
                            <h1 className="text-2xl font-bold">Order Complaints</h1>
                            <p className="text-sm text-muted-foreground">Raise complaints for specific orders</p>
                        </div>
                    </div>
                    <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                        <PlusCircle className="h-4 w-4 mr-2" />
                        New Complaint
                    </Button>
                </div>
                
                <Card className="mb-8">
                    <CardHeader>
                        <CardTitle className="text-base font-semibold">Your Order Complaints</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col items-center justify-center text-center py-16">
                        <ComplaintBoxIcon className="h-12 w-12 text-muted-foreground/30 mb-4" />
                        <h3 className="text-lg font-semibold mb-1 text-muted-foreground">No order complaints found</h3>
                        <p className="text-sm text-muted-foreground/70">You haven't raised any order complaints yet.</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="text-base font-semibold">
                            Tips for Order Complaints
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="grid md:grid-cols-2 gap-x-8 gap-y-6">
                        <div>
                            <h4 className="font-semibold text-foreground text-sm">Be Order-Specific</h4>
                            <p className="text-xs text-muted-foreground">Select the exact order you're having issues with and provide order-related details.</p>
                        </div>
                        <div>
                            <h4 className="font-semibold text-foreground text-sm">Include Order Context</h4>
                            <p className="text-xs text-muted-foreground">Mention delivery issues, product quality, or billing discrepancies related to the order.</p>
                        </div>
                        <div>
                            <h4 className="font-semibold text-foreground text-sm">Set Appropriate Priority</h4>
                            <p className="text-xs text-muted-foreground">Use high priority for urgent order issues affecting customer satisfaction.</p>
                        </div>
                        <div>
                            <h4 className="font-semibold text-foreground text-sm">Track Progress</h4>
                            <p className="text-xs text-muted-foreground">Monitor your complaint status and provide additional information when requested.</p>
                        </div>
                    </CardContent>
                </Card>
            </main>
        </DistributorDashboardLayout>
    );
}
