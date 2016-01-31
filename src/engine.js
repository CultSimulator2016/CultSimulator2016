function Engine() { };
Engine.prototype.getDay = function() {
  return 99;
};
Engine.prototype.getMoney = function() {
  return 999;
};
Engine.prototype.getOverallLoyalty = function() {
  return 42;
};
Engine.prototype.getFollowersCount = function() {
  return 50;
};
Engine.prototype.recruit = function() { };
Engine.prototype.getCardsShop = function() {
  return [{ id: 1, name: "Sacrifice Chicken", cost: 100 },
          { id: 2, name: "Dance Naked", cost: 150 },
          { id: 3, name: "Eat Cat Food", cost: 200 }];
};
Engine.prototype.getCardsRitual = function() {
  return [
    "Kill chickens",
    "Eat cat food",
    "Dance naked"
  ];
};
Engine.prototype.buyCard = function(ritualId) { };
Engine.prototype.makeRitual = function(ritualId) {
  return ["Loyalty Increased!",
          "2 followers left your cult.."];
};
Engine.prototype.getHistory = function() {
  return ["Kill chickens",
          "Dance naked"];
};
