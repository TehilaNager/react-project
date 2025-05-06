import httpService from "./httpService";

async function getAllCards() {
  const response = await httpService.get("/cards");
  return response.data;
}

async function createCard(values) {
  await httpService.post("/cards", values,);
}

async function updateCardsLikes(id) {
  const response = await httpService.patch(`/cards/${id}`);
  return response.data;
}

async function deleteCard(id) {
  const response = await httpService.delete(`/cards/${id}`);
  return response.data;
}

async function updateCard(id) {
  const response = await httpService.put(`/cards/${id}`);
  return response.data;

}

async function getCardById(id) {
  const response = await httpService.get(`/cards/${id}`);
  return response.data;
}

const cardsService = {
  getAllCards,
  createCard,
  updateCardsLikes,
  deleteCard,
  updateCard,
  getCardById
};

export default cardsService;
