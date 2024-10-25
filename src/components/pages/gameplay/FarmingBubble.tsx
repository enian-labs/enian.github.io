import Image from '@/lib/Image';
import { cn } from '@/lib/utils';
import { FarmingBubbleProps } from '@/types/gameplay';

export default function FarmingBubble({ className, type }: FarmingBubbleProps) {
   const getImg = (type: string): string => {
      switch (type) {
         case 'iron':
            return '/assets/original/resource/bubble-iron.svg';
         case 'leather':
            return '/assets/original/resource/bubble-leather.svg';
         default:
            return '/assets/original/resource/bubble-wood.svg';
      }
   };

   return (
      <div
         className={cn(
            'bubble absolute animate-bouncing opacity-0 transition-opacity',
            className
         )}
      >
         <Image
            src={getImg(type)}
            alt="resource"
            width={100}
            height={100}
            className="aspect-square"
         />
      </div>
   );
}
