import { Button, Input } from "antd";
import {
  FacebookFilled,
  LinkedinFilled,
  GithubFilled,
  TwitterOutlined,
} from "@ant-design/icons";
import "../styles/footer.css";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-row">
        <div className="footer-col">
          <h4>Info</h4>
          <ul className="links">
            <li>
              <NavLink to={"/about-us"}>About Us</NavLink>
            </li>
            <li>
              <NavLink to={"/testimonials"}>Testimonials</NavLink>
            </li>
            <li>
              <a href="#">Customers</a>
            </li>
            <li>
              <NavLink to={"/products"}>Products</NavLink>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Explore</h4>
          <ul className="links">
            <li>
              <a href="#">New Arrivals</a>
            </li>
            <li>
              <NavLink to={"/products"}>Featured Products</NavLink>
            </li>
            <li>
              <a href="#">Popular Reviews</a>
            </li>
            <li>
              <a href="#">Special Offers</a>
            </li>
            <li>
              <a href="#">New Uploads</a>
            </li>
            <li>
              <a href="#">Payment Methods</a>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Legal</h4>
          <ul className="links">
            <li>
              <a href="#">Customer Agreement</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">GDPR</a>
            </li>
            <li>
              <a href="#">Security</a>
            </li>
            <li>
              <a href="#">Terms & Conditions</a>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Newsletter</h4>
          <p>
            Subscribe to our newsletter for a weekly dose of news, updates,
            helpful tips, and exclusive offers.
          </p>
          <form action="#">
            <Input placeholder="Your email address" />;
            <Button type="primary">Subscribe</Button>
          </form>
          <div className="icons">
            <FacebookFilled />
            <GithubFilled />
            <LinkedinFilled />
            <TwitterOutlined />
          </div>
        </div>
      </div>
      <p style={{ textAlign: "center", marginBottom: "20px " }}>
        © {new Date().getFullYear()} GymBolt. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
