var data = [

    {
        _id: "1283as9s8d71123123",
        title: "Cherry",
        description: "This is a description of a product",
        image: "p1.jpg",
        price: 122.33,
        category: "fruit",
        discount: 5
    },
    {
        _id: "1283a9s8d171123123",
        title: "Strawberry",
        description: "This is a description of a product",
        image: "p1.jpg",
        price: 122.33,
        category: "fruit",
        discount: 5
    },
    {
        _id: "1283a9s8d71f123123",
        title: "Banana",
        description: "This is a description of a product",
        image: "p1.jpg",
        price: 122.33,
        category: "fruit",
        discount: 5
    },
    {
        _id: "1283a9s8d711123123",
        title: "Orange",
        description: "This is a description of a product",
        image: "p1.jpg",
        price: 122.33,
        category: "fruit",
        discount: 5
    },
    {
        _id: "1283a9s8d711asd23123",
        title: "Advacado",
        description: "This is a description of a product",
        image: "p1.jpg",
        price: 122.33,
        category: "",
        discount: 5
    },
    {
        _id: "1283a9s8d711123123123",
        title: "Coffee",
        description: "This is a description of a product",
        image: "p1.jpg",
        price: 122.33,
        category: "caffeine",
        discount: 5
    },
    {
        _id: "1283a9s8asdd71123123",
        title: "Chicken",
        description: "This is a description of a product",
        image: "p1.jpg",
        price: 122.33,
        category: "protein",
        discount: 5
    },
    {
        _id: "1283a9s8d71112312323123",
        title: "Eggs",
        description: "This is a description of a product",
        image: "p1.jpg",
        price: 122.33,
        category: "protein",
        discount: 5
    },
];


class ItemService{

    getCatalog() {
        // logic to connect to a server and retrieve the list items

        // return mock data
        return data;
    }

    getStock(itemId){

    }

    getItemPrice(coupon){
        
    }
}
    
export default ItemService;