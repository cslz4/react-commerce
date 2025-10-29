import { SomeComponent } from './components/SomeComponent'
import './index.css'
import { MainLayout } from './layout/MainLayout'

function App() {
  return (
    <MainLayout>
      <SomeComponent />
    </MainLayout>
  )
}

export default App
