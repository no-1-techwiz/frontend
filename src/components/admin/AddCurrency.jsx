import {
    Dialog, DialogTrigger, DialogTitle, DialogHeader, DialogContent, DialogDescription,
    DialogFooter
} from "@components/ui/dialog.jsx";
import {Button} from "@components/ui/button.jsx";
import {Input} from "@components/ui/input.jsx";
import { Label } from "@radix-ui/react-dropdown-menu";

export function AddCurrency(props) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button type="Button" className="btn flex gap-2">
                    Add New 
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Edit profile</DialogTitle>
                    <DialogDescription>
                        Make changes to your profile here. Click save when you're done.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                            Name
                        </Label>
                        <Input id="name" name="name" placeholder="Display Name" className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="code" className="text-right">
                            Code
                        </Label>
                        <Input id="code" name="code" className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="symbol" className="text-right">
                            Symbol
                        </Label>
                        <Input id="symbol" name="symbol" className="col-span-3" />
                    </div>
                </div>
                <DialogFooter>
                    <Button type="submit">Save changes</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
