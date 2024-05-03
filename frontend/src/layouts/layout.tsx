import Header from '../components/Header'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
type Props = {
  children: React.ReactNode;
}
const Layout = ({children} : Props) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      <div className="container mx-auto flex-1 py-10">
        {children}
      </div>
      <Footer />
    </div>

  )
}

export default Layout
