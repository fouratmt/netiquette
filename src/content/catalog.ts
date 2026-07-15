import type {
  Category,
  EtiquetteEntry,
  Locale,
  Platform,
  SeverityLevel,
  UiMessages,
} from "../domain/types";

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

export const entries: EtiquetteEntry[] = [
  {
    id: "speakerphone-consent",
    slug: "speakerphone-consent",
    category: "calls-voice",
    platforms: ["general"],
    severity: 3,
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
    severity: 1,
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
    severity: 2,
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
    severity: 3,
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
    severity: 1,
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
  {
    id: "ask-before-video-call",
    slug: "ask-before-video-call",
    category: "calls-voice",
    platforms: ["general", "messenger", "whatsapp"],
    severity: 2,
    related: ["ask-if-now-is-a-good-time", "speakerphone-consent"],
    translations: {
      en: {
        title: "Ask before starting a video call",
        takeaway:
          "Send a short message first instead of turning an ordinary conversation into an unexpected video call.",
        situation:
          "You would like to see the other person, show them something live, or move a text conversation to video.",
        whyItMatters:
          "A video call asks someone to be camera-ready and may reveal their home, workplace, or people around them. Even when they can talk, they may not be comfortable appearing on camera.",
        whatToDo:
          "Ask whether video works for them and wait for an answer. If the matter is urgent, explain that briefly and offer an audio call or message as an alternative.",
        nuance:
          "Close friends and families may have their own habits. A quick check is still useful whenever you are unsure.",
        tags: ["video call", "camera", "facetime", "warning", "privacy"],
      },
      fr: {
        title: "Demandez avant de lancer un appel vidéo",
        takeaway:
          "Envoyez d’abord un court message au lieu de transformer une conversation ordinaire en appel vidéo surprise.",
        situation:
          "Vous souhaitez voir la personne, lui montrer quelque chose en direct ou passer d’une discussion écrite à la vidéo.",
        whyItMatters:
          "Un appel vidéo demande à la personne d’être prête à apparaître à l’écran et peut dévoiler son domicile, son travail ou les gens autour d’elle. Même disponible pour parler, elle peut ne pas vouloir être filmée.",
        whatToDo:
          "Demandez si la vidéo lui convient et attendez sa réponse. Si la situation est urgente, dites-le brièvement et proposez un appel audio ou un message comme alternative.",
        nuance:
          "Les proches peuvent avoir leurs propres habitudes. Une vérification rapide reste utile dès que vous avez un doute.",
        tags: ["appel vidéo", "caméra", "visio", "prévenir", "vie privée"],
      },
      "ar-TN": {
        title: "استأذن قبل ما تبدأ مكالمة فيديو",
        takeaway:
          "ابعث ميساج صغير قبل، عوض ما تبدّل حديث عادي لمكالمة فيديو مفاجئة.",
        situation:
          "تحب تشوف الشخص، تورّيه حاجة مباشرة، ولا تبدّل حديث بالكتابة لفيديو.",
        whyItMatters:
          "مكالمة الفيديو تطلب من الشخص يكون حاضر قدّام الكاميرا، وتنجم تبيّن دارو، خدمتو ولا الناس اللي بحذاه. حتى كان ينجم يحكي، يمكن ما يحبّش يظهر في الفيديو.",
        whatToDo:
          "اسأل كان الفيديو يناسبو واستنّى جوابه. كان الموضوع مستعجل، فسّر هذا باختصار واقترح مكالمة بالصوت ولا ميساج كحلّ آخر.",
        nuance:
          "الصحاب والعايلة ينجم تكون عندهم عاداتهم. سؤال صغير يبقى مفيد وقت اللي تكون موش متأكّد.",
        tags: ["مكالمة فيديو", "كاميرا", "فيديو", "استئذان", "خصوصية"],
      },
    },
  },
  {
    id: "give-people-time-to-reply",
    slug: "give-people-time-to-reply",
    category: "messaging-groups",
    platforms: ["messenger", "whatsapp"],
    severity: 2,
    related: ["structured-voice-notes", "ask-if-now-is-a-good-time"],
    translations: {
      en: {
        title: "Give people time to reply",
        takeaway:
          "Avoid repeated question marks or follow-up calls when a non-urgent message has not been answered yet.",
        situation:
          "Your message was delivered or read, but the other person has not replied as quickly as you expected.",
        whyItMatters:
          "Read receipts do not mean someone has the time, privacy, or energy to respond. Repeated prompts can turn an ordinary delay into pressure.",
        whatToDo:
          "Allow a reasonable amount of time. If there is a real deadline, send one calm follow-up that explains when you need an answer and why.",
        nuance:
          "Urgent safety or time-sensitive situations are different. Say clearly that the matter is urgent instead of relying on repeated notifications.",
        tags: ["reply", "read receipt", "seen", "follow-up", "pressure"],
      },
      fr: {
        title: "Laissez aux autres le temps de répondre",
        takeaway:
          "Évitez les points d’interrogation répétés ou les appels de relance lorsqu’un message non urgent reste sans réponse.",
        situation:
          "Votre message a été reçu ou lu, mais la personne ne répond pas aussi vite que vous l’espériez.",
        whyItMatters:
          "Un accusé de lecture ne signifie pas que la personne a le temps, l’intimité ou l’énergie nécessaires pour répondre. Les relances répétées transforment facilement un délai normal en pression.",
        whatToDo:
          "Laissez un délai raisonnable. S’il existe une véritable échéance, envoyez une seule relance calme en précisant quand vous avez besoin d’une réponse et pourquoi.",
        nuance:
          "Les situations urgentes ou liées à la sécurité sont différentes. Dites clairement que c’est urgent plutôt que de multiplier les notifications.",
        tags: ["réponse", "message lu", "vu", "relance", "pression"],
      },
      "ar-TN": {
        title: "خلّي للناس وقت باش يجاوبوا",
        takeaway:
          "ما تكثّرش علامات الاستفهام ولا المكالمات كان ميساج موش مستعجل ما تجاوبش توّا.",
        situation:
          "الميساج وصل ولا تقرى، أمّا الشخص ما جاوبكش بالسرعة اللي كنت تستنّاها.",
        whyItMatters:
          "كون الميساج تقرى ما يعنيش اللي الشخص عندو الوقت، الخصوصية ولا الطاقة باش يجاوب. التذكير المتكرّر ينجم يحوّل تأخير عادي لضغط.",
        whatToDo:
          "استنّى وقت معقول. كان فمّا أجل صحيح، ابعث تذكير واحد وهادي وفسّر وقتاش يلزمك الجواب وعلاش.",
        nuance:
          "حالات الاستعجال والسلامة مختلفة. قول بوضوح اللي الموضوع مستعجل عوض ما تكثّر الإشعارات.",
        tags: ["جواب", "مقروء", "شاف", "تذكير", "ضغط"],
      },
    },
  },
  {
    id: "ask-before-sharing-screenshots",
    slug: "ask-before-sharing-screenshots",
    category: "privacy-audience",
    platforms: ["general", "messenger", "whatsapp"],
    severity: 4,
    related: ["public-comment-audience", "check-before-forwarding"],
    translations: {
      en: {
        title: "Ask before sharing a private screenshot",
        takeaway:
          "Treat screenshots of private conversations as private unless everyone involved agrees to share them.",
        situation:
          "A message is funny, surprising, or relevant to another conversation, and you want to send a screenshot to someone else.",
        whyItMatters:
          "A screenshot can expose names, photos, personal details, and words written for a limited audience. Removing it later does not remove copies that have already circulated.",
        whatToDo:
          "Ask the sender before sharing. When permission is not practical and the information genuinely needs to be discussed, paraphrase only what is necessary and remove identifying details.",
        nuance:
          "Seeking trusted help about harassment, threats, or safety may require preserving and sharing evidence. Limit it to people or services that can help.",
        tags: ["screenshot", "private chat", "consent", "forward", "privacy"],
      },
      fr: {
        title: "Demandez avant de partager une capture privée",
        takeaway:
          "Considérez les captures de conversations privées comme confidentielles tant que toutes les personnes concernées n’ont pas accepté leur partage.",
        situation:
          "Un message est drôle, surprenant ou utile dans une autre discussion, et vous souhaitez en envoyer une capture à quelqu’un.",
        whyItMatters:
          "Une capture peut révéler des noms, des photos, des détails personnels et des paroles destinées à un public limité. La supprimer plus tard n’efface pas les copies déjà diffusées.",
        whatToDo:
          "Demandez l’accord de l’auteur avant de partager. Si ce n’est pas possible et que l’information doit réellement être discutée, reformulez seulement le nécessaire et retirez les éléments identifiants.",
        nuance:
          "Demander de l’aide face au harcèlement, aux menaces ou à un danger peut nécessiter de conserver et transmettre des preuves. Limitez le partage aux personnes ou services capables d’aider.",
        tags: ["capture d’écran", "conversation privée", "accord", "transfert", "confidentialité"],
      },
      "ar-TN": {
        title: "استأذن قبل ما تشارك سكرين من حديث خاص",
        takeaway:
          "اعتبر تصاور المحادثات الخاصة سرّية، كان ما وافقوش الناس المعنيين على مشاركتها.",
        situation:
          "ميساج ضحّكك، فاجأك ولا عندو علاقة بحديث آخر، وحبّيت تبعث منّو سكرين لشخص آخر.",
        whyItMatters:
          "السكرين تنجم تبيّن أسامي، تصاور، تفاصيل شخصية وكلام تكتب لناس محدودين. كان تنحّيها من بعد، النسخ اللي دارت ما تتنحّاش.",
        whatToDo:
          "استأذن من صاحب الميساج قبل المشاركة. كان هذا موش ممكن والمعلومة يلزم بالحق تتحكى، لخّص كان الضروري ونحّي التفاصيل اللي تعرّف بالشخص.",
        nuance:
          "طلب المساعدة ضد التحرّش، التهديد ولا الخطر ينجم يستحقّ الاحتفاظ بالدليل ومشاركتو. اقتصر على الناس ولا الجهات اللي تنجم تعاون.",
        tags: ["سكرين", "حديث خاص", "موافقة", "مشاركة", "خصوصية"],
      },
    },
  },
  {
    id: "check-before-forwarding",
    slug: "check-before-forwarding",
    category: "privacy-audience",
    platforms: ["facebook", "messenger", "whatsapp"],
    severity: 3,
    related: ["public-comment-audience", "ask-before-sharing-screenshots"],
    translations: {
      en: {
        title: "Check information before forwarding it",
        takeaway:
          "Pause before forwarding alarming advice, offers, or news, especially when the original source is unclear.",
        situation:
          "You receive a message that feels important and encourages you to send it quickly to friends, family, or several groups.",
        whyItMatters:
          "False warnings and outdated advice often spread through people who mean well. Forwarding them can cause fear, expose people to scams, or bury reliable information.",
        whatToDo:
          "Look for the original source, date, and confirmation from a trustworthy organization. If you cannot verify it, do not forward it as fact.",
        nuance:
          "You can ask whether someone else has verified a claim, but make it clear that it is unconfirmed so the question is not mistaken for an endorsement.",
        tags: ["forward", "fake news", "source", "scam", "verification"],
      },
      fr: {
        title: "Vérifiez une information avant de la transférer",
        takeaway:
          "Faites une pause avant de transférer une alerte, une offre ou une actualité, surtout lorsque la source d’origine n’est pas claire.",
        situation:
          "Vous recevez un message qui semble important et vous encourage à l’envoyer rapidement à vos proches ou à plusieurs groupes.",
        whyItMatters:
          "Les fausses alertes et les conseils dépassés circulent souvent grâce à des personnes bien intentionnées. Ils peuvent inquiéter, exposer à des arnaques ou masquer les informations fiables.",
        whatToDo:
          "Cherchez la source d’origine, la date et une confirmation par un organisme fiable. Si vous ne pouvez pas vérifier l’information, ne la transférez pas comme un fait établi.",
        nuance:
          "Vous pouvez demander si quelqu’un a vérifié une affirmation, mais précisez clairement qu’elle n’est pas confirmée afin que la question ne ressemble pas à une approbation.",
        tags: ["transfert", "fausse information", "source", "arnaque", "vérification"],
      },
      "ar-TN": {
        title: "تثبّت من المعلومة قبل ما تبعثها لغيرك",
        takeaway:
          "توقّف شوية قبل ما تبعث تحذير، عرض ولا خبر، خاصة كان المصدر الأصلي موش واضح.",
        situation:
          "يوصلك ميساج يبان مهم ويطلب منك تبعثو بسرعة لصحابك، عايلتك ولا لبرشة قروبات.",
        whyItMatters:
          "التحذيرات الغالطة والنصائح القديمة يدوروا برشة على يد ناس نيّتهم باهية. ينجموا يعملوا خوف، يعرّضوا الناس للتحيّل ولا يغطّيو على المعلومة الصحيحة.",
        whatToDo:
          "لوّج على المصدر الأصلي، التاريخ وتأكيد من جهة موثوقة. كان ما نجّمتش تتثبّت، ما تبعثهاش كأنها حقيقة.",
        nuance:
          "تنجم تسأل كان شخص آخر تثبّت من الخبر، أمّا وضّح اللي هو موش مؤكّد باش سؤالك ما يتفهمش كموافقة.",
        tags: ["إعادة إرسال", "خبر غالط", "مصدر", "تحيّل", "تثبّت"],
      },
    },
  },
  {
    id: "keep-group-chats-on-topic",
    slug: "keep-group-chats-on-topic",
    category: "messaging-groups",
    platforms: ["messenger", "whatsapp"],
    severity: 1,
    related: ["ask-before-group-add", "give-people-time-to-reply"],
    translations: {
      en: {
        title: "Keep group chats reasonably on topic",
        takeaway:
          "Move long side conversations to a direct chat when they no longer involve most of the group.",
        situation:
          "A group message starts a conversation between only two or three people, with many replies that others do not need.",
        whyItMatters:
          "Every message can notify the whole group and make important information harder to find. People may mute the chat and then miss the reason the group exists.",
        whatToDo:
          "After a few side replies, continue privately or start a separate group for that topic. Return with a short summary only if the outcome matters to everyone.",
        nuance:
          "Social groups naturally wander between topics. The goal is not strict control, but noticing when a side discussion becomes a burden for everyone else.",
        tags: ["group chat", "off topic", "notifications", "private message", "mute"],
      },
      fr: {
        title: "Gardez les groupes raisonnablement centrés sur leur sujet",
        takeaway:
          "Déplacez les longues conversations parallèles en privé lorsqu’elles ne concernent plus la majorité du groupe.",
        situation:
          "Un message de groupe déclenche une discussion entre deux ou trois personnes, avec de nombreuses réponses inutiles aux autres membres.",
        whyItMatters:
          "Chaque message peut notifier tout le groupe et rendre les informations importantes plus difficiles à retrouver. Les membres risquent de couper les notifications puis de manquer l’objectif principal du groupe.",
        whatToDo:
          "Après quelques réponses parallèles, continuez en privé ou créez un groupe séparé pour ce sujet. Revenez avec un bref résumé seulement si le résultat concerne tout le monde.",
        nuance:
          "Les groupes sociaux changent naturellement de sujet. Il ne s’agit pas de tout contrôler, mais de remarquer quand une discussion parallèle devient pesante pour les autres.",
        tags: ["groupe", "hors sujet", "notifications", "message privé", "silencieux"],
      },
      "ar-TN": {
        title: "خلّي حديث القروب قريب من موضوعو",
        takeaway:
          "كان حديث جانبي طال وما عادش يهمّ أغلب القروب، كمّلو في الخاص.",
        situation:
          "ميساج في القروب يبدأ حديث بين شخصين ولا ثلاثة، وبعد تجي برشة أجوبة ما تهمّش البقية.",
        whyItMatters:
          "كل ميساج ينجم يعمل إشعار للقروب الكل ويصعّب تلقى المعلومات المهمّة. الناس تنجم تسكّت القروب وبعد يفوتها السبب اللي تعمل عليه.",
        whatToDo:
          "بعد شوية أجوبة جانبية، كمّلوا في الخاص ولا اعملوا قروب آخر للموضوع. ارجعوا بتلخيص صغير كان النتيجة تهمّ الناس الكل.",
        nuance:
          "القروبات الاجتماعية يبدّلوا الموضوع بطبيعتهم. المقصود موش نراقبوا كل كلمة، أمّا نفيقوا وقت الحديث الجانبي يولي ثقيل على البقية.",
        tags: ["قروب", "خارج الموضوع", "إشعارات", "خاص", "ساكت"],
      },
    },
  },
  {
    id: "ask-if-now-is-a-good-time",
    slug: "ask-if-now-is-a-good-time",
    category: "calls-voice",
    platforms: ["general", "messenger", "whatsapp"],
    severity: 1,
    related: ["ask-before-video-call", "give-people-time-to-reply"],
    translations: {
      en: {
        title: "Check whether it is a good time to talk",
        takeaway:
          "At the start of an unplanned call, ask whether the other person has time to talk.",
        situation:
          "You call without arranging a time because you have a question, want to catch up, or need to discuss something.",
        whyItMatters:
          "Answering a call does not always mean someone is free. They may be driving, working, caring for someone, or answering only because they worry it is urgent.",
        whatToDo:
          "Briefly say why you are calling and ask whether now works. If not, agree on another time or send the essential information by message.",
        nuance:
          "For a genuine emergency, lead with that fact. The person can then make an informed decision about stopping what they are doing.",
        tags: ["phone call", "good time", "busy", "schedule", "urgent"],
      },
      fr: {
        title: "Vérifiez que c’est un bon moment pour parler",
        takeaway:
          "Au début d’un appel imprévu, demandez si la personne a le temps de discuter.",
        situation:
          "Vous appelez sans avoir fixé d’heure parce que vous avez une question, souhaitez prendre des nouvelles ou devez parler d’un sujet.",
        whyItMatters:
          "Décrocher ne signifie pas toujours être disponible. La personne peut conduire, travailler, s’occuper de quelqu’un ou répondre uniquement par crainte d’une urgence.",
        whatToDo:
          "Expliquez brièvement la raison de votre appel et demandez si le moment convient. Sinon, fixez un autre horaire ou envoyez l’information essentielle par message.",
        nuance:
          "En cas de véritable urgence, dites-le dès le début. La personne pourra alors décider en connaissance de cause d’interrompre ce qu’elle fait.",
        tags: ["appel", "bon moment", "occupé", "horaire", "urgence"],
      },
      "ar-TN": {
        title: "تثبّت كان الوقت مناسب للحكاية",
        takeaway:
          "في بداية مكالمة موش مبرمجة، اسأل الشخص كان عندو وقت يحكي.",
        situation:
          "تعيّط من غير ما تتّفقوا على وقت خاطر عندك سؤال، تحب تطمّن عليه ولا يلزمكم تحكيو في موضوع.",
        whyItMatters:
          "كي يجاوب الشخص موش ديما معناها فارغ. ينجم يكون يسوق، يخدم، يهتمّ بشخص ولا جاوب كان خاطر خاف الموضوع مستعجل.",
        whatToDo:
          "قول باختصار علاش عيّطت واسأل كان الوقت مناسب. كان لا، اتّفقوا على وقت آخر ولا ابعث المعلومة المهمّة في ميساج.",
        nuance:
          "كان فمّا استعجال بالحق، قولها من اللول. هكّا الشخص يقرّر وهو فاهم كان يوقّف اللي يعمل فيه.",
        tags: ["مكالمة", "وقت مناسب", "مشغول", "موعد", "استعجال"],
      },
    },
  },
  {
    id: "check-before-photo-tagging",
    slug: "check-before-photo-tagging",
    category: "social-media",
    platforms: ["instagram", "facebook"],
    severity: 3,
    related: ["public-comment-audience", "old-post-reactions"],
    translations: {
      en: {
        title: "Check before tagging someone in a photo",
        takeaway:
          "Ask before connecting someone’s name and profile to a photo they may not want shared widely.",
        situation:
          "You are posting a group photo, memory, or event picture and want to tag the people who appear in it.",
        whyItMatters:
          "A tag can show a photo to a much larger audience, reveal where someone was, and attach the image to their profile. People may have personal or professional reasons to keep it untagged.",
        whatToDo:
          "Ask before tagging, especially for children, private events, workplaces, or sensitive locations. If someone asks you to remove a tag or photo, do so without making them justify the request.",
        nuance:
          "A person may be happy for a photo to remain in your album but prefer not to have it linked directly to their profile.",
        tags: ["photo tag", "picture", "profile", "location", "consent"],
      },
      fr: {
        title: "Demandez avant d’identifier quelqu’un sur une photo",
        takeaway:
          "Demandez l’accord avant de relier le nom et le profil d’une personne à une photo qu’elle ne souhaite peut-être pas diffuser largement.",
        situation:
          "Vous publiez une photo de groupe, un souvenir ou une image d’événement et souhaitez identifier les personnes présentes.",
        whyItMatters:
          "Une identification peut montrer la photo à un public bien plus large, révéler où se trouvait la personne et rattacher l’image à son profil. Elle peut avoir des raisons personnelles ou professionnelles de refuser.",
        whatToDo:
          "Demandez avant d’identifier, surtout pour les enfants, les événements privés, les lieux de travail ou les endroits sensibles. Si quelqu’un demande le retrait d’une identification ou d’une photo, acceptez sans exiger de justification.",
        nuance:
          "Une personne peut accepter que la photo reste dans votre album tout en préférant qu’elle ne soit pas directement reliée à son profil.",
        tags: ["identification", "photo", "profil", "lieu", "accord"],
      },
      "ar-TN": {
        title: "استأذن قبل ما تعمل تاغ لشخص في تصويرة",
        takeaway:
          "استأذن قبل ما تربط اسم وبروفيل شخص بتصويرة يمكن ما يحبّش تتنشر لبرشة ناس.",
        situation:
          "باش تنشر تصويرة قروب، ذكرى ولا مناسبة، وتحّب تعمل تاغ للناس اللي ظاهرين فيها.",
        whyItMatters:
          "التاغ ينجم يورّي التصويرة لجمهور أكبر، يكشف وين كان الشخص ويربطها ببروفيلو. ينجم تكون عندو أسباب شخصية ولا مهنية باش ما يحبّش التاغ.",
        whatToDo:
          "استأذن قبل التاغ، خاصة مع الصغار، المناسبات الخاصة، بلايص الخدمة ولا الأماكن الحساسة. كان شخص طلب تنحّي التاغ ولا التصويرة، اعمل هذا من غير ما تطلب منّو يبرّر.",
        nuance:
          "الشخص ينجم يرضى التصويرة تبقى في الألبوم متاعك، أمّا يفضّل ما تكونش مربوطة مباشرة ببروفيلو.",
        tags: ["تاغ", "تصويرة", "بروفيل", "مكان", "موافقة"],
      },
    },
  },
  {
    id: "think-before-commenting-on-live",
    slug: "think-before-commenting-on-live",
    category: "social-media",
    platforms: ["instagram", "facebook"],
    severity: 2,
    related: ["public-comment-audience", "ask-before-going-live-near-others"],
    translations: {
      en: {
        title: "Think before commenting on a live broadcast",
        takeaway:
          "A live comment can be seen immediately by the host and everyone watching, so pause before posting it.",
        situation:
          "You are watching a live video and want to react, joke, ask a personal question, or correct something in the comments.",
        whyItMatters:
          "Live comments are public in the moment and may also appear in a replay or screenshot. The host has little time to understand your tone, and a personal remark can embarrass them in front of their audience.",
        whatToDo:
          "Write only what you would be comfortable saying in front of the whole audience. Send personal, sensitive, or corrective messages privately after the live instead.",
        nuance:
          "Audience and replay settings vary by platform. If you cannot clearly confirm who will see the comment, treat it as public and lasting.",
        tags: ["live", "comment", "public", "audience", "replay"],
      },
      fr: {
        title: "Réfléchissez avant de commenter un live",
        takeaway:
          "Un commentaire de live est immédiatement visible par la personne qui diffuse et par son public : faites une pause avant de l’envoyer.",
        situation:
          "Vous regardez une vidéo en direct et souhaitez réagir, plaisanter, poser une question personnelle ou corriger quelque chose dans les commentaires.",
        whyItMatters:
          "Les commentaires sont publics pendant le direct et peuvent rester visibles dans une rediffusion ou une capture d’écran. La personne a peu de temps pour comprendre votre ton, et une remarque personnelle peut l’embarrasser devant son public.",
        whatToDo:
          "Écrivez uniquement ce que vous accepteriez de dire devant toute l’audience. Envoyez ensuite en privé les messages personnels, sensibles ou correctifs.",
        nuance:
          "Les réglages d’audience et de rediffusion varient selon les plateformes. Si vous ne savez pas précisément qui verra le commentaire, considérez-le comme public et durable.",
        tags: ["live", "direct", "commentaire", "public", "audience"],
      },
      "ar-TN": {
        title: "خمّم قبل ما تعلّق على لايف",
        takeaway:
          "تعليق اللايف يشوفوه في الحين صاحب البثّ والناس الكل اللي تتفرّج، لذلك تثبّت قبل ما تبعثو.",
        situation:
          "تتفرّج في فيديو مباشر وتحبّ تتفاعل، تتمسخر، تسأل سؤال شخصي ولا تصلّح معلومة في التعليقات.",
        whyItMatters:
          "التعليقات تكون علنية وقت اللايف وتنجم تبقى في الإعادة ولا في سكرينشوت. صاحب البثّ ما عندوش وقت كبير باش يفهم نبرتك، وكلمة شخصية تنجم تحرجو قدّام جمهورو.",
        whatToDo:
          "اكتب كان الكلام اللي تقبل تقولوه قدّام الجمهور الكل. الميساج الشخصي، الحسّاس ولا التصحيح ابعثو على الخاص بعد اللايف.",
        nuance:
          "إعدادات الجمهور والإعادة تتبدّل حسب المنصّة. كانك موش متأكّد شكون يشوف التعليق، اعتبرو علني وينجم يبقى.",
        tags: ["لايف", "تعليق", "علني", "جمهور", "إعادة"],
      },
    },
  },
  {
    id: "ask-before-going-live-near-others",
    slug: "ask-before-going-live-near-others",
    category: "privacy-audience",
    platforms: ["instagram", "facebook"],
    severity: 4,
    related: [
      "get-consent-before-sharing-someones-image",
      "speakerphone-consent",
    ],
    translations: {
      en: {
        title: "Ask people nearby before going live",
        takeaway:
          "Get the permission of anyone who may be seen or heard before starting a live broadcast.",
        situation:
          "You want to start a live video at home, at an event, in a workplace, or anywhere other people are close enough to appear or be heard.",
        whyItMatters:
          "A live broadcast sends images, voices, conversations, and location clues to an audience immediately. People nearby cannot review the recording first and may have personal, professional, or safety reasons not to be included.",
        whatToDo:
          "Explain what you plan to broadcast, show the camera’s field of view, and ask everyone affected. Move to a private spot or change the framing if anyone declines. Stop immediately if someone withdraws consent.",
        nuance:
          "Being in a public place does not automatically mean a person wants to become the subject of your live broadcast, especially when they are clearly identifiable.",
        tags: ["live", "broadcast", "camera", "voice", "consent", "privacy"],
      },
      fr: {
        title: "Demandez l’accord des personnes présentes avant un live",
        takeaway:
          "Obtenez l’autorisation de toute personne susceptible d’être vue ou entendue avant de lancer une diffusion en direct.",
        situation:
          "Vous souhaitez démarrer un live chez vous, pendant un événement, au travail ou dans un endroit où d’autres personnes peuvent apparaître ou être entendues.",
        whyItMatters:
          "Un direct transmet immédiatement des images, des voix, des conversations et des indices de localisation. Les personnes présentes ne peuvent pas vérifier l’enregistrement avant sa diffusion et peuvent avoir des raisons personnelles, professionnelles ou de sécurité de ne pas y figurer.",
        whatToDo:
          "Expliquez ce que vous comptez diffuser, montrez le champ de la caméra et demandez l’accord de chaque personne concernée. Isolez-vous ou changez le cadrage si quelqu’un refuse. Arrêtez immédiatement si une personne retire son accord.",
        nuance:
          "Être dans un lieu public ne signifie pas automatiquement accepter de devenir le sujet identifiable de votre diffusion en direct.",
        tags: ["live", "direct", "caméra", "voix", "consentement", "vie privée"],
      },
      "ar-TN": {
        title: "استأذن من الناس اللي بحذاك قبل ما تعمل لايف",
        takeaway:
          "خوذ موافقة كل شخص ينجم يبان ولا يتسمع قبل ما تبدأ بثّ مباشر.",
        situation:
          "تحبّ تبدأ لايف في الدار، في مناسبة، في الخدمة ولا في بلاصة فيها ناس قراب ينجموا يبانوا ولا صوتهم يتسمع.",
        whyItMatters:
          "اللايف يبعث في الحين تصاور، أصوات، حكايات ومعلومات على البلاصة لجمهور. الناس اللي بحذاك ما ينجموش يراجعوا التسجيل قبل النشر، وينجم تكون عندهم أسباب شخصية، مهنية ولا أمنية باش ما يظهروش.",
        whatToDo:
          "فسّر شنوة باش تصوّر، ورّي حدود الكاميرا واستأذن من كل شخص معني. بدّل البلاصة ولا الكادر كان شخص رفض، ووقّف في الحين كان رجع في موافقتو.",
        nuance:
          "وجود شخص في بلاصة عامة ما يعنيش وحدو إنو موافق يكون واضح ومعروف في اللايف متاعك.",
        tags: ["لايف", "بث مباشر", "كاميرا", "صوت", "موافقة", "خصوصية"],
      },
    },
  },
  {
    id: "review-photos-before-uploading",
    slug: "review-photos-before-uploading",
    category: "privacy-audience",
    platforms: ["instagram", "facebook", "whatsapp"],
    severity: 3,
    related: [
      "get-consent-before-sharing-someones-image",
      "check-before-photo-tagging",
    ],
    translations: {
      en: {
        title: "Review photos before uploading them",
        takeaway:
          "Sort through a batch of photos before sharing it; someone may not want a particular image made public.",
        situation:
          "After a trip, party, family gathering, or event, you are tempted to upload the whole album or send every photo to a group at once.",
        whyItMatters:
          "A large batch is easy to publish but difficult to inspect. It may contain unflattering or intimate moments, children, private documents, location details, or people who never agreed to be shared.",
        whatToDo:
          "Review every image, remove duplicates and sensitive details, then ask identifiable people about photos that concern them. Share a smaller, intentional selection and respond quickly to removal requests.",
        nuance:
          "Consent to being photographed is not automatically consent to every photo being uploaded or sent to a large group.",
        tags: ["photos", "album", "upload", "sorting", "consent", "privacy"],
      },
      fr: {
        title: "Triez les photos avant de les publier",
        takeaway:
          "Vérifiez un lot de photos avant de le partager : une personne peut refuser qu’une image précise soit rendue publique.",
        situation:
          "Après un voyage, une fête, une réunion de famille ou un événement, vous envisagez de publier tout l’album ou d’envoyer toutes les photos dans un groupe.",
        whyItMatters:
          "Un gros lot est rapide à publier mais difficile à contrôler. Il peut contenir des moments peu flatteurs ou intimes, des enfants, des documents privés, des informations de localisation ou des personnes qui n’ont jamais accepté la diffusion.",
        whatToDo:
          "Examinez chaque image, retirez les doublons et les détails sensibles, puis consultez les personnes reconnaissables au sujet des photos qui les concernent. Partagez une sélection réduite et retirez rapidement toute image signalée.",
        nuance:
          "Accepter d’être photographié ne signifie pas accepter que chaque photo soit publiée ou envoyée à un grand groupe.",
        tags: ["photos", "album", "publication", "tri", "accord", "vie privée"],
      },
      "ar-TN": {
        title: "فرّز التصاور قبل ما تنشرهم",
        takeaway:
          "راجع مجموعة التصاور قبل ما تشاركها؛ ينجم شخص ما يحبّش تصويرة معيّنة تتنشر.",
        situation:
          "بعد سفرة، حفلة، لمّة عائلية ولا مناسبة، تحبّ تطلّع الألبوم الكل ولا تبعث التصاور الكل للقروب دفعة واحدة.",
        whyItMatters:
          "ساهل تنشر مجموعة كبيرة أمّا صعيب تراجعها مليح. تنجم تلقى فيها لحظات محرجة ولا خاصة، صغار، وثائق، معلومات على المكان ولا ناس ما وافقوش على النشر.",
        whatToDo:
          "شوف كل تصويرة، نحّي المكرّر والتفاصيل الحسّاسة، وبعد اسأل الناس الواضحين على التصاور اللي تخصّهم. شارك اختيار صغير ومقصود ونحّي بسرعة أي تصويرة يطلبوها منك.",
        nuance:
          "الموافقة باش شخص يتصوّر ما تعنيش إنو وافق كل تصويرة تتنشر ولا تتبعث لقروب كبير.",
        tags: ["تصاور", "ألبوم", "نشر", "فرز", "موافقة", "خصوصية"],
      },
    },
  },
  {
    id: "get-consent-before-sharing-someones-image",
    slug: "get-consent-before-sharing-someones-image",
    category: "privacy-audience",
    platforms: ["instagram", "facebook", "whatsapp"],
    severity: 4,
    related: ["check-before-photo-tagging", "review-photos-before-uploading"],
    translations: {
      en: {
        title: "Get consent before sharing someone’s image",
        takeaway:
          "Ask before posting or sharing a story, photo, or video in which another person is identifiable.",
        situation:
          "You have a photo or video that includes someone’s face and want to publish it in a post, add it to a story, or forward it to other people.",
        whyItMatters:
          "The person loses control over where their image appears, who connects them to a place or event, and how copies may circulate. A harmless-looking image can create personal, professional, family, or safety problems.",
        whatToDo:
          "Show the exact image, explain where and for how long you want to share it, and wait for a clear yes. Crop, blur, or leave the person out if they decline. Remove it promptly if consent changes.",
        nuance:
          "A person agreeing to one post does not grant permanent permission for other platforms, audiences, or future resharing.",
        tags: ["face", "photo", "video", "story", "consent", "privacy"],
      },
      fr: {
        title: "Obtenez l’accord avant de partager l’image d’une personne",
        takeaway:
          "Demandez l’autorisation avant de publier ou partager une story, une photo ou une vidéo où une autre personne est reconnaissable.",
        situation:
          "Vous avez une photo ou une vidéo où apparaît le visage d’une personne et souhaitez la publier, l’ajouter à une story ou la transmettre à d’autres personnes.",
        whyItMatters:
          "La personne perd le contrôle sur l’endroit où son image apparaît, sur les personnes qui la relient à un lieu ou un événement et sur la circulation des copies. Une image apparemment anodine peut créer des problèmes personnels, professionnels, familiaux ou de sécurité.",
        whatToDo:
          "Montrez l’image exacte, précisez où et pendant combien de temps vous souhaitez la partager, puis attendez un oui clair. Recadrez, floutez ou retirez la personne si elle refuse. Supprimez rapidement l’image si son accord change.",
        nuance:
          "Accepter une publication ne donne pas une autorisation permanente pour d’autres plateformes, audiences ou repartages futurs.",
        tags: ["visage", "photo", "vidéo", "story", "consentement", "vie privée"],
      },
      "ar-TN": {
        title: "خوذ الموافقة قبل ما تشارك تصويرة شخص",
        takeaway:
          "استأذن قبل ما تنشر ولا تشارك ستوري، تصويرة ولا فيديو فيه شخص آخر معروف وواضح.",
        situation:
          "عندك تصويرة ولا فيديو فيه وجه شخص وتحبّ تنشرو في بوست، تحطّو في ستوري ولا تبعثو لناس آخرين.",
        whyItMatters:
          "الشخص يفقد التحكّم في وين تظهر صورتو، شكون يربطو ببلاصة ولا مناسبة، وكيفاش النسخ تدور. تصويرة تبان عادية تنجم تعمل مشاكل شخصية، مهنية، عائلية ولا أمنية.",
        whatToDo:
          "ورّيه التصويرة بالضبط، قول وين وقدّاش من وقت باش تشاركها واستنّى موافقة واضحة. قصّ، غطّي الوجه ولا نحّي الشخص كان رفض. وكان بدّل رأيو، نحّيها بسرعة.",
        nuance:
          "موافقة الشخص على بوست واحد ما تعنيش إذن دائم لمنصّات، جماهير ولا مشاركات أخرى في المستقبل.",
        tags: ["وجه", "تصويرة", "فيديو", "ستوري", "موافقة", "خصوصية"],
      },
    },
  },
  {
    id: "plan-early-or-late-calls",
    slug: "plan-early-or-late-calls",
    category: "calls-voice",
    platforms: ["general", "messenger", "whatsapp"],
    severity: 2,
    related: ["ask-if-now-is-a-good-time", "ask-before-video-call"],
    translations: {
      en: {
        title: "Plan calls that are very early or late",
        takeaway:
          "Warn someone in advance before calling early in the morning or late at night, unless it is genuinely urgent.",
        situation:
          "You want to call outside the hours when the other person normally expects social or work calls.",
        whyItMatters:
          "An unexpected call can wake someone, alarm their household, interrupt rest, or sound like an emergency. Schedules, health needs, family routines, and time zones are different for everyone.",
        whatToDo:
          "Send a message first and agree on a time. If the matter can wait, leave a concise note they can answer later. For a real emergency, call and explain the urgency immediately.",
        nuance:
          "There is no universal definition of early or late. Learn the person’s routine and check the time zone when they are travelling or live elsewhere.",
        tags: ["call", "late", "early", "sleep", "schedule", "time zone"],
      },
      fr: {
        title: "Prévenez avant un appel très tôt ou tard",
        takeaway:
          "Prévenez la personne avant de l’appeler tôt le matin ou tard le soir, sauf véritable urgence.",
        situation:
          "Vous souhaitez appeler en dehors des horaires où la personne s’attend habituellement à recevoir des appels personnels ou professionnels.",
        whyItMatters:
          "Un appel inattendu peut réveiller quelqu’un, inquiéter son foyer, interrompre son repos ou faire penser à une urgence. Les horaires, la santé, les routines familiales et les fuseaux horaires diffèrent pour chacun.",
        whatToDo:
          "Envoyez d’abord un message et convenez d’un horaire. Si le sujet peut attendre, laissez une note concise à laquelle la personne répondra plus tard. En cas de vraie urgence, appelez et expliquez-la immédiatement.",
        nuance:
          "Il n’existe pas d’heure universellement trop tôt ou trop tard. Tenez compte des habitudes de la personne et de son fuseau horaire.",
        tags: ["appel", "tard", "tôt", "sommeil", "horaire", "fuseau"],
      },
      "ar-TN": {
        title: "اتّفق قبل مكالمة بكري برشة ولا في الليل",
        takeaway:
          "علّم الشخص قبل ما تعيّطلو بكري الصباح ولا متأخّر في الليل، كان موش فمّا استعجال بالحق.",
        situation:
          "تحبّ تعيّط خارج السوايع اللي الشخص متعوّد يستقبل فيها مكالمات شخصية ولا متاع خدمة.",
        whyItMatters:
          "مكالمة من غير إعلام تنجم تفيّق شخص، تقلّق دارهم، تقطع راحتو ولا تخلّيه يظنّ فمّا مصيبة. التوقيت، الصحّة، عادات العايلة والفارق الزمني يختلفوا من شخص لآخر.",
        whatToDo:
          "ابعث ميساج قبل واتّفقوا على وقت. كان الموضوع يستنّى، خلّي ملاحظة قصيرة يجاوب عليها وقت يفرغ. كان استعجال بالحق، عيّط وفسّر من اللول.",
        nuance:
          "ما فمّاش ساعة واحدة تعتبر بكري ولا متأخّرة عند الناس الكل. اعرف عادات الشخص وتثبّت من الفارق الزمني.",
        tags: ["مكالمة", "ليل", "بكري", "نوم", "موعد", "فارق زمني"],
      },
    },
  },
  {
    id: "share-stories-with-a-clear-connection",
    slug: "share-stories-with-a-clear-connection",
    category: "social-media",
    platforms: ["instagram", "facebook"],
    severity: 1,
    related: [
      "get-consent-before-sharing-someones-image",
      "public-comment-audience",
    ],
    translations: {
      en: {
        title: "Reshare stories with a clear reason",
        takeaway:
          "Before adding someone else’s story to your profile, consider whether you are involved and whether your resharing adds useful context.",
        situation:
          "You see another person’s story and can reshare it, even though it is not about you, you were not present, and they did not ask you to amplify it.",
        whyItMatters:
          "A reshare can confuse your audience about your connection to the story, imply endorsement, or push the original content to people its author did not expect. It can also make a personal moment feel appropriated.",
        whatToDo:
          "Reshare when you have a clear connection or useful reason, add context in your own words, and ask first if the content is personal or includes identifiable people. Otherwise, react privately or leave the story with its author.",
        nuance:
          "Public-interest information, event promotion, fundraising, and explicit requests to share are good reasons even when you are not personally featured.",
        tags: ["story", "reshare", "profile", "context", "credit", "audience"],
      },
      fr: {
        title: "Repartagez une story pour une raison claire",
        takeaway:
          "Avant d’ajouter la story d’une autre personne à votre profil, demandez-vous si vous êtes concerné et si votre partage apporte un contexte utile.",
        situation:
          "Vous voyez la story d’une autre personne et pouvez la repartager, alors qu’elle ne vous concerne pas, que vous n’étiez pas présent et que son auteur ne vous a pas demandé de la diffuser.",
        whyItMatters:
          "Le repartage peut créer une confusion sur votre lien avec la story, laisser croire que vous la cautionnez ou exposer le contenu à un public inattendu. Il peut aussi donner l’impression de s’approprier un moment personnel.",
        whatToDo:
          "Repartagez si vous avez un lien clair ou une raison utile, ajoutez votre propre contexte et demandez l’accord si le contenu est personnel ou montre des personnes reconnaissables. Sinon, réagissez en privé ou laissez la story à son auteur.",
        nuance:
          "Une information d’intérêt public, la promotion d’un événement, une collecte ou une demande explicite de partage sont de bonnes raisons, même si vous n’apparaissez pas dans la story.",
        tags: ["story", "repartage", "profil", "contexte", "crédit", "audience"],
      },
      "ar-TN": {
        title: "عاود شارك الستوري كان عندك سبب واضح",
        takeaway:
          "قبل ما تحطّ ستوري متاع شخص آخر في بروفيلك، اسأل روحك كان الموضوع يعنيك وكان مشاركتك تزيد توضيح ينفع.",
        situation:
          "تشوف ستوري متاع شخص آخر وتنجم تعاود تشاركها، أمّا هي ما تخصّكش، ما كنتش حاضر وصاحبها ما طلبش منك توسّع انتشارها.",
        whyItMatters:
          "إعادة المشاركة تنجم تخلّط على جمهورك علاقتك بالستوري، تبيّن كأنك موافق عليها ولا توصلها لناس صاحبها ما كانش يتوقّعهم. وتنجم زادة تخلّي لحظة شخصية تبان كأنك خذيتها لنفسك.",
        whatToDo:
          "عاود شارك كان عندك علاقة واضحة ولا سبب ينفع، وزيد السياق بكلامك. استأذن كان المحتوى شخصي ولا فيه ناس واضحين. وإلا تفاعل على الخاص وخلّي الستوري عند صاحبها.",
        nuance:
          "معلومة تهمّ الناس، إشهار مناسبة، تبرّع ولا طلب واضح للمشاركة أسباب معقولة حتى كان إنت موش ظاهر في الستوري.",
        tags: ["ستوري", "إعادة مشاركة", "بروفيل", "سياق", "جمهور"],
      },
    },
  },
  {
    id: "send-friend-requests-with-context",
    slug: "send-friend-requests-with-context",
    category: "social-media",
    platforms: ["facebook", "instagram"],
    severity: 1,
    related: ["old-post-reactions", "public-comment-audience"],
    translations: {
      en: {
        title: "Add people you know—or introduce yourself",
        takeaway:
          "Avoid sending unexplained friend requests to strangers; use a short message when there is a genuine connection.",
        situation:
          "A profile is suggested to you or catches your attention, but the person does not know who you are or why you want to connect.",
        whyItMatters:
          "An unexplained request can feel intrusive or look like spam, fraud, or unwanted romantic attention. Accepting it may reveal personal posts and information that the person reserves for people they recognize.",
        whatToDo:
          "Connect mainly with people you know. If you have a legitimate shared context, send one brief, respectful message explaining it and let the person decide without reminders or pressure.",
        nuance:
          "Following a public account is different from requesting access to a private profile or a friends-only space.",
        tags: ["friend request", "stranger", "profile", "introduction", "spam"],
      },
      fr: {
        title: "Ajoutez des personnes que vous connaissez, ou présentez-vous",
        takeaway:
          "Évitez les demandes d’ami sans explication à des inconnus ; envoyez un bref message lorsqu’un lien réel existe.",
        situation:
          "Un profil vous est suggéré ou attire votre attention, mais la personne ne sait pas qui vous êtes ni pourquoi vous souhaitez entrer en contact.",
        whyItMatters:
          "Une demande inexpliquée peut sembler intrusive ou ressembler à du spam, une fraude ou une approche romantique non désirée. L’accepter peut révéler des publications et informations réservées aux personnes reconnues.",
        whatToDo:
          "Ajoutez principalement des personnes que vous connaissez. Si vous partagez un contexte légitime, envoyez un seul message bref et respectueux pour l’expliquer, puis laissez la personne décider sans relance ni pression.",
        nuance:
          "Suivre un compte public est différent de demander l’accès à un profil privé ou à un espace réservé aux amis.",
        tags: ["demande d’ami", "inconnu", "profil", "présentation", "spam"],
      },
      "ar-TN": {
        title: "زيد الناس اللي تعرفهم، وإلا عرّف بروحك",
        takeaway:
          "ما تبعثش طلبات صداقة من غير تفسير لناس ما تعرفهمش؛ ابعث كلمة قصيرة كان بيناتكم علاقة حقيقية.",
        situation:
          "المنصّة اقترحت عليك بروفيل ولا عجبك، أمّا الشخص ما يعرفش شكون إنت وعلاش تحبّ تتواصل معاه.",
        whyItMatters:
          "طلب من غير تفسير ينجم يبان تدخّل، سبام، تحيّل ولا تقرّب عاطفي موش مرغوب. قبولو ينجم يكشف بوستات ومعلومات الشخص مخصّصهم كان للناس اللي يعرفهم.",
        whatToDo:
          "زيد بالأساس الناس اللي تعرفهم. كان بيناتكم سياق حقيقي، ابعث ميساج واحد قصير ومحترم تفسّر فيه، وبعد خلّي الشخص يقرّر من غير إلحاح ولا ضغط.",
        nuance:
          "متابعة حساب علني موش كيف طلب الدخول لبروفيل خاص ولا فضاء مخصّص للأصدقاء.",
        tags: ["طلب صداقة", "شخص غريب", "بروفيل", "تقديم", "سبام"],
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
    severityTitle: "Impact if ignored",
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
    severityTitle: "Gravité en cas de non-respect",
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
    severityTitle: "درجة التأثير كان ما تحترمش القاعدة",
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
