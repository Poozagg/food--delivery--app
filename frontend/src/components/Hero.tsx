import hero from '../assets/hero.png'

export default function Hero() {
  return(
    <div>
      <img src={hero} className="w-full max-h-80 object-cover"/>
    </div>
  )
}
