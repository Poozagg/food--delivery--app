import appDownloadImage from '../assets/appDownload.png'
import landingImage from '../assets/landing.png'


export default function HomePage() {
  return (
    <div className="flex flex-col gap-12">
      {/* -mt-16 gives the overlapping effect */}
      <div className="shadow-md bg-white rounded-lg py-8 flex flex-col gap-5 text-center -mt-16">
        <h1 className="text-2xl font-bold tracking-tight text-orange-600">
          Tuck into a takeaway today
        </h1>
        <span className="text-xs"> Food is just a click away!</span>
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <img src={landingImage}/>
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <span className="font-bold text-lg tracking-tighter">
            Order takeaway even faster!
          </span>
          <span className="text-xs">
            Download the app for faster ordering and personalised reccomendations
          </span>
            <img src={appDownloadImage}/>
        </div>
      </div>
    </div>
  )
}
