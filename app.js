const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
const toTop = document.querySelector(".to-top");
const languageButtons = document.querySelectorAll(".lang button");

const fiDefaults = {};
document.querySelectorAll("[data-i18n]").forEach((element) => {
  fiDefaults[element.dataset.i18n] = element.textContent;
});

const translations = {
  fi: {
    ...fiDefaults,
    pageTitle: "AKTIIV24 - rakennus- ja remonttityГ¶t Suomessa",
    metaDescription: "AKTIIV24 tekee rakennus- ja remonttitГ¶itГ¤ Suomessa ja Uudellamaalla. SisГ¤remontit, saunaremontit, lattiat, kipsilevytyГ¶t, maalaus, purkutyГ¶t ja julkisivutyГ¶t.",
    ogDescription: "Rakennus- ja remonttityГ¶t yksityisasiakkaille, taloyhtiГ¶ille, yrityksille ja urakoitsijoille. Palvelemme Uudellamaalla ja muualla Suomessa.",
    sendEmail: "LГ¤hetГ¤ sГ¤hkГ¶postilla",
    mailtoMessage: "SГ¤hkГ¶postiohjelma avataan. Tarkista tiedot ja liitГ¤ kuvat mukaan ennen lГ¤hettГ¤mistГ¤.",
    formThanks: "Kiitos! Ota yhteyttГ¤ puhelimitse 041 749 1334 tai sГ¤hkГ¶postilla aktiiv24@gmail.com."
  },
  en: {
    pageTitle: "AKTIIV24 - construction and renovation work in Finland",
    metaDescription: "AKTIIV24 provides construction and renovation work in Finland and Uusimaa: interior renovations, sauna renovations, floors, drywall work, painting, demolition and facade work.",
    ogDescription: "Construction and renovation work for private clients, housing companies, businesses and contractors. We serve Uusimaa and other areas in Finland.",
    navServices: "Services", navPortfolio: "Portfolio", navAbout: "About", navWork: "Work", navContacts: "Contacts",
    ctaRequest: "Send request", ctaPortfolio: "View services",
    heroEyebrow: "Construction + order + result",
    heroTitle: "AKTIIV24 - construction and renovation work in Finland",
    heroLead: "Construction and renovation work for private clients, housing companies, businesses and contractors. A clear workflow, tidy execution and a finished result on the agreed schedule.",
    statExperienceNumber: "25+ years", statExperience: "experience", statFinland: "work across Finland", statToolsNumber: "100 % own", statTools: "tools", statClients: "private and business clients",
    strongIntro: "AKTIIV24 carries out construction and renovation work with a clear process: agreed work, tidy execution and a finished result without unnecessary hassle. We serve private clients, housing companies, businesses and contractors across Finland.",
    aboutEyebrow: "Company", aboutTitle: "A construction company with a practical approach",
    aboutP1: "AKTIIV24 carries out construction and renovation work for private clients, housing companies, businesses and contractors. We work with interiors, facades, saunas, floors, walls, doors, windows and other construction tasks.",
    aboutP2: "Our approach is simple: understand the task, suggest a clear solution, do the work carefully and bring the site to a finished result.",
    aboutP3: "We value order, clear agreements and respect for the clientвЂ™s property. For us, a good renovation means both a good result and a calm working process.",
    serviceArea: "We work in Uusimaa and, when needed, elsewhere in Finland: Helsinki, Espoo, Vantaa, NurmijГ¤rvi, Tuusula, Kerava, JГ¤rvenpГ¤Г¤ and nearby areas.",
    servicesEyebrow: "Services", servicesTitle: "Our services", servicesLead: "We provide a wide range of construction and renovation work, from demolition to final finishing.",
    serviceInteriorTitle: "Interior renovations", serviceInteriorText: "Interior renovation for apartments, houses and individual rooms: demolition, framing, drywall work, insulation, filling, painting work, floors and finishing.",
    serviceDemoTitle: "Demolition", serviceDemoText: "Demolition work for old surfaces, partitions, floors, ceilings, doors, skirting boards, tiles and other structures, done cleanly and in control.",
    serviceDrywallTitle: "Walls and drywall", serviceDrywallText: "Drywall work, installation of frames, partitions and boxes, strengthening openings and preparing walls for filling and painting.",
    servicePaintTitle: "Filling and painting", servicePaintText: "Painting work, surface filling, sanding, priming and finishing of walls and ceilings. A clean result starts with proper preparation.",
    serviceFloorTitle: "Floors", serviceFloorText: "Floor installation: laminate, vinyl, parquet, plywood, underlays, skirting boards and subfloor preparation according to the site requirements.",
    serviceSaunaTitle: "Saunas", serviceSaunaText: "Sauna renovation, sauna construction and renewal: panels, benches, ceilings, lighting, finishing and careful installation.",
    serviceFacadeTitle: "Facades and exterior work", serviceFacadeText: "Facade work, exterior cladding replacement, painting, wooden surface preparation and exterior finishing according to the agreed scope.",
    serviceWetTitle: "Bathrooms and wet rooms", serviceWetText: "Preparation and finishing work with attention to materials, substrates and use requirements. Specialist stages are handled by qualified professionals.",
    servicePrepTitle: "Doors, windows and preparation", servicePrepText: "Door and window installation, trims, skirting boards and small preparation work for the next construction stages.",
    whyEyebrow: "Why AKTIIV24", whyTitle: "Clear work without empty promises",
    why1Title: "Order on site", why1Text: "The work is organized so the next stage does not start by fixing disorder.",
    why2Title: "Clear agreements", why2Text: "Scope, schedule, work format and materials are discussed before work begins.",
    why3Title: "Practical experience", why3Text: "We handle many kinds of tasks, from a single stage to a complete renovation.",
    why4Title: "Private and B2B", why4Text: "We can join a project as the contractor or as an additional resource.",
    portfolioEyebrow: "Portfolio", portfolioTitle: "Examples of work areas",
    portfolioLead: "The images below illustrate service areas and the style of the finished result. Real project photos will be added with client permission.",
    filterAll: "All", filterInterior: "Interior", filterSauna: "Saunas", filterFloor: "Floors", filterFacade: "Facades",
    portfolio1: "Apartment renovation", portfolio2: "Sauna renewal", portfolio3: "Floor installation", portfolio4: "Wall painting", portfolio5: "House facade", portfolio6: "Wet room",
    processEyebrow: "Process", processTitle: "How the work proceeds",
    process1Title: "Contact", process1Text: "Send a short description of the work, photos of the site and your preferred schedule.",
    process2Title: "Assessment", process2Text: "We review the work and, if needed, agree on a site visit.",
    process3Title: "Quote", process3Text: "You receive a clear estimate of the work content, schedule and cost.",
    process4Title: "Execution", process4Text: "The work is done according to the agreed plan, tidily and practically.",
    process5Title: "Finished result", process5Text: "We review the final result and make sure the agreed work has been completed.",
    process6Title: "Completion", process6Text: "We check the result and hand over the site.",
    b2bTitle: "Cooperation with companies and contractors",
    b2bText: "AKTIIV24 can carry out individual construction and renovation stages for companies, contractors and property owners. We can join a project for a defined scope or as an additional resource on site.",
    b2b1: "interior renovation work;", b2b2: "demolition, drywall and framing;", b2b3: "floors, painting, saunas and facades;", b2b4: "hourly work or agreed scope.",
    workEyebrow: "Team", workTitle: "Work and cooperation", workLead: "If you have experience, tools, responsibility and the wish to do quality work, send us your details.",
    reviewsEyebrow: "Reviews", reviewsTitle: "Client reviews", reviewsLead: "Client feedback will be added to the website with client permission. You can ask for more information about earlier projects by contacting us.",
    faqTitle: "Frequently asked questions",
    faq1Q: "How quickly can the work start?", faq1A: "The start depends on the scope, location and schedule. Small jobs can often be arranged flexibly.",
    faq2Q: "Do you do small repair jobs?", faq2A: "Yes. We do both small repair and finishing jobs and larger renovation projects.",
    faq3Q: "Can I request an estimate based on photos?", faq3A: "Yes. Send photos, the site location and a short description of the needed work.",
    faq4Q: "Do you work only in Uusimaa?", faq4A: "The main work area is Uusimaa, but depending on the job we can also agree projects elsewhere in Finland.",
    faq5Q: "Do you work for companies and contractors?", faq5A: "Yes. We serve private clients, housing companies, businesses and contractors.",
    contactsEyebrow: "Contacts", contactsTitle: "Contact AKTIIV24",
    contactsLead: "Describe the work, attach photos of the site and tell us the preferred schedule. AKTIIV24 openly shows contact and registration details so clients know exactly who they are dealing with.",
    quoteEyebrow: "Quote request", quoteTitle: "What information do we need for a quote?", quoteText: "For a quick estimate, send us the site address or city, a short description of the needed work, a few photos of the current situation, your preferred schedule and whether the materials have already been purchased or you need help choosing them.",
    contactPhone: "Phone:", contactCompany: "Company:", contactRegion: "Region:", contactLanguages: "Contact languages:", finland: "Finland",
    labelName: "Name", labelPhone: "Phone", labelCity: "City", labelExperience: "Experience and skills", labelContactLanguage: "Preferred contact language",
    chooseLanguage: "Choose language", labelAddress: "Site address", labelTask: "What work is needed", labelDate: "Preferred schedule",
    sendRequest: "Send application", sendEmail: "Send by email", footerText: "Construction and renovation work in Finland", footerRights: "В© 2026 AKTIIV24. All rights reserved.",
    trustEyebrow: "Trust",
    trustTitle: "Why choose AKTIIV24?",
    trust1: "25+ years of practical construction and renovation experience",
    trust2: "Own tools and own transport",
    trust3: "Work for private clients, housing companies, businesses and contractors",
    trust4: "Clear communication and agreed workflow",
    trust5: "Ability to handle both small repairs and larger renovations",
    portfolioReal: "Completed projects",
    portfolioVisual: "Illustrative images",
    portfolioRealNote: "Real project photos will be added with client permission.",
    areaEyebrow: "Service area",
    areaTitle: "Construction and renovation work in Uusimaa",
    areaText1: "AKTIIV24 serves clients in Uusimaa and, when needed, elsewhere in Finland. Work areas include Helsinki, Espoo, Vantaa, Nurmijärvi, Tuusula, Kerava, Järvenpää and nearby areas.",
    areaText2: "We do interior renovations, floor work, sauna renovations, painting work, drywall and partition work, door and window installation, and facade repair and preparation work.",
    footerArea: "Service area: Uusimaa and other Finland by agreement",
    labelEmail: "Email",
    labelCityLocation: "City / site location",
    labelPhotos: "Do you have photos of the site?",
    photosYes: "Yes",
    photosNo: "Not yet",
    labelMore: "Additional information",
    photoHint: "You can also send photos directly by email: aktiiv24@gmail.com",
    privacyEyebrow: "Privacy",
    privacyTitle: "Privacy",
    privacyText: "Information sent through the form is used only for contacting you and processing the quote request. Information is not shared with third parties without a separate reason or the client?s permission.",
    footerPhoneLabel: "Phone:",
    footerEmailLabel: "Email:",
    footerBusinessLabel: "Business ID:",
    mailtoMessage: "Your email app is opening. Check the details and attach photos before sending.",
    formThanks: "Thank you! Please contact us by phone at 041 749 1334 or by email at aktiiv24@gmail.com."
  },
  et: {
    pageTitle: "AKTIIV24 - ehitus- ja remonditГ¶Г¶d Soomes",
    metaDescription: "AKTIIV24 teeb ehitus- ja remonditГ¶id Soomes ja Uusimaal: siseremont, saunaremont, pГµrandad, kipsplaaditГ¶Г¶d, vГ¤rvimine, lammutustГ¶Г¶d ja fassaaditГ¶Г¶d.",
    ogDescription: "Ehitus- ja remonditГ¶Г¶d eraklientidele, korteriГјhistutele, ettevГµtetele ja alltГ¶Г¶vГµtjatele. Teenindame Uusimaal ja mujal Soomes.",
    navServices: "Teenused", navPortfolio: "Portfoolio", navAbout: "Meist", navWork: "TГ¶Г¶", navContacts: "Kontakt",
    ctaRequest: "Saada pГ¤ring", ctaPortfolio: "Vaata teenuseid",
    heroEyebrow: "Ehitus + kord + tulemus",
    heroTitle: "AKTIIV24 - ehitus- ja remonditГ¶Г¶d Soomes",
    heroLead: "Ehitus- ja remonditГ¶Г¶d eraklientidele, korteriГјhistutele, ettevГµtetele ja alltГ¶Г¶vГµtjatele. Selge tГ¶Г¶protsess, puhas teostus ja valmis tulemus kokkulepitud ajakavas.",
    statExperienceNumber: "25+ aastat", statExperience: "kogemust", statFinland: "tГ¶Г¶d Soomes", statToolsNumber: "100 % oma", statTools: "tГ¶Г¶riistad", statClients: "erakliendid ja ettevГµtted",
    strongIntro: "AKTIIV24 teeb ehitus- ja remonditГ¶id selge tГ¶Г¶viisiga: kokkulepitud tГ¶Г¶d, puhas teostus ja valmis tulemus ilma tarbetu segaduseta. Teenindame erakliente, korteriГјhistuid, ettevГµtteid ja alltГ¶Г¶vГµtjaid eri piirkondades Soomes.",
    aboutEyebrow: "EttevГµte", aboutTitle: "Praktilise lГ¤henemisega ehitusettevГµte",
    aboutP1: "AKTIIV24 teeb ehitus- ja remonditГ¶id eraklientidele, korteriГјhistutele, ettevГµtetele ja alltГ¶Г¶vГµtjatele. TГ¶Г¶tame siseruumide, fassaadide, saunade, pГµrandate, seinte, uste, akende ja muude ehitusГјlesannetega.",
    aboutP2: "Meie tГ¶Г¶viis on selge: kГµigepealt mГµistame Гјlesannet, seejГ¤rel pakume toimiva lahenduse, teeme tГ¶Г¶ korralikult ja viime objekti valmis tulemuseni.",
    aboutP3: "Hindame korda, selgeid kokkuleppeid ja kliendi objekti austamist. Hea remont tГ¤hendab meie jaoks nii head tulemust kui ka rahulikku tГ¶Г¶protsessi.",
    serviceArea: "TГ¶Г¶tame Uusimaal ja vajadusel mujal Soomes: Helsingi, Espoo, Vantaa, NurmijГ¤rvi, Tuusula, Kerava, JГ¤rvenpГ¤Г¤ ja lГ¤hialad.",
    servicesEyebrow: "Teenused", servicesTitle: "Meie teenused", servicesLead: "Teeme laia valikut ehitus- ja remonditГ¶id lammutusest lГµppviimistluseni.",
    serviceInteriorTitle: "Siseremondid", serviceInteriorText: "Siseremont korterites, majades ja Гјksikutes ruumides: lammutus, karkassid, kipsplaaditГ¶Г¶d, soojustus, pahteldus, vГ¤rvimistГ¶Г¶d, pГµrandad ja viimistlus.",
    serviceDemoTitle: "Lammutus", serviceDemoText: "LammutustГ¶Г¶d vanadele pindadele, vaheseintele, pГµrandatele, lagedele, ustele, liistudele, plaatidele ja muudele konstruktsioonidele puhtalt ja kontrollitult.",
    serviceDrywallTitle: "Seinad ja kipsplaat", serviceDrywallText: "KipsplaaditГ¶Г¶d, karkasside, vaheseinte ja kastide paigaldus, avade tugevdamine ning seinte ettevalmistus pahtelduseks ja vГ¤rvimiseks.",
    servicePaintTitle: "Pahteldus ja vГ¤rvimine", servicePaintText: "VГ¤rvimistГ¶Г¶d, pindade pahteldus, lihvimine, kruntimine ning seinte ja lagede viimistlus. Puhas tulemus algab Гµigest eeltГ¶Г¶st.",
    serviceFloorTitle: "PГµrandad", serviceFloorText: "PГµranda paigaldus: laminaat, vinГјГјl, parkett, vineer, alusmaterjalid, liistud ja aluspinna ettevalmistus vastavalt objekti vajadustele.",
    serviceSaunaTitle: "Saunad", serviceSaunaText: "Saunaremont, saunade ehitus ja uuendamine: paneelid, lavad, laed, valgustus, viimistlus ja hoolikas paigaldus.",
    serviceFacadeTitle: "Fassaadid ja vГ¤listГ¶Г¶d", serviceFacadeText: "FassaaditГ¶Г¶d, vГ¤lisvoodri vahetus, vГ¤rvimine, puitpindade ettevalmistus ja majade vГ¤lisviimistlus kokkulepitud mahus.",
    serviceWetTitle: "Vannitoad ja mГ¤rgruumid", serviceWetText: "Ettevalmistus- ja viimistlustГ¶Г¶d, arvestades materjalide, aluspindade ja kasutuse nГµudeid. Erialased etapid teeb vastav spetsialist.",
    servicePrepTitle: "Uksed, aknad ja ettevalmistus", servicePrepText: "Uste ja akende paigaldus, piirdeliistud, pГµrandaliistud ning vГ¤iksemad ettevalmistustГ¶Г¶d jГ¤rgmisteks ehitusetappideks.",
    whyEyebrow: "Miks AKTIIV24", whyTitle: "Selge tГ¶Г¶ ilma tГјhjade lubadusteta",
    why1Title: "Kord objektil", why1Text: "TГ¶Г¶ korraldatakse nii, et jГ¤rgmine etapp ei algaks segaduse parandamisega.",
    why2Title: "Selged kokkulepped", why2Text: "TГ¶Г¶vorm, ajakava, maht ja materjalid arutatakse lГ¤bi enne tГ¶Г¶ algust.",
    why3Title: "Praktiline kogemus", why3Text: "TГ¶Г¶tame erinevate Гјlesannetega alates Гјhest etapist kuni tervikliku remondini.",
    why4Title: "Eraklientidele ja B2B", why4Text: "Saame liituda objektiga tegijana vГµi lisajГµuna.",
    portfolioEyebrow: "Portfoolio", portfolioTitle: "NГ¤ited tГ¶Г¶valdkondadest",
    portfolioLead: "Allolevad pildid illustreerivad teenusvaldkondi ja valmis tГ¶Г¶ stiili. Tegelike objektide fotod lisatakse klientide loal.",
    filterAll: "KГµik", filterInterior: "Siseruumid", filterSauna: "Saunad", filterFloor: "PГµrandad", filterFacade: "Fassaadid",
    portfolio1: "Korteri remont", portfolio2: "Sauna uuendus", portfolio3: "PГµranda paigaldus", portfolio4: "Seinte vГ¤rvimine", portfolio5: "Maja fassaad", portfolio6: "MГ¤rgruum",
    processEyebrow: "Protsess", processTitle: "Nii tГ¶Г¶ edeneb",
    process1Title: "Kontakt", process1Text: "Saatke lГјhike tГ¶Г¶ kirjeldus, objekti fotod ja soovitud ajakava.",
    process2Title: "Hindamine", process2Text: "Vaatame tГ¶Г¶ lГ¤bi ja vajadusel lepime kokku objekti kГјlastuse.",
    process3Title: "Pakkumine", process3Text: "Saate selge hinnangu tГ¶Г¶ sisule, ajakavale ja kuludele.",
    process4Title: "Teostus", process4Text: "TГ¶Г¶ tehakse kokkulepitud plaani jГ¤rgi, puhtalt ja praktiliselt.",
    process5Title: "Valmis tulemus", process5Text: "Vaatame tulemuse Гјle ja veendume, et kokkulepitud tГ¶Г¶ on tehtud.",
    process6Title: "Гњleandmine", process6Text: "Kontrollime tulemuse ja anname objekti Гјle.",
    b2bTitle: "KoostГ¶Г¶ ettevГµtete ja alltГ¶Г¶vГµtjatega",
    b2bText: "AKTIIV24 saab teha eraldi ehitus- ja remondietappe ettevГµtetele, alltГ¶Г¶vГµtjatele ja kinnisvaraomanikele. Saame liituda projektiga kindla tГ¶Г¶mahu tegijana vГµi lisajГµuna objektil.",
    b2b1: "siseremonditГ¶Г¶d;", b2b2: "lammutus, kipsplaat ja karkassid;", b2b3: "pГµrandad, vГ¤rvimine, saunad ja fassaadid;", b2b4: "tunnitГ¶Г¶ vГµi kokkulepitud maht.",
    workEyebrow: "Meeskond", workTitle: "TГ¶Г¶ ja koostГ¶Г¶", workLead: "Kui teil on kogemust, tГ¶Г¶riistad, vastutustunne ja soov teha kvaliteetset tГ¶Г¶d, saatke meile oma andmed.",
    reviewsEyebrow: "Arvustused", reviewsTitle: "Klientide arvustused", reviewsLead: "Klientide tagasiside lisatakse veebilehele klientide loal. Varasemate tГ¶Г¶de kohta saate kГјsida lisainfot meiega Гјhendust vГµttes.",
    faqTitle: "Korduma kippuvad kГјsimused",
    faq1Q: "Kas teete ainult suuri objekte?", faq1A: "Ei. VГµime teha nii Гјksiku tГ¶Г¶etapi kui ka suurema remondi. KГµik sГµltub Гјlesandest, ajakavast ja saadavusest.",
    faq2Q: "Kas saab saata fotod esialgse hinnangu jaoks?", faq2A: "Jah. Fotod aitavad tГ¶Г¶mahtu kiiremini mГµista ja esialgse vastuse anda.",
    faq3Q: "Kas tГ¶Г¶tate ettevГµtetega?", faq3A: "Jah. TГ¶Г¶tame eraklientide, ettevГµtete, alltГ¶Г¶vГµtjate ja kinnisvaraomanikega.",
    faq4Q: "Kas saab tellida ainult Гјhe tГ¶Г¶liigi?", faq4A: "Jah. VГµite tellida eraldi tГ¶Г¶: pГµrandad, vГ¤rvimine, lammutus, uksed, saun, fassaad vГµi muu konkreetne etapp.",
    faq5Q: "Kas ostate materjalid ise?", faq5A: "Materjalide ostmise viis lepitakse eraldi kokku. VГµimalusi on mitu sГµltuvalt objektist ja kokkuleppest.",
    faq6Q: "Millises piirkonnas te tГ¶Г¶tate?", faq6A: "Peamine tГ¶Г¶piirkond on Soome. Konkreetne objekt ja vГ¤ljasГµidu vГµimalus lepitakse eraldi kokku.",
    contactsEyebrow: "Kontakt", contactsTitle: "VГµta Гјhendust AKTIIV24-ga",
    contactsLead: "Kirjeldage tГ¶Г¶d, lisage objektist fotod ja mГ¤rkige soovitud ajakava. AKTIIV24 nГ¤itab avalikult kontakt- ja registriandmeid, et kliendil oleks selge, kellega ta suhtleb.",
    quoteEyebrow: "HinnapГ¤ring", quoteTitle: "Millist infot vajame pakkumise jaoks?", quoteText: "Kiire hinnangu jaoks saatke meile objekti aadress vГµi linn, lГјhike kirjeldus vajalikust tГ¶Г¶st, mГµned fotod praegusest olukorrast, soovitud ajakava ning info, kas materjalid on juba ostetud vГµi vajate abi nende valikul.",
    contactPhone: "Telefon:", contactCompany: "EttevГµte:", contactRegion: "Piirkond:", contactLanguages: "Suhtluskeeled:", finland: "Soome",
    labelName: "Nimi", labelPhone: "Telefon", labelCity: "Linn", labelExperience: "Kogemus ja oskused", labelContactLanguage: "Sobiv suhtluskeel",
    chooseLanguage: "Valige keel", labelAddress: "Objekti aadress", labelTask: "Milliseid tГ¶id on vaja", labelDate: "Soovitud ajakava",
    sendRequest: "Saada avaldus", sendEmail: "Saada e-postiga", footerText: "Ehitus- ja remonditГ¶Г¶d Soomes", footerRights: "В© 2026 AKTIIV24. KГµik Гµigused kaitstud.",
    trustEyebrow: "Usaldus",
    trustTitle: "Miks valida AKTIIV24?",
    trust1: "25+ aastat praktilist ehitus- ja remondikogemust",
    trust2: "Oma tööriistad ja oma transport",
    trust3: "Tööd eraklientidele, korteriühistutele, ettevõtetele ja alltöövõtjatele",
    trust4: "Selge suhtlus ja kokkulepitud tööprotsess",
    trust5: "Võimalus teha nii väikseid parandusi kui ka suuremaid remonte",
    portfolioReal: "Teostatud objektid",
    portfolioVisual: "Näidispildid",
    portfolioRealNote: "Tegelike objektide fotod lisatakse klientide loal.",
    areaEyebrow: "Teeninduspiirkond",
    areaTitle: "Ehitus- ja remonditööd Uusimaal",
    areaText1: "AKTIIV24 teenindab kliente Uusimaal ja vajadusel mujal Soomes. Tööpiirkondade hulka kuuluvad Helsingi, Espoo, Vantaa, Nurmijärvi, Tuusula, Kerava, Järvenpää ja lähialad.",
    areaText2: "Teeme siseremonte, põrandatöid, saunaremonti, värvimistöid, kipsplaadi- ja vaheseinatöid, uste ja akende paigaldust ning fassaadide parandus- ja ettevalmistustöid.",
    footerArea: "Teeninduspiirkond: Uusimaa ja muu Soome kokkuleppel",
    labelEmail: "Email",
    labelCityLocation: "Linn / objekti asukoht",
    labelPhotos: "Kas teil on objektist fotosid?",
    photosYes: "Jah",
    photosNo: "Veel mitte",
    labelMore: "Lisainfo",
    photoHint: "Fotosid saab saata ka otse e-postiga: aktiiv24@gmail.com",
    privacyEyebrow: "Privaatsus",
    privacyTitle: "Privaatsus",
    privacyText: "Vormi kaudu saadetud andmeid kasutatakse ainult ühenduse võtmiseks ja hinnapäringu käsitlemiseks. Andmeid ei edastata kolmandatele osapooltele ilma eraldi põhjuseta või kliendi loata.",
    footerPhoneLabel: "Telefon:",
    footerEmailLabel: "Email:",
    footerBusinessLabel: "Y-tunnus:",
    mailtoMessage: "E-posti rakendus avaneb. Kontrollige andmed ja lisage fotod enne saatmist.",
    formThanks: "AitГ¤h! Palun vГµtke meiega Гјhendust telefonil 041 749 1334 vГµi e-postil aktiiv24@gmail.com."
  },
  ru: {
    pageTitle: "AKTIIV24 - СЃС‚СЂРѕРёС‚РµР»СЊРЅС‹Рµ Рё СЂРµРјРѕРЅС‚РЅС‹Рµ СЂР°Р±РѕС‚С‹ РІ Р¤РёРЅР»СЏРЅРґРёРё",
    metaDescription: "AKTIIV24 РІС‹РїРѕР»РЅСЏРµС‚ СЃС‚СЂРѕРёС‚РµР»СЊРЅС‹Рµ Рё СЂРµРјРѕРЅС‚РЅС‹Рµ СЂР°Р±РѕС‚С‹ РІ Р¤РёРЅР»СЏРЅРґРёРё Рё РЈСѓСЃРёРјР°Р°: РІРЅСѓС‚СЂРµРЅРЅРёРµ СЂРµРјРѕРЅС‚С‹, СЃР°СѓРЅС‹, РїРѕР»С‹, РіРёРїСЃРѕРєР°СЂС‚РѕРЅ, РїРѕРєСЂР°СЃРєР°, РґРµРјРѕРЅС‚Р°Р¶ Рё С„Р°СЃР°РґС‹.",
    ogDescription: "РЎС‚СЂРѕРёС‚РµР»СЊРЅС‹Рµ Рё СЂРµРјРѕРЅС‚РЅС‹Рµ СЂР°Р±РѕС‚С‹ РґР»СЏ С‡Р°СЃС‚РЅС‹С… РєР»РёРµРЅС‚РѕРІ, Р¶РёР»РёС‰РЅС‹С… С‚РѕРІР°СЂРёС‰РµСЃС‚РІ, РєРѕРјРїР°РЅРёР№ Рё РїРѕРґСЂСЏРґС‡РёРєРѕРІ. Р Р°Р±РѕС‚Р°РµРј РІ РЈСѓСЃРёРјР°Р° Рё РґСЂСѓРіРёС… СЂРµРіРёРѕРЅР°С… Р¤РёРЅР»СЏРЅРґРёРё.",
    navServices: "РЈСЃР»СѓРіРё", navPortfolio: "РџРѕСЂС‚С„РѕР»РёРѕ", navAbout: "Рћ РЅР°СЃ", navWork: "Р Р°Р±РѕС‚Р°", navContacts: "РљРѕРЅС‚Р°РєС‚С‹",
    ctaRequest: "РћСЃС‚Р°РІРёС‚СЊ Р·Р°СЏРІРєСѓ", ctaPortfolio: "РџРѕСЃРјРѕС‚СЂРµС‚СЊ СѓСЃР»СѓРіРё",
    heroEyebrow: "РЎС‚СЂРѕРёС‚РµР»СЊСЃС‚РІРѕ + РїРѕСЂСЏРґРѕРє + СЂРµР·СѓР»СЊС‚Р°С‚",
    heroTitle: "AKTIIV24 - СЃС‚СЂРѕРёС‚РµР»СЊРЅС‹Рµ Рё СЂРµРјРѕРЅС‚РЅС‹Рµ СЂР°Р±РѕС‚С‹ РІ Р¤РёРЅР»СЏРЅРґРёРё",
    heroLead: "РЎС‚СЂРѕРёС‚РµР»СЊРЅС‹Рµ Рё СЂРµРјРѕРЅС‚РЅС‹Рµ СЂР°Р±РѕС‚С‹ РґР»СЏ С‡Р°СЃС‚РЅС‹С… РєР»РёРµРЅС‚РѕРІ, Р¶РёР»РёС‰РЅС‹С… С‚РѕРІР°СЂРёС‰РµСЃС‚РІ, РєРѕРјРїР°РЅРёР№ Рё РїРѕРґСЂСЏРґС‡РёРєРѕРІ. РџРѕРЅСЏС‚РЅС‹Р№ РїСЂРѕС†РµСЃСЃ, Р°РєРєСѓСЂР°С‚РЅРѕРµ РІС‹РїРѕР»РЅРµРЅРёРµ Рё РіРѕС‚РѕРІС‹Р№ СЂРµР·СѓР»СЊС‚Р°С‚ РІ СЃРѕРіР»Р°СЃРѕРІР°РЅРЅС‹Рµ СЃСЂРѕРєРё.",
    statExperienceNumber: "25+ Р»РµС‚", statExperience: "РѕРїС‹С‚Р°", statFinland: "СЂР°Р±РѕС‚Р° РїРѕ Р¤РёРЅР»СЏРЅРґРёРё", statToolsNumber: "100 % СЃРІРѕРё", statTools: "РёРЅСЃС‚СЂСѓРјРµРЅС‚С‹", statClients: "С‡Р°СЃС‚РЅС‹Рµ Рё РєРѕРјРїР°РЅРёРё",
    strongIntro: "AKTIIV24 РІС‹РїРѕР»РЅСЏРµС‚ СЃС‚СЂРѕРёС‚РµР»СЊРЅС‹Рµ Рё СЂРµРјРѕРЅС‚РЅС‹Рµ СЂР°Р±РѕС‚С‹ СЃ РїРѕРЅСЏС‚РЅС‹Рј РїРѕРґС…РѕРґРѕРј: СЃРѕРіР»Р°СЃРѕРІР°РЅРЅС‹Рµ Р·Р°РґР°С‡Рё, Р°РєРєСѓСЂР°С‚РЅРѕРµ РІС‹РїРѕР»РЅРµРЅРёРµ Рё РіРѕС‚РѕРІС‹Р№ СЂРµР·СѓР»СЊС‚Р°С‚ Р±РµР· Р»РёС€РЅРµР№ СЃСѓРµС‚С‹. РњС‹ СЂР°Р±РѕС‚Р°РµРј СЃ С‡Р°СЃС‚РЅС‹РјРё РєР»РёРµРЅС‚Р°РјРё, Р¶РёР»РёС‰РЅС‹РјРё С‚РѕРІР°СЂРёС‰РµСЃС‚РІР°РјРё, РєРѕРјРїР°РЅРёСЏРјРё Рё РїРѕРґСЂСЏРґС‡РёРєР°РјРё РІ СЂР°Р·РЅС‹С… СЂРµРіРёРѕРЅР°С… Р¤РёРЅР»СЏРЅРґРёРё.",
    aboutEyebrow: "Рћ РєРѕРјРїР°РЅРёРё", aboutTitle: "РЎС‚СЂРѕРёС‚РµР»СЊРЅР°СЏ РєРѕРјРїР°РЅРёСЏ СЃ РїСЂР°РєС‚РёС‡РµСЃРєРёРј РїРѕРґС…РѕРґРѕРј",
    aboutP1: "AKTIIV24 РІС‹РїРѕР»РЅСЏРµС‚ СЃС‚СЂРѕРёС‚РµР»СЊРЅС‹Рµ Рё СЂРµРјРѕРЅС‚РЅС‹Рµ СЂР°Р±РѕС‚С‹ РґР»СЏ С‡Р°СЃС‚РЅС‹С… РєР»РёРµРЅС‚РѕРІ, Р¶РёР»РёС‰РЅС‹С… С‚РѕРІР°СЂРёС‰РµСЃС‚РІ, РєРѕРјРїР°РЅРёР№ Рё РїРѕРґСЂСЏРґС‡РёРєРѕРІ. РњС‹ СЂР°Р±РѕС‚Р°РµРј СЃ РІРЅСѓС‚СЂРµРЅРЅРёРјРё РїРѕРјРµС‰РµРЅРёСЏРјРё, С„Р°СЃР°РґР°РјРё, СЃР°СѓРЅР°РјРё, РїРѕР»Р°РјРё, СЃС‚РµРЅР°РјРё, РґРІРµСЂСЏРјРё, РѕРєРЅР°РјРё Рё РґСЂСѓРіРёРјРё СЃС‚СЂРѕРёС‚РµР»СЊРЅС‹РјРё Р·Р°РґР°С‡Р°РјРё.",
    aboutP2: "РќР°С€ РїРѕРґС…РѕРґ РїСЂРѕСЃС‚РѕР№: СЃРЅР°С‡Р°Р»Р° РїРѕРЅСЏС‚СЊ Р·Р°РґР°С‡Сѓ, Р·Р°С‚РµРј РїСЂРµРґР»РѕР¶РёС‚СЊ РїРѕРЅСЏС‚РЅРѕРµ СЂРµС€РµРЅРёРµ, РІС‹РїРѕР»РЅРёС‚СЊ СЂР°Р±РѕС‚Сѓ Р°РєРєСѓСЂР°С‚РЅРѕ Рё РґРѕРІРµСЃС‚Рё РѕР±СЉРµРєС‚ РґРѕ СЂРµР·СѓР»СЊС‚Р°С‚Р°.",
    aboutP3: "РњС‹ С†РµРЅРёРј РїРѕСЂСЏРґРѕРє, РїРѕРЅСЏС‚РЅС‹Рµ РґРѕРіРѕРІРѕСЂС‘РЅРЅРѕСЃС‚Рё Рё СѓРІР°Р¶РµРЅРёРµ Рє РѕР±СЉРµРєС‚Сѓ РєР»РёРµРЅС‚Р°. Р”Р»СЏ РЅР°СЃ С…РѕСЂРѕС€РёР№ СЂРµРјРѕРЅС‚ - СЌС‚Рѕ РЅРµ С‚РѕР»СЊРєРѕ РєСЂР°СЃРёРІС‹Р№ СЂРµР·СѓР»СЊС‚Р°С‚, РЅРѕ Рё РЅРѕСЂРјР°Р»СЊРЅС‹Р№ РїСЂРѕС†РµСЃСЃ СЂР°Р±РѕС‚С‹.",
    serviceArea: "Р Р°Р±РѕС‚Р°РµРј РІ РЈСѓСЃРёРјР°Р° Рё РїСЂРё РЅРµРѕР±С…РѕРґРёРјРѕСЃС‚Рё РІ РґСЂСѓРіРёС… СЂРµРіРёРѕРЅР°С… Р¤РёРЅР»СЏРЅРґРёРё: РҐРµР»СЊСЃРёРЅРєРё, Р­СЃРїРѕРѕ, Р’Р°РЅС‚Р°Р°, РќСѓСЂРјРёСЏСЂРІРё, РўСѓСѓСЃСѓР»Р°, РљРµСЂР°РІР°, РЇСЂРІРµРЅРїСЏСЏ Рё Р±Р»РёР¶Р°Р№С€РёРµ СЂР°Р№РѕРЅС‹.",
    servicesEyebrow: "РЈСЃР»СѓРіРё", servicesTitle: "РќР°С€Рё СѓСЃР»СѓРіРё", servicesLead: "Р’С‹РїРѕР»РЅСЏРµРј РїРѕР»РЅС‹Р№ СЃРїРµРєС‚СЂ СЃС‚СЂРѕРёС‚РµР»СЊРЅС‹С… Рё СЂРµРјРѕРЅС‚РЅС‹С… СЂР°Р±РѕС‚ - РѕС‚ РґРµРјРѕРЅС‚Р°Р¶Р° РґРѕ С‡РёСЃС‚РѕРІРѕР№ РѕС‚РґРµР»РєРё.",
    serviceInteriorTitle: "Р’РЅСѓС‚СЂРµРЅРЅРёРµ СЂРµРјРѕРЅС‚РЅС‹Рµ СЂР°Р±РѕС‚С‹", serviceInteriorText: "Р’РЅСѓС‚СЂРµРЅРЅРёР№ СЂРµРјРѕРЅС‚ РєРІР°СЂС‚РёСЂ, РґРѕРјРѕРІ Рё РѕС‚РґРµР»СЊРЅС‹С… РїРѕРјРµС‰РµРЅРёР№: РґРµРјРѕРЅС‚Р°Р¶, РєР°СЂРєР°СЃС‹, РіРёРїСЃРѕРєР°СЂС‚РѕРЅРЅС‹Рµ СЂР°Р±РѕС‚С‹, СѓС‚РµРїР»РµРЅРёРµ, С€РїР°РєР»С‘РІРєР°, РїРѕРєСЂР°СЃРєР°, РїРѕР»С‹ Рё С„РёРЅРёС€РЅР°СЏ РѕС‚РґРµР»РєР°.",
    serviceDemoTitle: "Р”РµРјРѕРЅС‚Р°Р¶", serviceDemoText: "Р”РµРјРѕРЅС‚Р°Р¶РЅС‹Рµ СЂР°Р±РѕС‚С‹ РґР»СЏ СЃС‚Р°СЂС‹С… РїРѕРєСЂС‹С‚РёР№, РїРµСЂРµРіРѕСЂРѕРґРѕРє, РїРѕР»РѕРІ, РїРѕС‚РѕР»РєРѕРІ, РґРІРµСЂРµР№, РїР»РёРЅС‚СѓСЃРѕРІ, РїР»РёС‚РєРё Рё РґСЂСѓРіРёС… РєРѕРЅСЃС‚СЂСѓРєС†РёР№ - Р°РєРєСѓСЂР°С‚РЅРѕ Рё РєРѕРЅС‚СЂРѕР»РёСЂСѓРµРјРѕ.",
    serviceDrywallTitle: "РЎС‚РµРЅС‹ Рё РіРёРїСЃРѕРєР°СЂС‚РѕРЅ", serviceDrywallText: "Р“РёРїСЃРѕРєР°СЂС‚РѕРЅРЅС‹Рµ СЂР°Р±РѕС‚С‹, РјРѕРЅС‚Р°Р¶ РєР°СЂРєР°СЃРѕРІ, РїРµСЂРµРіРѕСЂРѕРґРѕРє Рё РєРѕСЂРѕР±РѕРІ, СѓСЃРёР»РµРЅРёРµ РїСЂРѕС‘РјРѕРІ Рё РїРѕРґРіРѕС‚РѕРІРєР° СЃС‚РµРЅ РїРѕРґ С€РїР°РєР»С‘РІРєСѓ Рё РїРѕРєСЂР°СЃРєСѓ.",
    servicePaintTitle: "РЁРїР°РєР»С‘РІРєР° Рё РїРѕРєСЂР°СЃРєР°", servicePaintText: "РџРѕРєСЂР°СЃРѕС‡РЅС‹Рµ СЂР°Р±РѕС‚С‹, С€РїР°РєР»С‘РІРєР°, С€Р»РёС„РѕРІРєР°, РіСЂСѓРЅС‚РѕРІРєР° Рё РѕС‚РґРµР»РєР° СЃС‚РµРЅ Рё РїРѕС‚РѕР»РєРѕРІ. Р§РёСЃС‚С‹Р№ СЂРµР·СѓР»СЊС‚Р°С‚ РЅР°С‡РёРЅР°РµС‚СЃСЏ СЃ РїСЂР°РІРёР»СЊРЅРѕР№ РїРѕРґРіРѕС‚РѕРІРєРё.",
    serviceFloorTitle: "РџРѕР»С‹", serviceFloorText: "РЈРєР»Р°РґРєР° РїРѕР»РѕРІ: Р»Р°РјРёРЅР°С‚, РІРёРЅРёР», РїР°СЂРєРµС‚, С„Р°РЅРµСЂР°, РїРѕРґР»РѕР¶РєР°, РїР»РёРЅС‚СѓСЃС‹ Рё РїРѕРґРіРѕС‚РѕРІРєР° РѕСЃРЅРѕРІР°РЅРёСЏ РїРѕРґ С‚СЂРµР±РѕРІР°РЅРёСЏ РѕР±СЉРµРєС‚Р°.",
    serviceSaunaTitle: "РЎР°СѓРЅС‹", serviceSaunaText: "Р РµРјРѕРЅС‚ СЃР°СѓРЅ, СЃС‚СЂРѕРёС‚РµР»СЊСЃС‚РІРѕ Рё РѕР±РЅРѕРІР»РµРЅРёРµ СЃР°СѓРЅ: РїР°РЅРµР»Рё, Р»Р°РІРєРё, РїРѕС‚РѕР»РєРё, РїРѕРґСЃРІРµС‚РєР°, РѕС‚РґРµР»РєР° Рё Р°РєРєСѓСЂР°С‚РЅР°СЏ СЃР±РѕСЂРєР°.",
    serviceFacadeTitle: "Р¤Р°СЃР°РґС‹ Рё РЅР°СЂСѓР¶РЅС‹Рµ СЂР°Р±РѕС‚С‹", serviceFacadeText: "Р¤Р°СЃР°РґРЅС‹Рµ СЂР°Р±РѕС‚С‹, Р·Р°РјРµРЅР° РЅР°СЂСѓР¶РЅРѕР№ РѕР±С€РёРІРєРё, РїРѕРєСЂР°СЃРєР°, РїРѕРґРіРѕС‚РѕРІРєР° РґРµСЂРµРІСЏРЅРЅС‹С… РїРѕРІРµСЂС…РЅРѕСЃС‚РµР№ Рё РЅР°СЂСѓР¶РЅР°СЏ РѕС‚РґРµР»РєР° РґРѕРјРѕРІ РїРѕ СЃРѕРіР»Р°СЃРѕРІР°РЅРЅРѕРјСѓ РѕР±СЉС‘РјСѓ.",
    serviceWetTitle: "Р’Р°РЅРЅС‹Рµ Рё РІР»Р°Р¶РЅС‹Рµ РїРѕРјРµС‰РµРЅРёСЏ", serviceWetText: "РџРѕРґРіРѕС‚РѕРІРёС‚РµР»СЊРЅС‹Рµ Рё РѕС‚РґРµР»РѕС‡РЅС‹Рµ СЂР°Р±РѕС‚С‹ СЃ СѓС‡С‘С‚РѕРј С‚СЂРµР±РѕРІР°РЅРёР№ Рє РјР°С‚РµСЂРёР°Р»Р°Рј, РѕСЃРЅРѕРІР°РЅРёСЏРј Рё СЌРєСЃРїР»СѓР°С‚Р°С†РёРё. РЎРїРµС†РёР°Р»РёР·РёСЂРѕРІР°РЅРЅС‹Рµ СЌС‚Р°РїС‹ РІС‹РїРѕР»РЅСЏСЋС‚СЃСЏ РїСЂРѕС„РёР»СЊРЅС‹РјРё СЃРїРµС†РёР°Р»РёСЃС‚Р°РјРё.",
    servicePrepTitle: "Р”РІРµСЂРё, РѕРєРЅР° Рё РїРѕРґРіРѕС‚РѕРІРєР°", servicePrepText: "РЈСЃС‚Р°РЅРѕРІРєР° РґРІРµСЂРµР№ Рё РѕРєРѕРЅ, РѕС‚РєРѕСЃРѕРІ, РЅР°Р»РёС‡РЅРёРєРѕРІ, РїР»РёРЅС‚СѓСЃРѕРІ Рё РЅРµР±РѕР»СЊС€РёРµ РїРѕРґРіРѕС‚РѕРІРёС‚РµР»СЊРЅС‹Рµ СЂР°Р±РѕС‚С‹ РґР»СЏ СЃР»РµРґСѓСЋС‰РёС… СЌС‚Р°РїРѕРІ СЃС‚СЂРѕРёС‚РµР»СЊСЃС‚РІР°.",
    whyEyebrow: "РџРѕС‡РµРјСѓ AKTIIV24", whyTitle: "РџРѕРЅСЏС‚РЅР°СЏ СЂР°Р±РѕС‚Р° Р±РµР· Р»РёС€РЅРёС… РѕР±РµС‰Р°РЅРёР№",
    why1Title: "РџРѕСЂСЏРґРѕРє РЅР° РѕР±СЉРµРєС‚Рµ", why1Text: "Р Р°Р±РѕС‚Р° РѕСЂРіР°РЅРёР·СѓРµС‚СЃСЏ С‚Р°Рє, С‡С‚РѕР±С‹ СЃР»РµРґСѓСЋС‰РёР№ СЌС‚Р°Рї РЅРµ РЅР°С‡РёРЅР°Р»СЃСЏ СЃ РёСЃРїСЂР°РІР»РµРЅРёСЏ С…Р°РѕСЃР°.",
    why2Title: "Р§С‘С‚РєРёРµ РґРѕРіРѕРІРѕСЂС‘РЅРЅРѕСЃС‚Рё", why2Text: "Р¤РѕСЂРјР°С‚, СЃСЂРѕРєРё, РѕР±СЉС‘Рј Рё РјР°С‚РµСЂРёР°Р»С‹ РѕР±СЃСѓР¶РґР°СЋС‚СЃСЏ РґРѕ РЅР°С‡Р°Р»Р° СЂР°Р±РѕС‚.",
    why3Title: "РџСЂР°РєС‚РёС‡РµСЃРєРёР№ РѕРїС‹С‚", why3Text: "Р Р°Р±РѕС‚Р°РµРј СЃ СЂР°Р·РЅС‹РјРё Р·Р°РґР°С‡Р°РјРё: РѕС‚ РѕС‚РґРµР»СЊРЅРѕРіРѕ СЌС‚Р°РїР° РґРѕ РєРѕРјРїР»РµРєСЃРЅРѕРіРѕ СЂРµРјРѕРЅС‚Р°.",
    why4Title: "Р”Р»СЏ С‡Р°СЃС‚РЅС‹С… Рё B2B", why4Text: "РњРѕР¶РµРј РїРѕРґРєР»СЋС‡Р°С‚СЊСЃСЏ Рє РѕР±СЉРµРєС‚Сѓ РєР°Рє РёСЃРїРѕР»РЅРёС‚РµР»СЊ РёР»Рё РґРѕРїРѕР»РЅРёС‚РµР»СЊРЅС‹Р№ СЂРµСЃСѓСЂСЃ.",
    portfolioEyebrow: "РџРѕСЂС‚С„РѕР»РёРѕ", portfolioTitle: "РџСЂРёРјРµСЂС‹ РЅР°РїСЂР°РІР»РµРЅРёР№ СЂР°Р±РѕС‚",
    portfolioLead: "РР·РѕР±СЂР°Р¶РµРЅРёСЏ РЅРёР¶Рµ РїРѕРєР°Р·С‹РІР°СЋС‚ РЅР°РїСЂР°РІР»РµРЅРёСЏ СѓСЃР»СѓРі Рё СЃС‚РёР»СЊ РіРѕС‚РѕРІРѕРіРѕ СЂРµР·СѓР»СЊС‚Р°С‚Р°. Р РµР°Р»СЊРЅС‹Рµ С„РѕС‚РѕРіСЂР°С„РёРё РѕР±СЉРµРєС‚РѕРІ Р±СѓРґСѓС‚ РґРѕР±Р°РІР»СЏС‚СЊСЃСЏ СЃ СЂР°Р·СЂРµС€РµРЅРёСЏ РєР»РёРµРЅС‚РѕРІ.",
    filterAll: "Р’СЃРµ", filterInterior: "РРЅС‚РµСЂСЊРµСЂ", filterSauna: "РЎР°СѓРЅС‹", filterFloor: "РџРѕР»С‹", filterFacade: "Р¤Р°СЃР°РґС‹",
    portfolio1: "Р РµРјРѕРЅС‚ РєРІР°СЂС‚РёСЂС‹", portfolio2: "РћР±РЅРѕРІР»РµРЅРёРµ СЃР°СѓРЅС‹", portfolio3: "РЈРєР»Р°РґРєР° РїРѕР»Р°", portfolio4: "РџРѕРєСЂР°СЃРєР° СЃС‚РµРЅ", portfolio5: "Р¤Р°СЃР°Рґ РґРѕРјР°", portfolio6: "Р’Р»Р°Р¶РЅРѕРµ РїРѕРјРµС‰РµРЅРёРµ",
    processEyebrow: "РџСЂРѕС†РµСЃСЃ", processTitle: "РљР°Рє РїСЂРѕС…РѕРґРёС‚ СЂР°Р±РѕС‚Р°",
    process1Title: "РЎРІСЏР·СЊ", process1Text: "РћС‚РїСЂР°РІСЊС‚Рµ РєСЂР°С‚РєРѕРµ РѕРїРёСЃР°РЅРёРµ СЂР°Р±РѕС‚С‹, С„РѕС‚РѕРіСЂР°С„РёРё РѕР±СЉРµРєС‚Р° Рё Р¶РµР»Р°РµРјС‹Рµ СЃСЂРѕРєРё.",
    process2Title: "РћС†РµРЅРєР°", process2Text: "РњС‹ СЂР°Р·Р±РёСЂР°РµРј Р·Р°РґР°С‡Сѓ Рё РїСЂРё РЅРµРѕР±С…РѕРґРёРјРѕСЃС‚Рё СЃРѕРіР»Р°СЃСѓРµРј РѕСЃРјРѕС‚СЂ РѕР±СЉРµРєС‚Р°.",
    process3Title: "РџСЂРµРґР»РѕР¶РµРЅРёРµ", process3Text: "Р’С‹ РїРѕР»СѓС‡Р°РµС‚Рµ РїРѕРЅСЏС‚РЅСѓСЋ РѕС†РµРЅРєСѓ СЃРѕРґРµСЂР¶Р°РЅРёСЏ СЂР°Р±РѕС‚, СЃСЂРѕРєРѕРІ Рё СЃС‚РѕРёРјРѕСЃС‚Рё.",
    process4Title: "Р’С‹РїРѕР»РЅРµРЅРёРµ", process4Text: "Р Р°Р±РѕС‚Р° РІС‹РїРѕР»РЅСЏРµС‚СЃСЏ РїРѕ СЃРѕРіР»Р°СЃРѕРІР°РЅРЅРѕРјСѓ РїР»Р°РЅСѓ, Р°РєРєСѓСЂР°С‚РЅРѕ Рё РїСЂР°РєС‚РёС‡РЅРѕ.",
    process5Title: "Р“РѕС‚РѕРІС‹Р№ СЂРµР·СѓР»СЊС‚Р°С‚", process5Text: "РњС‹ РїСЂРѕРІРµСЂСЏРµРј СЂРµР·СѓР»СЊС‚Р°С‚ Рё СѓР±РµР¶РґР°РµРјСЃСЏ, С‡С‚Рѕ СЃРѕРіР»Р°СЃРѕРІР°РЅРЅР°СЏ СЂР°Р±РѕС‚Р° РІС‹РїРѕР»РЅРµРЅР°.",
    process6Title: "Р-Р°РІРµСЂС€РµРЅРёРµ", process6Text: "РџСЂРѕРІРµСЂСЏРµРј СЂРµР·СѓР»СЊС‚Р°С‚ Рё РїРµСЂРµРґР°С‘Рј РѕР±СЉРµРєС‚.",
    b2bTitle: "РЎРѕС‚СЂСѓРґРЅРёС‡РµСЃС‚РІРѕ СЃ РєРѕРјРїР°РЅРёСЏРјРё Рё РїРѕРґСЂСЏРґС‡РёРєР°РјРё",
    b2bText: "AKTIIV24 РіРѕС‚РѕРІР° РІС‹РїРѕР»РЅСЏС‚СЊ РѕС‚РґРµР»СЊРЅС‹Рµ СЌС‚Р°РїС‹ СЃС‚СЂРѕРёС‚РµР»СЊРЅС‹С… Рё СЂРµРјРѕРЅС‚РЅС‹С… СЂР°Р±РѕС‚ РґР»СЏ РєРѕРјРїР°РЅРёР№, РїРѕРґСЂСЏРґС‡РёРєРѕРІ Рё РІР»Р°РґРµР»СЊС†РµРІ РѕР±СЉРµРєС‚РѕРІ. РњС‹ РјРѕР¶РµРј РїРѕРґРєР»СЋС‡Р°С‚СЊСЃСЏ Рє РїСЂРѕРµРєС‚Сѓ РєР°Рє РёСЃРїРѕР»РЅРёС‚РµР»СЊ РЅР° РєРѕРЅРєСЂРµС‚РЅС‹Р№ РѕР±СЉС‘Рј СЂР°Р±РѕС‚ РёР»Рё РєР°Рє РґРѕРїРѕР»РЅРёС‚РµР»СЊРЅС‹Р№ СЂРµСЃСѓСЂСЃ РЅР° РѕР±СЉРµРєС‚Рµ.",
    b2b1: "РІРЅСѓС‚СЂРµРЅРЅРёРµ СЂРµРјРѕРЅС‚РЅС‹Рµ СЂР°Р±РѕС‚С‹;", b2b2: "РґРµРјРѕРЅС‚Р°Р¶, РіРёРїСЃРѕРєР°СЂС‚РѕРЅ, РєР°СЂРєР°СЃС‹;", b2b3: "РїРѕР»С‹, РїРѕРєСЂР°СЃРєР°, СЃР°СѓРЅС‹ Рё С„Р°СЃР°РґС‹;", b2b4: "РїРѕС‡Р°СЃРѕРІР°СЏ СЂР°Р±РѕС‚Р° РёР»Рё СЃРѕРіР»Р°СЃРѕРІР°РЅРЅС‹Р№ РѕР±СЉС‘Рј.",
    workEyebrow: "РљРѕРјР°РЅРґР°", workTitle: "Р Р°Р±РѕС‚Р° Рё СЃРѕС‚СЂСѓРґРЅРёС‡РµСЃС‚РІРѕ", workLead: "Р•СЃР»Рё Сѓ РІР°СЃ РµСЃС‚СЊ РѕРїС‹С‚, РёРЅСЃС‚СЂСѓРјРµРЅС‚С‹, РѕС‚РІРµС‚СЃС‚РІРµРЅРЅРѕСЃС‚СЊ Рё Р¶РµР»Р°РЅРёРµ СЂР°Р±РѕС‚Р°С‚СЊ РєР°С‡РµСЃС‚РІРµРЅРЅРѕ - РѕС‚РїСЂР°РІСЊС‚Рµ РёРЅС„РѕСЂРјР°С†РёСЋ Рѕ СЃРµР±Рµ.",
    reviewsEyebrow: "РћС‚Р·С‹РІС‹", reviewsTitle: "РћС‚Р·С‹РІС‹ РєР»РёРµРЅС‚РѕРІ", reviewsLead: "РћС‚Р·С‹РІС‹ РєР»РёРµРЅС‚РѕРІ Р±СѓРґСѓС‚ РґРѕР±Р°РІР»РµРЅС‹ РЅР° СЃР°Р№С‚ СЃ СЂР°Р·СЂРµС€РµРЅРёСЏ РєР»РёРµРЅС‚РѕРІ. Р’С‹ РјРѕР¶РµС‚Рµ Р·Р°РїСЂРѕСЃРёС‚СЊ РґРѕРїРѕР»РЅРёС‚РµР»СЊРЅСѓСЋ РёРЅС„РѕСЂРјР°С†РёСЋ Рѕ РїСЂРѕС€Р»С‹С… РѕР±СЉРµРєС‚Р°С…, СЃРІСЏР·Р°РІС€РёСЃСЊ СЃ РЅР°РјРё.",
    faqTitle: "Р§Р°СЃС‚С‹Рµ РІРѕРїСЂРѕСЃС‹",
    faq1Q: "Р’С‹ СЂР°Р±РѕС‚Р°РµС‚Рµ С‚РѕР»СЊРєРѕ СЃ Р±РѕР»СЊС€РёРјРё РѕР±СЉРµРєС‚Р°РјРё?", faq1A: "РќРµС‚. РњС‹ РјРѕР¶РµРј РІС‹РїРѕР»РЅРёС‚СЊ РєР°Рє РѕС‚РґРµР»СЊРЅС‹Р№ СЌС‚Р°Рї СЂР°Р±РѕС‚, С‚Р°Рє Рё Р±РѕР»РµРµ РєСЂСѓРїРЅС‹Р№ СЂРµРјРѕРЅС‚. Р’СЃС‘ Р·Р°РІРёСЃРёС‚ РѕС‚ Р·Р°РґР°С‡Рё, СЃСЂРѕРєРѕРІ Рё РґРѕСЃС‚СѓРїРЅРѕСЃС‚Рё.",
    faq2Q: "РњРѕР¶РЅРѕ Р»Рё РѕС‚РїСЂР°РІРёС‚СЊ С„РѕС‚РѕРіСЂР°С„РёРё РѕР±СЉРµРєС‚Р° РґР»СЏ РїСЂРµРґРІР°СЂРёС‚РµР»СЊРЅРѕР№ РѕС†РµРЅРєРё?", faq2A: "Р”Р°. Р¤РѕС‚РѕРіСЂР°С„РёРё РїРѕРјРѕРіР°СЋС‚ Р±С‹СЃС‚СЂРµРµ РїРѕРЅСЏС‚СЊ РѕР±СЉС‘Рј СЂР°Р±РѕС‚ Рё РїРѕРґРіРѕС‚РѕРІРёС‚СЊ РїСЂРµРґРІР°СЂРёС‚РµР»СЊРЅС‹Р№ РѕС‚РІРµС‚.",
    faq3Q: "Р’С‹ СЂР°Р±РѕС‚Р°РµС‚Рµ СЃ РєРѕРјРїР°РЅРёСЏРјРё?", faq3A: "Р”Р°. Р’РѕР·РјРѕР¶РЅР° СЂР°Р±РѕС‚Р° СЃ С‡Р°СЃС‚РЅС‹РјРё РєР»РёРµРЅС‚Р°РјРё, РєРѕРјРїР°РЅРёСЏРјРё, РїРѕРґСЂСЏРґС‡РёРєР°РјРё Рё РІР»Р°РґРµР»СЊС†Р°РјРё РЅРµРґРІРёР¶РёРјРѕСЃС‚Рё.",
    faq4Q: "РњРѕР¶РЅРѕ Р»Рё Р·Р°РєР°Р·Р°С‚СЊ С‚РѕР»СЊРєРѕ РѕРґРёРЅ РІРёРґ СЂР°Р±РѕС‚?", faq4A: "Р”Р°. РњРѕР¶РЅРѕ Р·Р°РєР°Р·Р°С‚СЊ РѕС‚РґРµР»СЊРЅСѓСЋ СЂР°Р±РѕС‚Сѓ: РїРѕР»С‹, РїРѕРєСЂР°СЃРєСѓ, РґРµРјРѕРЅС‚Р°Р¶, РґРІРµСЂРё, СЃР°СѓРЅСѓ, С„Р°СЃР°Рґ РёР»Рё РґСЂСѓРіРѕР№ РєРѕРЅРєСЂРµС‚РЅС‹Р№ СЌС‚Р°Рї.",
    faq5Q: "Р’С‹ СЃР°РјРё РїРѕРєСѓРїР°РµС‚Рµ РјР°С‚РµСЂРёР°Р»С‹?", faq5A: "Р¤РѕСЂРјР°С‚ Р·Р°РєСѓРїРєРё РјР°С‚РµСЂРёР°Р»РѕРІ РѕР±СЃСѓР¶РґР°РµС‚СЃСЏ РѕС‚РґРµР»СЊРЅРѕ. Р’РѕР·РјРѕР¶РЅС‹ СЂР°Р·РЅС‹Рµ РІР°СЂРёР°РЅС‚С‹ РІ Р·Р°РІРёСЃРёРјРѕСЃС‚Рё РѕС‚ РѕР±СЉРµРєС‚Р° Рё РґРѕРіРѕРІРѕСЂС‘РЅРЅРѕСЃС‚Рё.",
    faq6Q: "Р’ РєР°РєРѕРј СЂРµРіРёРѕРЅРµ РІС‹ СЂР°Р±РѕС‚Р°РµС‚Рµ?", faq6A: "РћСЃРЅРѕРІРЅРѕР№ СЂРµРіРёРѕРЅ СЂР°Р±РѕС‚С‹ - Р¤РёРЅР»СЏРЅРґРёСЏ. РљРѕРЅРєСЂРµС‚РЅС‹Р№ РѕР±СЉРµРєС‚ Рё РІРѕР·РјРѕР¶РЅРѕСЃС‚СЊ РІС‹РµР·РґР° РѕР±СЃСѓР¶РґР°СЋС‚СЃСЏ РѕС‚РґРµР»СЊРЅРѕ.",
    contactsEyebrow: "РљРѕРЅС‚Р°РєС‚С‹", contactsTitle: "РЎРІСЏР·Р°С‚СЊСЃСЏ СЃ AKTIIV24",
    contactsLead: "РћРїРёС€РёС‚Рµ Р·Р°РґР°С‡Сѓ, РїСЂРёР»РѕР¶РёС‚Рµ С„РѕС‚РѕРіСЂР°С„РёРё РѕР±СЉРµРєС‚Р° Рё СѓРєР°Р¶РёС‚Рµ Р¶РµР»Р°РµРјС‹Рµ СЃСЂРѕРєРё. AKTIIV24 РѕС‚РєСЂС‹С‚Рѕ СѓРєР°Р·С‹РІР°РµС‚ РєРѕРЅС‚Р°РєС‚РЅС‹Рµ Рё СЂРµРіРёСЃС‚СЂР°С†РёРѕРЅРЅС‹Рµ РґР°РЅРЅС‹Рµ, С‡С‚РѕР±С‹ РєР»РёРµРЅС‚Сѓ Р±С‹Р»Рѕ РїРѕРЅСЏС‚РЅРѕ, СЃ РєРµРј РѕРЅ СЃРІСЏР·С‹РІР°РµС‚СЃСЏ.",
    quoteEyebrow: "Р-Р°РїСЂРѕСЃ РїСЂРµРґР»РѕР¶РµРЅРёСЏ", quoteTitle: "РљР°РєР°СЏ РёРЅС„РѕСЂРјР°С†РёСЏ РЅСѓР¶РЅР° РґР»СЏ РѕС†РµРЅРєРё?", quoteText: "Р”Р»СЏ Р±С‹СЃС‚СЂРѕР№ РѕС†РµРЅРєРё РѕС‚РїСЂР°РІСЊС‚Рµ Р°РґСЂРµСЃ РѕР±СЉРµРєС‚Р° РёР»Рё РіРѕСЂРѕРґ, РєСЂР°С‚РєРѕРµ РѕРїРёСЃР°РЅРёРµ РЅСѓР¶РЅС‹С… СЂР°Р±РѕС‚, РЅРµСЃРєРѕР»СЊРєРѕ С„РѕС‚РѕРіСЂР°С„РёР№ С‚РµРєСѓС‰РµРіРѕ СЃРѕСЃС‚РѕСЏРЅРёСЏ, Р¶РµР»Р°РµРјС‹Рµ СЃСЂРѕРєРё Рё РёРЅС„РѕСЂРјР°С†РёСЋ Рѕ С‚РѕРј, РєСѓРїР»РµРЅС‹ Р»Рё РјР°С‚РµСЂРёР°Р»С‹ РёР»Рё РЅСѓР¶РЅР° РїРѕРјРѕС‰СЊ СЃ РёС… РІС‹Р±РѕСЂРѕРј.",
    contactPhone: "РўРµР»РµС„РѕРЅ:", contactCompany: "РљРѕРјРїР°РЅРёСЏ:", contactRegion: "Р РµРіРёРѕРЅ:", contactLanguages: "РЇР·С‹РєРё СЃРІСЏР·Рё:", finland: "Р¤РёРЅР»СЏРЅРґРёСЏ",
    labelName: "РРјСЏ", labelPhone: "РўРµР»РµС„РѕРЅ", labelCity: "Р“РѕСЂРѕРґ", labelExperience: "РћРїС‹С‚ Рё РЅР°РІС‹РєРё", labelContactLanguage: "РЈРґРѕР±РЅС‹Р№ СЏР·С‹Рє СЃРІСЏР·Рё",
    chooseLanguage: "Р’С‹Р±РµСЂРёС‚Рµ СЏР·С‹Рє", labelAddress: "РђРґСЂРµСЃ РѕР±СЉРµРєС‚Р°", labelTask: "РљР°РєРёРµ СЂР°Р±РѕС‚С‹ РЅСѓР¶РЅС‹", labelDate: "Р–РµР»Р°РµРјС‹Рµ СЃСЂРѕРєРё",
    sendRequest: "РћС‚РїСЂР°РІРёС‚СЊ Р°РЅРєРµС‚Сѓ", sendEmail: "РћС‚РїСЂР°РІРёС‚СЊ РїРѕ email", footerText: "РЎС‚СЂРѕРёС‚РµР»СЊРЅС‹Рµ Рё СЂРµРјРѕРЅС‚РЅС‹Рµ СЂР°Р±РѕС‚С‹ РІ Р¤РёРЅР»СЏРЅРґРёРё", footerRights: "В© 2026 AKTIIV24. Р’СЃРµ РїСЂР°РІР° Р·Р°С‰РёС‰РµРЅС‹.",
    trustEyebrow: "Доверие",
    trustTitle: "Почему выбирают AKTIIV24?",
    trust1: "25+ лет практического опыта в строительстве и ремонте",
    trust2: "Собственные инструменты и собственный транспорт",
    trust3: "Работы для частных клиентов, жилищных товариществ, компаний и подрядчиков",
    trust4: "Понятная коммуникация и согласованный процесс работы",
    trust5: "Возможность выполнять как мелкие исправления, так и более крупные ремонты",
    portfolioReal: "Выполненные объекты",
    portfolioVisual: "Иллюстративные изображения",
    portfolioRealNote: "Реальные фотографии объектов будут добавляться с разрешения клиентов.",
    areaEyebrow: "Регион работы",
    areaTitle: "Строительные и ремонтные работы в Уусимаа",
    areaText1: "AKTIIV24 обслуживает клиентов в Уусимаа и при необходимости в других регионах Финляндии. В рабочую зону входят Хельсинки, Эспоо, Вантаа, Нурмиярви, Туусула, Керава, Ярвенпяя и ближайшие районы.",
    areaText2: "Мы выполняем внутренние ремонты, работы с полами, ремонт саун, покраску, гипсокартонные и перегородочные работы, установку дверей и окон, а также ремонт и подготовку фасадов.",
    footerArea: "Регион работы: Уусимаа и другая Финляндия по договорённости",
    labelEmail: "Email",
    labelCityLocation: "Город / расположение объекта",
    labelPhotos: "Есть ли у вас фотографии объекта?",
    photosYes: "Да",
    photosNo: "Пока нет",
    labelMore: "Дополнительная информация",
    photoHint: "Фотографии можно также отправить напрямую на email: aktiiv24@gmail.com",
    privacyEyebrow: "Конфиденциальность",
    privacyTitle: "Конфиденциальность",
    privacyText: "Данные, отправленные через форму, используются только для связи и обработки запроса предложения. Данные не передаются третьим лицам без отдельной причины или разрешения клиента.",
    footerPhoneLabel: "Телефон:",
    footerEmailLabel: "Email:",
    footerBusinessLabel: "Y-tunnus:",
    mailtoMessage: "РћС‚РєСЂРѕРµС‚СЃСЏ РїРѕС‡С‚РѕРІР°СЏ РїСЂРѕРіСЂР°РјРјР°. РџСЂРѕРІРµСЂСЊС‚Рµ РґР°РЅРЅС‹Рµ Рё РїСЂРёР»РѕР¶РёС‚Рµ С„РѕС‚РѕРіСЂР°С„РёРё РїРµСЂРµРґ РѕС‚РїСЂР°РІРєРѕР№.",
    formThanks: "РЎРїР°СЃРёР±Рѕ! РџРѕР¶Р°Р»СѓР№СЃС‚Р°, СЃРІСЏР¶РёС‚РµСЃСЊ СЃ РЅР°РјРё РїРѕ С‚РµР»РµС„РѕРЅСѓ 041 749 1334 РёР»Рё email aktiiv24@gmail.com."
  }
};

