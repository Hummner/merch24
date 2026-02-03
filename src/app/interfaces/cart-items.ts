export interface CartItems {
    id: number
    name: string;
    price: number;
    amount: number;
    color: string;
    size: string | null;
    total?: number;
}
