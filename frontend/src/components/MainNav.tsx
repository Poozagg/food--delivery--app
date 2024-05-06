import { Button } from './ui/button'
import { useAuth0 } from '@auth0/auth0-react'

export default function MainNav(){
  const { loginWithRedirect } = useAuth0();
  return (
    <Button
      variant="ghost"
      className="font-bold hover:text-purple-600 hover:bg-white"
      onClick={async () => await loginWithRedirect()}
    >
      Log In
    </Button>
  )
}
