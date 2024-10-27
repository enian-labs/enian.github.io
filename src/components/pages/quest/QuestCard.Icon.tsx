import Image from '@/lib/Image';
import { QuestCardIconProps, QuestCardProps } from '@/types/quest';
import React, { useEffect } from 'react';

export default function QuestCardIcon(props: QuestCardIconProps) {
   const getIcon = (type: typeof props.type) => {
      switch (type) {
         case 'ads':
            return '/assets/quest/icon-ads.svg';

         case 'daily':
            return '/assets/quest/icon-daily.svg';

         case 'telegram':
            return '/assets/quest/icon-telegram.svg';

         case 'x':
            return '/assets/quest/icon-x.svg';

         default:
            return '/assets/quest/icon-quest.svg';
      }
   };

   return (
      <Image
         alt={props.type!}
         src={getIcon(props.type)}
         className="size-[3.125rem]"
      />
   );
}
