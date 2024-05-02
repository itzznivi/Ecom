import React from "react";
import '../styles/Homepage.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import Carousel from "react-material-ui-carousel";
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Paper, Box } from "@mui/material";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

const images = [
  "https://img.faballey.com/images/banner/de852352-e6d6-4260-a3f1-97354cf96636.jpg",
  "https://img.faballey.com/images/banner/74c0cf0c-2cdb-4cfb-ab07-adff3a548d9e.jpg",
  "https://s7ap1.scene7.com/is/image/adityabirlafashion/F21-HB-Men-799-D?resMode=sharp2&wid=1440&hei=597",
  "https://img.faballey.com/images/banner/df7ce42b-a841-40e6-838e-b0fca5ee2bfe.jpg",
  "https://img.faballey.com/images/banner/f859fea1-6f61-480e-b0dc-41c5cc4770b5.jpg",
];
const itemData = [
    {
      img: 'https://assets.ajio.com/medias/sys_master/root/20240129/Rilc/65b7a89d8cdf1e0df5d5fb38/-473Wx593H-467019348-black-MODEL.jpg',
      title: 'Bed',
    },
    {
        img:'https://content.asos-media.com/-/media/homepages/mw/2024/april/02-us/caro-assets/mw_suits.jpg',
       title: 'Books',
    },
    {
      img: 'https://assets.ajio.com/medias/sys_master/root/20230805/uXTn/64cda354a9b42d15c98e5535/-473Wx593H-466421641-coral-MODEL.jpg',
      title: 'Sink',
    },
    {
        img:'https://assets.ajio.com/medias/sys_master/root/20221220/jIp3/63a1d598aeb269659cf9ea83/-473Wx593H-469412415-white-MODEL.jpg',
       title: 'Kitchen',
    },
    {
        img:'https://assets.ajio.com/medias/sys_master/root/20240207/kJli/65c305f516fd2c6e6ae1edfe/-473Wx593H-467039652-green-MODEL.jpg',
       title: 'Blinds',
    },
    {
        img:'https://assets.ajio.com/medias/sys_master/root/20240407/gqHA/6612c9af16fd2c6e6aa2e93d/-473Wx593H-467235611-olive-MODEL.jpg',
        title: 'Chairs',
    },
    {
        img:'https://assets.ajio.com/medias/sys_master/root/20230810/xNmc/64d4e650a9b42d15c9a0f50c/-473Wx593H-466442686-wine-MODEL.jpg',
       title: 'Laptop',
    },
    {
        img:'https://assets.ajio.com/medias/sys_master/root/20221102/UqYN/6362490ef997ddfdbd510a1f/-473Wx593H-443002562-jetblack-MODEL.jpg',
        title: 'Doors',
    },
    {
        img:'https://img.faballey.com/images/banner/8c634457-e989-404f-9fb0-3fa23419d481.jpg',
       title: 'Coffee',
    },
    {
        img:'https://assets.ajio.com/medias/sys_master/root/20230624/e4ea/649663cfeebac147fcf20d64/-473Wx593H-465324816-tan-MODEL.jpg',
        title: 'Storage',
    },
    {
        img:'https://img.faballey.com/images/product/DRS06600Z/1.JPG',
       title: 'Candle',
    },
    {
        img:'https://img.faballey.com/images/banner/fa9b469d-4738-44a7-ae24-02246efacd7f.jpg',
        title: 'Candle',
    },
 
  ];
export default function Homepage() {
  return (
    <div>
      <div className="carousal">
        <Box sx={{ maxWidth: 4000, flexGrow: 1, margin: "auto", mt: 0 }}>
          <Carousel>
            {images.map((image, i) => (
              <Paper key={i} elevation={10}>
                <Box
                  component="img"
                  sx={{
                    width: "100%",
                    height: "600px",
                    objectFit: "cover",
                  }}
                  src={image}
                  alt={`Slide ${i}`}
                />
              </Paper>
            ))}
          </Carousel>
        </Box>
      </div>
      <div className="image-list">
        <h1 className="text text-5xl"style={{marginLeft:"450px", fontStyle:"italic", paddingBottom:"30px", color:"purple", fontWeight:"bold"}}>VIEW OUR LATEST COLLECTIONS</h1>
        <Box sx={{ width: 1000, height: 550, marginLeft: 30, overflowY: 'scroll' }}>
          <ImageList variant="woven" cols={3} gap={15}>
            {itemData.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  src={`${item.img}?w=248&fit=crop&auto=format`}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
        
      </div>
      
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2 style={{marginLeft:"100px", fontSize:"30px"}}>LARZO</h2>
           
        </div>
        <div className="footer-section-links">
          <h2>Quick Links</h2>
          <YouTubeIcon/>  <XIcon/>   <InstagramIcon/><FacebookIcon/>
 
        </div>
        <div  className="footer-section-contact">
          <h2>Contact Us</h2>
          <p>
            123 Street, City, Country
            <br />
            contact@example.com
            <br />
            +123 456 789
          </p>
 
        </div>
      </div>
      <div className="footer-bottom">
        &copy; 2024 LARZO.
      </div>
    </footer>
  
    </div>
  );
}
