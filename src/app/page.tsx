import { Laptop2, Maximize2, Volume } from 'lucide-react'
import { Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play, Shuffle, SkipBack, SkipForward, Repeat, Mic2, LayoutList } from 'lucide-react'
import Image from 'next/image'
import { SideBar } from './components/SideBar'
import { Footer } from './components/Footer'

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <SideBar />
        <main className="flex-1 p-6">
          <div className="flex items-center gap-4">
            <button className="rounded-full bg-black/40 p-1">
              <ChevronLeft />
            </button>
            <button className="rounded-full bg-black/40 p-1">
              <ChevronRight />
            </button>
          </div>

          <h1 className="font-semibold text-3xl mt-10">Good Afternoon</h1>

          <div className="grid grid-cols-3 gap-4 mt-4">
            <a href="" className="bg-white/5 group rounded overflow-hidden flex items-center justify-between gap-4 hover:bg-white/10 transition-colors">
                <Image src="/album.jpeg" width={104} height={104} alt=""/>
                <strong>Playlist</strong>
                <button className="pl-1 w-12 h-12 flex items-center justify-center rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                  <Play fill='bg-black' />
                </button>
              </a>
              <a href="" className="bg-white/5 group rounded overflow-hidden flex items-center justify-between gap-4 hover:bg-white/10 transition-colors">
                <Image src="/album.jpeg" width={104} height={104} alt=""/>
                <strong>Playlist</strong>
                <button className="pl-1 w-12 h-12 flex items-center justify-center rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                  <Play fill='bg-black' />
                </button>
              </a>
              <a href="" className="bg-white/5 group rounded overflow-hidden flex items-center justify-between gap-4 hover:bg-white/10 transition-colors">
                <Image src="/album.jpeg" width={104} height={104} alt=""/>
                <strong>Playlist</strong>
                <button className="pl-1 w-12 h-12 flex items-center justify-center rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                  <Play fill='bg-black' />
                </button>
              </a>
              <a href="" className="bg-white/5 group rounded overflow-hidden flex items-center justify-between gap-4 hover:bg-white/10 transition-colors">
                <Image src="/album.jpeg" width={104} height={104} alt=""/>
                <strong>Playlist</strong>
                <button className="pl-1 w-12 h-12 flex items-center justify-center rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                  <Play fill='bg-black' />
                </button>
              </a>
              <a href="" className="bg-white/5 group rounded overflow-hidden flex items-center justify-between gap-4 hover:bg-white/10 transition-colors">
                <Image src="/album.jpeg" width={104} height={104} alt=""/>
                <strong>Playlist</strong>
                <button className="pl-1 w-12 h-12 flex items-center justify-center rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                  <Play fill='bg-black' />
                </button>
              </a>
              <a href="" className="bg-white/5 group rounded overflow-hidden flex items-center justify-between gap-4 hover:bg-white/10 transition-colors">
                <Image src="/album.jpeg" width={104} height={104} alt=""/>
                <strong>Playlist</strong>
                <button className="pl-1 w-12 h-12 flex items-center justify-center rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                  <Play fill='bg-black' />
                </button>
              </a>
          </div>

          <h2 className="font-semibold text-2xl mt-10">Made for John Everton</h2>

          <div className="grid grid-cols-7 gap-4 mt-4">
            <a href="" className=" bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
              <Image className="w-full" src="/album.jpeg" width={140} height={140} alt=""/>
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-zinc-500 text-sm">Wallows, COIN, Girl in red and more</span>
            </a>
            <a href="" className=" bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
              <Image className="w-full" src="/album.jpeg" width={140} height={140} alt=""/>
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-zinc-500 text-sm">Wallows, COIN, Girl in red and more</span>
            </a>
            <a href="" className=" bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
              <Image className="w-full" src="/album.jpeg" width={140} height={140} alt=""/>
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-zinc-500 text-sm">Wallows, COIN, Girl in red and more</span>
            </a>
            <a href="" className=" bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
              <Image className="w-full" src="/album.jpeg" width={140} height={140} alt=""/>
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-zinc-500 text-sm">Wallows, COIN, Girl in red and more</span>
            </a>
            <a href="" className=" bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
              <Image className="w-full" src="/album.jpeg" width={140} height={140} alt=""/>
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-zinc-500 text-sm">Wallows, COIN, Girl in red and more</span>
            </a>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  )
}
