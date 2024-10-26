import QuestCard from '../quest/QuestCard';
import { Button3D } from '@/components/ui/button-3d';
import { useNavigate } from '@tanstack/react-router';

export default function OnboardingQuest() {
   const router = useNavigate({
      from: '/onboarding',
   });

   return (
      <div className="age-result-card w-full rounded-3xl rounded-b-none border border-black/0 bg-black/30 pb-9 pt-8">
         <div className="mb-7">
            <span className="age-result-title">ONE TIME QUEST</span>
            <p className="max-w-sm text-center text-[1.188rem]/normal font-normal">
               Complete the quests below to continue playing this game
            </p>
         </div>
         <div className="mb-6 grid w-full gap-3">
            <QuestCard
               questType="claimed"
               metadata={{
                  title: 'Follow Enian Telegram',
                  reward: '20.000',
                  type: 'telegram',
               }}
            />
            <QuestCard
               metadata={{
                  title: 'Follow Enian X',
                  reward: '20.000',
                  type: 'x',
               }}
            />
         </div>
         <Button3D
            btnClassName="mt-6"
            onClick={() => {
               router({
                  to: '/',
                  search: {
                     todo: 'play',
                     gold: '160000',
                  },
               });
            }}
         >
            Continue
         </Button3D>
      </div>
   );
}