const validLanguages = ["fi", "en", "et", "ru"];
let currentLanguage = localStorage.getItem("aktiiv24-language") || "fi";
if (!validLanguages.includes(currentLanguage)) currentLanguage = "fi";

const polishFallbackKeys = new Set([
  "faq4Q",
  "faq4A",
  "labelEmail",
  "labelAddress",
  "labelCityLocation",
  "labelTask",
  "labelPhotos",
  "photosYes",
  "photosNo",
  "labelMore",
  "photoHint",
  "footerPhoneLabel",
  "footerEmailLabel",
  "footerBusinessLabel",
  "footerArea"
]);

function applyLanguage(language) {
  const dictionary = translations[language] || translations.fi;
  document.documentElement.lang = language;
  document.title = dictionary.pageTitle;
  document.querySelector('meta[name="description"]')?.setAttribute("content", dictionary.metaDescription);
  document.querySelector('meta[property="og:title"]')?.setAttribute("content", dictionary.pageTitle);
  document.querySelector('meta[property="og:description"]')?.setAttribute("content", dictionary.ogDescription || dictionary.metaDescription);

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
      message.textContent = translations[currentLanguage].formThanks;
    }
    form.reset();
  });
});

document.querySelectorAll(".quote-form").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const languageSelect = form.querySelector('select[name="contact-language"]');
    const languageText = languageSelect?.selectedOptions?.[0]?.textContent?.trim() || data.get("contact-language") || "";
    const body = [
      `Nimi: ${data.get("client-name") || ""}`,
      `Puhelin: ${data.get("client-phone") || ""}`,
      `SГ¤hkГ¶posti: ${data.get("client-email") || ""}`,
      `Sopiva yhteydenottokieli: ${languageText}`,
      `Kaupunki / kohteen sijainti: ${data.get("city-location") || ""}`,
      `MinkГ¤laista tyГ¶tГ¤ tarvitset?: ${data.get("task") || ""}`,
      `Toivottu aikataulu: ${data.get("date") || ""}`,
      `Onko sinulla kuvia kohteesta?: ${data.get("photos") || ""}`,
      `LisГ¤tiedot: ${data.get("more") || ""}`
    ].join("\n");
    const subject = encodeURIComponent("TarjouspyyntГ¶ AKTIIV24-sivustolta");
    const mailto = `mailto:aktiiv24@gmail.com?subject=${subject}&body=${encodeURIComponent(body)}`;
    const message = form.querySelector(".form-message");
    if (message) {
      message.textContent = translations[currentLanguage].mailtoMessage || translations.fi.mailtoMessage;
    }
    window.location.href = mailto;
  });
});

window.addEventListener("scroll", () => {
  toTop?.classList.toggle("visible", window.scrollY > 600);
});

toTop?.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

applyLanguage(currentLanguage);



