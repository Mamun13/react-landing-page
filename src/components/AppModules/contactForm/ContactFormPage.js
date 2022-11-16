import React from "react";
import "./ContactForm.scss";

const ContactFormPage = () => {
  return (
    <>
      <section id="contact-form">
        <div className="container">
          <div className="col-lg-12">
            <h2 className="text-center font-corda fs-2 pt-5 text-light">
              Contact
              <br />
              <span className="font-corda fs-1" style={{ color: "#ffa500" }}>
                US
              </span>
            </h2>
          </div>
          <div className="col-lg-12 pt-5 pb-5">
            <div className="row px-5">
              <div className="col-lg-12 d-flex justify-content-center">
                <div class="col-auto">
                  <label
                    for="inputPassword6"
                    class="col-form-label font-corda fs-4 pt-0 text-light"
                  >
                    Purpuse :
                  </label>
                </div>
                <div class="col-lg-4">
                  <select
                    class="form-select ms-4 name rounded-0 mb-5"
                    aria-label="Default select example"
                  >
                    <option selected>Select Purpuse</option>
                    <option value="1">General</option>
                    <option value="2">About Dealership</option>
                    <option value="3">About Export</option>
                  </select>
                </div>
              </div>
              <p className="text-center text-light font-corda pb-5 pt-4">
                Please take a few moments to fill this application form and we
                will contact you at the earliest.
              </p>
              <div className="col-lg-6">
                <div className="form-group">
                  <label htmlFor className="form-label text-yellow font-corda">
                    Full Name:
                  </label>
                  <input
                    type="text"
                    className="form-control mb-3 rounded-0 name bg-transparent"
                    placeholder="Enter your full name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor className="form-label text-yellow font-corda">
                    Subject:
                  </label>
                  <input
                    type="text"
                    className="form-control mb-3 rounded-0 name bg-transparent"
                    placeholder="Enter your subject"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="">
                  <label htmlFor className="form-label text-yellow font-corda">
                    Email Address:
                  </label>
                  <input
                    type="text"
                    className="form-control mb-3 rounded-0 name bg-transparent"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="">
                  <label htmlFor className="form-label text-yellow font-corda">
                    Contact Number:
                  </label>
                  <input
                    type="text"
                    className="form-control mb-3 rounded-0 name bg-transparent"
                    placeholder="Enter your number"
                  />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                  <label
                    htmlFor="exampleInputEmail1"
                    className="form-label text-yellow font-corda"
                  >
                    Message:
                  </label>
                  <div className="form-floating">
                    <textarea
                      className="form-control mb-3 rounded-0 name bg-transparent"
                      placeholder="Leave a comment here"
                      id="floatingTextarea2"
                      style={{ height: "80px" }}
                      defaultValue={""}
                    />
                    <label htmlFor="floatingTextarea2" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <button
                  type="submit"
                  className="px-4 py-2 rounded-0 text-light"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactFormPage;
