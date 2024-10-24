import MainLayout from '@/components/layouts/MainLayout';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/inventory')({
   component: Inventory,
});

function Inventory() {
   return (
      <MainLayout
         wrapperClassName="p-5 ty:gap-6 h-screen"
         navClassName="ty:pb-0"
      >
         <div className="flex flex-1 flex-col">
            <h3 className="text-indigo-500">Inventory | Enian Combat!</h3>
         </div>
      </MainLayout>
   );
}
