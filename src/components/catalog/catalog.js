import React from "react";
import { Link } from 'react-router-dom';

import SearchForm from "../main/search-form";

const Catalog = ({ catalog }) => {
    return (
        <main>
            <SearchForm catalog={catalog} />
            <div className='catalog'>
                {catalog && catalog.map((brand, i) => {
                    let brandName = brand.name.split(' ').join('-');
                    return <Link
                        to={`/catalog/${brandName.toLowerCase()}`}
                        className='catalog-product'
                        key={i}
                    >
                        <img src={brand.logo} alt='brand-logo' />
                        <h3>
                            {brand.name}
                        </h3>
                        <p>
                            {brand.models ?
                                brand.models.map((model, i) => (
                                    <span key={i}>{(i ? ', ' : '') + model}</span>
                                ))
                                :
                                ''
                            }
                        </p>
                    </Link>
                })}
            </div>
        </main>
    )
}

export default Catalog;