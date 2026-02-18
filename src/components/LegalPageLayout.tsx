import Link from 'next/link';
import { ReactNode } from 'react';

export default function LegalPageLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[#fafaf9] pt-20 md:pt-24 pb-12 md:pb-16">
      <article className="max-w-[800px] mx-auto px-4 md:px-8 font-[Georgia,_serif] text-[#374151] leading-relaxed">
        {children}
        <Link
          href="/"
          className="inline-block mt-8 py-2 text-[#d97706] font-semibold no-underline hover:underline min-h-[44px] flex items-center"
        >
          ← Back to Health & Wellness
        </Link>
      </article>
    </div>
  );
}
