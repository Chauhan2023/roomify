import Footer from "../Components/Footer";
import React from "react";
import { Button, Icon } from "@chakra-ui/react";
import { BsArrowRightShort } from "react-icons/bs";

function Vision() {
  return (
    <div>
      <section class="py-3 py-md-5 py-xl-8">
        <div class="container">
          <div class="row justify-content-md-center">
            <div class="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
              <h2 class="mb-4 display-5 text-center">Vision</h2>
              <p class="text-secondary mb-5 text-center lead fs-4">
                We believe in the power of teamwork and collaboration. Our
                diverse experts work tirelessly to deliver innovative solutions
                tailored to our clients' needs.
              </p>
              <hr class="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle" />
            </div>
          </div>
        </div>

        <div class="container">
          <div class="row gy-4 gy-lg-0 align-items-lg-center">
            <div class="col-12 col-lg-6">
              <img
                class="img-fluid rounded border border-dark"
                loading="lazy"
                src="https://media.gq-magazine.co.uk/photos/6516d2d9bedd4daaedc221a3/1:1/w_3156,h_3156,c_limit/GettyImages-1141789693%20(1).jpg"
                alt="About Us"
              />
            </div>
            <div class="col-12 col-lg-6 col-xxl-6">
              <div class="row justify-content-lg-end">
                <div class="col-12 col-lg-11">
                  <div class="about-wrapper">
                    <p class="lead mb-4 mb-md-5">
                      As a socially responsible entity, we are deeply committed
                      to positively impacting the communities we serve and the
                      world at large. Through various initiatives and
                      partnerships, we actively contribute to environmental
                      sustainability, social welfare, and educational
                      advancement.
                    </p>
                    <div class="row gy-4 mb-4 mb-md-5">
                      <div class="col-12 col-md-6">
                        <div class="card border border-dark">
                          <div class="card-body p-4">
                            <h3 class="display-5 fw-bold text-primary text-center mb-2">
                              370+
                            </h3>
                            <p class="fw-bold text-center m-0">
                              Qualified Experts
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="col-12 col-md-6">
                        <div class="card border border-dark">
                          <div class="card-body p-4">
                            <h3 class="display-5 fw-bold text-primary text-center mb-2">
                              18k+
                            </h3>
                            <p class="fw-bold text-center m-0">
                              Satisfied Clients
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Button
                      as="a"
                      href=""
                      colorScheme="blue"
                      size="lg"
                      className="bsb-btn-2xl"
                      display="flex"
                      alignItems="center"
                    >
                      Explore
                      <Icon as={BsArrowRightShort} w={5} h={5} ml={2} />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Vision;
