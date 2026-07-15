import type {
  Category,
  EtiquetteEntry,
  Locale,
  Platform,
  SeverityLevel,
  UiMessages,
} from "../domain/types";
import { entries, entryAliases } from "./etiquettes";

export { entries, entryAliases };

export const severityContent: Record<
  Locale,
  Record<SeverityLevel, { label: string; description: string }>
> = {
  en: {
    1: { label: "Light", description: "Usually a small social awkwardness, but an easy habit to improve." },
    2: { label: "Moderate", description: "May make someone uncomfortable or disturb their time and boundaries." },
    3: { label: "Important", description: "Can expose personal information or seriously affect someone’s comfort and trust." },
    4: { label: "Critical", description: "Can violate consent or privacy and may cause lasting personal or safety consequences." },
  },
  fr: {
    1: { label: "Légère", description: "Provoque surtout une petite gêne sociale, facile à éviter avec une meilleure habitude." },
    2: { label: "Modérée", description: "Peut mettre quelqu’un mal à l’aise ou empiéter sur son temps et ses limites." },
    3: { label: "Importante", description: "Peut exposer des informations personnelles ou affecter sérieusement le confort et la confiance." },
    4: { label: "Critique", description: "Peut enfreindre le consentement ou la vie privée et avoir des conséquences durables." },
  },
  "ar-TN": {
    1: { label: "خفيفة", description: "غالبًا تعمل إحراج اجتماعي صغير، وتنجم تتفاداها بسهولة بعادة خير." },
    2: { label: "متوسّطة", description: "تنجم تقلّق شخص ولا ما تحترمش وقتو وحدودو." },
    3: { label: "مهمّة", description: "تنجم تكشف معلومات شخصية ولا تأثّر بجدّية على راحة الشخص وثقتو." },
    4: { label: "حرجة", description: "تنجم تخرق الموافقة ولا الخصوصية وتعمل عواقب شخصية ولا أمنية تدوم." },
  },
};

export const categories: Category[] = [
  {
    id: "calls-voice",
    label: {
      en: "Calls & voice",
      fr: "Appels et audio",
      "ar-TN": "المكالمات والصوت",
    },
    description: {
      en: "Keep conversations private, clear, and comfortable.",
      fr: "Préserver la confidentialité et le confort des conversations.",
      "ar-TN": "خلّي المحادثات واضحة، مرتاحة وتحترم الخصوصية.",
    },
  },
  {
    id: "social-media",
    label: {
      en: "Social media",
      fr: "Réseaux sociaux",
      "ar-TN": "الشبكات الاجتماعية",
    },
    description: {
      en: "Navigate posts, reactions, and profiles thoughtfully.",
      fr: "Parcourir les publications, réactions et profils avec attention.",
      "ar-TN": "تصفّح المنشورات والتفاعلات والبروفيلات بانتباه.",
    },
  },
  {
    id: "privacy-audience",
    label: {
      en: "Privacy & audience",
      fr: "Confidentialité et audience",
      "ar-TN": "الخصوصية وشكون يشوف",
    },
    description: {
      en: "Notice who may see, hear, or receive what you share.",
      fr: "Savoir qui peut voir, entendre ou recevoir ce que vous partagez.",
      "ar-TN": "ردّ بالك شكون ينجم يشوف، يسمع ولا يوصله اللي تنشرو.",
    },
  },
  {
    id: "messaging-groups",
    label: {
      en: "Messaging & groups",
      fr: "Messagerie et groupes",
      "ar-TN": "الميساجات والقروبات",
    },
    description: {
      en: "Make chats easier to join, follow, and answer.",
      fr: "Rendre les discussions plus simples à rejoindre et à suivre.",
      "ar-TN": "خلّي المحادثات أسهل للدخول، المتابعة والجواب.",
    },
  },
];

