import Button from '@mui/material/Button';
import BasicButtons from './components/BasicButtons';
import BasicButtonGroup from './components/ButtonGroup';
import BasicSkeleton from './components/BasicSkeleton';
import BasicSelect from './components/Select';
import FloatingActionButtons from './components/FloatingActionButton'
import AppComponent from './chat/AppComponent'

function App() {

  return (
    <>
      {/* <Button variant="contained">Hello world</Button>
      <BasicButtons/>
      <BasicButtonGroup/>
      <BasicSkeleton/>
      <BasicSelect/>
      <FloatingActionButtons/> */}
      <AppComponent/>
    </>
  )
}

export default App
