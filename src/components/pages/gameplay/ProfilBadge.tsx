import Image from '@/lib/Image';
import ResourceCard from './ResourceCard';

export default function ProfilBadge() {
   return (
      <div className="mb-2 flex items-center justify-between">
         <Image
            src="/assets/profile-badge.svg"
            alt="profile"
            width={70}
            height={60}
         />
         <div className="">
            <ResourceCard
               size={60}
               item={{
                  img: '/assets/resource/gold.svg',
                  name: 'gold',
                  total: 9522000,
               }}
               className="h-[3.75rem] gap-4"
               textClassName="py-[1.125rem] pr-7 text-lg"
            />
         </div>
      </div>
   );
}
