export const NAVIGATION_LINKS: {
   name: string;
   href: string;
   img: string;
}[] = [
   {
      name: 'Market',
      href: '/market',
      img: '/assets/menu/market.svg',
   },
   {
      name: 'Inventory',
      href: '/inventory',
      img: '/assets/menu/inventory.svg',
   },
   {
      name: 'Play The Game',
      href: '/',
      img: '/assets/menu/play-the-game.svg',
   },
   {
      name: 'Missions',
      href: '/mission',
      img: '/assets/menu/missions.svg',
   },
   {
      name: 'Skills',
      href: '/skill',
      img: '/assets/menu/skills.svg',
   },
];

export const RESOURCE_LIST: { name: string; img: string; total: number }[] = [
   {
      name: 'wood',
      img: '/assets/resource/wood.svg',
      total: 1200000,
   },

   {
      name: 'iron',
      img: '/assets/resource/iron.svg',
      total: 122000,
   },
   {
      name: 'leather',
      img: '/assets/resource/leather.svg',
      total: 16500,
   },
];
