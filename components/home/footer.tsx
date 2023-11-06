'use client'

import SocialMedia from "@/components/home/social-media";
import {ArrowUpRightIcon} from 'lucide-react'

export default function Footer() {
  return (
    <div className="xl:pt-16 pt-12 xl:pb-16 pb-12">
      {/*<div className="flex gap-4 mb-6 justify-center">*/}
      {/*  <SocialMedia/>*/}
      {/*</div>*/}
      <div className="container">
      <footer className="relative flex justify-between items-center">
        <div className="flex flex-col">
          Made by
          <a href="https://katsuotz.com" target="_blank" className="text-gray-300 font-light tracking-wide hover:text-white flex items-center">katsuotz <ArrowUpRightIcon className="w-4 h-4 ml-2" /></a>
        </div>
        <p className="text-gray-300 tracking-wide font-light">&copy; 2023 <a href="https://www.youtube.com/watch?v=eQhYR4GpqKQ" target="_blank" className="text-white font-medium">Dreamocel</a></p>
      </footer>
      </div>
    </div>
  )
}
