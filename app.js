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
    metaDescription: "AKTiiV24 tekee rakennus- ja remonttitöitä Suomessa: kokonaisremontit, saunat, lattiat, seinät, julkisivut, purku ja viimeistely.",
    formThanks: "Kiitos! Lomake toimii tällä hetkellä esittelytilassa. Ota yhteyttä puhelimitse 041 749 1334 tai sähköpostilla aktiiv24@gmail.com."
  },
  en: {
    pageTitle: "AKTiiV24 — construction and renovation work in Finland",
    metaDescription: "AKTiiV24 provides construction and renovation work in Finland: full renovations, saunas, floors, walls, facades, demolition and finishing.",
    navServices: "Services", navPortfolio: "Portfolio", navAbout: "About", navWork: "Work", navContacts: "Contacts",
    ctaRequest: "Send request", ctaPortfolio: "View work",
    heroEyebrow: "Construction + order + result",
    heroTitle: "AKTiiV24 — construction and renovation work in Finland",
    heroLead: "Interior and exterior work, full renovations, saunas, floors, walls, facades and demanding construction tasks — done carefully, clearly and responsibly.",
    statExperience: "years of experience", statFinland: "work across Finland", statTools: "own tools", statClients: "private and business clients",
    aboutEyebrow: "Company", aboutTitle: "A construction company with a practical approach",
    aboutP1: "AKTiiV24 carries out construction and renovation work for private clients, companies and contractors. We work with interiors, facades, saunas, floors, walls, doors, windows and other construction tasks.",
    aboutP2: "Our approach is simple: understand the task, suggest a clear solution, do the work carefully and bring the site to a finished result.",
    aboutP3: "We value order, clear agreements and respect for the client’s property. For us, a good renovation means both a good result and a calm working process.",
    servicesEyebrow: "Services", servicesTitle: "Our services", servicesLead: "We provide a wide range of construction and renovation work, from demolition to final finishing.",
    serviceInteriorTitle: "Interior renovations", serviceInteriorText: "Renovation of apartments, houses and individual rooms: demolition, framing, drywall, insulation, filling, painting, floors and finishing.",
    serviceDemoTitle: "Demolition", serviceDemoText: "Careful removal of old surfaces, partitions, floors, ceilings, doors, skirting boards, tiles and other elements.",
    serviceDrywallTitle: "Walls and drywall", serviceDrywallText: "Installation of frames, partitions and boxes, strengthening openings, drywall installation and wall preparation for finishing.",
    servicePaintTitle: "Filling and painting", servicePaintText: "Surface preparation, sanding, priming and painting of walls and ceilings. A clean result starts with proper preparation.",
    serviceFloorTitle: "Floors", serviceFloorText: "Installation of laminate, vinyl, parquet, plywood, underlays and skirting boards, plus subfloor preparation.",
    serviceSaunaTitle: "Saunas", serviceSaunaText: "Construction, repair and renewal of saunas: panels, benches, ceilings, lighting, finishing and careful assembly.",
    serviceFacadeTitle: "Facades and exterior work", serviceFacadeText: "Facade renewal, exterior cladding replacement, painting, wooden surface preparation and exterior finishing of houses.",
    serviceWetTitle: "Bathrooms and wet rooms", serviceWetText: "Preparation and finishing work with attention to materials, substrates and use requirements. Specialist stages are handled by qualified professionals.",
    servicePrepTitle: "Doors, windows and preparation", servicePrepText: "Installation of doors, trims and skirting boards, plus small concrete and preparation work for the next construction stages.",
    whyEyebrow: "Why AKTiiV24", whyTitle: "Clear work without empty promises",
    why1Title: "Order on site", why1Text: "The work is organized so the next stage does not start by fixing disorder.",
    why2Title: "Clear agreements", why2Text: "Scope, schedule, work format and materials are discussed before work begins.",
    why3Title: "Practical experience", why3Text: "We handle many kinds of tasks, from a single stage to a complete renovation.",
    why4Title: "Private and B2B", why4Text: "We can join a project as the contractor or as an additional resource.",
    portfolioEyebrow: "Portfolio", portfolioTitle: "Examples of work areas",
    portfolioLead: "Generated visuals show the types of tasks and the intended style of the result. Real project photos can be added with client approval.",
    filterAll: "All", filterInterior: "Interior", filterSauna: "Saunas", filterFloor: "Floors", filterFacade: "Facades",
    portfolio1: "Apartment renovation", portfolio2: "Sauna renewal", portfolio3: "Floor installation", portfolio4: "Wall painting", portfolio5: "House facade", portfolio6: "Wet room",
    processEyebrow: "Process", processTitle: "How the work goes",
    process1Title: "Request", process1Text: "You send a description, address, desired timing and photos.",
    process2Title: "Details", process2Text: "We clarify the scope, materials, access and expectations.",
    process3Title: "Estimate", process3Text: "We prepare a preliminary estimate of timing and cost.",
    process4Title: "Agreement", process4Text: "We confirm the work format and the next step.",
    process5Title: "Execution", process5Text: "We work according to the agreed plan.",
    process6Title: "Completion", process6Text: "We check the result and hand over the site.",
    b2bTitle: "Cooperation with companies and contractors",
    b2bText: "AKTiiV24 can carry out individual construction and renovation stages for companies, contractors and property owners. We can join a project for a defined scope or as an additional resource on site.",
    b2b1: "interior renovation work;", b2b2: "demolition, drywall and framing;", b2b3: "floors, painting, saunas and facades;", b2b4: "hourly work or agreed scope.",
    workEyebrow: "Team", workTitle: "Work and cooperation", workLead: "If you have experience, tools, responsibility and the wish to do quality work, send us your details.",
    reviewsEyebrow: "Reviews", reviewsTitle: "Client reviews", reviewsLead: "We are gradually collecting reviews and examples of completed work so new clients can better understand our approach.",
    faqTitle: "Frequently asked questions",
    faq1Q: "Do you only work on large projects?", faq1A: "No. We can complete a single work stage or a larger renovation. It depends on the task, schedule and availability.",
    faq2Q: "Can I send photos for a preliminary estimate?", faq2A: "Yes. Photos help us understand the scope faster and prepare an initial answer.",
    faq3Q: "Do you work with companies?", faq3A: "Yes. We work with private clients, companies, contractors and property owners.",
    faq4Q: "Can I order only one type of work?", faq4A: "Yes. You can order floors, painting, demolition, doors, sauna work, facade work or another specific stage.",
    faq5Q: "Do you buy the materials yourselves?", faq5A: "Material purchasing is agreed separately. Different options are possible depending on the project and agreement.",
    faq6Q: "Which area do you work in?", faq6A: "Our main working area is Finland. The exact site and travel possibilities are discussed separately.",
    contactsEyebrow: "Contacts", contactsTitle: "Contact AKTiiV24",
    contactsLead: "Describe the work, attach photos of the site and tell us the preferred schedule. AKTiiV24 openly shows contact and registration details so clients know exactly who they are dealing with.",
    contactPhone: "Phone:", contactCompany: "Company:", contactRegion: "Region:", contactLanguages: "Contact languages:", finland: "Finland",
    labelName: "Name", labelPhone: "Phone", labelCity: "City", labelExperience: "Experience and skills", labelContactLanguage: "Preferred contact language",
    chooseLanguage: "Choose language", labelAddress: "Site address", labelTask: "What work is needed", labelDate: "Preferred schedule",
    sendRequest: "Send request", footerText: "Construction and renovation work in Finland", footerRights: "© 2026 AKTiiV24. All rights reserved.",
    formThanks: "Thank you! The form is currently in demo mode. Please contact us by phone at 041 749 1334 or by email at aktiiv24@gmail.com."
  },
  et: {
    pageTitle: "AKTiiV24 — ehitus- ja remonditööd Soomes",
    metaDescription: "AKTiiV24 teeb ehitus- ja remonditöid Soomes: täisremondid, saunad, põrandad, seinad, fassaadid, lammutus ja viimistlus.",
    navServices: "Teenused", navPortfolio: "Portfoolio", navAbout: "Meist", navWork: "Töö", navContacts: "Kontakt",
    ctaRequest: "Saada päring", ctaPortfolio: "Vaata töid",
    heroEyebrow: "Ehitus + kord + tulemus",
    heroTitle: "AKTiiV24 — ehitus- ja remonditööd Soomes",
    heroLead: "Sise- ja välistööd, täisremondid, saunad, põrandad, seinad, fassaadid ja erinevad ehitustööd — hoolikalt, selgelt ja vastutustundlikult.",
    statExperience: "aastat kogemust", statFinland: "tööd Soomes", statTools: "oma tööriistad", statClients: "erakliendid ja ettevõtted",
    aboutEyebrow: "Ettevõte", aboutTitle: "Praktilise lähenemisega ehitusettevõte",
    aboutP1: "AKTiiV24 teeb ehitus- ja remonditöid eraklientidele, ettevõtetele ja alltöövõtjatele. Töötame siseruumide, fassaadide, saunade, põrandate, seinte, uste, akende ja muude ehitusülesannetega.",
    aboutP2: "Meie tööviis on selge: kõigepealt mõistame ülesannet, seejärel pakume toimiva lahenduse, teeme töö korralikult ja viime objekti valmis tulemuseni.",
    aboutP3: "Hindame korda, selgeid kokkuleppeid ja kliendi objekti austamist. Hea remont tähendab meie jaoks nii head tulemust kui ka rahulikku tööprotsessi.",
    servicesEyebrow: "Teenused", servicesTitle: "Meie teenused", servicesLead: "Teeme laia valikut ehitus- ja remonditöid lammutusest lõppviimistluseni.",
    serviceInteriorTitle: "Siseremondid", serviceInteriorText: "Korterite, majade ja üksikute ruumide remont: lammutus, karkassid, kipsplaat, soojustus, pahteldus, värvimine, põrandad ja viimistlus.",
    serviceDemoTitle: "Lammutus", serviceDemoText: "Vanade pindade, vaheseinte, põrandate, lagede, uste, liistude, plaatide ja muude elementide korralik lammutus.",
    serviceDrywallTitle: "Seinad ja kipsplaat", serviceDrywallText: "Karkasside, vaheseinte ja kastide paigaldus, avade tugevdamine, kipsplaat ja seinte ettevalmistus viimistluseks.",
    servicePaintTitle: "Pahteldus ja värvimine", servicePaintText: "Pindade ettevalmistus, lihvimine, kruntimine ning seinte ja lagede värvimine. Puhas tulemus algab õigest eeltööst.",
    serviceFloorTitle: "Põrandad", serviceFloorText: "Laminaadi, vinüüli, parketi, vineeri, alusmaterjalide ja liistude paigaldus ning aluspinna ettevalmistus.",
    serviceSaunaTitle: "Saunad", serviceSaunaText: "Saunade ehitus, remont ja uuendamine: paneelid, lavad, laed, valgustus, viimistlus ja hoolikas paigaldus.",
    serviceFacadeTitle: "Fassaadid ja välistööd", serviceFacadeText: "Fassaadide uuendamine, välisvoodri vahetus, värvimine, puitpindade ettevalmistus ja majade välisviimistlus.",
    serviceWetTitle: "Vannitoad ja märgruumid", serviceWetText: "Ettevalmistus- ja viimistlustööd, arvestades materjalide, aluspindade ja kasutuse nõudeid. Erialased etapid teeb vastav spetsialist.",
    servicePrepTitle: "Uksed, aknad ja ettevalmistus", servicePrepText: "Uste, piirdeliistude ja põrandaliistude paigaldus ning väiksemad betooni- ja ettevalmistustööd järgmisteks ehitusetappideks.",
    whyEyebrow: "Miks AKTiiV24", whyTitle: "Selge töö ilma tühjade lubadusteta",
    why1Title: "Kord objektil", why1Text: "Töö korraldatakse nii, et järgmine etapp ei algaks segaduse parandamisega.",
    why2Title: "Selged kokkulepped", why2Text: "Töövorm, ajakava, maht ja materjalid arutatakse läbi enne töö algust.",
    why3Title: "Praktiline kogemus", why3Text: "Töötame erinevate ülesannetega alates ühest etapist kuni tervikliku remondini.",
    why4Title: "Eraklientidele ja B2B", why4Text: "Saame liituda objektiga tegijana või lisajõuna.",
    portfolioEyebrow: "Portfoolio", portfolioTitle: "Näited töövaldkondadest",
    portfolioLead: "Genereeritud visuaalid näitavad töö tüüpe ja soovitud tulemuse stiili. Päris fotod saab lisada klientide nõusolekul.",
    filterAll: "Kõik", filterInterior: "Siseruumid", filterSauna: "Saunad", filterFloor: "Põrandad", filterFacade: "Fassaadid",
    portfolio1: "Korteri remont", portfolio2: "Sauna uuendus", portfolio3: "Põranda paigaldus", portfolio4: "Seinte värvimine", portfolio5: "Maja fassaad", portfolio6: "Märgruum",
    processEyebrow: "Protsess", processTitle: "Kuidas töö kulgeb",
    process1Title: "Päring", process1Text: "Saadate kirjelduse, aadressi, soovitud aja ja fotod.",
    process2Title: "Täpsustused", process2Text: "Täpsustame töömahu, materjalid, ligipääsu ja ootused.",
    process3Title: "Hinnang", process3Text: "Koostame esialgse aja- ja kuluhinnangu.",
    process4Title: "Kokkulepe", process4Text: "Lepime kokku töövormi ja järgmise sammu.",
    process5Title: "Töö teostus", process5Text: "Töötame kokkulepitud plaani järgi.",
    process6Title: "Üleandmine", process6Text: "Kontrollime tulemuse ja anname objekti üle.",
    b2bTitle: "Koostöö ettevõtete ja alltöövõtjatega",
    b2bText: "AKTiiV24 saab teha eraldi ehitus- ja remondietappe ettevõtetele, alltöövõtjatele ja kinnisvaraomanikele. Saame liituda projektiga kindla töömahu tegijana või lisajõuna objektil.",
    b2b1: "siseremonditööd;", b2b2: "lammutus, kipsplaat ja karkassid;", b2b3: "põrandad, värvimine, saunad ja fassaadid;", b2b4: "tunnitöö või kokkulepitud maht.",
    workEyebrow: "Meeskond", workTitle: "Töö ja koostöö", workLead: "Kui teil on kogemust, tööriistad, vastutustunne ja soov teha kvaliteetset tööd, saatke meile oma andmed.",
    reviewsEyebrow: "Arvustused", reviewsTitle: "Klientide arvustused", reviewsLead: "Kogume järk-järgult arvustusi ja näiteid tehtud töödest, et uued kliendid saaksid meie lähenemisest paremini aru.",
    faqTitle: "Korduma kippuvad küsimused",
    faq1Q: "Kas teete ainult suuri objekte?", faq1A: "Ei. Võime teha nii üksiku tööetapi kui ka suurema remondi. Kõik sõltub ülesandest, ajakavast ja saadavusest.",
    faq2Q: "Kas saab saata fotod esialgse hinnangu jaoks?", faq2A: "Jah. Fotod aitavad töömahtu kiiremini mõista ja esialgse vastuse anda.",
    faq3Q: "Kas töötate ettevõtetega?", faq3A: "Jah. Töötame eraklientide, ettevõtete, alltöövõtjate ja kinnisvaraomanikega.",
    faq4Q: "Kas saab tellida ainult ühe tööliigi?", faq4A: "Jah. Võite tellida eraldi töö: põrandad, värvimine, lammutus, uksed, saun, fassaad või muu konkreetne etapp.",
    faq5Q: "Kas ostate materjalid ise?", faq5A: "Materjalide ostmise viis lepitakse eraldi kokku. Võimalusi on mitu sõltuvalt objektist ja kokkuleppest.",
    faq6Q: "Millises piirkonnas te töötate?", faq6A: "Peamine tööpiirkond on Soome. Konkreetne objekt ja väljasõidu võimalus lepitakse eraldi kokku.",
    contactsEyebrow: "Kontakt", contactsTitle: "Võta ühendust AKTiiV24-ga",
    contactsLead: "Kirjeldage tööd, lisage objektist fotod ja märkige soovitud ajakava. AKTiiV24 näitab avalikult kontakt- ja registriandmeid, et kliendil oleks selge, kellega ta suhtleb.",
    contactPhone: "Telefon:", contactCompany: "Ettevõte:", contactRegion: "Piirkond:", contactLanguages: "Suhtluskeeled:", finland: "Soome",
    labelName: "Nimi", labelPhone: "Telefon", labelCity: "Linn", labelExperience: "Kogemus ja oskused", labelContactLanguage: "Sobiv suhtluskeel",
    chooseLanguage: "Valige keel", labelAddress: "Objekti aadress", labelTask: "Milliseid töid on vaja", labelDate: "Soovitud ajakava",
    sendRequest: "Saada päring", footerText: "Ehitus- ja remonditööd Soomes", footerRights: "© 2026 AKTiiV24. Kõik õigused kaitstud.",
    formThanks: "Aitäh! Vorm töötab praegu demorežiimis. Palun võtke meiega ühendust telefonil 041 749 1334 või e-postil aktiiv24@gmail.com."
  },
  ru: {
    pageTitle: "AKTiiV24 — строительные и ремонтные работы в Финляндии",
    metaDescription: "AKTiiV24 выполняет строительные и ремонтные работы в Финляндии: ремонт под ключ, сауны, полы, стены, фасады, демонтаж и отделка.",
    navServices: "Услуги", navPortfolio: "Портфолио", navAbout: "О нас", navWork: "Работа", navContacts: "Контакты",
    ctaRequest: "Оставить заявку", ctaPortfolio: "Посмотреть работы",
    heroEyebrow: "Строительство + порядок + результат",
    heroTitle: "AKTiiV24 — строительные и ремонтные работы в Финляндии",
    heroLead: "Внутренние и наружные работы, ремонт под ключ, сауны, полы, стены, фасады и строительные задачи любой сложности — аккуратно, понятно и с ответственностью.",
    statExperience: "лет опыта", statFinland: "работа по Финляндии", statTools: "свои инструменты", statClients: "частные и компании",
    aboutEyebrow: "О компании", aboutTitle: "Строительная компания с практическим подходом",
    aboutP1: "AKTiiV24 выполняет строительные и ремонтные работы для частных клиентов, компаний и подрядчиков. Мы работаем с внутренними помещениями, фасадами, саунами, полами, стенами, дверями, окнами и другими строительными задачами.",
    aboutP2: "Наш подход простой: сначала понять задачу, затем предложить понятное решение, выполнить работу аккуратно и довести объект до результата.",
    aboutP3: "Мы ценим порядок, понятные договорённости и уважение к объекту клиента. Для нас хороший ремонт — это не только красивый результат, но и нормальный процесс работы.",
    servicesEyebrow: "Услуги", servicesTitle: "Наши услуги", servicesLead: "Выполняем полный спектр строительных и ремонтных работ — от демонтажа до чистовой отделки.",
    serviceInteriorTitle: "Внутренние ремонтные работы", serviceInteriorText: "Комплексный ремонт квартир, домов и отдельных помещений: демонтаж, каркасы, гипсокартон, утепление, шпаклёвка, покраска, полы и финишная отделка.",
    serviceDemoTitle: "Демонтаж", serviceDemoText: "Аккуратный демонтаж старых покрытий, перегородок, полов, потолков, дверей, плинтусов, плитки и других элементов.",
    serviceDrywallTitle: "Стены и гипсокартон", serviceDrywallText: "Монтаж каркасов, перегородок, коробов, усиление проёмов, установка гипсокартона и подготовка стен под отделку.",
    servicePaintTitle: "Шпаклёвка и покраска", servicePaintText: "Подготовка поверхностей, шлифовка, грунтовка и покраска стен и потолков. Чистый результат начинается с правильной подготовки.",
    serviceFloorTitle: "Полы", serviceFloorText: "Укладка ламината, винила, паркета, фанеры, подложки, плинтусов и подготовка основания.",
    serviceSaunaTitle: "Сауны", serviceSaunaText: "Строительство, ремонт и обновление саун: панели, лавки, потолки, подсветка, отделка и аккуратная сборка.",
    serviceFacadeTitle: "Фасады и наружные работы", serviceFacadeText: "Обновление фасадов, замена наружной вагонки, покраска, подготовка деревянных поверхностей и наружная отделка домов.",
    serviceWetTitle: "Ванные и влажные помещения", serviceWetText: "Подготовительные и отделочные работы с учётом требований к материалам, основаниям и эксплуатации. Специализированные этапы выполняются профильными специалистами.",
    servicePrepTitle: "Двери, окна и подготовка", servicePrepText: "Установка дверей, откосов, плинтусов, небольшие бетонные и подготовительные работы для следующих этапов строительства.",
    whyEyebrow: "Почему AKTiiV24", whyTitle: "Понятная работа без лишних обещаний",
    why1Title: "Порядок на объекте", why1Text: "Работа организуется так, чтобы следующий этап не начинался с исправления хаоса.",
    why2Title: "Чёткие договорённости", why2Text: "Формат, сроки, объём и материалы обсуждаются до начала работ.",
    why3Title: "Практический опыт", why3Text: "Работаем с разными задачами: от отдельного этапа до комплексного ремонта.",
    why4Title: "Для частных и B2B", why4Text: "Можем подключаться к объекту как исполнитель или дополнительный ресурс.",
    portfolioEyebrow: "Портфолио", portfolioTitle: "Примеры направлений работ",
    portfolioLead: "Сгенерированные визуализации показывают типы задач и стиль результата. Реальные фотографии работ можно добавить после согласования с клиентами.",
    filterAll: "Все", filterInterior: "Интерьер", filterSauna: "Сауны", filterFloor: "Полы", filterFacade: "Фасады",
    portfolio1: "Ремонт квартиры", portfolio2: "Обновление сауны", portfolio3: "Укладка пола", portfolio4: "Покраска стен", portfolio5: "Фасад дома", portfolio6: "Влажное помещение",
    processEyebrow: "Процесс", processTitle: "Как проходит работа",
    process1Title: "Заявка", process1Text: "Вы отправляете описание, адрес, сроки и фотографии.",
    process2Title: "Детали", process2Text: "Уточняем объём, материалы, доступ и ожидания.",
    process3Title: "Оценка", process3Text: "Формируем предварительную оценку сроков и стоимости.",
    process4Title: "Договорённость", process4Text: "Фиксируем формат работы и следующий шаг.",
    process5Title: "Выполнение", process5Text: "Работаем по согласованному плану.",
    process6Title: "Завершение", process6Text: "Проверяем результат и передаём объект.",
    b2bTitle: "Сотрудничество с компаниями и подрядчиками",
    b2bText: "AKTiiV24 готова выполнять отдельные этапы строительных и ремонтных работ для компаний, подрядчиков и владельцев объектов. Мы можем подключаться к проекту как исполнитель на конкретный объём работ или как дополнительный ресурс на объекте.",
    b2b1: "внутренние ремонтные работы;", b2b2: "демонтаж, гипсокартон, каркасы;", b2b3: "полы, покраска, сауны и фасады;", b2b4: "почасовая работа или согласованный объём.",
    workEyebrow: "Команда", workTitle: "Работа и сотрудничество", workLead: "Если у вас есть опыт, инструменты, ответственность и желание работать качественно — отправьте информацию о себе.",
    reviewsEyebrow: "Отзывы", reviewsTitle: "Отзывы клиентов", reviewsLead: "Мы постепенно собираем отзывы и примеры выполненных работ, чтобы новые клиенты могли лучше оценить наш подход.",
    faqTitle: "Частые вопросы",
    faq1Q: "Вы работаете только с большими объектами?", faq1A: "Нет. Мы можем выполнить как отдельный этап работ, так и более крупный ремонт. Всё зависит от задачи, сроков и доступности.",
    faq2Q: "Можно ли отправить фотографии объекта для предварительной оценки?", faq2A: "Да. Фотографии помогают быстрее понять объём работ и подготовить предварительный ответ.",
    faq3Q: "Вы работаете с компаниями?", faq3A: "Да. Возможна работа с частными клиентами, компаниями, подрядчиками и владельцами недвижимости.",
    faq4Q: "Можно ли заказать только один вид работ?", faq4A: "Да. Можно заказать отдельную работу: полы, покраску, демонтаж, двери, сауну, фасад или другой конкретный этап.",
    faq5Q: "Вы сами покупаете материалы?", faq5A: "Формат закупки материалов обсуждается отдельно. Возможны разные варианты в зависимости от объекта и договорённости.",
    faq6Q: "В каком регионе вы работаете?", faq6A: "Основной регион работы — Финляндия. Конкретный объект и возможность выезда обсуждаются отдельно.",
    contactsEyebrow: "Контакты", contactsTitle: "Связаться с AKTiiV24",
    contactsLead: "Опишите задачу, приложите фотографии объекта и укажите желаемые сроки. AKTiiV24 открыто указывает контактные и регистрационные данные, чтобы клиенту было понятно, с кем он связывается.",
    contactPhone: "Телефон:", contactCompany: "Компания:", contactRegion: "Регион:", contactLanguages: "Языки связи:", finland: "Финляндия",
    labelName: "Имя", labelPhone: "Телефон", labelCity: "Город", labelExperience: "Опыт и навыки", labelContactLanguage: "Удобный язык связи",
    chooseLanguage: "Выберите язык", labelAddress: "Адрес объекта", labelTask: "Какие работы нужны", labelDate: "Желаемые сроки",
    sendRequest: "Отправить заявку", footerText: "Строительные и ремонтные работы в Финляндии", footerRights: "© 2026 AKTiiV24. Все права защищены.",
    formThanks: "Спасибо! Сейчас форма работает в демонстрационном режиме. Пожалуйста, свяжитесь с нами по телефону 041 749 1334 или email aktiiv24@gmail.com."
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
  document.querySelector('meta[property="og:description"]')?.setAttribute("content", dictionary.metaDescription);

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

window.addEventListener("scroll", () => {
  toTop?.classList.toggle("visible", window.scrollY > 600);
});

toTop?.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

applyLanguage(currentLanguage);
