import { useMemo } from "react";
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
  const {
    menus,
    selected,
    onSelected,
    activeLayoutId,
  } = props;

  return (
    <div
      className={`flex text-center font-medium bg-opacity-20 rounded-[50px] w-full p-2 border border-custom-blue backdrop-blur-[6px] text-white`}
    >
      {menus.map((item) => {
        const isSelected = item.key === selected;
        return (
          <button
            key={item.key}
            className={`p-3 rounded-full w-full hover:cursor-pointer relative`}
            onClick={() => onSelected(item.key)}
          >
            {isSelected && (
              <motion.div
                layoutId={activeLayoutId}
                className={`absolute inset-0 bg-custom-blue border border-[#FFFFFF33]`}
                style={{
                  borderRadius: 9999,
                }}
                transition={{ type: 'spring', duration: 0.6 }}
              />
            )}
            <span className='relative z-10 drop-shadow-md text-lg font-bold'>{item.label}</span>
          </button>
        );
      })}
    </div>
  );
};

export default Menu;