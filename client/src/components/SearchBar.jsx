import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faList12 } from "@fortawesome/free-solid-svg-icons";
import { faLock, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "../styles/SearchBar.css";

const SearchBar = () => {
  async function getMedicine(event) {
    const response = await fetch(
      "https://drug-info-and-price-history.p.rapidapi.com/1/druginfo?drug=dolo",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "X-RapidAPI-Key":
            "3cb0bc7373msh21afa613dac6983p13d096jsn34e953b75500",
          "X-RapidAPI-Host": "drug-info-and-price-history.p.rapidapi.com",
        },
      }
    );
    const data = await response.json();
    console.log(data);
  }

  return (
    <div className="root">
      <div className="NavBar">
        <div className="input--box">
          <h2>Medicine</h2>
          <div className="icon">
            <FontAwesomeIcon icon={faMagnifyingGlass} size="xl" />
          </div>
          <input className="input"></input>
        </div>
        <div className="input--box">
          <h2>City</h2>
          <input className="input"></input>
        </div>
        <div>
          <button onClick={getMedicine} className="search-btn">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
