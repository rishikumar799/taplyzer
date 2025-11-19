
'use client';
import { BusinessOwnerDashboardLayout } from "@/components/business-owner-dashboard-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Globe, Search, MapPin, Mail, MessageCircle, FileText, Twitter, Linkedin, Facebook } from "lucide-react";
import { useState, useMemo } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

const networkData = [
    { name: 'QuantumLeap Corp', type: 'Enterprise', location: 'New York, USA', image: 'https://picsum.photos/seed/quantum/40/40', position: { top: '35%', left: '25%' }, socials: { twitter: '#', linkedin: '#', facebook: '#' } },
    { name: 'Stellar Solutions', type: 'Startup', location: 'London, UK', image: 'https://picsum.photos/seed/stellar/40/40', position: { top: '30%', left: '48%' }, socials: { twitter: '#', linkedin: '#', facebook: '#' } },
    { name: 'Nexus Innovations', type: 'Enterprise', location: 'Tokyo, Japan', image: 'https://picsum.photos/seed/nexus/40/40', position: { top: '38%', left: '85%' }, socials: { twitter: '#', linkedin: '#' } },
    { name: 'The Gilded Spoon', type: 'Restaurant', location: 'Paris, France', image: 'https://picsum.photos/seed/spoon/40/40', position: { top: '33%', left: '50%' }, socials: { twitter: '#', linkedin: '#' } },
    { name: 'Chic Boutique', type: 'Boutique', location: 'Milan, Italy', image: 'https://picsum.photos/seed/chic/40/40', position: { top: '34%', left: '52%' }, socials: {} },
    { name: 'Apex Industries', type: 'Enterprise', location: 'Sydney, Australia', image: 'https://picsum.photos/seed/apex/40/40', position: { top: '75%', left: '88%' }, socials: { linkedin: '#' } },
    { name: 'ByteBloom Tech', type: 'Startup', location: 'Bengaluru, India', image: 'https://picsum.photos/seed/bytebloom/40/40', position: { top: '55%', left: '68%' }, socials: { twitter: '#', linkedin: '#' } },
    { name: 'Riverstone Eatery', type: 'Restaurant', location: 'Cairo, Egypt', image: 'https://picsum.photos/seed/riverstone/40/40', position: { top: '42%', left: '56%' }, socials: { facebook: '#' } },
];

type Business = typeof networkData[0];

