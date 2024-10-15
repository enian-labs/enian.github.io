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

export const Route = createFileRoute('/quest')({
   component: Quest,
});

function Quest() {
   const [openDaily, setOpenDaily] = React.useState(false);

   return (
      <>
         <MainLayout
            wrapperClassName="p-5 ty:gap-6 h-screen"
            navClassName="ty:pb-0"
         >
            <ProfilBadge />
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
               <div className="grid gap-4">halo dialog</div>
            </DialogContent>
         </Dialog>
      </>
   );
}
