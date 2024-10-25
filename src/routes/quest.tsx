import React from 'react';
import MainLayout from '@/components/layouts/MainLayout';
import ProfilBadge from '@/components/pages/gameplay/ProfilBadge';
import QuestCard from '@/components/pages/quest/QuestCard';
import { createFileRoute } from '@tanstack/react-router';
import {
   Dialog,
   DialogContent,
   DialogDescription,
   DialogHeader,
   DialogTitle,
} from '@/components/ui/dialog';
import * as VisuallyHidden from '@radix-ui/react-visually-hidden';
import DailyQuestCard from '@/components/pages/quest/DailyQuestCard';
import { Button3D } from '@/components/ui/button-3d';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export const Route = createFileRoute('/quest')({
   component: Quest,
});

function Quest() {
   const [openDaily, setOpenDaily] = React.useState(false);
   const [daily, setDaily] = React.useState<{
      count: number;
      status: 'start' | 'claimed';
   }>({
      count: 1,
      status: 'start',
   });

   return (
      <>
         <MainLayout
            wrapperClassName="p-5 ty:gap-6 h-screen"
            navClassName="ty:pb-0"
            bgUrl='/assets/background/tavern.jpeg'
         >
            <div className="no-scrollbar flex flex-1 flex-col overflow-y-scroll">
               <h3 className="quest-title mb-3">DAILY QUEST</h3>
               <div className="grid w-full gap-3">
                  <QuestCard
                     metadata={{
                        title: 'Daily Reward',
                        reward: '5.000',
                        type: 'other',
                     }}
                     onClick={() => setOpenDaily(true)}
                     questType={daily.status === 'start' ? 'start' : 'claimed'}
                  />
                  <QuestCard
                     metadata={{
                        title: 'Watch Ads',
                        reward: '10.000',
                        type: 'other',
                     }}
                  />
               </div>
               <h3 className="quest-title mb-3 mt-4">QUEST LIST</h3>
               <div className="grid w-full gap-3">
                  {Array.from({
                     length: 10,
                  }).map((_, key) => (
                     <QuestCard
                        key={key}
                        metadata={{
                           title: `Quest List ${key + 1}`,
                           reward: '10.000',
                           type: 'other',
                        }}
                     />
                  ))}
               </div>
            </div>
         </MainLayout>

         {/* OPEN DAILY MODAL */}
         <Dialog open={openDaily} onOpenChange={setOpenDaily}>
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
               <div className="flex flex-wrap justify-center gap-1.5">
                  {Array.from({ length: 7 }).map((_, key) => {
                     const day = key + 1;
                     return (
                        <div key={key}>
                           <DailyQuestCard
                              metadata={{
                                 title: `Day ${day}`,
                                 status:
                                    day === daily.count
                                       ? daily.status
                                       : 'start',
                                 value: '5.000',
                              }}
                           />
                        </div>
                     );
                  })}
               </div>
               <div className="mt-6 space-y-3">
                  <Button3D
                     onClick={() => {
                        if (daily.status === 'claimed') {
                           setOpenDaily(false);
                           return;
                        }
                        setDaily({
                           ...daily,
                           status: 'claimed',
                        });
                     }}
                     btnClassName={cn({
                        'bg-pushable-process-gradient relative':
                           daily.status === 'claimed',
                     })}
                     disabled={daily.status === 'claimed'}
                     percentage={daily.status === 'claimed' ? '100' : undefined}
                     isClickable
                  >
                     <span
                        className={cn('relative z-[5]', {
                           capitalize: daily.status === 'claimed',
                        })}
                     >
                        {daily.status === 'claimed'
                           ? 'Come back tomorrow'
                           : 'GET 5.000 GOLD'}
                     </span>
                  </Button3D>
                  {daily.status === 'start' && (
                     <Button
                        size={'lg'}
                        type="button"
                        className="btn-ads"
                        onClick={() => {
                           console.log(
                              'see ads first then claimed after end of ads'
                           );
                           setDaily({
                              ...daily,
                              status: 'claimed',
                           });
                        }}
                     >
                        <span>WATCH ADS TO DOUBLE IT</span>
                     </Button>
                  )}
               </div>
            </DialogContent>
         </Dialog>
      </>
   );
}
