// ================================================================
//  YOUR EGGS - this is the only file you need to edit for a new egg
// ================================================================
// To add an egg:
//   1. Put the photo in the "images" folder as a .webp file, with a lowercase
//      name and underscores instead of spaces, for example images/my_egg.webp.
//   2. Copy one of the lines below, paste it at the end of the list, and
//      change the words. Every line except the last needs a comma after
//      the closing brace.
//
//   title   - the name shown on the card
//   note    - the short description shown under the title
//   img     - the photo's path, exactly as it appears in the images folder
//             (lowercase, underscores not spaces, .webp, e.g. images/blue_egg_pencil.webp)
//   details - OPTIONAL. The longer write-up shown by the Details button.
//             Leave this out and no Details button appears for that egg.
//             For a second paragraph, put \n\n between them (or, inside backticks, a blank line).
//             Long text can be spread over several lines by using backticks (`) instead of
//             quote marks, like the long entries below: press Enter wherever you like, and a
//             blank line starts a new paragraph. An apostrophe needs no backslash inside backticks.
//             Do not put a backtick or the characters ${ inside the text.
//   keywords - OPTIONAL. Extra search words that visitors never see. Use them for
//             words people might type that are not in the title or note:
//             synonyms (insect, bug), US spellings (watercolor), themes (spooky),
//             subjects (garden), colours, styles. Separate the words with spaces.
//             The search looks in the title, note and keywords (not the details).
//
// Example with details and keywords (the comma after each line matters):
//   { title: 'Example', note: 'Short note.', img: 'images/example.webp',
//     details: 'What the egg shows.\n\nHow it was made.',
//     keywords: 'bird feathers nature wildlife' },
//
// The order here is the order shown on the site.

