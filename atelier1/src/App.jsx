import Bonjour from './components/Bonjour'
import Salut from './components/Salut'
import ListeFruits from './components/ListeFruits'
import Message from './components/Message'
import './App.css'

export default function App() {
  return (
    <>
      <Message />
      <Bonjour />
      <Salut />
      <ListeFruits />
    </>
  )
}
