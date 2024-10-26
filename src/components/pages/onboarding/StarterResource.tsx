import { Button3D } from '@/components/ui/button-3d';
import NumberTicker from '@/components/ui/number-ticker';
import { ONBOARDING_RESOURCES } from '@/constant/core';
import Image from '@/lib/Image';
import { StarterResourceProps } from '@/types/onboarding';

export default function StarterResource(props: StarterResourceProps) {
   return (
      <div className="flex w-full flex-col items-center px-5 pb-9">
         <div className="age-result-card mb-3">
            <span className="age-result-title">Your Telegram Age</span>
            <h4 className="text-shadow-age-result text-xl tracking-[0.4px]">
               <span className="age-big">4</span>
               Years <span className="age-big">8</span>Month{' '}
               <span className="age-big">10</span>Day
            </h4>
         </div>
         <div className="age-result-card">
            <span className="age-result-title mb-6">Free Starter Resource</span>
            <div className="flex items-center justify-center">
               {ONBOARDING_RESOURCES.map((resource) => (
                  <div
                     key={resource.name}
                     className="flex items-start justify-center gap-3"
                  >
                     <Image
                        src={resource.img}
                        alt={resource.name}
                        width={56}
                        height={56}
                     />
                     <div className="flex flex-col text-left font-bold text-white">
                        <span className="tracing-[0.24px] mt-1 text-xs/none capitalize">
                           {resource.name}
                        </span>
                        <div className="tracing-[0.48px] mt-2 text-2xl/none">
                           <NumberTicker
                              value={Number(resource.total)}
                              className="text-white"
                           />
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
         <Button3D btnClassName="mt-6" onClick={props.onClick}>
            Continue
         </Button3D>
      </div>
   );
}
