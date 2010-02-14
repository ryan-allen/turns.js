load('turns.js')

turns.run({
  title: "Ice Cream Store.",
  step: {
    tell: "You arrive at the ice cream store. What do you do?",
    choices: [
    {action: "Purchase some ice cream.",
     step: {tell: "You eat some ice cream and go home happy."}},

    {action: "Leave the store not purchasing anything.",
     step: {tell: "You go home happy that you saved your money."}},

    {action: "Pull out a knife and demand all their money.",
     step: {tell: "The staff quickly hand over the money and you flee the scene. What do you do with the money?",
     choices: [{action: "You purchase some ice cream from another store.",
                step: {tell: "You eat some ice cream, and go home with some extra cash to boot!"}},
               {action: "Go buy a bigger knife and a better disguise to conduct some more robberies.",
                step: {tell: "You continue your crime spree until finally the Police catch you and put you in jail."}}]}}] // bloody hell, looks like lisp.
  }
});
