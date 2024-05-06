import  {Menu} from 'lucide-react'
import { Sheet, SheetTrigger, SheetTitle, SheetContent, SheetDescription } from './ui/sheet'
import {Separator} from './ui/separator'
import {Button} from './ui/button'
import {useAuth0} from '@auth0/auth0-react'

export default function MobileNav() {
  const { loginWithRedirect } = useAuth0();
  return (
    <Sheet>
      <SheetTrigger>
        {/* menu icon from lucide library */}
        <Menu className="text-orange-600"/>
      </SheetTrigger>
      <SheetContent>
        <SheetTitle>Welcome to mernEats.com! </SheetTitle>
        <Separator className="my-4"/>
        <SheetDescription className="flex">
          <Button
          className="flex-1 font-bold bg-orange-600"
          onClick={async () => await loginWithRedirect()}

          > Log In </Button>
        </SheetDescription>
      </SheetContent>
</Sheet>

  )
}
