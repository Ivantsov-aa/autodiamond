import { useState, useEffect } from "react";
import SearchForm from "../main/search-form";
import AccordionAnalogue from "./accordion-analogue";
import AccordionAsideCatalog from "./accordion-aside";

const ModelCatalog = ({ url, catalog, currentCatalog, location, setProductForCart, setCurrentCatalog }) => {
    const [chosenProductCategory, setChosenProductCategories] = useState(null);
    const [allProducts, setAllProducts] = useState(null);

    // componentDidMount() {
    //     const { currentCatalog } = props;
    //     const { allProducts } = state;

    //     currentCatalog.models[0].spares.map(part => (
    //         part.categories && part.categories.map(category => (
    //             category.products.map(product => (
    //                 product.parts && product.parts.map(part => (
    //                     allProducts.push(part)
    //                 ))
    //             ))
    //         ))
    //     ));

    //     this.setState({ allProducts: allProducts });
    // }

    const loadModelProducts = async () => {
        fetch(`${url}/api/products?brand=${currentCatalog.name}&model=${currentCatalog.models}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(response => response.json())
            .then(result => setAllProducts(result.products))
    }

    useEffect(() => {
        loadModelProducts();
    }, []);

    console.log(allProducts);

    const handleSparesCategoryClick = e => {
        const { value } = e.target.dataset;
        const chosenCategorySpares = {
            ...currentCatalog, models: [
                {
                    model: currentCatalog.models[0].model, spares: currentCatalog.models[0].spares.map(item => (
                        item.value === value ? { ...item, selected: !item.selected } : { ...item }
                    ))
                }
            ]
        }

        setCurrentCatalog(chosenCategorySpares);
    }

    const handleProductClick = e => {
        const { value } = e.target.dataset;
        const { chosenProductCategory } = this.state;
        const { allProducts } = this.state;

        const openProductAnalogue = chosenProductCategory && {
            ...chosenProductCategory, parts: chosenProductCategory.parts.map(part => (
                part.article === value ? { ...part, selected: !part.selected } : { ...part, selected: false }
            ))
        }

        const openAllProductsAnalogue = allProducts.map(product => (
            product.article === value ? { ...product, selected: !product.selected } : { ...product, selected: false }
        ))

        this.setState({ chosenProductCategory: openProductAnalogue, allProducts: openAllProductsAnalogue });
    }

    return (
        <main>
            <SearchForm catalog={catalog} />
            {allProducts &&
                <div className='model-catalog'>
                    <h1>{currentCatalog.name + ', ' + currentCatalog.models}</h1>
                    <div className='model-catalog__wrapper'>
                        <aside>
                            <ul>
                                {/* {currentCatalog.models[0].spares && currentCatalog.models[0].spares.map((item, i) => (
                                    <li className={`${item.selected ? 'open' : ''}`} key={i}>
                                        {item.name}
                                        {item.selected &&
                                            <AccordionAsideCatalog spares={item} setChosenProductCategories={setChosenProductCategories} />
                                        }
                                        <button
                                            className={`model-catalog_button ${item.selected ? 'active' : ''}`}
                                            data-value={item.value}
                                            onClick={handleSparesCategoryClick}
                                        >
                                            <span
                                                data-value={item.value}
                                                onClick={handleSparesCategoryClick}>
                                            </span>
                                        </button>
                                    </li>
                                ))} */}
                            </ul>
                        </aside>
                        <div>
                            {allProducts.map(product => (
                                <div className='product-group__wrapper' key={product.key}>
                                    <div className='product-group'>
                                        <div>
                                            <h2>{product.name}</h2>
                                            <p>Артикул: {product.article}</p>
                                            <p>Производитель: {product.manufacturer}</p>
                                        </div>
                                        {product.selected ?
                                            <button className={product.selected ? 'active' : ''} data-value={product.article} onClick={handleProductClick}>Скрыть все товары</button>
                                            :
                                            <button className={product.selected ? 'active' : ''} data-value={product.article} onClick={handleProductClick}>Показать все товары</button>
                                        }
                                    </div>
                                    <div className={`analogue-products ${product.selected ? 'open' : 'hidden'}`}>
                                        {/* <AccordionAnalogue setProductForCart={setProductForCart} location={location.pathname} selected={product.selected} analogue={product.analogue} /> */}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>}
        </main>
    )
}

export default ModelCatalog;