const WorldMapSvg = () => (
    <svg viewBox="0 0 1000 500" className="w-full h-full object-cover rounded-lg text-muted-foreground/30" fill="currentColor">
        <path d="M129.8,248.8c-0.2,0.1-0.3,0.3-0.5,0.4c-0.7,0.4-1.3,0.7-2,1.1c-0.6,0.3-1.1,0.6-1.7,1c-0.8,0.5-1.6,0.9-2.4,1.4c-0.5,0.3-1.1,0.6-1.6,0.9c-1,0.7-2,1.3-3,2c-0.5,0.3-1,0.7-1.5,1c-0.9,0.6-1.8,1.2-2.7,1.8c-0.4,0.3-0.9,0.6-1.3,0.9c-0.8,0.5-1.6,1-2.4,1.5c-0.3,0.2-0.7,0.4-1,0.6c-0.8,0.5-1.5,1-2.3,1.4c-0.4,0.2-0.8,0.5-1.2,0.7c-0.7,0.4-1.3,0.8-2,1.2c-0.6,0.3-1.1,0.7-1.7,1c-0.7,0.4-1.4,0.8-2.1,1.2c-0.2,0.1-0.5,0.3-0.7,0.4c-0.7,0.4-1.4,0.7-2.1,1.1c-0.4,0.2-0.8,0.5-1.2,0.7c-0.7,0.4-1.4,0.7-2,1.1c-0.2,0.1-0.4,0.2-0.6,0.3c-0.6,0.3-1.2,0.6-1.8,0.9c-0.3,0.2-0.6,0.3-0.9,0.5c-0.6,0.3-1.2,0.6-1.8,0.9c-0.4,0.2-0.8,0.4-1.1,0.6c-0.6,0.3-1.2,0.6-1.8,0.8c-0.3,0.1-0.6,0.3-0.9,0.4c-0.6,0.3-1.2,0.5-1.8,0.8c-0.2,0.1-0.5,0.2-0.7,0.3c-0.6,0.3-1.2,0.5-1.8,0.7c-0.1,0.1-0.3,0.1-0.4,0.2c-0.6,0.2-1.2,0.5-1.8,0.7c-0.1,0-0.2,0.1-0.3,0.1c-0.6,0.2-1.1,0.4-1.7,0.6c-0.3,0.1-0.5,0.2-0.8,0.3c-0.6,0.2-1.1,0.4-1.7,0.6c-0.1,0-0.3,0.1-0.4,0.1c-0.6,0.2-1.1,0.4-1.7,0.5c-0.1,0-0.2,0.1-0.3,0.1c-0.6,0.2-1.1,0.3-1.7,0.5c-0.2,0.1-0.3,0.1-0.5,0.2c-0.6,0.2-1.1,0.3-1.6,0.5c-0.2,0.1-0.5,0.1-0.7,0.2c-0.6,0.2-1.1,0.3-1.6,0.4c-0.1,0-0.2,0.1-0.2,0.1c-0.6,0.2-1.1,0.3-1.6,0.4c-0.3,0.1-0.6,0.2-0.9,0.3c-0.5,0.1-1,0.3-1.5,0.4c-0.3,0.1-0.6,0.2-0.9,0.2c-0.5,0.1-1,0.3-1.5,0.4c-0.2,0.1-0.5,0.1-0.7,0.2c-0.5,0.1-1,0.2-1.5,0.3c-0.1,0-0.2,0.1-0.3,0.1c-0.5,0.1-1,0.2-1.5,0.3c-0.2,0-0.4,0.1-0.6,0.1c-0.5,0.1-0.9,0.2-1.4,0.3c-0.1,0-0.2,0-0.3,0.1c-0.5,0.1-0.9,0.2-1.4,0.3c-0.2,0.1-0.5,0.1-0.7,0.1c-0.5,0.1-0.9,0.2-1.4,0.2c-0.1,0-0.2,0-0.3,0.1c-0.5,0.1-0.9,0.2-1.4,0.2c-0.1,0-0.1,0-0.2,0c-0.5,0.1-0.9,0.2-1.4,0.2c-0.3,0.1-0.6,0.1-0.9,0.2c-0.4,0.1-0.9,0.1-1.3,0.2c-0.2,0-0.4,0.1-0.6,0.1c-0.4,0.1-0.9,0.1-1.3,0.2c-0.2,0-0.4,0.1-0.6,0.1c-0.4,0.1-0.9,0.1-1.3,0.2c-0.3,0.1-0.7,0.1-1,0.1c-0.4,0.1-0.8,0.1-1.2,0.1c-0.3,0-0.6,0.1-0.9,0.1c-0.4,0.1-0.8,0.1-1.2,0.1c-0.1,0-0.1,0-0.2,0c-0.4,0-0.8,0.1-1.2,0.1c-0.3,0-0.6,0-0.9,0.1c-0.4,0-0.8,0.1-1.2,0.1c-0.3,0-0.6,0.1-0.9,0.1c-0.8,0.1-1.6,0.2-2.4,0.3c-0.2,0-0.5,0.1-0.7,0.1c-0.8,0.1-1.6,0.2-2.3,0.3c-0.4,0-0.8,0.1-1.2,0.1c-0.8,0.1-1.5,0.2-2.3,0.3c-0.3,0-0.7,0.1-1,0.1c-0.7,0.1-1.5,0.2-2.2,0.2c-0.3,0-0.6,0-0.9,0.1c-0.7,0.1-1.4,0.1-2.1,0.2c-0.3,0-0.6,0.1-0.9,0.1c-0.7,0.1-1.4,0.1-2.1,0.2c-0.3,0-0.5,0-0.8,0.1c-0.7,0.1-1.4,0.1-2,0.2c-0.4,0-0.8,0.1-1.2,0.1c-0.7,0.1-1.3,0.1-2,0.1c-0.2,0-0.4,0-0.6,0.1c-0.7,0-1.3,0.1-2,0.1c-0.3,0-0.6,0-0.9,0c-0.6,0-1.3,0.1-1.9,0.1c-0.2,0-0.5,0-0.7,0.1c-0.6,0-1.2,0.1-1.8,0.1c-0.3,0-0.7,0-1,0.1c-0.6,0-1.2,0.1-1.8,0.1c-0.1,0-0.3,0-0.4,0c-0.6,0-1.2,0-1.8,0c-0.2,0-0.4,0-0.6,0c-0.6,0-1.1,0-1.7,0c-0.2,0-0.4,0-0.6,0c-0.6,0-1.1,0-1.7,0c-0.2,0-0.5,0-0.7,0c-0.6,0-1.1,0-1.7,0c-0.1,0-0.2,0-0.3,0c-0.5,0-1.1,0-1.6,0c-0.1,0-0.2,0-0.3,0c-0.5,0-1.1-0.1-1.6-0.1c-0.2,0-0.4,0-0.6,0c-0.5,0-1-0.1-1.5-0.1c-0.3,0-0.6,0-0.9,0c-0.5,0-1-0.1-1.5-0.1c-0.3,0-0.5-0.1-0.8-0.1c-0.5-0.1-1-0.1-1.5-0.2c-0.2-0.1-0.5-0.1-0.7-0.2c-0.5-0.1-1-0.2-1.5-0.3c-0.2-0.1-0.3-0.1-0.5-0.2c-0.5-0.1-0.9-0.2-1.4-0.3c-0.1-0.1-0.3-0.1-0.4-0.2c-0.5-0.1-0.9-0.2-1.4-0.4c-0.1-0.1-0.2-0.1-0.3-0.2c-0.4-0.1-0.9-0.2-1.3-0.4c-0.2-0.1-0.4-0.2-0.6-0.3c-0.4-0.2-0.8-0.3-1.3-0.5c-0.1-0.1-0.2-0.1-0.3-0.2c-0.4-0.2-0.8-0.4-1.2-0.6c-0.2-0.1-0.5-0.2-0.7-0.3c-0.4-0.2-0.8-0.4-1.2-0.6c-0.1-0.1-0.2-0.1-0.3-0.2c-0.4-0.2-0.8-0.4-1.2-0.6c-0.2-0.1-0.5-0.2-0.7-0.4c-0.8-0.4-1.5-0.8-2.3-1.2c-0.3-0.2-0.6-0.3-0.9-0.5c-0.7-0.4-1.4-0.8-2.1-1.2c-0.3-0.2-0.6-0.4-0.8-0.6c-0.7-0.4-1.4-0.8-2.1-1.2c-0.2-0.1-0.4-0.2-0.6-0.4c-0.7-0.4-1.4-0.8-2-1.2c-0.3-0.2-0.6-0.4-0.9-0.6c-0.7-0.4-1.3-0.8-2-1.2c-0.3-0.2-0.5-0.3-0.8-0.5c-0.6-0.4-1.3-0.7-1.9-1.1c-0.2-0.1-0.3-0.2-0.5-0.3c-0.6-0.3-1.2-0.7-1.8-1c-0.3-0.2-0.7-0.4-1-0.6c-0.6-0.3-1.2-0.7-1.8-1c-0.2-0.1-0.3-0.2-0.5-0.3c-0.6-0.3-1.1-0.7-1.7-1c-0.1-0.1-0.2-0.1-0.3-0.2c-0.6-0.3-1.1-0.6-1.7-0.9c-0.2-0.1-0.5-0.2-0.7-0.4c-0.5-0.3-1.1-0.6-1.6-0.9c-0.2-0.1-0.4-0.2-0.6-0.3c-0.5-0.3-1-0.6-1.5-0.8c-0.1-0.1-0.2-0.1-0.3-0.2c-0.5-0.3-1-0.5-1.5-0.8c-0.2-0.1-0.3-0.2-0.5-0.3c-0.5-0.3-1-0.5-1.4-0.8c-0.1-0.1-0.2-0.1-0.3-0.2c-0.5-0.3-0.9-0.5-1.4-0.7C105,274,105,274,104.9,273.9c-0.5-0.2-0.9-0.5-1.4-0.7c-0.1-0.1-0.2-0.1-0.3-0.2c-0.4-0.2-0.9-0.4-1.3-0.6c-0.1-0.1-0.2-0.1-0.3-0.2c-0.4-0.2-0.8-0.4-1.2-0.6c-0.2-0.1-0.3-0.2-0.5-0.3c-0.4-0.2-0.8-0.4-1.2-0.6c-0.1-0.1-0.2-0.1-0.3-0.2c-0.4-0.2-0.8-0.4-1.2-0.5c-0.1-0.1-0.2-0.1-0.3-0.2c-0.4-0.2-0.8-0.3-1.2-0.5c-0.1-0.1-0.2-0.1-0.3-0.2c-0.4-0.2-0.8-0.3-1.1-0.5c-0.1-0.1-0.2-0.1-0.3-0.2c-0.4-0.2-0.8-0.3-1.1-0.5c-0.1-0.1-0.2-0.1-0.3-0.2c-0.4-0.1-0.7-0.3-1.1-0.4c-0.1-0.1-0.2-0.1-0.3-0.2c-0.4-0.1-0.7-0.3-1.1-0.4c-0.1-0.1-0.2-0.1-0.3-0.2c-0.4-0.1-0.7-0.3-1.1-0.4c-0.1,0-0.2-0.1-0.3-0.1c-0.3-0.1-0.7-0.2-1-0.3c-0.1,0-0.2-0.1-0.3-0.1c-0.3-0.1-0.7-0.2-1-0.3c-0.1,0-0.2-0.1-0.3-0.1c-0.3-0.1-0.7-0.2-1-0.3c-0.1,0-0.2-0.1-0.3-0.1c-0.3-0.1-0.7-0.2-1-0.3c-0.1,0-0.2-0.1-0.3-0.1c-0.3-0.1-0.6-0.2-1-0.3c-0.1,0-0.2,0-0.3-0.1c-0.3-0.1-0.6-0.2-0.9-0.2c-0.1,0-0.1,0-0.2,0c-0.3-0.1-0.6-0.2-0.9-0.2c-0.1,0-0.2,0-0.3-0.1c-0.3-0.1-0.6-0.1-0.9-0.2c-0.1,0-0.2,0-0.3-0.1c-0.3-0.1-0.6-0.1-0.9-0.2c-0.1,0-0.2,0-0.3-0.1c-0.3,0-0.6-0.1-0.9-0.2c-0.1,0-0.2,0-0.3-0.1c-0.3,0-0.6-0.1-0.9-0.1c-0.1,0-0.2,0-0.3,0c-0.3,0-0.6-0.1-0.8-0.1c-0.1,0-0.2,0-0.3,0c-0.3,0-0.6-0.1-0.8-0.1c-0.1,0-0.2,0-0.3,0c-0.3,0-0.5,0-0.8,0c-0.1,0-0.2,0-0.3,0c-0.3,0-0.5,0-0.8,0c-0.1,0-0.2,0-0.3,0c-0.3,0-0.5,0-0.8,0c-0.1,0-0.1,0-0.2,0c-0.3,0-0.5,0-0.8,0c-0.1,0-0.2,0-0.3,0c-0.2,0-0.5,0-0.7,0c-0.1,0-0.2,0-0.3,0c-0.2,0-0.5,0-0.7,0c-0.1,0-0.2,0-0.3,0c-0.2,0-0.5,0-0.7,0c-0.1,0-0.1,0-0.2,0c-0.2,0-0.5,0-0.7,0c-0.1,0-0.2,0-0.3,0c-0.2,0-0.5,0-0.7,0c-0.1,0-0.1,0-0.2,0c-0.2,0-0.4,0-0.7,0c-0.1,0-0.2,0-0.3,0c-0.2,0-0.4,0-0.6,0c-0.1,0-0.2,0-0.3,0c-0.2,0-0.4,0-0.6,0c-0.1,0-0.1,0-0.2,0c-0.2,0-0.4,0-0.6,0c-0.1,0-0.2,0-0.3,0c-0.2,0-0.4,0-0.6,0c-0.1,0-0.1,0-0.2,0c-0.2,0-0.4,0-0.6,0c-0.1,0-0.2,0-0.3,0c-0.2,0-0.4,0-0.5,0c-0.1,0-0.1,0-0.2,0c-0.2,0-0.4,0-0.5,0c-0.1,0-0.2,0-0.3,0c-0.2,0-0.3,0-0.5,0c-0.1,0-0.1,0-0.2,0c-0.2,0-0.3,0-0.5,0c-0.1,0-0.2,0-0.2,0c-0.2,0-0.3,0-0.5,0c-0.1,0-0.2,0-0.2,0c-0.2,0-0.3,0-0.5,0c-0.1,0-0.1,0-0.2,0c-0.1,0-0.3,0-0.4,0c-0.1,0-0.1,0-0.2,0c-0.1,0-0.3,0-0.4,0c-0.1,0-0.1,0-0.2,0c-0.1,0-0.3,0-0.4,0c-0.1,0-0.1,0-0.2,0c-0.1,0-0.3,0-0.4,0c-0.1,0-0.1,0-0.2,0c-0.1,0-0.3,0-0.4,0c-0.1,0-0.1,0-0.2,0c-0.1,0-0.3,0-0.4,0c-0.1,0-0.1,0-0.2,0c-0.1,0-0.3-0.1-0.4-0.1c-0.1,0-0.1,0-0.2-0.1c-0.1,0-0.3-0.1-0.4-0.1c-0.1,0-0.1,0-0.2-0.1c-0.1,0-0.3-0.1-0.4-0.1c-0.1,0-0.1,0-0.2-0.1c-0.1,0-0.3-0.1-0.4-0.1c-0.1,0-0.1,0-0.2-0.1c-0.1,0-0.3-0.1-0.4-0.1c-0.1,0-0.1,0-0.2-0.1c-0.1,0-0.2-0.1-0.4-0.1c-0.1,0-0.1,0-0.2-0.1c-0.1,0-0.2-0.1-0.4-0.2c-0.1,0-0.1,0-0.2-0.1c-0.1,0-0.2-0.1-0.4-0.2c-0.1,0-0.1,0-0.2-0.1c-0.1,0-0.2-0.1-0.3-0.2c-0.1,0-0.1,0-0.2-0.1c-0.1,0-0.2-0.1-0.3-0.2c-0.1,0-0.1,0-0.2-0.1c-0.1,0-0.2-0.1-0.3-0.2c-0.1,0-0.1,0-0.2-0.1c-0.1,0-0.2-0.1-0.3-0.2c-0.1,0-0.1,0-0.2-0.1c-0.1,0-0.2-0.1-0.3-0.2c-0.1,0-0.1,0-0.2-0.1c-0.1,0-0.2-0.1-0.3-0.2c-0.1,0-0.1,0-0.2-0.1c-0.1,0-0.2-0.1-0.3-0.2c-0.1,0-0.1,0-0.2-0.1c-0.1,0-0.2-0.1-0.3-0.2c-0.1,0-0.1,0-0.1-0.1c-0.1,0-0.2-0.1-0.3-0.2c-0.1,0-0.1,0-0.2-0.1c-0.1,0-0.2-0.1-0.3-0.2c-0.1,0-0.1,0-0.1-0.1c-0.1,0-0.2-0.1-0.3-0.2c-0.1,0-0.1,0-0.1-0.1c-0.1,0-0.2-0.1-0.3-0.2c-0.1,0-0.1,0-0.1-0.1c-0.1,0-0.2-0.1-0.3-0.2c-0.1,0-0.1,0-0.1-0.1c-0.1,0-0.2-0.1-0.3-0.2c-0.1,0-0.1,0-0.1-0.1c-0.1,0-0.2-0.1-0.2-0.2c-0.1,0-0.1,0-0.1-0.1c-0.1,0-0.2-0.1-0.2-0.2c-0.1,0-0.1,0-0.1-0.1c-0.1,0-0.2-0.1-0.2-0.2c-0.1,0-0.1,0-0.1-0.1c-0.1,0-0.2-0.1-0.2-0.2c-0.1,0-0.1,0-0.1-0.1c-0.1,0-0.2-0.1-0.2-0.2c-0.1,0-0.1,0-0.1-0.1c-0.1,0-0.1-0.1-0.2-0.2c-0.1,0-0.1,0-0.1-0.1c-0.1,0-0.1-0.1-0.2-0.2c-0.1,0-0.1,0-0.1-0.1c-0.1,0-0.1-0.1-0.2-0.2c-0.1,0-0.1,0-0.1-0.1c-0.1,0-0.1-0.1-0.2-0.2c-0.1,0-0.1,0-0.1-0.1c-0.1,0-0.1-0.1-0.2-0.2c-0.1,0-0.1,0-0.1-0.1c-0.1,0-0.1-0.1-0.2-0.2c-0.1,0-0.1,0-0.1-0.1c-0.1,0-0.1-0.1-0.1-0.2c-0.1,0-0.1,0-0.1-0.1c-0.1,0-0.1-0.1-0.1-0.2c-0.1,0-0.1,0-0.1-0.1c-0.1,0-0.1-0.1-0.1-0.2c-0.1,0-0.1,0-0.1-0.1c-0.1,0-0.1-0.1-0.1-0.2c-0.1,0-0.1,0-0.1-0.1c-0.1,0-0.1-0.1-0.1-0.2c-0.1,0-0.1,0-0.1-0.1c-0.1,0-0.1-0.1-0.1-0.2c-0.1,0-0.1,0-0.1-0.1c-0.1,0-0.1-0.1-0.1-0.2c-0.1,0-0.1,0-0.1-0.1c-0.1,0-0.1-0.1-0.1-0.2c-0.1,0-0.1,0-0.1-0.1c-0.1,0-0.1-0.1-0.1-0.2c-0.1,0-0.1,0-0.1-0.1c-0.1,0-0.1-0.1-0.1-0.2c-0.1,0-0.1,0-0.1-0.1c-0.1,0-0.1-0.1-0.1-0.2c-0.1,0-0.1,0-0.1-0.1c-0.1,0-0.1-0.1-0.1-0.2c-0.1,0-0.1,0-0.1-0.1c-0.1,0-0.1-0.1-0.1-0.2c-0.1,0-0.1,0-0.1-0.1c-0.1,0-0.1-0.1-0.1-0.2c-0.1,0-0.1,0-0.1-0.1c-0.1,0-0.1-0.1-0.1-0.2c-0.1,0-0.1,0-0.1-0.1c-0.1,0-0.1-0.1-0.1-0.2c-0.1,0-0.1,0-0.1-0.1c-0.1,0-0.1-0.1-0.1-0.2c-0.1,0-0.1,0-0.1-0.1c-0.1,0-0.1-0.1-0.1-0.2c-0.1,0-0.1,0-0.1-0.1c-0.1,0-0.1-0.1-0.1-0.2c-0.1,0-0.1,0-0.1-0.1c-0.1,0-0.1-0.1-0.1-0.2c-0.1,0-0.1,0-0.1-0.1c-0.1,0-0.1-0.1-0.1-0.2c-0.1,0-0.1,0-0.1-0.1c-0.1,0-0.1-0.1-0.1-0.2c-0.1,0-0.1,0-0.1-0.1c-0.1,0-0.1-0.1-0.1-0.2c-0.1,0-0.1,0-0.1-0.1c-0.1,0-0.1-0.1-0.1-0.2c-0.1,0-0.1,0-0.1-0.1c-0.1,0-0.1" /></svg>
);

