import MainLayout from '@/components/layouts/MainLayout';
import BattleSkillComingSoon from '@/components/pages/skill/BattleSkillComingSoon';
import FarmingSkillList from '@/components/pages/skill/FarmingSkillList';
import Menu from '@/components/ui/menu';
import { cn } from '@/lib/utils';
import { FarmingSkillDataItem } from '@/types/skill';
import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';

export const Route = createFileRoute('/skill')({
   component: Skill,
});

const tabsMenu = [
   { label: 'Farming Skill', key: 'farming-skill' },
   { label: 'Battle Skill', key: 'battle-skill' },
];

const farmingSkills: FarmingSkillDataItem[] = [
   {
      name: 'Lumberjack',
      level: 'max',
      imageUrl: '/assets/original/resource/wood.svg',
      benefit: '+800 Wood/8h',
      upgradeCost: 0,
   },
   {
      name: 'Miner',
      level: 20,
      imageUrl: '/assets/original/resource/iron.svg',
      benefit: '+500 Iron/8h',
      upgradeCost: 5000000,
   },
   {
      name: 'Skinner',
      level: 20,
      imageUrl: '/assets/original/resource/leather.svg',
      benefit: '+500 Leather/8h',
      upgradeCost: 5000000,
   },
]

function Skill() {
   const [selectedTab, setSelectedTab] = useState(tabsMenu[0].key);

   return (
      <MainLayout
         wrapperClassName="p-5 ty:gap-6 h-screen"
         navClassName="ty:pb-0"
         bgUrl='/assets/background/forest.png'
      >
         <div className="flex flex-col h-full gap-6">
            <Menu
               menus={tabsMenu}
               selected={selectedTab}
               onSelected={(value) => setSelectedTab(value)}
               activeLayoutId="skill-menu"
            />
            <div className='w-full h-full'>
               <FarmingSkillList
                  className={cn(
                     selectedTab === tabsMenu[0].key ? "flex" : "hidden",
                  )}
                  data={farmingSkills}
                  key='farming-skill-list'
               />
               <BattleSkillComingSoon
                  className={cn(
                     selectedTab === tabsMenu[1].key ? "flex" : "hidden",
                  )}
               />
            </div>
         </div>
      </MainLayout>
   );
}
