function Engine() {
    
  this.cardsList = [
{ id: 1, text: "Sacrifice Chicken", cost: 100, image: "card_kill_chicken", "topic": "sacrifice of chickens", "loyaltyThreshold": 0.0, "loyaltyFailValue": 0.0, "loyaltySuccessValue": 0.1 },
{ id: 2, text: "Dance Naked", cost: 150, image: "card_dance_naked", "topic": "birthday suit birthday party", "loyaltyThreshold": 0.4, "loyaltyFailValue": -0.2, "loyaltySuccessValue": 0.6 },
{ id: 3, text: "Eat Cat Food", cost: 200, image: "card_eat_cat_food", "topic": "partaking of fancy cat food", "loyaltyThreshold": 0.6, "loyaltyFailValue": -0.6, "loyaltySuccessValue": 0.8 }
]
;
  this.shopAvailableCards = JSON.parse(JSON.stringify(this.cardsList)); // Deep copy hack
  this.playerAvailableCards = [];
  this.money = 450;
  this.currentDay = 1;
  this.overallLoyalty = 10;
  this.followersCount = 10;
    this.game = {};
  this.ritualHistory = [];
  this.rituals = [];
  this.mostRecentDonationDay = -1;
  var that = this;
    this.cardsList.forEach(function(entry){
        that.rituals[entry.id] = entry;
    });
  this.loyaltyRules = [
{"rangeStart":-9000, "rangeEnd": -20, "probabilityToStay": 0},
{"rangeStart":-20, "rangeEnd": -10, "probabilityToStay": 20},
{"rangeStart":-10, "rangeEnd": -9, "probabilityToStay": 20},
{"rangeStart":-9, "rangeEnd": -8, "probabilityToStay": 22},
{"rangeStart":-8, "rangeEnd": -7, "probabilityToStay": 23},
{"rangeStart":-7, "rangeEnd": -6, "probabilityToStay": 24},
{"rangeStart":-6, "rangeEnd": -5, "probabilityToStay": 25},
{"rangeStart":-5, "rangeEnd": -4, "probabilityToStay": 26},
{"rangeStart":-4, "rangeEnd": -3, "probabilityToStay": 27},
{"rangeStart":-3, "rangeEnd": -2, "probabilityToStay": 28},
{"rangeStart":-2, "rangeEnd": -1, "probabilityToStay": 29},
{"rangeStart":-1, "rangeEnd": 0, "probabilityToStay": 30},
{"rangeStart":0, "rangeEnd": 1, "probabilityToStay": 40},
{"rangeStart":1, "rangeEnd": 10, "probabilityToStay": 50},
{"rangeStart":10, "rangeEnd": 15, "probabilityToStay": 60},
{"rangeStart":15, "rangeEnd": 20, "probabilityToStay": 70},
{"rangeStart":20, "rangeEnd": 25, "probabilityToStay": 80},
{"rangeStart":25, "rangeEnd": 30, "probabilityToStay": 90},
{"rangeStart":30, "rangeEnd": 9000, "probabilityToStay": 100}
];
  this.followers = [];
};

Engine.prototype.setGame = function(game) {
    this.game = game;
    console.info("set game to " + game);
}

Engine.prototype.initRituals = function(ritualFileContent) {
    this.cardsList = JSON.parse( ritualFileContent );
    this.shopAvailableCards = JSON.parse(JSON.stringify(this.cardsList));
    var that = this;
    this.cardsList.forEach(function(entry){
        that.rituals[entry.id] = entry;
    });
}


Engine.prototype.initLoyaltyRules = function(loyaltyRulesContent) {
    this.loyaltyRules = JSON.parse(loyaltyRulesContent);
}

Engine.prototype.updateShop = function() {
    // make some cards available,
    // make others unavailable.
}

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
    var count = 0;
    this.followers.forEach(function(entry){
        count += (entry.staying? 1 : 0);
    });
    return count;
};

Engine.prototype.donationsRequestAllowed = function() {
    return (this.mostRecentDonationDay != this.currentDay) && (this.getFollowersCount() >= 1);
}

Engine.prototype.ritualsAllowed = function() {
    return (this.getFollowersCount() >= 1) && (this.playerAvailableCards.length > 0);
}

