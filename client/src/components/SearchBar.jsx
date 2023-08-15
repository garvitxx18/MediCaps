import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faList12 } from "@fortawesome/free-solid-svg-icons";
import { faLock,faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "../styles/SearchBar.css";

const SearchBar = () => {
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
          <button class='search-btn'>Search</button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
