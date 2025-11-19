
'use client';
import { BusinessOwnerDashboardLayout } from "@/components/business-owner-dashboard-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Upload, Eye, Palette, Sun, Moon, Zap, Sparkles, User, GalleryVertical, ClipboardList, Package, CalendarClock, BookText, Video, Trophy, BookOpen, Lightbulb, Pencil } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const themes = [
    { name: "Default", icon: <Sun className="w-5 h-5"/>, value: "default" },
    { name: "Forest", icon: <Sparkles className="w-5 h-5"/>, value: "forest" },
    { name: "Ocean", icon: <Zap className="w-5 h-5"/>, value: "ocean" },
    { name: "Sunset", icon: <Palette className="w-5 h-5"/>, value: "sunset" },
    { name: "Dark", icon: <Moon className="w-5 h-5"/>, value: "dark" },
]

const sectionVisibilityItems = [
    { id: "about", label: "About Us Section", icon: User },
    { id: "services", label: "Services Section", icon: Zap },
    { id: "gallery", label: "Gallery Section", icon: GalleryVertical },
    { id: "pricelist", label: "Price List Section", icon: ClipboardList },
    { id: "productcatalog", label: "Product Catalog", icon: Package },
    { id: "skills", label: "Skills & Projects", icon: Pencil },
    { id: "menu", label: "Menu Section", icon: BookOpen },
    { id: "slotbooking", label: "Slot Booking", icon: CalendarClock },
    { id: "packages", label: "Packages Section", icon: Package },
    { id: "testimonials", label: "Testimonials", icon: User },
    { id: "brochures", label: "Brochures Section", icon: BookText },
    { id: "videos", label: "Videos Section", icon: Video },
    { id: "profstats", label: "Professional Stats", icon: Trophy },
]

