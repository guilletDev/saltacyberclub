import Eventos from './components/Eventos'
import styles from './style'


function App() {

  return (
    <div className="bg-primary w-full overflow-hidden">
      
      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth} sm:py-10 sm:px-12 py-10`}>
          <hr />
        <Eventos />
        <hr />
        </div>
      </div>
      
      
    </div>
  )
}

export default App
