// Páginas de servicio. Los textos de SEO, diseño web, Google Business Profile
// y la auditoría web de consultoría proceden de la web anterior; la de
// automatizaciones con IA, el bloque GEO y el enfoque de consultoría de
// soluciones digitales son nuevos y se basan en el servicio descrito por Reformalo.

export type ServiceBlock = {
  eyebrow: string;
  title: string;
  intro?: readonly string[];
  points?: readonly string[];
  cards?: readonly { title: string; text: string }[];
};

export type ServicePageData = {
  slug: string;
  emoji: string;
  label: string;
  title: string;
  intro: string;
  metaTitle: string;
  metaDescription: string;
  blocks: readonly ServiceBlock[];
  cta: { title: string; text: string };
};

export const servicePages: Record<string, ServicePageData> = {
  seo: {
    slug: "seo",
    emoji: "🔎",
    label: "SEO y GEO",
    title: "Posicionamos tu negocio donde te buscan",
    intro:
      "Mejoramos tu posicionamiento en buscadores y en respuestas de IA, y potenciamos las oportunidades locales para que más clientes te encuentren cada día.",
    metaTitle: "SEO y GEO para negocios locales",
    metaDescription:
      "Posicionamiento SEO local y GEO para que tu negocio aparezca en Google, Maps y en las respuestas de ChatGPT y otras IAs. Reformalo Vic (Osona).",
    blocks: [
      {
        eyebrow: "Qué es el SEO",
        title: "Aparecer en Google no es suerte, es estrategia",
        intro: [
          "El SEO (optimización para buscadores) es el conjunto de técnicas que hacen que tu web aparezca en los primeros resultados de Google cuando alguien busca lo que ofreces.",
          "La mayoría de la gente no pasa de la primera página. Si tu negocio no está ahí, simplemente no existe para esos clientes. Nosotros trabajamos para que te encuentren en el momento exacto en que te necesitan.",
        ],
        points: [
          "Análisis de palabras clave de tu sector y zona",
          "Optimización técnica y de contenidos de tu web",
          "Mejora de la velocidad y la experiencia de usuario",
        ],
      },
      {
        eyebrow: "Y ahora, GEO",
        title: "Que las IAs también te recomienden",
        intro: [
          "Cada vez más gente pregunta a ChatGPT, Gemini o Perplexity en lugar de buscar en Google. El GEO (optimización para motores generativos) consiste en que esas herramientas entiendan tu negocio y puedan recomendarlo.",
        ],
        points: [
          "Contenido claro y bien estructurado que las IAs entienden",
          "Datos de tu empresa coherentes en toda la web",
          "Marcado schema.org para que te identifiquen sin dudas",
        ],
      },
      {
        eyebrow: "SEO local vs. general",
        title: "Destaca en tu zona y en las búsquedas «cerca de mí»",
        intro: [
          "El SEO general busca posicionarte a nivel amplio para tu sector. El SEO local se centra en quienes están cerca de ti: búsquedas por zona, Google Maps y consultas tipo «cerca de mí».",
          "Para una pyme, el SEO local suele ser una mina de oro: son clientes con intención real de comprar o contratar, y que tienes a tu alcance. Trabajamos ambos enfoques según lo que más le convenga a tu negocio.",
        ],
        points: [
          "Posicionamiento en Google Maps y el paquete local",
          "Optimización para búsquedas geolocalizadas",
          "Coherencia de tus datos en toda la web",
        ],
      },
      {
        eyebrow: "Beneficios",
        title: "Lo que ganas con un buen SEO",
        intro: [
          "Un trabajo de posicionamiento bien hecho es una de las mejores inversiones a medio y largo plazo para tu negocio.",
        ],
        cards: [
          {
            title: "Más visibilidad",
            text: "Apareces en los primeros resultados cuando tus clientes buscan lo que ofreces.",
          },
          {
            title: "Clientes sin pagar por clic",
            text: "El tráfico orgánico no se paga por visita: una vez posicionado, sigue trabajando para ti.",
          },
          {
            title: "Resultados duraderos",
            text: "A diferencia de la publicidad, un buen SEO mantiene su efecto en el tiempo.",
          },
        ],
      },
    ],
    cta: {
      title: "¿Quieres aparecer cuando te buscan?",
      text: "Te decimos sin compromiso cómo está tu posicionamiento actual y qué podemos mejorar.",
    },
  },

  "diseno-web": {
    slug: "diseno-web",
    emoji: "🌐",
    label: "Diseño web",
    title: "Webs modernas que convierten visitas en clientes",
    intro:
      "Diseñamos y desarrollamos páginas rápidas, responsive y cuidadas hasta el último detalle, pensadas para hacer crecer tu negocio.",
    metaTitle: "Diseño y desarrollo web para pymes",
    metaDescription:
      "Diseño y desarrollo de webs rápidas, responsive y orientadas a conseguir clientes para pymes y negocios locales de Osona y Catalunya.",
    blocks: [
      {
        eyebrow: "Diseño + experiencia de usuario",
        title: "Una web bonita no basta: tiene que funcionar",
        intro: [
          "Combinamos un diseño atractivo y coherente con tu marca con una experiencia de usuario impecable. El objetivo no es solo impresionar, sino conseguir que el visitante haga lo que quieres: contactar, reservar o comprar.",
          "Cuidamos los textos, la estructura, los tiempos de carga y la facilidad de navegación. Una web clara y rápida genera confianza, y la confianza es lo que convierte.",
        ],
        points: [
          "Diseño a medida alineado con tu marca",
          "Optimización para móvil y velocidad de carga",
          "Estructura clara orientada a la conversión",
        ],
      },
      {
        eyebrow: "Tipos de web",
        title: "El tipo de web que tu negocio necesita",
        intro: [
          "No todas las empresas necesitan lo mismo. Te asesoramos sobre la mejor opción para tus objetivos.",
        ],
        cards: [
          {
            title: "Web corporativa",
            text: "La presencia online de tu empresa: servicios, sobre ti y contacto, con una imagen profesional.",
          },
          {
            title: "Landing page",
            text: "Una página enfocada en un único objetivo: captar clientes para un producto, servicio o campaña.",
          },
          {
            title: "Tienda online",
            text: "Vende tus productos en internet con una tienda fácil de gestionar y de comprar.",
          },
        ],
      },
      {
        eyebrow: "Beneficios",
        title: "Webs hechas para dar resultados",
        cards: [
          {
            title: "100% responsive",
            text: "Tu web se ve perfecta en móvil, tablet y ordenador. Hoy la mayoría navega desde el móvil.",
          },
          {
            title: "Rápida y ligera",
            text: "La velocidad importa: una web rápida retiene visitas y posiciona mejor en Google.",
          },
          {
            title: "Orientada a convertir",
            text: "Cada sección está pensada para guiar al visitante hacia el contacto o la compra.",
          },
          {
            title: "Posicionamiento SEO",
            text: "Construimos la web con buenas prácticas SEO desde la base para que Google te encuentre antes.",
          },
        ],
      },
    ],
    cta: {
      title: "¿Necesitas una web nueva o renovar la actual?",
      text: "Cuéntanos tu proyecto y te preparamos una propuesta a medida, sin compromiso.",
    },
  },

  consultoria: {
    slug: "consultoria",
    emoji: "🧭",
    label: "Consultoría de soluciones digitales",
    title: "Consultoría de soluciones digitales a la medida de tu negocio",
    intro:
      "Tú pones el objetivo. Nosotros encontramos la forma de hacerlo realidad. Analizamos cómo funciona tu negocio, detectamos dónde la tecnología te puede ayudar y te proponemos un plan claro, con solo lo que de verdad te aporta.",
    metaTitle: "Consultoría de soluciones digitales para pymes",
    metaDescription:
      "Consultoría de soluciones digitales e IA para pymes de Osona y Catalunya: analizamos tu negocio y te damos un plan claro y sin tecnicismos.",
    blocks: [
      {
        eyebrow: "Cómo trabajamos",
        title: "Primero escuchamos, después proponemos",
        intro: [
          "Cada negocio tiene sus propios retos: tareas que se comen el día, clientes que no encuentran el negocio, consultas que llegan fuera de horario o una web que no aporta. Antes de hablar de herramientas, queremos entender el tuyo.",
          "A partir de ahí te proponemos soluciones concretas y priorizadas, ya sea una automatización, un asistente con IA, mejorar tu visibilidad en Google o una web nueva. Y si lo quieres, te acompañamos hasta dejarlo funcionando.",
        ],
        points: [
          "Conocemos tu negocio, tus procesos y tus objetivos",
          "Detectamos qué se puede mejorar con tecnología",
          "Te damos un plan claro, por orden de impacto",
          "Te acompañamos en la puesta en marcha",
        ],
      },
      {
        eyebrow: "Qué podemos resolver",
        title: "Soluciones digitales para retos reales",
        intro: [
          "Estos son algunos de los problemas más habituales en pymes y negocios locales, y cómo los abordamos.",
        ],
        cards: [
          {
            title: "Tareas repetitivas",
            text: "Automatizamos lo que hoy haces a mano para que recuperes tiempo cada semana.",
          },
          {
            title: "Atención al cliente",
            text: "Respuestas automáticas con IA para que nadie se quede sin contestar, también fuera de horario.",
          },
          {
            title: "Visibilidad online",
            text: "SEO, GEO y perfil de empresa en Google para que te encuentren quienes te buscan.",
          },
          {
            title: "Reseñas y reputación",
            text: "Un sistema sencillo para pedir reseñas y ganar la confianza de nuevos clientes.",
          },
          {
            title: "IA en tu día a día",
            text: "Te ayudamos a ver dónde la inteligencia artificial te ahorra trabajo de verdad, y dónde no.",
          },
          {
            title: "Una web que no aporta",
            text: "Revisamos tu web actual y te decimos qué mejorar, o si conviene empezar de nuevo.",
          },
        ],
      },
      {
        eyebrow: "Si ya tienes web",
        title: "Cuando tienes web pero sientes que no aporta",
        intro: [
          "Muchas pymes invierten en una web y luego se preguntan por qué no reciben llamadas ni clientes. La buena noticia es que casi siempre hay margen de mejora, y a menudo con cambios más sencillos de lo que parece.",
          "Nuestra consultoría es ideal si ya tienes una web pero no te da los resultados que esperabas. Hacemos una auditoría completa y te explicamos, sin tecnicismos, qué está pasando y qué se puede mejorar.",
        ],
        points: [
          "Auditoría completa de tu web actual",
          "Diagnóstico claro y sin tecnicismos",
          "Prioridades concretas para empezar a mejorar ya",
        ],
      },
      {
        eyebrow: "Qué analizamos",
        title: "Una revisión 360º de tu presencia online",
        intro: [
          "Revisamos todos los aspectos que influyen en que tu web atraiga visitas y las convierta en clientes.",
        ],
        cards: [
          {
            title: "Velocidad",
            text: "Detectamos qué está ralentizando tu web y cómo acelerarla para no perder visitas.",
          },
          {
            title: "SEO",
            text: "Revisamos tu posicionamiento y los errores técnicos que te impiden subir en Google.",
          },
          {
            title: "Diseño",
            text: "Evaluamos si tu imagen transmite profesionalidad y conecta con tu público.",
          },
          {
            title: "Conversión",
            text: "Identificamos por qué tus visitas no acaban contactando o comprando.",
          },
          {
            title: "Usabilidad",
            text: "Comprobamos que navegar por tu web sea fácil e intuitivo en cualquier dispositivo.",
          },
          {
            title: "Plan de acción",
            text: "Te entregamos un documento claro con prioridades y mejoras concretas a aplicar.",
          },
        ],
      },
    ],
    cta: {
      title: "¿Tienes un objetivo en mente?",
      text: "Cuéntanoslo y te decimos, sin compromiso, cómo podemos hacerlo realidad.",
    },
  },

  "google-business": {
    slug: "google-business",
    emoji: "📍",
    label: "Google Business Profile",
    title: "Que te encuentren en Google y Maps",
    intro:
      "Tu ficha de empresa en Google es, muchas veces, lo primero que ve un cliente. La creamos, optimizamos y dejamos perfecta.",
    metaTitle: "Google Business Profile: ficha de empresa en Google",
    metaDescription:
      "Creamos y optimizamos tu perfil de empresa en Google para que aparezcas en Maps y en las búsquedas locales. Reformalo Vic (Osona).",
    blocks: [
      {
        eyebrow: "Por qué importa",
        title: "El escaparate de tu negocio en Google",
        intro: [
          "Cuando alguien busca un negocio como el tuyo en Google, lo primero que aparece suele ser el mapa con las fichas de empresa. Tener ahí un perfil completo y cuidado marca la diferencia entre que te elijan a ti o a la competencia.",
          "Un buen perfil de empresa muestra tus horarios, fotos, reseñas y datos de contacto, genera confianza y te ayuda a captar clientes que están cerca y listos para comprar.",
        ],
        points: [
          "Mayor visibilidad en búsquedas locales",
          "Más confianza gracias a fotos y reseñas",
          "Clientes cercanos que te contactan directamente",
        ],
      },
      {
        eyebrow: "Ventajas",
        title: "Todo lo que un buen perfil te aporta",
        cards: [
          {
            title: "Apareces en Maps",
            text: "Sal en Google Maps y en las búsquedas locales cuando buscan negocios como el tuyo cerca.",
          },
          {
            title: "Información al día",
            text: "Horarios, dirección, teléfono y enlace a tu web siempre visibles y actualizados.",
          },
          {
            title: "Reseñas y confianza",
            text: "Las valoraciones de tus clientes generan confianza y animan a otros a elegirte.",
          },
          {
            title: "Fotos que atraen",
            text: "Muestra tu negocio, tus productos y tu equipo con imágenes que enamoran.",
          },
        ],
      },
      {
        eyebrow: "Qué hacemos en Reformalo Vic",
        title: "Nos encargamos de todo, de principio a fin",
        intro: [
          "Tú no tienes que pelearte con la configuración: lo dejamos todo correctamente preparado.",
        ],
        cards: [
          {
            title: "Creación desde cero",
            text: "Damos de alta tu perfil con todos los datos correctos si aún no lo tienes.",
          },
          {
            title: "Optimización",
            text: "Rellenamos categorías, servicios, descripción y fotos para sacarle el máximo partido.",
          },
          {
            title: "Verificación",
            text: "Gestionamos el proceso de verificación para que tu perfil aparezca en Google.",
          },
          {
            title: "Todo configurado",
            text: "Te lo dejamos listo y ordenado, explicándote cómo mantenerlo al día.",
          },
        ],
      },
    ],
    cta: {
      title: "¿Quieres destacar en tu zona?",
      text: "Te creamos y optimizamos el perfil de empresa de Google para que captes más clientes cercanos.",
    },
  },

  "automatizaciones-ia": {
    slug: "automatizaciones-ia",
    emoji: "🤖",
    label: "Automatizaciones con IA",
    title: "Tu negocio contestando solo, mientras tú trabajas",
    intro:
      "Montamos automatizaciones con inteligencia artificial para que las tareas repetitivas se hagan solas: responder, pedir reseñas y recordar citas.",
    metaTitle: "Automatizaciones con IA para negocios locales",
    metaDescription:
      "Respuestas automáticas de WhatsApp, petición de reseñas y recordatorios de citas con IA y Make.com para pymes y negocios locales de Osona y Catalunya.",
    blocks: [
      {
        eyebrow: "Qué hacemos",
        title: "Menos tareas repetitivas, más tiempo para tus clientes",
        intro: [
          "Muchos negocios pierden clientes por algo tan simple como no poder contestar a tiempo. Las automatizaciones con IA se ocupan de esa parte por ti, las 24 horas, y tú sigues atendiendo a quien tienes delante.",
          "Las configuramos a medida de tu negocio y de tu forma de hablar, usando herramientas como Make.com. Tú no tienes que tocar nada técnico.",
        ],
        points: [
          "Respuestas automáticas en WhatsApp",
          "Petición de reseñas tras cada cliente",
          "Recordatorios de citas",
        ],
      },
      {
        eyebrow: "Ejemplos",
        title: "Tres automatizaciones que ponen el negocio a trabajar",
        cards: [
          {
            title: "Respuestas automáticas de WhatsApp",
            text: "Tus clientes reciben respuesta al momento, incluso fuera de horario, y tú recibes la conversación ya ordenada.",
          },
          {
            title: "Petición de reseñas",
            text: "Después de cada visita, un mensaje amable invita a dejar una reseña en Google. Más reseñas, más confianza.",
          },
          {
            title: "Recordatorios de citas",
            text: "Un aviso antes de la cita para que nadie se olvide, con opción de confirmar o cambiarla.",
          },
        ],
      },
    ],
    cta: {
      title: "¿Qué tarea te gustaría quitarte de encima?",
      text: "Cuéntanosla y vemos cómo automatizarla, sin compromiso.",
    },
  },
};

export const servicePageSlugs = Object.keys(servicePages);
