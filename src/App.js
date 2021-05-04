import 'bootstrap/dist/css/bootstrap.min.css'
import MyNavBar from './components/MyNavBar'
import Home from './components/Home'

const App = () => {
  return (
    <div>
      <MyNavBar title="Strivestaurant" />
      <Home newTitle="This is a new Title" newPayoff="This is a new Payoff"/>
    </div>
  )
}

export default App
