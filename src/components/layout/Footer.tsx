
import Link from "next/link"
export default function Footer() {
  return (
    <footer className=" text-center flex flex-col items-center md:flex-row md:justify-around md:items-start w-full bg-[url('/footer/bg.jpg')] bg-cover bg-center opacity-80 px-6 md:px-32 ">
        <div className="w-[20%] h-full  flex flex-col justify-center items-center py-8 gap-4">
            <h2 className="text-white text-md md:text-2xl font-bold ">Help</h2>
            <Link href="/contact" className="text-white text-sm hover:text-[#C08A46] transition-colors duration-300">
            Shipping Info
            </Link>
            <Link href="/contact" className="text-white text-sm hover:text-[#C08A46] transition-colors duration-300">
            Help
            </Link>
            <Link href="/contact" className="text-white text-sm hover:text-[#C08A46] transition-colors duration-300">
            Return Policy
            </Link>
            <Link href="/contact" className="text-white text-sm hover:text-[#C08A46] transition-colors duration-300">
            Track Order
            </Link>

        </div>
        <div className="w-[20%] h-full  flex flex-col justify-center items-center py-8 gap-4">
            <h2 className="text-white text-md md:text-2xl font-bold ">Support</h2>
            <Link href="/contact" className="text-white text-sm hover:text-[#C08A46] transition-colors duration-300">
            Contact Us
            </Link>
            <Link href="/contact" className="text-white text-sm hover:text-[#C08A46] transition-colors duration-300">
            Report an Issue
            </Link>
            <Link href="/contact" className="text-white text-sm hover:text-[#C08A46] transition-colors duration-300">
            Chat with Support
            </Link>
            <Link href="/contact" className="text-white text-sm hover:text-[#C08A46] transition-colors duration-300">
            Feedback
            </Link>

        </div>
        <div className="w-[20%] h-full  flex flex-col justify-center items-center py-8 gap-4">
            <h2 className="text-white text-md md:text-2xl font-bold ">Information</h2>
            <Link href="/contact" className="text-white text-sm hover:text-[#C08A46] transition-colors duration-300">
            About Us
            </Link>
            <Link href="/contact" className="text-white text-sm hover:text-[#C08A46] transition-colors duration-300">
            Privacy Policy
            </Link>
            <Link href="/contact" className="text-white text-sm hover:text-[#C08A46] transition-colors duration-300">
            Terms & Conditions
            </Link>
            <Link href="/contact" className="text-white text-sm hover:text-[#C08A46] transition-colors duration-300">
            Blog / News
            </Link>

        </div>
        <div className="w-[20%] h-full  flex flex-col justify-center items-center py-8 gap-4">
            <h2 className="text-white text-md md:text-2xl font-bold ">Address</h2>
            <Link href="/contact" className="text-white text-sm hover:text-[#C08A46] transition-colors duration-300">
No. 24, Hafez Street, Valiasr Ave, Tehran, Iran            </Link>
            <Link href="/contact" className="text-white text-sm hover:text-[#C08A46] transition-colors duration-300">
            Unit 8, Building 15, Shahrak Gharb Blvd, Tehran, Iran
            </Link>


        </div>

    </footer>
  )
}

