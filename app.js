const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
const toTop = document.querySelector(".to-top");
const languageButtons = document.querySelectorAll(".lang button");
const heroSlides = document.querySelectorAll(".hero-slide");
const heroDots = document.querySelectorAll(".hero-dots span");

const fiDefaults = {};
document.querySelectorAll("[data-i18n]").forEach((element) => {
  fiDefaults[element.dataset.i18n] = element.textContent;
});

const translations = {
  fi: {
    ...fiDefaults,
    pageTitle: "AKTIIV24 - rakennus- ja remonttityöt Suomessa",
    metaDescription: "AKTIIV24 tekee rakennus- ja remonttitöitä Suomessa ja Uudellamaalla. Sisäremontit, saunaremontit, lattiat, kipsilevytyöt, maalaus, purkutyöt ja julkisivutyöt.",
    ogDescription: "Rakennus- ja remonttityöt yksityisasiakkaille, taloyhtiöille, yrityksille ja urakoitsijoille. Palvelemme Uudellamaalla ja muualla Suomessa.",
    mailtoMessage: "Sähköpostiohjelma avataan. Tarkista tiedot ja liitä kuvat mukaan ennen lähettämistä.",
    formThanks: "Kiitos! Ota yhteyttä puhelimitse 041 749 1334 tai sähköpostilla aktiiv24@gmail.com.",
    formSending: "Lähetetään...",
    formSuccess: "Kiitos yhteydenotosta. Viestisi on lähetetty, ja palaamme asiaan mahdollisimman pian.",
    formError: "Viestin lähetys ei onnistunut. Voit soittaa suoraan numeroon 041 749 1334 tai lähettää sähköpostia osoitteeseen aktiiv24@gmail.com.",
    formMissingKey: "Verkkolomake ei ole vielä aktiivinen. Käytä alla olevaa sähköpostilinkkiä.",
    formMissingTask: "Kuvaile lyhyesti, minkälaista työtä tarvitset."
  },
  en: {
    pageTitle: "AKTIIV24 - construction and renovation work in Finland",
    metaDescription: "AKTIIV24 provides construction and renovation work in Finland and Uusimaa: interior renovations, sauna renovations, floors, drywall work, painting, demolition and facade work.",
    ogDescription: "Construction and renovation work for private clients, housing companies, businesses and contractors. We serve Uusimaa and other areas in Finland.",
    navServices: "Services", navPortfolio: "Portfolio", navAbout: "About", navWork: "Work", navContacts: "Contacts",
    ctaRequest: "Request a quote", ctaPortfolio: "View services",
    heroEyebrow: "Client idea · clear plan · tidy execution",
    heroTitle: "AKTIIV24 - construction and renovation work in Finland",
    heroLead: "Construction and renovation work for private clients, housing companies, businesses and contractors. A clear workflow, tidy execution and a finished result on the agreed schedule.",
    heroPromise: "Your idea is heard. The work is planned. The result is done properly.",
    heroSublead: "We help turn a renovation or construction idea into a clear plan and finished work - calmly, honestly and as agreed.",
    statExperienceNumber: "25+ years", statExperience: "experience", statFinland: "Work in Uusimaa and elsewhere in Finland by agreement", statToolsNumber: "100% own", statTools: "tools", statClients: "private and business clients",
    strongIntro: "AKTIIV24 carries out construction and renovation work with a clear process: agreed work, tidy execution and a finished result without unnecessary hassle. We serve private clients, housing companies, businesses and contractors across Finland.",
    listenEyebrow: "Client idea", listenTitle: "We listen first, then we build",
    listenText1: "Every client has their own idea of how the result should look and how the space should function. For us, good work starts with understanding the client's need, the site situation and the goal of the work.",
    listenText2: "We do not force a ready-made solution. We go through the idea, suggest practical options and carry out the work in the agreed way.",
    trustEyebrow: "Trust", trustTitle: "Why choose AKTIIV24?",
    trust1: "We listen to the client's idea",
    trust2: "We suggest practical solutions",
    trust3: "We respect the home and the worksite",
    trust4: "We agree things clearly",
    trust5: "We finish the work properly",
    trust1Desc: "First we go through what the client wants to achieve and what matters most at the site.",
    trust2Desc: "We explain openly which solution is sensible, durable and realistic in terms of cost.",
    trust3Desc: "The work is done tidily, systematically and with respect for the value of the property.",
    trust4Desc: "The work content, schedule and next steps are reviewed before execution.",
    trust5Desc: "The goal is a finished, functional and tidy result.",
    aboutEyebrow: "Company", aboutTitle: "A construction company with a practical approach",
    aboutP1: "AKTIIV24 carries out construction and renovation work for private clients, housing companies, businesses and contractors. We work with interiors, facades, saunas, floors, walls, doors, windows and other construction tasks.",
    aboutP2: "Our approach is simple: first we understand the task, then we suggest a practical solution, do the work carefully and bring the site to a finished result.",
    aboutP3: "We value order, clear agreements and respect for the client’s property. For us, a good renovation means both a good result and a calm working process.",
    serviceArea: "We work in Uusimaa and, when needed, elsewhere in Finland: Helsinki, Espoo, Vantaa, Nurmijärvi, Tuusula, Kerava, Järvenpää and nearby areas.",
    servicesEyebrow: "Services", servicesTitle: "Our services",
    servicesLead: "We provide clear construction and renovation work: interior renovations, floor installation, sauna renovations, painting, drywall and partition work, demolition, facade work, and door and window installation.",
    serviceInteriorTitle: "Interior renovations",
    serviceInteriorText: "Interior renovation for apartments, houses and business spaces: walls, ceilings, floors, painting and filling work, drywall work and partitions.",
    serviceFloorTitle: "Floors",
    serviceFloorText: "Floor installation is planned according to the subfloor, material and room use. We install laminate, parquet and vinyl and finish the skirting boards.",
    serviceSaunaTitle: "Saunas and wet-room preparation",
    serviceSaunaText: "Sauna renovation and preparation work are carried out carefully, so the space becomes functional, tidy and long-lasting.",
    servicePrepTitle: "Doors and windows",
    servicePrepText: "Door and window installation, frames, trims and finishing work are adapted to the structure of the site and the desired result.",
    serviceFacadeTitle: "Facades and exterior work",
    serviceFacadeText: "Facade work, exterior cladding, painting and demolition/preparation work are carried out according to the agreed scope.",
    serviceDemoTitle: "Demolition and preparation",
    serviceDemoText: "Demolition is done in a controlled way: protection, cleaning and material preparation help the next work stages proceed cleanly.",
    serviceInteriorItem1: "walls, ceilings, floors", serviceInteriorItem2: "painting and filling work", serviceInteriorItem3: "drywall and partition walls",
    serviceFloorItem1: "laminate", serviceFloorItem2: "parquet", serviceFloorItem3: "vinyl", serviceFloorItem4: "underlay materials and skirting boards",
    serviceSaunaItem1: "sauna renovations", serviceSaunaItem2: "panels and benches", serviceSaunaItem3: "preparation before waterproofing and tiling",
    servicePrepItem1: "door installation", servicePrepItem2: "window replacement", servicePrepItem3: "frames, trims and finishing",
    serviceFacadeItem1: "exterior cladding", serviceFacadeItem2: "painting", serviceFacadeItem3: "demolition and preparation work",
    serviceDemoItem1: "demolition", serviceDemoItem2: "protection", serviceDemoItem3: "cleaning", serviceDemoItem4: "material preparation",
    ctaEstimate: "Request an estimate",
    ideaEyebrow: "From idea to execution", ideaTitle: "From idea to finished work",
    ideaText1: "You do not need to have a complete plan before contacting us. It is enough to tell us what you want to change, repair or build.",
    ideaText2: "We help you understand what the work requires in practice, in what order it should be done and what kind of execution fits the site.",
    whyEyebrow: "Why AKTIIV24", whyTitle: "Clear work without empty promises",
    why1Title: "Order on site", why1Text: "The work is organized so the next stage does not start by fixing disorder.",
    why2Title: "Clear agreements", why2Text: "Scope, schedule, work format and materials are discussed before work begins.",
    why3Title: "Practical experience", why3Text: "We handle many kinds of tasks, from a single stage to a complete renovation.",
    why4Title: "Private and B2B", why4Text: "We can join a project as the contractor or as an additional resource.",
    portfolioEyebrow: "Portfolio", portfolioTitle: "Examples of work areas",
    portfolioLead: "The images are realistic illustrative images of AKTIIV24 service areas and the style of the finished result. Real project photos will only be added with client permission.",
    portfolioReal: "Project photos added with client permission", portfolioVisual: "Illustrative images in use", portfolioRealNote: "At the moment the portfolio uses illustrative images. They help show the services, materials and expected quality level.",
    filterAll: "All", filterInterior: "Interior", filterSauna: "Saunas", filterFloor: "Floors", filterFacade: "Facades",
    portfolio1: "Apartment renovation", portfolio2: "Sauna renewal", portfolio3: "Floor installation", portfolio4: "Wall painting", portfolio5: "House facade", portfolio6: "Wet room",
    portfolio1Desc: "A clearer, tidier and more functional everyday space.", portfolio2Desc: "A warm, calm and carefully finished whole.", portfolio3Desc: "A level base, the right material and a finished result.", portfolio4Desc: "A cleaner look and careful surface without unnecessary mess.", portfolio5Desc: "Exterior repair that improves both appearance and service life.", portfolio6Desc: "A carefully prepared space for the next work stages.",
    portfolio1Point1: "wall and surface finishing", portfolio1Point2: "a functional whole for everyday living",
    portfolio2Point1: "panels and benches", portfolio2Point2: "tidy and long-lasting finish",
    portfolio3Point1: "laminate, parquet or vinyl", portfolio3Point2: "skirting boards and finishing",
    portfolio4Point1: "protection and preparation", portfolio4Point2: "an even painted surface",
    portfolio5Point1: "exterior cladding and painting", portfolio5Point2: "agreed scope and a tidy worksite",
    portfolio6Point1: "preparation before tiling", portfolio6Point2: "clear work stages",
    processEyebrow: "Process", processTitle: "How the work proceeds",
    process1Title: "Contact", process1Text: "Send a short description of the work, photos of the site and your preferred schedule.",
    process2Title: "Assessment", process2Text: "We review the work and, if needed, agree on a site visit.",
    process3Title: "Quote", process3Text: "You receive a clear estimate of the work content, schedule and cost.",
    process4Title: "Execution", process4Text: "The work is done according to the agreed plan, tidily and practically.",
    process5Title: "Finished result", process5Text: "We review the final result and make sure the agreed work has been completed.",
    contactBenefitsEyebrow: "After contacting us", contactBenefitsTitle: "What do you get when you contact us?",
    contactBenefit1: "A clear discussion about the work and the goal", contactBenefit2: "An honest assessment of what is worth doing", contactBenefit3: "Practical options for execution", contactBenefit4: "An agreed workflow without unnecessary confusion", contactBenefit5: "A tidy and finished result",
    b2bTitle: "Cooperation with companies and contractors",
    b2bText: "AKTIIV24 can carry out individual construction and renovation stages for companies, contractors and property owners. We can join a project for a defined scope or as an additional resource on site.",
    b2b1: "interior renovation work;", b2b2: "demolition, drywall and framing;", b2b3: "floors, painting, saunas and facades;", b2b4: "hourly work or agreed scope.",
    workEyebrow: "Team", workTitle: "Work and cooperation", workLead: "If you have experience, tools, responsibility and the wish to do quality work, send us your details.",
    labelName: "Name", labelPhone: "Phone", labelCity: "City", labelExperience: "Experience and skills", sendRequest: "Send application",
    reviewsEyebrow: "Reviews", reviewsTitle: "Client reviews", reviewsLead: "Client experiences of cooperation, clear work and the finished result.",
    review1Text: "The work progressed as agreed and communication was clear from beginning to end. We especially appreciated that our own idea was calmly discussed before the work started.", review1Author: "Client, Uusimaa",
    review2Text: "The result was tidy and practical. The worksite was kept in order, and possible changes were communicated in good time.", review2Author: "Detached house owner, Nurmijärvi",
    review3Text: "We needed someone who could handle several small work stages without unnecessary hassle. The work was done calmly, tidily and as agreed.", review3Author: "Renovation client, Helsinki",
    areaEyebrow: "Service area", areaTitle: "Construction and renovation work in Uusimaa",
    areaText1: "AKTIIV24 serves clients in Uusimaa and, when needed, elsewhere in Finland. Work areas include Helsinki, Espoo, Vantaa, Nurmijärvi, Tuusula, Kerava, Järvenpää and nearby areas.",
    areaText2: "We do interior renovations, floor work, sauna renovations, painting work, drywall and partition work, door and window installation, and facade repair and preparation work.",
    faqTitle: "Frequently asked questions",
    faq1Q: "How quickly can the work start?", faq1A: "The start depends on the scope, location and schedule. Small jobs can often be arranged flexibly.",
    faq2Q: "Do you do small repair jobs?", faq2A: "Yes. We do both small repair and finishing jobs and larger renovation projects.",
    faq3Q: "Can I request an estimate based on photos?", faq3A: "Yes. Send photos, the site location and a short description of the needed work.",
    faq4Q: "Do you work only in Uusimaa?", faq4A: "Our main work area is Uusimaa: Helsinki, Espoo, Vantaa, Nurmijärvi, Tuusula, Kerava, Järvenpää and nearby areas. Depending on the work, we can also agree projects elsewhere in Finland.",
    faq5Q: "Do you work for companies and contractors?", faq5A: "Yes. We serve private clients, housing companies, businesses and contractors.",
    quoteEyebrow: "Quote request", quoteTitle: "What information do we need for a quote?",
    quoteText: "For a quick estimate, send us the site address or city, a short description of the needed work, a few photos of the current situation, your preferred schedule and whether the materials have already been purchased or you need help choosing them.",
    quoteCtaText: "Tell us your idea. We answer as clearly as possible and help you assess how the work should be carried out.",
    contactsEyebrow: "Contacts", contactsTitle: "Contact AKTIIV24",
    contactsLead: "Describe the work, attach photos of the site and tell us the preferred schedule. AKTIIV24 openly shows contact and registration details so clients know exactly who they are dealing with.",
    directCall: "You can also call directly: 041 749 1334",
    contactPhone: "Phone:", contactCompany: "Company:", footerArea: "Service area: Uusimaa and other parts of Finland by agreement", contactLanguages: "Contact languages:",
    labelEmail: "Email", labelContactLanguage: "Preferred contact language", chooseLanguage: "Choose language",
    labelCityLocation: "City / site location", labelTask: "What kind of work do you need?", labelDate: "Preferred schedule",
    labelPhotos: "Do you have photos of the site?", photosYes: "Yes", photosNo: "Not yet", labelMore: "Additional information",
    photoHint: "If the form does not work, you can send a message directly by email:", sendEmail: "Send quote request",
    formSending: "Sending...", formSuccess: "Thank you for contacting us. Your message has been sent, and we will get back to you as soon as possible.", formError: "The message could not be sent. You can call directly at 041 749 1334 or email aktiiv24@gmail.com.", formMissingKey: "The online form is not active yet. Please use the email link below.", formMissingTask: "Please describe what kind of work you need.",
    privacyEyebrow: "Privacy", privacyTitle: "Privacy",
    privacyText: "Information sent through the form is used only for contacting you and processing the quote request. Information is not shared with third parties without a separate reason or the client’s permission.",
    footerText: "Construction and renovation work in Finland", footerPhoneLabel: "Phone:", footerEmailLabel: "Email:", footerBusinessLabel: "Business ID:", footerRights: "© 2026 AKTIIV24. All rights reserved.",
    mailtoMessage: "Your email app is opening. Check the details and attach photos before sending.",
    formThanks: "Thank you! Please contact us by phone at 041 749 1334 or by email at aktiiv24@gmail.com."
  },
  et: {
    pageTitle: "AKTIIV24 - ehitus- ja remonditööd Soomes",
    metaDescription: "AKTIIV24 teeb ehitus- ja remonditöid Soomes ja Uusimaal: siseremont, saunaremont, põrandad, kipsplaaditööd, värvimine, lammutustööd ja fassaaditööd.",
    ogDescription: "Ehitus- ja remonditööd eraklientidele, korteriühistutele, ettevõtetele ja alltöövõtjatele. Teenindame Uusimaal ja mujal Soomes.",
    navServices: "Teenused", navPortfolio: "Portfoolio", navAbout: "Meist", navWork: "Töö", navContacts: "Kontakt",
    ctaRequest: "Küsi pakkumist", ctaPortfolio: "Vaata teenuseid",
    heroEyebrow: "Kliendi idee · selge plaan · puhas teostus",
    heroTitle: "AKTIIV24 - ehitus- ja remonditööd Soomes",
    heroLead: "Ehitus- ja remonditööd eraklientidele, korteriühistutele, ettevõtetele ja alltöövõtjatele. Selge tööprotsess, puhas teostus ja valmis tulemus kokkulepitud ajakavas.",
    statExperienceNumber: "25+ aastat", statExperience: "kogemust", statFinland: "Tööd Uusimaal ja kokkuleppel mujal Soomes", statToolsNumber: "100% oma", statTools: "tööriistad", statClients: "erakliendid ja ettevõtted",
    heroPromise: "Idee kuulatakse ära. Töö planeeritakse. Tulemus tehakse korralikult.",
    heroSublead: "Aitame muuta remondi- või ehitusidee selgeks plaaniks ja valmis tööks - rahulikult, ausalt ja kokkulepitult.",
    strongIntro: "AKTIIV24 teeb ehitus- ja remonditöid selge tööviisiga: kokkulepitud tööd, puhas teostus ja valmis tulemus ilma tarbetu segaduseta. Teenindame erakliente, korteriühistuid, ettevõtteid ja alltöövõtjaid eri piirkondades Soomes.",
    listenEyebrow: "Kliendi idee", listenTitle: "Kõigepealt kuulame, siis ehitame",
    listenText1: "Igal kliendil on oma mõte sellest, milline peaks lõpptulemus välja nägema ja kuidas ruum peaks toimima. Meie jaoks algab hea töö kliendi vajaduse, objekti olukorra ja töö eesmärgi mõistmisest.",
    listenText2: "Me ei suru valmis lahendust peale. Vaatame idee läbi, pakume praktilisi variante ja teeme töö kokkulepitud viisil.",
    trustEyebrow: "Usaldus", trustTitle: "Miks valida AKTIIV24?",
    trust1: "Kuulame kliendi ideed",
    trust2: "Pakume praktilisi lahendusi",
    trust3: "Austame kodu ja töömaad",
    trust4: "Lepime asjad selgelt kokku",
    trust5: "Viime töö lõpuni",
    trust1Desc: "Kõigepealt vaatame läbi, mida klient soovib saavutada ja mis on objektil kõige olulisem.",
    trust2Desc: "Räägime avatult, milline lahendus on mõistlik, vastupidav ja kulude poolest realistlik.",
    trust3Desc: "Töö tehakse puhtalt, süsteemselt ja objekti väärtust austades.",
    trust4Desc: "Töö sisu, ajakava ja järgmised sammud käiakse enne teostust läbi.",
    trust5Desc: "Eesmärk on valmis, toimiv ja puhas lõpptulemus.",
    aboutEyebrow: "Ettevõte", aboutTitle: "Praktilise lähenemisega ehitusettevõte",
    aboutP1: "AKTIIV24 teeb ehitus- ja remonditöid eraklientidele, korteriühistutele, ettevõtetele ja alltöövõtjatele. Töötame siseruumide, fassaadide, saunade, põrandate, seinte, uste, akende ja muude ehitusülesannetega.",
    aboutP2: "Meie tööviis on selge: esmalt mõistame ülesannet, seejärel pakume toimiva lahenduse, teeme töö korralikult ja viime objekti valmis tulemuseni.",
    aboutP3: "Hindame korda, selgeid kokkuleppeid ja kliendi objekti austamist. Hea remont tähendab meie jaoks nii head tulemust kui ka rahulikku tööprotsessi.",
    serviceArea: "Töötame Uusimaal ja vajadusel mujal Soomes: Helsingi, Espoo, Vantaa, Nurmijärvi, Tuusula, Kerava, Järvenpää ja lähialad.",
    servicesEyebrow: "Teenused", servicesTitle: "Meie teenused",
    servicesLead: "Teeme selgeid ehitus- ja remonditöid: siseremont, põrandate paigaldus, saunaremont, värvimine, kipsplaadi- ja vaheseinatööd, lammutus, fassaaditööd ning uste ja akende paigaldus.",
    serviceInteriorTitle: "Siseremondid", serviceInteriorText: "Siseremont korterites, majades ja äriruumides: seinad, laed, põrandad, värvimine ja pahteldus, kipsplaaditööd ja vaheseinad.",
    serviceFloorTitle: "Põrandad", serviceFloorText: "Põranda paigaldus tehakse aluspinna, materjali ja ruumi kasutuse järgi. Paigaldame laminaati, parketti ja vinüüli ning viimistleme liistud.",
    serviceSaunaTitle: "Saunad ja märgruumide ettevalmistus", serviceSaunaText: "Saunaremont ja ettevalmistustööd tehakse hoolikalt, et ruum oleks toimiv, puhas ja pikaealine.",
    servicePrepTitle: "Uksed ja aknad", servicePrepText: "Uste ja akende paigaldus, raamid, liistud ja viimistlus sobitatakse objekti konstruktsiooni ja soovitud tulemusega.",
    serviceFacadeTitle: "Fassaadid ja välistööd", serviceFacadeText: "Fassaaditööd, välisvooder, värvimine ning lammutus- ja ettevalmistustööd tehakse kokkulepitud mahus.",
    serviceDemoTitle: "Lammutus- ja ettevalmistustööd", serviceDemoText: "Lammutus tehakse kontrollitult: kaitsmine, koristus ja materjalide ettevalmistus aitavad järgmistel tööetappidel puhtalt edeneda.",
    serviceInteriorItem1: "seinad, laed, põrandad", serviceInteriorItem2: "värvimine ja pahteldus", serviceInteriorItem3: "kipsplaaditööd ja vaheseinad",
    serviceFloorItem1: "laminaat", serviceFloorItem2: "parkett", serviceFloorItem3: "vinüül", serviceFloorItem4: "alusmaterjalid ja liistud",
    serviceSaunaItem1: "saunaremont", serviceSaunaItem2: "paneelid ja lavad", serviceSaunaItem3: "ettevalmistus enne hüdroisolatsiooni ja plaatimist",
    servicePrepItem1: "uste paigaldus", servicePrepItem2: "akende vahetus", servicePrepItem3: "raamid, liistud ja viimistlus",
    serviceFacadeItem1: "välisvooder", serviceFacadeItem2: "värvimine", serviceFacadeItem3: "lammutus- ja ettevalmistustööd",
    serviceDemoItem1: "lammutus", serviceDemoItem2: "kaitsmine", serviceDemoItem3: "koristus", serviceDemoItem4: "materjalide ettevalmistus",
    ctaEstimate: "Küsi tööle hinnangut",
    ideaEyebrow: "Ideest teostuseni", ideaTitle: "Ideest valmis tööks",
    ideaText1: "Enne ühenduse võtmist ei pea teil olema valmis plaani. Piisab, kui räägite, mida soovite muuta, parandada või ehitada.",
    ideaText2: "Aitame mõista, mida töö praktikas nõuab, millises järjekorras seda tasub teha ja milline teostus sobib objektile.",
    whyEyebrow: "Miks AKTIIV24", whyTitle: "Selge töö ilma tühjade lubadusteta",
    why1Title: "Kord objektil", why1Text: "Töö korraldatakse nii, et järgmine etapp ei algaks segaduse parandamisega.",
    why2Title: "Selged kokkulepped", why2Text: "Töövorm, ajakava, maht ja materjalid arutatakse läbi enne töö algust.",
    why3Title: "Praktiline kogemus", why3Text: "Töötame erinevate ülesannetega alates ühest etapist kuni tervikliku remondini.",
    why4Title: "Eraklientidele ja B2B", why4Text: "Saame liituda objektiga tegijana või lisajõuna.",
    portfolioEyebrow: "Portfoolio", portfolioTitle: "Näited töövaldkondadest",
    portfolioLead: "Pildid on realistlikud näidispildid AKTIIV24 teenusevaldkondadest ja lõpptulemuse stiilist. Tegelike objektide fotod lisatakse ainult klientide loal.",
    portfolioReal: "Objektifotod lisatakse kliendi loal", portfolioVisual: "Kasutusel on näidispildid", portfolioRealNote: "Praegu kasutab portfoolio näidispilte. Need aitavad mõista teenuseid, materjale ja soovitud lõpptulemuse taset.",
    filterAll: "Kõik", filterInterior: "Siseruumid", filterSauna: "Saunad", filterFloor: "Põrandad", filterFacade: "Fassaadid",
    portfolio1: "Korteri remont", portfolio2: "Sauna uuendus", portfolio3: "Põranda paigaldus", portfolio4: "Seinte värvimine", portfolio5: "Maja fassaad", portfolio6: "Märgruum",
    portfolio1Desc: "Selgem, puhtam ja igapäevaselt paremini toimiv ruum.", portfolio2Desc: "Soe, rahulik ja hoolikalt viimistletud tervik.", portfolio3Desc: "Tasane alus, õige materjal ja viimistletud tulemus.", portfolio4Desc: "Puhtam ilme ja hoolikas pind ilma tarbetu segaduseta.", portfolio5Desc: "Välispinna korrastus, mis parandab nii ilmet kui kasutusiga.", portfolio6Desc: "Hoolikalt ettevalmistatud ruum järgmisteks tööetappideks.",
    portfolio1Point1: "seinte ja pindade viimistlus", portfolio1Point2: "toimiv tervik igapäevaseks kasutuseks",
    portfolio2Point1: "paneelid ja lavad", portfolio2Point2: "puhas ja pikaealine viimistlus",
    portfolio3Point1: "laminaat, parkett või vinüül", portfolio3Point2: "liistud ja viimistlus",
    portfolio4Point1: "kaitsmine ja ettevalmistus", portfolio4Point2: "ühtlane värvipind",
    portfolio5Point1: "välisvooder ja värvimine", portfolio5Point2: "kokkulepitud maht ja korras töömaa",
    portfolio6Point1: "ettevalmistus enne plaatimist", portfolio6Point2: "selged tööetapid",
    processEyebrow: "Protsess", processTitle: "Nii töö edeneb",
    process1Title: "Kontakt", process1Text: "Saatke lühike töö kirjeldus, objekti fotod ja soovitud ajakava.",
    process2Title: "Hindamine", process2Text: "Vaatame töö läbi ja vajadusel lepime kokku objekti külastuse.",
    process3Title: "Pakkumine", process3Text: "Saate selge hinnangu töö sisule, ajakavale ja kuludele.",
    process4Title: "Teostus", process4Text: "Töö tehakse kokkulepitud plaani järgi, puhtalt ja praktiliselt.",
    process5Title: "Valmis tulemus", process5Text: "Vaatame tulemuse üle ja veendume, et kokkulepitud töö on tehtud.",
    contactBenefitsEyebrow: "Pärast ühendust", contactBenefitsTitle: "Mida saate, kui võtate ühendust?",
    contactBenefit1: "Selge vestluse töö ja eesmärgi üle", contactBenefit2: "Aus hinnang selle kohta, mida tasub teha", contactBenefit3: "Praktilised variandid teostuseks", contactBenefit4: "Kokkulepitud tööprotsess ilma tarbetu segaduseta", contactBenefit5: "Puhta ja valmis lõpptulemuse",
    b2bTitle: "Koostöö ettevõtete ja alltöövõtjatega",
    b2bText: "AKTIIV24 saab teha eraldi ehitus- ja remondietappe ettevõtetele, alltöövõtjatele ja kinnisvaraomanikele. Saame liituda projektiga kindla töömahu tegijana või lisajõuna objektil.",
    b2b1: "siseremonditööd;", b2b2: "lammutus, kipsplaat ja karkassid;", b2b3: "põrandad, värvimine, saunad ja fassaadid;", b2b4: "tunnitöö või kokkulepitud maht.",
    workEyebrow: "Meeskond", workTitle: "Töö ja koostöö", workLead: "Kui teil on kogemust, tööriistad, vastutustunne ja soov teha kvaliteetset tööd, saatke meile oma andmed.",
    labelName: "Nimi", labelPhone: "Telefon", labelCity: "Linn", labelExperience: "Kogemus ja oskused", sendRequest: "Saada avaldus",
    reviewsEyebrow: "Arvustused", reviewsTitle: "Klientide arvustused", reviewsLead: "Klientide kogemused koostööst, töö selgusest ja lõpptulemusest.",
    review1Text: "Töö edenes kokkulepitult ja suhtlus oli algusest lõpuni selge. Eriti hindasime seda, et meie oma idee arutati enne teostust rahulikult läbi.", review1Author: "Klient, Uusimaa",
    review2Text: "Lõpptulemus oli puhas ja praktiline. Töömaa hoiti korras ning võimalikest muudatustest anti õigel ajal teada.", review2Author: "Eramu omanik, Nurmijärvi",
    review3Text: "Vajasime tegijat, kes suudaks teha mitu väikest tööetappi ilma liigse segaduseta. Töö tehti rahulikult, puhtalt ja kokkulepitud viisil.", review3Author: "Remondiklient, Helsingi",
    areaEyebrow: "Teeninduspiirkond", areaTitle: "Ehitus- ja remonditööd Uusimaal",
    areaText1: "AKTIIV24 teenindab kliente Uusimaal ja vajadusel mujal Soomes. Tööpiirkondade hulka kuuluvad Helsingi, Espoo, Vantaa, Nurmijärvi, Tuusula, Kerava, Järvenpää ja lähialad.",
    areaText2: "Teeme siseremonte, põrandatöid, saunaremonti, värvimistöid, kipsplaadi- ja vaheseinatöid, uste ja akende paigaldust ning fassaadide parandus- ja ettevalmistustöid.",
    faqTitle: "Korduma kippuvad küsimused",
    faq1Q: "Kui kiiresti saab tööd alustada?", faq1A: "Algus sõltub töö mahust, asukohast ja ajakavast. Väikseid töid saab sageli paindlikult kokku leppida.",
    faq2Q: "Kas teete väikseid parandustöid?", faq2A: "Jah. Teeme nii väikseid parandus- ja viimistlustöid kui ka suuremaid remondikokonaisuusi.",
    faq3Q: "Kas saan küsida hinnangut fotode põhjal?", faq3A: "Jah. Saatke fotod, objekti asukoht ja lühike kirjeldus vajalikust tööst.",
    faq4Q: "Kas töötate ainult Uusimaal?", faq4A: "Meie peamine tööpiirkond on Uusimaa: Helsingi, Espoo, Vantaa, Nurmijärvi, Tuusula, Kerava, Järvenpää ja lähialad. Sõltuvalt tööst saame kokku leppida objekte ka mujal Soomes.",
    faq5Q: "Kas töötate ettevõtete ja alltöövõtjatega?", faq5A: "Jah. Teenindame erakliente, korteriühistuid, ettevõtteid ja alltöövõtjaid.",
    quoteEyebrow: "Hinnapäring", quoteTitle: "Millist infot vajame pakkumise jaoks?",
    quoteText: "Kiire hinnangu jaoks saatke meile objekti aadress või linn, lühike kirjeldus vajalikust tööst, mõned fotod praegusest olukorrast, soovitud ajakava ning info, kas materjalid on juba ostetud või vajate abi nende valikul.",
    quoteCtaText: "Rääkige meile oma ideest. Vastame võimalikult selgelt ja aitame hinnata, kuidas töö tasub teostada.",
    contactsEyebrow: "Kontakt", contactsTitle: "Võta ühendust AKTIIV24-ga",
    contactsLead: "Kirjeldage tööd, lisage objektist fotod ja märkige soovitud ajakava. AKTIIV24 näitab avalikult kontakt- ja registriandmeid, et kliendil oleks selge, kellega ta suhtleb.",
    directCall: "Võite ka otse helistada: 041 749 1334",
    contactPhone: "Telefon:", contactCompany: "Ettevõte:", footerArea: "Teeninduspiirkond: Uusimaa ja muu Soome kokkuleppel", contactLanguages: "Suhtluskeeled:",
    labelEmail: "Email", labelContactLanguage: "Sobiv suhtluskeel", chooseLanguage: "Valige keel",
    labelCityLocation: "Linn / objekti asukoht", labelTask: "Millist tööd vajate?", labelDate: "Soovitud ajakava",
    labelPhotos: "Kas teil on objektist fotosid?", photosYes: "Jah", photosNo: "Veel mitte", labelMore: "Lisainfo",
    photoHint: "Kui vorm ei tööta, saate saata sõnumi otse e-postiga:", sendEmail: "Saada hinnapäring",
    formSending: "Saatmine...", formSuccess: "Aitäh ühendust võtmast. Teie sõnum on saadetud ja vastame esimesel võimalusel.", formError: "Sõnumi saatmine ei õnnestunud. Võite helistada numbril 041 749 1334 või saata e-kirja aadressile aktiiv24@gmail.com.", formMissingKey: "Veebivorm ei ole veel aktiivne. Palun kasutage allolevat e-posti linki.", formMissingTask: "Palun kirjeldage, millist tööd vajate.",
    privacyEyebrow: "Privaatsus", privacyTitle: "Privaatsus",
    privacyText: "Vormi kaudu saadetud andmeid kasutatakse ainult ühenduse võtmiseks ja hinnapäringu käsitlemiseks. Andmeid ei edastata kolmandatele osapooltele ilma eraldi põhjuseta või kliendi loata.",
    footerText: "Ehitus- ja remonditööd Soomes", footerPhoneLabel: "Telefon:", footerEmailLabel: "Email:", footerBusinessLabel: "Y-tunnus:", footerRights: "© 2026 AKTIIV24. Kõik õigused kaitstud.",
    mailtoMessage: "E-posti rakendus avaneb. Kontrollige andmed ja lisage fotod enne saatmist.",
    formThanks: "Aitäh! Palun võtke meiega ühendust telefonil 041 749 1334 või e-postil aktiiv24@gmail.com."
  },
  ru: {
    pageTitle: "AKTIIV24 - строительные и ремонтные работы в Финляндии",
    metaDescription: "AKTIIV24 выполняет строительные и ремонтные работы в Финляндии и Уусимаа: внутренние ремонты, сауны, полы, гипсокартон, покраска, демонтаж и фасады.",
    ogDescription: "Строительные и ремонтные работы для частных клиентов, жилищных товариществ, компаний и подрядчиков. Работаем в Уусимаа и других регионах Финляндии.",
    navServices: "Услуги", navPortfolio: "Портфолио", navAbout: "О нас", navWork: "Работа", navContacts: "Контакты",
    ctaRequest: "Оставить заявку", ctaPortfolio: "Посмотреть услуги",
    heroEyebrow: "Идея клиента · понятный план · аккуратное выполнение",
    heroTitle: "AKTIIV24 - строительные и ремонтные работы в Финляндии",
    heroLead: "Строительные и ремонтные работы для частных клиентов, жилищных товариществ, компаний и подрядчиков. Понятный процесс, аккуратное выполнение и готовый результат в согласованные сроки.",
    statExperienceNumber: "25+ лет", statExperience: "опыта", statFinland: "Работы в Уусимаа и по договорённости в других регионах Финляндии", statToolsNumber: "100% свои", statTools: "инструменты", statClients: "частные клиенты и компании",
    heroPromise: "Идею выслушиваем. Работу планируем. Результат делаем как следует.",
    heroSublead: "Помогаем превратить идею ремонта или строительства в понятный план и готовую работу - спокойно, честно и по договорённости.",
    strongIntro: "AKTIIV24 выполняет строительные и ремонтные работы с понятным подходом: согласованные задачи, аккуратное выполнение и готовый результат без лишней суеты. Мы работаем с частными клиентами, жилищными товариществами, компаниями и подрядчиками в разных регионах Финляндии.",
    listenEyebrow: "Идея клиента", listenTitle: "Сначала слушаем, потом строим",
    listenText1: "У каждого клиента есть своё представление о том, как должен выглядеть результат и как должно работать пространство. Для нас хорошая работа начинается с понимания потребности клиента, состояния объекта и цели работ.",
    listenText2: "Мы не навязываем готовое решение силой. Мы обсуждаем идею, предлагаем практичные варианты и выполняем работу согласованным способом.",
    trustEyebrow: "Доверие", trustTitle: "Почему выбирают AKTIIV24?",
    trust1: "Слушаем идею клиента",
    trust2: "Предлагаем практичные решения",
    trust3: "Уважаем дом и рабочий объект",
    trust4: "Договариваемся понятно",
    trust5: "Доводим работу до конца",
    trust1Desc: "Сначала разбираем, чего клиент хочет добиться и что на объекте самое важное.",
    trust2Desc: "Открыто объясняем, какое решение разумно, долговечно и реалистично по затратам.",
    trust3Desc: "Работа выполняется чисто, организованно и с уважением к ценности объекта.",
    trust4Desc: "Содержание работ, сроки и следующие этапы обсуждаются до начала выполнения.",
    trust5Desc: "Цель - готовый, рабочий и аккуратный результат.",
    aboutEyebrow: "О компании", aboutTitle: "Строительная компания с практическим подходом",
    aboutP1: "AKTIIV24 выполняет строительные и ремонтные работы для частных клиентов, жилищных товариществ, компаний и подрядчиков. Мы работаем с внутренними помещениями, фасадами, саунами, полами, стенами, дверями, окнами и другими строительными задачами.",
    aboutP2: "Наш подход простой: сначала мы понимаем задачу, затем предлагаем рабочее решение, аккуратно выполняем работу и доводим объект до готового результата.",
    aboutP3: "Мы ценим порядок, понятные договорённости и уважение к объекту клиента. Хороший ремонт для нас означает и качественный результат, и спокойный рабочий процесс.",
    serviceArea: "Работаем в Уусимаа и при необходимости в других регионах Финляндии: Хельсинки, Эспоо, Вантаа, Нурмиярви, Туусула, Керава, Ярвенпяя и ближайшие районы.",
    servicesEyebrow: "Услуги", servicesTitle: "Наши услуги",
    servicesLead: "Мы выполняем понятные строительные и ремонтные работы: внутренние ремонты, укладку полов, ремонт саун, покраску, гипсокартонные и перегородочные работы, демонтаж, фасадные работы, установку дверей и окон.",
    serviceInteriorTitle: "Внутренние ремонты", serviceInteriorText: "Внутренний ремонт квартир, домов и коммерческих помещений: стены, потолки, полы, покраска и шпаклёвка, гипсокартонные работы и перегородки.",
    serviceFloorTitle: "Полы", serviceFloorText: "Укладка пола выполняется с учётом основания, материала и назначения помещения. Укладываем ламинат, паркет и винил, завершаем работу плинтусами.",
    serviceSaunaTitle: "Сауны и подготовка влажных помещений", serviceSaunaText: "Ремонт саун и подготовительные работы выполняются аккуратно, чтобы помещение было удобным, чистым и долговечным.",
    servicePrepTitle: "Двери и окна", servicePrepText: "Установка дверей и окон, коробки, наличники и отделка подбираются под конструкцию объекта и желаемый результат.",
    serviceFacadeTitle: "Фасады и наружные работы", serviceFacadeText: "Фасадные работы, наружная обшивка, покраска, демонтаж и подготовка выполняются в согласованном объёме.",
    serviceDemoTitle: "Демонтаж и подготовка", serviceDemoText: "Демонтаж выполняется контролируемо: защита, уборка и подготовка материалов помогают следующим этапам идти чисто и спокойно.",
    serviceInteriorItem1: "стены, потолки, полы", serviceInteriorItem2: "покраска и шпаклёвка", serviceInteriorItem3: "гипсокартон и перегородки",
    serviceFloorItem1: "ламинат", serviceFloorItem2: "паркет", serviceFloorItem3: "винил", serviceFloorItem4: "подложки и плинтусы",
    serviceSaunaItem1: "ремонт саун", serviceSaunaItem2: "панели и полки", serviceSaunaItem3: "подготовка перед гидроизоляцией и плиткой",
    servicePrepItem1: "установка дверей", servicePrepItem2: "замена окон", servicePrepItem3: "коробки, наличники и отделка",
    serviceFacadeItem1: "наружная обшивка", serviceFacadeItem2: "покраска", serviceFacadeItem3: "демонтаж и подготовка",
    serviceDemoItem1: "демонтаж", serviceDemoItem2: "защита", serviceDemoItem3: "уборка", serviceDemoItem4: "подготовка материалов",
    ctaEstimate: "Запросить оценку работы",
    ideaEyebrow: "От идеи к реализации", ideaTitle: "От идеи к готовой работе",
    ideaText1: "Вам не нужно иметь готовый план до обращения. Достаточно рассказать, что вы хотите изменить, исправить или построить.",
    ideaText2: "Мы поможем понять, что работа требует на практике, в каком порядке её лучше выполнять и какое решение подходит объекту.",
    whyEyebrow: "Почему AKTIIV24", whyTitle: "Понятная работа без лишних обещаний",
    why1Title: "Порядок на объекте", why1Text: "Работа организуется так, чтобы следующий этап не начинался с исправления беспорядка.",
    why2Title: "Чёткие договорённости", why2Text: "Формат, сроки, объём и материалы обсуждаются до начала работы.",
    why3Title: "Практический опыт", why3Text: "Работаем с разными задачами: от отдельного этапа до комплексного ремонта.",
    why4Title: "Для частных и B2B", why4Text: "Можем подключаться к объекту как исполнитель или дополнительный ресурс.",
    portfolioEyebrow: "Портфолио", portfolioTitle: "Примеры направлений работ",
    portfolioLead: "Изображения являются реалистичными иллюстрациями направлений услуг AKTIIV24 и стиля готового результата. Реальные фотографии объектов добавляются только с разрешения клиентов.",
    portfolioReal: "Фото объектов с разрешения клиента", portfolioVisual: "Сейчас используются иллюстрации", portfolioRealNote: "Сейчас в портфолио используются иллюстративные изображения. Они помогают понять услуги, материалы и желаемый уровень результата.",
    filterAll: "Все", filterInterior: "Интерьер", filterSauna: "Сауны", filterFloor: "Полы", filterFacade: "Фасады",
    portfolio1: "Ремонт квартиры", portfolio2: "Обновление сауны", portfolio3: "Укладка пола", portfolio4: "Покраска стен", portfolio5: "Фасад дома", portfolio6: "Влажное помещение",
    portfolio1Desc: "Более понятное, чистое и удобное пространство для повседневной жизни.", portfolio2Desc: "Тёплое, спокойное и аккуратно завершённое решение.", portfolio3Desc: "Ровное основание, подходящий материал и законченный результат.", portfolio4Desc: "Более свежий вид и аккуратная поверхность без лишнего беспорядка.", portfolio5Desc: "Обновление наружной поверхности, которое улучшает внешний вид и срок службы.", portfolio6Desc: "Тщательно подготовленное помещение для следующих этапов работ.",
    portfolio1Point1: "отделка стен и поверхностей", portfolio1Point2: "удобное пространство для жизни",
    portfolio2Point1: "панели и полки сауны", portfolio2Point2: "аккуратная и долговечная отделка",
    portfolio3Point1: "ламинат, паркет или винил", portfolio3Point2: "плинтусы и финальная отделка",
    portfolio4Point1: "защита и подготовка", portfolio4Point2: "ровная окрашенная поверхность",
    portfolio5Point1: "наружная обшивка и покраска", portfolio5Point2: "согласованный объём и чистый объект",
    portfolio6Point1: "подготовка перед плиткой", portfolio6Point2: "понятные этапы работы",
    processEyebrow: "Процесс", processTitle: "Как проходит работа",
    process1Title: "Связь", process1Text: "Отправьте краткое описание работы, фотографии объекта и желаемые сроки.",
    process2Title: "Оценка", process2Text: "Мы разбираем задачу и при необходимости согласуем осмотр объекта.",
    process3Title: "Предложение", process3Text: "Вы получаете понятную оценку содержания работ, сроков и стоимости.",
    process4Title: "Выполнение", process4Text: "Работа выполняется по согласованному плану, аккуратно и практично.",
    process5Title: "Готовый результат", process5Text: "Мы проверяем результат и убеждаемся, что согласованная работа выполнена.",
    contactBenefitsEyebrow: "После обращения", contactBenefitsTitle: "Что вы получите, когда свяжетесь с нами?",
    contactBenefit1: "Понятное обсуждение работы и цели", contactBenefit2: "Честную оценку того, что стоит делать", contactBenefit3: "Практичные варианты реализации", contactBenefit4: "Согласованный процесс без лишней неясности", contactBenefit5: "Чистый и готовый результат",
    b2bTitle: "Сотрудничество с компаниями и подрядчиками",
    b2bText: "AKTIIV24 готова выполнять отдельные этапы строительных и ремонтных работ для компаний, подрядчиков и владельцев объектов. Мы можем подключаться к проекту как исполнитель на конкретный объём работ или как дополнительный ресурс на объекте.",
    b2b1: "внутренние ремонтные работы;", b2b2: "демонтаж, гипсокартон, каркасы;", b2b3: "полы, покраска, сауны и фасады;", b2b4: "почасовая работа или согласованный объём.",
    workEyebrow: "Команда", workTitle: "Работа и сотрудничество", workLead: "Если у вас есть опыт, инструменты, ответственность и желание работать качественно, отправьте информацию о себе.",
    labelName: "Имя", labelPhone: "Телефон", labelCity: "Город", labelExperience: "Опыт и навыки", sendRequest: "Отправить анкету",
    reviewsEyebrow: "Отзывы", reviewsTitle: "Отзывы клиентов", reviewsLead: "Опыт клиентов о сотрудничестве, понятной работе и готовом результате.",
    review1Text: "Работа продвигалась по договорённости, а связь была понятной от начала до конца. Особенно мы оценили, что нашу идею спокойно обсудили перед выполнением.", review1Author: "Клиент, Уусимаа",
    review2Text: "Результат получился аккуратным и практичным. Рабочее место держали в порядке, а о возможных изменениях сообщали заранее.", review2Author: "Владелец частного дома, Нурмиярви",
    review3Text: "Нам нужен был исполнитель, который сможет выполнить несколько небольших этапов без лишней суеты. Работа была сделана спокойно, аккуратно и по договорённости.", review3Author: "Клиент по ремонту, Хельсинки",
    areaEyebrow: "Регион работы", areaTitle: "Строительные и ремонтные работы в Уусимаа",
    areaText1: "AKTIIV24 обслуживает клиентов в Уусимаа и при необходимости в других регионах Финляндии. В рабочую зону входят Хельсинки, Эспоо, Вантаа, Нурмиярви, Туусула, Керава, Ярвенпяя и ближайшие районы.",
    areaText2: "Мы выполняем внутренние ремонты, работы с полами, ремонт саун, покраску, гипсокартонные и перегородочные работы, установку дверей и окон, а также ремонт и подготовку фасадов.",
    faqTitle: "Частые вопросы",
    faq1Q: "Как быстро можно начать работу?", faq1A: "Начало зависит от объёма, расположения и графика. Небольшие работы часто можно согласовать гибко.",
    faq2Q: "Вы делаете мелкие ремонтные работы?", faq2A: "Да. Мы выполняем как небольшие ремонтные и отделочные работы, так и более крупные ремонтные проекты.",
    faq3Q: "Можно ли попросить оценку по фотографиям?", faq3A: "Да. Отправьте фотографии, расположение объекта и краткое описание нужной работы.",
    faq4Q: "Вы работаете только в Уусимаа?", faq4A: "Основная рабочая зона - Уусимаа: Хельсинки, Эспоо, Вантаа, Нурмиярви, Туусула, Керава, Ярвенпяя и ближайшие районы. В зависимости от работы можем договориться об объектах и в других регионах Финляндии.",
    faq5Q: "Вы работаете с компаниями и подрядчиками?", faq5A: "Да. Мы работаем с частными клиентами, жилищными товариществами, компаниями и подрядчиками.",
    quoteEyebrow: "Запрос предложения", quoteTitle: "Какая информация нужна для оценки?",
    quoteText: "Для быстрой оценки отправьте адрес объекта или город, краткое описание нужных работ, несколько фотографий текущего состояния, желаемые сроки и информацию о том, куплены ли материалы или нужна помощь с их выбором.",
    quoteCtaText: "Расскажите нам свою идею. Мы ответим максимально понятно и поможем оценить, как лучше выполнить работу.",
    contactsEyebrow: "Контакты", contactsTitle: "Связаться с AKTIIV24",
    contactsLead: "Опишите задачу, приложите фотографии объекта и укажите желаемые сроки. AKTIIV24 открыто указывает контактные и регистрационные данные, чтобы клиенту было понятно, с кем он связывается.",
    directCall: "Также можно позвонить напрямую: 041 749 1334",
    contactPhone: "Телефон:", contactCompany: "Компания:", footerArea: "Регион работы: Уусимаа и другая Финляндия по договорённости", contactLanguages: "Языки связи:",
    labelEmail: "Email", labelContactLanguage: "Удобный язык связи", chooseLanguage: "Выберите язык",
    labelCityLocation: "Город / расположение объекта", labelTask: "Какая работа нужна?", labelDate: "Желаемые сроки",
    labelPhotos: "Есть ли у вас фотографии объекта?", photosYes: "Да", photosNo: "Пока нет", labelMore: "Дополнительная информация",
    photoHint: "Если форма не работает, можно отправить сообщение напрямую на email:", sendEmail: "Отправить запрос",
    formSending: "Отправка...", formSuccess: "Спасибо за обращение. Ваше сообщение отправлено, и мы ответим как можно скорее.", formError: "Сообщение не удалось отправить. Вы можете позвонить напрямую по номеру 041 749 1334 или написать на aktiiv24@gmail.com.", formMissingKey: "Онлайн-форма пока не активна. Используйте ссылку email ниже.", formMissingTask: "Пожалуйста, опишите, какая работа нужна.",
    privacyEyebrow: "Конфиденциальность", privacyTitle: "Конфиденциальность",
    privacyText: "Данные, отправленные через форму, используются только для связи и обработки запроса предложения. Данные не передаются третьим лицам без отдельной причины или разрешения клиента.",
    footerText: "Строительные и ремонтные работы в Финляндии", footerPhoneLabel: "Телефон:", footerEmailLabel: "Email:", footerBusinessLabel: "Y-tunnus:", footerRights: "© 2026 AKTIIV24. Все права защищены.",
    mailtoMessage: "Откроется почтовая программа. Проверьте данные и приложите фотографии перед отправкой.",
    formThanks: "Спасибо! Пожалуйста, свяжитесь с нами по телефону 041 749 1334 или email aktiiv24@gmail.com."
  }
};

