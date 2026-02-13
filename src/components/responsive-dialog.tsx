"use client"

import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogOverlay,
    DialogPortal,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog"
import {
    Drawer,
    DrawerContent,
    DrawerHeader,
    DrawerTitle,
    DrawerDescription
} from "@/components/ui/drawer"
import { useIsMobile } from "@/hooks/use-mobile";


interface props{
    title: string,
    description: string,
    children: React.ReactNode;
    open: boolean,
    onOpenChange: (open:boolean) => void
}

export const ResponsiveDialog = ({
    title,
    description,
    children,
    open,
    onOpenChange
}: props) => {
    const isMobile = useIsMobile();

    if (isMobile) {
        return (
            <Drawer open={open} onOpenChange={onOpenChange}>
                <DrawerContent>
                    <DrawerHeader>
                        <DrawerTitle>{title}</DrawerTitle>
                        <DrawerContent>{description}</DrawerContent>
                    </DrawerHeader>
                    <div className="p-4">
                        { children}
                    </div>
                    </DrawerContent>
            </Drawer>
        )
    }


    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    <DialogDescription>{ description}</DialogDescription>
                </DialogHeader>
                { children}
            </DialogContent>
        </Dialog>
    )
}