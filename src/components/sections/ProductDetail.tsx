import ShopButton from "../ui/ShopButton";



export default function ProductDetail() {
    return (
        
        <section className=" w-auto bg-[url('/product-detail/bg-1.jpg')] bg-cover bg-center  overflow-hidden h-[500px] gap-4 flex flex-col justify-center items-center">
            <div className="flex flex-col  items-start gap-4 w-2xs text-black">
                <h1 className="text-4xl font-bold text-[#C08A46]">Product Detail</h1>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus, magnam?
                </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam eos harum temporibus, aperiam exercitationem omnis esse! Recusandae, culpa mollitia! Quam.</p>

            <ShopButton text="shop now" className="m-4 items-start"/>
            </div>
        </section>
    
    )
}