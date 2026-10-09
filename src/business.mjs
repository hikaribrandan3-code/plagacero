// Confirm the trading name, exact services and hours with the owner before launch.
export const business = {
  name: 'Control de Plagas',
  phone: '+54 351 339 4868',
  telephone: '+543513394868',
  whatsapp: '543513394868',
  area: 'Córdoba Capital, Córdoba, Argentina',
  experience: 'Más de 10 años',
  hours: null, // No unconfirmed hours are published or added to schema.
  reviews: [], // Genuine owner-approved testimonials only.
  services: [
    { id: 'desinsectacion', name: 'Desinsectación', detail: 'Tratamientos para cucarachas, hormigas, mosquitos, pulgas y otros insectos, según la evaluación del ambiente.', icon: 'bug', number: '01' },
    { id: 'alacranes', name: 'Control de alacranes', detail: 'Evaluación de posibles ingresos y refugios. Tratamiento y recomendaciones de prevención para tu hogar.', icon: 'shield', number: '02' },
    { id: 'chinches', name: 'Chinches de cama', detail: 'Evaluación y tratamiento específico de dormitorios, colchones y otras zonas afectadas.', icon: 'bed', number: '03' },
    { id: 'desratizacion', name: 'Desratización', detail: 'Control de ratas y ratones, con evaluación de señales de actividad, accesos y condiciones del lugar.', icon: 'home', number: '04' },
    { id: 'infestaciones', name: 'Control de infestaciones', detail: 'Evaluación de problemas persistentes para definir el tratamiento y la necesidad de seguimiento.', icon: 'layers', number: '05' }
  ],
  pests: [ ['Cucarachas','bug'], ['Alacranes','shield'], ['Chinches de cama','bed'], ['Hormigas','bug'], ['Mosquitos','bug'], ['Arañas','bug'], ['Pulgas / garrapatas','bug'], ['Roedores','home'], ['Otros','more'] ],
  faq: [
    { q: '¿En qué zonas de Córdoba trabajan?', a: 'Atendemos a domicilio en Córdoba Capital, Córdoba, Argentina. Mandanos tu barrio o zona por WhatsApp para coordinar la visita.' },
    { q: '¿Qué plagas pueden tratar en casa?', a: 'Evaluamos problemas de cucarachas, alacranes, chinches de cama, hormigas, mosquitos, arañas, pulgas, garrapatas y roedores. El tratamiento depende de la plaga y del ambiente.' },
    { q: '¿Cómo pido un presupuesto de fumigación en Córdoba?', a: 'Escribinos por WhatsApp o completá el formulario. Contanos tu barrio, el tipo de vivienda y qué está pasando. Con esa información podemos orientarte y coordinar una evaluación.' },
    { q: '¿Tengo que salir de casa? ¿Qué hago con mis mascotas?', a: 'Depende del tratamiento. Avisanos si hay mascotas y quiénes viven en el lugar. Antes de la visita te indicamos cómo preparar los ambientes y qué precauciones y tiempos de reingreso corresponden.' },
    { q: '¿Cómo preparo la casa antes del tratamiento?', a: 'La preparación cambia según la plaga y el método. Te vamos a dar indicaciones específicas antes de la visita; consultanos antes de mover muebles o aplicar productos por tu cuenta.' },
    { q: '¿Alcanza con una sola visita?', a: 'Depende de la plaga, el nivel de actividad y las condiciones del lugar. En la evaluación te explicamos si hace falta seguimiento y qué medidas ayudan a reducir nuevas apariciones.' }
  ]
};
export const seo = {
  title: 'Control de plagas Córdoba Capital | Fumigación a domicilio',
  description: 'Control de plagas y fumigación en Córdoba Capital, Córdoba, Argentina. Cucarachas, alacranes, chinches de cama y roedores. Consultá por WhatsApp.',
  image: '/images/og-control-plagas-cordoba.jpg',
  imageAlt: 'Control de Plagas: atención a domicilio en Córdoba Capital, con un detalle ilustrativo de una cucaracha.'
};
