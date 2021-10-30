import React from "react";

export default function FooterBar() {
  return (
    <>
      <footer class="page-footer font-small bg-light fixed-bottom ">
        <div class="footer-copyright text-center py-3">
          © 2021 Copyright :&nbsp;
          <a
            class="link-dark text-decoration-none"
            href="https://sahildholpuria.github.io"
          >
            _&gt;SahilDholpuria
          </a>
          <br />
          Developed Using ♥&nbsp;
          <a
            class="link-dark text-decoration-none"
            href="https://reactjs.org/"
            target="_blank"
            rel="noreferrer"
          >
            React
          </a>
          <br />
          <ul>
            <a
              href="https://twitter.com/sahildholpuria1"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://cdn.jsdelivr.net/npm/simple-icons@3.11.0/icons/twitter.svg"
                width="22px"
                alt="socialMediaAccount"
              />
            </a>
            &nbsp;&nbsp;
            <a
              href="https://www.instagram.com/sahildholpuria/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://cdn.jsdelivr.net/npm/simple-icons@3.11.0/icons/instagram.svg"
                width="22px"
                alt="socialMediaAccount"
              />
            </a>
            &nbsp;&nbsp;
            <a
              href="https://github.com/Sahildholpuria"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://cdn.jsdelivr.net/npm/simple-icons@3.11.0/icons/github.svg"
                width="22px"
                alt="socialMediaAccount"
              />
            </a>
            &nbsp;&nbsp;
            <a
              href="https://www.linkedin.com/in/sahildholpuria/"
              rel="noreferrer"
            >
              <img
                src="https://cdn.jsdelivr.net/npm/simple-icons@3.11.0/icons/linkedin.svg"
                width="22px"
                alt="socialMediaAccount"
              />
            </a>
            &nbsp;&nbsp;
            <a
              href="mailto:s.sahildholpuria@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://cdn.jsdelivr.net/npm/simple-icons@3.11.0/icons/gmail.svg"
                width="22px"
                alt="socialMediaAccount"
              />
            </a>
            &nbsp;
          </ul>
        </div>
      </footer>
    </>
  );
}
