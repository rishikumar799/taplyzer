import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Zap, Target, Users } from 'lucide-react';

export function AboutSection() {
  const aboutImage = PlaceHolderImages.find(p => p.id === 'about-us');

  const values = [
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: 'Our Mission',
      description: 'To empower businesses by creating impactful digital solutions that drive growth and foster innovation.',
    },
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: 'Our Vision',
      description: 'To be the leading digital agency recognized for our creativity, strategic thinking, and client success.',
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: 'Our Values',
      description: 'A passionate group of designers, developers, and strategists committed to excellence and collaboration.',
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-32 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-foreground">About Taplyzer</h1>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
              We believe that great design is more than just aesthetics; it's about creating seamless and meaningful interactions that connect people.
            </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="order-2 lg:order-1 lg:pr-12">
            {aboutImage && (
                <Image
                    src={aboutImage.imageUrl}
                    alt={aboutImage.description}
                    width={800}
                    height={600}
                    className="object-cover w-full h-auto rounded-2xl shadow-2xl"
                    data-ai-hint={aboutImage.imageHint}
                />
            )}
          </div>
          <div className="order-1 lg:order-2 space-y-8">
            <p className="text-lg text-muted-foreground">
              Our approach combines strategic insight with creative execution to deliver solutions that not only look good but also perform exceptionally, creating lasting value for our clients.
            </p>
            <div className="grid sm:grid-cols-1 gap-6 pt-4">
              {values.map((value) => (
                <div key={value.title} className="flex items-start gap-6">
                  <div className="flex-shrink-0 bg-primary/10 text-primary p-4 rounded-xl">{value.icon}</div>
                  <div>
                    <h3 className="text-lg font-semibold">{value.title}</h3>
                    <p className="text-muted-foreground mt-1">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
