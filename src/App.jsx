import Eventos from './components/Eventos'
import styles from './style'
import Sponsors from './components/Sponsors'
import Contacto from './components/Contacto'
import Footer from './components/Footer'
import Redes from './components/Redes'
import Noticias from './components/Noticias'


function App() {

  return (
    <div className="bg-primary w-full overflow-hidden">
      
      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth} sm:py-10 sm:px-12 py-10`}>
        <hr /><br />  
        <Noticias /><br /><br />
          <hr />
        <Eventos />
        <br /><br />
        <hr /><br />
        <Sponsors />
        <br /><br />
        <hr />
        <Contacto />
        <Redes />
        <Footer />
        </div>
      </div>
      
      
    </div>
  )
}

export default App
