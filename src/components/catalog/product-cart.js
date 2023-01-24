import React from "react";
import SearchForm from "../main/search-form";
import AccordionAnalogueCart from "./accordion-analogue-cart";

class ProductCart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            chosenProduct: {},
            analogueProduct: null
        }
    }

    componentDidMount() {
        const analogueProduct = [];
        const { catalog, location } = this.props;
        const brandName = location.pathname.split('/').slice(2).shift();
        const modelName = location.pathname.split('/').slice(3).shift();
        const groupName = location.pathname.split('/').slice(4).shift();
        const categoryName = location.pathname.split('/').slice(5).shift();
        const productArticle = location.pathname.split('/').pop();

        catalog.map(products => (
            products.name.toLowerCase() === brandName && products.models.map(model => (
                model.model.toLowerCase() === modelName && model.spares.map(item => (
                    item.categories && item.value === groupName && item.categories.map(category => (
                        category.products.map(product => (
                            product.value && product.value === categoryName && product.parts && product.parts.map(part => (
                                part.analogue.map(element => (
                                    element.article === productArticle ? this.setState({ chosenProduct: element }) : analogueProduct.push(element)
                                ))
                            ))
                        ))
                    ))
                ))
            ))
        ))

        this.setState({ analogueProduct: analogueProduct });
    }

    incrementQuantity = () => {
        const { chosenProduct } = this.state;
        this.setState({ chosenProduct: { ...chosenProduct, quantity: chosenProduct.quantity < 20 ? chosenProduct.quantity + 1 : chosenProduct.quantity } });
    }

    decrementQuantity = () => {
        const { chosenProduct } = this.state;
        this.setState({ chosenProduct: { ...chosenProduct, quantity: chosenProduct.quantity > 1 ? chosenProduct.quantity - 1 : chosenProduct.quantity } });
    }

    handleInStockClick = e => {
        const { value } = e.target.dataset;
        const { analogueProduct } = this.state;
        const openInStockField = analogueProduct.map(product => (
            product.article === value ?
                { ...product, selected: !product.selected }
                :
                { ...product, selected: false }
        ))

        this.setState({ analogueProduct: openInStockField });
    }

    setProductCart = path => {
        const analogueProduct = [];
        const { catalog } = this.props;
        const brandName = path.split('/').slice(2).shift();
        const modelName = path.split('/').slice(3).shift();
        const groupName = path.split('/').slice(4).shift();
        const categoryName = path.split('/').slice(5).shift();
        const productArticle = path.split('/').pop();

        catalog.map(products => (
            products.name.toLowerCase() === brandName && products.models.map(model => (
                model.model.toLowerCase() === modelName && model.spares.map(item => (
                    item.categories && item.value === groupName && item.categories.map(category => (
                        category.products.map(product => (
                            product.value && product.value === categoryName && product.parts && product.parts.map(part => (
                                part.analogue.map(element => (
                                    element.article === productArticle ? this.setState({ chosenProduct: element }) : analogueProduct.push(element)
                                ))
                            ))
                        ))
                    ))
                ))
            ))
        ))

        this.setState({ analogueProduct: analogueProduct });
    }

    setInStockOpen = product => {
        this.setState({ analogueProduct: product });
    }

    render() {
        const { chosenProduct, analogueProduct } = this.state;
        const { location, navigate } = this.props;

        return (
            <main className='product-cart__wrapper'>
                <SearchForm {...this.props} />
                <section className='product-cart'>
                    <div className='photo__wrapper'>
                        <img src={chosenProduct.photo} alt='product-pic' />
                    </div>
                    <div className='product-cart__description'>
                        <h2>{chosenProduct.title}</h2>
                        <p>Артикул: <span>{chosenProduct.article}</span></p>
                        <p>Производитель: <span>{chosenProduct.manufacturer}</span></p>
                        <p>Описание: <span>{chosenProduct.description}</span></p>
                        <div className='product-cart__footer'>
                            <p>{chosenProduct.price} руб.</p>
                            <div>
                                <button onClick={this.decrementQuantity}>-</button>
                                <p>{chosenProduct.quantity}</p>
                                <button onClick={this.incrementQuantity}>+</button>
                            </div>
                            <button>В корзину</button>
                        </div>
                    </div>
                </section>
                <section className='analogue-product__flex'>
                    <h2>Аналоги товара</h2>
                    {analogueProduct &&
                        <AccordionAnalogueCart
                            selected={true}
                            navigate={navigate}
                            location={location.pathname}
                            analogue={analogueProduct}
                            setProductCart={this.setProductCart}
                            setInStockOpen={this.setInStockOpen}
                        />}
                    <button>Показать ещё товары</button>
                </section>
            </main >
        )
    }
}

export default ProductCart;