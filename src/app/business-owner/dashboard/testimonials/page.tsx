
'use client';
import { BusinessOwnerDashboardLayout } from "@/components/business-owner-dashboard-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PlusCircle, Star, Trash2 } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";

const testimonials = [
    { name: 'Sarah Chen', title: 'Founder, TechStart Inc', quote: "Taplyzer transformed how we network at conferences. We've captured 3x more leads since switching to smart cards.", avatar: 'https://picsum.photos/seed/user1/40/40' },
    { name: 'Michael Rodriguez', title: 'Real Estate Agent', quote: "My clients love the instant property links. The analytics help me follow up at the perfect time. Game changer!", avatar: 'https://picsum.photos/seed/user2/40/40' },
];

export default function BusinessOwnerTestimonialsPage() {
    return (
        <BusinessOwnerDashboardLayout>
            <main className="flex-1 p-4 md:p-8">
                 <div className="flex items-center justify-between mb-6">
                    <h1 className="text-2xl font-semibold">Testimonials</h1>
                    <Button>
                        <PlusCircle className="h-4 w-4 mr-2" />
                        Add Testimonial
                    </Button>
                </div>
                <div className="space-y-6">
                    {testimonials.map(t => (
                        <Card key={t.name}>
                            <CardContent className="p-6 flex gap-6">
                                <Avatar className="h-12 w-12">
                                    <AvatarImage src={t.avatar} />
                                    <AvatarFallback>{t.name.charAt(0)}</AvatarFallback>
                                </Avatar>
                                <div className="flex-grow">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <p className="font-semibold">{t.name}</p>
                                            <p className="text-sm text-muted-foreground">{t.title}</p>
                                        </div>
                                        <div className="flex gap-0.5">
                                            {[...Array(5)].map((_,i) => <Star key={i} className="h-4 w-4 text-primary fill-primary" />)}
                                        </div>
                                    </div>
                                    <Textarea className="mt-2" defaultValue={t.quote} />
                                </div>
                                <Button variant="ghost" size="icon"><Trash2 className="h-4 w-4 text-destructive"/></Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
                <div className="flex justify-end mt-6">
                    <Button>Save Changes</Button>
                </div>
            </main>
        </BusinessOwnerDashboardLayout>
    );
}
