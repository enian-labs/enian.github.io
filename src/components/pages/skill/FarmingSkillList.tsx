import { FarmingSkillDataItem } from "@/types/skill";
import FarmingSkillListItem from "./FarrmingSkillListItem";

interface FarmingSkillList {
  data: FarmingSkillDataItem[];
  key?: string;
}

export default function FarmingSkillList({ data, key }: FarmingSkillList) {
  return (
    <div key={key} className="flex flex-col gap-2 w-full overflow-y-scroll no-scrollbar">
      {data.map((item) => {
        return (
          <FarmingSkillListItem data={item} />
        )
      })}
    </div>
  )
}