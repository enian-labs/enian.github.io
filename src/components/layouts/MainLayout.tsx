import React from 'react';
import Navigation from './Navigation';

export default function MainLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <div className="flex flex-1 flex-col">
         <main className="flex-1 overflow-y-auto">
            <section className="w-limit bg-main ty:gap-5 relative flex flex-1 flex-col gap-4">
               {children}
               {/* footer menu */}
               <Navigation />
            </section>
         </main>
      </div>
   );
}
