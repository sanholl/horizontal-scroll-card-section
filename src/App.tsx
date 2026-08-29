import { HorizontalSection } from './components/HorizontalSection/HorizontalSection';
import './index.css';

function App() {

  return (
    <>
      <section className="dummy-section">
        <div className='inner' />
      </section>

      <HorizontalSection />

      <section className="dummy-section">
        <div className='inner' />
      </section>
    </>
  )
}

export default App
