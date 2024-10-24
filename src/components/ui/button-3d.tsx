import { cn } from '@/lib/utils';
import React from 'react';

export type Button3DProps = {
   children?: React.ReactNode;
   onClick?: React.MouseEventHandler<HTMLButtonElement>;
   disabled?: boolean;
   btnClassName?: string;
   percentage?: string;
   textClassName?: string;
   isClickable?: boolean;
};

export function Button3D({
   children,
   onClick,
   disabled,
   btnClassName,
   percentage,
   textClassName,
   isClickable = false,
}: Button3DProps) {
   return (
      // outer shadow
      <button
         type="button"
         className={cn('pushable bg-pushable-gradient', btnClassName)}
         onClick={onClick}
         disabled={disabled && !isClickable}
      >
         {/* button fill */}
         <div
            className={cn(
               'front bg-front-gradient relative overflow-hidden uppercase',
               textClassName
            )}
         >
            {disabled && (
               <div
                  className="bg-front-process-gradient absolute right-0 top-0 h-full transition-all duration-1000"
                  style={{ width: `${percentage}%` }}
               ></div>
            )}
            {/* eclipse top */}
            <span className="bg-front-gradient-white absolute -top-[80%] left-0 -z-[1] h-full w-full"></span>
            {/* eclipse bottom */}
            <span className="bg-front-gradient-white absolute -bottom-1/2 left-0 -z-[1] h-full w-full"></span>
            {/* top border */}
            <span className="border-front-gradient absolute left-0 top-0 h-[1.404px] w-full"></span>
            {/* bottom border */}
            <span className="border-front-gradient absolute bottom-0 left-0 h-[1.404px] w-full"></span>
            {/* lower highlight */}
            <span className="absolute -bottom-1/2 left-0 -z-[2] h-full w-full bg-[#C77126] opacity-50"></span>
            {children || 'Start Farming'}
         </div>
      </button>
   );
}
