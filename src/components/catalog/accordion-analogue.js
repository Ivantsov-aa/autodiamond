import React from "react";
import { Link } from "react-router-dom";

class AccordionAnalogue extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentProducts: this.props.analogue
        }
    }

    handleInStockClick = e => {
        const { value } = e.target.dataset;
        const { currentProducts } = this.state;
        const openInStockField = currentProducts.map(product => (
            product.article === value ?
                { ...product, selected: !product.selected }
                :
                { ...product, selected: false }
        ))

        this.setState({ currentProducts: openInStockField });
    }

    handleProductForCart = product => {
        this.props.setProductForCart(product);
    }

    render() {

        const { currentProducts } = this.state;
        const { selected, location } = this.props;

        return (
            currentProducts.map((item, i) => (
                <div key={i}>
                    <Link to={location + '/' + item.group + '/' + item.category + '/' + item.article} className='analogue__wrapper' onClick={() => this.handleProductForCart(currentProducts)}>
                        <div className='photo__wrapper'>
                            <img src={item.photo} alt='analogue-pic' />
                        </div>
                        <div>
                            <h2>{item.title}</h2>
                            <p>Артикул: {item.article}</p>
                            <p>Производитель: {item.manufacturer}</p>
                            <p className='price'>{item.price.toFixed(2)} руб.</p>
                        </div>
                    </Link>
                    {
                        item.selected ?
                            <button className={item.selected ? 'active' : ''} data-value={item.article} onClick={this.handleInStockClick}>Скрыть остатки по складам</button>
                            :
                            <button className={item.selected ? 'active' : ''} data-value={item.article} onClick={this.handleInStockClick}>Показать остатки по складам</button>
                    }
                    < div className={`in-stock ${selected && item.selected ? 'open' : 'hidden'}`}>
                        <h2>В наличии:</h2>
                        {
                            item.stock.map((store, i) => (
                                <p key={i}>
                                    {store.store}
                                    <span>
                                        {store.quantity} шт.
                                    </span>
                                </p>
                            ))
                        }
                    </div >
                </div >
            ))
        )
    }

}

export default AccordionAnalogue;