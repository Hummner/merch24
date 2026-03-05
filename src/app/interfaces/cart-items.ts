export interface CartItems {
    id: number;
    sku: string;
    name: string;
    price: number;
    amount: number;
    color: string;
    size: string | null;
    total?: number;
    image: string;
}
