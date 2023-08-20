function stalkerPile(list) {
    return Math.floor(Math.random() * list.length);
}

function viewPile(view) {
    view = genPeopleView[stalkerPile(genPeopleView)]
    return view }

function viewGen() {
    let finalView = viewPile(genPeopleView)
    let finalAnswer = ""

    if (genPosView.includes(finalView)) {
        finalAnswer = genPosAnswer[stalkerPile(genPosAnswer)]
        return [finalView, finalAnswer] }
    
    if (genNegView.includes(finalView)) {
        finalAnswer = genNegAnswer[stalkerPile(genNegAnswer)]
        return [finalView, finalAnswer] } }
    
function friendPile(friend) {
    friend = genFriendAttitude[stalkerPile(genFriendAttitude)]
    return friend }

function friendGen() {
    let friendOpinion = friendPile(genFriendAttitude)
    let friendEvent = ""

    if (genFrAtPos.includes(friendOpinion)) {
        friendEvent = genFrPosRes[stalkerPile(genFrPosRes)]
        return [friendOpinion, friendEvent] }

    if (genFrAtNeg.includes(friendOpinion)) {
        friendEvent = genFrNegRes[stalkerPile(genFrNegRes)]
        return [friendOpinion, friendEvent] } }

export function stalkerGen() { 
    let appearance = genAppearance[stalkerPile(genAppearance)] 
    let hairColor = genHairColor[stalkerPile(genHairColor)]
    let hairType = genHairType[stalkerPile(genHairType)]
    let eyeColor = genEyeColor[stalkerPile(genEyeColor)]
    let eyeType = genEyeType[stalkerPile(genEyeType)]
    let goal = genGoal[stalkerPile(genGoal)]
    let result = genResult[stalkerPile(genResult)]
    let exposure = genExposure[stalkerPile(genExposure)]
    let feel = genFeel[stalkerPile(genFeel)]
    let injury = genInjury[stalkerPile(genInjury)]
    let attitude = genAttitude[stalkerPile(genAttitude)]
    let viewGenCarrier = viewGen()
    let friendGenCarrier = friendGen()
    let peopleView = viewGenCarrier[0]
    let answer = viewGenCarrier[1]
    let friendAttitude = friendGenCarrier[0]
    let friendEvent = friendGenCarrier[1]
    let event = genEvent[stalkerPile(genEvent)]



    let stalkerDone = `
    You are a ${appearance} stalker with ${hairType} ${hairColor} hair and ${eyeType} ${eyeColor} eyes.
    You got into stalking ${goal}, and ${result}.
    After your exposure to The Zone, ${exposure} Your feeling for the radiation there ${feel}
    ${peopleView} ${answer}
    ${injury}, and you tend to be pretty ${attitude} while stalking.
    You get along ${friendAttitude} with your fellow stalkers. You ${friendEvent}. 
    Your most notable event in The Zone was ${event}
`

    return stalkerDone }

let genAppearance = ["tired", "excitable", "calm", "pessimistic", "optimistic", "adventurous", "skittish", "irritable", "casual", "daredevil"]
let genHairColor = ["brown", "black", "blonde", "red", "ginger", "gray", "white"]
let genHairType = ["straight", "curly", "coarse", "fluffy", "shaggy", "wavy", "spiky", "coily"]
let genEyeColor = ["brown", "black", "gray", "white", "yellow", "red", "orange", "hazel", "purple", "blue", "green", "pink"]
let genEyeType = ["hazy", "bright", "dark", "pale"]
let genGoal = ["because you thought it would be fun", "after your friends roped you into it", "on a whim", "to make some extra money", "to explore something for once", "to protect someone you care about"]
let genResult = ["it's made you realize how dangerous life can be", "you feel like you lost a part of yourself while doing it", "it got stale after a while", "it's all you have to look forward to", "you don't think you'll ever get tired of it", "you're better off than you were before you started", "you've had way too many close calls", "you're even mentoring other people now", "you're tempted to live in The Zone one day"]
let genExposure = ["you've developed a few health problems.", "you think other people might view you strangely.", "you're concerned at the thought of having mutated children.", "you think your life might be getting shorter.", "you feel kind of like a superhero.", "you're paranoid about hospital visits.", "you're worried the cops will find out and throw you in jail.", "you don't feel too different, and don't see what all the buzz is about."]
let genFeel = ["is pretty intense.", "is almost nonexistent.", "is rather average.", "is better than that of your peers.", "always makes you nauseous.", "is so good that you're like a radar for irregularities.", "isn't that strong."]
let genPosView = ["Some people see you as cooler, others see you as irresponsible.", "Your friends seem pretty impressed by your skills.", "People look up to you now.", "People seem to treat you with more respect.", "You've met some people that are interested in stalking with you.", "Your continued survival has earned you some recognition."]
let genNegView = ["Your family doesn't know you're a stalker.", "Your friends regret getting you into stalking.", "People have started to give you weird looks.", "You hate the thought of anyone else knowing you're a stalker.", "Your stalking pals are the only people you can connect with anymore."]
let genPeopleView = genPosView.concat(genNegView)
let genPosAnswer = ["You don't really mind how people see you.", "Becoming a stalker might really have been worth it.", "You're determined to keep doing your best.", "You hope you'll live up to everyone's expectations.", "Maybe stalking isn't so bad."]
let genNegAnswer = ["The guilt always hangs over your head.", "You just keep pushing forward.", "You feel like your social life is crumbling around you.", "Sometimes you wonder what it'd be like to take more people along with you.", "You try not to think too much about what people think.", "You think people should lighten up a bit."]
let genInjury = ["You've almost died a few times in The Zone", "You've gotten hurt a few times in The Zone", "You've avoided injury so far in The Zone", "You've had a lot of close calls in The Zone", "You've been very lucky in The Zone"]
let genAttitude = ["reckless", "careful", "nervous", "patient", "cautious"]
let genFrAtPos = ["wonderfully", "well enough", "a lot", "most of the time", "with enthusiasm"]
let genFrAtNeg = ["poorly", "with a lot of frustration", "badly", "reluctantly", "against your will"]
let genFriendAttitude = genFrAtPos.concat(genFrAtNeg)
let genFrPosRes = ["hang out with them all the time", "consider them your family", "have a bit of a crush on one of them", "always look forward to seeing them", "want to be around them all the time", "feel like your life is better with them in it"]
let genFrNegRes = ["have to hold yourself back from snapping at them", "just keep your mouth shut and deal with them", "wish you were stalking with anyone else", "have considered ditching them more than a few times", "feel like you enjoy stalking less just from being with them"]
let genEvent = ["the time you had to run for your life from a patrol.", "a moment when you and your team found an anomaly that's always haunted you.", "a fateful day where you had to shoot your teammate to put them out of their misery.", "a time you found an item that you still keep with you to this day.", "the day you found the bodies of a less fortunate team.", "the day you found something you shouldn't have, and you can never stop thinking about it.", "the time where you, your friends, and some underpaid guard all just chilled out for a while.", "when one of your teams had a brutal falling out, and you had to kill your teammates to survive."]