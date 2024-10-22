import logo from "../assets/logotransparent.png";
import DesktopImage from "../assets/flamespost.jpg"

const Comingsoon = () => {
  return (
    <section >
      <div className="bg-cover h-screen mt-2"  style={{backgroundImage:`url(${DesktopImage})`}}>
        <h2>Gordo Mikes BBQ</h2>
        <h2>Coming Soon</h2>
        <img src={logo} alt="gordo mike logo" />
      </div>
    </section>
  );
};

export default Comingsoon;