const EGGS = [
    {
        title: 'Agony',
        note: 'Poem called "Agony" by Katy Towell.',
        img: 'images/agony_poem_ink_and_acrylic.webp',
        details: `Spiral text in ink with watercolour blood stains on a duck egg. The poem, by Katy
            Towell, is about pain and death. The words are below.

            I AM HERE.

            I AM EVERYWHERE.

            EVERY PLACE YOU'VE BEEN, I HAVE WAITED.

            EVERY FACE YOU'VE SEEN, I HAVE WORN.

            I HAVE NOT ONE NAME BUT THOUSANDS.

            I COME ON THE WINGS OF AN EPIDEMIC, ON THE SOUNDS OF A MASSACRE.

            A LONE SCREAM IN THE NIGHT.

            ANNOUNCED BY THE DISTANT THUNDER OF A WAR OR THE DISTANT BLEAT OF A SLAUGHTERED CALF.

            I VISIT THE DYING IN THEIR BURNING SKIN; I DEVOUR THE BODIES OF THE SICK.

            I CRUSH THE HEARTS OF THE HOPEFUL AS I DANCE ON THE BACKS OF THE WEAK.

            YOUR GREATEST FEARS ARE MY DELIGHT.

            WITH YOUR CRIES YOU INVITE ME IN.

            I AM THE BETRAYAL YOU COULD NOT HAVE SEEN.

            I AM THE KILLER YOU THOUGHT YOU KNEW.

            ONE DAY I WILL BE YOUR MOTHER OR YOUR FATHER OR YOUR FRIEND.

            ANOTHER DAY I WILL BE YOUR NEIGHBOUR, OR PERHAPS I'LL WORK THROUGH YOU.

            THERE ARE MONSTERS HIDING IN YOUR CLOSET.

            THERE ARE GHOSTS BENEATH YOUR BED.

            THE DREAM YOU FEARED WAS REAL - IT WAS REAL.

            THESE ARE GIFTS TO YOU FROM ME.

            I LOVE YOU IN MY OWN WAY.

            WITH YOUR SUFFERING I AM ALIVE!

            CAN'T YOU HEAR THE MUSIC ON THE WIND?

            DON'T YOU RECOGNISE THE TUNE?

            IS IT YOU, MY FRIEND, YOUR STRUGGLING? YOUR SPIRIT TORN LIMB FROM LIMB?

            BUT I AM NOT DEATH: DEATH IS YOUR DELIVERER;

            DEATH LOOKS TO ME WITH SORROW IN HIS EYES AND ASKS: "WHY MUST YOU DO THIS?"

            MY ANSWER REMAINS UNCHANGED: I DO WHAT YOU CANNOT.

            NO END IS SWIFT UNDER MY WATCH.

            MERCY IS A MISTAKE THAT I CORRECT.

            I AM PEACE DESTROYED AND EYES FORCED OPEN.

            I AM THE RAGGED RING AROUND YOUR NECK.

            I AM YOUR SECRET WISH FOR OTHERS.

            I AM THEIR SECRET WISH FOR YOU.

            I HAVE NOT ONE NAME BUT THOUSANDS.

            BUT YOU... YOU MAY CALL ME AGONY.

            AND I AM PLEASED TO MAKE YOUR ACQUAINTANCE...`,
        keywords: `duck egg spiral text poem blood ink watercolour watercolor Katy Towell pain death
            agony`
    },
    {
        title: 'Alice',
        note: 'Alice\'s mad tea party',
        img: 'images/alice_party_ink.webp',
        details: `Drawn in ballpoint pen on a duck egg. It shows the March Hare, the Dormouse and
            the Mad Hatter from Alice's Mad Tea Party`,
        keywords: `duck egg alice looking glass mad hatter dormouse tea party march hare fantasy
            lewis carroll`
    },
    {
        title: 'Alice',
        note: 'Alice\'s mad tea party',
        img: 'images/alice_party2_ink.webp',
        details: `Drawn in ballpoint pen on a duck egg. It shows the Mad Hatter from Alice's Mad Tea
            Party`,
        keywords: 'duck egg alice looking glass mad hatter tea party fantasy lewis carroll'
    },
    {
        title: 'Alice',
        note: 'Alice through the looking glass',
        img: 'images/alice_party4_ink.webp',
        details: 'Drawn in ballpoint pen on a duck egg. It shows Alice from Alice\'s Mad Tea Party',
        keywords: 'duck egg alice looking glass tea party fantasy lewis carroll'
    },
    {
        title: 'Bee',
        note: 'Bumble bee',
        img: 'images/bee_ink_and_acrylic.webp',
        details: 'Zentangle bee drawn on a duck egg in gel pen and coloured in acrylic',
        keywords: 'zentangle bee acrylic gel pen duck egg'
    },
    {
        title: 'Beinn Alligin',
        note: 'Jewelled Mountain on the Torridon Ridge',
        img: 'images/ben_something_pencil.webp',
        details: 'Pencil sketch of Beinn Alligin, Scotland. Drawn on duck egg.',
        keywords: 'Beinn Alligin duck egg pencil scenery mountain'
    },
    {
        title: 'Face',
        note: 'The face of fear.',
        img: 'images/black_drilled_out_scared_face.webp',
        details: `A duck egg has been sprayed black and the image has been scratched out of the
            black using a diamond tipped dentist drill. The image shows the terror in the eyes of a
            man who has seen too much.`,
        keywords: 'terror face duck egg scratch fear eyes diamond dentist drill sprayed black'
    },
    {
        title: 'Shape',
        note: 'Blue & gold art',
        img: 'images/blue_and_gold_blown_pattern.webp',
        details: `Blue acrylic blown into a pattern with 24ct gold leaf stripe overlaid. On duck egg
            with a matt protective varnish`,
        keywords: 'Blue gold acrylic duck egg blown art'
    },
    {
        title: 'Cat & Dog',
        note: 'Childlike cat & dog',
        img: 'images/cat_and_dog_ink_and_watercolour.webp',
        details: `The simplistic cats and dogs are based on my daughter's button eye toys and
            represent a room full of 'odd one outs', each talking their own language but still
            having a good time together! Drawn in fine felt tip and painted roughly in watercolour`,
        keywords: 'childlike simplistic cat & dog odd one out duck egg good time'
    },
    {
        title: 'Tree of life',
        note: 'Celtic tree of life with EV initials.',
        img: 'images/celtic_band_ink1.webp',
        details: `Celtic style tree of life knotwork design with a person's initials. Drawn using
            black ballpoint pen on a duck egg`,
        keywords: 'celtic tree of life knotwork initials ballpoint duck egg'
    },
    {
        title: 'Celtic band',
        note: 'Celtic tree of life and band.',
        img: 'images/celtic_band_ink2.webp',
        details: `Celtic style tree of life knotwork design with a matching band. Drawn using black
            ballpoint pen on a duck egg`,
        keywords: 'celtic tree of life knotwork band initials ballpoint duck egg'
    },
    {
        title: 'Celtic band',
        note: 'Celtic band.',
        img: 'images/celtic_band_ink3.webp',
        details: 'Celtic band drawn using black ballpoint pen on a duck egg',
        keywords: 'celtic band initials ballpoint duck egg'
    },
    {
        title: 'Child',
        note: 'Pencil sketch of a child',
        img: 'images/child_profile_pencil.webp',
        details: 'Pencil sketch of a child drawn on a duck egg',
        keywords: 'child pencil duck egg sketch'
    },
    {
        title: 'City Scape',
        note: 'London skyline in ink',
        img: 'images/city_scape1_ink.webp',
        details: `London skyline drawn in gel pen on a duck egg. Scene shows the London Eye, Big Ben
            and Tower Bridge`,
        keywords: 'skyline london eye duck egg big ben tower bridge gel pen'
    },
    {
        title: 'City Scape',
        note: 'London skyline in ink',
        img: 'images/city_scape2_ink.webp',
        details: `London skyline drawn in gel pen on a duck egg. Scene shows Tower Bridge, the
            Gherkin, the Sky Garden and others`,
        keywords: 'skyline london eye duck egg tower bridge gherkin sky garden gel pen'
    },
    {
        title: 'City Scape',
        note: 'London skyline in ink',
        img: 'images/city_scape4_ink.webp',
        details: `London skyline drawn in gel pen on a duck egg. Scene shows the Walkie-talkie, the
            Gherkin, the Sky Garden and others`,
        keywords: `skyline london eye duck egg walkie-talkie tower bridge gherkin sky garden gel pen`
    },
    {
        title: 'Clown',
        note: 'Creepy clown in ink and acrylic.',
        img: 'images/clown_ink_and_acrylic.webp',
        details: `The best children's stories are creepy. And the best characters are scary. Just
            what you need before bedtime! Drawn in ink and acrylic on a duck egg`,
        keywords: 'scary horror spooky halloween jester circus clown dark duck egg'
    },
    {
        title: 'Dandelions',
        note: 'A field of pencilled dandelions',
        img: 'images/dandelions_pencil_mounted.webp',
        details: 'Dandelions pencilled on a duck egg',
        keywords: 'dandelions field pencil duck egg'
    },
    {
        title: 'Desiderata',
        note: 'Famous poem about desire and loss. Spiral text in ink.',
        img: 'images/desiderata_poem2_spiral_text_ink.webp',
        details: `This is an early piece done on a duck egg. It's a poem called Desiderata by Max
            Ehrmann and is inked in continuous spiral text.

            Full, original text:

            Go placidly amid the noise and the haste, and remember what peace there may be in
            silence. As far as possible, without surrender, be on good terms with all persons.

            Speak your truth quietly and clearly; and listen to others, even to the dull and the
            ignorant; they too have their story.

            Avoid loud and aggressive persons; they are vexatious to the spirit. If you compare
            yourself with others, you may become vain or bitter, for always there will be greater
            and lesser persons than yourself.

            Enjoy your achievements as well as your plans. Keep interested in your own career,
            however humble; it is a real possession in the changing fortunes of time.

            Exercise caution in your business affairs, for the world is full of trickery. But let
            this not blind you to what virtue there is; many persons strive for high ideals, and
            everywhere life is full of heroism.

            Be yourself. Especially do not feign affection. Neither be cynical about love; for in
            the face of all aridity and disenchantment, it is as perennial as the grass.

            Take kindly the counsel of the years, gracefully surrendering the things of youth.

            Nurture strength of spirit to shield you in sudden misfortune. But do not distress
            yourself with dark imaginings. Many fears are born of fatigue and loneliness.

            Beyond a wholesome discipline, be gentle with yourself. You are a child of the universe
            no less than the trees and the stars; you have a right to be here.

            And whether or not it is clear to you, no doubt the universe is unfolding as it should.
            Therefore be at peace with God, whatever you conceive Him to be. And whatever your
            labors and aspirations, in the noisy confusion of life, keep peace in your soul. With
            all its sham, drudgery and broken dreams, it is still a beautiful world. Be cheerful.
            Strive to be happy.`,
        keywords: 'desiderata max ehrmann poem spiral text gel pen duck egg'
    },
    {
        title: 'Cat & Dog',
        note: 'Cat & Dog on a cracked duck egg',
        img: 'images/dog_and_cat_ink_cracked.webp',
        details: 'Gel pen drawing on a duck egg. Cracked during drawing',
        keywords: 'gel pen cracked cat & dog duck egg'
    },
    {
        title: 'Dog',
        note: 'Pencil sketch of a pet dog.',
        img: 'images/dog_pencil.webp',
        details: `Dog is sketched in pencil on a duck egg. The top has been milled. Black plastic
            mount`,
        keywords: 'mounted pet dog sketch pencil duck egg'
    },
    {
        title: 'Ghost',
        note: 'Pencil sketch of an Edinburgh ghost',
        img: 'images/edinburgh_man.webp',
        details: 'Pencil sketch on duck egg of an Edinburgh ghost',
        keywords: 'pencil sketch duck egg Edinburgh ghost man hat'
    },
    {
        title: 'Face',
        note: 'Cartoon thug',
        img: 'images/face_1_ink.webp',
        details: 'Cartoon thug sketched in gel pen on duck egg',
        keywords: 'cartoon thug face gel pen duck egg sketch thinning'
    },
    {
        title: 'Face',
        note: 'Cartoon thug',
        img: 'images/face_2_ink.webp',
        details: 'Cartoon thug sketched in gel pen on duck egg',
        keywords: 'cartoon thug face gel pen duck egg sketch bearded'
    },
    {
        title: 'Face',
        note: 'Cartoon thug',
        img: 'images/face_3_ink.webp',
        details: 'Cartoon thug sketched in gel pen on duck egg',
        keywords: 'cartoon thug face gel pen duck egg sketch skinhead mustache'
    },
    {
        title: 'Face',
        note: 'Cartoon thug',
        img: 'images/face_4_ink.webp',
        details: 'Cartoon thug sketched in gel pen on duck egg',
        keywords: 'cartoon thug face gel pen duck egg sketch skinhead moustache'
    },
    {
        title: 'Graffiti',
        note: 'Graffiti I saw in Cyprus',
        img: 'images/greek_graffiti_ink.webp',
        details: 'Graffiti I saw in Cyprus near the Northern border with Turkey',
        keywords: 'graffiti cyprus northern border turkey foreign'
    },
    {
        title: 'Shape',
        note: 'Green & gold art',
        img: 'images/green_and_gold_blown_pattern2_acrylic.webp',
        details: `Green acrylic blown into a pattern with 24ct gold leaf stripe overlaid. On duck
            egg with a matt protective varnish`,
        keywords: 'Green gold leaf acrylic duck egg blown art'
    },
    {
        title: 'Happy Days',
        note: 'Sketch of the dancing flowers on my car dashboard',
        img: 'images/happy_days_pencil.webp',
        details: 'Dancing flowers in pencil on duck egg',
        keywords: 'car dashboard dancing flowers pencil duck egg'
    },
    {
        title: 'Jigsaw',
        note: 'Jigsaw pieces milled into a duck egg',
        img: 'images/jigsaw_pencil.webp',
        details: 'Jigsaw pieces milled into a duck egg',
        keywords: 'milled jigsaw duck egg'
    },
    {
        title: 'Stripes',
        note: 'Stripes in a duck egg',
        img: 'images/lattice_egg_small_pic.webp',
        details: 'Wide diagonal stripes milled into a duck egg',
        keywords: 'stripes diagonal milled duck egg heavy wide'
    },
    {
        title: 'Milled',
        note: 'Milled gilded notes and initials',
        img: 'images/milled_gold_leaf.webp',
        details: `This duck egg has been milled top and bottom with a classic regular lattice.
            Gilded notes have carefully been applied with 24ct gold leaf and special adhesive.
            Initials have been milled in the band and the egg is finished with a fine matt varnish
            to protect the gold.`,
        keywords: 'duck egg gilded 24ct gold leaf milled lattice initials matt varnish '
    },
    {
        title: 'Milled',
        note: 'Milled holes',
        img: 'images/milled_holes.webp',
        details: 'A swirling pattern of varying sized holes milled into a duck egg',
        keywords: 'swirling pattern milled holes duck egg'
    },
    { title: 'Milled', note: 'Note...', img: 'images/milled_pattern_1.webp',details: 'Details...', keywords: 'Keywords...' },
    { title: 'Milled', note: 'Note...', img: 'images/milled_pattern_2.webp',details: 'Details...', keywords: 'Keywords...' },
    { title: 'Milled', note: 'Note...', img: 'images/milled_pattern_3.webp',details: 'Details...', keywords: 'Keywords...' },
    { title: 'Milled', note: 'Note...', img: 'images/milled_pattern_fragile.webp',details: 'Details...', keywords: 'Keywords...' },
    { title: 'Milled', note: 'Note...', img: 'images/milled_top_gold_leaf.webp',details: 'Details...', keywords: 'Keywords...' },
    { title: 'Milled', note: 'Note...', img: 'images/milled_top2.webp',details: 'Details...', keywords: 'Keywords...' },
    { title: 'Milled', note: 'Note...', img: 'images/milled2.webp',details: 'Details...', keywords: 'Keywords...' },
    { title: 'Mrs Humpty', note: 'Note...', img: 'images/mrs_humpty_ink.webp',details: 'Details...', keywords: 'Keywords...' },
    { title: 'Milled', note: 'Note...', img: 'images/musical_milled_gold_mounted.webp',details: 'Details...', keywords: 'Keywords...' },
    { title: 'Milled', note: 'Note...', img: 'images/musical_milled_gold_mounted2.webp',details: 'Details...', keywords: 'Keywords...' },
    { title: 'Old House', note: 'Note...', img: 'images/old_house_pencil.webp',details: 'Details...', keywords: 'Keywords...' },
    { title: 'Old Man', note: 'Note...', img: 'images/old_man_sprayed_and_scratched.webp',details: 'Details...', keywords: 'Keywords...' },
    { title: 'Milled', note: 'Note...', img: 'images/open_lace_milled.webp',details: 'Details...', keywords: 'Keywords...' },
    { title: 'Owl', note: 'Note...', img: 'images/owl_pencil.webp',details: 'Details...', keywords: 'Keywords...' },
    { title: 'Painted', note: 'Note...', img: 'images/painted_goose_egg1.webp',details: 'Details...', keywords: 'Keywords...' },
    { title: 'Painted', note: 'Note...', img: 'images/painted_goose_egg2.webp',details: 'Details...', keywords: 'Keywords...' },
    { title: 'Peace', note: 'Note...', img: 'images/peace1.webp',details: 'Details...', keywords: 'Keywords...' },
    { title: 'Dog', note: 'Note...', img: 'images/pencil_and_watercolour_dog.webp',details: 'Details...', keywords: 'Keywords...' },
    { title: 'Heart', note: 'Note...', img: 'images/pencil_heart.webp',details: 'Details...', keywords: 'Keywords...' },
    { title: 'House', note: 'Note...', img: 'images/pencil_house.webp',details: 'Details...', keywords: 'Keywords...' },
    { title: 'Kissing', note: 'Note...', img: 'images/pencil_kissing2.webp',details: 'Details...', keywords: 'Keywords...' },
    { title: 'Portrait', note: 'Note...', img: 'images/pencil_portrait.webp',details: 'Details...', keywords: 'Keywords...' },
    { title: 'Simple meadow', note: 'Note...', img: 'images/pencil_simple_meadow.webp',details: 'Details...', keywords: 'Keywords...' },
    { title: 'Worm', note: 'Note...', img: 'images/pencil_worm.webp',details: 'Details...', keywords: 'Keywords...' },
    { title: 'Poppy', note: 'Note...', img: 'images/poppy_ink_and_acrylic.webp',details: 'Details...', keywords: 'Keywords...' },
    { title: 'Ratty', note: 'Note...', img: 'images/ratty.webp',details: 'Details...', keywords: 'Keywords...' },
    { title: 'Reeds', note: 'Note...', img: 'images/reeds.webp',details: 'Details...', keywords: 'Keywords...' },
    { title: 'Man', note: 'Note...', img: 'images/someone_i_know_ink.webp',details: 'Details...', keywords: 'Keywords...' },
    { title: 'Spider', note: 'Note...', img: 'images/spider_pencil.webp',details: 'Details...', keywords: 'Keywords...' },
    { title: 'Sunflower', note: 'Note...', img: 'images/sunflower_ink_and_acrylic.webp',details: 'Details...', keywords: 'Keywords...' },
    { title: 'Sunshine days', note: 'Note...', img: 'images/sunshine_days_1_pencil.webp',details: 'Details...', keywords: 'Keywords...' },
    { title: 'Tree', note: 'Note...', img: 'images/tree_pencil.webp',details: 'Details...', keywords: 'Keywords...' },
    { title: 'Van Gogh', note: 'Note...', img: 'images/van_gogh_pencil.webp',details: 'Details...', keywords: 'Keywords...' },
    { title: 'Voronoi', note: 'Note...', img: 'images/voronoi_lace_milled_damaged.webp',details: 'Details...', keywords: 'Keywords...' },
    { title: 'Flower', note: 'Note...', img: 'images/wire_flower_ink_and_acrylic.webp',details: 'Details...', keywords: 'Keywords...' },
    { title: 'Xmas dec', note: 'Note...', img: 'images/xmas_dec_milled.webp',details: 'Details...', keywords: 'Keywords...' },
    { title: 'Xmas dec', note: 'Note...', img: 'images/xmas_dec_milled2.webp',details: 'Details...', keywords: 'Keywords...' }
];