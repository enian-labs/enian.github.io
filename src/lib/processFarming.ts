import {
   FarmingTypes,
   ProfileTypes,
   ResourceTypes,
   SkillTypes,
} from '@/types/stores';
import {
   calculateNextValue,
   EXP_CLAIMED_AFTER_FARMING,
   FIRST_FAST_UPGRADE_GOLD_PRICE,
   FIRST_MIN_EXP_ALLOWED_FAST_UPGRADE,
   getMinExpAllowedFastUpgrade,
} from './formula';

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
            let level = s.level;
            let expNeededToNextLevel = s.expNeededToNextLevel;
            let claimedResource = s.claimedResource;
            let nextClaimedResource = s.nextClaimedResource;
            let minExpAllowedFastUpgrade = s.minExpAllowedFastUpgrade;
            let upgradeCost = s.upgradeCost;
            let expGain = s.exp + EXP_CLAIMED_AFTER_FARMING;
            if (expGain >= s.expNeededToNextLevel) {
               const remainingExp = expGain - s.expNeededToNextLevel;
               expGain = remainingExp;

               // Level
               if (level < 100) {
                  level = level + 1;
               }

               // Min Exp Allowed Fast Upgrade
               if (level === 2) {
                  minExpAllowedFastUpgrade = FIRST_MIN_EXP_ALLOWED_FAST_UPGRADE;
               } else {
                  minExpAllowedFastUpgrade =
                     getMinExpAllowedFastUpgrade(expNeededToNextLevel);
               }

               // Fast Upgrade Gold Price
               if (level === 2) {
                  upgradeCost = FIRST_FAST_UPGRADE_GOLD_PRICE;
               } else {
                  upgradeCost = calculateNextValue(Number(upgradeCost), 'gold');
               }

               // Exp Needed
               expNeededToNextLevel = calculateNextValue(
                  expNeededToNextLevel,
                  'exp'
               );

               // Claim Result
               claimedResource = nextClaimedResource;
               nextClaimedResource = calculateNextValue(
                  Number(claimedResource),
                  'claim'
               );
            }

            return {
               ...s,
               exp: expGain,
               level,
               expNeededToNextLevel,
               claimedResource,
               nextClaimedResource,
               minExpAllowedFastUpgrade,
               upgradeCost,
            };
         }
         return s;
      });
      setSkill(newSkill);
   }
};

export const handleFastUpgrade = (
   skill: SkillTypes[],
   setSkill: (skill: SkillTypes[]) => void,
   data: SkillTypes
) => {
   const selectedSkill = skill.find((s) => s.id === data.id);

   if (selectedSkill) {
      const newSkill = skill.map((s) => {
         if (s.id === selectedSkill.id) {
            let level = s.level;
            let expNeededToNextLevel = s.expNeededToNextLevel;
            let claimedResource = s.claimedResource;
            let nextClaimedResource = s.nextClaimedResource;
            let minExpAllowedFastUpgrade = s.minExpAllowedFastUpgrade;
            let upgradeCost = s.upgradeCost;

            // Level
            if (level < 100) {
               level = level + 1;
            }

            // Min Exp Allowed Fast Upgrade
            minExpAllowedFastUpgrade =
               getMinExpAllowedFastUpgrade(expNeededToNextLevel);

            // Fast Upgrade Gold Price
            upgradeCost = calculateNextValue(Number(upgradeCost), 'gold');

            // Exp Needed
            expNeededToNextLevel = calculateNextValue(
               expNeededToNextLevel,
               'exp'
            );

            // Claim Result
            claimedResource = nextClaimedResource;
            nextClaimedResource = calculateNextValue(
               Number(claimedResource),
               'claim'
            );

            return {
               ...s,
               exp: 0,
               level,
               expNeededToNextLevel,
               claimedResource,
               nextClaimedResource,
               minExpAllowedFastUpgrade,
               upgradeCost,
            };
         }

         return s;
      });

      setSkill(newSkill);
   }
};
