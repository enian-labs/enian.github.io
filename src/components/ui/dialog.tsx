import * as React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';

import { cn } from '@/lib/utils';
import Image from '@/lib/Image';
import { X } from 'lucide-react';

const Dialog = DialogPrimitive.Root;

const DialogTrigger = DialogPrimitive.Trigger;

const DialogPortal = DialogPrimitive.Portal;

const DialogClose = DialogPrimitive.Close;

const DialogOverlay = React.forwardRef<
   React.ElementRef<typeof DialogPrimitive.Overlay>,
   React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
   <DialogPrimitive.Overlay
      ref={ref}
      className={cn(
         'fixed bottom-0 left-0 right-0 top-0 z-50 grid place-items-start overflow-y-auto bg-black/25 p-5 backdrop-blur data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
         className
      )}
      {...props}
   />
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

type DialogContentProps = React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> & {
   iconImageUrl?: string;
};

const DialogContent = React.forwardRef<
   React.ElementRef<typeof DialogPrimitive.Content>,
   DialogContentProps
>(({ className, iconImageUrl, children, ...props }, ref) => (

   <DialogPortal>
      <DialogOverlay
         className="flex justify-center items-center w-limit"
      >
         <DialogPrimitive.Content
            ref={ref}
            className={cn(
               'bg-modal-daily z-50 mt-[122px] grid w-full max-w-[30rem] rounded-3xl border border-gray-600 p-5 duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-top-[48%] translate-y-[-20%]',
               className
            )}
            {...props}
         >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 z-10">
               <Image
                  alt="daily"
                  src="/assets/quest/icon-other.svg"
                  width={120}
                  height={120}
               />
            </div>
            {iconImageUrl && (
               <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-[55%] z-20">
                  <Image
                     alt="daily"
                     src={iconImageUrl}
                     width={100}
                     height={100}
                  />
               </div>
            )}
            <div className="h-[60px]"></div>
            {children}
            <DialogPrimitive.Close className="absolute right-4 top-4 rounded-full border-[0.5px] border-black/0 bg-black/10 p-2.5 text-white shadow-[0px_0px_13px_0px_rgba(0,0,0,0.80)_inset] backdrop-blur transition-opacity hover:opacity-100 focus:outline-none focus:ring-0 focus:ring-offset-0 disabled:pointer-events-none data-[state=open]:bg-neutral-100 data-[state=open]:text-white">
               <X className="size-4" strokeWidth={3} />
               <span className="sr-only">Close</span>
            </DialogPrimitive.Close>
         </DialogPrimitive.Content>
      </DialogOverlay>
   </DialogPortal>
));
DialogContent.displayName = DialogPrimitive.Content.displayName;

const DialogHeader = ({
   className,
   ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
   <div
      className={cn(
         'flex flex-col space-y-1.5 text-center sm:text-left',
         className
      )}
      {...props}
   />
);
DialogHeader.displayName = 'DialogHeader';

const DialogFooter = ({
   className,
   ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
   <div
      className={cn(
         'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2',
         className
      )}
      {...props}
   />
);
DialogFooter.displayName = 'DialogFooter';

const DialogTitle = React.forwardRef<
   React.ElementRef<typeof DialogPrimitive.Title>,
   React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
   <DialogPrimitive.Title
      ref={ref}
      className={cn(
         'text-lg font-semibold leading-none tracking-tight',
         className
      )}
      {...props}
   />
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;

const DialogDescription = React.forwardRef<
   React.ElementRef<typeof DialogPrimitive.Description>,
   React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
   <DialogPrimitive.Description
      ref={ref}
      className={cn('text-sm text-neutral-500', className)}
      {...props}
   />
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;

export {
   Dialog,
   DialogPortal,
   DialogOverlay,
   DialogClose,
   DialogTrigger,
   DialogContent,
   DialogHeader,
   DialogFooter,
   DialogTitle,
   DialogDescription,
};
