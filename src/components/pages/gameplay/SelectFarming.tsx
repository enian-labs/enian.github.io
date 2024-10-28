import Image from '@/lib/Image';
import { cn } from '@/lib/utils';
import { SelectFarmingProps } from '@/types/gameplay';
import { CheckFat } from '@phosphor-icons/react/dist/ssr';

export default function SelectFarming({
   id,
   value,
   name,
   checked,
   onChange,
   metadata,
}: SelectFarmingProps) {
   return (
      <div>
         <input
            id={id}
            name={name || id}
            type="checkbox"
            value={value}
            className="peer hidden"
            checked={checked}
            onChange={(ev) => {
               const target = ev.currentTarget;
               onChange?.(target.value, target.checked);
            }}
         />
         <label htmlFor={id} className="general-shadow-inset select-farming">
            <div className="flex items-center space-x-4">
               <div className="size-11 min-w-11">
                  <Image
                     src={metadata.img}
                     alt={metadata.name}
                     width={44}
                     height={44}
                  />
               </div>
               <div className="flex flex-col">
                  <h4 className="ts-title-select-farming text-base/normal font-bold uppercase tracking-[0.32px] text-white">
                     {metadata.name}
                  </h4>
                  <p className="text-shadow-age-result text-xs/normal font-medium tracking-[0.24px] text-[#FFB961]">
                     8h Waiting Time
                  </p>
               </div>
            </div>

            <span
               className={cn(
                  'general-shadow-inset hidden size-[2.375rem] min-w-[2.375rem] items-center justify-center rounded-full text-white',
                  {
                     flex: checked,
                  }
               )}
            >
               <CheckFat size={16} weight="fill" />
            </span>
         </label>
      </div>
   );
}
