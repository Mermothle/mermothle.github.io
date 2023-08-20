function mutantPile(list) {
    return Math.floor(Math.random() * list.length);
}

//Generates @TOO#-### mutant code
function codeGen() {
    let codeLetter = alphabet[mutantPile(alphabet)]
    let codeT = "T"
    let codeDash = "-"
    let codeRank = "0"
    let codeNumbers = Math.floor(Math.random() * (999 - 100) + 100).toString()

    let urMutation = typeGen(genMutationType)

    if (genMutation001.includes(urMutation)) {
        codeRank = "001"
    }
    else if (genMutation002.includes(urMutation)) {
        codeRank = "002"
    }
    else if (genMutation003.includes(urMutation)) {
        codeRank = "003"
    } else if (genMutation004.includes(urMutation)) {
        codeRank = "004"
    } else { codeRank = `${urMutation}`}

    let completedCode = codeLetter + codeT + codeRank + codeDash + codeNumbers
    return [completedCode, urMutation, codeRank]
}

// Get backstory
function backstoryGen(origin) {
    let backstoriesBaby = genOriginStoryBaby
    let backstoriesChild = genOriginStoryChild
    let backstoriesAdult = genOriginStoryAdult
    let urBackstory = origin

    if (backstoriesBaby.includes(urBackstory)) {
        urBackstory = genBabystories[mutantPile(genBabystories)]
        return urBackstory
    }
    else if (backstoriesChild.includes(urBackstory)) {
        urBackstory = genChildstories[mutantPile(genChildstories)]
        return urBackstory
    }
    else if (backstoriesAdult.includes(urBackstory)) {
        urBackstory = genAdultstories[mutantPile(genAdultstories)]
        return urBackstory
    }
}

// Get mutant 'type'i.e. 1, 2, 3, 4
function typeGen(yourMutation) {
    yourMutation = genMutationType[mutantPile(genMutationType)]
    return yourMutation
}

// Mutant appearance
function appearanceGen() {
    let oddLook = Math.floor(Math.random() * (11 - 1) + 1)
    let oddAppearance = ""
    let oddHair = Math.floor(Math.random() * (11 - 1) + 1)
    let oddHairColor = ""
    let allHairs = genHairColor.concat(genBonusHairColors)

    if (oddLook === 2 || oddLook === 5 || oddLook === 9) {
        oddAppearance = genBonusAppearance[mutantPile(genBonusAppearance)]
    }
    else {
        oddAppearance = ""
    }

    if (oddHair === 2 || oddHair === 9) {
        oddHairColor = allHairs[mutantPile(allHairs)]
    }
    else {
        oddHairColor = genHairColor[mutantPile(genHairColor)]
    }
    return [oddAppearance, oddHairColor]
}

// Bonus tidbits
function extraPile(extra) {
    extra = genExtras[mutantPile(genExtras)]
    return extra
}

// How well you get along with other mutants; gets type
function buddyPile(buddy) {
    buddy = genBuddyAttitude[mutantPile(genBuddyAttitude)]
    return buddy
}

// Generate full opinion
function buddyGen() {
    let buddyOpinion = buddyPile(genBuddyAttitude)
    let buddyEvent = ""
    let extraFinal = ""
    
    if (genBuAtPos.includes(buddyOpinion)) {
        buddyEvent = genBuPosRes[mutantPile(genBuPosRes)]
        extraFinal = genExtrasPN[mutantPile(genExtrasPN)]
        return [buddyOpinion, buddyEvent, extraFinal] }

    
    if (genBuAtNeg.includes(buddyOpinion)) {
        buddyEvent = genBuNegRes[mutantPile(genBuNegRes)]
        extraFinal = genExtrasNN[mutantPile(genExtrasNN)]
        return [buddyOpinion, buddyEvent, extraFinal] }
}

