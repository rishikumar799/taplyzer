
'use client';
import { AdminDashboardLayout } from "@/components/admin-dashboard-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Facebook, Github, Instagram, Link as LinkIcon, Linkedin, Share2, Star, Twitter, Youtube, Pilcrow, MessageCircle, Eye, Info, Upload, Camera, Image as ImageIcon, Phone, MapPin, Mail, BarChart2, Target, Lightbulb, Pencil, MessageSquare } from "lucide-react";
import React from "react";
import { Textarea } from "@/components/ui/textarea";

const socialPlatforms = [
    { name: 'Twitter (X)', icon: Twitter, placeholder: "Enter twitter (x) URL" },
    { name: 'LinkedIn', icon: Linkedin, placeholder: "Enter linkedin URL" },
    { name: 'GitHub', icon: Github, placeholder: "Enter github URL" },
    { name: 'Instagram', icon: Instagram, placeholder: "Enter instagram URL" },
    { name: 'Facebook', icon: Facebook, placeholder: "Enter facebook URL" },
    { name: 'YouTube', icon: Youtube, placeholder: "Enter youtube URL" },
    { name: 'Koo', icon: Pilcrow, placeholder: "Enter koo URL" },
    { name: 'WhatsApp', icon: MessageSquare, placeholder: "Enter phone number or WhatsApp URL" },
    { name: 'ShareChat', icon: Share2, placeholder: "Enter sharechat URL" },
    { name: 'TripAdvisor', icon: UserCircle, placeholder: "Enter tripadvisor URL" },
    { name: 'Custom Link', icon: LinkIcon, placeholder: "Enter custom link URL" },
    { name: 'Pinterest', icon: PinterestIcon, placeholder: "Enter pinterest URL" },
    { name: 'Snapchat', icon: SnapchatIcon, placeholder: "Enter snapchat URL" },
    { name: 'Discord', icon: MessageCircle, placeholder: "Enter discord URL" },
    { name: 'Telegram', icon: TelegramIcon, placeholder: "Enter telegram URL" },
    { name: 'Reddit', icon: RedditIcon, placeholder: "Enter reddit URL" },
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

export default function AdminProfilePage() {
    return (
        <AdminDashboardLayout>
            <main className="flex-1 p-4 md:p-8">
                <div className="flex items-center justify-between mb-6">
                    <h1 className="text-2xl font-semibold">Edit Profile</h1>
                    <div className="flex items-center gap-2">
                        <Button variant="ghost">Cancel</Button>
                        <Button>Save Changes</Button>
                    </div>
                </div>

                <div className="max-w-4xl mx-auto space-y-8">
                    <Card>
                        <CardContent className="pt-6 space-y-6">
                            <div className="space-y-2">
                                <Label htmlFor="display-name">Display Name</Label>
                                <Input id="display-name" defaultValue="karunakarreddy" />
                            </div>

                            <div className="space-y-2">
                                <Label>Profile Image</Label>
                                <div className="flex items-center gap-4">
                                    <Button variant="outline"><Upload className="h-4 w-4 mr-2" /> Upload Image</Button>
                                    <span className="text-sm text-muted-foreground">or</span>
                                    <Input placeholder="https://ik.imagekit.io/your-id/profile.jpg" />
                                </div>
                                <p className="text-xs text-muted-foreground">📸 Upload a file or paste an image URL. Max file size: 5MB. Recommended: 400x400px</p>
                            </div>

                            <div className="space-y-2">
                                <Label>Cover Image</Label>
                                <div className="flex items-center gap-4">
                                    <Button variant="outline"><Upload className="h-4 w-4 mr-2" /> Upload Cover</Button>
                                    <span className="text-sm text-muted-foreground">or</span>
                                    <Input placeholder="https://ik.imagekit.io/your-id/cover.jpg" />
                                </div>
                                <p className="text-xs text-muted-foreground">🖼️ Upload a file or paste an image URL. Max file size: 5MB. Recommended: 1200x400px</p>
                            </div>

                             <div className="space-y-2">
                                <Label htmlFor="phone-number">Phone Number (for WhatsApp)</Label>
                                <Input id="phone-number" placeholder="+1234567890" />
                                <p className="text-xs text-muted-foreground">📱 Include country code (e.g., +918277858375 for India, +1234567890 for US). This enables WhatsApp integration.</p>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="location">Location</Label>
                                <Input id="location" placeholder="City, Country (e.g., New York, USA)" />
                                 <p className="text-xs text-muted-foreground">🌍 Your location appears on your profile and contact card</p>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="custom-email">Custom Email for Profile Display</Label>
                                <Input id="custom-email" type="email" placeholder="custom@example.com" />
                                <p className="text-xs text-muted-foreground">If provided, this email will be displayed on your profile and used for contact saving instead of your registered email (karunaeconnect@gmail.com)</p>
                            </div>

                             <div className="space-y-2">
                                <Label htmlFor="short-description">Short Description (for cards)</Label>
                                <Textarea id="short-description" placeholder="A short description that appears on cards..." maxLength={160}/>
                                <p className="text-xs text-muted-foreground text-right">0/160</p>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2"><BarChart2 className="h-5 w-5 text-primary" /> Profile Statistics</CardTitle>
                             <CardDescription>💡 Tip: These stats appear as badges on your profile. Customize both the numbers and labels to match your profession (e.g., "Projects Completed", "Years Experience", "Client Rating").</CardDescription>
                        </CardHeader>
                        <CardContent className="grid sm:grid-cols-3 gap-4">
                            <div className="flex items-center gap-2">
                                <Input type="number" defaultValue="4.9" className="w-20" />
                                <Input defaultValue="Rating" />
                            </div>
                             <div className="flex items-center gap-2">
                                <Input type="number" defaultValue="50" className="w-20" />
                                <Input defaultValue="Projects" />
                            </div>
                             <div className="flex items-center gap-2">
                                <Input type="number" defaultValue="5" className="w-20" />
                                <Input defaultValue="Years" />
                            </div>
                        </CardContent>
                    </Card>

                     <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2"><Target className="h-5 w-5 text-primary" /> Custom Action Button</CardTitle>
                            <CardDescription>💡 Custom Button: Add a custom action button next to "View Location" on your profile (e.g., "Visit Us", "Order Now", "Book Appointment").</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="flex items-center justify-between">
                                <Label htmlFor="enable-custom-button">Enable Custom Action Button</Label>
                                <Switch id="enable-custom-button" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="button-text">Button Text</Label>
                                <Input id="button-text" defaultValue="Visit Us" />
                                <p className="text-xs text-muted-foreground">Text that appears on the button (e.g., "Visit Us", "Order Now", "Book Now")</p>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="button-url">Button URL</Label>
                                <Input id="button-url" defaultValue="https://example.com" />
                                <p className="text-xs text-muted-foreground">Enter full URL (https://example.com) or domain (example.com). Missing https:// will be added automatically.</p>
                            </div>
                            <div className="space-y-2">
                                <Label>Button Style</Label>
                                <Select defaultValue="filled">
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select button style" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="filled">Primary (Filled)</SelectItem>
                                        <SelectItem value="outline">Primary (Outline)</SelectItem>
                                    </SelectContent>
                                </Select>
                                 <p className="text-xs text-muted-foreground">Visual style of the button.</p>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <div className="flex items-center gap-2">
                                <Share2 className="h-5 w-5" />
                                <CardTitle>Social Media Links</CardTitle>
                            </div>
                             <div className="bg-primary/10 border-l-4 border-primary text-primary-foreground p-4 rounded-md mt-4">
                                <div className="flex items-start gap-3">
                                    <Lightbulb className="h-5 w-5 mt-0.5 text-primary" />
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
                        </CardHeader>
                        <CardContent>
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
                                         {platform.name === 'WhatsApp' && (
                                            <p className="text-xs text-muted-foreground">💡 Enter phone number with country code (e.g., +91 9876543210, +1 234-567-8900, or 919876543210) - auto-converts to WhatsApp link</p>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>
                 <div className="flex items-center justify-end mt-8">
                    <Button variant="ghost">Cancel</Button>
                    <Button>Save Changes</Button>
                </div>
            </main>
        </AdminDashboardLayout>
    );
}

    