import Card from "../components/card";
import PageHeader from "../components/common/pageHeader";
import { useCards } from "../context/cardsContext";
import { questionFeedback } from "../helpers/feedback";

function FavCards() {
  const { favoritesCards, like, remove } = useCards();
  const favorites = favoritesCards();

  return (
    <div className="container">
      <PageHeader
        title="Favorites Cards"
        description="Here you can find all the business cards you like."
        classNameTitle="mt-5 mb-3"
        classNameDescription="mb-4"
      />

      <div className="d-flex justify-content-evenly flex-wrap">
        {favorites?.map((card) => (
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
    </div>
  );
}

export default FavCards;
