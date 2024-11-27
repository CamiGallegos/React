const products = [
    { id: '1', title: 'REME SUPPLY', categoryId: 'remes', description: 'Una remera genial', image: require('./assets/images/foto1.jpeg') },
    { id: '2', title: 'REME MALIBU', categoryId: 'remes', description: 'Otra remera cool', image: require('./assets/images/foto2.jpeg') },
    { id: '3', title: 'REME OCEAN', categoryId: 'remes', description: 'Remera ideal para el verano', image: require('./assets/images/foto3.jpeg') },
    { id: '4', title: 'REME SURF FACES', categoryId: 'remes', description: 'Remera estilo surf', image: require('./assets/images/foto4.jpeg') },
    { id: '5', title: 'BUZO HOMIES', categoryId: 'buzos', description: 'Buzo casual', image: require('./assets/images/img-buzo-homies.jpeg') },
    { id: '6', title: 'BUZO NEW WORLD', categoryId: 'buzos', description: 'Buzo cómodo y moderno', image: require('./assets/images/img-buzo-newworld.jpeg') },
    { id: '7', title: 'BUZO WONDER', categoryId: 'buzos', description: 'Buzo ideal para el frío', image: require('./assets/images/img-buzo-wonder.jpeg') },
    { id: '8', title: 'BUZO AZUL', categoryId: 'buzos', description: 'Buzo azul clásico', image: require('./assets/images/img-buzo-azul.jpeg') },
    { id: '9', title: 'PUFER AZUL', categoryId: 'pufer', description: 'Campera abrigada azul', image: require('./assets/images/img-pufer-azul.jpeg') },
    { id: '10', title: 'PUFER MARRON', categoryId: 'pufer', description: 'Campera marrón estilizada', image: require('./assets/images/img-pufer-marron3.jpeg') },
    { id: '11', title: 'PUFER VIOLETA', categoryId: 'pufer', description: 'Campera violeta llamativa', image: require('./assets/images/img-pufer-violeta1.jpeg') },
    { id: '12', title: 'PUFER ROJA', categoryId: 'pufer', description: 'Campera roja vibrante', image: require('./assets/images/img-pufer-roja.jpeg') },
];

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 1000);
    });
};

export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find((product) => product.id === id));
        }, 1000);
    });
};

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter((product) => product.categoryId === categoryId));
        }, 1000);
    });
};
