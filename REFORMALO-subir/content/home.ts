// Contenido de la home en español. Pensado para añadir catalán después:
// bastará con duplicar este archivo como `home.ca.ts` y elegir por idioma.

export const hero = {
  eyebrow: "Agencia de soluciones digitales · Osona y Catalunya",
  title: "Soluciones digitales a tu *medida*.",
  subtitle:
    "Ayudamos a pymes y negocios locales a resolver sus retos con tecnología. Empezamos entendiendo tu negocio y, a partir de ahí, combinamos consultoría, inteligencia artificial, automatizaciones, visibilidad en Google y web.",
  primary: "Hablemos",
  secondary: "Ver servicios",
  chips: [
    { label: "Consultoría", emoji: "🧭" },
    { label: "IA", emoji: "✨" },
    { label: "Automatización", emoji: "⚙️" },
    { label: "SEO y GEO", emoji: "🔎" },
    { label: "Web", emoji: "🌐" },
  ],
  marquee: [
    "Consultoría digital",
    "Soluciones a medida",
    "Inteligencia artificial",
    "Automatizaciones",
    "SEO y GEO",
    "Google Business Profile",
    "Diseño web",
    "WhatsApp",
  ],
} as const;

export const problem = {
  eyebrow: "Por qué ahora",
  title: "Tus clientes ya no te buscan como antes",
  description:
    "Antes bastaba con un cartel en la puerta. Hoy el cliente decide desde el móvil, en segundos, y cada vez más a menudo ni siquiera pregunta a Google.",
  cards: [
    {
      emoji: "🔎",
      title: "Te buscan en Google",
      text: "Si tu ficha está a medias o tu web va lenta, eligen a otro sin pensárselo.",
    },
    {
      emoji: "🤖",
      title: "Y ahora preguntan a una IA",
      text: "ChatGPT, Gemini o Perplexity ya recomiendan negocios locales. ¿Sale el tuyo?",
    },
    {
      emoji: "💬",
      title: "Te escriben a las 22:00",
      text: "Si nadie contesta, se van con el siguiente. Una automatización sí contesta.",
    },
  ],
  solution: {
    title: "Nosotros hacemos que te encuentren, te elijan y te contesten.",
    items: [
      {
        verb: "Encontrar",
        text: "SEO, GEO y Google Business Profile para que aparezcas donde miran tus clientes.",
      },
      {
        verb: "Elegir",
        text: "Una web clara, rápida y con buena imagen, y reseñas que dan confianza.",
      },
      {
        verb: "Contestar",
        text: "Automatizaciones con IA que responden, piden reseñas y recuerdan citas.",
      },
    ],
  },
} as const;

export type ServiceCard = {
  slug: string;
  href: string;
  emoji: string;
  title: string;
  text: string;
  points: readonly string[];
  /** Frase destacada; solo la usa el servicio principal. */
  tagline?: string;
};

export const services = {
  eyebrow: "Servicios",
  title: "Soluciones digitales para cada reto de tu negocio",
  description:
    "Todo empieza por entender qué necesitas. Después elegimos las piezas que lo resuelven: consultoría, inteligencia artificial, visibilidad en Google y web.",
  cards: [
    {
      slug: "consultoria",
      href: "/consultoria",
      emoji: "🧭",
      title: "Consultoría de soluciones digitales",
      tagline: "Tú pones el objetivo. Nosotros encontramos la forma de hacerlo realidad.",
      text: "Nos sentamos contigo, entendemos cómo funciona tu negocio y te proponemos las soluciones digitales que de verdad te encajan, sin jerga y sin vender lo que no necesitas.",
      points: [
        "Análisis de tu negocio, tus procesos y tu presencia online",
        "Plan de acción claro y priorizado",
        "Dónde y cómo te puede ayudar la IA",
        "Te acompañamos hasta ponerlo en marcha",
      ],
    },
    {
      slug: "ia",
      href: "/automatizaciones-ia",
      emoji: "🤖",
      title: "Automatizaciones con IA",
      text: "Tu negocio contestando solo: WhatsApp, reseñas y recordatorios sin que muevas un dedo.",
      points: [
        "Respuestas automáticas en WhatsApp",
        "Petición de reseñas tras cada cliente",
        "Recordatorios de citas con Make.com",
      ],
    },
    {
      slug: "seo",
      href: "/seo",
      emoji: "🔎",
      title: "SEO y GEO",
      text: "Que te encuentren en Google y que las IAs como ChatGPT te recomienden.",
      points: [
        "SEO local y búsquedas «cerca de mí»",
        "GEO: visibilidad en respuestas de IA",
        "Mejoras técnicas y de contenido",
      ],
    },
    {
      slug: "google",
      href: "/google-business",
      emoji: "📍",
      title: "Google Business Profile",
      text: "Tu escaparate en Google y Maps, completo, cuidado y listo para que te elijan.",
      points: [
        "Alta, optimización y verificación",
        "Horarios, fotos y servicios al día",
        "Base para recoger reseñas",
      ],
    },
    {
      slug: "web",
      href: "/diseno-web",
      emoji: "🌐",
      title: "Diseño y desarrollo web",
      text: "Cuando la solución pasa por una web, la hacemos rápida, clara y pensada para que te contacten.",
      points: [
        "Diseño a medida con tu marca",
        "Pensada primero para el móvil",
        "Preparada para que te contacten",
      ],
    },
  ] satisfies readonly ServiceCard[],
  more: "Saber más",
} as const;

