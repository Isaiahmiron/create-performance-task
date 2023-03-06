function programSetUp () {
    text_list = [
    "You didn't pick a single option that was the popular vote; You're 100% not basic",
    "b",
    "c",
    "",
    ""
    ]
    userBooleanList = []
    Lauren_come_baaaaaaaack = [
    "Cats or dogs",
    "Blue or Red",
    "Bruv or Dove",
    "You or U"
    ]
    Lauren_come_baaaaack_Boolean = [
    false,
    true,
    false,
    true
    ]
    basicness = 0
}
function basicometer (userChoices: any[]) {
    for (let index = 0; index <= userChoices.length - 1; index++) {
        if (userBooleanList[index] == Lauren_come_baaaaack_Boolean[index]) {
            basicness += 1
        }
    }
}
let basicness = 0
let Lauren_come_baaaaack_Boolean: boolean[] = []
let text_list: string[] = []
let userBooleanList: boolean[] = []
let Lauren_come_baaaaaaaack: string[] = []
game.splash("You are about to play would you rather. Press A for the first option and B for the second option")
for (let index = 0; index <= Lauren_come_baaaaaaaack.length - 1; index++) {
    userBooleanList.push(game.ask(Lauren_come_baaaaaaaack[index]))
}
basicometer(userBooleanList)
