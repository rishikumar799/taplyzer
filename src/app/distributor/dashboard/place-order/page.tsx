
'use client';
import { DistributorDashboardLayout } from "@/components/distributor-dashboard-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Search, ArrowLeft, CheckCircle, Star, ShoppingCart, Users, Trash2 } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import React, { useState, useMemo } from 'react';

const productsData = [
    {
        id: "prod1",
        name: "Premium Smart Business Card",
        category: "Smart Cards",
        icon: <CheckCircle className="h-5 w-5 text-green-500" />,
        description: "Revolutionary NFC + QR smart business card that transforms how you network. Eco-friendly, reusable, and completely customizable with lifetime support.",
        formats: [
            { name: "Card Format", price: 1500 },
            { name: "Stand Format", price: 1800 },
        ],
        formatDescription: "Compact design perfect for counters and desks",
        features: ["NFC Enabled", "Portable Design", "Basic Customization"],
        designOptions: [
            {
                name: "Standard Design",
                price: 0,
                description: "Logo, name and QR code custom design",
                features: ["Company logo placement", "QR code integration", "Standard color scheme"],
                isDefault: true
            },
            {
                name: "Fully Custom Design",
                price: 500,
                description: "Complete custom design with unlimited revisions",
                features: ["Custom assets", "Custom name/title", "Custom Colors"],
                isPremium: true
            },
        ],
        stock: 999,
    },
    {
        id: "prod2",
        name: "AI-Powered Google Review Generator",
        category: "AI Solutions",
        icon: <CheckCircle className="h-5 w-5 text-green-500" />,
        description: "Revolutionary AI-powered system that generates authentic Google reviews with customizable templates. Choose between portable card or premium stand format.",
        formats: [
            { name: "Card Format", price: 1500 },
            { name: "Stand Format", price: 1800 },
        ],
        formatDescription: "Compact design perfect for counters and desks",
        features: ["NFC Enabled", "Portable Design", "Basic Customization"],
        designOptions: [
            {
                name: "Standard Design",
                price: 0,
                description: "Logo, name and QR code custom design",
                features: ["Company logo placement", "QR code integration", "Standard color scheme"],
                isDefault: true
            },
            {
                name: "Fully Custom Design",
                price: 500,
                description: "Complete custom design with unlimited revisions",
                features: ["Custom assets", "Custom name/title", "Custom Colors"],
                isPremium: true
            },
        ],
        stock: 999,
    },
];

type Product = typeof productsData[0];
type ProductFormat = Product['formats'][0];
type DesignOption = Product['designOptions'][0];

type CartItem = {
    id: string;
    product: Product;
    selectedFormat: ProductFormat;
    selectedDesign: DesignOption;
    price: number;
    quantity: number;
};


