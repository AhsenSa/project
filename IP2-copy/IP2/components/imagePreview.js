import React, { useState } from "react";
import ItemsCarousel from "react-items-carousel";
import { Container, Paper, Card, IconButton } from '@mui/material';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';



export default function ImagePreview() {
  const [active, setaAtive] = useState(0);
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;
  const gridBottomStyle = { position: 'absolute ', zIndex: 1050, height: '145px', bottom: '2px', right: '0px' };
  const paperStyle = { padding: '0px 50px 0px 50px', backgroundColor: 'transparent' }
  const buttonStyle = { color: 'black', size: 'large' }


  return (
    <Container maxWidth='xl' style={gridBottomStyle}  >
      <Paper elevation={1} style={paperStyle}>

        <ItemsCarousel
          requestToChangeActive={setActiveItemIndex}
          activeItemIndex={activeItemIndex}
          numberOfCards={9}
          gutter={8}
          leftChevron={<IconButton style={buttonStyle}><KeyboardDoubleArrowLeftIcon ></KeyboardDoubleArrowLeftIcon></IconButton>}
          rightChevron={<IconButton style={buttonStyle}><KeyboardDoubleArrowRightIcon ></KeyboardDoubleArrowRightIcon></IconButton>}
          outsideChevron
          chevronWidth={chevronWidth}
          infiniteLoop={true}

        >

          {Array.from(new Array(10)).map((_, i) => (
            <Card
              key={i}
              style={{
                height: 145,
                background: "url(https://placeimg.com/380/200/nature)",
                backgroundSize: 'cover',

              }}
            />
          ))}

        </ItemsCarousel>
      </Paper>
    </Container>
  );
};