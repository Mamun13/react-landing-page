import React from "react";
import "./CompanyProduct.scss";
import ProductImage from "../../../components/AppModules/companyProduct/ProductImage";

const CompanyProduct = () => {
  return (
    <>
      <section id="image">
        <div className="container">
          <div class="row">
            <ProductImage />
          </div>
        </div>
      </section>
    </>
  );
};

export default CompanyProduct;
