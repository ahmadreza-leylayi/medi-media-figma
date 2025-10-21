import Image from "next/image";

export default function CategorySection() {
    return (

        <div className="flex flex-col md:flex-row items-center justify-center w-full bg-black p-4 md:gap-6">

            {/* Men */}
            <div className="w-full md:w-1/3 flex justify-center cursor-pointer hover:scale-103 transition-all duration-300 ease-in-out">
                <Image
                    src="/category/men-1.webp"
                    width={500}
                    height={300}
                    alt="Men Watch"
                    className="w-full h-auto rounded-md md:rounded-l-3xl object-cover"
                />
            </div>


            <div className="hidden md:block bg-[#C08A46] w-[5px] h-[190px] rounded-[3px]" />

            {/* Couple */}
            <div className="w-full md:w-1/3 flex justify-center my-4 md:my-0 cursor-pointer hover:scale-103 transition-all duration-300 ease-in-out">
                <Image
                    src="/category/couple-1.webp"
                    width={500}
                    height={300}
                    alt="Couple Watch"
                    className="w-full h-auto rounded-2xl object-cover"
                />
            </div>


            <div className="hidden md:block bg-[#C08A46] w-[5px] h-[190px] rounded-[3px]" />

            {/* Women */}
            <div className="w-full md:w-1/3 flex justify-center cursor-pointer hover:scale-103 transition-all duration-300 ease-in-out">
                <Image
                    src="/category/women.webp"
                    width={500}
                    height={300}
                    alt="Women Watch"
                    className="w-full h-auto rounded-md md:rounded-r-3xl object-cover"
                />
            </div>
        </div>
    );
}
