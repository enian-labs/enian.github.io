import { RESOURCE_LIST } from '@/constant/core';

export type FarmingBubbleProps = {
   className?: string;
   type: string;
};

export type ResourceCardProps = {
   item: (typeof RESOURCE_LIST)[0];
   className?: string;
   textClassName?: string;
   size?: number;
};

export type SelectFarmingProps = {
   id: string;
   value?: string;
   name?: string;
   checked?: boolean;
   onChange?: (value: string, state: boolean) => void;
   metadata: {
      name: string;
      img: string;
   };
};
