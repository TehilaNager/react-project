import { NavLink } from "react-router";
import Card from "../components/card";
import PageHeader from "../components/common/pageHeader";
import { useCards } from "../context/cardsContext";
import { questionFeedback } from "../helpers/feedback";

function MyCards() {
  const { allMyCards, like, remove } = useCards();
  const myCards = allMyCards();

  return (
    <div className="container">
      <PageHeader
        title="My Cards"
        description="Here you can find all the business cards you have created."
        classNameTitle="mt-5 mb-3"
        classNameDescription="mb-4"
      />

      <div className="d-flex justify-content-evenly flex-wrap">
        {myCards?.map((card) => (
          <Card
            key={card._id}
            card={card}
            onLike={() => like(card._id)}
            onDelete={async () => {
              const confirm = await questionFeedback(
                "Card deleted successfully."
              );

              if (confirm) {
                await remove(card._id);
              }
            }}
          />
        ))}
      </div>

      <NavLink
        className="btn-add-card btn btn-primary rounded-circle p-3 lh-1 bi bi-plus-lg"
        to="/create-card"
      ></NavLink>
    </div>
  );
}

export default MyCards;
