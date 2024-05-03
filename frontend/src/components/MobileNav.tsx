import  {Menu} from 'lucide-react'
import { Sheet, SheetTrigger, SheetTitle, SheetContent, SheetDescription } from './ui/sheet'
import {Separator} from './ui/separator'
import {Button} from './ui/button'

export default function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger>
        {/* menu icon from lucide library */}
        <Menu className="text-purple-600"/>
      </SheetTrigger>
      <SheetContent>
        <SheetTitle>Welcome to mernEats.com! </SheetTitle>
        <Separator className="my-4"/>
        <SheetDescription className="flex">
          <Button className="flex-1 font-bold bg-purple-600"> Log In </Button>
        </SheetDescription>
      </SheetContent>
</Sheet>

  )
}
