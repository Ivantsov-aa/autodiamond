import React from "react";

class AccordionAnalogueCart extends React.Component {
    handleInStockClick = e => {
        const { value } = e.target.dataset;
        const { analogue } = this.props;
        const openInStockField = analogue.map(product => (
            product.article === value ?
                { ...product, selected: !product.selected }
                :
                { ...product, selected: false }
        ))

        this.props.setInStockOpen(openInStockField);
    }

    navigateToProductCart = path => {
        const { navigate } = this.props;
        navigate(path);
        this.props.setProductCart(path);
    }

    render() {
        const { selected, location, analogue } = this.props;
        const pathForProductCart = location.split('/').slice(0, 4).join('/');

        return (
            analogue.map((item, i) => (
                <div key={i}>
                    <div className='analogue__wrapper' onClick={() => this.navigateToProductCart(pathForProductCart + '/' + item.group + '/' + item.category + '/' + item.article)}>
                        <div className='photo__wrapper'>
                            <img src={item.photo} alt='analogue-pic' />
                        </div>
                        <div>
                            <h2>{item.title}</h2>
                            <p>Артикул: {item.article}</p>
                            <p>Производитель: {item.manufacturer}</p>
                            <p className='price'>{item.price.toFixed(2)} руб.</p>
                        </div>
                    </div>
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

export default AccordionAnalogueCart;