const ProductCard = ({ product, onAddToCart }: { product: Product, onAddToCart: (item: Omit<CartItem, 'id' | 'quantity'>) => void }) => {
    const [selectedFormat, setSelectedFormat] = useState(product.formats[0]);
    const [selectedDesign, setSelectedDesign] = useState(product.designOptions.find(o => o.isDefault) ?? product.designOptions[0]);

    const totalCost = useMemo(() => {
        return selectedFormat.price + selectedDesign.price;
    }, [selectedFormat, selectedDesign]);

    const handleFormatChange = (formatName: string) => {
        const format = product.formats.find(f => f.name === formatName);
        if (format) setSelectedFormat(format);
    };

    const handleDesignChange = (designName: string) => {
        const design = product.designOptions.find(d => d.name === designName);
        if (design) setSelectedDesign(design);
    };
    
    const handleAddToCart = () => {
        onAddToCart({
            product,
            selectedFormat,
            selectedDesign,
            price: totalCost,
        });
    };

    return (
        <Card className="flex flex-col">
            <CardHeader>
                <div className="flex items-start justify-between">
                    <CardTitle className="text-lg">{product.name}</CardTitle>
                    {product.icon}
                </div>
                <CardDescription>{product.category}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow space-y-6">
                <p className="text-sm text-muted-foreground">{product.description}</p>
                
                <div>
                    <Label className="text-xs font-semibold text-muted-foreground">CHOOSE FORMAT</Label>
                    <RadioGroup defaultValue={selectedFormat.name} onValueChange={handleFormatChange} className="grid grid-cols-2 gap-2 mt-2">
                        {product.formats.map(format => (
                            <div key={format.name}>
                                <RadioGroupItem value={format.name} id={`${product.id}-${format.name.replace(/\s+/g, '-')}`} className="sr-only peer" />
                                <Label htmlFor={`${product.id}-${format.name.replace(/\s+/g, '-')}`} className="block text-center p-3 rounded-md border-2 border-muted bg-muted/50 peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/10 cursor-pointer">
                                    <span className="font-semibold text-sm">{format.name}</span>
                                    <span className="text-xs block text-muted-foreground">₹{format.price.toLocaleString()}</span>
                                </Label>
                            </div>
                        ))}
                    </RadioGroup>
                </div>
                
                <p className="text-sm text-muted-foreground">{product.formatDescription}</p>

                <div className="flex gap-2 flex-wrap">
                    {product.features.map(feature => (
                        <Badge key={feature} variant="secondary">{feature}</Badge>
                    ))}
                </div>
                
                <div>
                    <Label className="text-xs font-semibold text-muted-foreground flex items-center gap-1.5"><CheckCircle className="h-3 w-3"/>DESIGN OPTIONS</Label>
                    <RadioGroup defaultValue={selectedDesign.name} onValueChange={handleDesignChange} className="grid grid-cols-2 gap-2 mt-2">
                        {product.designOptions.map(option => (
                            <div key={option.name}>
                                <RadioGroupItem value={option.name} id={`${product.id}-${option.name.replace(/\s+/g, '-')}`} className="sr-only peer" />
                                <Label htmlFor={`${product.id}-${option.name.replace(/\s+/g, '-')}`} className="h-full block text-left p-3 rounded-md border-2 border-muted bg-muted/50 peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/10 cursor-pointer">
                                    <div className="flex justify-between items-center mb-1">
                                        <div className="flex items-center gap-2">
                                            <span className="font-semibold text-sm">{option.name}</span>
                                            {option.isPremium && <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />}
                                        </div>
                                        <div className={cn("w-4 h-4 rounded-full border-2 flex items-center justify-center bg-background", 
                                            "peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary"
                                        )}>
                                            <CheckCircle className="h-2.5 w-2.5 text-background"/>
                                        </div>
                                    </div>
                                    <p className="text-xs text-muted-foreground font-semibold">{option.price > 0 ? `+₹${option.price}` : 'Included'}</p>
                                    <p className="text-xs text-muted-foreground mt-1">{option.description}</p>
                                    <ul className="mt-2 space-y-1">
                                      {option.features.map(f => <li key={f} className="text-xs text-muted-foreground flex items-center gap-1.5"><CheckCircle className="h-3 w-3 text-green-500"/> {f}</li>)}
                                    </ul>
                                </Label>
                            </div>
                        ))}
                    </RadioGroup>
                </div>
            </CardContent>
            <CardFooter className="flex justify-between items-center mt-auto pt-6">
                <div>
                    <p className="text-2xl font-bold">₹{totalCost.toLocaleString()}</p>
                    <p className="text-xs text-muted-foreground">Stock: {product.stock}</p>
                </div>
                <Button onClick={handleAddToCart}>
                    + Add to Order
                </Button>
            </CardFooter>
        </Card>
    );
};


