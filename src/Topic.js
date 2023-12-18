import Cards from "./Cards";
// import image from "./pics/Mount.svg";
import glacier from "./pics/glacier.jpg";
import camp from "./pics/camp.jpg";
import bridge from "./pics/bridge.jpg";
import resort from "./pics/resort.jpg"
import nepal from "./pics/nepal.jpg"
import tour from "./pics/Tour.jpg";
import food from "./pics/food.jpg";
import game from "./pics/games.jpg";

const Topic = () => {
  const cardData = [
    {
      id: 1,
      image:glacier,
      category: "Tours",
      text: "Explore",
      title: "Discover the thrill of adventure with our guided tours",
      description:
        "Embark on a journey to breathtaking destinations, experiencing the excitement of adventure and the beauty of nature. Our expert guides ensure a memorable and safe experience for all travelers.",
    },
    {
      id: 2,
      image: camp,
      category: "Culinary",
      text: "Indulge",
      title: "Savor the flavors of the world with our culinary escapes",
      description:
        "Immerse yourself in the diverse culinary traditions of different cultures. From local street food to fine dining experiences, our culinary escapes promise a delightful gastronomic journey for food enthusiasts.",
    },
    {
      id: 3,
      image: bridge,
      category: "Hotels",
      text: "Relax",
      title: "Experience luxury and comfort in our handpicked hotels",
      description:
        "Unwind in style at our carefully selected luxury hotels. Each accommodation is chosen for its exceptional amenities, impeccable service, and prime locations to ensure a truly luxurious stay for our clients.",
    },
    {
      id: 4,
      image: resort,
      category: "Guide Tours",
      text: "Learn",
      title: "Enrich your travel experience with our knowledgeable guides",
      description:
        "Join our guided tours led by passionate experts who share their deep knowledge of the history, culture, and hidden gems of each destination. Make learning an integral part of your journey.",
    },
    {
      id: 5,
      image: nepal,
      category: "Games",
      text: "Thrill",
      title: "Add excitement to your trip with adventure games",
      description:
        "For the thrill-seekers, we offer adventure games that push your limits and provide an adrenaline rush. Challenge yourself with activities like zip-lining, rock climbing, and more.",
    },
    {
      id: 6,
      image: tour,
      category: "Shopping",
      text: "Shop",
      title: "Explore local markets and indulge in shopping excursions",
      description:
        "Discover unique treasures and shop for souvenirs as you explore the vibrant local markets. Our shopping excursions offer a blend of culture and retail therapy for the avid shoppers among you.",
    },
    {
      id: 7,
      image: food,
      category: "Adventures",
      text: "Witness",
      title: "Witness breathtaking landscapes on our scenic adventures",
      description:
        "Immerse yourself in the natural beauty of scenic destinations. Our adventures take you to awe-inspiring landscapes, from majestic mountains to pristine beaches, providing unforgettable views.",
    },
    {
      id: 8,
      image: game,
      category: "Expeditions",
      text: "Explore",
      title: "Immerse yourself in rich cultural expeditions",
      description:
        "Engage with local cultures through our cultural expeditions. From ancient traditions to modern art scenes, these experiences offer a deep understanding of the diverse cultures our world has to offer.",
    },
  ];

  return (
    <div className="topic-container">
      <div className="Topic-card">
        <div className="topic-list">
          <p>All</p>
          <p>Adventure</p>
          <p>Travel</p>
          <p>Fashion</p>
          <p>Technology</p>
          <p>Branding</p>
        </div>

        <div>
          <p>View all</p>
        </div>
      </div>

      <div>
        <div className="carrds">
          {cardData.map((card) => (
            <Cards
              key={card.id}
              image={card.image}
              category={card.category}
              text={card.text}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Topic;
