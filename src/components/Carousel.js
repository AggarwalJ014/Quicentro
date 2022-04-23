import React from "react";

export default function Carousel() {
  return (
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-interval="1000" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
 
    <div className="carousel-inner">
          <div className="carousel-item active" >
            <img
              decoding="async"
              src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/http://quicentro.xyz/quicentro/wp-content/uploads/2021/02/image042.png"
              data-src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/http://quicentro.xyz/quicentro/wp-content/uploads/2021/02/image042.png"
              className="d-block w-100"
              alt="ESENCIALES PARA UN VERANO INOLVIDABLE EN CASA"
            />
          </div>
          <div className="carousel-item">
            <img
              decoding="async"
              src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/http://quicentro.xyz/quicentro/wp-content/uploads/2021/02/image037.jpg"
              data-src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/http://quicentro.xyz/quicentro/wp-content/uploads/2021/02/image037.jpg"
              className="d-block w-100"
              alt="SACOS INFALTABLES PARA ESTA TEMPORADA DE FRÍO"
            />
          </div>
          <div className="carousel-item">
            <img
              decoding="async"
              src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/http://quicentro.xyz/quicentro/wp-content/uploads/2021/02/image032.png"
              data-src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/http://quicentro.xyz/quicentro/wp-content/uploads/2021/02/image032.png"
              className="d-block w-100"
              alt="PRENDAS ANTIFLUIDOS PARA NO PERDER EL ESTILO"
            />
          </div>
        </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
    

  );

}
