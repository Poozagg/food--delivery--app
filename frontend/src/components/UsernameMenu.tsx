import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "./ui/dropdown-menu"
import { CircleUserRound } from 'lucide-react'
import { useAuth0 } from '@auth0/auth0-react'
import { Link } from 'react-router-dom'
import {Separator} from './ui/separator'
import {Button} from './ui/button'

export default function UsernameMenu() {
  // useAuth0 hook to get user information by making API call
  const {user, logout} = useAuth0();
  return(
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center px-3 font-bold hover:text-orange-500">
        <CircleUserRound className="text-orange-500"/>
        {/* display if user exists and has an email */}
        {user?.email}
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <Link to="/user-profile"
          className="font-bold hover:text-orange-500">
            User Profile
          </Link>
        </DropdownMenuItem>
        <Separator/>
        <DropdownMenuItem>
          <Button
            className="flex flex-1 font-bold bg-orange-500"
            onClick={() => logout()}
          >
            Log Out
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
