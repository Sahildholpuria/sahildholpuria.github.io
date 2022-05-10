import React from "react";

export default function Content() {
  return (
    <>
      <div class="container-fluid" id="home">
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
          &nbsp;
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto">
              <li class="nav-item">
                <a class="nav-link text-dark" href="#home">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-dark" href="#skills">
                  Skills
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-dark" href="#project">
                  Project
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-dark" target="_blank" rel="noreferrer" href="https://cloudblog.cf/">
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
        &nbsp;
        <img
          src="https://github.com/Sahildholpuria/images/blob/main/%2B91%2091662%2076171%2020220227_222840.jpg?raw=true"
          class="mx-auto d-block rounded-circle border border-5 img-fluid mt-3"
          width="300"
          height="300"
          alt="ProfilePicture"
        />
        &nbsp;
        {/* <p class="text-center mt-3">"#include&#60;Development&#62;"</p> */}
        <figure>
          <blockquote class="blockquote ">
            <p class="text-center mt-3">
              When something is important enough, you do it even if the odds are
              not in your favor.
            </p>
          </blockquote>
          &nbsp;
          <figcaption class="blockquote-footer text-center mt-3 mb-3">
            <cite title="Source Title">Elon Musk</cite>
          </figcaption>
        </figure>
        &nbsp;
      </div>
      &nbsp;
      {/* <div class="container-fluid" id="project">
        &nbsp;
        <h3 class="text-center ">Project</h3>
        &nbsp;
        <p class="text-center ">Check My Github</p>
        <a
          href="https://github.com/Sahildholpuria"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://github.com/Sahildholpuria/images/blob/main/githublogo.png?raw=true"
            class="img-fluid mx-auto d-block"
            width="400"
            alt="GitHub"
          />
        </a>
        &nbsp;
      </div> */}


<div className="container-fluid" id="project">
        &nbsp;
        <h3 class="text-center ">Project</h3>
        &nbsp;
        <p class="text-center ">Check My Github</p>
        <div class="row ms-5 me-5">
          <div class="col-sm-6">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Streaming App</h5>
                <p class="card-text">
                  Simple Video Streaming Android App.
                </p>
                <a href="/#" class="btn btn-primary">
                  Github
                </a>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">FlashLight App</h5>
                <p class="card-text">
                  A basic Android App For The Flash Light 
                </p>
                <a href="/#" class="btn btn-primary">
                  Github
                </a>
              </div>
            </div>
          </div>
        </div>
        &nbsp;
        {/* <div class="row ms-5 me-5">
          <div class="col-sm-6">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="/#" class="btn btn-primary">
                  Github
                </a>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="/#" class="btn btn-primary">
                  Github
                </a>
              </div>
            </div>
          </div>
        </div> */}
      </div>

      &nbsp;
      {/* //Skills */}
      <div class="container-fluid " id="skills">
        &nbsp;
        <h3 class="text-center ">Skills</h3>
        &nbsp;
        <div class="progress w-50 mx-auto d-block">
          <div
            class="progress-bar w-75"
            role="progressbar"
            aria-valuenow="75"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            AWS
          </div>
        </div>
        &nbsp;
        <div class="progress w-50 mx-auto d-block">
          <div
            class="progress-bar w-50"
            role="progressbar"
            aria-valuenow="50"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            Microsoft Azure
          </div>
        </div>
        &nbsp;
        <div class="progress w-50 mx-auto d-block">
          <div
            class="progress-bar w-75"
            role="progressbar"
            aria-valuenow="75"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            Linux
          </div>
        </div>
        &nbsp;
        <div class="progress w-50 mx-auto d-block">
          <div
            class="progress-bar w-50"
            role="progressbar"
            aria-valuenow="50"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            Programming
          </div>
        </div>
        &nbsp;
        <div class="progress w-50 mx-auto d-block">
          <div
            class="progress-bar w-50"
            role="progressbar"
            aria-valuenow="50"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            Web Development
          </div>
        </div>
        &nbsp;
        <div class="progress w-50 mx-auto d-block">
          <div
            class="progress-bar w-75"
            role="progressbar"
            aria-valuenow="75"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            Git/GitHub
          </div>
        </div>
        &nbsp;
        <div class="progress w-50 mx-auto d-block">
          <div
            class="progress-bar w-50"
            role="progressbar"
            aria-valuenow="50"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            Salesforce Admin
          </div>
        </div>
      </div>
      &nbsp;
    </>
  );
}
