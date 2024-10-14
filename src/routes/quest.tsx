import MainLayout from '@/components/layouts/MainLayout';
import ProfilBadge from '@/components/pages/gameplay/ProfilBadge';
import QuestCard from '@/components/pages/quest/QuestCard';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/quest')({
   component: Quest,
});

function Quest() {
   return (
      <MainLayout
         wrapperClassName="p-5 ty:gap-6 h-screen"
         navClassName="ty:pb-0"
      >
         <ProfilBadge />
         <div className="flex flex-1 flex-col overflow-y-auto">
            <h3 className="quest-title mb-3">DAILY QUEST</h3>
            <div className="grid w-full gap-3">
               <QuestCard
                  metadata={{
                     title: 'Daily Reward',
                     reward: '5.000',
                     type: 'other',
                  }}
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
   );
}
