import Link from "next/link";
import { work } from "./Data/experience";

export default function Experience() {
  return (
    <>
      <h2 className="headings">
        Experience
      </h2>
      <div className=" flex flex-col gap-6">
        {work.map((w, i) => (
          <div key={i} className=" rounded-md">
            <div className="p-6 rounded-xl bg-white/5 hover:bg-white/10">
              <Link
                href={w.certificate}
                target="_blank"
                className="font-bold text-2xl gradientAlt text-transparent bg-clip-text"
              >
                {w.name}
              </Link>
              <p className="w-fit my-2 bg-primary cursor-pointer rounded-md px-2.5 py-0.5 text-xs">
                {w.tags}
              </p>
              <p className=" text-xl text-[#b6b6b9] ">
                {w.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
