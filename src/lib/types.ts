export interface NavbarLink {
    title: string;
    href: string;
}


export  interface BestInStoreType {
    id: number;
    name: string;
    price: number;
    image: string;
}


export type ShopButtonProps = {
  text: string;
  onClick?: () => void;
  className?: string;
};

export interface SliderType {
    id: number;
    text: string;
    author: string;
}