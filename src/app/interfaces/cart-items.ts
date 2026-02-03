export interface CartItems {
    sku: string
    name: string;
    price: number;
    amount: number;
    color: string;
    size: string | null;
    total?: number;
    image: string;
}
