import MainLayout from '@/components/layouts/MainLayout';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/mission')({
   component: Mission,
});

function Mission() {
   return (
      <MainLayout>
         <div className="p-2">
            <h3 className="text-orange-500">Mission | Enian Combat!</h3>
         </div>
      </MainLayout>
   );
}
