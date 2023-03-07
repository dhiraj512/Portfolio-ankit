import { IoLogoJavascript } from 'react-icons/io'
import { SiTypescript, SiJava, SiExpress, SiReact, SiRedux, SiTailwindcss } from 'react-icons/si'
import { TbBrandNextjs, TbBrandReactNative } from 'react-icons/tb'
import { FaNodeJs } from 'react-icons/fa'

const tagstyle = "flex gap-x-2 bg-white/5 text=[#b6b6b9] items-center px-2.5 py-1.5 rounded-md text-base hover:bg-white/10 cursor-pointer"
export default function Techstack() {
  return (
    <>
      <h2 className="headings">
        TechStack
      </h2>
      <div className='flex flex-row flex-wrap gap-4'>
        <div className={tagstyle}>
          <IoLogoJavascript color='#d8be4b' />
          <span>JavaScript</span>
        </div>
        <div className={tagstyle}>
          <SiTypescript color='#38bdf8' />
          <span>Typescript</span>
        </div>
        <div className={tagstyle}>
          <SiJava size={24} />
          <span>Java</span>
        </div>
        <div className={tagstyle}>
          <TbBrandNextjs size={25} />
          <span>NextJs</span>
        </div>
        <div className={tagstyle}>
          <FaNodeJs size={20} color="#026e00" />
          <span>Node Js</span>
        </div>
        <div className={tagstyle}>
          <SiExpress size={20} />
          <span>Express Js</span>
        </div>
        <div className={tagstyle}>
          <SiReact size={20} color='#38bdf8' />
          <span>React</span>
        </div>
        <div className={tagstyle}>
          <TbBrandReactNative size={20} color='#38bdf8' />
          <span>ReactNative</span>
        </div>
        <div className={tagstyle}>
          <SiRedux size={20} color='#764abc' />
          <span>Redux</span>
        </div>
        <div className={tagstyle}>
          <SiTailwindcss size={20} color='#38bdf8' />
          <span>TailwindCSS</span>
        </div>
      </div>
    </>
  )
}


