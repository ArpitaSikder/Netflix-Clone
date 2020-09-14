import React, { useState, useEffect } from "react";
import "./UserBar.css";
function UserBar() {
  /*scroll listener*/

  const [see, handlesee] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handlesee(true);
      } else handlesee(false);
    });

    return () => {
      window.addEventListener("scroll");
    };
  }, []);

  return (
    <div className={`bar ${see && "bar_black"}`}>
      <img
        className="netflix_logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix-logo"
      />
      <img
        className="user_logo"
        src="https://occ-0-1065-999.1.nflxso.net/dnm/api/v6/Z-WHgqd_TeJxSuha8aZ5WpyLcX8/AAAABcqBskTCn3DkGQQb75keSWbkb7UvDc5R_1jJvJuDyp6GgGN_TeMbo_kPwlwmE0gwOmeTh2hNyKhotFROEYtkelSkKYmL.png?r=fcc"
        alt="user_logo"
      />
    </div>
  );
}

export default UserBar;