Engine.prototype.recruit = function() {
    var cost = 10;
    if(this.money >= cost) {
        this.money -= cost;
        
        var trueBelieverCount = 0;
        var activeFollowerCount = 0;
        this.followers.forEach(function(entry){
            trueBelieverCount += (entry.trueBeliever && entry.staying)?1:0;
            activeFollowerCount += (entry.staying && entry.ritualHistory.length > 0)? 1: 0;
        });
        var numRecruits = Math.min(this.game.rnd.between(15, 20), (this.game.rnd.between(50, 150) * ((1 + trueBelieverCount*3 + activeFollowerCount/5) / 100)) );
        if(numRecruits < 2) {
            numRecruits = this.game.rnd.between(1, 2);
        }
        numRecruits = Math.floor(numRecruits);
        var message = "Recruited ";
        if(numRecruits == 1) {
            message += "one prospective member.";
        } else {
            message += numRecruits + " prospective members.";
        }
        console.log(message);
        this.addRecruits(numRecruits);
        return [message];
    } else {
        console.info("Recruiting costs money!  You don't have enough!");
    }
};

Engine.prototype.addRecruits = function(numToAdd) {
    var averageIncome = this.calculateIncomeOfProspects(this.followers);
    for(var i=0; i < numToAdd; ++i) {
        var income = this.game.rnd.between(80,120) * averageIncome / 100;
        this.followers.push(this.buildFollower(income));
    }
}

Engine.prototype.buildFollower = function(disposeableIncome) {
    return {
        "loyalty": 0,
        "disposeableIncome": disposeableIncome,
        "staying": true,
        "trueBeliever": false,
        "ritualHistory" : []
    };
}

Engine.prototype.getCardsShop = function() {
  return this.shopAvailableCards;
};

Engine.prototype.getCardsRitual = function() {
  return this.playerAvailableCards;
};

Engine.prototype.buyCard = function(ritualId) {
    var found = false;
    var card = this.cardsList.filter(
        function(item){ 
            found = found || (item.id === ritualId);
            return item.id === ritualId;
        })[0];
    if(!found) return;
    
    found = false;
    var shopCard = this.shopAvailableCards.filter(
        function(entry){
            found = found || (entry.id === ritualId);
            return entry.id === ritualId;
        })[0];
    if(!found) return;

    var cardIndex = this.shopAvailableCards.indexOf(shopCard);
    this.shopAvailableCards.splice(cardIndex, 1);

    this.money -= card.cost;
    this.playerAvailableCards.push(card);
};

Engine.prototype.makeRitual = function(ritualId) {
    if(this.getFollowersCount() < 1) {
        return ["Rituals require followers!  (You have none.)"];
    }
    var card = this.cardsList.filter(function(item){ return item.id === ritualId; })[0];
    console.log(card, this.cardsList, ritualId, this.cardsList.filter(function(item){ return item.id === ritualId; }));
    
    var myRitualId = ritualId;
    var response = this.updateFollowers( this.handleRitual(myRitualId) );
    console.info(response);
    
    this.currentDay += 1;
    this.ritualHistory.push(card.text);
    this.overallLoyalty = this.calculateMeanLoyalty().toFixed(0);
    return [response.resultsText];
};

Engine.prototype.askForDonations = function() {
    if(this.mostRecentDonationDay == this.currentDay) {
        return;
    }
    this.mostRecentDonationDay = this.currentDay;
    
    var response = this.updateFollowers( this.performAskForDonations() );
    this.money = Math.floor(this.money);
    console.info(response);
    return [response.resultsText];
}

Engine.prototype.getHistory = function() {
  return this.ritualHistory;
};

Engine.prototype.likelihoodToStay = function(loyalty) {
    var prob = 100;
    this.loyaltyRules.forEach(function(entry){
        if(loyalty < entry.rangeEnd && loyalty >= entry.rangeStart) {
            prob = entry.probabilityToStay;
        }
    });
    return prob;
}

Engine.prototype.decidedToStay = function(loyalty) {
    var prob = this.likelihoodToStay(loyalty);
    return (this.game.rnd.between(0, 100) <= prob);
}

Engine.prototype.newBestValue = function(actual) {
    return {
        "sortVal" : Math.abs(actual),
        "actualVal" : actual
    };
}

Engine.prototype.calculateLoyalty = function(ritualValueHistory) {
    var bestValues = [];
    for(var i=0; i< 3; ++i){
        bestValues.push(this.newBestValue( 0 ));
    }
    
    var that = this;
    ritualValueHistory.forEach(function(entry){
        if(Math.abs(entry.value) > Math.abs(bestValues[2].sortVal) ) {
            bestValues[2] = that.newBestValue( entry.value );
            bestValues.sort(function numCompare(num1, num2){
                return num2.sortVal - num1.sortVal;
            });
        }
    });

    var totalValue = 0;
    var bestStr = "";
    bestValues.forEach(function(entry){
        totalValue += entry.actualVal;
        bestStr += entry.actualVal + " ";
    });
    return totalValue;
}

