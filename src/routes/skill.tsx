import MainLayout from '@/components/layouts/MainLayout';
import ProfilBadge from '@/components/pages/gameplay/ProfilBadge';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/skill')({
   component: Skill,
});

function Skill() {
   return (
      <MainLayout
         wrapperClassName="p-5 ty:gap-6 h-screen"
         navClassName="ty:pb-0"
      >
         <div className="flex flex-1 flex-col">
            <h3 className="text-purple-500">Skill | Enian Combat!</h3>
         </div>
      </MainLayout>
   );
}
