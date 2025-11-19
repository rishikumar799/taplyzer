
'use client';
import { DistributorDashboardLayout } from "@/components/distributor-dashboard-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Upload } from "lucide-react";
import Link from "next/link";

export default function RaiseIssuePage() {
    return (
        <DistributorDashboardLayout>
            <main className="flex-1 p-4 md:p-8">
                <div className="flex items-center gap-4 mb-6">
                    <Link href="/distributor/dashboard">
                        <Button variant="outline" size="icon" className="h-9 w-9">
                            <ArrowLeft className="h-5 w-5" />
                        </Button>
                    </Link>
                    <div>
                        <h1 className="text-2xl font-bold">Raise Technical Issue</h1>
                        <p className="text-muted-foreground text-sm">Submit a ticket for a technical problem</p>
                    </div>
                </div>

                <Card>
                    <CardHeader>
                        <CardTitle>New Technical Issue</CardTitle>
                        <CardDescription>
                            Please provide as much detail as possible so our team can assist you quickly.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="space-y-2">
                            <Label htmlFor="issue-title">Issue Title</Label>
                            <Input id="issue-title" placeholder="e.g., Unable to login, Analytics not loading" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="issue-description">Issue Description</Label>
                            <Textarea id="issue-description" placeholder="Describe the issue in detail..." rows={6} />
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <Label htmlFor="priority">Priority</Label>
                                <Select>
                                    <SelectTrigger id="priority">
                                        <SelectValue placeholder="Select priority" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="low">Low</SelectItem>
                                        <SelectItem value="medium">Medium</SelectItem>
                                        <SelectItem value="high">High</SelectItem>
                                        <SelectItem value="urgent">Urgent</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="attachments">Attachments</Label>
                                <div className="border-2 border-dashed rounded-lg p-6 text-center text-muted-foreground flex flex-col items-center justify-center">
                                    <Upload className="h-8 w-8 mb-2" />
                                    <p className="text-sm mb-1">Drag & drop or click to upload</p>
                                    <p className="text-xs">Screenshots, videos, or logs</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-end">
                            <Button>Submit Issue</Button>
                        </div>
                    </CardContent>
                </Card>
            </main>
        </DistributorDashboardLayout>
    )
}