const validLanguages = ["fi", "en", "et", "ru"];
let currentLanguage = localStorage.getItem("aktiiv24-language") || "fi";
if (!validLanguages.includes(currentLanguage)) currentLanguage = "fi";

function applyLanguage(language) {
  const dictionary = translations[language] || translations.fi;
  document.documentElement.lang = language;
  document.title = dictionary.pageTitle || translations.fi.pageTitle;
  document.querySelector('meta[name="description"]')?.setAttribute("content", dictionary.metaDescription || translations.fi.metaDescription);
  document.querySelector('meta[property="og:title"]')?.setAttribute("content", dictionary.pageTitle || translations.fi.pageTitle);
  document.querySelector('meta[property="og:description"]')?.setAttribute("content", dictionary.ogDescription || dictionary.metaDescription || translations.fi.metaDescription);

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    const value = dictionary[key] || translations.fi[key] || fiDefaults[key];
    if (value) element.textContent = value;
  });

  languageButtons.forEach((button) => {
    const isActive = button.dataset.lang === language;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  currentLanguage = language;
  localStorage.setItem("aktiiv24-language", language);
}

menuToggle?.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", () => {
    nav?.classList.remove("open");
    menuToggle?.setAttribute("aria-expanded", "false");
  });
});

languageButtons.forEach((button) => {
  button.addEventListener("click", () => applyLanguage(button.dataset.lang));
});