// The big chungus gen
export function mutantGen() { 
    let physicalAppearance = genPhysicalAppearance[mutantPile(genPhysicalAppearance)]
    let appearanceGenCarrier = appearanceGen()
    let hairColor = appearanceGenCarrier[1]
    let oddAppearance = appearanceGenCarrier[0]
    let hairType = genHairType[mutantPile(genHairType)]
    let eyeColor = genEyeColor[mutantPile(genEyeColor)]
    let eyeType = genEyeType[mutantPile(genEyeType)]
    let buddyGenCarrier = buddyGen()
    let extras = buddyGenCarrier[2]
    let mishaps = genMishaps[mutantPile(genMishaps)]
    let codeGenCarrier = codeGen()
    let mutationType = codeGenCarrier[1]
    let medicalProblems = genMedicalProblems[mutantPile(genMedicalProblems)]
    let originStory = genOriginStory[mutantPile(genOriginStory)]
    let backstoryGenCarrier = backstoryGen(originStory) // YOU
    let finalCode = codeGenCarrier[0]
    let fCode = finalCode.toString()
    let buddyAttitude = buddyGenCarrier[0]
    let normalBuddyAttitude = `You get along ${buddyAttitude} with your fellow mutants.`
    let buddyEvent = buddyGenCarrier[1]
    let normalBuddyEvent = buddyEvent
    if (codeGenCarrier[2] === "001" || codeGenCarrier[2] === "004") {
        let urNumber = codeGenCarrier[2]
        normalBuddyAttitude = `As a ${urNumber}-type mutant, you don't get exposure to other mutants for the most part.`
        normalBuddyEvent = genMutantWish[mutantPile(genMutantWish)] }
    let caretakerDescriptor = genCaretakerDescriptor[mutantPile(genCaretakerDescriptor)]
    let caretakerAppearance = genCaretakerAppearance[mutantPile(genCaretakerAppearance)]
    let caretakerPersonality = genCaretakerPersonality[mutantPile(genCaretakerPersonality)]
    let caretakerView = genCaretakerView[mutantPile(genCaretakerView)]


    let mutantDone = `
    Your Facility code is ${fCode}.
    You are a${physicalAppearance} mutant with ${hairType} ${hairColor} hair and ${eyeType} ${eyeColor} eyes.
    Your mutation is ${mutationType}, and you suffer from ${medicalProblems}. ${oddAppearance}
    You came to the Facility ${originStory}. ${backstoryGenCarrier}
    ${extras}
    ${mishaps}
    ${normalBuddyAttitude} ${normalBuddyEvent}
    One of your usual caretakers is a ${caretakerDescriptor} ${caretakerAppearance} scientist, who ${caretakerPersonality} You ${caretakerView}
`
    return mutantDone
}

