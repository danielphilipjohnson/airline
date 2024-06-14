import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import {Hero} from '@/components/hero/hero';
import 'reset-css';
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin']  });
export default function Page() {
  return (
    <main className={inter.className}>
      {/*<div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
        <AcmeLogo />
      </div>*/}
      <Hero/>
    
    </main>
  );
}
