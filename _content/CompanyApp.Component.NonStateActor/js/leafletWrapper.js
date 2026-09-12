// leafletWrapper.js - Lightweight Leaflet wrapper for NonStateActor GIS pages
let map;
let drawControl;
let drawnItems;
let layerGroups = {};
let layerControl;

export function createMap(elementId, lat, lng, zoom) {
    if (map) {
        map.remove();
    }
    
    map = L.map(elementId).setView([lat, lng], zoom);

    const osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '(c) OpenStreetMap contributors'
    }).addTo(map);

    const satellite = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EBP, and the GIS User Community'
    });

    const baseMaps = {
        "OpenStreetMap": osm,
        "Satellite": satellite
    };

    layerControl = L.control.layers(baseMaps, {}).addTo(map);

    return map;
}

export function createLayerGroup(name) {
    if (layerGroups[name]) {
        map.removeLayer(layerGroups[name]);
        layerControl.removeLayer(layerGroups[name]);
    }
    layerGroups[name] = L.layerGroup().addTo(map);
    layerControl.addOverlay(layerGroups[name], name);
    return true;
}

export function addMarkerToGroup(groupName, lat, lng, popupText, options = {}) {
    if (!layerGroups[groupName]) {
        createLayerGroup(groupName);
    }
    
    // Custom icon support if needed
    let markerOptions = { ...options };
    if (options.color) {
        // Simple circle marker as a custom "icon" for performance indicators
        const marker = L.circleMarker([lat, lng], {
            radius: options.radius || 8,
            fillColor: options.color,
            color: "#fff",
            weight: 2,
            opacity: 1,
            fillOpacity: 0.8
        }).addTo(layerGroups[groupName]);
        
        if (popupText) {
            marker.bindPopup(popupText);
        }
        return true;
    }

    const marker = L.marker([lat, lng], markerOptions).addTo(layerGroups[groupName]);
    if (popupText) {
        marker.bindPopup(popupText);
    }
    return true;
}

export function addMarker(lat, lng, popupText, options = {}) {
    const marker = L.marker([lat, lng], options).addTo(map);
    if (popupText) {
        marker.bindPopup(popupText);
    }
    return marker;
}

export function flyTo(lat, lng, zoom) {
    if (map) {
        map.flyTo([lat, lng], zoom, {
            animate: true,
            duration: 1.5
        });
    }
}

export function addCircle(lat, lng, radius, options = {}) {
    return L.circle([lat, lng], {
        radius: radius,
        color: options.color || 'red',
        fillColor: options.fillColor || '#f03',
        fillOpacity: options.fillOpacity || 0.4,
        weight: options.weight || 2,
        ...options
    }).addTo(map);
}

export function addPolygon(latLngs, options = {}) {
    return L.polygon(latLngs, {
        color: options.color || '#2b6cb0',
        fillColor: options.fillColor || options.color || '#2b6cb0',
        fillOpacity: options.fillOpacity || 0.3,
        weight: options.weight || 2,
        ...options
    }).addTo(map);
}

export function addGeoJson(geoJsonData, options = {}) {
    return L.geoJSON(geoJsonData, {
        style: options.style || { color: '#2b6cb0' },
        ...options
    }).addTo(map);
}

export function clearMap() {
    if (!map) return;
    
    // Clear custom layer groups
    for (let name in layerGroups) {
        layerGroups[name].clearLayers();
    }
    
    // Clear loose layers
    map.eachLayer(layer => {
        if (!layer._url && layer !== drawnItems && !Object.values(layerGroups).includes(layer)) {
            map.removeLayer(layer);
        }
    });
}

export function setView(lat, lng, zoom) {
    if (map) {
        map.setView([lat, lng], zoom);
    }
}

export function fitBounds(bounds) {
    if (map) {
        map.fitBounds(bounds);
    }
}

export function initDrawTools(lineColor = '#2b6cb0', fillColor = '#2b6cb0', lineWeight = 2) {
    if (drawnItems) {
        map.removeLayer(drawnItems);
    }

    drawnItems = L.featureGroup().addTo(map);

    if (drawControl) {
        map.removeControl(drawControl);
    }

    drawControl = new L.Control.Draw({
        position: 'topright',
        draw: {
            polygon: {
                shapeOptions: {
                    color: lineColor,
                    fillColor: fillColor,
                    weight: lineWeight,
                    fillOpacity: 0.2
                }
            },
            rectangle: {
                shapeOptions: {
                    color: lineColor,
                    fillColor: fillColor,
                    weight: lineWeight,
                    fillOpacity: 0.2
                }
            },
            polyline: false,
            circle: false,
            marker: false,
            circlemarker: false
        },
        edit: {
            featureGroup: drawnItems
        }
    }).addTo(map);

    map.off(L.Draw.Event.CREATED);
    map.on(L.Draw.Event.CREATED, function (e) {
        drawnItems.addLayer(e.layer);
    });
}

export function getDrawnGeoJson() {
    if (!drawnItems) {
        return JSON.stringify({ type: 'FeatureCollection', features: [] });
    }
    return JSON.stringify(drawnItems.toGeoJSON());
}

export function addDrawnFromGeoJson(geoJson) {
    if (!drawnItems) {
        drawnItems = L.featureGroup().addTo(map);
    }
    L.geoJSON(geoJson, {
        onEachFeature: function (feature, layer) {
            drawnItems.addLayer(layer);
        }
    });
}
