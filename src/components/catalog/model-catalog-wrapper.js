import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ModelCatalog from "./model-catalog";

const ModelCatalogWrapper = ({ url, catalog, location }) => {
    const [currentCatalog, setCurrentCatalog] = useState(null);

    useEffect(() => {
        if (location.pathname && catalog.length > 0) {
            const currentLocation = location.pathname.split('/').pop().split('-').join(' ');

            const currentCatalog = catalog.length > 0 && catalog.map(item => {
                return item.models && { ...item, models: item.models.filter(model => model.toLowerCase() === currentLocation.toLowerCase())[0] }
            }).filter(item => item.models)[0];

            setCurrentCatalog(currentCatalog)
        }
    }, [location.pathname, catalog])

    return (
        currentCatalog && <ModelCatalog url={url} catalog={catalog} location={location} currentCatalog={currentCatalog} setCurrentCatalog={setCurrentCatalog} />
    )
}

export default ModelCatalogWrapper;