import React from "react";
import Link from "next/link";

import { SiLeetcode,SiGithub,SiLinkedin,SiTwitter} from "react-icons/si";

type props = {
  link: string;
  name: string;
};

const Buttons: React.FC<props> = ({ link, name }) => {
  return (
    <Link href={link} target="_blank">
        <div className='flex flex-row items-center rounded-md text-[#b0b0b9] select-none hover:brightness-200 active:scale-90 ease-linear duration-100 cursor-pointer'>
          <div >
            { name === 'Github' && <SiGithub size={20} /> }
            { name === 'Twitter' && <SiTwitter size={20} /> }
            { name === 'Leetcode' && <SiLeetcode size={20} /> }
            { name === 'Linkdln' && <SiLinkedin size={20} /> }
          </div>
        </div>
    </Link>
  );
};

export default Buttons;