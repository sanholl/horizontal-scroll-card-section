import { HorizontalSection } from './components/HorizontalSection/HorizontalSection';
import './index.css';

function App() {

  return (
    <>
      <section className="dummy-section">
        <div className='inner'>
          <h1>Prev Content</h1>
        </div>
      </section>

      <HorizontalSection />

      <section className="dummy-section">
        <div className='inner'>
          <h1>Next Content</h1>
        </div>
      </section>
    </>
  )
}

export default App
