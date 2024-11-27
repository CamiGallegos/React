import React, { useState } from 'react';
import ItemListContainer from '../../ItemListContainer/ItemListContainer';

const Productos = () => {
    const [category, setCategory] = useState(null);

    const handleCategoryChange = (selectedCategory) => {
        setCategory(selectedCategory);
    };

    return (
        <div className="container mt-4">
            <h2 className="text-center">Productos</h2>
            <div className="d-flex justify-content-center my-3">
                <button className="btn btn-secondary mx-2" onClick={() => handleCategoryChange(null)}>
                    Todos
                </button>
                <button className="btn btn-secondary mx-2" onClick={() => handleCategoryChange('remes')}>
                    Remeras
                </button>
                <button className="btn btn-secondary mx-2" onClick={() => handleCategoryChange('buzos')}>
                    Buzos
                </button>
                <button className="btn btn-secondary mx-2" onClick={() => handleCategoryChange('pufer')}>
                    Camperas
                </button>
            </div>
            <ItemListContainer categoryId={category} />
        </div>
    );
};

export default Productos;
