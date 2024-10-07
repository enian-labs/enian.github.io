import * as React from 'react';
import { createFileRoute } from '@tanstack/react-router';
import Image from '@/lib/Image';
import { RESOURCE_LIST } from '@/constant/core';
import ResourceCard from '@/components/pages/gameplay/ResourceCard';
import ProfilBadge from '@/components/pages/gameplay/ProfilBadge';
import { Button3D } from '@/components/ui/button-3d';
import Countdown from '@/lib/Countdown';
import { cn } from '@/lib/utils';

export const Route = createFileRoute('/')({
   component: Dashboard,
});

function Dashboard() {
   const [process, setProcess] = React.useState<'START' | 'PROCESS' | 'END'>(
      'START'
   );
   const [textRender, setTextRender] = React.useState('Start Farming');
   const [processPercentage, setProcessPercentage] = React.useState(0);

   const textBtn = textRender;

   const handleProcess = async () => {
      switch (process) {
         case 'PROCESS':
            setProcess('END');
            setTextRender('Claim Resource');
            break;

         case 'END':
            setProcess('START');
            setTextRender('Start Farming');
            break;

         default:
            setProcess('PROCESS');
            setTextRender('Countdown');
            break;
      }
   };

   return (
      <>
         <ProfilBadge />
         <div className="flex flex-1 flex-col items-center justify-end">
            <div className="relative mb-4 w-full ty:mb-[1.375rem]">
               <Image
                  src="/assets/knight.svg"
                  alt="knight"
                  width={275}
                  height={533}
                  className="mx-auto w-4/6 ty:w-auto"
               />
               {/* RESOURCES LIST */}
               <div className="absolute bottom-0 left-0 w-full">
                  <div className="flex items-center justify-center gap-3">
                     {RESOURCE_LIST.map((resource) => (
                        <ResourceCard key={resource.name} item={resource} />
                     ))}
                  </div>
               </div>

               {process === 'END' && (
                  <>
                     {/* RESOURCE RESULT AFTER FARMING */}
                     <div className="absolute bottom-[35%] left-[10%] animate-bouncing">
                        <Image
                           src="/assets/resource/wood-result.svg"
                           alt="resource"
                           width={100}
                           height={100}
                           className="aspect-square"
                        />
                     </div>
                     <div className="absolute bottom-[20%] right-[23%] animate-bouncing [animation-delay:2s]">
                        <Image
                           src="/assets/resource/wood-result.svg"
                           alt="resource"
                           width={100}
                           height={100}
                           className="aspect-square"
                        />
                     </div>
                     <div className="absolute bottom-[48%] right-[3%] animate-bouncing [animation-delay:1s]">
                        <Image
                           src="/assets/resource/wood-result.svg"
                           alt="resource"
                           width={100}
                           height={100}
                           className="aspect-square"
                        />
                     </div>
                  </>
               )}
            </div>
            {/* START FARMING */}
            <Button3D
               onClick={handleProcess}
               disabled={process === 'PROCESS'}
               btnClassName={cn({
                  'bg-pushable-process-gradient relative':
                     process === 'PROCESS',
               })}
               percentage={(100 - processPercentage).toString()}
            >
               {process === 'PROCESS' ? (
                  <Countdown
                     hours={0}
                     minutes={0}
                     seconds={10}
                     onCountdownFinished={() => handleProcess()}
                     onPercentage={(percentage) => {
                        setProcessPercentage(Number(percentage));
                     }}
                  />
               ) : (
                  textBtn
               )}
            </Button3D>
         </div>
      </>
   );
}
