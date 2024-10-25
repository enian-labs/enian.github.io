import { Button3D } from '@/components/ui/button-3d';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import Image from '@/lib/Image';
import { cn } from '@/lib/utils';
import { FarmingSkillDataItem } from '@/types/skill';
import { useState } from 'react';

interface FarmingSkillListItemProps {
   data: FarmingSkillDataItem;
}

export default function FarmingSkillListItem({
   data,
}: FarmingSkillListItemProps) {
   const [openUpgradeModal, setOpenUpgradeModal] = useState(false);

   return (
      <div
         className={cn(
            'w-limit border-custom-blue max-w-screen-xs rounded-[8px] border-[0.5px] bg-[radial-gradient(151.92%_127.02%_at_15.32%_21.04%,rgba(165,239,255,0.20)_0%,rgba(110,191,244,0.04)_77.08%,rgba(70,144,212,0.00)_100%)] shadow-2xl backdrop-blur-[6px]',
            'flex items-center justify-between gap-5 p-3 text-white'
         )}
      >
         <Image
            src={data.imageUrl}
            alt={data.name}
            className="h-[48px] w-[48px]"
         />
         <div className="flex w-full flex-col gap-0.5">
            <p className="text-lg font-bold">
               {data.name} - Lv{' '}
               {typeof data.level === 'string'
                  ? data.level.toUpperCase()
                  : data.level}
            </p>
            <p className="text-sm text-yellow-400">{data.benefit}</p>
         </div>
         {typeof data.level !== 'string' && (
            <Button3D
               btnClassName="mt-3 w-fit"
               onClick={() => setOpenUpgradeModal(true)}
               textClassName="text-base py-1.5 px-4 -translate-y-1"
            >
               UPGRADE
            </Button3D>
         )}
         {/* OPEN FARMING MODAL */}
         <Dialog open={openUpgradeModal} onOpenChange={setOpenUpgradeModal}>
            <DialogContent iconImageUrl={data.imageUrl}>
               <div className="flex flex-col gap-10 text-white">
                  <div className="flex flex-col items-center gap-2">
                     <p className="text-xl font-bold">
                        {data.name} - Lv{' '}
                        {typeof data.level === 'string'
                           ? data.level.toUpperCase()
                           : data.level}
                     </p>
                     <p className="text-center text-base">
                        Unlocking the ability to mine iron while chopping trees.
                        Upgrade your tools to increase resource efficiency and
                        speed.
                     </p>
                  </div>
                  <div className="flex gap-2">
                     <div className="flex w-full flex-col gap-1 rounded-[8px] border border-black/0 bg-black/5 px-3.5 py-2 text-base font-bold text-white shadow-[0px_0px_13px_0px_rgba(0,0,0,0.80)_inset]">
                        <p className="text-xs font-medium text-[#FFB961]">
                           Next Level Benefit
                        </p>
                        <p className="text-base font-bold">{data.benefit}</p>
                     </div>
                     <div className="flex w-full flex-col gap-1 rounded-[8px] border border-black/0 bg-black/5 px-3.5 py-2 text-base font-bold text-white shadow-[0px_0px_13px_0px_rgba(0,0,0,0.80)_inset]">
                        <p className="text-xs font-medium text-[#FFB961]">
                           Upgrade Cost
                        </p>
                        <p className="text-base font-bold">
                           {data.upgradeCost.toLocaleString()} Gold
                        </p>
                     </div>
                  </div>
               </div>
               <div className="mt-6 space-y-3">
                  <Button3D onClick={() => {}}>Upgrade Now</Button3D>
               </div>
            </DialogContent>
         </Dialog>
      </div>
   );
}
