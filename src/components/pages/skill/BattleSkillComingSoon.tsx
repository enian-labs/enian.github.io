import Image from "@/lib/Image";
import { cn } from "@/lib/utils";

interface BattleSkillComingSoonProps {
  className?: string;
}

export default function BattleSkillComingSoon({ className }: BattleSkillComingSoonProps) {
  return (
    <div className={cn(
      "flex flex-col w-full h-full justify-center items-center gap-8 text-white p-8 transition duration-200 ease-out",
      className,
    )}>
      <div className="flex flex-col gap-4 items-center">
        <p className="font-bold text-3xl">COMING SOON</p>
        <p className="text-center text-base]">
          We&apos;re hard at work crafting something special just for you. Stay tuned for updates—<br />
          it&apos;s going to be worth the wait!
        </p>
      </div>
      <div className="flex justify-center items-center gap-4">
        <a href="https://telegram.org" target="_blank">
          <Image
            src="/assets/social-media/telegram-bubble.png"
            className="w-[52px] h-[52px]"
            alt="telegram-bubble"
          />
        </a>
        <a href="https://x.com" target="_blank">
          <Image
            src="/assets/social-media/x-bubble.png"
            className="w-[52px] h-[52px]"
            alt="x-bubble"
          />
        </a>
        <a href="https://discord.com" target="_blank">
          <Image
            src="/assets/social-media/discord-bubble.png"
            className="w-[52px] h-[52px]"
            alt="discord-bubble"
          />
        </a>
      </div>
    </div>
  )
}