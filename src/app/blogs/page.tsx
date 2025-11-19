import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { ThemeSwitcher } from '@/components/theme-switcher';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight } from 'lucide-react';

const blogPosts = [
    {
        id: 'blog-post-1',
        title: 'The Future of Networking: Why Smart Cards Are a Game-Changer',
        description: 'Discover how NFC technology is revolutionizing professional connections, making traditional business cards obsolete.',
        author: 'Alice Johnson',
        authorAvatarId: 'team-member-1',
        date: 'October 26, 2023',
        readTime: '5 min read',
    },
    {
        id: 'blog-post-2',
        title: 'Maximizing Your ROI with Real-Time Analytics',
        description: 'Learn how to leverage the data from your smart card interactions to close more deals and build stronger relationships.',
        author: 'Bob Williams',
        authorAvatarId: 'team-member-2',
        date: 'October 22, 2023',
        readTime: '7 min read',
    },
    {
        id: 'blog-post-3',
        title: 'Designing a Digital Business Card That Converts',
        description: 'Tips and tricks from our design experts on creating a digital profile that captures attention and generates leads.',
        author: 'Charlie Brown',
        authorAvatarId: 'team-member-3',
        date: 'October 18, 2023',
        readTime: '6 min read',
    },
    {
        id: 'blog-post-4',
        title: 'Team Management Made Easy with Taplyzer',
        description: 'A deep dive into our team management dashboard and how it can streamline your organization\'s networking efforts.',
        author: 'Diana Miller',
        authorAvatarId: 'team-member-4',
        date: 'October 15, 2023',
        readTime: '8 min read',
    },
];

export default function BlogsPage() {
    return (
        <div className="flex flex-col min-h-screen bg-background">
            <Header />
            <main className="flex-grow py-20 lg:py-32">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-foreground">Our Blog</h1>
                        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                            Insights, trends, and stories from the world of digital networking.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        {blogPosts.map((post, index) => {
                            const postImage = PlaceHolderImages.find(p => p.id === post.id);
                            const authorImage = PlaceHolderImages.find(p => p.id === post.authorAvatarId);
                            return (
                                <Card key={post.id} className="flex flex-col overflow-hidden bg-background border shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                                    {postImage && (
                                        <div className="aspect-video relative">
                                            <Image
                                                src={postImage.imageUrl}
                                                alt={post.title}
                                                fill
                                                className="object-cover"
                                                data-ai-hint={postImage.imageHint}
                                            />
                                        </div>
                                    )}
                                    <CardHeader>
                                        <CardTitle>{post.title}</CardTitle>
                                        <CardDescription className="pt-2">{post.description}</CardDescription>
                                    </CardHeader>
                                    <CardContent className="flex-grow"></CardContent>
                                    <CardFooter>
                                        <div className="flex items-center justify-between w-full">
                                            <div className="flex items-center gap-3">
                                                {authorImage && (
                                                    <Avatar className="h-10 w-10 border-2 border-primary/20">
                                                        <AvatarImage src={authorImage.imageUrl} alt={post.author} data-ai-hint={authorImage.imageHint} />
                                                        <AvatarFallback>{post.author.charAt(0)}</AvatarFallback>
                                                    </Avatar>
                                                )}
                                                <div>
                                                    <p className="font-semibold text-sm">{post.author}</p>
                                                    <p className="text-xs text-muted-foreground">{post.date}</p>
                                                </div>
                                            </div>
                                            <Link href="#" className="text-primary hover:underline text-sm font-medium flex items-center gap-1">
                                                Read More <ArrowRight className="h-4 w-4" />
                                            </Link>
                                        </div>
                                    </CardFooter>
                                </Card>
                            );
                        })}
                    </div>
                </div>
            </main>
            <Footer />
            <ThemeSwitcher />
        </div>
    );
}
