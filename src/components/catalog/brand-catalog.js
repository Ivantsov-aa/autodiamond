import React from "react";
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import SearchForm from '../main/search-form';

const BrandCatalog = ({ catalog }) => {
    const location = useLocation();
    let currentLocation = location.pathname.split('/').pop().split('-').join(' ');

    let chosenBrand = catalog.filter(brand => brand.name.toLowerCase() === currentLocation);

    return (
        <main>
            <SearchForm catalog={catalog} />
            {catalog.length > 0 &&
                <section className='brand-catalog'>
                    {chosenBrand[0].models ?
                        chosenBrand[0].models.map((model, i) => {
                            let modelName = model.split(' ').join('-').toLowerCase();
                            let brandLocation = currentLocation.split(' ').join('-');
                            return <Link to={`/catalog/${brandLocation}/${modelName}`} key={i}>{model}</Link>
                        })
                        :
                        <Routes>
                            <Route path={`/${chosenBrand[0].name.toLowerCase()}`} />
                        </Routes>
                    }
                </section>
            }
        </main>
    )
}

export default BrandCatalog;