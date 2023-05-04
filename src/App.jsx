import Eventos from './components/Eventos'
import styles from './style'
import Sponsors from './components/Sponsors'
import Contacto from './components/Contacto'
import Footer from './components/Footer'
import Redes from './components/Redes'
import Noticias from './components/Noticias'
import Somos from './components/Somos'
import Navbar from './components/Navbar'
import Hero2 from './components/Hero2'


function App() {

  return (
    <div className="bg-primary">
      <div className={`w-[1600px]  `}>
      
            <Navbar />
        
        
      </div> 



      <div className={`${styles.boxWidth} `}>
      <Hero2 />
      </div>


      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth} sm:py-10 sm:px-12 `}> 
        <Somos />  
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
