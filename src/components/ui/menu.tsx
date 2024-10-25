import { useMemo } from 'react';
import { motion } from 'framer-motion';

interface Menu {
   label: string;
   key: string;
}

interface Props {
   menus: Menu[];
   selected: string;
   onSelected: (val: string) => void;
   activeLayoutId: string;
}

const Menu = (props: Props) => {
   const { menus, selected, onSelected, activeLayoutId } = props;

   return (
      <div
         className={`border-custom-blue flex w-full rounded-[50px] border bg-opacity-20 p-2 text-center font-medium text-white backdrop-blur-[6px]`}
      >
         {menus.map((item) => {
            const isSelected = item.key === selected;
            return (
               <button
                  key={item.key}
                  className={`relative w-full rounded-full p-3 hover:cursor-pointer`}
                  onClick={() => onSelected(item.key)}
               >
                  {isSelected && (
                     <motion.div
                        layoutId={activeLayoutId}
                        className={`bg-custom-blue absolute inset-0 border border-[#FFFFFF33]`}
                        style={{
                           borderRadius: 9999,
                        }}
                        transition={{ type: 'spring', duration: 0.6 }}
                     />
                  )}
                  <span className="relative z-10 text-lg font-bold drop-shadow-md">
                     {item.label}
                  </span>
               </button>
            );
         })}
      </div>
   );
};

export default Menu;
