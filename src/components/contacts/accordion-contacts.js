import React from 'react';

class Accordion extends React.Component {
    render() {
        const { city, value, mapCenter, zoom, selected, shops, handleCityClick } = this.props;
        return (
            <div className='contacts-accordion'>
                <button className={selected ? 'active' : ''} onClick={e => handleCityClick(e)} data-value={value} data-zoom={zoom} data-center={mapCenter}>г. {city}</button>
                {selected && shops.map((shop, i) => (
                    <div className='addresses' key={i}>
                        <p>{shop.title}</p>
                        <p>{shop.phone}</p>
                    </div>
                ))}
            </div>
        )
    }

}

export default Accordion;