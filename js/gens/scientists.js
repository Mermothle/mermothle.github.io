function scientistPile(list) {
    return Math.floor(Math.random() * list.length);
}

function personalityPile() {
    let yourPersonality = genPersonality[scientistPile(genPersonality)]
    return yourPersonality }

function opinionGen() {
    let finalPersonality = personalityPile()
    let finalOpinion = ""
    let finalMutOpinion = ""

    if (genPersonalityPos.includes(finalPersonality)) {
        finalOpinion = genPosOpinion[scientistPile(genPosOpinion)]
        finalMutOpinion = genMutPosEvent[scientistPile(genMutPosEvent)]
        return [finalPersonality, finalOpinion, finalMutOpinion] }
    
    if (genPersonalityNeg.includes(finalPersonality)) {
        finalOpinion = genNegOpinion[scientistPile(genNegOpinion)]
        finalMutOpinion = genMutNegEvent[scientistPile(genMutNegEvent)]
        return [finalPersonality, finalOpinion, finalMutOpinion] } } 


export function scientistGen() { 
    let appearance = genAppearance[scientistPile(genAppearance)]
    let hairColor = genHairColor[scientistPile(genHairColor)]
    let hairType = genHairType[scientistPile(genHairType)]
    let eyeColor = genEyeColor[scientistPile(genEyeColor)]
    let eyeType = genEyeType[scientistPile(genEyeType)]
    let opinionGenCarrier = opinionGen()
    let personality = opinionGenCarrier[0]
    let experience = genExperience[scientistPile(genExperience)]
    let num = genNum[scientistPile(genNum)]
    let goal = genGoal[scientistPile(genGoal)]
    let result = genResult[scientistPile(genResult)]
    let backstory = genBackstory[scientistPile(genBackstory)]
    let thought = genBackthought[scientistPile(genBackthought)]
    let view = genView[scientistPile(genView)]
    let opinion = opinionGenCarrier[1]
    let event = genEvent[scientistPile(genEvent)]
    let mutEvent = opinionGenCarrier[2]


    let scientistDone = `
    You are a${appearance} scientist with ${hairType} ${hairColor} hair and ${eyeType} ${eyeColor} eyes.
    You're ${experience} your field of work, and you work primarily with ${num} level mutants.
    You look upon your subjects with ${personality}, and the mutants ${opinion}
    You joined the facility because ${goal}, and ${result}
    ${backstory} It ${thought}
    You view your latest days at the facility ${view} 
    Your most notable day at the facility was ${event}
    ${mutEvent}
` 
    return scientistDone }

let genAppearance = [" confident", " nervous", " skittish", " cold", "n excitable", "n over-eager", " no-nonsense", " calm", " kind", " stern", "n exasperated", " ditzy"]
let genHairColor = ["brown", "black", "blonde", "red", "ginger", "gray", "white",]
let genHairType = ["straight", "curly", "coarse", "fluffy", "shaggy", "wavy", "spiky", "coily"]
let genEyeColor = ["brown", "black", "gray", "white", "yellow", "red", "orange", "hazel", "purple", "blue", "green", "pink"]
let genEyeType = ["hazy", "bright", "dark", "pale"]
let genPersonalityPos = ["kindness", "pity", "worry", "sadness", "anxiety", "sympathy", "confusion", "interest", "curiosity"]
let genPersonalityNeg = ["contempt", "disgust", "annoyance", "frustration", "hatred"]
let genPersonality = genPersonalityPos.concat(genPersonalityNeg)
let genExperience = ["fairly experienced in", "very experienced in", "in training in", "rather new to", "very confident in", "familiar enough with", "still learning the ropes of", "getting used to"]
let genNum = ["001", "002", "003", "004"]
let genGoal = ["you wanted to progress science", "you were always curious about the mutants", "you really needed the money", "your family pressured you into it", "you had friends working there", "someone you knew got brought there a long time ago", "you were a released mutant, always wondering what it was like to be a scientist", "you want to show up the other scientists"]
let genResult = ["it's been a mess from the start.", "you regret coming here every day.", "you actually really enjoy your position.", "you've made good friends with some of the more tolerable scientists.", "you've grown to find the mutants pitiable.", "you feel like your research has come a long way.", "you like the feeling of power this place gives you."]
let genBackstory = ["You've always heard about how mutants were perceived since you were little.", "You saw a mutant get into a massive fight, and they ended up dying.", "You've always found science fascinating in general, especially this new science.", "You want to be the best you can be, and saw becoming a scientist as an opportunity."]
let genBackthought = ["made you wonder if you made the right choices.", "made you think more about how you perceive life.", "leaves something to be desired.", "has left a dark shadow over your life.", "has made you even more curious than you were before."]
let genView = ["in a more positive light.", "as a slog sometimes.", "as new and interesting.", "as a never-ending whirl of chaos.", "with great anxiety.", "as an opportunity to keep learning.", "as a babysitting routine.", "poorly, since your fellows have started annoying you to death."]
let genPosOpinion = ["elicit a lot of sympathy from you.", "make you feel like a monster for experimenting on them.", "are people you get attached to too quicky."]
let genNegOpinion = ["get on your nerves more and more.", "are just subjects in your eyes.", "make you feel like a monster.", "are a sore point for you.", "make you feel sick on sight."]
let genOpinion = genPosOpinion.concat(genNegOpinion)
let genEvent = ["the time a riot broke out, and you almost got killed by one of the subjects. You're still scarred from it.", "the day your favorite subject was terminated. You still miss them.", "when one of the subjects reacted poorly to an experiment and had to be violently terminated.", "when a shouting match started amongst your superiors, and you just wanted to go home."]
let genMutPosEvent = ["You're currently planning on helping a mutant escape.", "You've helped a mutant escape in the past.", "No mutants have ever broken out under your care.", "You have connected a lot with your subjects.", "You like seeing how happy you can make the mutants.", "You try to offer comfort to any mutants in pain, even if you get scolded for it."]
let genMutNegEvent = ["No mutants have ever broken out under your care.", "You keep the mutants as obedient as you can.", "Whenever a mutant is causing problems, you're the one to handle it.", "The mutants have a fearful view of you, and you think they're just spineless.", "You've participated in some of the harshest experiments."]
let genMutEvent = genMutPosEvent.concat(genMutNegEvent)