type ShipmentMethod = "Lieferung" | "Abholung";
type PaymentMethod = "Barzahlung" | "Überweisung"

export interface CustomerDetails {
    "address": {
        "firstName": string,
        "business": string | "",
        "lastName": string,
        "email": string,
        "address": string,
        "zip": string,
        "city": string
    },
    "billingAddress":
    {
        "firstName": string,
        "business":  string | "",
        "lastName": string,
        "email": string,
        "address": string,
        "zip": string,
        "city": string
    },
    "payment": PaymentMethod,
    "shipment": ShipmentMethod,

}