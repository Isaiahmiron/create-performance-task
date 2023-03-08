function programSetUp () {
    thisOrThatList = [
    "Cats or Dogs?",
    "Movies or Series?",
    "Go out or stay in?",
    "Pen or Pencil?",
    "Computer or paper?",
    "Essay or Reading?",
    "Warm or Cold?",
    "Sweatshirt or T-shirt?",
    "Basketball or Football?",
    "Photography or Drawing?",
    "Headphone or Earbuds",
    "Music or Audiobooks",
    "Shorts or pants",
    "Hot coffee or Iced coffee?",
    "Netflix or Disney?"
    ]
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
    thisOrThatListOfBooleans = [
    false,
    true,
    false,
    true
    ]
    basicness = 0
}
function basicometer (userChoices: any[]) {
    for (let index = 0; index <= userChoices.length - 1; index++) {
        if (userBooleanList[index] == thisOrThatListOfBooleans[index]) {
            basicness += 1
        }
    }
}
let basicness = 0
let thisOrThatListOfBooleans: boolean[] = []
let text_list: string[] = []
let thisOrThatList: string[] = []
let userBooleanList: boolean[] = []
let Lauren_come_baaaaaaaack: string[] = []
game.splash("You are about to play would you rather. Press A for the first option and B for the second option")
for (let index2 = 0; index2 <= Lauren_come_baaaaaaaack.length - 1; index2++) {
    userBooleanList.push(game.ask(Lauren_come_baaaaaaaack[index2]))
}
programSetUp()
basicometer(userBooleanList)
