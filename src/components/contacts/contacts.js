import React from "react";
import { YMaps, Map, Clusterer, Placemark } from "react-yandex-maps";

class Contacts extends React.Component {

    render() {
        const mapSettings = {
            center: [47.629989, 43.146086],
            zoom: 7
        };

        const { stores } = this.props;

        const storesVolgograd = stores.filter(store => store.city === 'Волгоград');
        const storesVolojskiy = stores.filter(store => store.city === 'Воложский');
        const storesAstrahan = stores.filter(store => store.city === 'Астрахань');
        const storesRostov = stores.filter(store => store.city === 'Ростов');

        return (
            <section className='contacts'>
                <div>
                    <h2>г. Волгоград</h2>
                    <div className='contacts-wrapper'>
                        {storesVolgograd.map((store, i) => (
                            <div key={i}>
                                <p>{store.title}</p>
                                <p>{store.phone}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='contacts-footer'>
                    <div>
                        <h2>г. Воложский</h2>
                        <div className='contacts-wrapper'>
                            {storesVolojskiy.map((store, i) => (
                                <div key={i}>
                                    <p>{store.title}</p>
                                    <p>Телефон: {store.phone}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h2>г. Астрахань</h2>
                        <div className='contacts-wrapper'>
                            {storesAstrahan.map((store, i) => (
                                <div key={i}>
                                    <p>{store.title}</p>
                                    <p>{store.phone}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h2>г. Ростов - на - Дону</h2>
                        <div className='contacts-wrapper'>
                            {storesRostov.map((store, i) => (
                                <div key={i}>
                                    <p>{store.title}</p>
                                    <p>{store.phone}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <YMaps>
                    <Map defaultState={mapSettings} width='1710px' height='638px'>
                        <Clusterer
                            options={{
                                preset: 'islands#invertedVioletClusterIcons',
                                groupByCoordinates: false
                            }}
                        >
                            {stores.map((store, i) => (
                                <Placemark
                                    key={i}
                                    geometry={store.coords}
                                    modules={[
                                        "geoObject.addon.balloon"
                                    ]}
                                    properties={{
                                        balloonContent: `
                                            <h2>${store.city}</h2>
                                            <h3>${store.title}</h3>
                                            <p>${store.phone}</p>
                                        `
                                    }}
                                />
                            ))}
                        </Clusterer>
                    </Map>
                </YMaps>
            </section>
        )
    }
}

export default Contacts;