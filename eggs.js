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
        keywords: 'duck egg spiral text blood ink watercolour watercolor pain death'
    },
    {
        title: 'Alice',
        note: 'Alice\'s mad tea party',
        img: 'images/alice_party_ink.webp',
        details: `Drawn in ballpoint pen on a duck egg. It shows the March Hare, the Dormouse and
            the Mad Hatter from Alice's Mad Tea Party`,
        keywords: 'duck egg looking glass hatter dormouse march hare fantasy lewis carroll'
    },
    {
        title: 'Alice',
        note: 'Alice\'s mad tea party',
        img: 'images/alice_party2_ink.webp',
        details: `Drawn in ballpoint pen on a duck egg. It shows the Mad Hatter from Alice's Mad Tea
            Party`,
        keywords: 'duck egg looking glass hatter fantasy lewis carroll'
    },
    {
        title: 'Alice',
        note: 'Alice through the looking glass',
        img: 'images/alice_party4_ink.webp',
        details: 'Drawn in ballpoint pen on a duck egg. It shows Alice from Alice\'s Mad Tea Party',
        keywords: 'duck egg tea party fantasy lewis carroll'
    },
    {
        title: 'Bee',
        note: 'Bumble bee',
        img: 'images/bee_ink_and_acrylic.webp',
        details: 'Zentangle bee drawn on a duck egg in gel pen and coloured in acrylic',
        keywords: 'zentangle acrylic gel pen duck egg'
    },
    {
        title: 'Beinn Alligin',
        note: 'Jewelled Mountain on the Torridon Ridge',
        img: 'images/ben_something_pencil.webp',
        details: 'Pencil sketch of Beinn Alligin, Scotland. Drawn on duck egg.',
        keywords: 'duck egg pencil scenery'
    },
    {
        title: 'Face',
        note: 'The face of fear.',
        img: 'images/black_drilled_out_scared_face.webp',
        details: `A duck egg has been sprayed black and the image has been scratched out of the
            black using a diamond tipped dentist drill. The image shows the terror in the eyes of a
            man who has seen too much.`,
        keywords: 'terror duck egg scratch eyes diamond dentist drill sprayed black'
    },
    {
        title: 'Shape',
        note: 'Blue & gold art',
        img: 'images/blue_and_gold_blown_pattern.webp',
        details: `Blue acrylic blown into a pattern with 24ct gold leaf stripe overlaid. On duck egg
            with a matt protective varnish`,
        keywords: 'acrylic duck egg blown'
    },
    {
        title: 'Cat & Dog',
        note: 'Childlike cat & dog',
        img: 'images/cat_and_dog_ink_and_watercolour.webp',
        details: `The simplistic cats and dogs are based on my daughter's button eye toys and
            represent a room full of 'odd one outs', each talking their own language but still
            having a good time together! Drawn in fine felt tip and painted roughly in watercolour`,
        keywords: 'simplistic odd one out duck egg good time'
    },
    {
        title: 'Tree of life',
        note: 'Celtic tree of life with EV initials.',
        img: 'images/celtic_band_ink1.webp',
        details: `Celtic style tree of life knotwork design with a person's initials. Drawn using
            black ballpoint pen on a duck egg`,
        keywords: 'knotwork ballpoint duck egg'
    },
    {
        title: 'Celtic band',
        note: 'Celtic tree of life and band.',
        img: 'images/celtic_band_ink2.webp',
        details: `Celtic style tree of life knotwork design with a matching band. Drawn using black
            ballpoint pen on a duck egg`,
        keywords: 'knotwork initials ballpoint duck egg'
    },
    {
        title: 'Celtic band',
        note: 'Celtic band.',
        img: 'images/celtic_band_ink3.webp',
        details: 'Celtic band drawn using black ballpoint pen on a duck egg',
        keywords: 'initials ballpoint duck egg'
    },
    {
        title: 'Child',
        note: 'Pencil sketch of a child',
        img: 'images/child_profile_pencil.webp',
        details: 'Pencil sketch of a child drawn on a duck egg',
        keywords: 'duck egg portrait face kid'
    },
    {
        title: 'City Scape',
        note: 'London skyline in ink',
        img: 'images/city_scape1_ink.webp',
        details: `London skyline drawn in gel pen on a duck egg. Scene shows the London Eye, Big Ben
            and Tower Bridge`,
        keywords: 'eye duck egg big ben tower bridge gel pen'
    },
    {
        title: 'City Scape',
        note: 'London skyline in ink',
        img: 'images/city_scape2_ink.webp',
        details: `London skyline drawn in gel pen on a duck egg. Scene shows Tower Bridge, the
            Gherkin, the Sky Garden and others`,
        keywords: 'eye duck egg tower bridge gherkin garden gel pen'
    },
    {
        title: 'City Scape',
        note: 'London skyline in ink',
        img: 'images/city_scape4_ink.webp',
        details: `London skyline drawn in gel pen on a duck egg. Scene shows the Walkie-talkie, the
            Gherkin, the Sky Garden and others`,
        keywords: 'eye duck egg walkie-talkie tower bridge gherkin garden gel pen'
    },
    {
        title: 'Clown',
        note: 'Creepy clown in ink and acrylic.',
        img: 'images/clown_ink_and_acrylic.webp',
        details: `The best children's stories are creepy. And the best characters are scary. Just
            what you need before bedtime! Drawn in ink and acrylic on a duck egg`,
        keywords: 'scary horror spooky halloween jester circus dark duck egg'
    },
    {
        title: 'Dandelions',
        note: 'A field of pencilled dandelions',
        img: 'images/dandelions_pencil_mounted.webp',
        details: 'Dandelions pencilled on a duck egg',
        keywords: 'duck egg flowers weed seed meadow nature'
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
        keywords: 'max ehrmann gel pen duck egg'
    },
    {
        title: 'Cat & Dog',
        note: 'Cat & Dog on a cracked duck egg',
        img: 'images/dog_and_cat_ink_cracked.webp',
        details: 'Gel pen drawing on a duck egg. Cracked during drawing',
        keywords: 'gel pen pets animals drawing'
    },
    {
        title: 'Dog',
        note: 'Pencil sketch of a pet dog.',
        img: 'images/dog_pencil.webp',
        details: `Dog is sketched in pencil on a duck egg. The top has been milled. Black plastic
            mount`,
        keywords: 'mounted duck egg'
    },
    {
        title: 'Ghost',
        note: 'Pencil sketch of an Edinburgh ghost',
        img: 'images/edinburgh_man.webp',
        details: 'Pencil sketch on duck egg of an Edinburgh ghost',
        keywords: 'duck egg man hat'
    },
    {
        title: 'Face',
        note: 'Cartoon thug',
        img: 'images/face_1_ink.webp',
        details: 'Cartoon thug sketched in gel pen on duck egg',
        keywords: 'gel pen duck egg sketch thinning'
    },
    {
        title: 'Face',
        note: 'Cartoon thug',
        img: 'images/face_2_ink.webp',
        details: 'Cartoon thug sketched in gel pen on duck egg',
        keywords: 'gel pen duck egg sketch bearded'
    },
    {
        title: 'Face',
        note: 'Cartoon thug',
        img: 'images/face_3_ink.webp',
        details: 'Cartoon thug sketched in gel pen on duck egg',
        keywords: 'gel pen duck egg sketch skinhead mustache'
    },
    {
        title: 'Face',
        note: 'Cartoon thug',
        img: 'images/face_4_ink.webp',
        details: 'Cartoon thug sketched in gel pen on duck egg',
        keywords: 'gel pen duck egg sketch skinhead moustache'
    },
    {
        title: 'Graffiti',
        note: 'Graffiti I saw in Cyprus',
        img: 'images/greek_graffiti_ink.webp',
        details: 'Graffiti I saw in Cyprus near the Northern border with Turkey',
        keywords: 'northern border turkey foreign'
    },
    {
        title: 'Shape',
        note: 'Green & gold art',
        img: 'images/green_and_gold_blown_pattern2_acrylic.webp',
        details: `Green acrylic blown into a pattern with 24ct gold leaf stripe overlaid. On duck
            egg with a matt protective varnish`,
        keywords: 'leaf acrylic duck egg blown'
    },
    {
        title: 'Happy Days',
        note: 'Sketch of the dancing flowers on my car dashboard',
        img: 'images/happy_days_pencil.webp',
        details: 'Dancing flowers in pencil on duck egg',
        keywords: 'pencil duck egg'
    },
    {
        title: 'Jigsaw',
        note: 'Jigsaw pieces milled into a duck egg',
        img: 'images/jigsaw_pencil.webp',
        details: 'Jigsaw pieces milled into a duck egg',
        keywords: 'puzzle game holes pierced cutwork carved openwork white eggshell sculpture'
    },
    {
        title: 'Stripes',
        note: 'Stripes in a duck egg',
        img: 'images/lattice_egg_small_pic.webp',
        details: 'Wide diagonal stripes milled into a duck egg',
        keywords: 'diagonal milled heavy wide'
    },
    {
        title: 'Milled',
        note: 'Milled gilded notes and initials',
        img: 'images/milled_gold_leaf.webp',
        details: `This duck egg has been milled top and bottom with a classic regular lattice.
            Gilded notes have carefully been applied with 24ct gold leaf and special adhesive.
            Initials have been milled in the band and the egg is finished with a fine matt varnish
            to protect the gold.`,
        keywords: 'duck egg 24ct gold leaf lattice matt varnish'
    },
    {
        title: 'Milled',
        note: 'Milled holes',
        img: 'images/milled_holes.webp',
        details: 'A swirling pattern of varying sized holes milled into a duck egg',
        keywords: 'swirling pattern duck egg'
    },
    {
        title: 'Milled',
        note: 'Winding maze-like pattern milled through the shell',
        img: 'images/milled_pattern_1.webp',
        details: `A winding, maze-like pattern of channels milled right through the eggshell,
            leaving a delicate open lattice.`,
        keywords: `pierced cutwork carved fretwork openwork lace organic wavy meandering labyrinth
            camouflage eggshell sculpture`
    },
    {
        title: 'Milled',
        note: 'Interlocking oval rings milled through the shell',
        img: 'images/milled_pattern_2.webp',
        details: `Overlapping oval rings milled through the shell, leaving a lattice of fine bands
            around the egg.`,
        keywords: `pierced cutwork carved openwork lace circles ovals loops geometric pattern
            eggshell sculpture`
    },
    {
        title: 'Milled',
        note: 'Symmetrical curved lattice with two solid round panels',
        img: 'images/milled_pattern_3.webp',
        details: `A symmetrical design of curved arches and bands milled through the shell. Two
            solid round panels are left uncut at the base.`,
        keywords: `pierced cutwork carved openwork arches curves geometric lace shell eggshell
            sculpture white`
    },
    {
        title: 'Milled',
        note: 'Fragile cage of fine milled bands',
        img: 'images/milled_pattern_fragile.webp',
        details: `Most of the shell has been milled away, leaving a delicate cage of thin bands that
            wrap around the egg.`,
        keywords: `pierced cutwork carved openwork ribs stripes lines delicate thin lace shell
            eggshell sculpture`
    },
    {
        title: 'Milled',
        note: 'Milled lace top with gold leaf music notes',
        img: 'images/milled_top_gold_leaf.webp',
        details: `The top of this egg has been milled into a fine lace dome with a band of small
            windows below. Music notes on a stave are applied in gold leaf.`,
        keywords: `musical stave staff gilded gilt dome pierced cutwork carved openwork band
            eggshell sculpture`
    },
    {
        title: 'Milled',
        note: 'Milled dome top with radiating slots',
        img: 'images/milled_top2.webp',
        details: `The top of this egg has been milled into a dome of radiating slots, with a band of
            small windows beneath and more milled detail on the sides.`,
        keywords: `lace pierced cutwork carved openwork rays windows band eggshell sculpture ornate
            white`
    },
    {
        title: 'Milled',
        note: 'Milled script lettering lit from behind',
        img: 'images/milled2.webp',
        details: `Script lettering reading "40th Emma" milled into the shell, with a lace-milled
            top. The egg is lit from inside to show the writing.`,
        keywords: `Emma 40th birthday personalised personalized name gift writing text calligraphy
            lace pierced cutwork carved eggshell sculpture`
    },
    {
        title: 'Mrs Humpty',
        note: 'Cartoon Mrs Humpty in black ink',
        img: 'images/mrs_humpty_ink.webp',
        details: `A cartoon Mrs Humpty drawn in black ink on an egg, with long wavy hair, a wide
            grin and stick legs.`,
        keywords: `character funny quirky dumpty nursery rhyme figure woman wife hair drawing pen
            doodle comic`
    },
    {
        title: 'Milled',
        note: 'Milled lettering and gold leaf trim on a stand',
        img: 'images/musical_milled_gold_mounted.webp',
        details: `Script lettering reading "40th Emma" milled into the shell, between bands of
            milled windows edged in gold leaf. Mounted on a black wooden stand.`,
        keywords: `Emma 40th birthday personalised personalized name gift writing script text
            calligraphy mounted lace pierced cutwork carved gilded eggshell sculpture`
    },
    {
        title: 'Milled',
        note: 'Gold leaf music notes on a mounted egg',
        img: 'images/musical_milled_gold_mounted2.webp',
        details: `Music notes on a gold leaf stave run around the middle of the egg, between milled
            bands of small windows. The top is milled lace. Mounted on a black wooden stand.`,
        keywords: `musical stave staff gilded gilt stand lace dome pierced cutwork carved openwork
            band eggshell sculpture`
    },
    {
        title: 'Old House',
        note: 'Old stone houses in fine line',
        img: 'images/old_house_pencil.webp',
        details: `Fine line pencil drawing of old stone houses with gabled roofs and many windows,
            drawn on an egg.`,
        keywords: `building buildings cottage architecture street village townscape gables windows
            roofs pencil sketch drawing`
    },
    {
        title: 'Old Man',
        note: 'Bearded old man scratched out of black',
        img: 'images/old_man_sprayed_and_scratched.webp',
        details: `The egg has been sprayed black and the face of a bearded old man scratched out of
            the paint to reveal the white shell.`,
        keywords: 'portrait face elderly scratchboard sprayed white dramatic stern grandfather'
    },
    {
        title: 'Milled',
        note: 'Open lace of overlapping circles milled through the shell',
        img: 'images/open_lace_milled.webp',
        details: `A dense lace pattern of overlapping circles milled right through the shell,
            leaving the egg as an open cage.`,
        keywords: `pierced cutwork carved openwork rings ovals netting lattice geometric eggshell
            sculpture white`
    },
    {
        title: 'Owl',
        note: 'Owl with large round eyes in fine pencil',
        img: 'images/owl_pencil.webp',
        details: `An owl face drawn in fine pencil on an egg, with large round eyes and feathered
            detail. Small slots have been milled in the top.`,
        keywords: 'bird face feathers wildlife nature night owlet sketch drawing hatching stipple'
    },
    {
        title: 'Painted',
        note: 'Blue goose egg with a gold band',
        img: 'images/painted_goose_egg1.webp',
        details: `A goose egg painted blue with a fine grid of pale lines and a broad gold band,
            finished with a glossy shine.`,
        keywords: 'grid check glossy shiny varnish acrylic colourful color'
    },
    {
        title: 'Painted',
        note: 'Silver-grey goose egg with gold bands',
        img: 'images/painted_goose_egg2.webp',
        details: `A goose egg painted silver-grey with broad gold bands and fine gold lines sweeping
            around it.`,
        keywords: 'gray metallic stripes lines glossy shiny colourful color'
    },
    {
        title: 'Peace',
        note: 'The word PEACE beside an East Asian character',
        img: 'images/peace1.webp',
        details: `The word PEACE written downward in black ink, with a stippled East Asian character
            on the other side of a fine dividing line.`,
        keywords: `text lettering calligraphy kanji chinese japanese symbol black white ink pen
            minimalist harmony`
    },
    {
        title: 'Dog',
        note: 'Grey dog in a red bandana',
        img: 'images/pencil_and_watercolour_dog.webp',
        details: `A pencil and watercolour portrait of a grey dog sitting in a red bandana, drawn on
            an egg.`,
        keywords: 'pet puppy hound canine animal scarf neckerchief watercolor sketch painting'
    },
    {
        title: 'Heart',
        note: 'Anatomical heart styled as a hand grenade',
        img: 'images/pencil_heart.webp',
        details: `A pencil drawing of an anatomical heart with the pin and lever of a hand grenade,
            drawn on an egg.`,
        keywords: `anatomy bomb love valentine romance medical engraving tattoo veins black white
            pencil sketch`
    },
    {
        title: 'Kissing',
        note: 'Outline sketch of a kissing couple',
        img: 'images/pencil_kissing2.webp',
        details: 'A faint pencil outline sketch of two figures kissing, drawn on an egg.',
        keywords: 'lovers love romance romantic valentine figures faint pencil drawing'
    },
    {
        title: 'Portrait',
        note: 'Pencil portrait of a smiling child',
        img: 'images/pencil_portrait.webp',
        details: 'A pencil portrait of a smiling young child, drawn on an egg with fine shading.',
        keywords: 'kid toddler baby face smile happy photo realistic likeness shaded drawing sketch'
    },
    {
        title: 'Simple meadow',
        note: 'Wildflowers and grasses in fine line',
        img: 'images/pencil_simple_meadow.webp',
        details: 'A simple meadow of wildflowers and grasses drawn in fine line on an egg.',
        keywords: `floral plants nature field botanical daisy countryside spring summer garden
            drawing pencil pen`
    },
    {
        title: 'Worm',
        note: 'Monstrous worm with a toothy grin',
        img: 'images/pencil_worm.webp',
        details: `A monstrous worm with a wide mouth full of teeth and a drooling tongue, drawn in
            fine pencil on an egg.`,
        keywords: `monster creature horror scary spooky grotesque teeth mouth fantasy cartoon weird
            gruesome pencil sketch drawing`
    },
    {
        title: 'Poppy',
        note: 'Red poppy outlined in ink',
        img: 'images/poppy_ink_and_acrylic.webp',
        details: `A red poppy with a yellow centre and green leaves, outlined in black ink and
            coloured in acrylic.`,
        keywords: `flower floral yellow green botanical remembrance petals plant nature colourful
            color painting acrylic`
    },
    {
        title: 'Ratty',
        note: 'Rodent character with a speech bubble',
        img: 'images/ratty.webp',
        details: `A rodent character with big round ears, standing with a speech bubble, drawn in
            fine pencil on an egg.`,
        keywords: 'mouse cartoon whimsical storybook animal pencil sketch drawing'
    },
    {
        title: 'Reeds',
        note: 'Windswept reeds in sweeping pencil lines',
        img: 'images/reeds.webp',
        details: `Reeds bending in the wind, drawn with long sweeping pencil lines and dark seed
            heads that wrap right around the egg.`,
        keywords: `grass grasses windy marsh river lake water plants nature landscape bulrush sketch
            drawing`
    },
    {
        title: 'Man',
        note: 'Bold black ink portrait with a moustache',
        img: 'images/someone_i_know_ink.webp',
        details: `A bold portrait of a man with a moustache and stubble, drawn in high-contrast
            black ink lines on an egg.`,
        keywords: `face mustache beard stubble stern eyes eyebrows high contrast white pen drawing
            graphic`
    },
    {
        title: 'Spider',
        note: 'Large hairy spider in pencil',
        img: 'images/spider_pencil.webp',
        details: 'A large hairy spider with long jointed legs, drawn in pencil on an egg.',
        keywords: `tarantula arachnid creepy insect bug spooky halloween horror scary eight legs
            nature animal sketch drawing`
    },
    {
        title: 'Sunflower',
        note: 'Yellow sunflower in ink and acrylic',
        img: 'images/sunflower_ink_and_acrylic.webp',
        details: `A bright yellow sunflower with a brown centre and green stem, outlined in ink and
            coloured in acrylic.`,
        keywords: `floral green brown botanical petals plant nature summer garden colourful color
            painting`
    },
    {
        title: 'Sunshine days',
        note: 'Flowers in pots with the words Sunshine Days',
        img: 'images/sunshine_days_1_pencil.webp',
        details: `A pencil drawing of flowers in pots, with the words Sunshine Days written in hand
            lettering around the egg.`,
        keywords: `plants garden happy cheerful lettering text naive childlike pencil sketch drawing`
    },
    {
        title: 'Tree',
        note: 'Bare tree with spreading branches',
        img: 'images/tree_pencil.webp',
        details: `A bare tree with a gnarled trunk and spreading branches, drawn in pencil with
            dense dark shading on an egg.`,
        keywords: `trunk winter nature woodland landscape silhouette dark shaded black white pencil
            sketch drawing`
    },
    {
        title: 'Van Gogh',
        note: 'Pencil portrait of Vincent van Gogh',
        img: 'images/van_gogh_pencil.webp',
        details: 'A fine pencil portrait of the painter Vincent van Gogh, drawn on an egg.',
        keywords: `painter artist face beard famous dutch post-impressionist art history sketch
            drawing`
    },
    {
        title: 'Voronoi',
        note: 'Voronoi cell lace milled through the shell',
        img: 'images/voronoi_lace_milled_damaged.webp',
        details: `A lace of irregular Voronoi cells milled right through the shell, spreading out
            from a smooth patch. This egg has some damage.`,
        keywords: `honeycomb cells mesh net pierced cutwork carved openwork geometric mathematical
            pattern eggshell sculpture`
    },
    {
        title: 'Flower',
        note: 'Stylised red flower with a twisting wire-like stem',
        img: 'images/wire_flower_ink_and_acrylic.webp',
        details: `A stylised flower with red petals, a yellow centre and a twisting wire-like stem,
            outlined in ink and coloured in acrylic.`,
        keywords: `floral yellow teal green petals plant whimsical colourful color painting abstract
            ink acrylic`
    },
    {
        title: 'Xmas dec',
        note: 'Christmas decoration milled from an egg',
        img: 'images/xmas_dec_milled.webp',
        details: 'Large shapes milled through the shell to make a Christmas decoration.',
        keywords: `ornament festive holiday winter seasonal hanging pierced cutwork carved openwork
            eggshell sculpture white`
    },
    {
        title: 'Xmas dec',
        note: 'Milled star Christmas decoration',
        img: 'images/xmas_dec_milled2.webp',
        details: 'A large star milled through the shell to make a Christmas decoration.',
        keywords: `ornament festive holiday winter seasonal hanging pierced cutwork carved openwork
            eggshell sculpture white`
    }
];