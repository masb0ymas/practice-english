import { useDirection } from "@radix-ui/react-direction"
import React from "react"
import DialogContent, {
  Dialog,
  DialogBody,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog"

interface SimpleDialogProps {
  open: boolean
  setOpen: (open: boolean) => void
  title: string
  description: string
  children: React.ReactNode
}

export default function SimpleDialog({
  open,
  setOpen,
  title,
  description,
  children,
}: SimpleDialogProps) {
  const direction = useDirection()

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md" dir={direction}>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <DialogBody>{children}</DialogBody>
      </DialogContent>
    </Dialog>
  )
}
