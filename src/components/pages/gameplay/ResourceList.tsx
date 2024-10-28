import { RESOURCE_LIST } from '@/constant/core';
import ResourceCard from './ResourceCard';
import { useMockStore } from '@/stores/mock.store';

export default function ResourceList() {
   const { resource } = useMockStore();
   return (
      <div className="absolute bottom-0 left-0 w-full">
         <div className="flex items-center justify-center gap-3">
            {RESOURCE_LIST.map((res) => {
               const getResource = resource.find((r) => r.id === res.name);
               const total = getResource?.total || 0;
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
