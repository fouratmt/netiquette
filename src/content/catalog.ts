import type {
  Category,
  EtiquetteEntry,
  Locale,
  Platform,
  UiMessages,
} from "../domain/types";

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

export const entries: EtiquetteEntry[] = [
  {
    id: "speakerphone-consent",
    slug: "speakerphone-consent",
    category: "calls-voice",
    platforms: ["general"],
    related: ["structured-voice-notes", "ask-before-group-add"],
    translations: {
      en: {
        title: "Ask before using speakerphone",
        takeaway:
          "Tell the other person and get their agreement before putting a call on speaker.",
        situation:
          "You want to free your hands, make the call easier to hear, or let someone nearby join the conversation.",
        whyItMatters:
          "The caller may reasonably believe that only you can hear them. Turning on speaker without warning can expose private information or include other listeners without the caller’s consent.",
        whatToDo:
          "Say why you would like to use speakerphone, mention who else is present, and wait for the caller to agree. If they are uncomfortable, use headphones or keep the call private.",
        nuance:
          "In an emergency or accessibility-related situation, explain the change as soon as it is safe and practical.",
        tags: ["speakerphone", "call", "privacy", "consent", "speaker"],
      },
      fr: {
        title: "Demandez avant d’activer le haut-parleur",
        takeaway:
          "Prévenez votre interlocuteur et obtenez son accord avant de mettre l’appel sur haut-parleur.",
        situation:
          "Vous souhaitez libérer vos mains, mieux entendre l’appel ou faire participer une personne présente près de vous.",
        whyItMatters:
          "Votre interlocuteur peut légitimement penser que vous êtes la seule personne à l’entendre. Activer le haut-parleur sans prévenir peut révéler des informations privées ou inclure d’autres personnes sans son accord.",
        whatToDo:
          "Expliquez pourquoi vous souhaitez utiliser le haut-parleur, précisez qui est présent et attendez son accord. Si la personne n’est pas à l’aise, utilisez des écouteurs ou gardez l’appel privé.",
        nuance:
          "En cas d’urgence ou de besoin d’accessibilité, expliquez le changement dès que cela devient possible et sans danger.",
        tags: [
          "haut-parleur",
          "appel",
          "confidentialité",
          "accord",
          "téléphone",
        ],
      },
      "ar-TN": {
        title: "استأذن قبل ما تحطّ المكالمة على السبيكر",
        takeaway:
          "قبل ما تحطّ التليفون على السبيكر، علّم الشخص اللي معاك واستنّى موافقتو.",
        situation:
          "تحب تخلّي يديك فارغين، تسمع المكالمة خير، ولا تخلّي شخص موجود بحذاك يشارك في الحديث.",
        whyItMatters:
          "الشخص اللي يحكي معاك ينجم يتوقّع اللي إنت وحدك تسمع فيه. كي تحطّ السبيكر من غير ما تعلّمو، معلومات خاصة تنجم تتسمع وناس آخرين ينجموا يدخلوا في الحديث من غير موافقتو.",
        whatToDo:
          "قلّو علاش تحب تستعمل السبيكر، عرّفو شكون موجود معاك، واستنّى موافقتو. كان موش مرتاح، استعمل السماعات ولا خلّي المكالمة خاصة.",
        nuance:
          "في حالة استعجالية ولا لحاجة متعلّقة بتسهيل الاستعمال، فسّر التغيير أوّل ما يولي هذا آمن وممكن.",
        tags: ["سبيكر", "مكالمة", "تليفون", "خصوصية", "موافقة"],
      },
    },
  },
  {
    id: "old-post-reactions",
    slug: "old-post-reactions",
    category: "social-media",
    platforms: ["instagram", "facebook"],
    related: ["public-comment-audience"],
    translations: {
      en: {
        title: "Browse older posts with care",
        takeaway:
          "Before reacting to an older post, pause and make sure the interaction is intentional.",
        situation:
          "You are looking through someone’s older photos or posts on a social-media profile.",
        whyItMatters:
          "An unexpected reaction on a post from years ago can reveal how far you have browsed and may make the other person feel watched. Viewing public posts is not inherently wrong, but an accidental signal can create awkwardness.",
        whatToDo:
          "Scroll with a little space from the reaction buttons. If you react by accident, remove it calmly; there is usually no need for a long explanation.",
        nuance:
          "If you genuinely appreciate an older post and know the person would welcome it, an intentional reaction is not automatically rude.",
        tags: ["old photo", "old post", "like", "reaction", "profile"],
      },
      fr: {
        title: "Parcourez les anciennes publications avec attention",
        takeaway:
          "Avant de réagir à une ancienne publication, vérifiez que votre geste est bien intentionnel.",
        situation:
          "Vous parcourez d’anciennes photos ou publications sur le profil social d’une personne.",
        whyItMatters:
          "Une réaction inattendue sur une publication vieille de plusieurs années peut montrer jusqu’où vous avez parcouru le profil et mettre la personne mal à l’aise. Consulter du contenu public n’est pas un problème en soi, mais un signal accidentel peut créer un moment gênant.",
        whatToDo:
          "Faites défiler la page en gardant un peu de distance avec les boutons de réaction. En cas de réaction accidentelle, retirez-la calmement ; une longue explication est rarement nécessaire.",
        nuance:
          "Si une ancienne publication vous plaît réellement et que vous savez que la personne appréciera votre réaction, ce geste intentionnel n’est pas forcément impoli.",
        tags: [
          "ancienne photo",
          "ancienne publication",
          "j’aime",
          "réaction",
          "profil",
        ],
      },
      "ar-TN": {
        title: "ردّ بالك وإنت تتفرّج في المنشورات القديمة",
        takeaway:
          "قبل ما تعمل تفاعل على منشور قديم، توقّف لحظة وتأكّد اللي التفاعل مقصود.",
        situation:
          "قاعد تتفرّج في تصاور ولا منشورات قديمة في بروفيل شخص على شبكة اجتماعية.",
        whyItMatters:
          "تفاعل مفاجئ على منشور عندو سنين ينجم يبيّن قداش رجعت في البروفيل ويخلّي الشخص يحسّ روحو مراقَب. التفرّج في منشورات علنية موش غالط بحدّ ذاتو، أمّا تفاعل بالغلط ينجم يعمل إحراج.",
        whatToDo:
          "كي تعمل سكرول، خلّي صبعك بعيد شوية على أزرار التفاعل. كان عملت تفاعل بالغلط، نحّيه بهدوء؛ في العادة ما يلزمش تفسير طويل.",
        nuance:
          "كان المنشور القديم عجبك بالحق وتعرف اللي الشخص يفرح بالتفاعل، التفاعل المقصود موش بالضرورة قلّة ذوق.",
        tags: ["تصويرة قديمة", "منشور قديم", "لايك", "تفاعل", "بروفيل"],
      },
    },
  },
  {
    id: "public-comment-audience",
    slug: "public-comment-audience",
    category: "privacy-audience",
    platforms: ["facebook", "instagram"],
    related: ["old-post-reactions"],
    translations: {
      en: {
        title: "Remember who may see a public comment",
        takeaway:
          "Write public comments as if people beyond the immediate conversation may read them.",
        situation:
          "You are commenting on a public post, page, reel, or discussion thread.",
        whyItMatters:
          "Public interactions may be visible to the author’s audience, your own contacts, or people who discover the post later. A comment that feels like a private exchange can travel much further than expected.",
        whatToDo:
          "Before posting, ask whether you would be comfortable saying the same thing in a public room. Move personal details, sensitive jokes, or private disagreements to a direct conversation.",
        nuance:
          "Visibility varies by platform, account settings, and future product changes. Treating a public post as public remains the safest assumption.",
        tags: ["public comment", "audience", "visibility", "friends", "privacy"],
      },
      fr: {
        title: "Pensez au public qui peut voir votre commentaire",
        takeaway:
          "Rédigez un commentaire public en gardant à l’esprit que d’autres personnes peuvent le lire.",
        situation:
          "Vous commentez une publication, une page, une vidéo ou une discussion publique.",
        whyItMatters:
          "Une interaction publique peut être visible par l’audience de l’auteur, vos propres contacts ou des personnes qui découvriront la publication plus tard. Un commentaire qui ressemble à un échange privé peut circuler bien plus loin que prévu.",
        whatToDo:
          "Avant de publier, demandez-vous si vous diriez la même chose dans un lieu public. Déplacez les informations personnelles, les plaisanteries sensibles et les désaccords privés vers une conversation directe.",
        nuance:
          "La visibilité dépend de la plateforme, des réglages du compte et de futures évolutions. Considérer une publication publique comme réellement publique reste l’hypothèse la plus prudente.",
        tags: [
          "commentaire public",
          "audience",
          "visibilité",
          "amis",
          "confidentialité",
        ],
      },
      "ar-TN": {
        title: "تذكّر شكون ينجم يشوف تعليقك العلني",
        takeaway:
          "اكتب التعليق العلني على أساس اللي ناس خارج الحديث ينجموا يقراوه.",
        situation:
          "باش تعلّق على منشور، صفحة، فيديو ولا نقاش مفتوح للعموم.",
        whyItMatters:
          "التفاعل العلني ينجم يبان لجمهور صاحب المنشور، لصحابك، ولا لناس يلقاو المنشور بعد مدة. تعليق يبان كيما حديث خاص ينجم يوصل لأكثر ناس ملي تتوقّع.",
        whatToDo:
          "قبل ما تنشر، اسأل روحك كان تنجم تقول نفس الكلام في بلاصة فيها ناس. التفاصيل الشخصية، التبهنيس الحساس، والخلافات الخاصة خير في حديث مباشر.",
        nuance:
          "شكون يشوف يتبدّل حسب المنصّة، إعدادات الحساب، وتغييرات الخدمة. الأسلم إنّك تعتبر أي منشور علني ظاهر للعموم.",
        tags: ["تعليق علني", "جمهور", "ظهور", "صحاب", "خصوصية"],
      },
    },
  },
  {
    id: "ask-before-group-add",
    slug: "ask-before-group-add",
    category: "messaging-groups",
    platforms: ["whatsapp", "messenger"],
    related: ["structured-voice-notes", "speakerphone-consent"],
    translations: {
      en: {
        title: "Ask before adding someone to a group chat",
        takeaway:
          "Send a private invitation before placing someone in a new group conversation.",
        situation:
          "You are creating a family, work, event, neighborhood, or interest-based group chat.",
        whyItMatters:
          "Joining a group can expose profile information, create notifications, and introduce an ongoing social obligation. The person may not know the members or may prefer not to join.",
        whatToDo:
          "Message the person privately, explain the group’s purpose and who is in it, then wait for a clear yes before adding them. Respect a refusal without asking for a justification.",
        nuance:
          "For established teams with an agreed onboarding process, prior consent may already be part of that process. Still explain what the group is for.",
        tags: ["group chat", "add", "invitation", "consent", "notifications"],
      },
      fr: {
        title: "Demandez avant d’ajouter quelqu’un à un groupe",
        takeaway:
          "Envoyez une invitation privée avant d’ajouter une personne à une nouvelle discussion de groupe.",
        situation:
          "Vous créez un groupe familial, professionnel, événementiel, de voisinage ou autour d’un intérêt commun.",
        whyItMatters:
          "Rejoindre un groupe peut exposer des informations de profil, déclencher des notifications et créer une obligation sociale durable. La personne peut ne pas connaître les membres ou simplement préférer ne pas participer.",
        whatToDo:
          "Contactez la personne en privé, expliquez l’objectif du groupe et qui en fait partie, puis attendez un oui clair avant de l’ajouter. Respectez un refus sans exiger d’explication.",
        nuance:
          "Dans une équipe disposant déjà d’un processus d’intégration accepté, l’accord peut faire partie de ce processus. Expliquez tout de même l’utilité du groupe.",
        tags: ["groupe", "ajouter", "invitation", "accord", "notifications"],
      },
      "ar-TN": {
        title: "استأذن قبل ما تزيد شخص لقروب",
        takeaway:
          "ابعث دعوة في الخاص قبل ما تزيد شخص لمحادثة جماعية جديدة.",
        situation:
          "باش تعمل قروب للعائلة، للخدمة، لمناسبة، للجيران ولا لاهتمام مشترك.",
        whyItMatters:
          "الدخول لقروب ينجم يكشف معلومات من البروفيل، يبعث برشة إشعارات، ويعمل التزام اجتماعي متواصل. الشخص يمكن ما يعرفش الموجودين ولا ما يحبّش يدخل.",
        whatToDo:
          "ابعثلو في الخاص، فسّرلو علاش القروب موجود وشكون فيه، واستنّى موافقة واضحة قبل ما تزيدو. كان قال لا، احترم قراره من غير ما تطلب تفسير.",
        nuance:
          "في فريق عندو طريقة متّفق عليها لإضافة الأعضاء، الموافقة تنجم تكون داخلة في الطريقة هاذي. رغم هذا، فسّر ديما دور القروب.",
        tags: ["قروب", "إضافة", "دعوة", "موافقة", "إشعارات"],
      },
    },
  },
  {
    id: "structured-voice-notes",
    slug: "structured-voice-notes",
    category: "messaging-groups",
    platforms: ["whatsapp", "messenger"],
    related: ["ask-before-group-add", "speakerphone-consent"],
    translations: {
      en: {
        title: "Give voice notes a little structure",
        takeaway:
          "State the topic early, stay focused, and put essential details in text when useful.",
        situation:
          "You want to send spoken information instead of typing a message.",
        whyItMatters:
          "Voice notes cannot always be played in public or quiet places, and they are harder to scan for one important detail. A long, unstructured recording asks more time and attention from the recipient.",
        whatToDo:
          "Begin with the topic, keep the recording focused, and write down details the person may need to retrieve later, such as an address or time. For a long discussion, ask whether a call would be easier.",
        nuance:
          "Voice notes can be valuable for accessibility, expression, or languages that are harder to type. The considerate format depends on what works for both people.",
        tags: ["voice note", "audio message", "length", "address", "time"],
      },
      fr: {
        title: "Structurez un peu vos messages vocaux",
        takeaway:
          "Annoncez rapidement le sujet, restez concis et écrivez les informations essentielles quand c’est utile.",
        situation:
          "Vous souhaitez transmettre une information à l’oral plutôt que de taper un message.",
        whyItMatters:
          "Un message vocal ne peut pas toujours être écouté dans un lieu public ou calme, et il est difficile d’y retrouver rapidement un détail. Un long enregistrement sans structure demande davantage de temps et d’attention.",
        whatToDo:
          "Commencez par annoncer le sujet, restez centré sur l’essentiel et écrivez les informations à retrouver plus tard, comme une adresse ou une heure. Pour une longue discussion, demandez si un appel serait plus simple.",
        nuance:
          "Les messages vocaux peuvent faciliter l’accessibilité, l’expression ou l’usage d’une langue difficile à taper. Le format attentionné dépend de ce qui convient aux deux personnes.",
        tags: [
          "message vocal",
          "audio",
          "durée",
          "adresse",
          "heure",
        ],
      },
      "ar-TN": {
        title: "رتّب شوية الميساجات الصوتية متاعك",
        takeaway:
          "قول الموضوع من اللول، ركّز في كلامك، واكتب المعلومات المهمّة وقت يلزم.",
        situation:
          "تحب تبعث معلومة بالصوت عوض ما تكتب ميساج.",
        whyItMatters:
          "الميساج الصوتي موش ديما ينجم يتسمع في بلاصة عامة ولا هادئة، وصعيب تلقى فيه معلومة واحدة بسرعة. تسجيل طويل ومن غير ترتيب يطلب وقت وتركيز أكثر من الشخص الآخر.",
        whatToDo:
          "ابدأ بالموضوع، خلّي التسجيل مركّز، واكتب التفاصيل اللي الشخص ينجم يحتاج يرجعلها، كيما عنوان ولا توقيت. كان الحديث باش يطوّل، اسأل كان مكالمة أسهل.",
        nuance:
          "الميساجات الصوتية تنجم تعاون في سهولة الاستعمال، في التعبير، ولا في لغة صعيبة في الكتابة. المهم تختاروا طريقة تناسب الزوز.",
        tags: ["ميساج صوتي", "أوديو", "مدّة", "عنوان", "توقيت"],
      },
    },
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
    relatedTitle: "Related etiquette",
    copyLink: "Copy link",
    copied: "Link copied",
    share: "Share",
    shareIntro: "A useful Netiquette reminder",
    backToCatalog: "Back to the catalog",
    footerContext:
      "Netiquette is a collection of shareable reminders for everyday digital life. Sometimes a link is easier to share than an awkward correction; the advice is here to inform, not to judge.",
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
    relatedTitle: "Règles associées",
    copyLink: "Copier le lien",
    copied: "Lien copié",
    share: "Partager",
    shareIntro: "Un rappel utile de Netiquette",
    backToCatalog: "Retour au catalogue",
    footerContext:
      "Netiquette rassemble des rappels partageables pour la vie numérique quotidienne. Un lien est parfois plus simple à transmettre qu’une correction gênante ; ces conseils sont là pour informer, pas pour juger.",
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
    relatedTitle: "قواعد عندها علاقة",
    copyLink: "انسخ الرابط",
    copied: "الرابط تنسخ",
    share: "شارك",
    shareIntro: "تذكير ينفع من نتيكات",
    backToCatalog: "ارجع للدليل",
    footerContext:
      "نتيكات يجمع تذكيرات تنجم تتشارك للحياة الرقمية اليومية. ساعات رابط يكون أسهل من ملاحظة محرجة؛ النصيحة هنا باش توضّح، موش باش تحكم على الناس.",
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
  return entries.find((entry) => entry.slug === slug);
}

export function getCategory(id: string): Category | undefined {
  return categories.find((category) => category.id === id);
}

export function getPlatform(id: string): Platform | undefined {
  return platforms.find((platform) => platform.id === id);
}
