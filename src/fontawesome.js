// src/fontawesome.js
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCog, faKey, faPlus, faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'

// Agrega los íconos que necesitas a la biblioteca
library.add(faUserSecret, faFacebook,faKey,faPlus,faCog)

// Exporta el componente FontAwesomeIcon para usarlo globalmente
export { FontAwesomeIcon }
