import { ShopButtonProps } from "@/lib/types";

export default function ShopButton({ text, onClick, className }: ShopButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`bg-stone-800 hover:border-b-4 border-[#C08A46] text-white/80 px-6 py-3 rounded-md cursor-pointer hover:bg-stone-600 transition-all duration-200 ease-in-out font-serif ${className ?? ""}`}
    >
      {text}
    </button>
  );
}
