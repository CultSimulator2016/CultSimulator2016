function Engine() {
  this.cardsList = [
          { id: 1, text: "Sacrifice Chicken", cost: 100, image: "card_kill_chicken" },
          { id: 2, text: "Dance Naked", cost: 150, image: "card_dance_naked" },
          { id: 3, text: "Eat Cat Food", cost: 200, image: "card_eat_cat_food" }
  ];
  this.shopAvailableCards = this.cardsList;
  this.playerAvailableCards = [];
  this.money = 500;
  this.currentDay = 1;
};
Engine.prototype.getDay = function() {
  return this.currentDay;
};
Engine.prototype.getMoney = function() {
  return this.money;
};
Engine.prototype.getOverallLoyalty = function() {
  return 42;
};
Engine.prototype.getFollowersCount = function() {
  return 50;
};
Engine.prototype.recruit = function() {
  console.log("Recruiting..");
};
Engine.prototype.getCardsShop = function() {
  return this.shopAvailableCards;
};
Engine.prototype.getCardsRitual = function() {
  return this.playerAvailableCards;
};
Engine.prototype.buyCard = function(ritualId) {
  console.log("Buying card with ritualId: " + ritualId);
  var card = this.cardsList.filter(function(item){ return item.id === ritualId; })[0];
  this.money -= card.cost;
  this.playerAvailableCards.push(card);
  this.shopAvailableCards.splice(this.shopAvailableCards.indexOf(card), 1);
};
Engine.prototype.makeRitual = function(ritualId) {
  console.log("Ritual with ritualId: " + ritualId);
  this.currentDay += 1;
  return ["Loyalty Increased!",
          "2 followers left your cult.."];
};
Engine.prototype.getHistory = function() {
  return ["Kill chickens",
          "Dance naked"];
};
