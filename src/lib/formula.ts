export const EXP_CLAIMED_AFTER_FARMING = 150;

const EXP_MULTIPLIER = 3 / 100; // 3%

const EXP_FAST_UPGRADE_PERCENTAGE = 20 / 100; // 20%

const FAST_UPGRADE_MULTIPLIER = 10 / 100; // 10%

const CLAIM_MULTIPLIER = 8 / 100; // 8%

export const calculateNextValue = (
   previousValue: number,
   type: 'exp' | 'claim' | 'gold'
): number => {
   let multiplier;

   switch (type) {
      case 'exp':
         multiplier = EXP_MULTIPLIER;
         break;
      case 'claim':
         multiplier = CLAIM_MULTIPLIER;
         break;
      case 'gold':
         multiplier = FAST_UPGRADE_MULTIPLIER;
         break;
      default:
         throw new Error('Invalid type');
   }

   const resultValue = Math.round(previousValue + previousValue * multiplier);
   return resultValue;
};

export const getMinExpAllowedFastUpgrade = (exp: number): number => {
   const resultExp = Math.round(exp * EXP_FAST_UPGRADE_PERCENTAGE);
   return resultExp;
};