export const platforms: Platform[] = [
  {
    id: "general",
    label: { en: "General", fr: "Général", "ar-TN": "عام" },
  },
  {
    id: "instagram",
    label: { en: "Instagram", fr: "Instagram", "ar-TN": "إنستغرام" },
  },
  {
    id: "facebook",
    label: { en: "Facebook", fr: "Facebook", "ar-TN": "فيسبوك" },
  },
  {
    id: "messenger",
    label: { en: "Messenger", fr: "Messenger", "ar-TN": "ماسنجر" },
  },
  {
    id: "whatsapp",
    label: { en: "WhatsApp", fr: "WhatsApp", "ar-TN": "واتساب" },
  },
];

export const ui: Record<Locale, UiMessages> = {
  en: {
    brandTagline: "A practical guide to digital courtesy",
    navHome: "Home",
    navBrowse: "Browse",
    languageLabel: "Language",
    heroEyebrow: "Small habits, better interactions",
    heroTitle: "Digital courtesy, clearly explained and easy to share.",
    heroBody:
      "Find a thoughtful explanation for everyday moments on calls, messaging apps, and social media.",
    searchLabel: "What situation are you looking for?",
    searchPlaceholder: "Try “speakerphone” or “public comment”",
    searchAction: "Search",
    browseAll: "Browse all etiquette",
    categorySectionTitle: "Browse by situation",
    categorySectionBody:
      "Start with the kind of interaction, then narrow by platform if needed.",
    featuredTitle: "Useful reminders",
    catalogEyebrow: "The catalog",
    catalogTitle: "Find the right reminder",
    catalogBody:
      "Search in everyday language or filter by situation and platform.",
    categoryFilter: "Situation",
    platformFilter: "Platform",
    allCategories: "All situations",
    allPlatforms: "All platforms",
    resultsLabel: "results",
    clearFilters: "Clear filters",
    noResultsTitle: "No close match yet",
    noResultsBody:
      "Try a shorter search or clear one of the filters to see more entries.",
    situationTitle: "The situation",
    whyTitle: "Why it matters",
    insteadTitle: "What to do instead",
    nuanceTitle: "A little context",
    severityTitle: "Potential impact",
    relatedTitle: "Related etiquette",
    copyLink: "Copy link",
    copied: "Link copied",
    share: "Share",
    shareIntro: "A useful Netiquette reminder",
    shareGuideTitle: "Pass on a kinder internet",
    shareGuideBody:
      "Share the whole guide with a friend, family member, or group before a small misunderstanding becomes an awkward one.",
    copyHomeLink: "Copy homepage link",
    qrTitle: "Open on another phone",
    qrBody: "Scan this code to open this exact reminder.",
    installApp: "Install app",
    installAppLabel: "Install Netiquette on this device",
    purposeEyebrow: "Why Netiquette",
    purposeTitle:
      "Digital social rules are real—even when nobody explained them.",
    purposeIntro:
      "Phones, platforms, and habits change quickly. Netiquette turns unwritten expectations into clear, practical guidance anyone can understand and share.",
    purposeExistsTitle: "Why it exists",
    purposeExistsBody:
      "To make invisible digital social codes easier to notice. The goal is fewer misunderstandings and more comfortable interactions for everyone.",
    purposeCreatedTitle: "Why it was created",
    purposeCreatedBody:
      "Small online habits can feel surprisingly personal. A calm, neutral page can explain one of them more clearly than an awkward correction in the moment.",
    purposeSentTitle: "Why you may receive a link",
    purposeSentBody:
      "Someone may have recognized a situation and wanted to share useful context without criticizing you directly. It is an invitation to understand, not a public verdict.",
    receivedTitle: "Why did someone send me this link?",
    receivedBody:
      "Most likely, they wanted to point to this specific digital habit without turning it into an uncomfortable or personal correction.",
    receivedNote:
      "It does not mean you are a bad or inconsiderate person. Online customs are learned, change over time, and are easy to miss. Read the advice, keep what is useful, and move forward.",
    backToCatalog: "Back to the catalog",
    footerContext:
      "Netiquette is a collection of shareable reminders for everyday digital life. Sometimes a link is easier to share than an awkward correction; the advice is here to inform, not to judge.",
    footerExploreTitle: "Explore",
    footerLanguagesTitle: "Languages",
    footerNote: "A small guide for kinder digital habits.",
    notFoundEyebrow: "Page not found",
    notFoundTitle: "This link does not match an etiquette entry.",
    notFoundBody:
      "The entry may have moved, or the address may contain a typo. Browse the catalog to find the closest topic.",
    chooseLanguage: "Choose your language",
    chooseLanguageBody:
      "We will normally use your browser preference. You can change language at any time.",
  },
  fr: {
    brandTagline: "Un guide pratique de courtoisie numérique",
    navHome: "Accueil",
    navBrowse: "Parcourir",
    languageLabel: "Langue",
    heroEyebrow: "De petites habitudes, de meilleurs échanges",
    heroTitle: "La courtoisie numérique, bien expliquée et facile à partager.",
    heroBody:
      "Trouvez une explication bienveillante pour les situations du quotidien sur les appels, les messageries et les réseaux sociaux.",
    searchLabel: "Quelle situation recherchez-vous ?",
    searchPlaceholder: "Essayez « haut-parleur » ou « commentaire public »",
    searchAction: "Rechercher",
    browseAll: "Voir toutes les règles",
    categorySectionTitle: "Parcourir par situation",
    categorySectionBody:
      "Commencez par le type d’interaction, puis filtrez par plateforme si nécessaire.",
    featuredTitle: "Rappels utiles",
    catalogEyebrow: "Le catalogue",
    catalogTitle: "Trouvez le bon rappel",
    catalogBody:
      "Recherchez avec des mots simples ou filtrez par situation et plateforme.",
    categoryFilter: "Situation",
    platformFilter: "Plateforme",
    allCategories: "Toutes les situations",
    allPlatforms: "Toutes les plateformes",
    resultsLabel: "résultats",
    clearFilters: "Effacer les filtres",
    noResultsTitle: "Aucun résultat proche pour le moment",
    noResultsBody:
      "Essayez une recherche plus courte ou retirez un filtre pour afficher plus de règles.",
    situationTitle: "La situation",
    whyTitle: "Pourquoi c’est important",
    insteadTitle: "Que faire à la place",
    nuanceTitle: "Un peu de contexte",
    severityTitle: "Impact possible",
    relatedTitle: "Règles associées",
    copyLink: "Copier le lien",
    copied: "Lien copié",
    share: "Partager",
    shareIntro: "Un rappel utile de Netiquette",
    shareGuideTitle: "Partagez un internet plus attentionné",
    shareGuideBody:
      "Transmettez le guide à un proche ou à un groupe avant qu’un petit malentendu ne devienne gênant.",
    copyHomeLink: "Copier le lien d’accueil",
    qrTitle: "Ouvrir sur un autre téléphone",
    qrBody: "Scannez ce code pour ouvrir exactement ce rappel.",
    installApp: "Installer l’app",
    installAppLabel: "Installer Netiquette sur cet appareil",
    purposeEyebrow: "Pourquoi Netiquette",
    purposeTitle:
      "Les codes sociaux numériques existent, même si personne ne vous les a expliqués.",
    purposeIntro:
      "Les téléphones, les plateformes et les habitudes évoluent vite. Netiquette transforme des attentes implicites en conseils clairs, pratiques et faciles à partager.",
    purposeExistsTitle: "Pourquoi ce site existe",
    purposeExistsBody:
      "Pour rendre les codes sociaux numériques invisibles plus faciles à repérer. L’objectif est de réduire les malentendus et de rendre les échanges plus agréables pour tout le monde.",
    purposeCreatedTitle: "Pourquoi il a été créé",
    purposeCreatedBody:
      "De petites habitudes en ligne peuvent devenir étonnamment personnelles. Une page calme et neutre explique parfois mieux une situation qu’une correction gênante sur le moment.",
    purposeSentTitle: "Pourquoi vous avez peut-être reçu un lien",
    purposeSentBody:
      "Une personne a peut-être reconnu une situation et souhaité partager un contexte utile sans vous critiquer directement. C’est une invitation à comprendre, pas un jugement public.",
    receivedTitle: "Pourquoi m’a-t-on envoyé ce lien ?",
    receivedBody:
      "La personne voulait probablement attirer votre attention sur cette habitude précise sans transformer le sujet en correction personnelle ou gênante.",
    receivedNote:
      "Cela ne signifie pas que vous êtes une mauvaise personne ou que vous manquez d’attention. Les usages numériques s’apprennent, évoluent et sont faciles à manquer. Gardez ce qui vous est utile et avancez sereinement.",
    backToCatalog: "Retour au catalogue",
    footerContext:
      "Netiquette rassemble des rappels partageables pour la vie numérique quotidienne. Un lien est parfois plus simple à transmettre qu’une correction gênante ; ces conseils sont là pour informer, pas pour juger.",
    footerExploreTitle: "Explorer",
    footerLanguagesTitle: "Langues",
    footerNote: "Un petit guide pour des habitudes numériques plus attentionnées.",
    notFoundEyebrow: "Page introuvable",
    notFoundTitle: "Ce lien ne correspond à aucune règle.",
    notFoundBody:
      "La page a peut-être été déplacée ou l’adresse contient une erreur. Parcourez le catalogue pour trouver le sujet le plus proche.",
    chooseLanguage: "Choisissez votre langue",
    chooseLanguageBody:
      "Nous utilisons normalement la préférence de votre navigateur. Vous pouvez changer de langue à tout moment.",
  },
  "ar-TN": {
    brandTagline: "دليل عملي للذوق في العالم الرقمي",
    navHome: "الرئيسية",
    navBrowse: "تصفّح",
    languageLabel: "اللغة",
    heroEyebrow: "عادات صغيرة، تعامل خير",
    heroTitle: "الذوق الرقمي، مفسّر بوضوح وسهل للمشاركة.",
    heroBody:
      "القى تفسير هادئ وعملي لمواقف يومية في المكالمات، الميساجات والشبكات الاجتماعية.",
    searchLabel: "على شنوة تلوّج؟",
    searchPlaceholder: "مثال: سبيكر ولا تعليق علني",
    searchAction: "لوّج",
    browseAll: "شوف القواعد الكل",
    categorySectionTitle: "تصفّح حسب الموقف",
    categorySectionBody:
      "ابدأ بنوع التعامل، وبعد اختار المنصّة كان يلزم.",
    featuredTitle: "تذكيرات تنفع",
    catalogEyebrow: "الدليل",
    catalogTitle: "القى التذكير المناسب",
    catalogBody: "لوّج بكلام عادي ولا اختار حسب الموقف والمنصّة.",
    categoryFilter: "الموقف",
    platformFilter: "المنصّة",
    allCategories: "المواقف الكل",
    allPlatforms: "المنصّات الكل",
    resultsLabel: "نتائج",
    clearFilters: "نحّي الفلاتر",
    noResultsTitle: "ما لقيناش نتيجة قريبة توّا",
    noResultsBody: "جرّب كلمة أقصر ولا نحّي فلتر باش تشوف قواعد أكثر.",
    situationTitle: "الموقف",
    whyTitle: "علاش هذا مهم",
    insteadTitle: "شنوة تعمل عوض هذا",
    nuanceTitle: "شوية توضيح",
    severityTitle: "التأثير الممكن",
    relatedTitle: "قواعد عندها علاقة",
    copyLink: "انسخ الرابط",
    copied: "الرابط تنسخ",
    share: "شارك",
    shareIntro: "تذكير ينفع من نتيكات",
    shareGuideTitle: "شارك إنترنت فيه ذوق أكثر",
    shareGuideBody:
      "شارك الدليل مع صاحب، فرد من العايلة ولا قروب قبل ما سوء تفاهم صغير يولي موقف محرج.",
    copyHomeLink: "انسخ رابط الرئيسية",
    qrTitle: "حلّ الصفحة في تليفون آخر",
    qrBody: "اعمل سكان للكود باش تحلّ نفس التذكير.",
    installApp: "ثبّت التطبيق",
    installAppLabel: "ثبّت نتيكات في الجهاز هذا",
    purposeEyebrow: "علاش نتيكات",
    purposeTitle:
      "قواعد التعامل الرقمي موجودة، حتى كان حدّ ما فسّرهالك.",
    purposeIntro:
      "التليفونات، المنصّات والعادات يتبدّلوا بسرعة. نتيكات يفسّر التوقّعات اللي عادة ما تتقالش، بنصيحة واضحة وعملية تنجم تتفهم وتتشارك.",
    purposeExistsTitle: "علاش الموقع موجود",
    purposeExistsBody:
      "باش يخلّي قواعد التعامل الرقمي اللي ما نشوفوهاش أسهل للفهم. الهدف سوء تفاهم أقلّ وتعامل أريح للناس الكل.",
    purposeCreatedTitle: "علاش تعمل",
    purposeCreatedBody:
      "عادات صغيرة على الإنترنت تنجم تولّي شخصية ومحرجة. صفحة هادئة ومحايدة تنجم تفسّر الموقف خير من ملاحظة ثقيلة في نفس اللحظة.",
    purposeSentTitle: "علاش يمكن وصلك رابط",
    purposeSentBody:
      "يمكن شخص عاش معاك موقف وحبّ يشارك تفسير ينفع من غير ما ينتقدك مباشرة. الرابط دعوة للفهم، موش حكم عليك قدّام الناس.",
    receivedTitle: "علاش شخص بعثلي الرابط هذا؟",
    receivedBody:
      "على الأغلب حبّ يلفت انتباهك للعادة الرقمية هاذي بالتحديد، من غير ما يحوّل الموضوع لملاحظة شخصية ولا موقف محرج.",
    receivedNote:
      "هذا ما يعنيش إنك شخص خايب ولا ما تراعيش غيرك. عادات الإنترنت نتعلّموها، تتبدّل مع الوقت وساهل ما نفيقوش بيها. خذ النصيحة اللي تنفعك وكمّل عادي.",
    backToCatalog: "ارجع للدليل",
    footerContext:
      "نتيكات يجمع تذكيرات تنجم تتشارك للحياة الرقمية اليومية. ساعات رابط يكون أسهل من ملاحظة محرجة؛ النصيحة هنا باش توضّح، موش باش تحكم على الناس.",
    footerExploreTitle: "اكتشف",
    footerLanguagesTitle: "اللغات",
    footerNote: "دليل صغير لعادات رقمية فيها ذوق أكثر.",
    notFoundEyebrow: "الصفحة موش موجودة",
    notFoundTitle: "الرابط هذا ما يوصّلش لقاعدة موجودة.",
    notFoundBody:
      "يمكن الصفحة تبدّلت ولا العنوان فيه غلطة. تصفّح الدليل والقى أقرب موضوع.",
    chooseLanguage: "اختار اللغة",
    chooseLanguageBody:
      "في العادة نستعملوا لغة المتصفّح متاعك، وتنجم تبدّل اللغة في أي وقت.",
  },
};

export function getEntryById(id: string): EtiquetteEntry | undefined {
  return entries.find((entry) => entry.id === id);
}

export function getEntryBySlug(slug: string): EtiquetteEntry | undefined {
  return entries.find(
    (entry) => entry.slug === slug || entry.aliases.includes(slug),
  );
}

export function getCategory(id: string): Category | undefined {
  return categories.find((category) => category.id === id);
}

export function getPlatform(id: string): Platform | undefined {
  return platforms.find((platform) => platform.id === id);
}
