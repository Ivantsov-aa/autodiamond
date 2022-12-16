import React from "react";
import { YMaps, Map, Clusterer, Placemark } from "react-yandex-maps";
import Accordion from "./accordion-contacts";

class Contacts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allStores: [],
            chosenCity: [],
            center: [47.629989, 43.146086],
            zoom: 7,
            innerWidth: null
        }
    }

    componentDidMount() {
        this.setState({ allStores: this.props.stores });
        window.addEventListener('resize', this.updateWindowWidth);
    }

    updateWindowWidth = () => {
        this.setState({ innerWidth: window.innerWidth });
    }

    handleCityClick = e => {
        const { value } = e.target.dataset;
        const { center } = e.target.dataset;
        const { zoom } = e.target.dataset;

        const mapZoom = parseFloat(zoom);
        const mapCenter = center.split(',').map(item => parseFloat(item));

        const stores = this.state.allStores.map(store => {
            if (store.value === value) {
                return { ...store, selected: !store.selected };
            } else {
                return { ...store, selected: false }
            }
        })

        const chosenCity = stores.filter(store => store.selected);

        const chosenCityValue = stores.map(store => store.selected ? store.value : '').join('');

        this.setState({
            allStores: stores,
            chosenCity: chosenCity,
            center: chosenCityValue ? mapCenter : [47.629989, 43.146086],
            zoom: chosenCityValue ? mapZoom : 7
        });
    }



    render() {
        const { allStores, chosenCity, center, zoom, innerWidth } = this.state;

        const mapSettings = {
            center: center,
            zoom: zoom
        };

        const mapSettingsLaptop = {
            center: center,
            zoom: zoom - 1
        }

        const mapSettingsMobile = {
            center: center,
            zoom: zoom - 2
        }


        return (
            <section className='contacts'>
                <div className='contacts-wrapper'>
                    <div className='contacts-menu'>
                        {allStores.map((store, i) => (
                            <button className={store.selected ? 'active' : ''} onClick={this.handleCityClick} data-value={store.value} data-zoom={store.zoom} data-center={store.mapCenter} key={i}>г. {store.city}</button>
                        ))}
                    </div>
                    {allStores.map((store, i) => (
                        store.selected &&
                        <div className='addresses-wrapper' key={i}>
                            {store.shops.map((shop, i) => (
                                <div className='addresses' key={i}>
                                    <p>{shop.title}</p>
                                    <p>{shop.phone}</p>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
                <div className='contacts-wrapper-mobile'>
                    {allStores.map((store, i) => (
                        <Accordion
                            city={store.city}
                            value={store.value}
                            mapCenter={store.mapCenter}
                            zoom={store.zoom}
                            selected={store.selected}
                            shops={store.shops}
                            handleCityClick={this.handleCityClick}
                            key={i}
                        />
                    ))}
                </div>
                <div className='map'>
                    {(innerWidth >= 1920 &&
                        <YMaps>
                            <Map
                                state={mapSettings}
                                width='100%' height='100%'
                            >
                                <Clusterer
                                    options={{
                                        preset: 'islands#invertedVioletClusterIcons',
                                        groupByCoordinates: false
                                    }}
                                >
                                    {chosenCity.length > 0 ?
                                        chosenCity.map(store => (
                                            store.shops.map(shop => (
                                                <Placemark
                                                    key={shop.id}
                                                    geometry={shop.coords}
                                                    modules={[
                                                        "geoObject.addon.balloon"
                                                    ]}
                                                    properties={{
                                                        balloonContent: `
                                                        <h2>${store.city}</h2>
                                                        <h3>${shop.title}</h3>
                                                        <p>${shop.phone}</p>
                                                    `
                                                    }}
                                                />
                                            ))
                                        ))
                                        :
                                        allStores.map(store => (
                                            store.shops.map(shop => (
                                                <Placemark
                                                    key={shop.id}
                                                    geometry={shop.coords}
                                                    modules={[
                                                        "geoObject.addon.balloon"
                                                    ]}
                                                    properties={{
                                                        balloonContent: `
                                                    <h2>${store.city}</h2>
                                                    <h3>${shop.title}</h3>
                                                    <p>${shop.phone}</p>
                                                `
                                                    }}
                                                />
                                            ))
                                        ))
                                    }
                                </Clusterer>
                            </Map>
                        </YMaps>)
                        ||
                        (innerWidth >= 1024 && innerWidth < 1920 &&
                        <YMaps>
                            <Map
                                state={mapSettingsLaptop}
                                width='100%' height='100%'
                            >
                                <Clusterer
                                    options={{
                                        preset: 'islands#invertedVioletClusterIcons',
                                        groupByCoordinates: false
                                    }}
                                >
                                    {chosenCity.length > 0 ?
                                        chosenCity.map(store => (
                                            store.shops.map(shop => (
                                                <Placemark
                                                    key={shop.id}
                                                    geometry={shop.coords}
                                                    modules={[
                                                        "geoObject.addon.balloon"
                                                    ]}
                                                    properties={{
                                                        balloonContent: `
                                                        <h2>${store.city}</h2>
                                                        <h3>${shop.title}</h3>
                                                        <p>${shop.phone}</p>
                                                    `
                                                    }}
                                                />
                                            ))
                                        ))
                                        :
                                        allStores.map(store => (
                                            store.shops.map(shop => (
                                                <Placemark
                                                    key={shop.id}
                                                    geometry={shop.coords}
                                                    modules={[
                                                        "geoObject.addon.balloon"
                                                    ]}
                                                    properties={{
                                                        balloonContent: `
                                                    <h2>${store.city}</h2>
                                                    <h3>${shop.title}</h3>
                                                    <p>${shop.phone}</p>
                                                `
                                                    }}
                                                />
                                            ))
                                        ))
                                    }
                                </Clusterer>
                            </Map>
                        </YMaps>)
                        ||
                        (innerWidth < 1024 &&
                        <YMaps>
                            <Map
                                state={mapSettingsMobile}
                                width='100%' height='100%'
                            >
                                <Clusterer
                                    options={{
                                        preset: 'islands#invertedVioletClusterIcons',
                                        groupByCoordinates: false
                                    }}
                                >
                                    {chosenCity.length > 0 ?
                                        chosenCity.map(store => (
                                            store.shops.map(shop => (
                                                <Placemark
                                                    key={shop.id}
                                                    geometry={shop.coords}
                                                    modules={[
                                                        "geoObject.addon.balloon"
                                                    ]}
                                                    properties={{
                                                        balloonContent: `
                                                        <h2>${store.city}</h2>
                                                        <h3>${shop.title}</h3>
                                                        <p>${shop.phone}</p>
                                                    `
                                                    }}
                                                />
                                            ))
                                        ))
                                        :
                                        allStores.map(store => (
                                            store.shops.map(shop => (
                                                <Placemark
                                                    key={shop.id}
                                                    geometry={shop.coords}
                                                    modules={[
                                                        "geoObject.addon.balloon"
                                                    ]}
                                                    properties={{
                                                        balloonContent: `
                                                    <h2>${store.city}</h2>
                                                    <h3>${shop.title}</h3>
                                                    <p>${shop.phone}</p>
                                                `
                                                    }}
                                                />
                                            ))
                                        ))
                                    }
                                </Clusterer>
                            </Map>
                        </YMaps>)
                    }
                </div>
            </section>
        )
    }
}

export default Contacts;