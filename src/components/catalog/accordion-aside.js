import React from "react";

class AccordionAsideCatalog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            spares: this.props.spares
        }
    }

    handleSparesManufacturedClick = e => {
        const { value } = e.target.dataset;
        const { spares } = this.state;
        const chosenSparesManufactured = {
            ...spares, categories: spares.categories.map(category => (
                category.name === value ? { ...category, selected: !category.selected } : { ...category, selected: false }
            ))
        }

        this.setState({ spares: chosenSparesManufactured });
    }

    handleChosenProductCategories = (product, e) => {
        const { value } = e.target.dataset;
        const { setChosenProductCategories } = this.props;
        const { spares } = this.state;
        const chosenCategorySpares = {
            ...spares, categories: spares.categories.map(category => (
                category.selected ?
                    {
                        ...category, products: category.products.map(product => (
                            product.name === value ? { ...product, selected: !product.selected } : { ...product, selected: false }
                        ))
                    }
                    :
                    { ...category }
            ))
        };

        this.setState({ spares: chosenCategorySpares });

        setChosenProductCategories(product);
    }

    render() {
        const { spares } = this.state;

        return (
            <ul className='spares-brand'>
                {spares.categories.map((item, i) => (
                    <li className={`${item.selected ? 'open' : ''}`} key={i}>
                        {item.name}
                        {
                            item.selected &&
                            <ul className='spares-categories'>
                                {item.products.map((product, i) => (
                                    <li className={`${product.selected ? 'active' : ''}`} data-value={product.name} onClick={(e) => this.handleChosenProductCategories(product, e)} key={i}>{product.name}</li>
                                ))}
                            </ul>
                        }
                        <button
                            className={`model-catalog_button ${item.selected ? 'active' : ''}`}
                            data-value={item.name}
                            onClick={this.handleSparesManufacturedClick}
                        >
                            <span
                                data-value={item.name}
                                onClick={this.handleSparesManufacturedClick}
                            >
                            </span>
                        </button>
                    </li>
                ))}
            </ul>
        )
    }
}

export default AccordionAsideCatalog;