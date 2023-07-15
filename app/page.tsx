import Image from 'next/image'
import Example from '../components/navbar'
import Footer from '../components/footer'
import Slider from '../components/carousel'

export default function Home() {
  return (
    <main className="min-h-screen items-center justify-between p-2">
     <Example />
      <Slider />
     <Footer />
    </main>
  )
}
