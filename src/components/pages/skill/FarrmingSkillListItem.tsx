import { Button3D } from "@/components/ui/button-3d";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import Image from "@/lib/Image";
import { cn } from "@/lib/utils";
import { FarmingSkillDataItem } from "@/types/skill";
import { useState } from "react";

interface FarmingSkillListItemProps {
  data: FarmingSkillDataItem;
}

export default function FarmingSkillListItem({ data }: FarmingSkillListItemProps) {
  const [openUpgradeModal, setOpenUpgradeModal] = useState(false);

  return (
    <div className={cn(
      "w-limit max-w-screen-xs rounded-[8px] border-[0.5px] border-custom-blue bg-[radial-gradient(151.92%_127.02%_at_15.32%_21.04%,rgba(165,239,255,0.20)_0%,rgba(110,191,244,0.04)_77.08%,rgba(70,144,212,0.00)_100%)] shadow-2xl backdrop-blur-[6px]",
      "p-3 flex justify-between items-center gap-5 text-white"
    )}>
      <Image
        src={data.imageUrl}
        alt={data.name}
        className="w-[48px] h-[48px]"
      />
      <div className="flex flex-col gap-0.5 w-full">
        <p className="text-lg font-bold">{data.name} - Lv {typeof data.level === 'string' ? data.level.toUpperCase() : data.level}</p>
        <p className="text-sm text-yellow-400">{data.benefit}</p>
      </div>
      <button className="bg-[#C77126] text-white rounded-[50px] py-2 px-3 text-lg" onClick={() => setOpenUpgradeModal(true)}>
        UPGRADE
      </button>
      {/* OPEN FARMING MODAL */}
      <Dialog open={openUpgradeModal} onOpenChange={setOpenUpgradeModal}>
        <DialogContent iconImageUrl={data.imageUrl}>
          <div className="flex flex-col gap-10 text-white">
            <div className="flex flex-col gap-2 items-center">
              <p className="text-xl font-bold">{data.name} - Lv {typeof data.level === 'string' ? data.level.toUpperCase() : data.level}</p>
              <p className="text-base text-center">
                Unlocking the ability to mine iron while chopping trees. Upgrade your tools to increase resource efficiency and speed.
              </p>
            </div>
            <div className="flex gap-2">
              <div className="w-full flex flex-col gap-1 rounded-[8px] border border-black/0 bg-black/5 px-3.5 py-2 text-base font-bold text-white shadow-[0px_0px_13px_0px_rgba(0,0,0,0.80)_inset]">
                <p className="text-[#FFB961] text-xs font-medium">Next Level Benefit</p>
                <p className="text-base font-bold">{data.benefit}</p>
              </div>
              <div className="w-full flex flex-col gap-1 rounded-[8px] border border-black/0 bg-black/5 px-3.5 py-2 text-base font-bold text-white shadow-[0px_0px_13px_0px_rgba(0,0,0,0.80)_inset]">
                <p className="text-[#FFB961] text-xs font-medium">Upgrade Cost</p>
                <p className="text-base font-bold">{data.upgradeCost.toLocaleString()} Gold</p>
              </div>
            </div>
          </div>
          <div className="mt-6 space-y-3">
            <Button3D
              onClick={() => { }}
            >
              Upgrade Now
            </Button3D>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}