import React from "react";

export default function Content() {
  return (
    <>
      <div class="container-fluid">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto">
              <li class="nav-item">
                <a class="nav-link text-dark" href="#home">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-dark" href="#project">
                  Project
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-dark" href="#blog">
                  Blog
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-dark" href="#about">
                  About
                </a>
              </li>
            </ul>
          </div>
        </nav>

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

      <hr></hr>

      <div class="container-fluid " id="project">
        <h3 class="text-center ">Project</h3>
        <p class="text-center ">Check My Github</p>
        <a href="https://github.com/Sahildholpuria" target="_blank"  rel="noreferrer">
          <img
            src="https://github.com/Sahildholpuria/images/blob/main/githublogo.png?raw=true"
            class="img-fluid mx-auto d-block"
            width="400"
            alt="GitHub"
          />
        </a>
      </div>
    </>
  );
}
