
'use client';
import { BusinessOwnerDashboardLayout } from "@/components/business-owner-dashboard-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Facebook, Github, Instagram, Link as LinkIcon, Linkedin, Share2, Star, Twitter, Youtube, Pilcrow, MessageCircle, Eye, Info } from "lucide-react";
import React from "react";

const socialPlatforms = [
    { name: 'Twitter (X)', icon: Twitter, placeholder: "Enter Twitter (X) URL" },
    { name: 'LinkedIn', icon: Linkedin, placeholder: "Enter LinkedIn URL" },
    { name: 'GitHub', icon: Github, placeholder: "Enter GitHub URL" },
    { name: 'Instagram', icon: Instagram, placeholder: "Enter Instagram URL" },
    { name: 'Facebook', icon: Facebook, placeholder: "Enter Facebook URL" },
    { name: 'YouTube', icon: Youtube, placeholder: "Enter YouTube URL" },
    { name: 'Koo', icon: Pilcrow, placeholder: "Enter Koo URL" },
    { name: 'WhatsApp', icon: MessageCircle, placeholder: "Enter phone number or WhatsApp URL" },
    { name: 'ShareChat', icon: Share2, placeholder: "Enter ShareChat URL" },
    { name: 'TripAdvisor', icon: UserCircle, placeholder: "Enter TripAdvisor URL" },
    { name: 'Custom Link', icon: LinkIcon, placeholder: "Enter custom link URL" },
    { name: 'Pinterest', icon: PinterestIcon, placeholder: "Enter Pinterest URL" },
    { name: 'Snapchat', icon: SnapchatIcon, placeholder: "Enter Snapchat URL" },
    { name: 'Discord', icon: MessageCircle, placeholder: "Enter Discord URL" },
    { name: 'Telegram', icon: TelegramIcon, placeholder: "Enter Telegram URL" },
    { name: 'Reddit', icon: RedditIcon, placeholder: "Enter Reddit URL" },
];

function UserCircle(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="12" cy="12" r="10"/><circle cx="12" cy="10" r="3"/><path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"/></svg>
    )
}

function PinterestIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12 12c0-2.2-1.3-4-4-4-3 0-5 2-5 5.5 0 2.4 1.7 4.5 4 4.5 1 0 2-1 2-2.2M12 12c2.2 0 4-1.8 4-4 0-3-2-5-5-5-3.3 0-5.5 2.5-5.5 5.5M12 12v9"/><path d="m19 6-3 9c0 3 2 5 5 5"/></svg>
    );
}

function RedditIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/><path d="M16.5 10c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm-9 0c-.83 0-1.5.67-1.5 1.5S6.67 13 7.5 13s1.5-.67 1.5-1.5S8.33 10 7.5 10zm4.5 4c-1.66 0-3 1.34-3 3h6c0-1.66-1.34-3-3-3z"/><path d="M16.83 8.33c-1.12-.52-2.43-.83-3.83-.83s-2.71.31-3.83.83"/><path d="M17 17c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z"/></svg>
    );
}

function SnapchatIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
            <path d="M12 22a10 10 0 0 1-10-10c0-5.523 4.477-10 10-10a10 10 0 0 1 10 10c0 5.523-4.477 10-10 10z"/>
            <path d="M12 15.5c-2.485 0-4.5-2.015-4.5-4.5S9.515 6.5 12 6.5s4.5 2.015 4.5 4.5c0 .35-.04.688-.117.98"/>
            <path d="M16 16.5c-.828 0-1.5-.672-1.5-1.5s.672-1.5 1.5-1.5 1.5.672 1.5 1.5-.672 1.5-1.5 1.5z"/>
        </svg>
    )
}

function TelegramIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
            <path d="M22 2L11 13" />
            <path d="M22 2L15 22L11 13L2 9L22 2Z" />
        </svg>
    );
}

export default function BusinessOwnerProfilePage() {
    return (
        <BusinessOwnerDashboardLayout>
            <main className="flex-1 p-4 md:p-8">
                <div className="max-w-4xl mx-auto">
                    <Card className="mb-8">
                        <CardHeader>
                            <CardTitle>Profile Link</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Input defaultValue="https://taplyzer.com/alanturing" />
                            <p className="text-sm text-muted-foreground mt-2">Enter full URL (https://example.com) or domain (example.com). Missing https:// will be added automatically.</p>
                        </CardContent>
                    </Card>

                    <Card className="mb-8">
                        <CardHeader>
                            <CardTitle>Button Style</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Select defaultValue="filled">
                                <SelectTrigger>
                                    <SelectValue placeholder="Select button style" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="filled">Primary (Filled)</SelectItem>
                                    <SelectItem value="outline">Primary (Outline)</SelectItem>
                                </SelectContent>
                            </Select>
                            <p className="text-sm text-muted-foreground mt-2">Visual style of the button.</p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <div className="flex items-center gap-2">
                                <Share2 className="h-5 w-5" />
                                <CardTitle>Social Media Links</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="bg-primary/10 border-l-4 border-primary text-primary-foreground p-4 rounded-md mb-6">
                                <div className="flex items-start gap-3">
                                    <Info className="h-5 w-5 mt-0.5 text-primary" />
                                    <div>
                                        <h4 className="font-semibold text-primary">New Multi-Link Feature</h4>
                                        <ul className="list-disc pl-5 mt-1 text-sm text-primary/80">
                                            <li>Add multiple links per platform (e.g., multiple Instagram accounts).</li>
                                            <li>Users will see a popup to choose which link to open.</li>
                                            <li>Add labels and descriptions to help users identify each link.</li>
                                            <li>Use the eye icon to show/hide platforms on your profile.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            
                            <h3 className="text-lg font-semibold mb-4">Primary Links</h3>
                            <div className="grid md:grid-cols-2 gap-4 mb-8">
                                <div className="space-y-2">
                                    <Label className="flex items-center gap-2"><Star className="h-4 w-4"/> Google Reviews</Label>
                                    <Input placeholder="Enter google reviews URL" />
                                </div>
                                <div className="space-y-2">
                                    <Label className="flex items-center gap-2"><LinkIcon className="h-4 w-4"/> Website</Label>
                                    <Input placeholder="Enter website URL" />
                                </div>
                            </div>

                             <h3 className="text-lg font-semibold mb-4">Social Media Platforms</h3>
                             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {socialPlatforms.map(platform => (
                                    <div key={platform.name} className="space-y-2">
                                        <div className="flex items-center justify-between">
                                            <Label className="flex items-center gap-2">
                                                <platform.icon className="h-4 w-4" /> {platform.name}
                                            </Label>
                                            <Switch defaultChecked />
                                        </div>
                                        <Input placeholder={platform.placeholder} />
                                    </div>
                                ))}
                            </div>
                            <div className="flex justify-end mt-6">
                                <Button>Save Changes</Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </main>
        </BusinessOwnerDashboardLayout>
    );
}
