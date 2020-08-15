import App from 'next/app'

import "../styles/styles.css" // used for global styling

// used for font-awesome icon styling in SSR
import { config } from '@fortawesome/fontawesome-svg-core'
import "@fortawesome/fontawesome-svg-core/styles.css"
config.autoAddCss = false

export default App
