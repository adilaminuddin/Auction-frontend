import Image from 'next/image'
import Slider from '../components/carousel'
import TopSeller from '../components/list_TopSeller'

export default function Home() {
  return (
    <main className="min-h-screen items-center justify-between p-2">
     
        <div className="md:w-full grid grid-cols-1 gap-1 md:grid-cols-3 md:gap-4 pt-4">
            <div className="col-span-2">
                <Slider />
            </div>
            <div className="block">
                <TopSeller/>
            </div>
        </div>
      
test slider
     
    </main>
  )
}
