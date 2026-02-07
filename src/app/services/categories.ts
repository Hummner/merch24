// export const categories: any = [
//     {
//         name: "Team Collections",
//         subcategories: [
//             {
//                 name: "Eishockey",
//                 productategories: [
//                     'Herne Ev', 'Eagles', 'DEG'
//                 ]
//             },
//             {
//                 name: "Inliner",
//                 productategories: [
//                     'Krefeld HV', 'Herne HV'
//                 ]
//             },
//             {
//                 name: "Fußball",
//                 productategories: [
//                     'RWE', 'Schale 04', 'Köln FC'
//                 ]
//             },
//             {
//                 name: "Hanball",
//                 productategories: [
//                     'Essen', 'Bremen', 'München'
//                 ]
//             }
//         ]
//     },
//     {
//         name: "Geschenke",
//         subcategories: [
//             {
//                 name: "Tassen"
//             }
//         ]
//     },
//     {
//         name: "Bekleidung",
//         subcategories: [
//             {
//                 name: "Männer",
//                 productategories: [
//                     'T-shirt', 'Hoddie', 'Caps', 'Trikot', 'Schals'
//                 ]
//             },
//             {
//                 name: "Frauen",
//                 productategories: [
//                     'T-shirt', 'Hoddie', 'Caps', 'Trikot', 'Schals'
//                 ]
//             },
//             {
//                 name: "Kids",
//                 productategories: [
//                     'T-shirt', 'Hoddie', 'Caps', 'Trikot', 'Schals'
//                 ]
//             }
//         ]
//     }
// ]

export const categories: any =
    [
        {
            "id": 1,
            "name": "Team Collections",
            "children": [
                {
                    "id": 2,
                    "name": "Eishockey",
                    "children": [
                        {
                            "id": 3,
                            "name": "Trikots",
                            "children": []
                        }
                    ]
                }
            ]
        }
    ]