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
        The German source has bigger, stronger eggs with the hole in the fat end - which suits my needs better.`
    },
    {
        q: 'Are the eggs blown?',
        a: `The eggs are received by me blown. I bleach them until they are just pure shell - with no biological residues. 
        They are then inspected under bright light for hairline cracks - particularly around the blow holes.
        If the egg is to be milled, it is coated internally with a thin clear resin that adheres to the shell pores and
        gives it great strength. The coating is only on goose eggs as the resin goes through a duck egg shell.`
    },
    {
        q: 'How are the eggs decorated?',
        a: `Each milled egg is done with a high speed dentist\'s drill fitted with a diamond bur as the calcium carbonate shell
        is actually very hard wearing. The decorated eggs are done with ballpoint, felt tip, gel pen or pencil as appropriate.
        The gilded eggs use 24ct gold leaf applied with special adhesive.
        Where needed, I will apply a matt varnish finish to stop smudging of the drawing or damage to the gold leaf.
        My favourite colouring materials are watercolour or acrylic.`
    },
    {
        q: 'What is RED Art?',
        a: `RED Art stands for Real Egg Dust Art. The 'Real' refers to the real eggs that I use - not ceramic models.`
    },
    {
        q: 'How much are the eggs?',
        a: `I love sharing my hobby with others and it is wonderful when someone shows support by purchasing an egg - but
        they are not mass produced. I have sold eggs in the past for between £15 and £105 depending on the materials used and the
        time taken to make the egg. A simple line drawing from an existing design would be at the low price range whereas a
        detailed, milled, drawn, coloured and gilded egg from a complex customer idea that was personalised would be at the
        high end.\n\n
        \n\n
        In summary, many factors affect cost:\n\n
        - existing design, good to ship immediately\n\n
        - existing design, needs copying\n\n
        - new design - but can be copied in future\n\n
        - new design - but personalised and cannot be sold in future\n\n
        - design complexity\n\n
        - colouring complexity\n\n
        - milling complexity\n\n
        - gold leaf\n\n
        - special treatments\n\n
        Best thing to do is to let me know what you would like then I can look at what can be done.\n\n
        *** For more information, see the question on DELIVERY.***
        `
    },
    {
        q: 'How long is delivery?',
        a: `Sometimes the egg has already been made and I can pack and post it in a day or two
        (to the UK only, I'm afraid). If the egg is based on an existing one (displayed on the website) but needs to be copied,
        then I can usualy post it in 3 or 4 days. If, however, you have a unique idea for an egg, I would need to look at the
        materials used and the work involved and give you my best guess on timescales. It's all in the detail so I cant really
        predict a timescale here without further information. Some commissions have taken weeks to design - this is sometimes
        the biggest challenge. \n\n
        \n\n
        In summary:\n\n
        - existing egg: 1-2 days to post\n\n
        - copied egg: 3-4 days to post\n\n
        - commission: 1-6 weeks to post\n\n
        Best thing to do is to let me know what you would like then I can look at what can be done.\n\n
        *** For more information, see the question on COMMISSIONS.***`
    },
    {
        q: 'Do you do commissions?',
        a: `I love working with an interesting idea - and if you have one, please let me know. 
        I roughly sketch out what the egg will be like then use my own software to project the sketch onto a 3D model of the
        egg so you can view it at all angles before the real egg is started. At that point,
        you can decide if you want to proceed with the commission after discussing price, materials and timescales.\n\n
        In summary:\n\n
        - Discuss idea\n\n
        - Sketch onto 3D model for viewing\n\n
        - Tweek idea as required\n\n
        - Discuss timescales and cost\n\n
        - If OK, I will formaly start commission after a small deposit.
        `
    },
    {
        q: 'Are the eggs easily broken?',
        a: `If the egg is to be milled, I coat the inside with a fine layer of clear resin. 
        Even if the egg were cracked by mishandling, the internal layer bonds tightly to the pores in the shell and keeps the egg
        strong. For non milled eggs, the blown goose eggs are surprisingly strong even without the resin - but on request I could
        still resin coat the inside for added protection. I have an [egg rotating machine](images/my_rotator.webp) to ensure the
        coating is even and thorough.`
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

