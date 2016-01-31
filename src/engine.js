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
Engine.prototype.recruit = function() {
  console.log("Recruiting..");
};
Engine.prototype.getCardsShop = function() {
  return [{ id: 1, text: "Sacrifice Chicken", cost: 100 },
          { id: 2, text: "Dance Naked", cost: 150 },
          { id: 3, text: "Eat Cat Food", cost: 200 }];
};
Engine.prototype.getCardsRitual = function() {
  return [
    { id: 1, text: "Kill chickens", image: "bad heart" },
    { id: 2, text: "Eat cat food", image: "Test Cultist" },
    { id: 3, text: "Dance naked", image: "bad heart" },
    { id: 63, text: "Burn book", image: "Test Cultistaoeu" }
  ];
};
Engine.prototype.buyCard = function(ritualId) {
  console.log("Buying card with ritualId: " + ritualId);
};
Engine.prototype.makeRitual = function(ritualId) {
  console.log("Ritual with ritualId: " + ritualId);
  return ["Loyalty Increased!",
          "2 followers left your cult.."];
};
Engine.prototype.getHistory = function() {
  return ["Kill chickens",
          "Dance naked"];
};