let genPhysicalAppearance = [" sickly", " nervous", " confident", " relatively normal", " very unstable", "n aloof", "n uncaring", "n overly friendly", " kindhearted", " typical", "n unusual", " peppy", " dour", " positive", " tough", " determined"]
let genHairColor = ["brown", "black", "blonde", "red", "ginger", "gray", "white",]
let genHairType = ["straight", "curly", "coarse", "fluffy", "shaggy", "wavy", "spiky", "coily"]
let genEyeColor = ["brown", "black", "gray", "white", "yellow", "red", "orange", "hazel", "purple", "blue", "green", "pink"]
let genEyeType = ["hazy", "bright", "dark", "pale"]
let genMutation001 = ['teleportation', 'transformation', 'extreme strength', 'telekinesis', 'portals', 'influence', 'mind reading', 'memory manipulation', 'healing others', 'causing good luck', 'a form of elemental kinesis']
let genMutation002 = ['telepathy', 'prophecy', 'regeneration', 'heightened senses', 'rapid aging', 'zombification', 'body separation', 'xenoglossy', 'invisibility', 'insomnia', 'astral projection', 'invincibility', 'perfect immunity', 'levitation', 'hypermobility', 'dream manipulation', 'stretchy biology', 'bioluminesence', 'multicolored blood', 'going chameleon', 'incredible hearing', 'alchemizing items in your stomach', 'emitting light', 'controlling shadows', 'being amphibious', 'having aquatic traits', 'immunity to disease']
let genMutation003 = ['growing crystals', 'generating heat', 'emitting cold', 'having animalistic features', 'magnetism', 'liquid control', 'producing venom', 'super speed', 'emotion draining', 'melting yourself', 'liquefying objects', 'temperature control', 'having a crushing bite force']
let genMutation004 = ['spitting acid', 'combustion', 'uncontrollable rage', 'mental lockdown', 'breathing fire', 'emitting dangerous levels of radiation', 'causing bad luck', 'causing necrosis', 'having an ultrasonic voice', 'having a deadly stinger', 'having a dangerous maw', 'amoeboid skin', 'shedding plague', 'hosting a fungal network', 'hyper compression']
let genMutationType = genMutation001.concat(genMutation002, genMutation003, genMutation004)
let genMedicalProblems = ["crippling migraines", "stomach pain", "heart irregularity", "breathing troubles", "fragile skin", "vertigo", "chronic pain", "forgetfulness", "difficulty getting around", "sensory overload", "crippling anxiety", "obsessive compulsions", "restlessness", "joint pain", "toothaches", "nerve pain", "spinal issues", "temperature sensitivity", "a poor immune system", "chronic fatigue", "endless paranoia", "hemophilia", "intrusive thoughts", "spinal issues", "mouth problems", "ear issues", "an inability to focus", "exhaustion", "shortness of breath", "compulsive itching", "spontaneous pain", "constant coughing", "having a scratchy throat", "mouth pain", "difficulty sleeping", "trouble staying awake", "overt clumsiness", "delusions", "varying hallucinations", "spasms", "compulsive rocking"]
let genOriginStoryBaby = ["as a baby, taken at birth", "as a baby, given willingly by your parents"]
let genOriginStoryChild = ["as a child, for utilizing your mutation publicly", "as a child, handed over by tired parents", "as a child, caught as a runaway", "as a child, because you thought it would be fun", "as a child, as the result of a thorough investigation"]
let genOriginStoryAdult = ["as an adult, caught out by accident", "as an adult after turning yourself in", "as an adult, betrayed by those you loved"]
let genExtrasPos = ["You're surprisingly popular in the facility.", "You wish you could save everyone.", "Sometimes it's hard not to feel inferior to everyone else.",]
let genOriginStory = genOriginStoryBaby.concat(genOriginStoryChild, genOriginStoryAdult)
let genExtrasNeg = ["The other subjects are nervous around you.", "You value your life over that of others.", "You think some of the other subjects deserve to be terminated.", "You feel like you might not be around for much longer."]
let genExtrasNeu = ["You have a lot of hobbies, and they're one of your few joys.", "You wish you could be outside.", "You've grown very attached to one of the scientists that tends to you.", "You're always trying to earn the scientists' approval.", "Your main goal is to escape one day.", "You want to become a scientist, no matter how realistic that is.", "You kind of enjoy the fight testing.", "You're just doing your best to survive.", "You feel envious of other subjects sometimes.", "You feel like the scientists are always watching you.", "You're always watching and gauging the danger levels of the other subjects."]
let genExtras = genExtrasPos.concat(genExtrasNeg, genExtrasNeu)
let genExtrasPN = genExtrasPos.concat(genExtrasNeu)
let genExtrasNN = genExtrasNeg.concat(genExtrasNeu)
let genMishaps = ["One time, you tried to eat soap, and the scientists had to wrestle it away from you.", "At some point, you snapped and tried to fight a scientist, and they look upon you more strictly as a result.", "You've gone out of your way to try befriending the scientists, to varying levels of success.", "You crawled in a drawer and pretended to be clothes once.", "You stayed in the bathroom hiding from the cameras for so long the scientists thought you were dead.", "You attempted to create a revolution one time, but you just got scolded.", "The time you made a campfire out of your study room is commonly recounted as the time the Facility found out their fire alarms were broken.", "After oversleeping for basically every event in your life, the scientists eventually shoved an alarm clock directly into your pillow.", "Trying to escape through a wall was not your best idea, because you had to get yanked out in a very unflattering fashion.", "Your refusal to eat your vegetables is so notorious that short of physical restraints, the scientists always have to bribe you.", "You fixate very intensely on a single one of your studies, and it distracts you from everything else.", "Sometimes you try to hide from the scientists, but they always know where you are. You keep doing it anyways.", "You've memorized your daily routine to the point that any deviation throws you off.", "You leave your sink running because you like the noise, and the scientists keep telling you to shut it off.", "You demanded enrichment, and when the scientists gave you multicolored books, you turned them into origami and bounced them off your cell walls."]
let genBabystories = ["You wonder what it would be like to have a real family.", "You wonder if you family hated you.", "You're convinced your real family will come and get you one day.", "You think one of your parents might be a scientist.", "A life growing up in the Facility has left you used to the monotony.", "You think some of the scientists might view you as your own.", "You grew up alongside another subject and are very protective of them."]
let genChildstories = ["You miss playing outside like you used to.", "You hope your friends are okay.", "You wonder if your family is still thinking about you.", "You hold a lot of regrets.", "You wish you were better to the people around you.", "You try to cling to your good memories.", "You miss your parents.", "Sometimes you try to think of some of the scientists as your family, but it's not the same.", "The world is so dull now.", "You grew up alongside another subject and are very protective of them."]
let genAdultstories = ["You wonder if everything was worth it.", "Your life has been a mess, and you wonder if this place will make it worse.", "You've been through enough to try and stay optimistic, but it's hard.", "Holding a job was better than being in this place.", "If your family is still out there, you hope they're okay.", "You wonder if the choices you made in life were the right ones.", "You wonder if you got what was coming to you."]
let genBonusAppearance = ["You have small horns.", "Your eyes are slitted.", "Your skin is discolored in some places.", "You have scaly formations in some spots on your skin.", "You have a tail.", "Your hair is bi-colored.", "Your eyes have additional colors in them.", "Your pupils are strangely shaped.", "There are tattoo-like markings on your skin.", "Your skin sometimes takes on an unusual tint.", "Your anatomy has always been a bit unusual.", "Your hair is strangely colored at the ends.", "Your teeth are sharper than usual."]
let genBonusHairColors = ["blue", "pink", "purple", "green"]

