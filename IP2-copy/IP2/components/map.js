import { MapContainer, TileLayer, Marker, Popup, useMap} from 'react-leaflet'
import { GeoSearchControl, OpenStreetMapProvider } from "leaflet-geosearch";
import React, { useEffect } from "react";
import "leaflet/dist/leaflet.css";
import "leaflet-geosearch/dist/geosearch.css";
import icon from "./constants";
import { Grid, Paper, Container, Box } from '@mui/material';
import image from "../asset/background5.jpg";
import AccountMenu from './accountMenu';
import ImagePreview from './imagePreview';
import SwipeableTemporaryDrawer from './sildeDialog';


function LeafletgeoSearch() {
  const map = useMap();
  useEffect(() => {
    const provider = new OpenStreetMapProvider();

    const searchControl = new GeoSearchControl({
      provider,
      marker: {
        icon
      }
    });

    map.addControl(searchControl);

    return () => map.removeControl(searchControl);
  }, []);

  return null;
}

const MapDraw = function mapDraw() {

  function handleClick(e) {
    console.log('parent');
     }

     function handleChildClick(e) {
      e.stopPropagation();
      console.log('child');
       }
  const center = [48.7248376347639, 9.399241775285896];
  const avatarStyle = { height: '50px', width: '50px', margin: '14px 0 0 128px', padding: 3, backgroundImage: `url(${image})` };
  const gridStyle = { position: 'sticky', zIndex: 1000, height: '100px', width: '100px', float: 'right', }


  return (
    
    <MapContainer  onClick={handleClick} center={center} zoom={10}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={center} icon={icon}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
      <LeafletgeoSearch />
      <SwipeableTemporaryDrawer>
      </SwipeableTemporaryDrawer>

      <Grid style={gridStyle}>
        <AccountMenu></AccountMenu>
      </Grid>
      <ImagePreview></ImagePreview>
    </MapContainer>

  );
}

export default MapDraw;