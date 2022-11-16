import React from "react";
import "./Catalogue.scss"
import PageCatalogue from "../../components/AppModules/catalogue/PageCatalogue";

const Catalogue = () => {
  return (
    <>
      <section id="catalogue">
        <div className="overlay"></div>
        <PageCatalogue />
      </section>
    </>
  );
};

export default Catalogue;
