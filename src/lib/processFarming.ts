import { FarmingTypes, ResourceTypes, SkillTypes } from '@/types/stores';
import { EXP_CLAIMED_AFTER_FARMING } from './formula';

export const handleProcessFarming = (
   source: FarmingTypes | null,
   skill: SkillTypes[],
   setSkill: (skill: SkillTypes[]) => void,
   resource: ResourceTypes[],
   setResource: (resource: ResourceTypes[]) => void
) => {
   if (!source) return;

   const selectedSkill = skill.find((s) => s.resource === source.resource);
   if (selectedSkill) {
      // UPDATE RESOURCE TOTAL AFTER CLAIM
      const updateResource = resource.map((r) => {
         if (r.id === source.resource) {
            const total =
               Number(r.total) + Number(selectedSkill.claimedResource);
            return {
               ...r,
               total,
            };
         }
         return r;
      });
      setResource(updateResource);

      // UPDATE SKILL EXP AFTER CLAIM
      const newSkill = skill.map((s) => {
         if (s.id === selectedSkill.id) {
            return {
               ...s,
               exp: s.exp + EXP_CLAIMED_AFTER_FARMING,
            };
         }
         return s;
      });
      setSkill(newSkill);
   }
};
