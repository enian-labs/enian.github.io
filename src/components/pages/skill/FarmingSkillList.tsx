import { FarmingSkillDataItem } from "@/types/skill";
import FarmingSkillListItem from "./FarrmingSkillListItem";
import { cn } from "@/lib/utils";

interface FarmingSkillList {
  data: FarmingSkillDataItem[];
  key?: string;
  className?: string;
}

export default function FarmingSkillList({ data, key, className }: FarmingSkillList) {
  return (
    <div key={key} className={cn(
      "flex flex-col gap-2 w-full overflow-y-scroll no-scrollbar transition",
      className,
    )}>
      {data.map((item) => {
        return (
          <FarmingSkillListItem data={item} />
        )
      })}
    </div>
  )
}