import React from 'react';
import { social_links } from '../Components/Data/Social';
import Buttons from './Buttons';

const Footer = () => {
  return (
    
    <>
    <div className='flex items-center'>
          <div className='max-w-screen-md mt-6 mx-5 md:mx-auto w-full h-[1px] bg-[#27272a]'>

          </div>
      </div>
      <div className={'mb-6 p-4 overflow-hidden rounded-xl bg-white/5 relative bottom-0 mt-4 shadow-surface-elevation-low transition duration-300 hover:bg-white/10 hover:shadow-surface-elevation-medium focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500/70 '}>
              <div className='flex flex-col md:flex-row justify-between mb-5'>
                  <div className='flex flex-col md:flex-row justify-between'>
                      <div className='text-sm text-[#6e6e78] '>
                          Made By

                          <span className='text-[#c4c4cc] pl-1 hover:text-neutral-100  ease-linear duration-100'>
                              Ankit
                          </span>

                      </div>


                  </div>

                  <div className='flex flex-row mt-4 md:mt-0 space-x-3'>
                      {social_links.map((e, i) => {
                          return <Buttons key={i} link={e.link} name={e.name} />;
                      })}
                  </div>
              </div>

          </div></>
    
  );
}

export default Footer