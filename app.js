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
    pageTitle: "AKTiiV24 — rakennus- ja remonttityöt Suomessa",
    metaDescription: "AKTiiV24 tekee rakennus- ja remonttitöitä Suomessa ja Uudellamaalla. Sisäremontit, saunaremontit, lattiat, kipsilevytyöt, maalaus, purkutyöt ja julkisivutyöt.",
    ogDescription: "Rakennus- ja remonttityöt yksityisasiakkaille, taloyhtiöille, yrityksille ja urakoitsijoille. Palvelemme Uudellamaalla ja muualla Suomessa.",
    sendEmail: "Lähetä sähköpostilla",
    mailtoMessage: "Sähköpostiohjelma avataan. Tarkista tiedot ja liitä kuvat mukaan ennen lähettämistä.",
    formThanks: "Kiitos! Ota yhteyttä puhelimitse 041 749 1334 tai sähköpostilla aktiiv24@gmail.com."
  },
  en: {
    pageTitle: "AKTiiV24 — construction and renovation work in Finland",
    metaDescription: "AKTiiV24 provides construction and renovation work in Finland and Uusimaa: interior renovations, sauna renovations, floors, drywall work, painting, demolition and facade work.",
    ogDescription: "Construction and renovation work for private clients, housing companies, businesses and contractors. We serve Uusimaa and other areas in Finland.",
    navServices: "Services", navPortfolio: "Portfolio", navAbout: "About", navWork: "Work", navContacts: "Contacts",
    ctaRequest: "Send request", ctaPortfolio: "View services",
    heroEyebrow: "Construction + order + result",
    heroTitle: "AKTiiV24 — construction and renovation work in Finland",
    heroLead: "Construction and renovation work for private clients, housing companies, businesses and contractors. A clear workflow, tidy execution and a finished result on the agreed schedule.",
    statExperienceNumber: "25+ years", statExperience: "experience", statFinland: "work across Finland", statToolsNumber: "100 % own", statTools: "tools", statClients: "private and business clients",
    strongIntro: "AKTiiV24 carries out construction and renovation work with a clear process: agreed work, tidy execution and a finished result without unnecessary hassle. We serve private clients, housing companies, businesses and contractors across Finland.",
    aboutEyebrow: "Company", aboutTitle: "A construction company with a practical approach",
    aboutP1: "AKTiiV24 carries out construction and renovation work for private clients, housing companies, businesses and contractors. We work with interiors, facades, saunas, floors, walls, doors, windows and other construction tasks.",
    aboutP2: "Our approach is simple: understand the task, suggest a clear solution, do the work carefully and bring the site to a finished result.",
    aboutP3: "We value order, clear agreements and respect for the client’s property. For us, a good renovation means both a good result and a calm working process.",
    serviceArea: "We work in Uusimaa and, when needed, elsewhere in Finland: Helsinki, Espoo, Vantaa, Nurmijärvi, Tuusula, Kerava, Järvenpää and nearby areas.",
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
    whyEyebrow: "Why AKTiiV24", whyTitle: "Clear work without empty promises",
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
    b2bText: "AKTiiV24 can carry out individual construction and renovation stages for companies, contractors and property owners. We can join a project for a defined scope or as an additional resource on site.",
    b2b1: "interior renovation work;", b2b2: "demolition, drywall and framing;", b2b3: "floors, painting, saunas and facades;", b2b4: "hourly work or agreed scope.",
    workEyebrow: "Team", workTitle: "Work and cooperation", workLead: "If you have experience, tools, responsibility and the wish to do quality work, send us your details.",
    reviewsEyebrow: "Reviews", reviewsTitle: "Client reviews", reviewsLead: "Client feedback will be added to the website with client permission. You can ask for more information about earlier projects by contacting us.",
    faqTitle: "Frequently asked questions",
    faq1Q: "How quickly can the work start?", faq1A: "The start depends on the scope, location and schedule. Small jobs can often be arranged flexibly.",
    faq2Q: "Do you do small repair jobs?", faq2A: "Yes. We do both small repair and finishing jobs and larger renovation projects.",
    faq3Q: "Can I request an estimate based on photos?", faq3A: "Yes. Send photos, the site location and a short description of the needed work.",
    faq4Q: "Do you work only in Uusimaa?", faq4A: "The main work area is Uusimaa, but depending on the job we can also agree projects elsewhere in Finland.",
    faq5Q: "Do you work for companies and contractors?", faq5A: "Yes. We serve private clients, housing companies, businesses and contractors.",
    contactsEyebrow: "Contacts", contactsTitle: "Contact AKTiiV24",
    contactsLead: "Describe the work, attach photos of the site and tell us the preferred schedule. AKTiiV24 openly shows contact and registration details so clients know exactly who they are dealing with.",
    quoteEyebrow: "Quote request", quoteTitle: "What information do we need for a quote?", quoteText: "For a quick estimate, send us the site address or city, a short description of the needed work, a few photos of the current situation, your preferred schedule and whether the materials have already been purchased or you need help choosing them.",
    contactPhone: "Phone:", contactCompany: "Company:", contactRegion: "Region:", contactLanguages: "Contact languages:", finland: "Finland",
    labelName: "Name", labelPhone: "Phone", labelCity: "City", labelExperience: "Experience and skills", labelContactLanguage: "Preferred contact language",
    chooseLanguage: "Choose language", labelAddress: "Site address", labelTask: "What work is needed", labelDate: "Preferred schedule",
    sendRequest: "Send application", sendEmail: "Send by email", footerText: "Construction and renovation work in Finland", footerRights: "© 2026 AKTiiV24. All rights reserved.",
    mailtoMessage: "Your email app is opening. Check the details and attach photos before sending.",
    formThanks: "Thank you! Please contact us by phone at 041 749 1334 or by email at aktiiv24@gmail.com."
  },
  et: {
    pageTitle: "AKTiiV24 — ehitus- ja remonditööd Soomes",
    metaDescription: "AKTiiV24 teeb ehitus- ja remonditöid Soomes ja Uusimaal: siseremont, saunaremont, põrandad, kipsplaaditööd, värvimine, lammutustööd ja fassaaditööd.",
    ogDescription: "Ehitus- ja remonditööd eraklientidele, korteriühistutele, ettevõtetele ja alltöövõtjatele. Teenindame Uusimaal ja mujal Soomes.",
    navServices: "Teenused", navPortfolio: "Portfoolio", navAbout: "Meist", navWork: "Töö", navContacts: "Kontakt",
    ctaRequest: "Saada päring", ctaPortfolio: "Vaata teenuseid",
    heroEyebrow: "Ehitus + kord + tulemus",
    heroTitle: "AKTiiV24 — ehitus- ja remonditööd Soomes",
    heroLead: "Ehitus- ja remonditööd eraklientidele, korteriühistutele, ettevõtetele ja alltöövõtjatele. Selge tööprotsess, puhas teostus ja valmis tulemus kokkulepitud ajakavas.",
    statExperienceNumber: "25+ aastat", statExperience: "kogemust", statFinland: "tööd Soomes", statToolsNumber: "100 % oma", statTools: "tööriistad", statClients: "erakliendid ja ettevõtted",
    strongIntro: "AKTiiV24 teeb ehitus- ja remonditöid selge tööviisiga: kokkulepitud tööd, puhas teostus ja valmis tulemus ilma tarbetu segaduseta. Teenindame erakliente, korteriühistuid, ettevõtteid ja alltöövõtjaid eri piirkondades Soomes.",
    aboutEyebrow: "Ettevõte", aboutTitle: "Praktilise lähenemisega ehitusettevõte",
    aboutP1: "AKTiiV24 teeb ehitus- ja remonditöid eraklientidele, korteriühistutele, ettevõtetele ja alltöövõtjatele. Töötame siseruumide, fassaadide, saunade, põrandate, seinte, uste, akende ja muude ehitusülesannetega.",
    aboutP2: "Meie tööviis on selge: kõigepealt mõistame ülesannet, seejärel pakume toimiva lahenduse, teeme töö korralikult ja viime objekti valmis tulemuseni.",
    aboutP3: "Hindame korda, selgeid kokkuleppeid ja kliendi objekti austamist. Hea remont tähendab meie jaoks nii head tulemust kui ka rahulikku tööprotsessi.",
    serviceArea: "Töötame Uusimaal ja vajadusel mujal Soomes: Helsingi, Espoo, Vantaa, Nurmijärvi, Tuusula, Kerava, Järvenpää ja lähialad.",
    servicesEyebrow: "Teenused", servicesTitle: "Meie teenused", servicesLead: "Teeme laia valikut ehitus- ja remonditöid lammutusest lõppviimistluseni.",
    serviceInteriorTitle: "Siseremondid", serviceInteriorText: "Siseremont korterites, majades ja üksikutes ruumides: lammutus, karkassid, kipsplaaditööd, soojustus, pahteldus, värvimistööd, põrandad ja viimistlus.",
    serviceDemoTitle: "Lammutus", serviceDemoText: "Lammutustööd vanadele pindadele, vaheseintele, põrandatele, lagedele, ustele, liistudele, plaatidele ja muudele konstruktsioonidele puhtalt ja kontrollitult.",
    serviceDrywallTitle: "Seinad ja kipsplaat", serviceDrywallText: "Kipsplaaditööd, karkasside, vaheseinte ja kastide paigaldus, avade tugevdamine ning seinte ettevalmistus pahtelduseks ja värvimiseks.",
    servicePaintTitle: "Pahteldus ja värvimine", servicePaintText: "Värvimistööd, pindade pahteldus, lihvimine, kruntimine ning seinte ja lagede viimistlus. Puhas tulemus algab õigest eeltööst.",
    serviceFloorTitle: "Põrandad", serviceFloorText: "Põranda paigaldus: laminaat, vinüül, parkett, vineer, alusmaterjalid, liistud ja aluspinna ettevalmistus vastavalt objekti vajadustele.",
    serviceSaunaTitle: "Saunad", serviceSaunaText: "Saunaremont, saunade ehitus ja uuendamine: paneelid, lavad, laed, valgustus, viimistlus ja hoolikas paigaldus.",
    serviceFacadeTitle: "Fassaadid ja välistööd", serviceFacadeText: "Fassaaditööd, välisvoodri vahetus, värvimine, puitpindade ettevalmistus ja majade välisviimistlus kokkulepitud mahus.",
    serviceWetTitle: "Vannitoad ja märgruumid", serviceWetText: "Ettevalmistus- ja viimistlustööd, arvestades materjalide, aluspindade ja kasutuse nõudeid. Erialased etapid teeb vastav spetsialist.",
    servicePrepTitle: "Uksed, aknad ja ettevalmistus", servicePrepText: "Uste ja akende paigaldus, piirdeliistud, põrandaliistud ning väiksemad ettevalmistustööd järgmisteks ehitusetappideks.",
    whyEyebrow: "Miks AKTiiV24", whyTitle: "Selge töö ilma tühjade lubadusteta",
    why1Title: "Kord objektil", why1Text: "Töö korraldatakse nii, et järgmine etapp ei algaks segaduse parandamisega.",
    why2Title: "Selged kokkulepped", why2Text: "Töövorm, ajakava, maht ja materjalid arutatakse läbi enne töö algust.",
    why3Title: "Praktiline kogemus", why3Text: "Töötame erinevate ülesannetega alates ühest etapist kuni tervikliku remondini.",
    why4Title: "Eraklientidele ja B2B", why4Text: "Saame liituda objektiga tegijana või lisajõuna.",
    portfolioEyebrow: "Portfoolio", portfolioTitle: "Näited töövaldkondadest",
    portfolioLead: "Allolevad pildid illustreerivad teenusvaldkondi ja valmis töö stiili. Tegelike objektide fotod lisatakse klientide loal.",
    filterAll: "Kõik", filterInterior: "Siseruumid", filterSauna: "Saunad", filterFloor: "Põrandad", filterFacade: "Fassaadid",
    portfolio1: "Korteri remont", portfolio2: "Sauna uuendus", portfolio3: "Põranda paigaldus", portfolio4: "Seinte värvimine", portfolio5: "Maja fassaad", portfolio6: "Märgruum",
    processEyebrow: "Protsess", processTitle: "Nii töö edeneb",
    process1Title: "Kontakt", process1Text: "Saatke lühike töö kirjeldus, objekti fotod ja soovitud ajakava.",
    process2Title: "Hindamine", process2Text: "Vaatame töö läbi ja vajadusel lepime kokku objekti külastuse.",
    process3Title: "Pakkumine", process3Text: "Saate selge hinnangu töö sisule, ajakavale ja kuludele.",
    process4Title: "Teostus", process4Text: "Töö tehakse kokkulepitud plaani järgi, puhtalt ja praktiliselt.",
    process5Title: "Valmis tulemus", process5Text: "Vaatame tulemuse üle ja veendume, et kokkulepitud töö on tehtud.",
    process6Title: "Üleandmine", process6Text: "Kontrollime tulemuse ja anname objekti üle.",
    b2bTitle: "Koostöö ettevõtete ja alltöövõtjatega",
    b2bText: "AKTiiV24 saab teha eraldi ehitus- ja remondietappe ettevõtetele, alltöövõtjatele ja kinnisvaraomanikele. Saame liituda projektiga kindla töömahu tegijana või lisajõuna objektil.",
    b2b1: "siseremonditööd;", b2b2: "lammutus, kipsplaat ja karkassid;", b2b3: "põrandad, värvimine, saunad ja fassaadid;", b2b4: "tunnitöö või kokkulepitud maht.",
    workEyebrow: "Meeskond", workTitle: "Töö ja koostöö", workLead: "Kui teil on kogemust, tööriistad, vastutustunne ja soov teha kvaliteetset tööd, saatke meile oma andmed.",
    reviewsEyebrow: "Arvustused", reviewsTitle: "Klientide arvustused", reviewsLead: "Klientide tagasiside lisatakse veebilehele klientide loal. Varasemate tööde kohta saate küsida lisainfot meiega ühendust võttes.",
    faqTitle: "Korduma kippuvad küsimused",
    faq1Q: "Kas teete ainult suuri objekte?", faq1A: "Ei. Võime teha nii üksiku tööetapi kui ka suurema remondi. Kõik sõltub ülesandest, ajakavast ja saadavusest.",
    faq2Q: "Kas saab saata fotod esialgse hinnangu jaoks?", faq2A: "Jah. Fotod aitavad töömahtu kiiremini mõista ja esialgse vastuse anda.",
    faq3Q: "Kas töötate ettevõtetega?", faq3A: "Jah. Töötame eraklientide, ettevõtete, alltöövõtjate ja kinnisvaraomanikega.",
    faq4Q: "Kas saab tellida ainult ühe tööliigi?", faq4A: "Jah. Võite tellida eraldi töö: põrandad, värvimine, lammutus, uksed, saun, fassaad või muu konkreetne etapp.",
    faq5Q: "Kas ostate materjalid ise?", faq5A: "Materjalide ostmise viis lepitakse eraldi kokku. Võimalusi on mitu sõltuvalt objektist ja kokkuleppest.",
    faq6Q: "Millises piirkonnas te töötate?", faq6A: "Peamine tööpiirkond on Soome. Konkreetne objekt ja väljasõidu võimalus lepitakse eraldi kokku.",
    contactsEyebrow: "Kontakt", contactsTitle: "Võta ühendust AKTiiV24-ga",
    contactsLead: "Kirjeldage tööd, lisage objektist fotod ja märkige soovitud ajakava. AKTiiV24 näitab avalikult kontakt- ja registriandmeid, et kliendil oleks selge, kellega ta suhtleb.",
    quoteEyebrow: "Hinnapäring", quoteTitle: "Millist infot vajame pakkumise jaoks?", quoteText: "Kiire hinnangu jaoks saatke meile objekti aadress või linn, lühike kirjeldus vajalikust tööst, mõned fotod praegusest olukorrast, soovitud ajakava ning info, kas materjalid on juba ostetud või vajate abi nende valikul.",
    contactPhone: "Telefon:", contactCompany: "Ettevõte:", contactRegion: "Piirkond:", contactLanguages: "Suhtluskeeled:", finland: "Soome",
    labelName: "Nimi", labelPhone: "Telefon", labelCity: "Linn", labelExperience: "Kogemus ja oskused", labelContactLanguage: "Sobiv suhtluskeel",
    chooseLanguage: "Valige keel", labelAddress: "Objekti aadress", labelTask: "Milliseid töid on vaja", labelDate: "Soovitud ajakava",
    sendRequest: "Saada avaldus", sendEmail: "Saada e-postiga", footerText: "Ehitus- ja remonditööd Soomes", footerRights: "© 2026 AKTiiV24. Kõik õigused kaitstud.",
    mailtoMessage: "E-posti rakendus avaneb. Kontrollige andmed ja lisage fotod enne saatmist.",
    formThanks: "Aitäh! Palun võtke meiega ühendust telefonil 041 749 1334 või e-postil aktiiv24@gmail.com."
  },
  ru: {
    pageTitle: "AKTiiV24 — строительные и ремонтные работы в Финляндии",
    metaDescription: "AKTiiV24 выполняет строительные и ремонтные работы в Финляндии и Уусимаа: внутренние ремонты, сауны, полы, гипсокартон, покраска, демонтаж и фасады.",
    ogDescription: "Строительные и ремонтные работы для частных клиентов, жилищных товариществ, компаний и подрядчиков. Работаем в Уусимаа и других регионах Финляндии.",
    navServices: "Услуги", navPortfolio: "Портфолио", navAbout: "О нас", navWork: "Работа", navContacts: "Контакты",
    ctaRequest: "Оставить заявку", ctaPortfolio: "Посмотреть услуги",
    heroEyebrow: "Строительство + порядок + результат",
    heroTitle: "AKTiiV24 — строительные и ремонтные работы в Финляндии",
    heroLead: "Строительные и ремонтные работы для частных клиентов, жилищных товариществ, компаний и подрядчиков. Понятный процесс, аккуратное выполнение и готовый результат в согласованные сроки.",
    statExperienceNumber: "25+ лет", statExperience: "опыта", statFinland: "работа по Финляндии", statToolsNumber: "100 % свои", statTools: "инструменты", statClients: "частные и компании",
    strongIntro: "AKTiiV24 выполняет строительные и ремонтные работы с понятным подходом: согласованные задачи, аккуратное выполнение и готовый результат без лишней суеты. Мы работаем с частными клиентами, жилищными товариществами, компаниями и подрядчиками в разных регионах Финляндии.",
    aboutEyebrow: "О компании", aboutTitle: "Строительная компания с практическим подходом",
    aboutP1: "AKTiiV24 выполняет строительные и ремонтные работы для частных клиентов, жилищных товариществ, компаний и подрядчиков. Мы работаем с внутренними помещениями, фасадами, саунами, полами, стенами, дверями, окнами и другими строительными задачами.",
    aboutP2: "Наш подход простой: сначала понять задачу, затем предложить понятное решение, выполнить работу аккуратно и довести объект до результата.",
    aboutP3: "Мы ценим порядок, понятные договорённости и уважение к объекту клиента. Для нас хороший ремонт — это не только красивый результат, но и нормальный процесс работы.",
    serviceArea: "Работаем в Уусимаа и при необходимости в других регионах Финляндии: Хельсинки, Эспоо, Вантаа, Нурмиярви, Туусула, Керава, Ярвенпяя и ближайшие районы.",
    servicesEyebrow: "Услуги", servicesTitle: "Наши услуги", servicesLead: "Выполняем полный спектр строительных и ремонтных работ — от демонтажа до чистовой отделки.",
    serviceInteriorTitle: "Внутренние ремонтные работы", serviceInteriorText: "Внутренний ремонт квартир, домов и отдельных помещений: демонтаж, каркасы, гипсокартонные работы, утепление, шпаклёвка, покраска, полы и финишная отделка.",
    serviceDemoTitle: "Демонтаж", serviceDemoText: "Демонтажные работы для старых покрытий, перегородок, полов, потолков, дверей, плинтусов, плитки и других конструкций — аккуратно и контролируемо.",
    serviceDrywallTitle: "Стены и гипсокартон", serviceDrywallText: "Гипсокартонные работы, монтаж каркасов, перегородок и коробов, усиление проёмов и подготовка стен под шпаклёвку и покраску.",
    servicePaintTitle: "Шпаклёвка и покраска", servicePaintText: "Покрасочные работы, шпаклёвка, шлифовка, грунтовка и отделка стен и потолков. Чистый результат начинается с правильной подготовки.",
    serviceFloorTitle: "Полы", serviceFloorText: "Укладка полов: ламинат, винил, паркет, фанера, подложка, плинтусы и подготовка основания под требования объекта.",
    serviceSaunaTitle: "Сауны", serviceSaunaText: "Ремонт саун, строительство и обновление саун: панели, лавки, потолки, подсветка, отделка и аккуратная сборка.",
    serviceFacadeTitle: "Фасады и наружные работы", serviceFacadeText: "Фасадные работы, замена наружной обшивки, покраска, подготовка деревянных поверхностей и наружная отделка домов по согласованному объёму.",
    serviceWetTitle: "Ванные и влажные помещения", serviceWetText: "Подготовительные и отделочные работы с учётом требований к материалам, основаниям и эксплуатации. Специализированные этапы выполняются профильными специалистами.",
    servicePrepTitle: "Двери, окна и подготовка", servicePrepText: "Установка дверей и окон, откосов, наличников, плинтусов и небольшие подготовительные работы для следующих этапов строительства.",
    whyEyebrow: "Почему AKTiiV24", whyTitle: "Понятная работа без лишних обещаний",
    why1Title: "Порядок на объекте", why1Text: "Работа организуется так, чтобы следующий этап не начинался с исправления хаоса.",
    why2Title: "Чёткие договорённости", why2Text: "Формат, сроки, объём и материалы обсуждаются до начала работ.",
    why3Title: "Практический опыт", why3Text: "Работаем с разными задачами: от отдельного этапа до комплексного ремонта.",
    why4Title: "Для частных и B2B", why4Text: "Можем подключаться к объекту как исполнитель или дополнительный ресурс.",
    portfolioEyebrow: "Портфолио", portfolioTitle: "Примеры направлений работ",
    portfolioLead: "Изображения ниже показывают направления услуг и стиль готового результата. Реальные фотографии объектов будут добавляться с разрешения клиентов.",
    filterAll: "Все", filterInterior: "Интерьер", filterSauna: "Сауны", filterFloor: "Полы", filterFacade: "Фасады",
    portfolio1: "Ремонт квартиры", portfolio2: "Обновление сауны", portfolio3: "Укладка пола", portfolio4: "Покраска стен", portfolio5: "Фасад дома", portfolio6: "Влажное помещение",
    processEyebrow: "Процесс", processTitle: "Как проходит работа",
    process1Title: "Связь", process1Text: "Отправьте краткое описание работы, фотографии объекта и желаемые сроки.",
    process2Title: "Оценка", process2Text: "Мы разбираем задачу и при необходимости согласуем осмотр объекта.",
    process3Title: "Предложение", process3Text: "Вы получаете понятную оценку содержания работ, сроков и стоимости.",
    process4Title: "Выполнение", process4Text: "Работа выполняется по согласованному плану, аккуратно и практично.",
    process5Title: "Готовый результат", process5Text: "Мы проверяем результат и убеждаемся, что согласованная работа выполнена.",
    process6Title: "Завершение", process6Text: "Проверяем результат и передаём объект.",
    b2bTitle: "Сотрудничество с компаниями и подрядчиками",
    b2bText: "AKTiiV24 готова выполнять отдельные этапы строительных и ремонтных работ для компаний, подрядчиков и владельцев объектов. Мы можем подключаться к проекту как исполнитель на конкретный объём работ или как дополнительный ресурс на объекте.",
    b2b1: "внутренние ремонтные работы;", b2b2: "демонтаж, гипсокартон, каркасы;", b2b3: "полы, покраска, сауны и фасады;", b2b4: "почасовая работа или согласованный объём.",
    workEyebrow: "Команда", workTitle: "Работа и сотрудничество", workLead: "Если у вас есть опыт, инструменты, ответственность и желание работать качественно — отправьте информацию о себе.",
    reviewsEyebrow: "Отзывы", reviewsTitle: "Отзывы клиентов", reviewsLead: "Отзывы клиентов будут добавлены на сайт с разрешения клиентов. Вы можете запросить дополнительную информацию о прошлых объектах, связавшись с нами.",
    faqTitle: "Частые вопросы",
    faq1Q: "Вы работаете только с большими объектами?", faq1A: "Нет. Мы можем выполнить как отдельный этап работ, так и более крупный ремонт. Всё зависит от задачи, сроков и доступности.",
    faq2Q: "Можно ли отправить фотографии объекта для предварительной оценки?", faq2A: "Да. Фотографии помогают быстрее понять объём работ и подготовить предварительный ответ.",
    faq3Q: "Вы работаете с компаниями?", faq3A: "Да. Возможна работа с частными клиентами, компаниями, подрядчиками и владельцами недвижимости.",
    faq4Q: "Можно ли заказать только один вид работ?", faq4A: "Да. Можно заказать отдельную работу: полы, покраску, демонтаж, двери, сауну, фасад или другой конкретный этап.",
    faq5Q: "Вы сами покупаете материалы?", faq5A: "Формат закупки материалов обсуждается отдельно. Возможны разные варианты в зависимости от объекта и договорённости.",
    faq6Q: "В каком регионе вы работаете?", faq6A: "Основной регион работы — Финляндия. Конкретный объект и возможность выезда обсуждаются отдельно.",
    contactsEyebrow: "Контакты", contactsTitle: "Связаться с AKTiiV24",
    contactsLead: "Опишите задачу, приложите фотографии объекта и укажите желаемые сроки. AKTiiV24 открыто указывает контактные и регистрационные данные, чтобы клиенту было понятно, с кем он связывается.",
    quoteEyebrow: "Запрос предложения", quoteTitle: "Какая информация нужна для оценки?", quoteText: "Для быстрой оценки отправьте адрес объекта или город, краткое описание нужных работ, несколько фотографий текущего состояния, желаемые сроки и информацию о том, куплены ли материалы или нужна помощь с их выбором.",
    contactPhone: "Телефон:", contactCompany: "Компания:", contactRegion: "Регион:", contactLanguages: "Языки связи:", finland: "Финляндия",
    labelName: "Имя", labelPhone: "Телефон", labelCity: "Город", labelExperience: "Опыт и навыки", labelContactLanguage: "Удобный язык связи",
    chooseLanguage: "Выберите язык", labelAddress: "Адрес объекта", labelTask: "Какие работы нужны", labelDate: "Желаемые сроки",
    sendRequest: "Отправить анкету", sendEmail: "Отправить по email", footerText: "Строительные и ремонтные работы в Финляндии", footerRights: "© 2026 AKTiiV24. Все права защищены.",
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
  document.title = dictionary.pageTitle;
  document.querySelector('meta[name="description"]')?.setAttribute("content", dictionary.metaDescription);
  document.querySelector('meta[property="og:title"]')?.setAttribute("content", dictionary.pageTitle);
  document.querySelector('meta[property="og:description"]')?.setAttribute("content", dictionary.ogDescription || dictionary.metaDescription);

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (dictionary[key]) element.textContent = dictionary[key];
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
    const body = [
      `Nimi: ${data.get("client-name") || ""}`,
      `Puhelin: ${data.get("client-phone") || ""}`,
      `Sähköposti: ${data.get("client-email") || ""}`,
      `Kaupunki: ${data.get("city-location") || ""}`,
      `Työn kuvaus: ${data.get("task") || ""}`,
      `Aikataulu: ${data.get("date") || ""}`,
      `Kuvat: ${data.get("photos") || ""}`,
      `Lisätiedot: ${data.get("more") || ""}`
    ].join("\n");
    const subject = encodeURIComponent("Tarjouspyyntö AKTiiV24-sivustolta");
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
