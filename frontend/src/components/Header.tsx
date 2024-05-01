import { Link } from 'react-router-dom'
const Header =  () => {
  return (
    <div className="border-b-2 border-b-purple-500 py-6">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
          <h1 className="text-purple-600 font-bold tracking-tight">
            MERNEats.com
          </h1>
        </Link>
      </div>
    </div>
  )
}

export default Header
