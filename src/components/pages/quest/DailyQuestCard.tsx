import Image from '@/lib/Image';
import { cn } from '@/lib/utils';
import { DailyQuestCardProps } from '@/types/quest';
import { CheckFat } from '@phosphor-icons/react';

export default function DailyQuestCard({ metadata }: DailyQuestCardProps) {
   return (
      <div
         className={cn('daily-quest-card', {
            'border-white/40 bg-white/10 shadow-none':
               metadata?.status === 'claimed',
         })}
      >
         <h4 className="daily-quest-text">{metadata?.title}</h4>
         {metadata?.status === 'start' ? (
            <Image
               alt="gold"
               src="/assets/resource/gold.svg"
               width={40}
               height={40}
            />
         ) : (
            <div className="flex size-10 items-center justify-center rounded-full bg-[rgba(181,254,203,0.20)] backdrop-blur-md">
               <CheckFat size={22} weight="fill" className="text-[#3FE7FC]" />
            </div>
         )}
         <h4 className="daily-quest-text">{metadata?.value}</h4>
      </div>
   );
}
