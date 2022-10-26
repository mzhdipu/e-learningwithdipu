import React, { useEffect, useState } from 'react';
import "./LeftSideNavber.css"
import { Link } from 'react-router-dom';

const LeftSideNavber = () => {
    const [categories, setCategories] = useState([]);

    useEffect(()=>{
        fetch(`http://localhost:5000/categories`)
            .then(res => res.json())
            .then(data => setCategories(data))
    },[])

    return (
        <div>
            <h3>Left Side Contents : {categories.length}</h3>
            {
                categories.map(category => 
                    <p key={category.id} className='categoriesItem'><Link to={`/category/${category.id}`}>{category.name}</Link></p>
                )
            }
        </div>
    );
};

export default LeftSideNavber;