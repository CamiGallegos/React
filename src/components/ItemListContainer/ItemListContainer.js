import React, { useState, useEffect } from 'react';
import { getProducts, getProductsByCategory } from '../../asyncMock';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

const ItemListContainer = ({ categoryId }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        const fetchProducts = async () => {
            const data = categoryId
                ? await getProductsByCategory(categoryId) // Filtrar por categoría
                : await getProducts(); // Obtener todos los productos
            setProducts(data);
            setLoading(false);
        };
        fetchProducts();
    }, [categoryId]);

    if (loading) {
        return <LoadingSpinner message="Cargando productos..." />;
    }

    return (
        <div className="container mt-4">
            <div className="row">
                {products.map((product) => (
                    <div key={product.id} className="col-md-3">
                        <div className="card">
                            <img src={product.image} alt={product.title} className="card-img-top" />
                            <div className="card-body">
                                <h5 className="card-title">{product.title}</h5>
                                <a href={`/productos/${product.id}`} className="btn btn-primary">
                                    Ver más
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ItemListContainer;
