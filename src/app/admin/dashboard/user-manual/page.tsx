
'use client';
import { AdminDashboardLayout } from "@/components/admin-dashboard-layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqItems = [
    {
        question: "How do I update my profile picture?",
        answer: "Navigate to the 'Profile' section from the sidebar. Click on your current profile picture to upload a new one. We recommend a square image for best results."
    },
    {
        question: "How do I add a new social media link?",
        answer: "On the 'Profile' page, scroll down to the 'Social Media Platforms' section. Find the platform you want to add, enter the URL, and make sure the toggle switch is on."
    },
    {
        question: "Where can I see my profile analytics?",
        answer: "The main 'Dashboard' provides a high-level overview. For detailed insights, visit the 'Analytics' page, where you can find information on profile views, link clicks, and more."
    },
    {
        question: "How do I change the color theme of my public profile?",
        answer: "Go to the 'Color Palette' page. You can select a pre-designed theme or enter custom HSL color values for primary, background, and accent colors to create your own unique look."
    }
]

export default function AdminUserManualPage() {
    return (
        <AdminDashboardLayout>
            <main className="flex-1 p-4 md:p-8">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-2xl font-semibold mb-6">User Manual & FAQ</h1>
                    <Card>
                        <CardHeader>
                            <CardTitle>Frequently Asked Questions</CardTitle>
                            <CardDescription>Find answers to common questions about managing your profile.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Accordion type="single" collapsible className="w-full">
                                {faqItems.map((item, index) => (
                                    <AccordionItem value={`item-${index}`} key={index}>
                                        <AccordionTrigger>{item.question}</AccordionTrigger>
                                        <AccordionContent>
                                            {item.answer}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </CardContent>
                    </Card>
                </div>
            </main>
        </AdminDashboardLayout>
    );
}
