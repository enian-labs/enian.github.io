import * as React from 'react';
import { createFileRoute } from '@tanstack/react-router';
import Image from '@/lib/Image';
import { FARMING_LIST, RESOURCE_LIST } from '@/constant/core';
import ResourceCard from '@/components/pages/gameplay/ResourceCard';
import ProfilBadge from '@/components/pages/gameplay/ProfilBadge';
import { Button3D } from '@/components/ui/button-3d';
import Countdown from '@/lib/Countdown';
import { cn, sleep } from '@/lib/utils';
import party from 'party-js';
import MainLayout from '@/components/layouts/MainLayout';
import {
   Dialog,
   DialogContent,
   DialogDescription,
   DialogHeader,
   DialogTitle,
} from '@/components/ui/dialog';
import * as VisuallyHidden from '@radix-ui/react-visually-hidden';
import SelectFarming from '@/components/pages/gameplay/SelectFarming';
import FarmingBubble from '@/components/pages/gameplay/FarmingBubble';

export const Route = createFileRoute('/')({
   component: Dashboard,
});

function Dashboard() {
   const [process, setProcess] = React.useState<'START' | 'PROCESS' | 'END'>(
      'START'
   );
   const [textRender, setTextRender] = React.useState('Start Farming');
   const [processPercentage, setProcessPercentage] = React.useState(0);
   const [openFarming, setOpenFarming] = React.useState(false);
   const [farming, setFarming] = React.useState('');

   const textBtn = textRender;
   const prcntg = processPercentage;

   const handleProcess = async () => {
      const bubbles: NodeListOf<HTMLElement> =
         document.querySelectorAll('.bubble');

      switch (process) {
         case 'PROCESS':
            bubbles.forEach((bubble) => {
               // Remove the bubble after the confetti
               bubble.style.opacity = '100'; // Fade out animation
            });
            await sleep(500);
            setProcess('END');
            setTextRender('Claim Resource');
            break;

         case 'END':
            bubbles.forEach((bubble) => {
               party.sparkles(bubble, {
                  count: party.variation.range(1, 30), // Customize the amount of confetti
                  size: party.variation.range(0.2, 0.65),
               });

               // Remove the bubble after the confetti
               bubble.style.opacity = '0'; // Fade out animation
            });
            await sleep(500);
            setProcess('START');
            setTextRender('Start Farming');
            setFarming('');
            break;

         default:
            setProcess('PROCESS');
            setTextRender('Countdown');
            break;
      }
   };

   return (
      <>
         <MainLayout
            wrapperClassName="p-5 ty:gap-6 h-screen"
            navClassName="ty:pb-0"
         >
            <div className="flex flex-1 flex-col items-center justify-end">
               <div className="relative mb-4 w-full ty:mb-[1.375rem]">
                  <Image
                     src="/assets/original/knight.svg"
                     alt="knight"
                     width={328}
                     height={323}
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

                  <>
                     {/* RESOURCE RESULT AFTER FARMING */}
                     <FarmingBubble
                        type={farming}
                        className={cn('bottom-[35%] left-[10%]', {
                           'opacity-100': process === 'END',
                        })}
                     />
                     <FarmingBubble
                        type={farming}
                        className={cn(
                           'bottom-[20%] right-[23%] [animation-delay:2s]',
                           {
                              'opacity-100': process === 'END',
                           }
                        )}
                     />
                     <FarmingBubble
                        type={farming}
                        className={cn(
                           'bottom-[48%] right-[3%] [animation-delay:1s]',
                           {
                              'opacity-100': process === 'END',
                           }
                        )}
                     />
                  </>
               </div>
               {/* START FARMING */}
               <Button3D
                  onClick={() => {
                     if (process === 'END') {
                        handleProcess();
                        return;
                     }
                     setOpenFarming(true);
                  }}
                  disabled={process === 'PROCESS'}
                  btnClassName={cn({
                     'bg-pushable-process-gradient relative':
                        process === 'PROCESS',
                  })}
                  percentage={(100 - prcntg).toString()}
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
         </MainLayout>

         {/* OPEN FARMING MODAL */}
         <Dialog open={openFarming} onOpenChange={setOpenFarming}>
            <DialogContent>
               <VisuallyHidden.Root>
                  <DialogHeader>
                     <DialogTitle>Edit profile</DialogTitle>
                     <DialogDescription>
                        Make changes to your profile here. Click save when
                        you're done.
                     </DialogDescription>
                  </DialogHeader>
               </VisuallyHidden.Root>
               <div className="flex flex-col gap-3">
                  {FARMING_LIST.map((farm, key) => (
                     <SelectFarming
                        key={key}
                        id={farm.name}
                        value={farm.name}
                        onChange={(value) => {
                           setFarming(value);
                        }}
                        metadata={farm}
                        checked={farm.name === farming}
                     />
                  ))}
               </div>
               <div className="mt-6 space-y-3">
                  <Button3D
                     onClick={() => {
                        if (!farming) return;
                        handleProcess();
                        setOpenFarming(false);
                     }}
                  >
                     Start Farming
                  </Button3D>
               </div>
            </DialogContent>
         </Dialog>
      </>
   );
}
