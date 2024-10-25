export type DailyQuestCardProps = {
   metadata?: {
      title: string;
      status: 'claimed' | 'start';
      value: string;
   };
};

export type QuestCardButtonProps = {
   onClick?: () => void;
   className?: string;
   children?: React.ReactNode;
   disabled?: boolean;
};

export type QuestCardProps = {
   onClick?: () => void;
   className?: string;
   btnClassName?: string;
   questType?: 'start' | 'verify' | 'claim' | 'claimed';
   metadata: {
      title: string;
      reward: string;
      type: 'telegram' | 'x' | 'url' | 'other';
   };
};
