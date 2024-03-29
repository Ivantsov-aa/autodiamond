import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

import SearchForm from "./main/search-form";

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            innerWidth: window.innerWidth
        }
    }

    componentDidMount() {
        window.addEventListener('resize', this.updateWindowWidth)
    }

    updateWindowWidth = () => {
        this.setState({ innerWidth: window.innerWidth });
    }

    render() {
        const { innerWidth } = this.state;
        const { popularProducts, news } = this.props;

        const settingsForService = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };

        const settingsForProducts = {
            dots: true,
            arrows: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        }

        const settingsForNewsBig = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3
        };

        const settingsForNewsSmall = {
            dots: true,
            arrows: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };

        return (
            <main>
                <SearchForm {...this.props} />
                <section className='main__service-wrapper'>
                    <div className='main__service'>
                        <div className='service__description'>
                            <h1>Запчасти по доступной цене</h1>
                            <ul>
                                <li>Доставка в любое место</li>
                                <li>Консультация специалиста</li>
                            </ul>
                        </div>
                        <div className='order-product'>
                            <Slider {...settingsForService}>
                                {this.props.products.map((product, i) => (
                                    <div className='product-cart-wrapper' key={i}>
                                        <div className='product-cart'>
                                            <div className='img-wrapper'>
                                                <img src={product.image} alt='icon-product' />
                                            </div>
                                            <div className='product-cart__info'>
                                                <h3>{product.name}</h3>
                                                <p>{product.brand}</p>
                                                <button>Заказать</button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                        <div className='main-bg'></div>
                    </div>
                </section>
                <section className='about-us__wrapper'>
                    <div className='about-us'>
                        <div>
                            <h3>
                                AutoDiamond <span>- один из лучших интернет магазинов в России!</span>
                            </h3>
                            <p>
                                Занимаясь запчастями для китайских автомобилей, AutoDiamond готов предложить самый полный ассортимент и максимально подробное описание товаров из каталогов производителей
                            </p>
                        </div>
                        <div>
                            <img src='./images/quality-icon.svg' alt='quality-icon' />
                            <h3>
                                КАЧЕСТВО И ГАРАНТИЯ
                            </h3>
                            <p>
                                Мы можем гарантировать качество нашей продукции
                            </p>
                        </div>
                        <div>
                            <img src='./images/support-icon.svg' alt='support-icon' />
                            <h3>
                                ПОДДЕРЖКА
                            </h3>
                            <p>
                                Мы готовы ответить на все вопросы наших клиентов
                            </p>
                        </div>
                    </div>
                </section>
                <section className='about-us-add'>
                    <div className='about-us'>
                        <div>
                            <img src='./images/return-icon.svg' alt='quality-icon' />
                            <h3>
                                НЕТ ПРОБЛЕМ С ВОЗВРАТОМ
                            </h3>
                            <p>
                                Мы принимаем товар в течении 14 дней — никаких вопросов
                            </p>
                        </div>
                        <div>
                            <img src='./images/review-icon.svg' alt='support-icon' />
                            <h3>
                                РЕАГИРУЕМ НА ОТЗЫВЫ
                            </h3>
                            <p>
                                Мы реагируем на все отзывы наших клиентов и корректируем нашу работу
                            </p>
                        </div>
                    </div>
                </section>
                <section className='popular-products'>
                    <h3>Популярные товары</h3>
                    <div className='products__flex'>
                        {popularProducts.map((product, i) => (
                            <div className='product__wrapper' key={i}>
                                <div className='img-wrapper'>
                                    <img src={product.image} alt='icon-product' />
                                </div>
                                <div className='product__description'>
                                    <h4>
                                        {product.name}
                                    </h4>
                                    <p>
                                        Артикул: {product.sku}
                                    </p>
                                    <p>
                                        Автозапчасть: {product.quality}
                                    </p>
                                    <p>
                                        Производитель: {product.manuf}
                                    </p>
                                </div>
                                <div className='product__footer'>
                                    <p>
                                        {product.price.toFixed(2)} руб.
                                    </p>
                                    <div>
                                        <button className='decrement'></button>
                                        <p>{product.quantity}</p>
                                        <button className='increment'></button>
                                    </div>
                                    <button className='add-to-cart'></button>
                                </div>
                            </div>
                        ))}
                        <div className='mobile-products__wrapper'>
                            <Slider {...settingsForProducts}>
                                {popularProducts.map((product, i) => (
                                    <div className='product__wrapper' key={i}>
                                        <div className='img-wrapper'>
                                            <img src={product.image} alt='icon-product' />
                                        </div>
                                        <div className='product__description'>
                                            <h4>
                                                {product.name}
                                            </h4>
                                            <p>
                                                Артикул: {product.sku}
                                            </p>
                                            <p>
                                                Автозапчасть: {product.quality}
                                            </p>
                                            <p>
                                                Производитель: {product.manuf}
                                            </p>
                                        </div>
                                        <div className='product__footer'>
                                            <p>
                                                {product.price.toFixed(2)} руб.
                                            </p>
                                            <div>
                                                <button className='decrement'></button>
                                                <p>{product.quantity}</p>
                                                <button className='increment'></button>
                                            </div>
                                            <button className='add-to-cart'></button>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </section>
                <section className='news-block'>
                    <h3>
                        Последние новости
                    </h3>
                    {innerWidth >= 1024 ?
                        <Slider {...settingsForNewsBig}>
                            {news.map((item, i) => (
                                <Link to={`/news/${item.path}`} className='news-item' key={i}>
                                    <img src={item.logo} alt='news-logo' />
                                    <h4>{item.title}</h4>
                                    <p className='news-date'>{item.date}</p>
                                    <p>{item.article}</p>
                                </Link>
                            ))}
                        </Slider>
                        :
                        <Slider {...settingsForNewsSmall}>
                            {news.map((item, i) => (
                                <Link to={`/news/${item.path}`} className='news-item' key={i}>
                                    <img src={item.logo} alt='news-logo' />
                                    <h4>{item.title}</h4>
                                    <p className='news-date'>{item.date}</p>
                                    <p>{item.article}</p>
                                </Link>
                            ))}
                        </Slider>
                    }
                </section>
            </main>
        )
    }
}

export default Main;