const BusinessInfoCard = ({ business, open, onOpenChange }: { business: Business, open: boolean, onOpenChange: (open: boolean) => void }) => {
    return (
        <Popover open={open} onOpenChange={onOpenChange}>
            <PopoverTrigger asChild>
                <div 
                    className="absolute z-20 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-transform duration-300 hover:scale-125"
                    style={{ top: business.position.top, left: business.position.left }}
                >
                    <MapPin className="w-8 h-8 text-primary fill-primary/50" />
                </div>
            </PopoverTrigger>
            <PopoverContent className="w-80">
                <div className="flex items-center gap-4 mb-4">
                    <Avatar>
                        <AvatarImage src={business.image} />
                        <AvatarFallback>{business.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                        <h4 className="font-semibold">{business.name}</h4>
                        <p className="text-sm text-muted-foreground">{business.type}</p>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-2 mb-4">
                    <Button variant="outline" size="sm"><Mail className="w-4 h-4 mr-1"/> Email</Button>
                    <Button variant="outline" size="sm"><MessageCircle className="w-4 h-4 mr-1"/> WhatsApp</Button>
                    <Button variant="outline" size="sm"><FileText className="w-4 h-4 mr-1"/> Quote</Button>
                </div>
                <div className="flex justify-center gap-4">
                    {business.socials.twitter && <Link href={business.socials.twitter} target="_blank"><Button variant="ghost" size="icon"><Twitter className="w-5 h-5"/></Button></Link>}
                    {business.socials.linkedin && <Link href={business.socials.linkedin} target="_blank"><Button variant="ghost" size="icon"><Linkedin className="w-5 h-5"/></Button></Link>}
                    {business.socials.facebook && <Link href={business.socials.facebook} target="_blank"><Button variant="ghost" size="icon"><Facebook className="w-5 h-5"/></Button></Link>}
                </div>
            </PopoverContent>
        </Popover>
    );
};


export default function TaplyzerHubPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [filterType, setFilterType] = useState('All');
    const [hoveredBusiness, setHoveredBusiness] = useState<string | null>(null);

    const filteredData = useMemo(() => {
        return networkData.filter(business => {
            const matchesType = filterType === 'All' || business.type === filterType;
            const matchesSearch = business.name.toLowerCase().includes(searchQuery.toLowerCase()) || business.location.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesType && matchesSearch;
        });
    }, [searchQuery, filterType]);

    return (
        <BusinessOwnerDashboardLayout>
            <main className="flex-1 p-4 md:p-8">
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                        <Globe className="h-8 w-8" />
                        <div>
                            <h1 className="text-2xl font-bold">Taplyzer Hub</h1>
                            <p className="text-muted-foreground text-sm">Your global network at a glance</p>
                        </div>
                    </div>
                </div>
                
                <Card className="mb-8">
                    <CardContent className="p-4 flex flex-col md:flex-row items-center gap-4">
                        <div className="relative flex-1 w-full">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                            <Input 
                                placeholder="Search by name or location..." 
                                className="pl-10" 
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                        <Select value={filterType} onValueChange={setFilterType}>
                            <SelectTrigger className="w-full md:w-[180px]">
                                <SelectValue placeholder="Filter by type" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="All">All Types</SelectItem>
                                <SelectItem value="Enterprise">Enterprise</SelectItem>
                                <SelectItem value="Startup">Startup</SelectItem>
                                <SelectItem value="Restaurant">Restaurant</SelectItem>
                                <SelectItem value="Boutique">Boutique</SelectItem>
                            </SelectContent>
                        </Select>
                    </CardContent>
                </Card>

                <div className="relative w-full h-[600px] bg-muted/30 rounded-lg overflow-hidden">
                    <WorldMapSvg />
                    {filteredData.map(business => (
                        <div key={business.name} onMouseEnter={() => setHoveredBusiness(business.name)} onMouseLeave={() => setHoveredBusiness(null)}>
                            <BusinessInfoCard 
                                business={business}
                                open={hoveredBusiness === business.name}
                                onOpenChange={(isOpen) => {
                                    if (isOpen) {
                                        setHoveredBusiness(business.name)
                                    } else {
                                        setHoveredBusiness(null)
                                    }
                                }}
                            />
                        </div>
                    ))}
                </div>
            </main>
        </BusinessOwnerDashboardLayout>
    );
}

    