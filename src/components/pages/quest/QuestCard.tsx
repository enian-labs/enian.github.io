import Image from '@/lib/Image';
import React from 'react';
import { cn } from '@/lib/utils';
import QuestCardButton from './QuestCard.Button';
import { CaretDoubleRight, CheckFat } from '@phosphor-icons/react';

type QuestCardProps = {
   onClick?: () => void;
   className?: string;
   btnClassName?: string;
   questType?: 'start' | 'verify' | 'claim';
   metadata: {
      title: string;
      reward: string;
      type: 'telegram' | 'x' | 'url';
   };
};

export default function QuestCard({
   onClick,
   className,
   btnClassName,
   questType = 'start',
   metadata,
}: QuestCardProps) {
   return (
      <div
         className={cn(
            'shadow-[0px_0px_13px_0px_rgba(0,0,0,0.80) inset] flex items-center justify-between gap-3 rounded-xl border border-[#8726B7] bg-black/10 p-4 backdrop-blur',
            className
         )}
      >
         <div className="flex items-center space-x-4">
            <div className="size-[3.125rem] min-w-[3.125rem]">
               <Image
                  alt="mission"
                  src={
                     metadata.type === 'x'
                        ? '/assets/quest/icon-x.svg'
                        : '/assets/quest/icon-telegram.svg'
                  }
                  className="size-[3.125rem]"
               />
            </div>
            <div className="flex flex-col">
               <h3 className="text-shadow-age-title text-lg font-bold text-white">
                  {metadata.title}
               </h3>
               <div className="flex items-center text-sm font-bold">
                  <Image
                     alt="gold"
                     src="/assets/resource/gold-raw.svg"
                     width={24}
                     height={24}
                     className="mr-1.5"
                  />
                  +{metadata.reward} Gold
               </div>
            </div>
         </div>
         <QuestCardButton
            onClick={onClick}
            className={cn(btnClassName, {
               'p-3': questType === 'claim',
            })}
            disabled={questType === 'claim'}
         >
            {questType === 'start' && (
               <>
                  GO
                  <CaretDoubleRight
                     size={16}
                     weight="bold"
                     className="ml-1.5"
                  />
               </>
            )}
            {questType === 'verify' && 'VERIFY'}
            {questType === 'claim' && (
               <>
                  <CheckFat size={16} weight="fill" />
               </>
            )}
         </QuestCardButton>
      </div>
   );
}
