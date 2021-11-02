import React from "react";

export default function Content() {
  return (
    <>
      <div class="container-fluid">


      
    {/* <a class="navbar-brand" href="#">Navbar</a> */}
    {/* <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button> */}
    
        <a class="nav-link text-center text-dark fw-bold" href="#home">Home</a>
        <a class="nav-link text-center text-dark fw-bold" href="#skills">Projects</a>
        <a class="nav-link text-center text-dark fw-bold" href="#about">About</a>



        <img
          src="https://github.com/Sahildholpuria/images/blob/main/%23DevFestIndia_badge.png?raw=true"
          class="mx-auto d-block rounded-circle border border-5 img-fluid mt-3"
          width="300"
          height="300"
          alt="ProfilePicture"
        />
        {/* <p class="text-center mt-3">"#include&#60;Development&#62;"</p> */}
        <figure>
          <blockquote class="blockquote ">
            <p class="text-center mt-3">
              When something is important enough, you do it even if the odds are
              not in your favor.
            </p>
          </blockquote>
          <figcaption class="blockquote-footer text-center mt-3 mb-3">
            <cite title="Source Title">Elon Musk</cite>
          </figcaption>
        </figure>
      </div>
    </>
  );
}
