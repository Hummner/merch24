export const articlesDb = [
    {
        name: 'Frohnhausen Pullover',
        description: 'Frohnhausen Pullover in verschiedenen Farben und Größen.',
        slug: 'frohnhausen-pullover',
        subtitle: 'Tassen für jeden Tag',
        morePricesExist: true,
        colors: {
            red: {
                images: ['assets/img/t-shirt/frohnhausen-tshirt-red.png'],
                hex: "#ff0000",
                variants: [
                    {
                        id: 1,
                        size: "M",
                        price: 26,
                        sale_price: 19,
                        stock: 200,
                        sku: "FP-RED-M"

                    },
                    {
                        id: 2,
                        size: "L",
                        price: 22,
                        sale_price: 19,
                        stock: 200,
                        sku: "FP-RED-L"

                    }

                ]
            },
            cyan: {
                images: ['assets/img/t-shirt/cyan.png'],
                hex: "#00e1ff",
                variants: [
                    {
                        id: 1,
                        size: "M",
                        price: 26,
                        sale_price: 19,
                        stock: 200,
                        sku: "FP-RED-M"

                    },
                    {
                        id: 2,
                        size: "L",
                        price: 22,
                        sale_price: 19,
                        stock: 200,
                        sku: "FP-RED-L"

                    }

                ]
            }
        }
    },
    {
        name: 'Sons of Ruhrpott',
        description: 'Sons of Ruhrpott in verschiedenen Größen.',
        slug: 'sons-of-ruhrpott',
        subtitle: 'Ruhrpott Collection',
        morePricesExist: true,
        colors: {
            black: {
                images: ['assets/img/t-shirt/sons-of-ruhrpott-front.png', 'assets/img/t-shirt/sons-of-ruhrpott-back.png'],
                hex: "#000000",
                variants: [
                    {
                        id: 1,
                        size: "M",
                        price: 49.99,
                        sale_price: 49.99,
                        stock: 200,
                        sku: "FP-RED-M"

                    },
                    {
                        id: 2,
                        size: "L",
                        price: 59.99,
                        sale_price: 49.99,
                        stock: 200,
                        sku: "FP-RED-L"

                    }

                ]
            }
        }
    },
    {
        name: 'Kaffebecher',
        description: 'Love my Lif...',
        slug: 'coffe-cup',
        subtitle: 'Ruhrpott Collection',
        morePricesExist: true,
        colors: {
            white: {
                images: ['assets/img/t-shirt/mug-hockey.png'],
                hex: "#ffffff",
                variants: [
                    {
                        id: 1,
                        price: 49.99,
                        sale_price: 49.99,
                        stock: 200,
                        sku: "FP-RED-M"

                    }
                ]
            }
        }
    },
    {
        name: 'Love Hockey T-Shirt',
        description: 'Love Hockey',
        slug: 'love-hockey-t-shirt',
        subtitle: 'Hockey Collection',
        morePricesExist: true,
        colors: {
            white: {
                images: ['assets/img/t-shirt/hockey-tshirt-white-front.png', 'assets/img/t-shirt/hockey-tshirt-white-back.png'],
                hex: "#ffffff",
                variants: [
                    {
                        id: 1,
                        size: "M",
                        price: 49.99,
                        sale_price: 49.99,
                        stock: 200,
                        sku: "FP-RED-M"

                    }
                ]
            }
        }
    }

]








