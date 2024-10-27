import QuestCard from '../quest/QuestCard';
import { Button3D } from '@/components/ui/button-3d';
import { useMockStore } from '@/stores/mock.store';
import { QuestCardProps } from '@/types/quest';
import { useNavigate } from '@tanstack/react-router';
import WebApp from '@twa-dev/sdk';

const ONBOARDING_QUEST: QuestCardProps['metadata'][] = [
   {
      id: 'join-enian-community',
      title: 'Join Enian Community',
      reward: '20000',
      type: 'telegram',
      url: 'https://t.me/EnianCombatCommunity',
   },
   {
      id: 'follow-enian-x',
      title: 'Follow Enian X',
      reward: '20000',
      type: 'x',
      url: 'https://x.com/eniancombat',
   },
];

export default function OnboardingQuest() {
   const router = useNavigate({
      from: '/onboarding',
   });
   const { profile, setProfile } = useMockStore();

   return (
      <div className="age-result-card w-full rounded-3xl rounded-b-none border border-black/0 bg-black/30 pb-9 pt-8">
         <div className="mb-7">
            <span className="age-result-title">ONE TIME QUEST</span>
            <p className="max-w-sm text-center text-[1.188rem]/normal font-normal">
               Complete the quests below to continue playing this game
            </p>
         </div>
         <div className="mb-6 grid w-full gap-3">
            {ONBOARDING_QUEST.map((quest, key) => {
               const check = profile?.metadata.gold?.find(
                  (q) => q.id === quest.id
               );
               console.log(`quest ${check?.id} already clicked`);
               return (
                  <QuestCard
                     key={key}
                     metadata={quest}
                     questType={check ? check.status : 'start'}
                     onClick={() => {
                        if (!check?.status) {
                           // open link telegram
                           if (quest.type === 'x') {
                              WebApp.openLink(quest.url!);
                           } else if (quest.type === 'telegram') {
                              WebApp.openTelegramLink(quest.url!);
                           }
                        }

                        if (check?.status === 'claimed') {
                           // return nothing when clicked again
                           console.log(`quest ${quest.title} already claimed`);
                           return;
                        }

                        if (check?.status === 'claim') {
                           // change to claimed when after click
                           const newGold = profile?.metadata.gold.map(
                              (gold) => {
                                 if (gold.id === quest.id) {
                                    return {
                                       id: gold.id,
                                       status: 'claimed' as typeof gold.status,
                                       value: gold.value,
                                    };
                                 } else {
                                    return gold;
                                 }
                              }
                           );

                           setProfile({
                              ...profile!,
                              metadata: {
                                 gold: newGold!,
                              },
                           });
                        } else {
                           // click for the first time
                           setProfile({
                              ...profile!,
                              metadata: {
                                 gold: [
                                    ...profile?.metadata.gold!,
                                    {
                                       id: quest.id!,
                                       value: quest.reward,
                                       status: 'claim',
                                    },
                                 ],
                              },
                           });
                        }
                     }}
                  />
               );
            })}
         </div>
         <Button3D
            btnClassName="mt-6"
            onClick={() => {
               setProfile({
                  ...profile!,
                  todo: 'play',
               });

               router({
                  to: '/',
                  search: {
                     todo: 'play',
                  },
               });
            }}
         >
            Continue
         </Button3D>
      </div>
   );
}
