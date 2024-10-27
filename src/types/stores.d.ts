export type Gold = {
   id: string;
   value: string | number;
   status?: 'claim' | 'claimed';
};

export type ProfileTypes = {
   todo: 'play' | 'onboarding';
   metadata: {
      gold: Gold[];
   };
};

export type ResourceTypes = {
   id: string;
   name: string;
   total: number | string;
};

export type SkillTypes = {
   id: string;
   name: string;
   level: number;
   claimedResource: string | number;
   upgradeCost: number;
   expNeededToNextLevel: number;
   exp: number;
   desc: string;
   imageUrl: string;
   resource: 'wood' | 'iron' | 'leather';
};
