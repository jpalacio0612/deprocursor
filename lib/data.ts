export interface Item {
  title: string;
  description: string;
  text: string;
  indicator: string;
  participants: number;
  strengthened: number;
  notStrengthened: number;
}

export const data: Item[] = [
  {
    title: "1. Fortalecimiento del autoconcepto",
    description:
      "El autoconcepto es la imagen y valoración que cada persona tiene de sí misma. Fortalecerlo contrarresta efectos del trauma y el estigma, y ayuda a la reintegración.",
    text: `
              El autoconcepto es la imagen y valoración que cada persona tiene
              de sí misma y es un pilar fundamental en adolescentes privados de
              libertad, y potenciarlo tiene un impacto directo en su proceso de
              rehabilitación y reintegración. \n
              Es importante fortalecer dicho aspecto en la población
              objetivo ya que contrarresta los efectos del trauma y el estigma ,
              pues los antecedentes traumáticos elevados (armas de fuego,
              violencia física) y el marcado consumo de sustancias psicoactivas
              suelen erosionar la autoestima y generar sentimientos de culpa o
              «no merecimiento». Un autoconcepto fortalecido les ayuda a verse
              como sujetos valiosos, capaces de cambiar y construir proyectos de
              vida distintos. Además aumenta la motivación y la adherencia a
              programas pues la buena percepción de sí mismos los lleva
              comprometerse más con las actividades que elevan su bienestar como
              las actividades académicas y procesos terapéuticos. \n
              Finalmente, teniendo en cuenta el objetivo del proyecto,
              fortalecer el autoconcepto brinda un sostén para la
              reincorporación social en la etapa de 16–17 años, pues da el
              impulso necesario para buscar pertenecer a entornos que promuevan
              la participación saludable, llevándolos a planear estudios,
              trabajo, actividades de interés personal, viéndose como personas
              con derecho y capacidad de contribuir positivamente a la
              comunidad.
    `,
    indicator: "Porcentaje del incremento de la autopercepción positiva",
    participants: 35,
    strengthened: 25,
    notStrengthened: 10,
  },
  {
    title: "2. Participación y toma de decisiones",
    description:
      "Involucrar a los adolescentes en la planificación y ejecución fomenta compromiso, autorregulación y responsabilidad.",
    text: "Tanto la participación activa como la toma de decisiones, son ejes clave para el proceso de cambio en adolescentes privados de libertad, pues cuando hay una participación de los usuarios en la planificación y ejecución de actividades, dejan de ser receptores pasivos y se convierten en agentes de su propio proceso. La posibilidad de proponer o modificar instrucciones básicas les da la sensación de que su criterio, posición y percepción ante ciertas situaciones importa, aumentando su compromiso con el grupo y con las normas que ellos mismos ayudaron a construir.\n\n Para el proceso en el que se encuentran estos adolescentes es indispensable que se fomente la responsabilidad y la autorregulación, la toma decisiones juega un papel crucial en la adquisición de estas habilidades, pues los lleva a asumir las consecuencias implícitas, a reevaluar el porqué fallo y cómo debe solucionarse. Esa rendición de cuentas a sí mismos y a los demás, fortalece la responsabilidad personal y colectiva.",
    indicator: "Porcentaje de participación activa y toma de decisiones",
    participants: 35,
    strengthened: 20,
    notStrengthened: 15,
  },
  {
    title: "3. Trabajo en equipo",
    description:
      "Colaborar potencia habilidades como empatía, resolución de conflictos y preparación para la vida laboral.",
    text: "El trabajo en equipo resulta crucial en adolescentes privados de libertad, porque potencia múltiples dimensiones de su desarrollo y rehabilitación. Colaborar obliga a escuchar opiniones distintas, expresar ideas con claridad y negociar soluciones. Estas prácticas fortalecen la empatía, la asertividad y la resolución de conflictos, competencias clave para la vida en sociedad.\n\n Además los lleva a asumir roles dentro del grupo,lo que permite adquirir una posición frente a sus compañeros y esto se enlaza directamente con el autoconcepto. Esta habilidad implica unir fuerza en pro de un objetivo en común, dando apertura a dejar de lado las diferencias que hayan entre pares, pues brinda la oportunidad de identificar con quienes se tienen ideales similares, cuales son las fortalezas de cada uno y cómo estas pueden aprovecharse de la mejor manera para un beneficio colectivo.\n\n El trabajo en equipo también es una preparación para la vida laboral y la reincorporación social, debido que proporciona herramientas para facilitar la colaboración mutua entre compañeros para la ejecución de proyectos haciendo que la coordinación y la asignación de roles sea un proceso más sencillo en la vida real.",
    indicator: "Porcentaje de mejora en trabajo en equipo",
    participants: 35,
    strengthened: 30,
    notStrengthened: 5,
  },
  {
    title: "4. Uso de habilidades de comunicación",
    description:
      "La comunicación clara y respetuosa mejora la convivencia, fortalece vínculos y promueve la reinserción social.",
    text: "Las habilidades de comunicación son vitales en adolescentes privados de libertad porque facilitan la resolución de conflictos. Expresar necesidades, emociones e inquietudes de manera clara y respetuosa reduce malentendidos y agresiones, creando un ambiente más seguro. Además de ello, promueve la empatía entre compañeros, pues escuchar de manera activa las ideas de los demás permite conocer otras formas de pensar, facilita el entendimiento de los sentimientos y fortalece los lazos de confianza y apoyo dentro del grupo.\n\n Por otra parte, el trabajo en equipo mejora las habilidades dentro de entornos académicos, laborales, facilita las dinámicas entre vínculos familiares, lo que favorece sus oportunidades de integración y reinserción social.",
    indicator: "Porcentaje de uso de habilidades de comunicación en el grupo",
    participants: 35,
    strengthened: 25,
    notStrengthened: 10,
  },
  {
    title: "5. Resolución de conflictos",
    description:
      "Desarrollar habilidades para resolver conflictos pacíficamente reduce la violencia y reincidencia.",
    text: "La resolución de conflictos es especialmente importante en adolescentes privados de libertad por las siguientes razones fundamentales:  Para la prevención de la violencia, dado que muchos conflictos en este contexto se resuelven mediante la agresión verbal o física. Fortalecer habilidades de resolución pacífica reduce enfrentamientos y mejora la convivencia dentro del centro y también favorece los procesos de reinversión social pues aprender a gestionar conflictos de forma constructiva promueve el desarrollo de habilidades sociales clave como la empatía, la escucha activa y la autorregulación emocional, fundamentales para su reintegración en la sociedad. Además de ello se reduce la reincidencia ya que se disminuye la probabilidad de que los adolescentes reincidan en conductas delictivas una vez egresen.",
    indicator:
      "Porcentaje de uso de técnicas de mediación en desacuerdos grupales",
    participants: 35,
    strengthened: 20,
    notStrengthened: 15,
  },
  {
    title: "6. Respeto en situaciones sociales",
    description:
      "El respeto disminuye conflictos y favorece la convivencia y reintegración.",
    text: "El respeto en situaciones sociales es especialmente importante en adolescentes privados de libertad porque reduce la violencia y los conflictos; en contextos donde hay tensiones constantes, el respeto actúa como una barrera que previene las agresiones físicas y verbales. El fortalecimiento del respeto favorece la convivencia y el sentido de la comunidad ya que crea un clima más armonioso, donde todos pueden participar sin miedo ni presión.\n\n Es importante resaltar que trabajar las habilidades de respeto prepara a los usuarios para la reinserción social; dado que la vida fuera del centro dependen en gran medida de saber convivir, convirtiéndose en una habilidad clave para ser aceptado e integrado en sociedad.",
    indicator: "Porcentaje de usuarios que manifiestan conductas de respeto",
    participants: 35,
    strengthened: 30,
    notStrengthened: 5,
  },
  {
    title: "7. Gestión de las emociones",
    description:
      "La gestión emocional ayuda a prevenir conductas de riesgo y favorece el desarrollo integral.",
    text: "La gestión de las emociones es especialmente importante en la población debido que la adolescencia es un momento en el que se consolidan la identidad, la autoestima y las habilidades sociales. Sin una adecuada gestión emocional, es más probable que los jóvenes recurran a conductas impulsivas o destructivas. Además , previene las conductas de riesgo pues la falta de control emocional está asociada con comportamientos como el consumo de sustancias psicoactivas, la agresividad, la evasión escolar o la infracción de normas. Trabajar en la gestión emocional reduce estas conductas y promueve decisiones más saludables.\n\n  Para los jóvenes en contextos correccionales, aprender a reconocer y regular sus emociones es clave para su reintegración positiva en la sociedad. Esto fortalece la empatía, el autocontrol y la capacidad de resolver conflictos sin violencia. Dicha habilidad también permite una mejora de la participación debido a que un joven que comprende sus emociones y sabe cómo expresarlas adecuadamente está más preparado para involucrarse en actividades educativas, laborales o recreativas. Esto favorece su desarrollo integral y su participación social activa.",
    indicator: "Porcentaje de usuarios con manejo y gestión emocional",
    participants: 35,
    strengthened: 15,
    notStrengthened: 20,
  },
];
