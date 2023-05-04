import React from "react";

const FooterWilliam = () => {
  return (
    <div className="flex justify-center mt-8">
      <h3 className="mr-2 text-lg font-roboto">by</h3>{" "}
      <a target="blank" href="https://www.google.com.ar/?hl=es">
        <img
          src={wd}
          alt="william logo"
          width="150px"
          height="140px"
          className=""
        />
      </a>
    </div>
  );
};

export default FooterWilliam;
