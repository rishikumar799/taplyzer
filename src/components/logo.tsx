
import Link from 'next/link';
import { cn } from '@/lib/utils';
import Image from 'next/image';

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("flex items-center gap-3", className)}>
      <div className="relative h-10 w-10">
        <Image src="https://ik.imagekit.io/7z0x3rycfi/taplyzer/halflogo" alt="Taplyzer" fill />
      </div>
      <div className="flex flex-col">
        <span className="text-3xl font-bold font-headline text-foreground whitespace-nowrap italic">
          Tap<span className="text-primary">lyzer</span>
        </span>
        <p 
          className="tracking-normal w-full text-justify text-foreground" 
          style={{ textAlignLast: 'justify', fontSize: '0.65rem' }}
        >
          Tap • Connect • Grow
        </p>
      </div>
    </Link>
  );
}
