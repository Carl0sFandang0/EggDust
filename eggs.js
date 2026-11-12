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
//
// Example with details (the comma after the img line matters):
//   { title: 'Example', note: 'Short note.', img: 'images/example.jpg',
//     details: 'What the egg shows.\n\nHow it was made.' },
//
// The order here is the order shown on the site.

const EGGS = [
    {
        title: 'Agony poem', note: 'Poem about Agony. Ink and watercolour blood stain.', img: 'images/agony.jpg', details: 'This is an early piece done on a duck egg. It\'s a poem called AGONY by Katy Towell and is Inked in continuous spiral text.\n\nI AM HERE.\n\nI AM EVERYWHERE.\n\nEVERY PLACE YOU\'VE BEEN, I HAVE WAITED.\n\nEVERY FACE YOU\'VE SEEN, I HAVE WORN.\n\nI HAVE NOT ONE NAME BUT THOUSANDS.\n\nI COME ON THE WINGS OF AN EPIDEMIC, ON THE SOUNDS OF A MASSACRE.\n\nA LONE SCREAM IN THE NIGHT.\n\nANNOUNCED BY THE DISTANT THUNDER OF A WAR OR THE DISTANT BLEAT OF A SLAUGHTERED CALF.\n\nI VISIT THE DYING IN THEIR BURNING SKIN; I DEVOUR THE BODIES OF THE SICK.\n\nI CRUSH THE HEARTS OF THE HOPEFUL AS I DANCE ON THE BACKS OF THE WEAK.\n\nYOUR GREATEST FEARS ARE MY DELIGHT.\n\nWITH YOUR CRIES YOU INVITE ME IN.\n\nI AM THE BETRAYAL YOU COULD NOT HAVE SEEN.\n\nI AM THE KILLER YOU THOUGHT YOU KNEW.\n\nONE DAY I WILL BE YOUR MOTHER OR YOUR FATHER OR YOUR FRIEND.\n\nANOTHER DAY I WILL BE YOUR NEIGHBOUR, OR PERHAPS I\'LL WORK THROUGH YOU.\n\nTHERE ARE MONSTERS HIDING IN YOUR CLOSET.\n\nTHERE ARE GHOSTS BENEATH YOUR BED.\n\nTHE DREAM YOU FEARED WAS REAL - IT WAS REAL.\n\nTHESE ARE GIFTS TO YOU FROM ME.\n\nI LOVE YOU IN MY OWN WAY.\n\nWITH YOUR SUFFERING I AM ALIVE!\n\nCAN\'T YOU HEAR THE MUSIC ON THE WIND?\n\nDON\'T YOU RECOGNISE THE TUNE?\n\nIS IT YOU, MY FRIEND, YOUR STRUGGLING? YOUR SPIRIT TORN LIMB FROM LIMB?\n\nBUT I AM NOT DEATH: DEATH IS YOUR DELIVERER;\n\nDEATH LOOKS TO ME WITH SORROW IN HIS EYES AND ASKS: "WHY MUST YOU DO THIS?"\n\nMY ANSWER REMAINS UNCHANGED: I DO WHAT YOU CANNOT.\n\nNO END IS SWIFT UNDER MY WATCH.\n\nMERCY IS A MISTAKE THAT I CORRECT.\n\nI AM PEACE DESTROYED AND EYES FORCED OPEN.\n\nI AM THE RAGGED RING AROUND YOUR NECK.\n\nI AM YOUR SECRET WISH FOR OTHERS.\n\nI AM THEIR SECRET WISH FOR YOU.\n\nI HAVE NOT ONE NAME BUT THOUSANDS.\n\nBUT YOU... YOU MAY CALL ME AGONY.\n\nAND I AM PLEASED TO MAKE YOUR ACQUAINTANCE...' },
    { title: 'Bumble bee', note: 'An abstract bumble bee drawn in ballpoint and acrylic.', img: 'images/bee.jpg', details: 'This is an early piece done on a duck egg. It\'s a colourful bumble bee using black gel pen and acrylic paints.' },
    { title: 'Abstract pattern', note: 'Abstract pattern in blue watercolour and gold leaf.', img: 'images/blue and gold.jpg', details: 'This is an early piece done on a duck egg. It\'s made by blowing watercolour paint on the egg surface. The gold leaf is genuine 24ct and is glued on top of the paint when dry. A fine matt laquer is applied afterwards to protect the design' },
    { title: 'Abstract pattern', note: 'Abstract pattern in green watercolour and gold leaf.', img: 'images/green and gold.jpg', details: 'This is an early piece done on a duck egg. It\'s made by blowing watercolour paint on the egg surface. The gold leaf is genuine 24ct and is glued on top of the paint when dry. A fine matt laquer is applied afterwards to protect the design' },
    { title: 'Cats n Dogs', note: 'Drawn in felt tip and acrylic.', img: 'images/cats n dogs.jpg', details: 'This is an early piece done on a duck egg. The cats and dogs are based on my daughters buttone eye toys and represent a room full of \'odd one outs\', each talking their own language but still having a good time together!' },
    { title: 'Simple flower', note: 'Child like flower drawing in fine line felt tip and acrylic.', img: 'images/childlike flower.jpg', details: 'This is an early piece done on a duck egg. It\'s actualy a drawing of a flower made from wire that was given to me many years ago by a friend. I like the simplicity that comes from making it from wire - which gives it a child like quality.' },
    { title: 'Creepy Clown', note: 'Creepy clown in ink and acrylic.', img: 'images/clown.jpg', details: 'This is an early piece done on a duck egg. The best childrens\' stories are creepy. And the best characters are scary. Just what you need before bed time !' },
    { title: 'Sunflower', note: 'Simplistic sunflower in ink and acrylic.', img: 'images/sunflower.jpg', details: 'This is an early piece done on a duck egg. Deliberately lazily painted for an innocent, simplistic feal.' },
    { title: 'Tulip', note: 'Duck egg. Simplistic tulip in ink and acrylic.', img: 'images/tulip.jpg', details: 'This is an early piece done on a duck egg. Deliberately lazily painted for an innocent, simplistic feal.' }
];