function SectionEditor({ icon, sectionName, defaultBadge, defaultTitle, defaultDescription }: { icon: React.ReactNode, sectionName: string, defaultBadge: string, defaultTitle: string, defaultDescription: string }) {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base">
                    {icon} {sectionName}
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="grid md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                        <Label>Badge Text</Label>
                        <Input defaultValue={defaultBadge} />
                    </div>
                    <div className="space-y-2">
                        <Label>Title</Label>
                        <Input defaultValue={defaultTitle} />
                    </div>
                    <div className="space-y-2">
                        <Label>Description</Label>
                        <Input defaultValue={defaultDescription} />
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default function SettingsPage() {
    return (
        <BusinessOwnerDashboardLayout>
            <main className="flex-1 p-4 md:p-8">
                 <div className="max-w-6xl mx-auto">
                    <div className="flex items-center justify-between mb-6">
                         <h1 className="text-2xl font-semibold">Settings</h1>
                         <Button variant="outline">
                            <Eye className="mr-2 h-4 w-4" />
                            View Live Profile
                        </Button>
                    </div>
                    <div className="grid gap-8">
                        <Card>
                            <CardHeader>
                                <CardTitle>My Profile</CardTitle>
                                <CardDescription>Update your public information.</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="space-y-2">
                                    <Label>Profile Picture</Label>
                                    <div className="flex items-center gap-4">
                                        <Avatar className="h-20 w-20 rounded-lg">
                                            <AvatarImage src="https://picsum.photos/seed/company-logo/128/128" />
                                            <AvatarFallback>BO</AvatarFallback>
                                        </Avatar>
                                        <Button variant="outline">
                                            <Upload className="mr-2 h-4 w-4" />
                                            Upload Photo
                                        </Button>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="fullName">Full Name</Label>
                                    <Input id="fullName" defaultValue="Alex Innovate" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="jobTitle">Job Title / Headline</Label>
                                    <Input id="jobTitle" defaultValue="Founder & CEO" />
                                </div>
                                 <div className="space-y-2">
                                    <Label htmlFor="website">Website URL</Label>
                                    <Input id="website" defaultValue="https://alexinnovate.com" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="profileBio">Bio</Label>
                                    <Textarea id="profileBio" placeholder="A short bio about yourself" defaultValue="Pioneering the future of digital solutions, one tap at a time."/>
                                </div>
                                <Button>Save Profile</Button>
                            </CardContent>
                        </Card>

                        <SectionEditor 
                            icon={<User className="h-5 w-5 text-primary"/>}
                            sectionName="Testimonials Section"
                            defaultBadge="Client Reviews"
                            defaultTitle="What Clients Say"
                            defaultDescription="Read testimonials from our satisfied clients and their success stories."
                        />

                        <SectionEditor 
                            icon={<BookText className="h-5 w-5 text-primary"/>}
                            sectionName="Brochures Section"
                            defaultBadge="Resources"
                            defaultTitle="Brochures & Catalogs"
                            defaultDescription="Download our latest brochures, catalogs, and informational materials."
                        />

                        <SectionEditor 
                            icon={<Video className="h-5 w-5 text-primary"/>}
                            sectionName="Videos Section"
                            defaultBadge="Videos"
                            defaultTitle="Reels & Videos"
                            defaultDescription="Watch our latest Instagram reels and YouTube videos showcasing our work."
                        />

                        <SectionEditor 
                            icon={<Trophy className="h-5 w-5 text-primary"/>}
                            sectionName="Professional Stats Section"
                            defaultBadge="Achievements"
                            defaultTitle="Professional Stats"
                            defaultDescription="Key metrics and achievements that showcase our success and impact."
                        />


                        <Card>
                            <CardHeader>
                                <CardTitle>Section Visibility</CardTitle>
                                <CardDescription>Control which sections are visible on your profile.</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-6">
                               <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                                    {sectionVisibilityItems.map(item => (
                                        <div key={item.id} className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50">
                                            <div className="flex items-center gap-3">
                                                <item.icon className="h-5 w-5 text-muted-foreground"/>
                                                <Label htmlFor={item.id} className="font-medium cursor-pointer">{item.label}</Label>
                                            </div>
                                            <Switch id={item.id} defaultChecked />
                                        </div>
                                    ))}
                               </div>
                               <div className="bg-blue-100/60 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800/50 text-blue-800 dark:text-blue-300 rounded-lg p-4 flex items-start gap-3">
                                    <Lightbulb className="h-5 w-5 mt-0.5 flex-shrink-0" />
                                    <p className="text-sm">
                                        <span className="font-semibold">Tip:</span> Toggle sections on/off based on your business type. For example, restaurants might enable Menu and Slot Booking, while photographers might focus on Gallery and Services.
                                    </p>
                               </div>
                            </CardContent>
                        </Card>


                        <Card>
                            <CardHeader>
                                <CardTitle>Appearance &amp; Branding</CardTitle>
                                <CardDescription>Customize your profile's theme and colors.</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div className="space-y-2">
                                    <Label>Color Profile</Label>
                                    <p className="text-sm text-muted-foreground">Select a color theme for your public profile page.</p>
                                     <RadioGroup defaultValue="default" className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 pt-2">
                                        {themes.map(theme => (
                                            <div key={theme.value}>
                                                <RadioGroupItem value={theme.value} id={theme.value} className="peer sr-only" />
                                                <Label htmlFor={theme.value} className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer">
                                                    {theme.icon}
                                                    <span className="mt-2 text-sm font-medium">{theme.name}</span>
                                                </Label>
                                            </div>
                                        ))}
                                    </RadioGroup>
                                </div>
                                
                                <div className="space-y-4">
                                    <Label>Custom Colors</Label>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="primary-color">Primary</Label>
                                            <Input id="primary-color" defaultValue="210 100% 56%" />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="background-color">Background</Label>
                                            <Input id="background-color" defaultValue="0 0% 100%" />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="accent-color">Accent</Label>
                                            <Input id="accent-color" defaultValue="210 100% 56%" />
                                        </div>
                                    </div>
                                    <p className="text-xs text-muted-foreground">Enter HSL values (e.g., 210 40% 96.1%). This will override the selected color profile.</p>
                                </div>
                                <Button>Save Branding</Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </main>
        </BusinessOwnerDashboardLayout>
    );
}

    
