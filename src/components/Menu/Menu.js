import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// import './Menu.css';

const captions = [
    {
        id: 1,
        name: "COX'S BAZAR"
    },
    {
        id: 2,
        name: 'SAJEK'
    },
    {
        id: 3,
        name: 'SREEMONGOL'
    },
    {
        id: 4,
        name: 'SUNDARBAN'
    }


    
]

const photos = [
    {
        name: "photo 1",
        url: "https://i.ibb.co/ZcgK0hJ/coxs.png"
    },
    {
        name: "photo 2",
        url: "https://i.ibb.co/FDJpSKr/Sajek.png"
    },
    {
        name: "photo 3",
        url: "https://i.ibb.co/QcGtXZc/Sreemongol.png"
    },
    {
        name: "photo 4",
        url: "https://i.ibb.co/JCNHYJJ/sundorbon.png"
    }
];





const Menu = () => {
    
      const settings = {
        dots: true,
        fade: false,
        speed: 500,
        infinite: false,
        slidesToShow: 3,
        arrows: true,
        slidesToScroll: 1,
        swipeToSlide: true,
        centerPadding: "5px",
        className: 'slides',
        focusOnSelect: true,
        adaptiveHeight: true
    }
    return (
        <div style={{padding: 24}} >
            <Slider {...settings}>
                {photos.map((photo) => {
                    return(
                        <div >
                            <img width='80%' src={photo.url} alt=""/>
                            
                        </div>
                    )
                })}
                {captions.map((caption) => {
                    return(
                    <h2>{caption.name}</h2>
                    )

                })}
                

            </Slider>
        </div>
    );
};

export default Menu;