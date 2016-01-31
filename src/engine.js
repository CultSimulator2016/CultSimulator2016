function Engine() {
  this.cardsList = [
          { id: 1, text: "Sacrifice Chicken", cost: 100, image: "card_kill_chicken" },
          { id: 2, text: "Dance Naked", cost: 150, image: "card_dance_naked" },
          { id: 3, text: "Eat Cat Food", cost: 200, image: "card_eat_cat_food" }
  ];
  this.shopAvailableCards = JSON.parse(JSON.stringify(this.cardsList)); // Deep copy hack
  this.playerAvailableCards = [];
  this.money = 500;
  this.currentDay = 1;
  this.overallLoyalty = 10;
  this.followersCount = 5;
  this.ritualHistory = [];
};
Engine.prototype.getDay = function() {
  return this.currentDay;
};
Engine.prototype.getMoney = function() {
  return this.money;
};
Engine.prototype.getOverallLoyalty = function() {
  return this.overallLoyalty;
};
Engine.prototype.getFollowersCount = function() {
  return this.followersCount;
};
Engine.prototype.recruit = function() {
  this.followersCount += 5;
  this.money -= 50;
};
Engine.prototype.getCardsShop = function() {
  return this.shopAvailableCards;
};
Engine.prototype.getCardsRitual = function() {
  return this.playerAvailableCards;
};
Engine.prototype.buyCard = function(ritualId) {
  var card = this.cardsList.filter(function(item){ return item.id === ritualId; })[0];
  this.money -= card.cost;
  this.playerAvailableCards.push(card);
  this.shopAvailableCards.splice(this.shopAvailableCards.indexOf(card), 1);
};
Engine.prototype.makeRitual = function(ritualId) {
  var card = this.cardsList.filter(function(item){ return item.id === ritualId; })[0];
  console.log(card, this.cardsList, ritualId, this.cardsList.filter(function(item){ return item.id === ritualId; }));
  this.currentDay += 1;
  this.ritualHistory.push(card.text);
  this.overallLoyalty += 5;
  return ["Loyalty Increased!",
          "2 followers left your cult.."];
};
Engine.prototype.getHistory = function() {
  return this.ritualHistory;
};
