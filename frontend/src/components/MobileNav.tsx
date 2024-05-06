import  {Menu, CircleUserRound} from 'lucide-react'
import { Sheet, SheetTrigger, SheetTitle, SheetContent, SheetDescription } from './ui/sheet'
import {Separator} from './ui/separator'
import {Button} from './ui/button'
import {useAuth0} from '@auth0/auth0-react'
import MobileNavLinks from './MobileNavLinks'

export default function MobileNav() {
  const { loginWithRedirect, isAuthenticated, user } = useAuth0();
  return (
    <Sheet>
      <SheetTrigger>
        {/* menu icon from lucide library */}
        <Menu className="text-orange-600"/>
      </SheetTrigger>
      <SheetContent>
        <SheetTitle>
          {isAuthenticated ? (
            <span className="flex items-center font-bold gap-2">
              <CircleUserRound className="text-orange-500"/>
              {user?.email}
            </span>
            ) : (
              <span> Welcome to mernEats.com! </span>
          )}
        </SheetTitle>
        <Separator className="my-4"/>
        <SheetDescription className="flex flex-col">
          {isAuthenticated ? (<MobileNavLinks/>) : (
            <Button
            className="flex-1 font-bold bg-orange-600"
            onClick={async () => await loginWithRedirect()}
            > Log In </Button>
          )}
        </SheetDescription>
      </SheetContent>
</Sheet>

  )
}
