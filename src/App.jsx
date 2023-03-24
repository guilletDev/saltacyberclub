import Eventos from './components/Eventos'
import styles from './style'


function App() {

  return (
    <div className="bg-primary w-full overflow-hidden">

      <h1 className= 'text-3xl font-bold  text-center mt-8 text-orange-600 hover:text-red-600 pointer-events-auto'>Hello world</h1>
      
      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth} px-12`}>
        <Eventos />
        </div>
      </div>
      
      
    </div>
  )
}

export default App
