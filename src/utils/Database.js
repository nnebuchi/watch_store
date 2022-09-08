export function products(){
    const imgUrl = "uploads/products";
    
    const products = [
    
        {
            id:1,
            name:"Summer Watch",
            price:"45700",
            cover_photo:`${imgUrl}/product1.png`
        },
        
        {
            id:2,
            name:"Winter Watch",
            price:"15700",
            cover_photo:`${imgUrl}/product2.png`
        },
        
        {
            id:3,
            name:"Autumn Watch",
            price:"700",
            cover_photo:`${imgUrl}/product3.png`
        },
        
        {
            id:4,
            name:"Springs Watch",
            price:"8700",
            cover_photo:`${imgUrl}/product4.png`
        },
        
        {
            id:5,
            name:"Rainy Watch",
            price:"45700",
            cover_photo:`${imgUrl}/product5.png`
        },

        {
            id:6,
            name:"Harmattan Watch",
            price:"45700",
            cover_photo:`${imgUrl}/product6.png`
        }

    ]

    return products;
};

export  function newProducts(){
    const imgUrl = "uploads/products";
    
    const products = [
    
        {
            id:7,
            name:"Baby Timer",
            price:"4540",
            cover_photo:`${imgUrl}/product7.png`
        },
        
        {
            id:8,
            name:"Swatch Classic",
            price:"15700",
            cover_photo:`${imgUrl}/product8.png`
        },
        
        {
            id:9,
            name:"Rolex Dark",
            price:"700",
            cover_photo:`${imgUrl}/product9.png`
        },
        

    ]
    return products;
};
