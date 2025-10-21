import ShopButton from "../ui/ShopButton"

export default function MostWanted() {

    return(
        <section className="w-auto bg-[url('/most-wanted/bg-most.jpg')] bg-cover bg-center  overflow-hidden h-[500px] gap-4 flex flex-col justify-center items-center">
            <div className="w-full h-full bg-black/50 flex flex-col justify-center items-center gap-8">
            <h1 className="text-md md:text-3xl text-white font-bold text-center font-serif border-b-2 border-[#C08A46]">Most wanted of the year</h1>
            <ShopButton text={"Shop now"}  />
            </div>
      
        </section>
    )
}