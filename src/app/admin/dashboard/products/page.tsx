
'use client';
import { AdminDashboardLayout } from "@/components/admin-dashboard-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { PlusCircle } from "lucide-react";

const products = [
    { name: 'Smart NFC Card - Classic', price: '₹999.00', stock: 1500 },
    { name: 'Smart NFC Card - Metal', price: '₹2499.00', stock: 750 },
    { name: 'Digital Profile - Pro Plan', price: '₹299.00/mo', stock: 'N/A' },
];

export default function AdminProductsPage() {
    return (
        <AdminDashboardLayout>
            <main className="flex-1 p-4 md:p-8">
                 <div className="flex items-center justify-between mb-6">
                    <h1 className="text-2xl font-semibold">Products</h1>
                    <Button>
                        <PlusCircle className="h-4 w-4 mr-2" />
                        Add Product
                    </Button>
                </div>
                <Card>
                    <CardHeader>
                        <CardTitle>Product List</CardTitle>
                        <CardDescription>Manage your products and their details.</CardDescription>
                    </CardHeader>
                    <CardContent>
                         <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Product Name</TableHead>
                                    <TableHead>Price</TableHead>
                                    <TableHead className="text-right">Stock</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {products.map((product) => (
                                    <TableRow key={product.name}>
                                        <TableCell className="font-medium">{product.name}</TableCell>
                                        <TableCell>{product.price}</TableCell>
                                        <TableCell className="text-right">{product.stock}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </main>
        </AdminDashboardLayout>
    );
}
