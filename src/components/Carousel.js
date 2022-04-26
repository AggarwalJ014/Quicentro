import React, { useState } from "react";

export default function Carousel() {


  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };
  const images = [
    {
      src: 'https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/http://quicentro.xyz/quicentro/wp-content/uploads/2021/02/image042.png',
      datasrc:
        'https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/http://quicentro.xyz/quicentro/wp-content/uploads/2021/02/image042.png',
    },
    {
      src: 'https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/http://quicentro.xyz/quicentro/wp-content/uploads/2021/02/image037.jpg',
      datasrc:
        'https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/http://quicentro.xyz/quicentro/wp-content/uploads/2021/02/image032.png',
    },
    {
      src: 'https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/http://quicentro.xyz/quicentro/wp-content/uploads/2021/02/image032.png',
      datasrc:
        'https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/http://quicentro.xyz/quicentro/wp-content/uploads/2021/02/image032.png',
    },

  ];
  return (
    <div style={{ marginTop: '70px' }} id="carouselExampleIndicators" class="carousel slide" data-bs-interval="1000" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>

      <div className="carousel-inner" index={activeStep}
        onChangeIndex={handleStepChange}>
        {images.map((item) => {
          return (

            <div className="carousel-item active" >
              <img
                decoding="async"
                src={item.src}
                data-src={item.datasrc}
                className="d-block w-100"
                alt="ESENCIALES PARA UN VERANO INOLVIDABLE EN CASA"
              />
            </div>
          )
        })}

        
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden" onClick={handleBack} disabled={activeStep === 0}>Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden" onClick={handleNext} disabled={activeStep === maxSteps - 1}>Next</span>
      </button>
    </div>


  );

}
