import { cn } from '@/lib/utils';
import { QuestCardButtonProps } from '@/types/quest';

export default function QuestCardButton({
   onClick,
   className,
   children,
   disabled,
}: QuestCardButtonProps) {
   return (
      <button
         type="button"
         className={cn(
            'flex items-center rounded-full border border-black/0 bg-black/10 px-3.5 py-2 text-base font-bold text-white shadow-[0px_0px_13px_0px_rgba(0,0,0,0.80)_inset] disabled:cursor-not-allowed',
            className
         )}
         onClick={onClick}
         disabled={disabled}
      >
         {children}
      </button>
   );
}
