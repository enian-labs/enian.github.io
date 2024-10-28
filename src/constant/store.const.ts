import { SkillTypes } from '@/types/stores';

export const DEFAULT_RESOURCE = [
   {
      id: 'wood',
      name: 'Wood',
      total: 0,
   },
   {
      id: 'iron',
      name: 'Iron',
      total: 0,
   },
   {
      id: 'leather',
      name: 'Leather',
      total: 0,
   },
];

export const DEFAULT_SKILL: SkillTypes[] = [
   {
      id: 'lumberjack',
      name: 'Lumberjack',
      level: 1,
      claimedResource: 100,
      nextClaimedResource: 108,
      upgradeCost: 0,
      expNeededToNextLevel: 1000,
      exp: 0,
      desc: 'Unlocking the ability to mine wood while chopping trees. Upgrade your tools to increase resource efficiency and speed.',
      imageUrl: '/assets/original/resource/wood.svg',
      resource: 'wood',
      minExpAllowedFastUpgrade: 0,
   },
   {
      id: 'miner',
      name: 'Miner',
      level: 1,
      claimedResource: 100,
      nextClaimedResource: 108,
      upgradeCost: 0,
      expNeededToNextLevel: 1000,
      exp: 0,
      desc: 'Unlock the ability to mine iron ore as you delve into rich veins. Upgrade your tools to increase extraction efficiency and speed.',
      imageUrl: '/assets/original/resource/iron.svg',
      resource: 'iron',
      minExpAllowedFastUpgrade: 0,
   },
   {
      id: 'skinner',
      name: 'Skinner',
      level: 1,
      claimedResource: 100,
      nextClaimedResource: 108,
      upgradeCost: 0,
      expNeededToNextLevel: 1000,
      exp: 0,
      desc: 'Unlock the ability to skin animals for valuable leather as you hone your skills. Upgrade your tools to increase resource yield and skinning speed.',
      imageUrl: '/assets/original/resource/leather.svg',
      resource: 'leather',
      minExpAllowedFastUpgrade: 0,
   },
];
