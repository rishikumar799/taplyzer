
'use client';
import { DistributorDashboardLayout } from "@/components/distributor-dashboard-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Lock, User, Banknote, ShieldCheck, Mail, Save } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export default function SettingsPage() {
    return (
        <DistributorDashboardLayout>
            <main className="flex-1 p-4 md:p-8">
                <div className="flex items-center justify-between mb-6">
                    <div>
                        <Link href="/distributor/dashboard" className="flex items-center text-sm text-muted-foreground hover:text-primary mb-2">
                            <ArrowLeft className="h-4 w-4 mr-2" />
                            Back to Dashboard
                        </Link>
                        <h1 className="text-3xl font-bold">Settings</h1>
                        <p className="text-muted-foreground">Manage your account settings and preferences</p>
                    </div>
                </div>

                <Tabs defaultValue="security" className="w-full">
                    <TabsList className="grid w-full grid-cols-2 max-w-md">
                        <TabsTrigger value="security">
                            <ShieldCheck className="mr-2 h-4 w-4" />
                            Password & Security
                        </TabsTrigger>
                        <TabsTrigger value="bank">
                             <Banknote className="mr-2 h-4 w-4" />
                            Bank Account
                        </TabsTrigger>
                    </TabsList>
                    <TabsContent value="security" className="mt-6">
                        <div className="grid gap-8">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <Lock className="h-5 w-5 text-primary" />
                                        Change Password
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="current-password">Current Password</Label>
                                        <Input id="current-password" type="password" placeholder="Enter your current password" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="new-password">New Password</Label>
                                        <Input id="new-password" type="password" placeholder="Enter your new password" />
                                        <p className="text-xs text-muted-foreground">Password must be at least 6 characters long.</p>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="confirm-password">Confirm New Password</Label>
                                        <Input id="confirm-password" type="password" placeholder="Confirm your new password" />
                                    </div>
                                    <div className="flex justify-start">
                                        <Button>Update Password</Button>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <Mail className="h-5 w-5 text-primary" />
                                        Password Reset
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground mb-4">Alternatively, you can receive a password reset link via email. This will allow you to reset your password without knowing your current password.</p>
                                    <Button variant="outline">Send Reset Email</Button>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <User className="h-5 w-5 text-primary" />
                                        Account Information
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="grid md:grid-cols-2 gap-x-8 gap-y-4 text-sm">
                                    <div>
                                        <p className="text-muted-foreground">Full Name</p>
                                        <p className="font-medium">Karunakarreddy Kamireddy</p>
                                    </div>
                                     <div>
                                        <p className="text-muted-foreground">Email</p>
                                        <p className="font-medium">karunakarreddykamireddy01@gmail.com</p>
                                    </div>
                                    <div>
                                        <p className="text-muted-foreground">Phone</p>
                                        <p className="font-medium">7416768741</p>
                                    </div>
                                     <div>
                                        <p className="text-muted-foreground">Territory</p>
                                        <p className="font-medium">South India</p>
                                    </div>
                                    <div>
                                        <p className="text-muted-foreground">Username</p>
                                        <p className="font-medium">karunakarreddy</p>
                                    </div>
                                    <div>
                                        <p className="text-muted-foreground">Status</p>
                                        <Badge variant="outline" className="text-green-600 border-green-200 bg-green-50 dark:text-green-400 dark:border-green-800 dark:bg-green-900/20">Active</Badge>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </TabsContent>
                    <TabsContent value="bank" className="mt-6">
                         <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Banknote className="h-5 w-5 text-primary" />
                                    Bank Account Details
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-6 max-w-lg">
                                <div className="space-y-2">
                                    <Label htmlFor="account-holder">Account Holder Name</Label>
                                    <Input id="account-holder" placeholder="Enter account holder name" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="account-number">Account Number</Label>
                                    <Input id="account-number" placeholder="Enter account number" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="confirm-account-number">Confirm Account Number</Label>
                                    <Input id="confirm-account-number" placeholder="Re-enter account number" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="ifsc-code">IFSC Code</Label>
                                    <Input id="ifsc-code" placeholder="Enter IFSC code (e.g., SBIN0001234)" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="bank-name">Bank Name</Label>
                                    <Input id="bank-name" placeholder="Bank name will be auto-filled after IFSC verification" disabled />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="branch-name">Branch Name</Label>
                                    <Input id="branch-name" placeholder="Branch name will be auto-filled after IFSC verification" disabled />
                                </div>
                                <div className="pt-2">
                                     <Button>
                                        <Save className="mr-2 h-4 w-4" />
                                        Save Bank Details
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>
            </main>
        </DistributorDashboardLayout>
    )
}
