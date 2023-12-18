import facebook from "./pics/face.svg";
import pintrest from "./pics/pinterest.svg";
import youtube from "./pics/utube.svg";
import behance from "./pics/behanceeee.svg";

const Footer = () => {
  return (
    <div className="Footer">
      <div>
        <h2>Contact the publisher</h2>
        <p>oluwadamilare_daniel@outlook.com</p>
        <p>+234 80 800 636 82</p>
      </div>

      <div>
        <h2>Explorate</h2>
        <p>About</p>
        <p>Partners</p>
        <p>Job Opportunities</p>
        <p>Advertise</p>
        <p>membership</p>
      </div>

      <div>
        <h2>Headquater</h2>
        <p>10 Lekki Avenue</p>
        <p>Lagos Island</p>
        <p>Nigeria</p>
      </div>

      <div>
        <h2>Connections</h2>
        <div className="icons">
          <img src={facebook} alt="" />
          <img src={pintrest} alt="" />
          <img src={youtube} alt="" />
          <img src={behance} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
