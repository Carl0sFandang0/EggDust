// ============================================================
// EggDust FAQ: edit this file to add, change or remove questions.
//
// Each question looks like this (keep the commas and quote marks):
//   { q: 'The question?', a: 'The answer.' },
//
// - Put a blank line inside an answer by writing \n\n (it starts a new paragraph).
// - If your text contains an apostrophe ('), use a typographic one (’) or write \'
//   so it does not end the text early. Quotation marks ("") are fine as they are.
// - The questions show in the order listed here.
// - To make a bulleted list (a small round dot at the start of each line), start each line with
//   a hyphen and a space, with \n between the lines. For example:
//     a: 'The main points:\n- Real eggs, never ceramic\n- Milled with a diamond bur\n- Gilded with 24ct gold leaf'
//   Or use backticks (`) instead of quote marks and press Enter for each new line:
//     a: `The main points:
//     - Real eggs, never ceramic
//     - Milled with a diamond bur
//     - Gilded with 24ct gold leaf`
//   Links work inside list lines too. (Tab characters are ignored on a web page, so use a list
//   when you want items set in from the margin.)
// - To add a link, write [the words to click](the address) inside the answer. For example:
//     'See the [finished egg](images/my_egg.webp) or visit [my other site](https://example.com).'
//   A link to a picture (.webp .jpg .jpeg .png .gif .avif) opens in a pop-up window over the page.
//   Any other link opens in a new tab. Pictures can be in your images folder (images/name.webp).
//   Remember file names must match exactly, including capitals.
// - To hide a question without losing it, put // at the start of its line.
// - If you change this file, add 1 to the number after faq.js in index.html (faq.js?v=1 becomes ?v=2).
// ============================================================
const FAQS = [
    {
        q: 'What kind of eggs do you use?',
        a: `I use real goose and duck eggs, sourced from Germany and the UK. Goose eggs are seasonal so I need to stock carefully.
        The German source has bigger, stronger eggs with the hole in the wide end - which suits my needs better.`
    },
    {
        q: 'Are the eggs blown?',
        a: `The eggs are received by me already emptied by the supplier but not clean. I bleach them in a bath of recirculating 
        sodium hypochlorite then rinse until they are just pure shell - with no biological residues. 
        They are then inspected under bright light for hairline cracks - particularly around the holes that were made to extract
        the yolk and white. Even at this stage I can get a high reject rate - but it is really important to start with a flawless
        egg.`
    },
    {
        q: 'How are the eggs decorated?',
        a: `Holes and surface patterns are milled into my eggs with a high speed dentist's drill fitted with a diamond bit.
        The calcium carbonate shell is actually very hard and a normal tungsten or high speed steel drill will not touch them.
        They are decorated with ballpoint, felt tip, gel pen or pencil as appropriate.
        The gilded eggs use 24ct gold leaf applied with special adhesive. This is a very delicate and difficult operation
        that requires great patience to produce a clean edge. Where needed, I will apply a matt varnish finish to stop smudging
        of the drawing or damage to the gold leaf. My favourite colouring materials are watercolour and acrylic.`
    },
    {
        q: 'What is RED Art?',
        a: `RED Art stands for Real Egg Dust Art. The 'Real' refers to the real eggs that I use - not ceramic models.`
    },
    {
        q: 'How much are the eggs?',
        a: `It is wonderful when someone shows support by purchasing an egg. I have sold eggs in the past for between
        £15 and £105 depending on the materials used and the time taken to make the egg. A simple line drawing from an
        existing design would be at the lower end of the price range whereas a detailed, milled, drawn, coloured, gilded
        and personalised egg from a complex customer idea: this would be at the high end.\n
        In summary, many factors affect cost:\n
        - new vs existing design\n
        - in stock vs needs re-making\n
        - design complexity\n
        - colouring complexity\n
        - milling complexity\n
        - gold leaf\n
        - special treatments\n
        Best thing to do is to let me know what you would like then I can look at what can be done.\n
        *** For more information, see the question on DELIVERY ***
        `
    },
    {
        q: 'How long is delivery?',
        a: `I love sharing my hobby with others - but they are not mass produced items and I am literaly a one man team. 
        Sometimes the egg has already been made and I can pack and post it in a day or two (to the UK only, I'm afraid).
        If the egg is based on an existing one (displayed on the website) but needs to be re-made, then I can usualy post
        it in 3 or 4 days. If, however, you have a unique idea for an egg, I would need to look at the materials used and
        the work involved and give you my best guess on timescales. It's all in the detail so I can't really predict a
        timescale here without further information. Some commissions have taken weeks to design - this is sometimes the
        biggest challenge. \n
        \n
        In summary:\n
        - existing egg: 1-2 days to post\n
        - copied egg: 3-4 days to post\n
        - commission: 1-6 weeks to post\n
        Best thing to do is to let me know what you would like then I can look at what can be done.\n
        *** For more information, see the question on COMMISSIONS ***`
    },
    {
        q: 'Do you do commissions?',
        a: `I love working with an interesting idea - and if you have one, please let me know. 
        First, I roughly sketch out what the design will look like. This sketch is projected onto a 3D model of the egg so
        you can view it thoroughly from all angles before the real egg is started. This is important as the egg shape
        distorts perspective so the design may need tweaking. Next we discuss price, materials and timescales and you decide
        if you want to proceed with the commission. At this point a good faith deposit may be requested and the commision started.\n\n
        In summary:\n
        - Discuss idea\n
        - Sketch onto 3D model for viewing\n
        - Tweak idea as required\n
        - Discuss timescales and cost\n
        - If OK, I will formaly start the commission after a good faith deposit.
        `
    },
    {
        q: 'Are the eggs easily broken?',
        a: `The goose egg can be coated internally with a thin clear resin that penetrates the pores in the shell and gives it great
        strength. A none milled goose egg, for example, would need to be dropped more than two foot directly onto concrete for it to crack
        and even then it will not fall apart. I have an [egg rotating machine](images/my_rotator.webp) to ensure the coating is even and
        thorough. Unfortunately the resin takes 48 Hrs to harden fully - which affects the creation time so I don't normaly do this unless the
        egg is milled.`
    },
    {
        q: 'Do the eggs come on a stand?',
        a: `The eggs are shipped on a small, simple stand shaped like a disc. In the past I have tried
        [tall, shapely stands](images/stands.jpg) but because they are 3D printed in PLA, they are lightweight and actualy
        make it easier for the egg to fall over with risk of damage - so I have gone away from this to a simple, low stand. 
        If you prefer no stand (so you can use your own) then please just let me know and I will not attach one`
    },
    {
        q: 'Can I buy an egg, or ask about one?',
        a: `If you have an interest in a particular egg, just get in touch by using the form in the 'Get in touch' section
        below or email me from your own email using 'eggdust@mail.co.uk' and let me know your thoughts.
        I would be glad to hear from you.`
    }
    // Add more questions here. Remember a comma after the closing } of the one above.
    // { q: 'Your question?', a: 'Your answer.' }
];

