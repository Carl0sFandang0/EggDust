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
//             words people might type that are not in the title, note or details:
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
        title: 'Agony', note: 'Poem called "Agony" by Katy Towell.', img: 'images/agony poem ink and acrylic.jpg', details: 'Spiral text in ink with watercolour blood stains on a duck egg. The poem, by Katy Towell, is about pain and death. The words are below.\n\nI AM HERE.\n\nI AM EVERYWHERE.\n\nEVERY PLACE YOU\'VE BEEN, I HAVE WAITED.\n\nEVERY FACE YOU\'VE SEEN, I HAVE WORN.\n\nI HAVE NOT ONE NAME BUT THOUSANDS.\n\nI COME ON THE WINGS OF AN EPIDEMIC, ON THE SOUNDS OF A MASSACRE.\n\nA LONE SCREAM IN THE NIGHT.\n\nANNOUNCED BY THE DISTANT THUNDER OF A WAR OR THE DISTANT BLEAT OF A SLAUGHTERED CALF.\n\nI VISIT THE DYING IN THEIR BURNING SKIN; I DEVOUR THE BODIES OF THE SICK.\n\nI CRUSH THE HEARTS OF THE HOPEFUL AS I DANCE ON THE BACKS OF THE WEAK.\n\nYOUR GREATEST FEARS ARE MY DELIGHT.\n\nWITH YOUR CRIES YOU INVITE ME IN.\n\nI AM THE BETRAYAL YOU COULD NOT HAVE SEEN.\n\nI AM THE KILLER YOU THOUGHT YOU KNEW.\n\nONE DAY I WILL BE YOUR MOTHER OR YOUR FATHER OR YOUR FRIEND.\n\nANOTHER DAY I WILL BE YOUR NEIGHBOUR, OR PERHAPS I\'LL WORK THROUGH YOU.\n\nTHERE ARE MONSTERS HIDING IN YOUR CLOSET.\n\nTHERE ARE GHOSTS BENEATH YOUR BED.\n\nTHE DREAM YOU FEARED WAS REAL - IT WAS REAL.\n\nTHESE ARE GIFTS TO YOU FROM ME.\n\nI LOVE YOU IN MY OWN WAY.\n\nWITH YOUR SUFFERING I AM ALIVE!\n\nCAN\'T YOU HEAR THE MUSIC ON THE WIND?\n\nDON\'T YOU RECOGNISE THE TUNE?\n\nIS IT YOU, MY FRIEND, YOUR STRUGGLING? YOUR SPIRIT TORN LIMB FROM LIMB?\n\nBUT I AM NOT DEATH: DEATH IS YOUR DELIVERER;\n\nDEATH LOOKS TO ME WITH SORROW IN HIS EYES AND ASKS: "WHY MUST YOU DO THIS?"\n\nMY ANSWER REMAINS UNCHANGED: I DO WHAT YOU CANNOT.\n\nNO END IS SWIFT UNDER MY WATCH.\n\nMERCY IS A MISTAKE THAT I CORRECT.\n\nI AM PEACE DESTROYED AND EYES FORCED OPEN.\n\nI AM THE RAGGED RING AROUND YOUR NECK.\n\nI AM YOUR SECRET WISH FOR OTHERS.\n\nI AM THEIR SECRET WISH FOR YOU.\n\nI HAVE NOT ONE NAME BUT THOUSANDS.\n\nBUT YOU... YOU MAY CALL ME AGONY.\n\nAND I AM PLEASED TO MAKE YOUR ACQUAINTANCE...', keywords: 'duck spiral text poem bood ink watercolour watercolor Katy Towell pain death agony'},
    { title: 'Alice', note: 'Alice through the looking glass', img: 'images/Alice party ink .jpg',details: 'Details...', keywords: 'Keywords...' },
    { title: 'Alice', note: 'Alice through the looking glass', img: 'images/Alice party2 ink .jpg',details: 'Details...', keywords: 'Keywords...' },
    { title: 'Alice', note: 'Alice through the looking glass', img: 'images/Alice party3 ink.jpg',details: 'Details...', keywords: 'Keywords...' },
    { title: 'Alice', note: 'Alice through the looking glass', img: 'images/Alice party4 ink.jpg',details: 'Details...', keywords: 'Keywords...' },
    { title: 'Bee', note: 'Note...', img: 'images/bee ink and acrylic.jpg',details: 'Details...', keywords: 'Keywords...' },
    { title: 'Ben something', note: 'Note...', img: 'images/ben something pencil.jpg',details: 'Details...', keywords: 'Keywords...' },
    { title: 'Face', note: 'Note...', img: 'images/black drilled out scared face.jpg',details: 'Details...', keywords: 'Keywords...' },
    { title: 'Pattern', note: 'Note...', img: 'images/blue and gold blown pattern.jpg',details: 'Details...', keywords: 'Keywords...' },
    { title: 'Cat & Dog', note: 'Note...', img: 'images/cat and dog ink and watercolour.jpg',details: 'Details...', keywords: 'Keywords...' },
    { title: 'Celtic Band', note: 'Note...', img: 'images/celtic band ink1.jpg',details: 'Details...', keywords: 'Keywords...' },
    { title: 'Celtic Band', note: 'Note...', img: 'images/celtic band ink2.jpg',details: 'Details...', keywords: 'Keywords...' },
    { title: 'Celtic Band', note: 'Note...', img: 'images/celtic band ink3.jpg',details: 'Details...', keywords: 'Keywords...' },
    { title: 'Celtic Band', note: 'Note...', img: 'images/celtic band ink4.jpg',details: 'Details...', keywords: 'Keywords...' },
    { title: 'Child', note: 'Note...', img: 'images/child profile pencil .jpg',details: 'Details...', keywords: 'Keywords...' },
    { title: 'City Scape', note: 'Note...', img: 'images/city scape1 ink.jpg',details: 'Details...', keywords: 'Keywords...' },
    { title: 'City Scape', note: 'Note...', img: 'images/city scape2 ink.jpg',details: 'Details...', keywords: 'Keywords...' },
    { title: 'City Scape', note: 'Note...', img: 'images/city scape3 ink.jpg',details: 'Details...', keywords: 'Keywords...' },
    { title: 'City Scape', note: 'Note...', img: 'images/city scape4 ink.jpg',details: 'Details...', keywords: 'Keywords...' },
    { title: 'Clown', note: 'Note...', img: 'images/clown ink and acrylic.jpg',details: 'Details...', keywords: 'Keywords...' },
    { title: 'Dandelions', note: 'Note...', img: 'images/dandelions pencil mounted.jpg',details: 'Details...', keywords: 'Keywords...' },
    { title: 'Desiderata', note: 'Note...', img: 'images/Desiderata poem2 spiral text ink.jpg',details: 'Details...', keywords: 'Keywords...' },
    { title: 'Cat & Dog', note: 'Note...', img: 'images/dog and cat ink cracked.jpg',details: 'Details...', keywords: 'Keywords...' },
    { title: 'Dog', note: 'Note...', img: 'images/dog pencil.jpg',details: 'Details...', keywords: 'Keywords...' },
    { title: 'Ghost', note: 'Note...', img: 'images/edinburgh man.jpg',details: 'Details...', keywords: 'Keywords...' },
    { title: 'Eyes', note: 'Note...', img: 'images/eyes1 sprayed and scrratched.jpg',details: 'Details...', keywords: 'Keywords...' },
    { title: 'Face', note: 'Note...', img: 'images/face 1 ink.jpg',details: 'Details...', keywords: 'Keywords...' },
    { title: 'Face', note: 'Note...', img: 'images/face 2 ink.jpg',details: 'Details...', keywords: 'Keywords...' },
    { title: 'Face', note: 'Note...', img: 'images/face 3 ink.jpg',details: 'Details...', keywords: 'Keywords...' },
    { title: 'Face', note: 'Note...', img: 'images/face 4 ink.jpg',details: 'Details...', keywords: 'Keywords...' },
    { title: 'Graffiti', note: 'Note...', img: 'images/greek graphiti ink.jpg',details: 'Details...', keywords: 'Keywords...' },
    { title: 'Pattern', note: 'Note...', img: 'images/green and gold blown pattern2 acrylic.jpg',details: 'Details...', keywords: 'Keywords...' },
    { title: 'Happy Days', note: 'Note...', img: 'images/Happy days pencil.jpg',details: 'Details...', keywords: 'Keywords...' },
    { title: 'Jigsaw', note: 'Note...', img: 'images/jigegg(1).jpg',details: 'Details...', keywords: 'Keywords...' },
    { title: 'Jigsaw', note: 'Note...', img: 'images/jigsaw pencil.jpg',details: 'Details...', keywords: 'Keywords...' },
    { title: 'Lattice', note: 'Note...', img: 'images/lattice egg - small pic.jpg',details: 'Details...', keywords: 'Keywords...' },
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