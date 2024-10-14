import MainLayout from '@/components/layouts/MainLayout';
import ProfilBadge from '@/components/pages/gameplay/ProfilBadge';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/quest')({
   component: Quest,
});

function Quest() {
   return (
      <MainLayout wrapperClassName="p-5 ty:gap-6" navClassName="fixed px-5">
         <ProfilBadge />
         <div className="flex flex-1">
            <h3 className="text-orange-500">Quest | Enian Combat!</h3>
         </div>
      </MainLayout>
   );
}
