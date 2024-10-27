import { QuestCardProps } from '@/types/quest';
import { Gold, ProfileTypes } from '@/types/stores';
import WebApp from '@twa-dev/sdk';

export const handleProcessClaim = async (
   check: Gold,
   quest: QuestCardProps['metadata'],
   local: ProfileTypes | null,
   setLocal: (local: ProfileTypes) => void
) => {
   if (!check?.status) {
      // open link telegram
      if (quest.type === 'x') {
         WebApp.openLink(quest.url!);
      } else if (quest.type === 'telegram') {
         WebApp.openTelegramLink(quest.url!);
      }
   }

   if (check?.status === 'claimed') {
      // return nothing when clicked again
      console.log(`quest ${quest.title} already claimed`);
      return;
   }

   if (check?.status === 'claim') {
      // change to claimed when after click
      const newGold = local?.metadata.gold.map((gold) => {
         if (gold.id === quest.id) {
            return {
               id: gold.id,
               status: 'claimed' as typeof gold.status,
               value: gold.value,
            };
         } else {
            return gold;
         }
      });

      setLocal({
         ...local!,
         metadata: {
            gold: newGold!,
         },
      });
   } else {
      // click for the first time
      setLocal({
         ...local!,
         metadata: {
            gold: [
               ...local?.metadata.gold!,
               {
                  id: quest.id!,
                  value: quest.reward,
                  status: 'claim',
               },
            ],
         },
      });
   }
};