export type DemoMessage = { from: "client" | "bot"; text: string };

export const aiDemo = {
  eyebrow: "Automatizaciones con IA",
  title: "Mientras tú atiendes, tu negocio también contesta",
  description:
    "Montamos asistentes que hacen las tareas repetitivas por ti: responder, pedir reseñas y recordar citas. Funcionan con herramientas como Make.com y se configuran a medida de tu negocio.",
  points: [
    "Respuestas automáticas de WhatsApp, también fuera de horario",
    "Petición de reseñas justo después de cada visita",
    "Recordatorios de citas para que nadie se olvide",
  ],
  note: "Ejemplo ilustrativo. Cada automatización se diseña según tu negocio.",
  businessName: "Tu negocio",
  status: "en línea",
  scenarios: [
    {
      id: "respuesta",
      label: "Autorespuesta",
      emoji: "💬",
      messages: [
        { from: "client", text: "Hola, ¿tenéis mesa para esta noche?" },
        {
          from: "bot",
          text: "¡Hola! 👋 Gracias por escribirnos. Ahora mismo estamos cerrados, pero te contestamos en cuanto abramos. Mientras, ¿para cuántas personas sería?",
        },
        { from: "client", text: "Para 4" },
        {
          from: "bot",
          text: "Perfecto, lo dejo anotado. Te confirmamos a primera hora 🙌",
        },
      ],
    },
    {
      id: "resena",
      label: "Petición de reseña",
      emoji: "⭐",
      messages: [
        {
          from: "bot",
          text: "¡Hola, Marta! Gracias por venir hoy 😊 ¿Qué tal ha ido todo?",
        },
        { from: "client", text: "¡Genial, muy contenta!" },
        {
          from: "bot",
          text: "¡Cómo nos alegra! Si te apetece, una reseña en Google nos ayuda muchísimo. Aquí tienes el enlace directo ⭐",
        },
      ],
    },
    {
      id: "cita",
      label: "Recordatorio de cita",
      emoji: "📅",
      messages: [
        {
          from: "bot",
          text: "Hola, Jordi 👋 Te recordamos tu cita de mañana a las 10:30. ¿Nos confirmas?",
        },
        { from: "client", text: "Confirmo, gracias" },
        {
          from: "bot",
          text: "¡Genial, te esperamos! Si necesitas cambiarla, responde CAMBIAR y lo vemos.",
        },
      ],
    },
  ] satisfies readonly {
    id: string;
    label: string;
    emoji: string;
    messages: readonly DemoMessage[];
  }[],
} as const;

export const process = {
  eyebrow: "Cómo trabajamos",
  title: "Cuatro pasos, sin líos",
  description:
    "Sin tecnicismos y sin desaparecer. Siempre sabes en qué punto estamos.",
  steps: [
    {
      title: "Escuchamos",
      text: "Una charla para entender tu negocio, tus clientes y lo que de verdad necesitas.",
    },
    {
      title: "Diseñamos la solución",
      text: "Elegimos las herramientas que encajan contigo, ya sea IA, automatizaciones, Google o web, y las construimos a medida.",
    },
    {
      title: "Lo ponemos en marcha",
      text: "Lanzamos todo y te enseñamos a usarlo. Es la cuota inicial de puesta en marcha.",
    },
    {
      title: "Cuidamos y mejoramos",
      text: "Con el mantenimiento mensual opcional seguimos a tu lado para que todo siga rindiendo.",
    },
  ],
} as const;

