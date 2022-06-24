import React from "react";
import "./footer.css";
import {
  Facebook,
  Github,
  Twitter,
  Whatsapp,
  Linkedin,
} from "react-bootstrap-icons";

export const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="about-me">
          <h1>About me</h1>
          <p className="text-justify">
            My name is
            <span className="firstName">Bezalel </span>
            <span className="lastName">Revis.</span>
            <br />
            i'm a<strong className="full-stack">
              full stack developer,
            </strong>{" "}
            available Full-time job, My specialization is in web development,
            always trying to be better, i'm alwys learning fast from people
            around me, and i'm very sociable...
          </p>
        </div>
        {/* <!-- skills --> */}
        <div className="skills">
          <div className="skills-div">
            <h1 className="h1-skills">Skills</h1>
            <div className="skills-catgories">
              <p className="pFooter">java</p>
              <p className="pFooter">html,css,js</p>
              <p className="pFooter">react</p>
              <h2 className="pFooter">Back End</h2>
              <p className="pFooter">node.js</p>
              <p className="pFooter">mysql,mongoDB</p>
              <p className="pFooter">github</p>
              {/* <!-- <p className="pFooter">(This projwct was bulid with mongoDB...)</p> --> */}
            </div>
          </div>
        </div>
        {/* <!-- end skills  --> */}
        <div className="connect-me">
          <h2>Conect me</h2>

          <div className="connect-details">
            <p className="pFooter">Phone:</p>
            <a className="pConnect" href="+972-528031000">
              +972-528031000
            </a>
          </div>
          <div className="connect-details">
            <p className="pFooter">Email:</p>
            <span className="pConnect">bezalel803@gmail.com</span>
          </div>

          <div className="connect-details">
            <p className="pFooter">Address:</p>
            <span className="pConnect">Isreal</span>
          </div>
          <div className="social-madia">
            {/* <!-- Facebook --> */}
            <a href="https://www.facebook.com/profile.php?id=100007179486292">
              <i className="facebook">
                <Facebook />
              </i>
            </a>

            {/* <!-- Twitter --> */}
            <a href="https://twitter.com/7178323">
              <i className="twitter">
                <Twitter />
              </i>
            </a>

            {/* <!-- Instagram --> */}
            <a href="https://github.com/BezaleRevis">
              <i className="github">
                <Github />
              </i>
            </a>

            {/* <!-- Linkedin --> */}
            <a href="">
              <i className="linkedin">
                <Linkedin />
              </i>
            </a>

            {/* <!--whatsapp--> */}
            <a href="https://wa.me/+972528031000">
              <i className="whatsapp">
                <Whatsapp />
              </i>
            </a>
          </div>
        </div>
      </div>
      <hr className="bg-danger border-2 border-top border-danger" />
      <div className="footer-bottom">
        {/* <!--foote_bottom--> */}
        <p className="text-footer-bottom">
          Copyright @2022 | Designed by
          <a
            className="a-footer-bottom"
            href="https://www.facebook.com/profile.php?id=100007179486292"
          >
            <span className="firstName"> Tzali </span>
            <span className="lastName">Revis.</span>
          </a>
        </p>
      </div>
    </footer>
  );
};