export default function PlaceOrderPage() {
    const [cart, setCart] = useState<CartItem[]>([]);

    const handleAddToCart = (item: Omit<CartItem, 'id' | 'quantity'>) => {
        setCart(prevCart => {
            const existingItemIndex = prevCart.findIndex(
                ci => ci.product.id === item.product.id && ci.selectedFormat.name === item.selectedFormat.name && ci.selectedDesign.name === item.selectedDesign.name
            );

            if (existingItemIndex > -1) {
                const updatedCart = [...prevCart];
                updatedCart[existingItemIndex].quantity += 1;
                return updatedCart;
            } else {
                return [...prevCart, { ...item, id: `${item.product.id}-${item.selectedFormat.name}-${item.selectedDesign.name}-${Date.now()}`, quantity: 1 }];
            }
        });
    };

    const handleRemoveFromCart = (itemId: string) => {
        setCart(prevCart => prevCart.filter(item => item.id !== itemId));
    };

    const subtotal = useMemo(() => {
        return cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    }, [cart]);

    const tax = useMemo(() => subtotal * 0.18, [subtotal]);
    const total = useMemo(() => subtotal + tax, [subtotal, tax]);


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
                        <h1 className="text-2xl font-bold">Place Customer Order</h1>
                        <p className="text-muted-foreground text-sm">Create a new order for your customer</p>
                    </div>
                </div>

                <div className="relative mb-8">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input placeholder="Search products..." className="pl-10 h-12 text-base" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
                    <div className="lg:col-span-3 grid md:grid-cols-2 gap-6">
                        {productsData.map(product => (
                           <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
                        ))}
                    </div>

                    <div className="lg:col-span-2 space-y-8 sticky top-24">
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2"><Users className="h-5 w-5 text-primary" /> Customer Information</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="customer-name">Name</Label>
                                    <Input id="customer-name" placeholder="Customer name" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="phone-number">Phone Number</Label>
                                    <Input id="phone-number" placeholder="Phone number" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="email-address">Email</Label>
                                    <Input id="email-address" type="email" placeholder="Email address" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="street-address">Address</Label>
                                    <Input id="street-address" placeholder="Street address" />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="city">City</Label>
                                        <Input id="city" placeholder="City" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="state">State</Label>
                                        <Input id="state" placeholder="State" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="pin-code">PIN Code</Label>
                                    <Input id="pin-code" placeholder="PIN code" />
                                </div>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2"><ShoppingCart className="h-5 w-5 text-primary" /> Order Summary</CardTitle>
                            </CardHeader>
                            <CardContent>
                                {cart.length === 0 ? (
                                    <p className="text-muted-foreground text-center py-8">No items added yet</p>
                                ) : (
                                    <div className="space-y-4">
                                        {cart.map(item => (
                                            <div key={item.id} className="flex justify-between items-start">
                                                <div className="space-y-1">
                                                    <p className="font-medium text-sm leading-tight">{item.product.name} <span className="text-muted-foreground">x{item.quantity}</span></p>
                                                    <p className="text-xs text-muted-foreground">{item.selectedFormat.name}, {item.selectedDesign.name}</p>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <p className="font-medium text-sm">₹{(item.price * item.quantity).toLocaleString()}</p>
                                                    <Button variant="ghost" size="icon" className="h-6 w-6 text-destructive" onClick={() => handleRemoveFromCart(item.id)}>
                                                        <Trash2 className="h-4 w-4" />
                                                    </Button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </CardContent>
                            {cart.length > 0 && (
                                <CardFooter className="flex-col items-stretch space-y-2 pt-4 border-t">
                                     <div className="flex justify-between text-sm text-muted-foreground">
                                        <span>Subtotal</span>
                                        <span>₹{subtotal.toLocaleString()}</span>
                                    </div>
                                    <div className="flex justify-between text-sm text-muted-foreground">
                                        <span>Tax (18%)</span>
                                        <span>₹{tax.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                                    </div>
                                    <div className="flex justify-between font-bold text-lg border-t pt-2 mt-2">
                                        <span>Total</span>
                                        <span>₹{total.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                                    </div>
                                    <Button className="w-full mt-4">Confirm & Place Order</Button>
                                </CardFooter>
                            )}
                        </Card>
                    </div>
                </div>
            </main>
        </DistributorDashboardLayout>
    )
}
