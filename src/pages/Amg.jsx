import React from "react";
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement,
  MDBCarouselCaption,
} from "mdb-react-ui-kit";
import "../styles/Amg.css";
import Box from "@mui/material/Box";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Amg = () => {
  return (
    <div className="body">
      <MDBCarousel showIndicators showControls fade>
        <MDBCarouselInner>
          <MDBCarouselItem className="active">
            <MDBCarouselElement
              style={{ height: 620, objectFit: "cover" }}
              // className="square bg-primary rounded-pill"
              // style="width: 150px"
              src="https://wallpaperaccess.com/full/2216284.jpg"
              alt="car"
            />
            <MDBCarouselCaption></MDBCarouselCaption>
          </MDBCarouselItem>

          <MDBCarouselItem>
            <MDBCarouselElement
              style={{ height: 620, objectFit: "cover" }}
              src="https://wallpaperaccess.com/full/1431594.jpg"
              alt="car"
            />
            <MDBCarouselCaption></MDBCarouselCaption>
          </MDBCarouselItem>

          <MDBCarouselItem>
            <MDBCarouselElement
              style={{ width: "100vw", height: 620, objectFit: "cover" }}
              src="https://www.mercedes-benz.ru/passengercars/mercedes-benz-cars/models/e-class/saloon-w213-fl-copy/amg/offers/_jcr_content/backgroundimage.MQ4.12.2x.20211217071143.jpeg"
              alt="car"
            />

            <MDBCarouselCaption></MDBCarouselCaption>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>

      <div data-aos="fade-up">
        <div className="about">
          <h5 className="title">Главные особенности автомобиля</h5>
          <hr className="stick"></hr>
          <h3 className="about2">
            Мощный, как спорткар, и респектабельный, как бизнес-седан
          </h3>
          <p className="about3">
            Mercedes-<strong>AMG E-Класса</strong>
            -всегда считался эталоном мощного представительского седана.
            Обновленная модель полностью соответствует этому статусу. Автомобиль
            прекрасно подойдет и для поездок на бизнес-встречи, и для того,
            чтобы наслаждаться скоростью и спортивным стилем вождения.
          </p>
        </div>
      </div>

      <div data-aos="fade-right">
        <Box className="box">
          <img
            className="image1"
            src="https://www.mercedes-benz.ru/passengercars/mercedes-benz-cars/models/e-class/saloon-w213-fl-copy/amg/highlights/_jcr_content/contentgallerycontainer/par/contentgallery/par/contentgallerytile/image.MQ4.8.20200709103715.jpeg"
            alt="mers2"
          />

          <div>
            <img
              className="image1"
              src="https://www.mercedes-benz.ru/passengercars/mercedes-benz-cars/models/e-class/saloon-w213-fl-copy/amg/highlights/_jcr_content/contentgallerycontainer/par/contentgallery/par/contentgallerytile_497601414/image.MQ4.8.20200709103715.jpeg"
              alt="mers3"
              width={320}
            />

            <img
              className="image1"
              src="https://www.mercedes-benz.ru/passengercars/mercedes-benz-cars/models/e-class/saloon-w213-fl-copy/amg/highlights/_jcr_content/contentgallerycontainer/par/contentgallery/par/contentgallerytile_1204310717/image.MQ4.3.20200709103715.jpeg"
              alt="mers4"
            />

            {/* <h4 className="title2">Легендарный облик</h4>
            <p className="about4">сдесь описание</p> */}
          </div>
        </Box>
      </div>

      <div data-aos="fade-up">
        <div className="about">
          <h5 className="title">Дизайн экстерьера</h5>
          <hr className="stick"></hr>
          <h3 className="about2">
            Второго шанса, чтобы произвести первое впечатление, не потребуется
          </h3>
          <p className="about3">
            Mercedes-<strong>AMG E 53 4MATIC+</strong> с эмоциональным и
            динамичным дизайном привлекает внимание и производит неизгладимое
            впечатление. Полностью обновленная передняя часть придает мощному
            E-Классу еще более внушительный вид.
          </p>
        </div>
      </div>

      <div data-aos="fade-left">
        <Box className="box">
          <img
            className="image2"
            src="https://www.mercedes-benz.ru/passengercars/mercedes-benz-cars/models/e-class/saloon-w213-fl-copy/amg/exterior-design/_jcr_content/par/doubleimagecombinati/par/doubleimageelement/asset.MQ4.12.20200709103716.jpeg"
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
          <h5 className="title">Дизайн интерьера</h5>
          <hr className="stick"></hr>
          <h3 className="about2">
            Откройте для себя новые восхитительные детали
          </h3>
          <p className="about3">
            Интерьер встречает пассажиров характерной для AMG комплектацией,
            изысканными материалами отделки и информационно-развлекательной
            системой MBUX новейшего поколения. Понятие Performance еще никогда
            не было раскрыто столь четко: с рулевым колесом нового поколения AMG
            Performance вы прочувствуете, что такое точные реакции, а кнопки
            управления AMG помогут вам всегда быть предельно внимательными.
          </p>
        </div>
      </div>

      <div data-aos="fade-down-right">
        <Box className="box">
          <img
            className="image2"
            src="https://www.mercedes-benz.ru/passengercars/mercedes-benz-cars/models/e-class/saloon-w213-fl-copy/amg/interior-design/_jcr_content/par/videoimageslider/slides/videoimageslide/image.MQ4.12.20200709103716.jpeg"
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
              <li>Коропка: Автомат</li>
              <li>Обьем: 2.5 turbo V-образный двигатель 2-JZ </li>
              <li>Коропка: Автомат-типтроник</li>
              <li>Масло не жрет</li>
              <li>Торг есть</li>
            </ul>
          </div>
        </Box>
      </div>

      <div data-aos="fade-up">
        <div className="about">
          <h5 className="title">Сиденья AMG Performance</h5>
          <hr className="stick"></hr>
          <h3 className="about2">
            Опциональные передние сиденья AMG Performance выполнены из кожи
            наппа двух гармонирующих цветов.
          </h3>
          <p className="about3">
            В их дизайне отражается философия AMG, вы получите максимум эмоций
            от спортивного вождения, одновременно наслаждаясь комфортом. Внешний
            вид сидений создает образ мощного и динамичного автомобиля со
            спортивным характером.
          </p>
        </div>
      </div>

      <div data-aos="fade-down-left">
        <Box className="box">
          <img
            className="image2"
            src="https://www.mercedes-benz.ru/passengercars/mercedes-benz-cars/models/e-class/saloon-w213-fl-copy/amg/interior-design/_jcr_content/par/doubleimagecombinati/par/doubleimageelement_195470811/asset.MQ4.12.20200709103716.jpeg"
            alt="mers2"
          />
          <div>
            <h5 className="title2">Мощность от 470 квт (578 л.с)</h5>
            <h1 className="power">от 270 кВт (367 л. с.)</h1>
            <hr className="stick1"></hr>
            <h5 className="title-capacity">
              Объем багажного отделения (505 литров)
            </h5>
            <h1 className="capacity">505 литров</h1>
          </div>
        </Box>
      </div>
    </div>
  );
};

export default Amg;
