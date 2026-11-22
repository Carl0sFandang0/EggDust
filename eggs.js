// ================================================================
//  YOUR EGGS - this is the only file you need to edit for a new egg
// ================================================================
// To add an egg:
//   1. Put the photo in the "images" folder (lowercase file name and
//      extension, for example images/my-egg.jpg).
//   2. Copy one of the lines below, paste it at the end of the list, and
//      change the words. Every line except the last needs a comma after
//      the closing brace.
//
//   title   - the name shown on the card
//   note    - the short description shown under the title
//   img     - the photo's path, exactly as it appears in the images folder
//   details - OPTIONAL. The longer write-up shown by the Details button.
//             Leave this out and no Details button appears for that egg.
//             For a second paragraph, put \n\n between them.
//   keywords - OPTIONAL. Extra search words that visitors never see. Use them for
//             words people might type that are not in the title or note:
//             synonyms (insect, bug), US spellings (watercolor), themes (spooky),
//             subjects (garden), colours, styles. Separate the words with spaces.
//             The search looks in the title, note, details and keywords together.
//
// Example with details and keywords (the comma after each line matters):
//   { title: 'Example', note: 'Short note.', img: 'images/example.jpg',
//     details: 'What the egg shows.\n\nHow it was made.',
//     keywords: 'bird feathers nature wildlife' },
//
// The order here is the order shown on the site.

