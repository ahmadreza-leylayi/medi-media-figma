
import { BestInStoreData } from "@/lib/BestInStoreData"
import ShopButton from "../ui/ShopButton"

export default function BestInStore() {




    return (
        <div className="p-5 mx-auto bg-black ">
            <h1 className="flex w-[60%] text-3xl font-bold text-center my-10 font-serif border-b-2 border-[#C08A46] mx-auto justify-center">Best in Store</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2">
                {/* card */}
                {BestInStoreData.map((item, index) => {
                    return (
                        <div key={index} className="flex flex-col shadow-md rounded-lg overflow-hidden justify-center items-center border cursor-pointer  border-[#C08A46] p-5 gap-3 w-[90%] mx-auto hover:scale-103 transition-all duration-300 ease-in-out">
                            <img src={item.image} alt={item.name} className="w-[50%] h-48 object-cover " />
                            <div className="p-4 flex flex-col gap-3 w-[40%] justify-center items-center">
                                <h2 className="text-xl font-bold flex-1 text-center">{item.name}</h2>
                                

                                <p className="text-[#C08A46] text-center font-bold">{item.price}$</p>
                            </div>
                            <ShopButton text={'Shop Now'}/>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}
