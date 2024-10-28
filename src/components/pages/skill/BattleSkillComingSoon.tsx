import Image from '@/lib/Image';
import { cn } from '@/lib/utils';

interface BattleSkillComingSoonProps {
   className?: string;
}

export default function BattleSkillComingSoon({
   className,
}: BattleSkillComingSoonProps) {
   return (
      <div
         className={cn(
            'flex h-full w-full flex-col items-center justify-center gap-8 p-8 text-white transition duration-200 ease-out',
            className
         )}
      >
         <div className="flex flex-col items-center gap-4">
            <p className="text-3xl font-bold">COMING SOON</p>
            <p className="text-base] text-center">
               We&apos;re hard at work crafting something special just for you.
               Stay tuned for updates—
               <br />
               it&apos;s going to be worth the wait!
            </p>
         </div>
         <div className="flex items-center justify-center gap-4">
            <a href="https://telegram.org" target="_blank">
               <Image
                  src="/enian.github.io/assets/social-media/telegram-bubble.png"
                  className="h-[52px] w-[52px]"
                  alt="telegram-bubble"
               />
            </a>
            <a href="https://x.com" target="_blank">
               <Image
                  src="/enian.github.io/assets/social-media/x-bubble.png"
                  className="h-[52px] w-[52px]"
                  alt="x-bubble"
               />
            </a>
            <a href="https://discord.com" target="_blank">
               <Image
                  src="/enian.github.io/assets/social-media/discord-bubble.png"
                  className="h-[52px] w-[52px]"
                  alt="discord-bubble"
               />
            </a>
         </div>
      </div>
   );
}
