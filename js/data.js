/*
  ============================================================
  SITE_DATA — the ONE file to edit for all your real content.
  Change text, dates, photo paths, language phrases, quiz questions,
  and the song here. Nothing else in the site needs to change.
  ============================================================
*/
/*
  All photos from images/ and images2/, copied into assets/photos/ as gallery-1..gallery-58.
  Each entry has its own title + caption (no repeated "Memory N" placeholders).
*/
const GALLERY_PHOTOS = [
  { src: "assets/photos/gallery-1.jpg", alt: "The spark", caption: "Every love story is beautiful, but ours is my favorite." },
  { src: "assets/photos/gallery-2.jpg", alt: "No filter needed", caption: "The best decision I ever made was choosing you." },
  { src: "assets/photos/gallery-3.jpg", alt: "Dressed up, still us", caption: "Just a guy who had no idea his whole life was about to change." },
  { src: "assets/photos/gallery-4.jpg", alt: "Flowers, just because", caption: "Still can't believe you chose me." },
  { src: "assets/photos/gallery-5.jpg", alt: "Somewhere new together", caption: "Just me, still completely captivated by you after all this time." },
  { src: "assets/photos/gallery-6.jpg", alt: "The little ones", caption: "The reason my world makes sense." },
  { src: "assets/photos/gallery-7.jpg", alt: "Under the lights", caption: "7 years down, forever to go." },
  { src: "assets/photos/gallery-8.jpg", alt: "Golden and grateful", caption: "We've shared a thousand meals, but I still love watching you eat." },
  { src: "assets/photos/gallery-9.jpg", alt: "Just being ourselves", caption: "Ikaw ang aking tahanan sa gitna ng magulong mundo." },
  { src: "assets/photos/gallery-10.jpg", alt: "Family, in frame", caption: "Sa hirap at ginhawa, ikaw ang aking kasama." },
  { src: "assets/photos/gallery-11.jpg", alt: "Field of gold", caption: "7 years of \"Where do you want to eat?\" and I'd still wait a lifetime for your answer.\"." },
  { src: "assets/photos/gallery-12.jpg", alt: "Chalkboard smile", caption: "To love and be loved is to feel the sun from both sides." },
  { src: "assets/photos/gallery-13.jpg", alt: "Good food, better company", caption: "Ride with you in Baguio" },
  { src: "assets/photos/gallery-14.jpg", alt: "Caught mid-laugh", caption: "Seven years. A thousand memories. One great love." },
  { src: "assets/photos/gallery-15.jpg", alt: "Quiet confidence", caption: "With every trial we went through, we became stronger." },
  { src: "assets/photos/gallery-16.jpg", alt: "A soft kind of pretty", caption: "The everyday kind of beautiful that photos never fully capture." },
  { src: "assets/photos/gallery-17.jpg", alt: "Side by side", caption: "Love is a friendship set to music." },
  { src: "assets/photos/gallery-18.jpg", alt: "Little celebrations", caption: "We didn't need a big reason — this was reason enough." },
  { src: "assets/photos/gallery-19.jpg", alt: "Table for two", caption: "Another meal, another memory I didn't know I'd want to keep." },
  { src: "assets/photos/gallery-20.jpg", alt: "Mid-conversation", caption: "Ang tahanan ay hindi isang lugar. Ito ay isang tao." },
  { src: "assets/photos/gallery-21.jpg", alt: "Out and about", caption: "Just an ordinary errand day that somehow became a memory." },
  { src: "assets/photos/gallery-22.jpg", alt: "That one outfit", caption: "The look you didn't think twice about and I couldn't stop noticing." },
  { src: "assets/photos/gallery-23.jpg", alt: "Sitting close", caption: "Close enough that the photo barely needed a caption." },
  { src: "assets/photos/gallery-24.jpg", alt: "A quieter kind of happy", caption: "Not a big smile — just a settled, easy kind of happy." },
  { src: "assets/photos/gallery-25.jpg", alt: "Framed in gold", caption: "Warm light, warmer company." },
  { src: "assets/photos/gallery-26.jpg", alt: "Wherever, together", caption: "It stopped mattering where we were, as long as it was together." },
  { src: "assets/photos/gallery-27.jpg", alt: "Everyday us", caption: "Hindi kita minahal dahil perpekto ka. Minahal kita dahil sa lahat ng bahagi mo." },
  { src: "assets/photos/gallery-28.jpg", alt: "A shared plate", caption: "Ang pag-ibig pala, hindi pala nakakapagod kapag tama ang kasama." },
  { src: "assets/photos/gallery-29.jpg", alt: "That candid grin", caption: "The grin you make right before you say something that makes me laugh too." },
  { src: "assets/photos/gallery-30.jpg", alt: "Dressed for the day", caption: "Ready for wherever the day was taking us." },
  { src: "assets/photos/gallery-31.jpg", alt: "In good company", caption: "It's not just about the years we've been together, but the life we've built in between." },
  { src: "assets/photos/gallery-32.jpg", alt: "One more for the album", caption: "Still in Laguna, but you were so beautiful even before we make it to Baguio" },
  { src: "assets/photos/gallery-33.jpg", alt: "Comfort, captured", caption: "Kahit na basa tayo ng gabing iyon, mas pinili natin bumuo ng masayang memories" },
  { src: "assets/photos/gallery-34.jpg", alt: "Little details", caption: "The small things I didn't think I'd remember this clearly." },
  { src: "assets/photos/gallery-35.jpg", alt: "Still smiling", caption: "Katulad ng magandang tanawin na ito, ang iyong ngiti ay isang walang katulad mi amor" },
  { src: "assets/photos/gallery-36.jpg", alt: "Bright day, brighter you", caption: "The best thing to hold onto in life is each other" },
  { src: "assets/photos/gallery-37.jpg", alt: "Together, unposed", caption: "No countdown, no 'say cheese' — just us, caught off guard and happy." },
  { src: "assets/photos/gallery-38.jpg", alt: "A moment worth keeping", caption: "Nothing planned about this one, and that's exactly why I love it." },
  { src: "assets/photos/gallery-39.jpg", alt: "The easy days", caption: "Proof that the easy, uneventful days were some of the best ones." },
  { src: "assets/photos/gallery-40.jpg", alt: "Somewhere good", caption: "I don't remember what we talked about, only that I didn't want to leave." },
  { src: "assets/photos/gallery-41.jpg", alt: "That familiar look", caption: "The look you give me that only I get to see." },
  { src: "assets/photos/gallery-42.jpg", alt: "A full table", caption: "Good food, better memories, best company." },
  { src: "assets/photos/gallery-43.jpg", alt: "Just passing time", caption: "Trying something new with you Nurse Armie" },
  { src: "assets/photos/gallery-44.jpg", alt: "Caught looking", caption: "Caught looking at you instead of the camera — again." },
  { src: "assets/photos/gallery-45.jpg", alt: "A softer smile", caption: "The smile you save for the people you're actually comfortable with." },
  { src: "assets/photos/gallery-46.jpg", alt: "In passing", caption: "A small, forgettable moment that somehow became unforgettable." },
  { src: "assets/photos/gallery-47.jpg", alt: "Something good cooking", caption: "I would rather share one lifetime with you than face all the ages of this world alone." },
  { src: "assets/photos/gallery-48.jpg", alt: "One of the good days", caption: "Filed under: days I'd happily relive exactly as they were." },
  { src: "assets/photos/gallery-49.jpg", alt: "Not staged, just us", caption: "Payapang gabi kasama ka, it was really best to be with you." },
  { src: "assets/photos/gallery-50.jpg", alt: "The company I keep", caption: "Turns out the best part of any place is still just being with you." },
  { src: "assets/photos/gallery-51.jpg", alt: "A little bit fancier", caption: "Dressed up a little more than usual, but the comfort stayed exactly the same." },
  { src: "assets/photos/gallery-52.jpg", alt: "Gala days", caption: "In all the world, there is no heart for me like yours" },
  { src: "assets/photos/gallery-53.jpg", alt: "That plate we shared", caption: "You know you're in love when you can't fall asleep because reality is finally better than your dreams." },
  { src: "assets/photos/gallery-54.jpg", alt: "In the middle of it", caption: "Right in the middle of an ordinary moment that aged really well." },
  { src: "assets/photos/gallery-55.jpg", alt: "A whole mood", caption: "This one's just a whole mood, in the best way." },
  { src: "assets/photos/gallery-56.jpg", alt: "Same page, always", caption: "If you were a triangle, you'd be acute one." },
  { src: "assets/photos/gallery-57.jpg", alt: "Worth the photo", caption: "Some moments you just know you'll want to look back on." },
  { src: "assets/photos/gallery-58.jpg", alt: "Still writing this story", caption: "One more photo added to a story that's still very much being written." }
];