Engine.prototype.calculateIncomeOfProspects = function() {
    return 5;
    
    // need something that is based on cost of recruiting.
    if(this.followers.length == 0 ) {
        return 5;
    } else {
        var trueBelieverCount = 0;
        this.followers.forEach(function(entry){
            trueBelieverCount += entry.trueBeliever? 1: 0;
        });
        return 5 * Math.sqrt(this.followers.length *(trueBelieverCount + 1));
    }
}

Engine.prototype.calculateMeanLoyalty = function() {
    var count = 0;
    var totalLoyalty = 0;
    this.followers.forEach(function(entry){
        if(entry.staying) {
            ++count;
            totalLoyalty += entry.loyalty;
        }
    });
    if(count == 0) {
        count = 1;
    }
    return totalLoyalty / count;
}

Engine.prototype.passiveFundCollection = function() {
    
    var amount = 0;
    var that = this;
    this.followers.forEach(function(entry){
        if(!entry.staying || !entry.trueBeliever) {
            return;
        }
        amount += Math.min(entry.loyalty / 2, 100) * entry.disposeableIncome / that.game.rnd.between(80, 120);
    });
    amount = Math.floor(amount);
    this.money += amount;
    var message = "$" + amount + " was passively collected.  Total funds: $" + this.money.toFixed(0);
    console.log(message);        
    return message;
    
}

Engine.prototype.handleRitual = function(ritualId) {
    var that = this;
    console.info("handling ritual with id=" + ritualId);
    return function(entry){
        var ritual = that.rituals[ritualId];
        //console.info("inside generated function, handling ritual with id=" + ritual.id + " and ritualId = " + ritualId);
        var ritualValue;
        if(entry.loyalty >= ritual.loyaltyThreshold * 100) {
            ritualValue = ritual.loyaltySuccessValue * that.game.rnd.between(80, 120);
        } else {
            ritualValue = ritual.loyaltyFailValue * that.game.rnd.between(80, 120);
        }

        entry.ritualHistory.push( { "id": ritualId, "value": ritualValue} );
        return {
            "topic": ritual.topic, 
            "ritualId": ritualId, 
            "ritualValue": ritualValue, 
            "prospectLossRisk": true,
            "allowRebound": true
        };
    }
}

Engine.prototype.performAskForDonations = function() {
    var that = this;
    console.info("handling asking for funds");
    return function(entry) {
        var ritualValue = 0;
        console.info("entry for donation:");
        console.info(entry);
        if(entry.ritualHistory.length > 0) {
            ritualValue = -Math.abs(30) * that.game.rnd.between(0, 120) / 100;
            entry.ritualHistory.push( { "id": "donation", "value": ritualValue} );
            that.money += entry.disposeableIncome * Math.min(1, (entry.loyalty/ 300));
        }
        return {
            "topic": "the pressuring of members for funds", 
            "ritualId": "donation", 
            "ritualValue": ritualValue, 
            "prospectLossRisk": true,
            "allowRebound": true
        };
    }
    
}

Engine.prototype.performShakedown = function() {
    return function(entry) {
        var ritualValue = 0;
        if(entry.ritualHistory.length > 0) {
            ritualValue = -Math.abs(entry.loyalty) * this.game.rnd.between(0, 120) / 100;
            entry.ritualHistory.push( { "id": "shakedown", "value": ritualValue} );
            money += entry.disposeableIncome;
        }
        return {
            "topic": "the shaking down of members for funds", 
            "ritualId": "shakedown", 
            "ritualValue": ritualValue, 
            "prospectLossRisk": false,
            "allowRebound": false
        };
    }
}

