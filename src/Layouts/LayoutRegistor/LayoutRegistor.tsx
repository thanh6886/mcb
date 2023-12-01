import Footer from 'src/Component/Footer'
import Header from 'src/Component/Header'
import NavHeader from 'src/Component/NavHeader'

interface Prop {
  children?: React.ReactNode
}

export default function LayuotRegistor({ children }: Prop) {
  return (
    <div>
      <NavHeader />
      {children}
      <Footer />
    </div>
  )
}
