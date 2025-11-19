
'use client';
import { BusinessOwnerDashboardLayout } from "@/components/business-owner-dashboard-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Moon, Palette, Sparkles, Sun, Zap } from "lucide-react";

const themes = [
    { name: "Default", icon: <Sun className="w-5 h-5"/>, value: "default" },
    { name: "Forest", icon: <Sparkles className="w-5 h-5"/>, value: "forest" },
    { name: "Ocean", icon: <Zap className="w-5 h-5"/>, value: "ocean" },
    { name: "Sunset", icon: <Palette className="w-5 h-5"/>, value: "sunset" },
    { name: "Dark", icon: <Moon className="w-5 h-5"/>, value: "dark" },
]

export default function BusinessOwnerColorPalettePage() {
    return (
        <BusinessOwnerDashboardLayout>
            <main className="flex-1 p-4 md:p-8">
                 <div className="max-w-4xl mx-auto">
                    <h1 className="text-2xl font-semibold mb-6">Color Palette & Branding</h1>
                    <Card>
                        <CardHeader>
                            <CardTitle>Appearance & Branding</CardTitle>
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
                            <div className="flex justify-end">
                                <Button>Save Branding</Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </main>
        </BusinessOwnerDashboardLayout>
    );
}
