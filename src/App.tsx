import { HorizontalSection } from './components/HorizontalSection/HorizontalSection';
import './index.css';

function App() {

  return (
    <>
      <section className="dummy-section">
        <h2>Previous Section</h2>
      </section>

      <HorizontalSection />

      <section className="dummy-section">
        <h2>Next Section</h2>
      </section>
    </>
  )
}

export default App
