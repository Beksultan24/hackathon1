import React from "react";
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement,
  MDBCarouselCaption,
} from "mdb-react-ui-kit";
import "../styles/MayBach.css";
import Box from "@mui/material/Box";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const MayBach = () => {
  return (
    <div className="body">
      {/* Beks */}
      <MDBCarousel showIndicators showControls fade>
        <MDBCarouselInner>
          <MDBCarouselItem className="active">
            <MDBCarouselElement
              style={{ height: 620, objectFit: "cover" }}
              // className="square bg-primary rounded-pill"
              // style="width: 150px"
              src="https://www.mercedes-benz.ru/passengercars/mercedes-benz-cars/models/s-class/mercedes-maybach-z223/design/exterior-gallery/_jcr_content/contentgallerycontainer/par/contentgallery/par/contentgallerytile/image.MQ4.0.2x.20211129144443.jpeg"
              alt="car"
            />
            <MDBCarouselCaption></MDBCarouselCaption>
          </MDBCarouselItem>

          <MDBCarouselItem>
            <MDBCarouselElement
              style={{ height: 620, objectFit: "cover" }}
              src="https://www.mercedes-benz.ru/passengercars/mercedes-benz-cars/models/s-class/mercedes-maybach-z223/design/exterior-gallery/_jcr_content/contentgallerycontainer/par/contentgallery/par/contentgallerytile_1731972194/image.MQ4.0.2x.20211126094554.jpeg"
              alt="car"
            />
            <MDBCarouselCaption></MDBCarouselCaption>
          </MDBCarouselItem>

          <MDBCarouselItem>
            <MDBCarouselElement
              style={{ height: 620, objectFit: "cover" }}
              src="https://www.mercedes-benz.ru/passengercars/mercedes-benz-cars/models/s-class/mercedes-maybach-z223/design/exterior-gallery/_jcr_content/contentgallerycontainer/par/contentgallery/par/contentgallerytile_1156391696/image.MQ4.0.2x.20211126094401.jpeg"
              alt="car"
            />
            <MDBCarouselCaption></MDBCarouselCaption>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
      {/* Beks */}

      <div data-aos="fade-up">
        <div className="about">
          <h5 className="title">Главные особенности автомобиля</h5>
          <hr className="stick"></hr>
          <h3 className="about2">
            Наши амбиции – удивить вас и вызвать восхищение
          </h3>
          <p className="about3">
            Новый <strong>Mercedes-Maybach S-Класса</strong> – воплощение
            ультимативной роскоши. Превосходные материалы, высочайшее качество
            обработки деталей, непревзойденный комфорт, инновационные технологии
            и талантливый личный помощник – интеллектуальная
            информационно-развлекательная система MBUX – откроют для вас новую
            эру владения роскошным автомобилем класса люкс.
          </p>
        </div>
      </div>

      <div data-aos="fade-right">
        <Box style={{ objectFit: "contain" }} className="box">
          <img
            style={{ objectFit: "contain" }}
            className="image2"
            src="https://www.mercedes-benz.ru/passengercars/mercedes-benz-cars/models/s-class/mercedes-maybach-z223/explore/100-years/_jcr_content/par/productinfotextimage/media2/slides/videoimageslide/image.MQ4.7.2x.20211202005712.jpeg"
            alt="mers2"
          />
          <div style={{ height: "100%" }}>
            <h4 className="title2">Легендарный облик</h4>
            <p className="about4">
              В 2021 году Maybach отметил столетие со дня выпуска первого
              серийного автомобиля и представил новую модель седана –
              Mercedes-Maybach S-Класс. В разработке рекламной кампании для
              этого автомобиля принял участие всемирно известный испанский
              художник Игнаси Монреаль. Рассказывая о процессе работы над
              кампанией под слоганом «Эпоха легенды продолжается», Монреаль
              отмечает, что он стремился придать Mercedes-Maybach по-настоящему
              легендарный облик.
            </p>
          </div>
        </Box>
      </div>

      <div data-aos="fade-up">
        <div className="about">
          <h5 className="title">Комфорт</h5>
          <hr className="stick"></hr>
          <h3 className="about2">
            Обволакивающий комфорт и идеальное место уединения
          </h3>
          <p className="about3">
            Эксклюзивные материалы, изысканная роскошь задней части салона и
            инновационные технологии соответствуют самым строгим требованиям.
          </p>
        </div>
      </div>

      <div data-aos="fade-left">
        <Box className="box">
          <img
            style={{ objectFit: "contain" }}
            className="image2"
            src="https://www.mercedes-benz.ru/passengercars/mercedes-benz-cars/models/s-class/mercedes-maybach-z223/explore/comfort-teaser/_jcr_content/par/productinfotextimage/media2/slides/videoimageslide/image.MQ4.7.2x.20210511105651.jpeg"
            alt="mers2"
          />
          <div>
            <h4 className="title2">Основные элементы комфорта:</h4>

            <ul className="liki">
              <li>Цифровая передняя панель</li>
              <li>
                Уникальный механизм подачи ремня безопасности в задней части
                салона
              </li>
              <li>Комфортные задние двери</li>
              <li>Активная функция подавления посторонних шумов</li>
              <li>Режим движения Mercedes-Maybach</li>
            </ul>
          </div>
        </Box>
      </div>

      <div data-aos="fade-up">
        <div className="about">
          <h5 className="title">Безопасность</h5>
          <hr className="stick"></hr>
          <h3 className="about2">Мощный аргумент в пользу вашей уверенности</h3>
          <p className="about3">
            Инновационные комплексные технологии заслуживают вашего доверия: они
            заранее просчитывают практически любую дорожную ситуацию и
            максимально оберегают вас.
          </p>
        </div>
      </div>

      <div data-aos="fade-down-right">
        <Box className="box">
          <img
            style={{ objectFit: "contain" }}
            className="image2"
            src="https://www.mercedes-benz.ru/passengercars/mercedes-benz-cars/models/s-class/mercedes-maybach-z223/explore/safety-teaser/_jcr_content/par/productinfotextimage/media2/slides/videoimageslide/image.MQ4.7.2x.20211129150531.jpeg"
            alt="mers2"
          />
          <div>
            <h4 className="title2">В ответе за вашу безопасность:</h4>

            <ul className="liki">
              <li>Пакет вспомогательных систем</li>
              <li>
                <strong>DIGITAL LIGHT</strong>
              </li>
              <li>Подушки безопасности в задней части салона</li>
            </ul>
          </div>
        </Box>
      </div>

      <div data-aos="fade-up">
        <div className="about">
          <h5 className="title">Спецификации</h5>
          <hr className="stick"></hr>
          <h3 className="about2">
            Сравните двигатели, которые предлагаются для нового Mercedes-Maybach
            S-Класса.
          </h3>
          <p className="about3">
            Mercedes-Maybach S-Класса претендует на особый масштаб силы и
            эффективности: инновационная технология привода трансформирует
            мощность в культуру движения.
          </p>
        </div>
      </div>

      <div data-aos="fade-down-left">
        <Box className="box">
          <img
            style={{ objectFit: "contain" }}
            className="image2"
            src="https://www.mercedes-benz.ru/passengercars/mercedes-benz-cars/models/s-class/mercedes-maybach-z223/explore/specifications-teaser/_jcr_content/par/imagenumbercombinati/media/videoimageslide/image.MQ4.8.2x.20211129150714.jpeg"
            alt="mers2"
          />
          <div>
            <h5 className="title2">Мощность</h5>
            <h1 className="power">от 270 кВт (367 л. с.)</h1>
            <hr className="stick1"></hr>
            <h5 className="title-capacity">Объем багажного отделения</h5>
            <h1 className="capacity">505 литров</h1>
          </div>
        </Box>
      </div>
    </div>
  );
};

export default MayBach;
