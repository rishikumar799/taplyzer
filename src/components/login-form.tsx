
"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const loginSchema = z.object({
    email: z.string().email({ message: "Invalid email address." }),
    password: z.string().min(1, { message: "Password is required." }),
});

type LoginFormData = z.infer<typeof loginSchema>;
type UserRole = "employee" | "distributor" | "business-owner" | "admin";

export function LoginForm() {
    const [role, setRole] = useState<UserRole>("employee");
    const router = useRouter();

    const { register, handleSubmit, formState: { errors } } = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema),
    });

    const onSubmit = (data: LoginFormData) => {
        // Redirect to the selected dashboard without authentication
        router.push(`/${role}/dashboard`);
    };

    return (
        <Card className="w-full bg-background border">
            <CardHeader>
                <CardTitle>Role Selection</CardTitle>
                <CardDescription>Choose your role to see the correct dashboard.</CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <RadioGroup defaultValue="employee" onValueChange={(value: UserRole) => setRole(value)} className="grid grid-cols-2 gap-4">
                        <div>
                            <RadioGroupItem value="employee" id="employee" className="peer sr-only" />
                            <Label htmlFor="employee" className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary">
                                Employee
                            </Label>
                        </div>
                        <div>
                            <RadioGroupItem value="distributor" id="distributor" className="peer sr-only" />
                            <Label htmlFor="distributor" className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary">
                                Distributor
                            </Label>
                        </div>
                        <div>
                            <RadioGroupItem value="business-owner" id="business-owner" className="peer sr-only" />
                            <Label htmlFor="business-owner" className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary">
                                Business Owner
                            </Label>
                        </div>
                         <div>
                            <RadioGroupItem value="admin" id="admin" className="peer sr-only" />
                            <Label htmlFor="admin" className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary">
                                Admin
                            </Label>
                        </div>
                    </RadioGroup>
                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="john.doe@example.com" {...register('email')} />
                        {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="password">Password</Label>
                        <Input id="password" type="password" {...register('password')} />
                        {errors.password && <p className="text-sm text-destructive">{errors.password.message}</p>}
                    </div>
                    <Button type="submit" className="w-full">
                        Sign In
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
}
