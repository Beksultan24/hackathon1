import React from "react";
import { MDBFooter, MDBContainer, MDBCol, MDBRow } from "mdb-react-ui-kit";
import { MDBBtn } from "mdb-react-ui-kit";
import { MDBIcon } from "mdb-react-ui-kit";
import { Box } from "@mui/system";

import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";

export default function App() {
  return (
    <MDBFooter className="footer bg-black primary-dark text-white text-center text-md-start">
      <MDBContainer className="p-4">
        <MDBRow>
          <MDBContainer className="p-2 pb-0">
            <section className="mb-4">
              <MDBBtn
                outline
                color="white"
                floating
                className="m-1"
                href="#!"
                role="button"
              >
                <a href="https://github.com/Beksultan24/hackathon1/pull/3">
                  <MDBIcon fab icon="github" />
                  <GitHubIcon className="github" />
                </a>
              </MDBBtn>

              <MDBBtn
                outline
                color="white"
                floating
                className="m-1"
                href="#!"
                role="button"
              >
                <MDBIcon fab icon="instagram" />
                <InstagramIcon className="instagram" />
              </MDBBtn>

              <MDBBtn
                outline
                color="white"
                floating
                className="m-1"
                href="#!"
                role="button"
              >
                <TelegramIcon className="telegram" />
              </MDBBtn>

              <MDBBtn
                outline
                color="white"
                floating
                className="m-1"
                href="#!"
                role="button"
              >
                <MDBIcon fab icon="youtube" />
                <YouTubeIcon className="youtube" />
              </MDBBtn>
            </section>
          </MDBContainer>

          <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
            <h5 className="text-uppercase">Владельцам </h5>

            <ul className="list-unstyled mb-0">
              <li>
                <a href="#!" className="text-white"></a>
                Аксессуары для автомобилей
              </li>
              <li>
                <a href="#!" className="text-white">
                  Запасные части
                </a>
              </li>
              <li>
                <a href="#!" className="text-white">
                  Гарантия
                </a>
              </li>
              <li>
                <a href="#!" className="text-white">
                  Руководства по эксплуатации
                </a>
              </li>
            </ul>
          </MDBCol>

          <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
            <h5 className="text-uppercase mb-0">Популярные модели</h5>

            <ul className="list-unstyled">
              <li>
                <a href="#!" className="text-white">
                  Новый С-Класс
                </a>
              </li>
              <li>
                <a href="#!" className="text-white">
                  Новый Е-Класс
                </a>
              </li>
              <li>
                <a href="#!" className="text-white">
                  Новый S-Класс
                </a>
              </li>
              <li>
                <a href="#!" className="text-white">
                  Mercedes-Maybach
                </a>
              </li>
            </ul>
          </MDBCol>

          <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
            <h5 className="text-uppercase">Перед покупкой</h5>

            <ul className="list-unstyled mb-0">
              <li>
                <a href="#!" className="text-white"></a>
                Поиск дилера
              </li>
              <li>
                <a href="#!" className="text-white">
                  Просмотр статуса заказа
                </a>
              </li>
              <li>
                <a href="#!" className="text-white">
                  Финансовые услуги
                </a>
              </li>
              <li>
                <a href="#!" className="text-white">
                  Помощь на дороге
                </a>
              </li>
            </ul>
          </MDBCol>

          <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
            <h5 className="text-uppercase">Технологии</h5>

            <ul className="list-unstyled mb-0">
              <li>
                <a href="#!" className="text-white"></a>
                Электромобильность
              </li>
              <li>
                <a href="#!" className="text-white">
                  Устойчивое развитие
                </a>
              </li>
              <li>
                <a href="#!" className="text-white">
                  MBUX
                </a>
              </li>
              <li>
                <a href="#!" className="text-white">
                  Mercedes
                </a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        <a className="text-white" href="/">
          Copyright © Mercedes 2022.
        </a>
      </div>
    </MDBFooter>
  );
}
