import { useState, useEffect, createContext, useContext } from "react";
import cardsService from "../services/cardsService";
import { useAuth } from "./authContext";

const cardsContext = createContext();
cardsContext.displayName = "Cards";

export function CardsProvider({ children }) {
  const [cards, setCards] = useState([]);
  const [term, setTerm] = useState("");
  const { user } = useAuth() || {};

  const fetchCards = async () => {
    const cards = await cardsService.getAllCards();
    setCards(
      cards.map((card) => ({ ...card, liked: card.likes.includes(user?._id) }))
    );
  };

  useEffect(() => {
    fetchCards();
  }, []);

  const like = async (id) => {
    await cardsService.updateCardsLikes(id);
    fetchCards();
  };

  const remove = async (id) => {
    await cardsService.deleteCard(id);
    fetchCards();
  };

  const favoritesCards = () => {
    return cards
      .filter((card) => card.liked)
      .filter((card) => card.title.toLowerCase().includes(term.toLowerCase()));
  };

  const allMyCards = () => {
    return cards
      .filter((card) => card.user_id === user?._id)
      .filter((card) => card.title.toLowerCase().includes(term.toLowerCase()));
  };

  const allCards = cards.filter((card) =>
    card.title.toLowerCase().includes(term.toLowerCase())
  );

  const getCard = async (id) => {
    return await cardsService.getCardById(id);
  };

  const updateCard = async (id, cardData) => {
    const response = await cardsService.updateCardById(id, cardData);
    fetchCards();
    return response;
  };

  const search = (term) => {
    setTerm(term);
  };

  const resetSearch = () => {
    setTerm("");
  };

  return (
    <cardsContext.Provider
      value={{
        like,
        remove,
        favoritesCards,
        allMyCards,
        search,
        resetSearch,
        allCards,
        getCard,
        term,
        updateCard,
      }}
    >
      {children}
    </cardsContext.Provider>
  );
}

export function useCards() {
  return useContext(cardsContext);
}
