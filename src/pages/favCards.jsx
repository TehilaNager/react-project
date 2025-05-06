import { useEffect } from "react";
import Card from "../components/card";
import PageHeader from "../components/common/pageHeader";
import { useCards } from "../context/cardsContext";

function FavCards() {
  const { favoritesCards, like, remove, resetSearch } = useCards();

  const favorites = favoritesCards();

  useEffect(() => {
    resetSearch();
  }, []);

  return (
    <div className="container">
      <PageHeader
        title="Favorites Cards"
        description="Here you can find business cards from all categories"
        classNameTitle="mt-5 mb-3"
        classNameDescription="mb-4"
      />

      <div className="d-flex justify-content-evenly flex-wrap">
        {favorites?.map((card) => (
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

export default FavCards;
