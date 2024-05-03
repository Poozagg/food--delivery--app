export default function Footer() {
  return (
    <div className="bg-orange-400 py-10">
      {/* flex flex-col for smaller screen & md:flex-row for larger screen */}
      <div className="container mx-auto flex flex-col md:flex-row justify-between">
        <span className="text-md text-white font-bold traking-tight text-center">
          mernEats.com
        </span>
        <div className="text-center">
          <span className="text-white text-xs px-2" > Privacy Policy </span>
          <span className="text-white text-xs">Terms of Service </span>
        </div>
      </div>
    </div>
  )
}
