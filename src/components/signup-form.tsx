
"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const signupSchema = z.object({
    email: z.string().email({ message: "Invalid email address." }),
    password: z.string().min(6, { message: "Password must be at least 6 characters." }),
    name: z.string().min(2, { message: "Name must be at least 2 characters." }),
    role: z.enum(["employee", "distributor", "business-owner"], {
        required_error: "You need to select a role.",
    }),
});

type SignupFormData = z.infer<typeof signupSchema>;
type UserRole = "employee" | "distributor" | "business-owner";


export function SignupForm() {
    const router = useRouter();

    const { register, handleSubmit, formState: { errors }, setValue, watch } = useForm<SignupFormData>({
        resolver: zodResolver(signupSchema),
        defaultValues: {
            role: "employee",
        }
    });

    const selectedRole = watch('role');

    const onSubmit = (data: SignupFormData) => {
        router.push(`/${data.role}/dashboard`);
    };

    return (
        <Card className="w-full bg-background border">
            <CardContent className="pt-6">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div className="space-y-2">
                        <Label>Select Your Role</Label>
                        <RadioGroup 
                            defaultValue="employee" 
                            onValueChange={(value: UserRole) => setValue('role', value)} 
                            className="grid grid-cols-3 gap-4"
                        >
                            <div>
                                <RadioGroupItem value="employee" id="employee" className="peer sr-only" />
                                <Label htmlFor="employee" className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-3 text-center hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary">
                                    Employee
                                </Label>
                            </div>
                            <div>
                                <RadioGroupItem value="distributor" id="distributor" className="peer sr-only" />
                                <Label htmlFor="distributor" className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-3 text-center hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary">
                                    Distributor
                                </Label>
                            </div>
                            <div>
                                <RadioGroupItem value="business-owner" id="business-owner" className="peer sr-only" />
                                <Label htmlFor="business-owner" className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-3 text-center hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary">
                                    Business Owner
                                </Label>
                            </div>
                        </RadioGroup>
                         {errors.role && <p className="text-sm text-destructive">{errors.role.message}</p>}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input id="name" placeholder="John Doe" {...register('name')} />
                        {errors.name && <p className="text-sm text-destructive">{errors.name.message}</p>}
                    </div>
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
                        Create Account
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
}
