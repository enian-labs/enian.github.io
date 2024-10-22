import Image from '@/lib/Image';
import { cn } from '@/lib/utils';
import React from 'react';

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

export default function SelectFarming({
   id,
   value,
   name,
   checked,
   onChange,
   metadata,
}: SelectFarmingProps) {
   const [selected, setSelected] = React.useState(checked);

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
               setSelected(target.checked);
               onChange?.(target.value, target.checked);
            }}
         />
         <label
            htmlFor={id}
            className="flex items-center justify-between space-x-4 rounded-lg border border-black/0 bg-black/10 p-3 shadow-[0px_0px_13px_0px_rgba(0,0,0,0.80)_inset] backdrop-blur peer-checked:border-gray-600 peer-checked:bg-[radial-gradient(151.92%_127.02%_at_15.32%_21.04%,rgba(165,239,255,0.20)_0%,rgba(110,191,244,0.04)_77.08%,rgba(70,144,212,0.00)_100%)] peer-checked:shadow-none peer-checked:backdrop-blur-md"
         >
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
               className={cn('hidden text-white', {
                  block: checked,
               })}
            >
               Check
            </span>
         </label>
      </div>
   );
}
