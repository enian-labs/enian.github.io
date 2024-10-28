import MainLayout from '@/components/layouts/MainLayout';
import BattleSkillComingSoon from '@/components/pages/skill/BattleSkillComingSoon';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/inventory')({
   component: Inventory,
});

function Inventory() {
   return (
      <MainLayout
         wrapperClassName="p-5 ty:gap-6 h-screen"
         navClassName="ty:pb-0"
         bgUrl="/assets/background/forest.png"
      >
         <div className="flex h-full flex-col gap-6">
            <div className="h-full w-full">
               <BattleSkillComingSoon className="flex" />
            </div>
         </div>
      </MainLayout>
   );
}
