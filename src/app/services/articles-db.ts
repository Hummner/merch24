export const articlesDb = [
    {
        name: 'Frohnhausen T-Shirt',
        description: 'Frohnhausen T-Shirt in verschiedenen Farben und Größen.',
        slug: 'frohnhausen-tshirt',
        morePricesExist: true,
        variant: {
            'red':
                [
                    { id: 1, color: 'red', size: 'M', stock: 10, sku: 'FT-RED-M', price: 19.99, images: ['assets/img/t-shirt/frohnhausen-tshirt-red.png', 'assets/img/t-shirt/cyan.png'] },
                    { id: 2, color: 'red', size: 'L', stock: 5, sku: 'FT-RED-L', price: 26.99, images: ['assets/img/t-shirt/frohnhausen-tshirt-red.png'] }
                ],
            'blue': [{ id: 3, color: 'blue', size: 'L', stock: 8, sku: 'FT-BLU-L', price: 19.99, images: ['assets/img/t-shirt/frohnhausen-tshirt-blue.png'] }]
        },
        subtitle: 'Bequeme T-Shirts für jeden Tag.'

    },
    {
        name: 'Frohnhausen Hoodie',
        description: 'Frohnhausen Hoodie in verschiedenen Farben und Größen.',
        slug: 'frohnhausen-hoodie',
        morePricesExist: true,
        variant: {
            'red': [{ id: 1, color: 'red', size: 'M', stock: 10, sku: 'FT-RED-M', price: 59.99, images: ['assets/img/t-shirt/frohnhausen-tshirt-red.png'] },
            { id: 2, color: 'red', size: 'L', stock: 5, sku: 'FT-RED-L', price: 64.99, images: ['assets/img/t-shirt/frohnhausen-tshirt-red.png'] }],
            'blue': [{ id: 3, color: 'blue', size: 'L', stock: 8, sku: 'FT-BLU-L', price: 59.99, images: ['assets/img/t-shirt/frohnhausen-tshirt-blue.png'] }]
        },
        subtitle: 'Bequeme Hoodies für jeden Tag.'
    },
    {
        name: 'Frohnhausen Pullover',
        description: 'Frohnhausen Pullover in verschiedenen Farben und Größen.',
        slug: 'frohnhausen-pullover',
        morePricesExist: false,
        variant: {
            'red': [{ id: 1, color: 'red', size: 'M', stock: 10, sku: 'FT-RED-M', price: 44.99, images: ['assets/img/t-shirt/frohnhausen-tshirt-red.png'] },
            { id: 2, color: 'red', size: 'L', stock: 5, sku: 'FT-RED-L', price: 44.99, images: ['assets/img/t-shirt/frohnhausen-tshirt-red.png'] }],
            'blue': [{ id: 3, color: 'blue', size: 'L', stock: 8, sku: 'FT-BLU-L', price: 44.99, images: ['assets/img/t-shirt/frohnhausen-tshirt-blue.png'] }]
        },
        subtitle: 'Bequeme Pullover für jeden Tag.'
    },
    {
        name: 'Tasse Frohnhausen',
        description: 'Frohnhausen Tasse in verschiedenen Farben und Größen.',
        slug: 'frohnhausen-tasse',
        morePricesExist: false,
        variant: {
            'red': [{ id: 1, color: 'red', stock: 10, sku: 'FTA-RED-M', price: 44.99, images: ['assets/img/t-shirt/frohnhausen-tshirt-red.png'] }]
        },
        subtitle: 'Tassen für jeden Tag.'
    }
]