let genBuAtPos = ["wonderfully", "well enough", "a lot", "most of the time", "with enthusiasm", "willingly"]
let genBuAtNeg = ["poorly", "warily", "badly", "reluctantly", "hesitantly", "against your will"]
let genBuddyAttitude = genBuAtPos.concat(genBuAtNeg)
let genBuPosRes = ["You learned how to draw with a few new friends.", "One time, a food fight broke out, and you had fun, even if you got scolded afterwards.", "You and the others have friendly competitions sometimes."]
let genBuNegRes = ["You wish you could fight the other mutants more.", "You feel relief when an annoying subject gets terminated.", "You got into a brawl once, and came out on top. The scolding was worth it."]
let genMutantWish = ["You wish you could talk with the other mutants.", "You wonder what it would be like to make friends.", "You try not to focus too much on the isolation.", "Maybe if you're good enough, you'll be allowed to see them.", "You've heard bad things, so you'd rather stay away from the other mutants anyways.", "You find the other mutants intimidating, so you don't mind.", "The few times you do see them, you can't help but envy them sometimes."]

let genCaretakerDescriptor = ["frumpy", "absentminded", "skittish", "serious", "excitable", "gentle", "curious", "irritable", "calm", "eerie", "neurotic"]
let genCaretakerAppearance = ["older", "younger", "new", "experienced", "mainstay", "grunt", "high-ranking"]
let genCaretakerPersonality = ["is usually kind with you.", "is always checking up on you.", "is typically focused on getting results out of you.", "is protective over you.", "views you exactly as what you are - a test subject.", "views you as someone worthy of pity.", "always looks at you like you're stupid.", "would probably terminate you if they got the chance.", "visibly enjoys their time with you.", "seems uninterested in you."]
let genCaretakerView = ["feel like an object in their presence.", "get depressed around them.", "feel like you could do better.", "are anxious around them.", "are happy to see them, despite everything.", "want to win them over more.", "want to hide away when they show up.", "feel like you need to earn their approval or you'll die.", "are curious about your own experiments.", "have learned to be curious about the experiments of others from them.", "feel some kinship to them, because they are also a mutant."]

let alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]