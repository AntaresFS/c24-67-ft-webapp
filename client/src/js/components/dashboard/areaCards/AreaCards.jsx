import AreaCard from "./AreaCard";
import "./AreaCards.scss";

const AreaCards = () => {
  return (
    <section className="content-area-cards">
      <AreaCard
        colors={["#e4e8ef", "#475be8"]}
        percentFillValue={30}
        cardInfo={{
          title: "Path Progress",
          value: "21 credits",
          text: "Keep it up!",
        }}
      />
      <AreaCard
        colors={["#e4e8ef", "#4ce13f"]}
        percentFillValue={27}
        cardInfo={{
          title: "Courses Progress",
          value: "3 courses",
          text: "You're lacking a bit",
        }}
      />
      <AreaCard
        colors={["#e4e8ef", "#f29a2e"]}
        percentFillValue={23}
        cardInfo={{
          title: "Activities Progress",
          value: "58 Activities",
          text: "Good Work!",
        }}
      />
    </section>
  );
};

export default AreaCards;
