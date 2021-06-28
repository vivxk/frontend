const products = [
    {
        id: 1,
        name: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        price: 799,
        description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        category: "men's clothing",
        rating: '4.5',
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        numReviews: 14
    },
    {
        id: 2,
        name: "Mens Casual Premium Slim Fit T-Shirts ",
        price: 1029,
        description: "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
        category: "men's clothing",
        rating: '3.5',
        image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        numReviews: 25
    },
    {
        id: 3,
        name: "Mens Cotton Jacket",
        price: 1299,
        description: "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
        category: "men's clothing",
        rating: '4.5',
        image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
        numReviews: 5
    },
    {
        id: 4,
        name: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        price: 699,
        description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        category: "men's clothing",
        rating: '5',
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        numReviews: 20
    },
    {
        id: 5,
        name: "Mens Casual Premium Slim Fit T-Shirts ",
        price: 999,
        description: "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
        category: "men's clothing",
        rating: '2.5',
        image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        numReviews: 10
    },
    {
        id: 6,
        name: "Mens Cotton Jacket",
        price: 1299,
        description: "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
        category: "men's clothing",
        rating: '4.2',
        image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
        numReviews: 12
    }, {
        id: 7,
        name: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        price: 699,
        description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        category: "men's clothing",
        rating: '5',
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        numReviews: 20
    },
    {
        id: 8,
        name: "Mens Casual Premium Slim Fit T-Shirts ",
        price: 999,
        description: "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
        category: "men's clothing",
        rating: '2.5',
        image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        numReviews: 10
    },
    {
        id: 9,
        name: "Mens Cotton Jacket",
        price: 1299,
        description: "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
        category: "men's clothing",
        rating: '4.2',
        image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
        numReviews: 12
    }, {
        id: 10,
        name: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        price: 699,
        description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        category: "men's clothing",
        rating: '5',
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        numReviews: 20
    },
    {
        id: 11,
        name: "Mens Casual Premium Slim Fit T-Shirts ",
        price: 999,
        description: "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
        category: "men's clothing",
        rating: '2.5',
        image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        numReviews: 10
    },
    {
        id: 12,
        name: "Mens Cotton Jacket",
        price: 1299,
        description: "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
        category: "men's clothing",
        rating: '4.2',
        image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
        numReviews: 12
    }, {
        id: 13,
        name: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        price: 699,
        description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        category: "men's clothing",
        rating: '5',
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        numReviews: 20
    },
    {
        id: 14,
        name: "Mens Casual Premium Slim Fit T-Shirts ",
        price: 999,
        description: "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
        category: "men's clothing",
        rating: '2.5',
        image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        numReviews: 10
    },
    {
        id: 15,
        name: "Mens Cotton Jacket",
        price: 1299,
        description: "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
        category: "men's clothing",
        rating: '4.2',
        image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
        numReviews: 12
    }

]

export default products