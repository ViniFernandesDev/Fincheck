import * as RdxDialog from '@radix-ui/react-dialog'
import { cn } from '../../app/utils/cn'
import { Cross2Icon } from '@radix-ui/react-icons';

interface ModalProps {
    open: boolean;
    title: string;
    children: React.ReactNode;
    rightAction?: React.ReactNode;
    onClose?(): void;
}

export function Modal({ open, title, rightAction, children, onClose }: ModalProps) {   
    return (
        <RdxDialog.Root open={open} onOpenChange={onClose}>
            <RdxDialog.Portal>
                <RdxDialog.Overlay className={cn(
                    "fixed inset-0 bg-black/60 backdrop-blur-sm z-50",
                    "data-[state=open]:animate-content-show",
                )} />

                <RdxDialog.Content
                    className={cn(
                        "fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-6 space-y-6 bg-white rounded-2xl z-[51] shadow-[0px_11px_20px_0px_rgba(0,0,0,0.10)] w-full max-w-[400px] outline-none",
                        "data-[state=open]:animate-content-show"
                    )}
                >
                    <header className='h-12 flex items-center justify-between gap-2 text-gray-800'>
                        <button onClick={onClose} className='w-12 h-12 flex items-center justify-center outline-none rounded-full hover:bg-green-50 transition-colors'>
                            <Cross2Icon className='w-6 h-6' />
                        </button>
                        
                        <span className='text-lg tracking-[-1px] font-bold'>
                            {title}
                        </span>

                        <div className='w-12 h-12 flex items-center justify-center'>
                            {rightAction}
                        </div>
                    </header>

                    <div>
                        {children}
                    </div>
                </RdxDialog.Content>
            </RdxDialog.Portal>
        </RdxDialog.Root>
    )
}
