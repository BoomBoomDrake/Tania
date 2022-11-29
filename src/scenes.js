class Scene {
  constructor(name, text, choices) {
    this.name = name;
    this.text = text;
    this.choices = choices;
  }
}

// 2
const B1 = new Scene("Go shopping", null, null);
const B2 = new Scene("Keep Walking.", null, null);

const B = new Scene(
  "Explore the city.",
  `You make your way into the city to explore. You can always find an inn later! Rinport is a lively city, filled with well-off looking people. You pass by many house parties, a large market, and more local shops.`,
  [B1, B2]
);

const A1A1A1 = new Scene(
  "Enjoy the mutton.",
  `"I say, it be delicious! Find yerself a table and I'll bring it right out" the Dwarf tells you. You turn  your back to the bar, taking in the large crowd, as your eyes scan the place for an empty seat. Every table in the place is occupied, however you do notice a table only occupied by two Gnomes who are singing with the Minstrel, that has some seats available.`
  // [A1A1A1A, A1A1A1B]
);

// 16
const A1A1A = new Scene(
  "Pay 1 gold.",
  `You reach into your coin-purse and pull out 1 gold coin and lay it on the counter. The dwarf grabs the coin and bites it. "Thank ye, I'm sure you'll be most happy. Would ye like our Mutton for dinner or shall I have our cook prepare you something else?"`
  // [A1A1A1, A1A1A2]
);
const A1A1B = new Scene();
const A1A2A = new Scene();
const A1A2B = new Scene();
const A1B1A = new Scene();
const A1B1B = new Scene();
const A1B2A = new Scene();
const A1B2B = new Scene();
const A2A1A = new Scene();
const A2A1B = new Scene();
const A2A2A = new Scene();
const A2A2B = new Scene();
const A2B1A = new Scene();
const A2B1B = new Scene();
const A2B2A = new Scene();
const A2B2B = new Scene();

// 8
const A1A1 = new Scene(
  "Ask for food and a room.",
  `"Aye laddy, I have just what ye need!" The Dwarf rummages through a drawer and pulls out an ornate brass key. "Upstairs, room number 3. You'll find it furnished, and clean. This also includes a nice hot dinner and some ale. That'll be 1 gold."`,
  [A1A1A, A1A1B]
);
const A1A2 = new Scene();
const A1B1 = new Scene();
const A1B2 = new Scene();
const A2A1 = new Scene();
const A2A2 = new Scene();
// const A2B1 = new Scene();
const A2B2 = new Scene();

// 4
const A1A = new Scene(
  "Talk to the barkeep.",
  `You approach the Dwarf that's behind the bar. He stops wiping out the mug and looks up to you. "Eh, what'll it be there laddy?"`,
  [A1A1, A1A2]
);
const A1B = new Scene(
  "Find a table.",
  `As you look around the room you see an empty table in a corner. You walk over to it and sit down as the minstrel starts playing another lively song. Not long after you sit down, the same maid comes over to your table. "Why Hiya! What'll it be? We have mutton on special and the ale will keep you warm!" You can't help but notice how beautiful the girl is with her long auburn hair and shockingly blue eyes.`,
  [A1B1, A1B2]
);
const A2A = new Scene();
const A2B = new Scene();

// 2
const A1 = new Scene(
  "Go inside.",
  "You enter a lively place! People all around laughing, dancing, eating and enjoying themselves. Next to the hearth, a minstrel is playing an upbeat tune keeping the crowds attention to the fun times to be had. As you're taking in your surroundings a young maiden carries a large tray that's loaded up with large hunks of roast mutton, fresh bread and cream, a dark frothy beer and whisks her way through the crowd to set it at a table. The delicious smells make your stomach rumble, as you've forgotten how delicious a hot meal can be. Further in to the building, through the crowd, is an old bar made out of pieces of drift wood. A Dwarf with a long beard stands behind the counter, wiping out an empty mug",
  [A1A, A1B]
);
const A2 = new Scene(
  "Find another place.",
  "You take a mental note of The Kraken's Nest but it seems a little too lively for your current mood. You just want a nice, quiet evening in a warm bed with a full belly. As you continue making your way into the city you pass quite a few groups of people whom are laughing and having a great time. Most seem to have had a bit to drink. After rounding a corner, you come upon Sailin Inn. It's a weathered, old building but looks cozy. Sailin Inn seems to be a quieter place.",
  [A2A, A2B]
);

// Path A:
const A = new Scene(
  "Find an inn.",
  "You make your way through the city and find a placed called The Kraken's Nest. The smell of roasted mutton, fresh bread and sour beer greet your nostrils in a tantilizing way.",
  [A1, A2]
);

const TakeTheShip = new Scene(
  "Take the ship.",
  "You arrive in Rinport after a long journey upon The Sea Mist. After months out to sea, a hot meal and warm bed sound amazing!",
  [A, B]
);

export const storyArc = new Scene(
  "Prologue",
  `The year is 426 in a mystical world filled with wonder, magic, treasure, and danger! After years of service in the King's army, you have retired to a nice little village, Kostov, on the outskirts of The Pitch.  You have made a simple life now, tending to a few cattle and the crops, while taking care of your wife, Maria, and two children, Thelon and Ruby. Reports had been told, from riders, of raiders attacking small villages along the coast, but they wouldn't dare travel this close to the Kingdom. Paying it no mind, you continue on your business, basking in the sunshine, laughing and giggling with your kids. The horrors you faced in the past are locked away and buried. A night, seemingly like any other night, although a heavy stillness lingers in the air. Your family had a great day working the field, and now are enjoying each others company while Maria is fixing a delicious stew. That's when the screams became audible. Knowing things aren't right, you grab your family and rush them down to the hidden cellar. The moments stretch on feeling like hours, as the screams grew louder, painful memories erupt in your mind of a previous life. Soon, you hear them. Gruff voices right about you, and the sounds of destruction of your home. You keep a worked hand held firmly over Ruby's mouth to not give a hint to your hiding spot. Eventually the raiders leave, and after a while the stillness takes back over the night air. You bring your family out of their hiding spot only to find a destroyed home. Everything, destroyed or looted. Peaking outside of your splintered door you see the village is on fire. You grab your family and run, taking a few meager belongings you were able to salvage and head to Riverrun. Riverrun is a large town, protected by the King's army. No raider would dare attack them. Maria has distant family living there, that's your only chance.

A fortnight passes, as you travel by foot to Riverrun. Eventually though, you make it to Riverrun and find the Tailor's, Maria's family. They welcome you in, but can't support all of the extra mouths forever. The raider's destroyed your livelihood and looted any savings, which were not a lot, but it was honest money. A fable of old, always crossed your mind, the one of  Philitrip Gustav, a wild, Gnome pirate of old who is said to have had the largest fleet of ships ever to sail The Emerald Sea. Until he invoked the wrath of the God's and his entire fleet was ravaged. The story goes that Philitrip was able to escape on a small sloop with his treasure. He was never heard from again. 

The story was one that Thelon and Ruby always loved the hear. Even the local historians agreed it was mostly true, that Philitrip actually existed, however the disagree on the amount of treasure he carried. Some say it rivaled that of Kingdoms, and others say it was just a myth Philitrip created to be seen as more powerful than he was. Whatever the case, Philitrip had to have existed! What if you could find that treasure? You could afford anything you wanted! You could save your family, and track down these raiders and bring them to justice! With nothing left to lose, and everything to gain, you bid farewell to your family with a promise to restore everything.`,
  [TakeTheShip]
);