Engine.prototype.updateFollowers = function(action) {
    // directly modify followers
    var results = {
        "prospectsLeaving" : 0,
        "followersLeaving": 0, 
        "deltaMeanLoyalty": 0, 
        "trueBelieversAdded": 0,
        "trueBelieversDowngraded" : 0,
        "trueBelieversLost": 0,
        "resultsText" : ""
    };

    var oldMeanLoyalty = this.calculateMeanLoyalty();

    //var ritual = rituals[ritualId];
    var actionResult;
    var that = this;
    
    this.followers.forEach(function(entry){
        if(!entry.staying) {return;}
        actionResult = action(entry);
        var ritualValue = actionResult.ritualValue;

        var oldLoyalty = entry.loyalty;
        entry.loyalty = that.calculateLoyalty(entry.ritualHistory);
        if(entry.ritualHistory.length > 0 || actionResult.prospectLossRisk) {
            entry.staying = that.decidedToStay( entry.loyalty );
        }
        if(!entry.staying) {
            if(entry.ritualHistory.length > 1) {
                ++results.followersLeaving;
            } else {
                ++results.prospectsLeaving;
            }
        }
        if(entry.staying && ritualValue < 0 && actionResult.allowRebound) {
            entry.ritualHistory.pop();
            var newRitualValue = -ritualValue * that.game.rnd.between(-100, 250)/100;
            entry.ritualHistory.push( { "id": actionResult.ritualId, "value": newRitualValue} );
            entry.loyalty = that.calculateLoyalty(entry.ritualHistory);
        }
        var currentLikelihoodToStay = that.likelihoodToStay(entry.loyalty);
        if(that.likelihoodToStay(oldLoyalty) < 100 && currentLikelihoodToStay == 100) {
            ++results.trueBelieversAdded;
            entry.trueBeliever = true;
        }
        if(that.likelihoodToStay(oldLoyalty) == 100) {
            if(!entry.staying) {
                ++results.trueBelieversLost;
            } else if(currentLikelihoodToStay < 100) {
                ++results.trueBelieversDowngraded;
                entry.trueBeliever = false;
            }
        }
    });
    if(actionResult) {
        console.log("actionResult:");
        console.log(actionResult);
        results.deltaMeanLoyalty = this.calculateMeanLoyalty() - oldMeanLoyalty;
        if(oldMeanLoyalty == 0) {
            oldMeanLoyalty = results.deltaMeanLoyalty;
        }
        results.deltaMeanLoyaltyPercent = results.deltaMeanLoyalty * 100 / oldMeanLoyalty;

        var resultsText = "Following " + actionResult.topic + ", ";
        var nothingHappened = true;

        if(results.prospectsLeaving > 0) {
            nothingHappened = false;
            if(results.prospectsLeaving > 1) {
                resultsText += "" + results.prospectsLeaving + " prospective members decided not to return, ";
            } else {
                resultsText += "one prospective member decided not to return, "
            }
        }
        if(results.followersLeaving > 1) {
            var maybeTrue = (results.trueBelieversLost == results.followersLeaving)?"true believers":"followers";
            resultsText += results.followersLeaving + " " + maybeTrue + " left";
            nothingHappened = false;
        } else if(results.followersLeaving > 0) {
            var maybeTrue = (results.trueBelieversLost == results.followersLeaving)?"true believer":"follower";
            resultsText += "one " + maybeTrue + " left";
            nothingHappened = false;
        }
        if((results.trueBelieversLost < 1 || (results.trueBelieversLost == results.followersLeaving)) && (results.followersLeaving > 0)) {
            resultsText += ", ";
        } else if(results.trueBelieversLost != results.followersLeaving) {
            nothingHappened = false;
            resultsText += " including " + results.trueBelieversLost + " true believer";
            resultsText += (results.trueBelieversLost > 1)?"s":"";
            resultsText += ", ";
        }

        if(results.trueBelieversAdded > 1) {
            nothingHappened = false;
            resultsText += "" + results.trueBelieversAdded + " people became true believers, "
        } else if(results.trueBelieversAdded == 1) {
            nothingHappened = false;
            resultsText += "one person became a true believer, "
        }

        if(results.trueBelieversDowngraded > 1) {
            nothingHappened = false;
            resultsText += "" + results.trueBelieversDowngraded + " true believers had their faith shaken to the core, "
        } else if(results.trueBelieversDowngraded == 1) {
            nothingHappened = false;
            resultsText += "one true believer no longer believes, "
        }

        var maybeAnd = nothingHappened?"": "and ";

        if(results.deltaMeanLoyalty > 0) {
            resultsText += maybeAnd + "overall loyalty increased!";
        } else if (results.deltaMeanLoyalty < 0) {
            resultsText += maybeAnd + "overall loyalty decreased!";
        } else {
            resultsText += maybeAnd + "overall loyalty did not change!";
        }
        results.resultsText = resultsText;
        console.info(resultsText);
        return results;
    }
}
