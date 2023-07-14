import Image from 'next/image'
import Example from '../components/navbar'
import Footer from '../components/footer'

export default function Home() {
  return (
    <main className="min-h-screen items-center justify-between p-2">
     <Example />
     <Footer />
    </main>
  )
}
