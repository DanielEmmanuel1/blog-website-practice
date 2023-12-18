// import img from "./pics/img.jpg";

const Cards = ({image, category, text, title, description}) => {
  return (
    <div className="Cards">
      <div className="img-container">
        <img src={image} alt=""/>
        <p className="adventures">{category}</p>
      </div>
      <p>{text}</p>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Cards;