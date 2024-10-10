import MainLayout from '@/components/layouts/MainLayout';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/inventory')({
   component: Inventory,
});

function Inventory() {
   return (
      <MainLayout>
         <div className="p-2">
            <h3 className="text-indigo-500">Inventory | Enian Combat!</h3>
         </div>
      </MainLayout>
   );
}
