import React from 'react';
import Navigation from './Navigation';
import { cn } from '@/lib/utils';

export default function MainLayout({
   children,
   wrapperClassName,
   navClassName,
}: {
   children: React.ReactNode;
   wrapperClassName?: string;
   navClassName?: string;
}) {
   return (
      <div className="flex flex-1 flex-col">
         <main className="flex-1 overflow-y-auto">
            <section
               className={cn(
                  'w-limit bg-main relative flex flex-1 flex-col gap-4 ty:gap-5',
                  wrapperClassName
               )}
            >
               {children}
               {/* footer menu */}
               <Navigation className={navClassName} />
            </section>
         </main>
      </div>
   );
}
