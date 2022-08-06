const products = [
    {
        category: 'policial',
        description:'Descripcion de Producto 1',
        id: '1',
        img: 'https://www.penguinlibros.com/ar/823865-home_default/rio-mistico.jpg',
        name: 'Product1',
        price: 2,
        stock: 7,
    },
    {
        category: 'ficcion',
        description:'Descripcion de Producto 2',
        id: '2',
        img: 'https://www.penguinlibros.com/ar/928950-home_default/tirar-del-hilo-comisario-montalbano-29.jpg',
        name: 'Product2',
        price: 3,
        stock: 7,
    },
    {
        category: 'fantasia',
        description:'Descripcion de Producto 3',
        id: '3',
        img: 'https://www.penguinlibros.com/ar/929197-home_default/stella.jpg',
        name: 'Product3',
        price: 4,
        stock: 7,
    },
];
export const productList = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
};
export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
};

export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 500)
    })
};                           