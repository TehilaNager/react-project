import { useCards } from "../context/cardsContext";
import PageHeader from "../components/common/pageHeader";
import Card from "../components/card";
import useResetSearchOnMount from "../../hook/useResetSearchOnMount";

function BCard() {
  const { remove, like, allCards } = useCards();
  useResetSearchOnMount();

  return (
    <div className="container">
      <PageHeader
        title="Cards Page"
        description="Here you can find business cards from all categories"
        classNameTitle="mt-5 mb-3"
        classNameDescription="mb-4"
      />

      <div className="d-flex justify-content-evenly flex-wrap">
        {allCards.map((card) => (
          <Card
            key={card._id}
            card={card}
            onLike={() => like(card._id)}
            onDelete={() => remove(card._id)}
          />
        ))}
      </div>
    </div>
  );
}

export default BCard;