export const plans = {
  eyebrow: "Planes",
  title: "Una cuota inicial y, si quieres, mantenimiento",
  description:
    "Así de simple: pagas la puesta en marcha y decides si quieres que sigamos cuidándolo cada mes.",
  // TODO: confirmar precios y alcance de cada plan antes de publicarlos.
  cards: [
    {
      kicker: "Primero",
      title: "Puesta en marcha",
      cadence: "Cuota inicial",
      text: "Montamos lo que necesites y lo dejamos funcionando.",
      points: [
        "Web, ficha de Google o automatizaciones, según tu caso",
        "Todo configurado, probado y a punto",
        "Te enseñamos a usarlo sin complicaciones",
      ],
    },
    {
      kicker: "Después, si quieres",
      title: "Mantenimiento",
      cadence: "Mensual y opcional",
      text: "Nos quedamos a tu lado para que todo siga en forma.",
      points: [
        "Actualizaciones y pequeños cambios",
        "Atención ante cualquier incidencia",
        "Mejoras para seguir ganando visibilidad",
      ],
    },
  ],
  priceNote: "El precio lo definimos contigo según lo que necesites.",
  cta: "Pedir presupuesto",
} as const;

export const faq = {
  eyebrow: "FAQ",
  title: "Preguntas que nos hacen siempre",
  items: [
    {
      q: "¿Qué hace una agencia de soluciones digitales como Reformalo?",
      a: "Ayudamos a pymes y negocios locales a resolver problemas reales con tecnología. Primero entendemos tu negocio y tus objetivos, y después proponemos y ponemos en marcha lo que mejor encaja: automatizaciones con IA, visibilidad en Google y en las IAs (SEO y GEO), perfil de empresa en Google o una web. No vendemos paquetes cerrados: cada solución se diseña a medida.",
    },
    {
      q: "No sé qué necesita mi negocio, ¿por dónde empiezo?",
      a: "Por una consultoría. Hablamos contigo, analizamos cómo trabajas y tu presencia online, y te damos un plan claro con prioridades. Así sabes qué te aporta más antes de invertir en nada.",
    },
    {
      q: "¿Qué es el GEO?",
      a: "GEO significa optimización para motores generativos. Consiste en que herramientas como ChatGPT, Gemini o Perplexity entiendan tu negocio y puedan recomendarlo cuando alguien pregunta por lo que ofreces. Es el hermano pequeño del SEO y cada vez cuenta más.",
    },
    {
      q: "¿Necesito entender de tecnología?",
      a: "Ni un poquito. Te lo explicamos todo sin tecnicismos y nos encargamos de la parte técnica.",
    },
    {
      q: "¿Cómo funcionan los pagos?",
      a: "Hay una cuota inicial de puesta en marcha y, si quieres, un mantenimiento mensual opcional. Te detallamos ambas cosas en tu presupuesto.",
    },
    {
      q: "¿Qué son las automatizaciones con IA?",
      a: "Pequeños asistentes que hacen por ti tareas repetitivas: contestar mensajes de WhatsApp fuera de horario, pedir reseñas a tus clientes o recordarles su cita. Los montamos con herramientas como Make.com.",
    },
    {
      q: "Ya tengo web, ¿qué hago?",
      a: "Perfecto, no hace falta empezar de cero. Con una consultoría revisamos qué funciona, qué no y por dónde empezar a mejorar.",
    },
    {
      q: "¿Trabajáis solo en Osona?",
      a: "Nuestra base está en Osona y trabajamos con negocios de toda Catalunya. Si estás en otro sitio, escríbenos y lo hablamos.",
    },
  ],
} as const;

export const contact = {
  eyebrow: "Contacto",
  title: "¿Hablamos?",
  description:
    "Cuéntanos qué necesitas y te respondemos lo antes posible. Sin compromiso.",
  formTitle: "Escríbenos",
  success: {
    title: "¡Recibido!",
    text: "Gracias por escribirnos. Te respondemos en 24-48 h laborables.",
  },
  error: "Vaya, algo ha fallado al enviarlo. Inténtalo de nuevo o escríbenos por correo.",
} as const;

export const finalCta = {
  title: "¿Listo para que tu negocio destaque?",
  text: "Te decimos sin compromiso por dónde empezar.",
  primary: "Pedir presupuesto",
  secondary: "Hablar con nosotros",
} as const;
