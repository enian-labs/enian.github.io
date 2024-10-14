import { NAVIGATION_LINKS } from '@/constant/core';
import Image from '@/lib/Image';
import { cn } from '@/lib/utils';
import { Link } from '@tanstack/react-router';
import React from 'react';

type NavigationProps = {
   className?: string;
};

export default function Navigation({ className }: NavigationProps) {
   return (
      <footer
         className={cn(
            'sticky bottom-0 left-0 w-full pb-4 pt-0 ty:pb-[1.875rem]',
            className
         )}
      >
         <section className="bg-navigation">
            {NAVIGATION_LINKS.map((nav, key) => (
               <Link
                  key={key}
                  to={nav.href}
                  activeProps={{
                     className: 'font-bold',
                  }}
                  activeOptions={{ exact: nav.href === '/' ? true : false }}
                  className={cn({
                     'mx-3': nav.href === '/',
                  })}
               >
                  <span className="sr-only">{nav.name}</span>
                  {nav.href === '/' ? (
                     <div className="relative size-[3.75rem]">
                        <Image
                           src={nav.img}
                           alt={nav.name}
                           width={'82'}
                           height={'82'}
                           className={cn(
                              'absolute left-1/2 top-1/2 size-[95px] max-w-none -translate-x-1/2 -translate-y-1/2'
                           )}
                        />
                     </div>
                  ) : (
                     <Image
                        src={nav.img}
                        alt={nav.name}
                        width={'60'}
                        height={'60'}
                        className={cn('size-[3.75rem]')}
                     />
                  )}
               </Link>
            ))}
         </section>
      </footer>
   );
}
