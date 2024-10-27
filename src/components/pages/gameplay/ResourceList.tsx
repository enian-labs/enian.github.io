import { RESOURCE_LIST } from '@/constant/core';
import ResourceCard from './ResourceCard';
import { useMockStore } from '@/stores/mock.store';
import { ResourceTypes } from '@/types/stores';

export default function ResourceList() {
   const { resource } = useMockStore();
   return (
      <div className="absolute bottom-0 left-0 w-full">
         <div className="flex items-center justify-center gap-3">
            {RESOURCE_LIST.map((res) => {
               const total = resource[res.name as keyof ResourceTypes] || 0;
               return (
                  <ResourceCard
                     key={res.name}
                     item={res}
                     total={Number(total)}
                  />
               );
            })}
         </div>
      </div>
   );
}