const SITE_DATA = {

  // the word Armie types to unlock the site (lowercase, no spaces trimmed automatically)
  password: "miamor",

  // the day you got together — powers the "Together, and counting" clock
  // exact timestamp: years tick over at 1:00 PM on every anniversary
  relationshipStart: "2019-09-18T13:00:00",

  // when the second, still-sealed letter is allowed to open
  futureLetterUnlock: "2026-09-18T13:55:00",

  hero: {
    names: "Engr. Carlo Cimacio & Nurse Armie Beth Momo",
    heading: "Seven years, and still choosing each other.",
    date: "September 18, 2026",
    photo: { src: "assets/photos/gallery-38.jpg", alt: "Carlo and Armie together" }
  },

  moments: [
    { title: "The way you look at me", text: "Even in a crowded room, I still catch that one look from you that feels like home." },
    { title: "Quiet nights together", text: "Our best memories are often the simplest ones: food, stories, and your hand finding mine." },
    { title: "Through every storm", text: "We were not perfect, but we stayed. We learned how to listen, forgive, and love better." },
    { title: "Your laugh, my favorite sound", text: "There is something about your laugh that instantly makes any heavy day feel lighter." },
    { title: "Ordinary days, extraordinary love", text: "Running errands, sharing meals, waiting in traffic somehow became beautiful because it was with you." },
    { title: "Still choosing you", text: "After all this time, I still wake up grateful that my life is being written beside yours." }
  ],

  // every photo from images/ and images2/, shown as one full memory wall (not limited to 7)
  gallery: GALLERY_PHOTOS,

  reasons: [
    { text: "The way you make even ordinary days feel worth remembering.", detail: "Like that random day we just stayed in, ordered foods, and ended up laughing until late at night about nothing." },
    { text: "How you show up for me, especially on your hardest days at work.", detail: "Even when you're exhausted and stressed, you still ask me how my day was and listen like it's the most important thing in the world." },
    { text: "The sound of your laugh when something isn't even that funny.", detail: "It's the kind of laugh that makes me start laughing too, even when I have no idea what we're laughing about." },
    { text: "How safe it feels to fall asleep next to you.", detail: "No matter how chaotic the day was, the moment I feel you next to me, everything just goes quiet." },
    { text: "The way you say my name when you're proud of me.", detail: "There's a specific tone you use—soft, but with this little spark—that makes me feel like I can do anything." },
    { text: "How you still choose me, even on the days I make it hard.", detail: "You never make me feel like I have to earn your love. You just give it, even when I'm not at my best." },
    { text: "Every quiet, unplanned moment that somehow became my favorite.", detail: "Like driving nowhere in particular, or sharing a silence on the couch that says more than words ever could." }
  ],

  letter: {
    paragraphs: [
      "My Armie,",
      "Seven years ago, your yes changed everything. Since then, life has not been perfect, but it has been real, honest, and beautiful because it has been with you.",
      "You are the person I run to when I am proud, when I am tired, when I am scared, and when I just need peace. You are my comfort, my courage, and my favorite part of every ordinary day.",
      "Thank you for loving me through my flaws, for staying through the hard chapters, and for choosing us even when it was not easy. Every challenge only proved how strong your heart is, and how lucky I am to be loved by you.",
      "If I had to choose again, in every lifetime and every version of forever, I would still choose you. Happy seven years, mi amor."
    ],
    sign: "— Carlo"
  },

  // second, still-sealed letter — only opens after futureLetterUnlock date
  futureLetter: {
    teaser: "A letter for you, opening just before 2:00 PM.",
    paragraphs: [
      "Sa dami ng tao sa mundo, ikaw pa rin ang napili ng puso ko, at ikaw pa rin ang pipiliin ko, ulit at ulit, kahit ilang beses pa akong bigyan ng pagpipilian.",
      "Pitong taon na tayo. Pito. At sa bawat taon na 'yon, mas lalo lang kitang minahal, hindi dahil sa sanay na ako, kundi dahil patuloy mo akong pinipili, at ako, ikaw rin, araw-araw.",
      "Hindi lahat ng tao mapapalad na makilala ang sarili nilang muli. Pero ako, nakilala ko ang sarili ko sa'yo.",
      "Kasi ganito yan Armie, how can I unlove you, when I met the happiest and best version of me when we were together?",
      "That's the question I keep coming back to. How do I unlove the person who taught me what peace feels like? How do I unlove the reason I laugh harder, dream bigger, and hope softer? You didn't just love me. You introduced me to myself. The version of me that's patient, that's brave, that believes in forever, I met him with you. So no, I can't unlove you. I wouldn't even know how to start, because loving you isn't something I do anymore. It's something I am.",
      "And I won't pretend pitong taon na tayo ay laging tama at ayos lang. Nag-away tayo. Minsan sa maliit na bagay, minsan sa mabigat, yung tipong parang ang hirap na, parang hindi na kaya. May mga gabi tayong parehong sugatan, parehong pagod, parehong ayaw nang magpaliwanag pa. May mga panahong halos mawalan na ng pag-asa dahil sa dami ng pinagdaanan, problema sa pamilya, sa trabaho, sa distansya, sa sarili nating mga takot. Pero sa bawat gabing 'yon, may isa sa atin na kumapit nang mas mahigpit kaysa sa dati. Palagi tayong bumabalik sa isa't isa, hindi dahil madali, kundi dahil mahal na mahal natin ang isa't isa para bitawan na lang basta-basta.",
      "Iyon pala ang totoong pag-ibig. Hindi yung walang giyera, kundi yung laging may kasunod na kapayapaan. Yung dalawang tao na natututong lumaban para sa relasyon, hindi laban sa isa't isa. At sa tuwing lalabas tayo sa gitna ng away, mas lalo lang akong natututong mahalin ka nang mas totoo, mas matatag, mas matalino.",
      "Some people search their whole lives for what I found in you, a home that isn't a place, but a person, even a home na minsan magulo, minsan maingay, pero laging pagbabalikan.",
      "I didn't just fall in love with you once. I fall in love with you every single day, in the smallest, quietest ways, the way you say my name, the way you remember things I forgot I said, the way you stay, kahit pagod ka na, kahit gusto mo nang sumuko, pinipili mo pa rin akong intindihin.",
      "Seven years, and you're still my favorite hello and my hardest goodbye. Still the first person I want to tell everything to, kahit ikaw mismo minsan ang dahilan ng luha ko. Still the answer to every what if I used to have about love.",
      "They say time changes people. It did. Ginawa ko lang mas matibay, dahil natutunan kong ang pag-ibig na tunay ay hindi umaalis kahit gusto na nating sumuko.",
      "So here's to seven years of becoming, of me becoming better because of you, and hopefully, you becoming happier because of me, kahit sa mga panahong pareho tayong nasasaktan. Here's to all the years after this one, where I get to keep choosing you sa hinaharap, keep loving you kahit may mga bagyo, keep being the best version of myself, right beside you, sa hirap man o ginhawa.",
      "How can I unlove you, when loving you, kasama na ang lahat ng laban, lahat ng luha, lahat ng away na napagtagumpayan natin, is the truest thing I've ever done?",
      "I love you. Today, tomorrow, and in every version of forever we get to have. Happy 7 years if Love to us!",
      "Palagi at magpakailanman."
    ],
    sign: "— Carlo"
  },

  scratchMessage: "Seven years down. Forever still ahead. I love you, mi amor.",

  promises: [
    "I promise to keep choosing you, even on ordinary days.",
    "I promise to grow with you, not just alongside you.",
    "I promise to celebrate your wins as if they were my own.",
    "I promise to be honest with you, even when it's hard.",
    "I promise to make room for both rest and adventure in our life together.",
    "I promise to never stop learning how to love you better.",
    "I promise that seven years is only the beginning."
  ],

  loveLanguages: [
    { phrase: "Mahal kita", language: "Tagalog", meaning: "I love you" },
    { phrase: "Je t'aime", language: "French", meaning: "I love you" },
    { phrase: "Te amo", language: "Spanish", meaning: "I love you" },
    { phrase: "Ti amo", language: "Italian", meaning: "I love you" },
    { phrase: "Ich liebe dich", language: "German", meaning: "I love you" },
    { phrase: "愛してる", language: "Japanese", meaning: "I love you" },
    { phrase: "사랑해", language: "Korean", meaning: "I love you" },
    { phrase: "我爱你", language: "Mandarin", meaning: "I love you" },
    { phrase: "Eu te amo", language: "Portuguese", meaning: "I love you" },
    { phrase: "Я тебя люблю", language: "Russian", meaning: "I love you" },
    { phrase: "मैं तुमसे प्यार करता हूँ", language: "Hindi", meaning: "I love you" },
    { phrase: "أحبك", language: "Arabic", meaning: "I love you" },
    { phrase: "Ik hou van je", language: "Dutch", meaning: "I love you" },
    { phrase: "Jag älskar dig", language: "Swedish", meaning: "I love you" },
    { phrase: "Miluji tě", language: "Czech", meaning: "I love you" },
    { phrase: "Σ'αγαπώ", language: "Greek", meaning: "I love you" },
    { phrase: "Kocham cię", language: "Polish", meaning: "I love you" },
    { phrase: "Nakupenda", language: "Swahili", meaning: "I love you" },
    { phrase: "Seni seviyorum", language: "Turkish", meaning: "I love you" },
    { phrase: "Anh yêu em", language: "Vietnamese", meaning: "I love you" }
  ],

  // background music / voice message player — replace with a track you own the rights to
  music: {
    src: "assets/audio/litrato-man-natin-ay-kumukupas.mp3",
    title: "Music please"
  }
};
