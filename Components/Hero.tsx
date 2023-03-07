import Image from "next/image"

export default function Hero() {
    return (
        <>
            <div className=" my-10 flex gap-x-6 justify-start items-center">
                <div className="rounded-full gradient p-1 ">
                    <Image src="/user2.png" alt="Photo" width="72" height="72" className="rounded-full text" />
                </div>
                <div className="">
                    <h1 className="text-3xl sm:text-4xl pb-1 title-gradient-animate font-bold text-gray-200">Ankit Singh</h1>
                    <h3 className="text-sm font-semibold text-gray-200/70">Frontend Developer</h3>
                </div>
            </div>
            <h2 className="headings">
                About
            </h2>
            <div className=" rounded-lg bg-white/5 p-5 sm:p-7 hover:bg-white/10">
                <p className="text-xl text-[#b6b6b9]">
                    I am a <span className="relative">
                        <span
                            className="absolute -inset-0 top-1 rounded-lg opacity-20 blur gradient" />
                        <span className="relative font-semibold text-gradient">
                            Front-end Developer
                        </span>
                    </span>, currently pursuing B.Tech Degree(3rd Year) in Computer Science Engineering and looking for Internship Opportunities.
                </p>
            </div>
        </>
    )
}
