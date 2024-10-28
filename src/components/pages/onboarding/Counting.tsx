import AnimatedCounter from '@/lib/Counter';
import Image from '@/lib/Image';
import { CountingProps } from '@/types/onboarding';

export default function Counting({ loadingWidth, onEnd }: CountingProps) {
   return (
      <div className="flex flex-col items-center px-5 pb-9">
         <div className="relative mb-3 w-full">
            <Image
               src="/assets/wood-container.svg"
               alt="loader"
               width={275}
               height={21}
               className="w-full"
            />
            <div
               className="absolute left-0 top-[43%] mx-3 h-[17px] w-full max-w-[94%] -translate-y-1/2 rounded-md bg-[linear-gradient(180deg,#41D163_-4.95%,#30B95A_30.85%,#239D5F_45.36%,#117966_66.47%,#0B6B68_77.75%,#107568_83.81%,#1E8F66_93.99%,#34B964_106.98%,#41D163_113.53%)] transition-all duration-1000"
               style={{
                  width: `${loadingWidth}%`,
               }}
            ></div>
         </div>
         <p className="text-lg font-bold text-white">
            Loading (
            <AnimatedCounter
               start={0}
               end={loadingWidth}
               duration={700}
               onEnd={onEnd}
            />
            %)
         </p>
      </div>
   );
}
