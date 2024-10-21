import QuestCard from '@/components/pages/quest/QuestCard';
import { Button3D } from '@/components/ui/button-3d';
import { ONBOARDING_RESOURCES } from '@/constant/core';
import AnimatedCounter from '@/lib/Counter';
import Image from '@/lib/Image';
import { letterFormatMoney, sleep } from '@/lib/utils';
import { createFileRoute, useNavigate } from '@tanstack/react-router';
import React from 'react';

export const Route = createFileRoute('/onboarding')({
   component: Onboarding,
});

function Onboarding() {
   const router = useNavigate({
      from: '/onboarding',
   });
   const [loadingWidth, setLoadingWidth] = React.useState(0);
   const [initProcess, setInitProcess] = React.useState<
      'init' | 'result' | 'mission'
   >('init');

   const runInitProcess = initProcess;

   React.useEffect(() => {
      const initLoading = async () => {
         if (initProcess !== 'init') return;
         await sleep(1000);
         setLoadingWidth(100);
      };
      initLoading();
   }, []);

   return (
      <div className="flex flex-1 flex-col">
         <main className="flex-1 overflow-y-auto">
            <section className="w-limit bg-splash relative flex flex-1 flex-col gap-4 ty:gap-5">
               <div className="flex flex-1 flex-col items-center justify-end">
                  {runInitProcess === 'init' && (
                     <div className="flex flex-col items-center px-5 pb-9">
                        <div className="relative mb-3 w-full">
                           <Image
                              src="/assets/wood-container.svg"
                              alt="loader"
                              width={275}
                              height={21}
                              className="w-full"
                           />
                           <div
                              className="absolute left-0 top-[43%] mx-3 h-[17px] w-full max-w-[94%] -translate-y-1/2 rounded-md bg-[linear-gradient(180deg,#41D163_-4.95%,#30B95A_30.85%,#239D5F_45.36%,#117966_66.47%,#0B6B68_77.75%,#107568_83.81%,#1E8F66_93.99%,#34B964_106.98%,#41D163_113.53%)] transition-all duration-1000"
                              style={{
                                 width: `${loadingWidth}%`,
                              }}
                           ></div>
                        </div>
                        <p className="text-lg font-bold text-white">
                           Counting Telegram Age (
                           <AnimatedCounter
                              start={0}
                              end={loadingWidth}
                              duration={500}
                              onEnd={() => {
                                 setInitProcess('result');
                              }}
                           />
                           %)
                        </p>
                     </div>
                  )}

                  {runInitProcess === 'result' && (
                     <div className="flex w-full flex-col items-center px-5 pb-9">
                        <div className="age-result-card mb-3">
                           <span className="age-result-title">
                              Your Telegram Age
                           </span>
                           <h4 className="text-shadow-age-result text-xl tracking-[0.4px]">
                              <span className="age-big">7</span>
                              Years <span className="age-big">8</span>Month{' '}
                              <span className="age-big">30</span>Day
                           </h4>
                        </div>
                        <div className="age-result-card">
                           <span className="age-result-title mb-6">
                              Free Starter Resource
                           </span>
                           <div className="flex items-center justify-center">
                              {ONBOARDING_RESOURCES.map((resource) => (
                                 <div
                                    key={resource.name}
                                    className="flex items-start justify-center gap-3"
                                 >
                                    <Image
                                       src={resource.img}
                                       alt={resource.name}
                                       width={56}
                                       height={56}
                                    />
                                    <div className="text-left font-bold text-white">
                                       <span className="tracing-[0.24px] text-xs/none capitalize">
                                          {resource.name}
                                       </span>
                                       <div className="tracing-[0.48px] mt-1 text-2xl/none">
                                          {resource.total}
                                       </div>
                                    </div>
                                 </div>
                              ))}
                           </div>
                        </div>
                        <Button3D
                           btnClassName="mt-6"
                           onClick={() => setInitProcess('mission')}
                        >
                           Continue
                        </Button3D>
                     </div>
                  )}
                  {runInitProcess === 'mission' && (
                     <div className="age-result-card w-full rounded-3xl rounded-b-none border border-black/0 bg-black/30 pb-9 pt-8">
                        <div className="mb-7">
                           <span className="age-result-title">
                              ONE TIME QUEST
                           </span>
                           <p className="max-w-sm text-center text-[1.188rem]/normal font-normal">
                              Complete the quests below to continue playing this
                              game
                           </p>
                        </div>
                        <div className="mb-6 grid w-full gap-3">
                           <QuestCard
                              questType="claimed"
                              metadata={{
                                 title: 'Follow Enian Telegram',
                                 reward: '20.000',
                                 type: 'telegram',
                              }}
                           />
                           <QuestCard
                              metadata={{
                                 title: 'Follow Enian X',
                                 reward: '20.000',
                                 type: 'x',
                              }}
                           />
                        </div>
                        <Button3D
                           btnClassName="mt-6"
                           onClick={() => {
                              router({
                                 to: '/',
                              });
                           }}
                        >
                           Continue
                        </Button3D>
                     </div>
                  )}
               </div>
            </section>
         </main>
      </div>
   );
}
