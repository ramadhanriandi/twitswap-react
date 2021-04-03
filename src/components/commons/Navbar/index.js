import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useHistory, useLocation } from "react-router-dom";

import { AddCircleOutline, History } from "@material-ui/icons";

import Button from "~/components/commons/Button";

import { StyledNavbar } from "./styles";

const Navbar = () => {
  const history = useHistory();

  const location = useLocation();

  const [activeMenu, setActiveMenu] = useState("");
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const locationPathname = location.pathname.slice(1);

    setActiveMenu(locationPathname);
  }, [location.pathname]);

  const handleChangeDateTime = (dateTime) => {
    setDateTime(dateTime);
  };

  const handleRedirect = (link) => (e) => {
    e.preventDefault();
    history.push(link);
  };

  const renderMenu = () => {
    if (activeMenu === "streaming") return <Button>Stop</Button>;

    const parsedPathname = location.pathname.slice(1).split("/");

    if (parsedPathname[0] === "past" && parsedPathname[1]) {
      return (
        <div className="navbar__menu">
          <div className="navbar__time">
            <DatePicker
              selected={dateTime}
              onChange={handleChangeDateTime}
              dateFormat="MMMM d, yyyy h:mm aa"
              popperPlacement="top-end"
              popperModifiers={{
                offset: {
                  enabled: true,
                  offset: "5px, 10px",
                },
              }}
              showTimeSelect
            />
            <Button>Find</Button>
          </div>
          <Button onClick={handleRedirect("/past")}>Close</Button>
        </div>
      );
    }

    return (
      <div className="navbar__menu">
        <div
          aria-hidden="true"
          className={`navbar__menu__item ${
            activeMenu === "past" ? "active" : ""
          }`}
          onClick={handleRedirect("/past")}
        >
          <History />
          <span>Past Streaming</span>
        </div>
        <div
          aria-hidden="true"
          className={`navbar__menu__item ${activeMenu ? "" : "active"}`}
          onClick={handleRedirect("/")}
        >
          <AddCircleOutline />
          <span>New Streaming</span>
        </div>
      </div>
    );
  };

  return (
    <StyledNavbar>
      <div className="navbar__title">TwitSwap</div>
      {renderMenu()}
    </StyledNavbar>
  );
};

export default Navbar;
