import React, { useEffect } from 'react';
import MainLayout from '@/components/layouts/MainLayout';
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
import { QuestCardProps } from '@/types/quest';
import { useMockStore } from '@/stores/mock.store';
import WebApp from '@twa-dev/sdk';
import { handleProcessClaim } from '@/lib/processClaim';

export const Route = createFileRoute('/quest')({
   component: Quest,
});

const DAILY_QUESTS: QuestCardProps['metadata'][] = [
   {
      id: 'daily-quest',
      title: 'Daily Reward',
      reward: '5000',
      type: 'daily',
   },
   {
      id: 'watch-ads',
      title: 'Watch Ads',
      reward: '10000',
      type: 'ads',
      url: 'https://www.youtube.com/watch?v=AfpItQBKl04&ab_channel=FCBarcelona',
   },
];

const QUESTS: QuestCardProps['metadata'][] = [
   {
      id: 'join-enian-News',
      title: 'Join Enian News',
      reward: '20000',
      type: 'telegram',
      url: 'https://t.me/EnianCombatNews',
   },
   {
      id: 'comment-like-post-community-1',
      title: 'Comment & Like Post',
      reward: '10000',
      type: 'telegram',
      url: 'https://t.me/EnianCombatCommunity',
   },
];

function Quest() {
   const [openDaily, setOpenDaily] = React.useState(false);
   const [daily, setDaily] = React.useState<{
      count: number;
      status: 'start' | 'claimed';
   }>({
      count: 1,
      status: 'start',
   });
   const { profile, setProfile } = useMockStore();

   const handleDaily = (type: 'ads' | 'default' = 'default') => {
      const quest = DAILY_QUESTS.find((q) => q.id === 'daily-quest');

      setProfile({
         ...profile!,
         metadata: {
            gold: [
               ...profile?.metadata.gold!,
               {
                  id: quest?.id!,
                  value: Number(quest?.reward || 0) * (type === 'ads' ? 2 : 1),
                  status: 'claimed',
               },
            ],
         },
      });
   };

   useEffect(() => {
      if (profile) {
         const getDailyStatus = () => {
            const checkingDaily = profile.metadata.gold.find(
               (q) => q.id === 'daily-quest'
            );

            if (checkingDaily) {
               setDaily({
                  count: 1,
                  status: 'claimed',
               });
            }
         };
         getDailyStatus();
      }
   }, [profile]);

   return (
      <>
         <MainLayout
            wrapperClassName="p-5 ty:gap-6 h-screen"
            navClassName="ty:pb-0"
            bgUrl="/assets/background/tavern.jpeg"
         >
            <div className="no-scrollbar flex flex-1 flex-col overflow-y-scroll">
               <h3 className="quest-title mb-3">DAILY QUEST</h3>
               <div className="grid w-full gap-3">
                  {DAILY_QUESTS.map((daily_quest, key) => {
                     const check = profile?.metadata.gold.find(
                        (q) => q.id === daily_quest.id
                     );
                     console.log(`quest ${check?.id} already clicked`);
                     return (
                        <QuestCard
                           key={key}
                           metadata={daily_quest}
                           questType={check ? check.status : 'start'}
                           onClick={() => {
                              if (daily_quest.id === 'daily-quest') {
                                 setOpenDaily(true);
                                 return;
                              }

                              handleProcessClaim(
                                 check!,
                                 daily_quest,
                                 profile,
                                 setProfile
                              );
                           }}
                        />
                     );
                  })}
               </div>
               <h3 className="quest-title mb-3 mt-4">QUEST LIST</h3>
               <div className="grid w-full gap-3">
                  {QUESTS.map((quest, key) => {
                     const check = profile?.metadata.gold.find(
                        (q) => q.id === quest.id
                     );
                     console.log(`quest ${check?.id} already clicked`);
                     return (
                        <QuestCard
                           key={key}
                           metadata={quest}
                           questType={check ? check.status : 'start'}
                           onClick={() =>
                              handleProcessClaim(
                                 check!,
                                 quest,
                                 profile,
                                 setProfile
                              )
                           }
                        />
                     );
                  })}
               </div>
            </div>
         </MainLayout>

         {/* OPEN DAILY MODAL */}
         <Dialog open={openDaily} onOpenChange={setOpenDaily}>
            <DialogContent
               iconImageUrl="/assets/quest/gift.svg"
               iconClassName="size-[52px]"
            >
               <VisuallyHidden.Root>
                  <DialogHeader>
                     <DialogTitle>Edit profile</DialogTitle>
                     <DialogDescription>
                        Make changes to your profile here. Click save when
                        you're done.
                     </DialogDescription>
                  </DialogHeader>
               </VisuallyHidden.Root>
               <div className="mt-3 flex flex-wrap justify-center gap-1.5">
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
                                 value: '5000',
                              }}
                           />
                        </div>
                     );
                  })}
               </div>
               <div className="mt-6 space-y-2 p-5 pt-0">
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

                        handleDaily();
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

                           handleDaily('ads');
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
