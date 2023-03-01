import React from 'react'
import Image from 'next/image';
function Techstack() {
  return (
    <div className="mt-7 ">
            <div className=' font-semibold tracking-wide  px-1 py-2 text-xl md:text-2xl text-slate-100 select-none'>
             TechStack
            </div>
            <div className=" bg-gradient-to-r from-white  to-teal-700  w-24 h-2 rounded-xl"></div>

            <div className='  mt-7 gap-x-7 gap-y-3 flex   flex-row flex-wrap pt-1 pb-3 ml-2'>


              
               <div className="  flex  bg-white/5 text=[#b6b6b9] items-center px-1.5 py-2 rounded-md text-base hover:bg-white/10 hover:shadow-surface-elevation-medium">
               <Image src='/Tech/js.webp' alt="" height={23} width={23} className='rounded-sm'/>
               <p className='ml-2'>JavaScript</p> 
               </div>

               <div className="  flex  bg-white/5 text=[#b6b6b9] items-center px-1.5 py-2 rounded-md text-base hover:bg-white/10 hover:shadow-surface-elevation-medium">
               <Image src='/Tech/Ts.png' alt="" height={23} width={23} className='rounded-sm'/>
               <p className='ml-2'>Typescript</p> 
               </div>

               <div className="  flex  bg-white/5 text=[#b6b6b9] items-center px-2.5 py-2 rounded-md text-base hover:bg-white/10 hover:shadow-surface-elevation-medium">
               <Image src='/Tech/java.png' alt="" height={23} width={23} className='rounded-sm'/>
               <p className='ml-4'>Java</p> 
               </div>

               <div className="  flex  bg-white/5 text=[#b6b6b9] items-center px-1.5 py-2 rounded-md text-base hover:bg-white/10 hover:shadow-surface-elevation-medium">
               <Image src='/Tech/next.png' alt="" height={23} width={23} className='rounded-sm'/>
               <p className='ml-3'>NextJs</p> 
               </div>

               <div className="  flex  bg-white/5 text=[#b6b6b9] items-center px-1.5 py-2 rounded-md text-base hover:bg-white/10 hover:shadow-surface-elevation-medium">
               <Image src='/Tech/node.webp' alt="" height={28} width={23} className='rounded-sm'/>
               <p className='ml-4'>Node Js</p> 
               </div>

               <div className="  flex  bg-white/5 text=[#b6b6b9] items-center px-1.5 py-2 rounded-md text-base hover:bg-white/10 hover:shadow-surface-elevation-medium">
               <Image src='/Tech/express.svg' alt="" height={23} width={23} className='rounded-sm'/>
               <p className='ml-2'>Express Js</p> 
               </div>

               <div className="  flex  bg-white/5 text=[#b6b6b9] items-center px-1.5 py-2 rounded-md text-base hover:bg-white/10 hover:shadow-surface-elevation-medium">
               <Image src='/Tech/react.svg' alt="" height={23} width={23} className='rounded-sm'/>
               <p className='ml-3'>React</p> 
               </div>

               <div className="  flex  bg-white/5 text=[#b6b6b9] items-center px-1.5 py-2 rounded-md text-base hover:bg-white/10 hover:shadow-surface-elevation-medium">
               <Image src='/Tech/react.svg' alt="" height={23} width={23} className='rounded-sm'/>
               <p className='ml-2'>ReactNative</p> 
               </div>

               <div className="  flex  bg-white/5 text=[#b6b6b9] items-center px-1.5 py-2 rounded-md text-base hover:bg-white/10 hover:shadow-surface-elevation-medium">
               <Image src='/Tech/redux.svg' alt="" height={23} width={23} className='rounded-sm'/>
               <p className='ml-3'>Redux</p> 
               </div>

               <div className="  flex  bg-white/5 text=[#b6b6b9] items-center px-1.5 py-2 rounded-md text-base hover:bg-white/10 hover:shadow-surface-elevation-medium">
               <Image src='/Tech/TailwindCSS.png' alt="" height={23} width={23} className='rounded-sm'/>
               <p className='ml-2'>TailwindCss</p> 
               </div>
          </div>
      </div>
  )
}

export default Techstack

