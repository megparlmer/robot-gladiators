//prompting user to enter name
var playerName = window.prompt("What is your robot's name?")
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

//enemy info
var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

//beginning fight
var fight = function(enemyName) {
    while(enemyHealth > 0) {

    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    //if player chooses to fight, then fight
    if (promptFight === "fight" || promptFight === "FIGHT") {
    //subtract value of "playerAttack" from value of "enemyHealth" and use that to update the value of "enemyHealth" variable
        enemyHealth = enemyHealth - playerAttack;
        //log a message to console to confirm it worked
        console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " health remaining."
        );

    //check enemy's health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");
        } else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }
    //subtract value of "enemyAttack" from value of "playerHealth" and use that to update value of "playerHealth" variable
        playerHealth = playerHealth - enemyAttack;
    //log a message in console to confirm it worked
        console.log(
            enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
        );

    //check player's health
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
        }
        else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
    //if player chooses to skip
    }   else if (promptFight === "skip" || promptFight === "SKIP") {
    //confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

    //if yes (true), leave fight
        if (confirmSkip) {
            window.alert(playerName + " has decided to skip this fight. Goodbye!");
        //subtract money from playerMoney for skipping 
            playerMoney = playerMoney - 2;
        }
    //if no (false), ask a question again by running fight() again
        else {
            fight();
        }
    }   else {
        window.alert("You need to choose a valid option. Try again!");
    } 
    }
};

for(var i = 0; i < enemyNames.length; i++) {
    debugger;
    fight(enemyNames[i]);
}
