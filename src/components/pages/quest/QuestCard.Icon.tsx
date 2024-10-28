import Image from '@/lib/Image';
import { QuestCardIconProps } from '@/types/quest';

export default function QuestCardIcon(props: QuestCardIconProps) {
   const getIcon = (type: typeof props.type) => {
      switch (type) {
         case 'ads':
            return '/enian.github.io/assets/quest/icon-ads.svg';

         case 'daily':
            return '/enian.github.io/assets/quest/icon-daily.svg';

         case 'telegram':
            return '/enian.github.io/assets/quest/icon-telegram.svg';

         case 'x':
            return '/enian.github.io/assets/quest/icon-x.svg';

         default:
            return '/enian.github.io/assets/quest/icon-quest.svg';
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
