import { MDBBtnGroup } from "mdb-react-ui-kit";
import { MDBBtn } from "mdb-react-ui-kit";
import React from "react";
import SideBar from "./SideBar";

const HomePage = () => {
  return (
    <div className="homePage">
      <div className="image">
        <img
          src="https://mbbelarus.by/local/templates/mbbelarus/img/maybach-s/image-1.png.pagespeed.ce.TzFAWCSLM1.png"
          alt=""
        />
        <h2>
          <span>
            Новый Mercedes-
            <br />
            Maybach S-Класс
          </span>
          <br />
          <br />
          <span className="epoha">Эпоха легенды</span>
        </h2>
      </div>
    </div>
  );
};

export default HomePage;
