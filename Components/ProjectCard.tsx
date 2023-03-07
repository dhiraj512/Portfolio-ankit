import { TbArrowUpRight } from 'react-icons/tb';
import Link from 'next/link';
import Image from "next/image";

interface IProjectCard {
    name: string;
    description: string;
    Demo: string;
    github_url: string;
    key_techs: string[];
    ImgSrc: string;
}

export default function ProjectCard({
    ImgSrc,
    name,
    Demo,
    description,
    github_url,
    key_techs,
}: IProjectCard) {
    return (
        <div className="w-full p-7 h-full rounded-2xl bg-white/5  hover:bg-white/10 ">
            <Image loader={() => ImgSrc} src={ImgSrc} alt={name} width={500} height={500} className='w-full object-cover rounded-md h-40 mb-3' />
            <h5 className="mb-2 font-bold text-2xl gradientAlt text-transparent bg-clip-text">{name}</h5>
            <p className=" ">{description}</p>
            <div className="flex flex-row flex-wrap justify-start my-4">
                {key_techs.map((e, i) => (
                    <div key={i} className="my-1 mr-2 flex">
                        <div className="w-fit bg-primary rounded-md cursor-pointer px-2.5 py-0.5 text-xs">
                            {e}
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex justify-start  items-center gap-x-4">
                <Link
                    href={github_url}
                    target='_blank'
                    className="flex items-center gap-x-0.5 hover:-translate-y-1 text-[#b0b0b9] hover:brightness-200 duration-100"
                ><span>Github</span><TbArrowUpRight />
                </Link>
                {Demo !== '' && <Link href={Demo} target='_blank'
                    className="flex items-center gap-x-0.5 hover:-translate-y-1 text-[#b0b0b9] hover:brightness-200 duration-100"
                >
                    <span>Demo</span><TbArrowUpRight />
                </Link>}
            </div>
        </div>
    )
}