const EGGS = [
    {
        title: 'Agony',
        note: 'Poem called "Agony" by Katy Towell.',
        img: 'images/agony poem ink and acrylic.jpg',
        details: 'Spiral text in ink with watercolour blood stains on a duck egg. The poem, by Katy Towell, is about pain and death. The words are below.\n\nI AM HERE.\n\nI AM EVERYWHERE.\n\nEVERY PLACE YOU\'VE BEEN, I HAVE WAITED.\n\nEVERY FACE YOU\'VE SEEN, I HAVE WORN.\n\nI HAVE NOT ONE NAME BUT THOUSANDS.\n\nI COME ON THE WINGS OF AN EPIDEMIC, ON THE SOUNDS OF A MASSACRE.\n\nA LONE SCREAM IN THE NIGHT.\n\nANNOUNCED BY THE DISTANT THUNDER OF A WAR OR THE DISTANT BLEAT OF A SLAUGHTERED CALF.\n\nI VISIT THE DYING IN THEIR BURNING SKIN; I DEVOUR THE BODIES OF THE SICK.\n\nI CRUSH THE HEARTS OF THE HOPEFUL AS I DANCE ON THE BACKS OF THE WEAK.\n\nYOUR GREATEST FEARS ARE MY DELIGHT.\n\nWITH YOUR CRIES YOU INVITE ME IN.\n\nI AM THE BETRAYAL YOU COULD NOT HAVE SEEN.\n\nI AM THE KILLER YOU THOUGHT YOU KNEW.\n\nONE DAY I WILL BE YOUR MOTHER OR YOUR FATHER OR YOUR FRIEND.\n\nANOTHER DAY I WILL BE YOUR NEIGHBOUR, OR PERHAPS I\'LL WORK THROUGH YOU.\n\nTHERE ARE MONSTERS HIDING IN YOUR CLOSET.\n\nTHERE ARE GHOSTS BENEATH YOUR BED.\n\nTHE DREAM YOU FEARED WAS REAL - IT WAS REAL.\n\nTHESE ARE GIFTS TO YOU FROM ME.\n\nI LOVE YOU IN MY OWN WAY.\n\nWITH YOUR SUFFERING I AM ALIVE!\n\nCAN\'T YOU HEAR THE MUSIC ON THE WIND?\n\nDON\'T YOU RECOGNISE THE TUNE?\n\nIS IT YOU, MY FRIEND, YOUR STRUGGLING? YOUR SPIRIT TORN LIMB FROM LIMB?\n\nBUT I AM NOT DEATH: DEATH IS YOUR DELIVERER;\n\nDEATH LOOKS TO ME WITH SORROW IN HIS EYES AND ASKS: "WHY MUST YOU DO THIS?"\n\nMY ANSWER REMAINS UNCHANGED: I DO WHAT YOU CANNOT.\n\nNO END IS SWIFT UNDER MY WATCH.\n\nMERCY IS A MISTAKE THAT I CORRECT.\n\nI AM PEACE DESTROYED AND EYES FORCED OPEN.\n\nI AM THE RAGGED RING AROUND YOUR NECK.\n\nI AM YOUR SECRET WISH FOR OTHERS.\n\nI AM THEIR SECRET WISH FOR YOU.\n\nI HAVE NOT ONE NAME BUT THOUSANDS.\n\nBUT YOU... YOU MAY CALL ME AGONY.\n\nAND I AM PLEASED TO MAKE YOUR ACQUAINTANCE...',
        keywords: 'duck egg spiral text poem bood ink watercolour watercolor Katy Towell pain death agony'
    },
    {
        title: 'Alice',
        note: 'Alice\'s mad tea party',
        img: 'images/Alice party ink .jpg',
        details: 'Drawn in ballpoint pen on a duck egg. It shows the March Hare, the Dormouse and the Mad Hatter from Alice\'s Mad Tea Party',
        keywords: 'duck egg alice looking glass mad hatter dormouse tea party march hare fantasy lewis carroll'
    },
    {
        title: 'Alice',
        note: 'Alice\'s mad tea party',
        img: 'images/Alice party2 ink .jpg',
        details: 'Drawn in ballpoint pen on a duck egg. It shows the Mad Hatter from Alice\'s Mad Tea Party',
        keywords: 'duck egg alice looking glass mad hatter tea party fantasy lewis carroll'
    },
    {
        title: 'Alice',
        note: 'Alice through the looking glass',
        img: 'images/Alice party4 ink.jpg',
        details: 'Drawn in ballpoint pen on a duck egg. It shows Alice from Alice\'s Mad Tea Party',
        keywords: 'duck egg alice looking glass tea party fantasy lewis carroll'
    },
    {
        title: 'Bee',
        note: 'Bumble bee',
        img: 'images/bee ink and acrylic.jpg',
        details: 'Zentangle bee drawn on a duck egg in gel pen and coloured in acrylic',
        keywords: 'zentangle bee acrylic gel pen duck egg'
    },
    {
        title: 'Beinn Alligin',
        note: 'Jeweled Mountain on the Torridon Ridge',
        img: 'images/ben something pencil.jpg',
        details: 'Pencil sketch of Beinn Alligin, Scotland. Drawn on duck egg.',
        keywords: 'Beinn Alligin duck egg pencil scenery mountain'
    },
    {
        title: 'Face',
        note: 'The face of fear.',
        img: 'images/black drilled out scared face.jpg',
        details: 'A duck egg has been sprayed black and the image has been scratched out of the black using a diamond tipped dentist drill. the image shows the terror in the eyes of a man who has seen too much.',
        keywords: 'terror face duck egg scratch fear eyes diamond dentist drill sprayed black'
    },
    {
        title: 'Shape',
        note: 'Blue & gold art',
        img: 'images/blue and gold blown pattern.jpg',
        details: 'Blue acrylic blown into a pattern with 24ct gold leaf stripe overlayed. On duck egg with a matt protective varnish',
        keywords: 'Blue gold acrylic duck eggblown art'
    },
    {
        title: 'Cat & Dog',
        note: 'Childlike cat & dog',
        img: 'images/cat and dog ink and watercolour.jpg',
        details: 'The simplistic cats and dogs are based on my daughters button eye toys and represent a room full of \'odd one outs\', each talking their own language but still having a good time together!\n\nDrawn in fine felt tip and painted roughly in watercolour',
        keywords: 'childlike simplistic cat & dog odd one out duck egg good time'
    },
    {
        title: 'Tree of life',
        note: 'Celtic tree of life with EV initials.',
        img: 'images/celtic band ink1.jpg',
        details: 'Celtic style tree of life knotwork design with a person\'s initials. Drawn using black ballpoint pen on a duck egg',
        keywords: 'celtic tree of life knotwork initials ballpoint duck egg'
    },
    {
        title: 'Celtic band',
        note: 'Celtic tree of life and band.',
        img: 'images/celtic band ink2.jpg',
        details: 'Celtic style tree of life knotwork design with a matching band. Drawn using black ballpoint pen on a duck egg',
        keywords: 'celtic tree of life knotwork band initials ballpoint duck egg'
    },
    {
        title: 'Celtic band',
        note: 'Celtic band.',
        img: 'images/celtic band ink3.jpg',
        details: 'Celtic band drawn using black ballpoint pen on a duck egg',
        keywords: 'celtic band initials ballpoint duck egg'
    },
    {
        title: 'Child',
        note: 'Pencil sketch of a child',
        img: 'images/child profile pencil .jpg',
        details: 'Pencil sketch of a child drawn on a duck egg',
        keywords: 'child pencil duck egg sketch'
    },
    {
        title: 'City Scape',
        note: 'London skyline in ink',
        img: 'images/city scape1 ink.jpg',
        details: 'London skyline drawn in gel pen on a duck egg. Scene shows the London Eye, Big Ben and Tower Bridge',
        keywords: 'skyline london eye duck egg big ben tower bridge gel pen'
    },
    {
        title: 'City Scape',
        note: 'London skyline in ink',
        img: 'images/city scape2 ink.jpg',
        details: 'London skyline drawn in gel pen on a duck egg. Scene shows Tower Bridge, the Gherkin, the Sky Garden and others',
        keywords: 'skyline london eye duck egg tower bridge gherkin sky garden gel pen'
    },
    {
        title: 'City Scape',
        note: 'London skyline in ink',
        img: 'images/city scape4 ink.jpg',
        details: 'London skyline drawn in gel pen on a duck egg. Scene shows the Walkie-talkie, the Gherkin, the Sky Garden and others',
        keywords: 'skyline london eye duck egg walkie-talkie tower bridge gherkin sky garden gel pen'
    },
    {
        title: 'Clown',
        note: 'Creepy clown in ink and acrylic.',
        img: 'images/clown ink and acrylic.jpg',
        details: 'The best childrens\' stories are creepy. And the best characters are scary. Just what you need before bed time ! Drawn in ink and acrylic on a duck egg',
        keywords: 'scary horror spooky halloween jester circus clown dark duck egg'
    },
    {
        title: 'Dandelions',
        note: 'A field of pencilled dandelions',
        img: 'images/dandelions pencil mounted.jpg',
        details: 'Dandelions pencilled on a duck egg',
        keywords: 'dandelions field pencil duck egg'
    },
    {
        title: 'Desiderata',
        note: 'Famous poem about desire and loss. Spiral text in ink.',
        img: 'images/Desiderata poem2 spiral text ink.jpg',
        details: 'This is an early piece done on a duck egg. It\'s a poem called Desiderata by Max Ehrmann and is inked in continuous spiral text.\n\nFull, original text:\n\nGo placidly amid the noise and the haste, and remember what peace there may be in silence. As far as possible, without surrender, be on good terms with all persons.\n\nSpeak your truth quietly and clearly; and listen to others, even to the dull and the ignorant; they too have their story.\n\nAvoid loud and aggressive persons; they are vexatious to the spirit. If you compare yourself with others, you may become vain or bitter, for always there will be greater and lesser persons than yourself.\n\nEnjoy your achievements as well as your plans. Keep interested in your own career, however humble; it is a real possession in the changing fortunes of time.\n\nExercise caution in your business affairs, for the world is full of trickery. But let this not blind you to what virtue there is; many persons strive for high ideals, and everywhere life is full of heroism.\n\nBe yourself. Especially do not feign affection. Neither be cynical about love; for in the face of all aridity and disenchantment, it is as perennial as the grass.\n\nTake kindly the counsel of the years, gracefully surrendering the things of youth.\n\nNurture strength of spirit to shield you in sudden misfortune. But do not distress yourself with dark imaginings. Many fears are born of fatigue and loneliness.\n\nBeyond a wholesome discipline, be gentle with yourself. You are a child of the universe no less than the trees and the stars; you have a right to be here.\n\nAnd whether or not it is clear to you, no doubt the universe is unfolding as it should. Therefore be at peace with God, whatever you conceive Him to be. And whatever your labors and aspirations, in the noisy confusion of life, keep peace in your soul. With all its sham, drudgery and broken dreams, it is still a beautiful world. Be cheerful. Strive to be happy.'
    },
    {
        title: 'Cat & Dog',
        note: 'Cat & Dog on a cracked duck egg',
        img: 'images/dog and cat ink cracked.jpg',
        details: 'Gel pen drawing on a duck egg. Cracked during drawing',
        keywords: 'gel pen cracked cat & dog duck egg'
    },
    {
        title: 'Dog',
        note: 'Pencil sketch of a pet dog.',
        img: 'images/dog pencil.jpg',
        details: 'Dog is sketched in pencil on a duck egg. The top has been milled. Black plastic mount',
        keywords: 'mounted pet dog sketch pencil duck egg'
    },
    {
        title: 'Ghost',
        note: 'Pencil sketch of an Edinburgh ghost',
        img: 'images/edinburgh man.jpg',
        details: 'Pencil sketch on duck egg of an Edinburgh ghost',
        keywords: 'pencil sketch duck egg Edingurgh ghost man hat'
    },
    {
        title: 'Face',
        note: 'Cartoon thug',
        img: 'images/face 1 ink.jpg',
        details: 'Cartoon thug sketched in gel pen on duck egg',
        keywords: 'cartoon thug face gel pen duck egg sketch thinning'
    },
    {
        title: 'Face',
        note: 'Cartoon thug',
        img: 'images/face 2 ink.jpg',
        details: 'Cartoon thug sketched in gel pen on duck egg',
        keywords: 'cartoon thug face gel pen duck egg sketch bearded'
    },
    {
        title: 'Face',
        note: 'Cartoon thug',
        img: 'images/face 3 ink.jpg',
        details: 'Cartoon thug sketched in gel pen on duck egg',
        keywords: 'cartoon thug face gel pen duck egg sketch skinhead mustache'
    },
    {
        title: 'Face',
        note: 'Cartoon thug',
        img: 'images/face 4 ink.jpg',
        details: 'Cartoon thug sketched in gel pen on duck egg',
        keywords: 'cartoon thug face gel pen duck egg sketch skinhead mustache'
    },
    {
        title: 'Graffiti',
        note: 'Graffiti I saw in Cyprus',
        img: 'images/greek graphiti ink.jpg',
        details: 'Graffiti I saw in Cyprus near the Northern border with Turkey',
        keywords: 'graffiti cyprus northern border turkey foreign'
    },
    {
        title: 'Shape',
        note: 'Green & gold art',
        img: 'images/green and gold blown pattern2 acrylic.jpg',
        details: 'Green acrylic blown into a pattern with 24ct gold leaf stripe overlayed. On duck egg with a matt protective varnish',
        keywords: 'Green gold leaf acrylic duck eggblown art'
    },
    {
        title: 'Happy Days',
        note: 'Sketch of the dancing flowers on my car dashboard',
        img: 'images/Happy days pencil.jpg',
        details: 'Dancing flowers in pencil on duck egg',
        keywords: 'car dashboard dancing flowers pencil duck egg'
    },
    {
        title: 'Jigsaw',
        note: 'Jigsaw pieces milled into a duck egg',
        img: 'images/jigsaw pencil.jpg',
        details: 'Jigsaw pieces milled into a duck egg',
        keywords: 'milled jigsaw duck egg'
    },
    {
        title: 'Stripes',
        note: 'Stripes in a duck egg',
        img: 'images/lattice egg - small pic.jpg',
        details: 'Heavy diagnoal stripes milled into a duck egg',
        keywords: 'stripes diagonal milled duck egg'
    },
    { title: 'Milled', note: 'Note...', img: 'images/milled gold leaf.jpg',details: 'Details...', keywords: 'Keywords...' },
    { title: 'Milled', note: 'Note...', img: 'images/milled holes.jpg',details: 'Details...', keywords: 'Keywords...' },
    { title: 'Milled', note: 'Note...', img: 'images/milled pattern 1.jpg',details: 'Details...', keywords: 'Keywords...' },
    { title: 'Milled', note: 'Note...', img: 'images/milled pattern 2.jpg',details: 'Details...', keywords: 'Keywords...' },
    { title: 'Milled', note: 'Note...', img: 'images/milled pattern 3.jpg',details: 'Details...', keywords: 'Keywords...' },
    { title: 'Milled', note: 'Note...', img: 'images/milled pattern fragile.jpg',details: 'Details...', keywords: 'Keywords...' },
    { title: 'Milled', note: 'Note...', img: 'images/milled top gold leaf.jpg',details: 'Details...', keywords: 'Keywords...' },
    { title: 'Milled', note: 'Note...', img: 'images/milled top2.jpg',details: 'Details...', keywords: 'Keywords...' },
    { title: 'Milled', note: 'Note...', img: 'images/milled2.jpg',details: 'Details...', keywords: 'Keywords...' },
    { title: 'Mrs Humpty', note: 'Note...', img: 'images/mrs humpty ink.jpg',details: 'Details...', keywords: 'Keywords...' },
    { title: 'Milled', note: 'Note...', img: 'images/musical milled gold mounted.jpg',details: 'Details...', keywords: 'Keywords...' },
    { title: 'Milled', note: 'Note...', img: 'images/musical milled gold mounted2.jpg',details: 'Details...', keywords: 'Keywords...' },
    { title: 'Old House', note: 'Note...', img: 'images/old house pencil.jpg',details: 'Details...', keywords: 'Keywords...' },
    { title: 'Old Man', note: 'Note...', img: 'images/old man sprayed and scratched.jpg',details: 'Details...', keywords: 'Keywords...' },
    { title: 'Milled', note: 'Note...', img: 'images/open lace milled.jpg',details: 'Details...', keywords: 'Keywords...' },
    { title: 'Owl', note: 'Note...', img: 'images/owl pencil.jpg',details: 'Details...', keywords: 'Keywords...' },
    { title: 'Painted', note: 'Note...', img: 'images/painted goose egg1.jpg',details: 'Details...', keywords: 'Keywords...' },
    { title: 'Painted', note: 'Note...', img: 'images/painted goose egg2.jpg',details: 'Details...', keywords: 'Keywords...' },
    { title: 'Peace', note: 'Note...', img: 'images/peace1.jpg',details: 'Details...', keywords: 'Keywords...' },
    { title: 'Dog', note: 'Note...', img: 'images/pencil and watercolour dog.jpg',details: 'Details...', keywords: 'Keywords...' },
    { title: 'Heart', note: 'Note...', img: 'images/pencil heart.jpg',details: 'Details...', keywords: 'Keywords...' },
    { title: 'House', note: 'Note...', img: 'images/pencil house.jpg',details: 'Details...', keywords: 'Keywords...' },
    { title: 'Kissing', note: 'Note...', img: 'images/pencil kissing2.jpg',details: 'Details...', keywords: 'Keywords...' },
    { title: 'Portrait', note: 'Note...', img: 'images/pencil portrate.jpg',details: 'Details...', keywords: 'Keywords...' },
    { title: 'Simple meadow', note: 'Note...', img: 'images/pencil simple medow.jpg',details: 'Details...', keywords: 'Keywords...' },
    { title: 'Worm', note: 'Note...', img: 'images/pencil worm.jpg',details: 'Details...', keywords: 'Keywords...' },
    { title: 'Poppy', note: 'Note...', img: 'images/poppy ink and acrylic.jpg',details: 'Details...', keywords: 'Keywords...' },
    { title: 'Ratty', note: 'Note...', img: 'images/ratty.jpg',details: 'Details...', keywords: 'Keywords...' },
    { title: 'Reeds', note: 'Note...', img: 'images/reeds.jpg',details: 'Details...', keywords: 'Keywords...' },
    { title: 'Man', note: 'Note...', img: 'images/someone I know ink.jpg',details: 'Details...', keywords: 'Keywords...' },
    { title: 'Spider', note: 'Note...', img: 'images/spider pencil.jpg',details: 'Details...', keywords: 'Keywords...' },
    { title: 'Sunflower', note: 'Note...', img: 'images/sunflower ink and acrylic.jpg',details: 'Details...', keywords: 'Keywords...' },
    { title: 'Sunshine days', note: 'Note...', img: 'images/sunshine days 1 pencil.jpg',details: 'Details...', keywords: 'Keywords...' },
    { title: 'Tree', note: 'Note...', img: 'images/tree pencil.jpg',details: 'Details...', keywords: 'Keywords...' },
    { title: 'Van Gogh', note: 'Note...', img: 'images/van gough pencil.jpg',details: 'Details...', keywords: 'Keywords...' },
    { title: 'Voronoi', note: 'Note...', img: 'images/voronoi lace milled damaged.jpg',details: 'Details...', keywords: 'Keywords...' },
    { title: 'Flower', note: 'Note...', img: 'images/wire flower ink and acrylic.jpg',details: 'Details...', keywords: 'Keywords...' },
    { title: 'Xmas dec', note: 'Note...', img: 'images/xmas dec milled.jpg',details: 'Details...', keywords: 'Keywords...' },
    { title: 'Xmas dec', note: 'Note...', img: 'images/xmas dec milled2.jpg',details: 'Details...', keywords: 'Keywords...' }
];