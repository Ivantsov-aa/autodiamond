import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/header";
import Main from "./components/main";
import Footer from "./components/footer";

import Catalog from "./components/catalog/catalog";
import BrandCatalog from "./components/catalog/brand-catalog";
import ModelCatalogWrapper from "./components/catalog/model-catalog-wrapper";
import ProductCart from "./components/catalog/product-cart";

import Contacts from "./components/contacts/contacts";
import TermsOfUse from "./components/terms-of-use/terms-of-use";
import NewsPage from "./components/news/news";

class Wrapper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productForCart: []
        }
    }

    setProductForCart = product => {
        this.setState({ productForCart: product });
    }

    render() {
        const { headerNav, stores, footerNav, isLogged, authUser, news, handleLogOut, location } = this.props;
        const { productForCart } = this.state;

        return (
            <>
                <Header headerNav={headerNav} isLogged={isLogged} authUser={authUser} handleLogOut={handleLogOut} location={location} />
                <Routes>
                    <Route path='/' element={<Main {...this.props} />}></Route>
                    <Route path='/catalog' element={<Catalog {...this.props} setChosenBrand={this.setChosenBrand} />} />
                    <Route path='/catalog/:brand' element={<BrandCatalog {...this.props} />} />
                    <Route path='/catalog/:brand/:model' element={<ModelCatalogWrapper {...this.props} setProductForCart={this.setProductForCart} />} />
                    <Route path='/catalog/:brand/:model/:group/:category/:article' element={<ProductCart {...this.props} setProductForCart={this.setProductForCart} productForCart={productForCart} />} />
                    <Route path='/contacts' element={<Contacts stores={stores} />} />
                    <Route path='/guarantee' element={<TermsOfUse />} />
                    <Route path='/news/*' element={<NewsPage news={news} />} />
                </Routes>
                <Footer footerNav={footerNav} />
            </>
        )
    }
}

export default Wrapper;