import React from 'react'
import {Github, Twitter, Linkedin, Mail} from 'lucide-react'

const Footer = () => {
  return (
      <>
          <footer className="bg-slate-800">
              <div className="flex flex-rows justify-between items-center py-8  px-8 lg:px-24 ">
                  <div className="text-white font-bold">
                      <p className="">© { new Date().getFullYear() } HAT All right reserved.</p>
                  </div>
                  <div className='flex gap-2 lg:gap-6 p-2'>
                        <a href="https://github.com/HassanAhmadTijjani" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white transition">
                            <Github size={28} className='text-white cursor-pointer' />
                      </a>
                       <a href="https://linkedin.com/in/hassan-ahmad-tijjani-a0a0aa383" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white transition">
                            <Linkedin size={28} className='text-white cursor-pointer' />
                        </a>
                        <a href="https://twitter.com/@HassanPopey" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white transition">
                            <Twitter size={28} className='text-white cursor-pointer' />
                        </a>
                        <a href="mailto:hassanahmadtijjani26@gmail.com" className="text-slate-300 hover:text-white transition">
                            <Mail size={28} className='text-white cursor-pointer' />
                        </a>

                  </div>
              </div>
        </footer>
      </>
  )
}

export default Footer