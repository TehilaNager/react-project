import { NavLink } from "react-router";
import { useEffect } from "react";
import Card from "../components/card";
import PageHeader from "../components/common/pageHeader";
import { useCards } from "../context/cardsContext";

function MyCards() {
  const { allMyCards, like, remove, resetSearch } = useCards();

  const myCards = allMyCards();

  useEffect(() => {
    resetSearch();
  }, []);

  return (
    <div className="container">
      <PageHeader
        title="My Cards"
        description="Here you can find business cards from all categories"
        classNameTitle="mt-5 mb-3"
        classNameDescription="mb-4"
      />

      <div className="d-flex justify-content-evenly flex-wrap">
        {myCards?.map((card) => (
          <Card
            key={card._id}
            card={card}
            onLike={() => like(card._id)}
            onDelete={() => remove(card._id)}
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
