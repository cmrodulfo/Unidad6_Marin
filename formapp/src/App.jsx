
import { ChakraProvider } from '@chakra-ui/react'
import './App.css'
import { Form } from './Components/Form/Form'

function App() {
  
  return (
    <ChakraProvider>
      <Form/>
    </ChakraProvider>
  )
}

export default App