document.querySelectorAll(".filters button").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filters button").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    const filter = button.dataset.filter;
    document.querySelectorAll(".portfolio-grid article").forEach((item) => {
      item.classList.toggle("is-hidden", filter !== "all" && item.dataset.category !== filter);
    });
  });
});

document.querySelectorAll(".demo-form").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const message = form.querySelector(".form-message");
    if (message) {
      message.textContent = translations[currentLanguage].formThanks || translations.fi.formThanks;
    }
    form.reset();
  });
});

document.querySelectorAll(".quote-form").forEach((form) => {
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const languageSelect = form.querySelector('select[name="contact-language"]');
    const languageText = languageSelect?.selectedOptions?.[0]?.textContent?.trim() || data.get("contact-language") || "";
    const task = String(data.get("task") || "").trim();
    const accessKey = String(data.get("access_key") || "").trim();
    const message = form.querySelector(".form-message");
    const submitButton = form.querySelector('button[type="submit"]');
    const originalButtonText = submitButton?.textContent || "";
    const getMessage = (key) => translations[currentLanguage][key] || translations.fi[key] || "";
    const setMessage = (key, type = "error") => {
      if (!message) return;
      message.textContent = getMessage(key);
      message.classList.toggle("is-success", type === "success");
      message.classList.toggle("is-error", type !== "success");
    };

    if (String(data.get("botcheck") || "").trim()) {
      return;
    }

    if (!task) {
      setMessage("formMissingTask");
      return;
    }

    const fallbackBody = [
      `Nimi: ${data.get("client-name") || ""}`,
      `Puhelin: ${data.get("client-phone") || ""}`,
      `Sähköposti: ${data.get("client-email") || ""}`,
      `Sopiva yhteydenottokieli: ${languageText}`,
      `Kaupunki / kohteen sijainti: ${data.get("city-location") || ""}`,
      `Minkälaista työtä tarvitset?: ${data.get("task") || ""}`,
      `Toivottu aikataulu: ${data.get("date") || ""}`,
      `Onko sinulla kuvia kohteesta?: ${data.get("photos") || ""}`,
      `Lisätiedot: ${data.get("more") || ""}`
    ].join("\n");

    const fallbackLink = `mailto:aktiiv24@gmail.com?subject=${encodeURIComponent("Tarjouspyyntö AKTIIV24-sivustolta")}&body=${encodeURIComponent(fallbackBody)}`;
    const fallbackAnchor = form.querySelector('.form-hint a[href^="mailto:"]');
    if (fallbackAnchor) {
      fallbackAnchor.href = fallbackLink;
    }

    if (!accessKey || accessKey === "PASTE_WEB3FORMS_ACCESS_KEY_HERE") {
      setMessage("formMissingKey");
      return;
    }

    data.set("Sopiva yhteydenottokieli", languageText);
    data.set("Nimi", data.get("client-name") || "");
    data.set("Puhelin", data.get("client-phone") || "");
    data.set("Sähköposti", data.get("client-email") || "");
    data.set("Kaupunki / kohteen sijainti", data.get("city-location") || "");
    data.set("Minkälaista työtä tarvitset?", task);
    data.set("Toivottu aikataulu", data.get("date") || "");
    data.set("Onko sinulla kuvia kohteesta?", data.get("photos") || "");
    data.set("Lisätiedot", data.get("more") || "");

    try {
      if (submitButton) {
        submitButton.disabled = true;
        submitButton.textContent = getMessage("formSending");
      }
      setMessage("formSending", "success");
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data
      });
      const result = await response.json();
      if (!response.ok || !result.success) {
        throw new Error(result.message || "Form submission failed");
      }
      form.reset();
      setMessage("formSuccess", "success");
    } catch (error) {
      setMessage("formError");
    } finally {
      if (submitButton) {
        submitButton.disabled = false;
        submitButton.textContent = originalButtonText;
      }
    }
  });
});

window.addEventListener("scroll", () => {
  toTop?.classList.toggle("visible", window.scrollY > 600);
});

toTop?.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

function startHeroSlideshow() {
  if (heroSlides.length < 2 || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  let activeSlide = 0;
  window.setInterval(() => {
    heroSlides[activeSlide].classList.remove("is-active");
    heroDots[activeSlide]?.classList.remove("is-active");
    activeSlide = (activeSlide + 1) % heroSlides.length;
    heroSlides[activeSlide].classList.add("is-active");
    heroDots[activeSlide]?.classList.add("is-active");
  }, 5200);
}

startHeroSlideshow();
applyLanguage(currentLanguage);
