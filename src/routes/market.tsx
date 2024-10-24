import MainLayout from '@/components/layouts/MainLayout';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/market')({
   component: Market,
});

function Market() {
   return (
      <MainLayout
         wrapperClassName="p-5 ty:gap-6 h-screen"
         navClassName="ty:pb-0"
      >
         <div className="flex flex-1 flex-col">
            <h3 className="text-cyan-500">Market | Enian Combat!</h3>
         </div>
      </MainLayout>
   );
}
