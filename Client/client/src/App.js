import './App.css';
import {Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import Landing from './components/Landing'
import SignUp from './components/SignUp'
import Login from './components/Login';
import Profile from './components/Profile';
import EditBank from './components/EditBank';
import TestMaker from './components/TestMaker';
import {DataContext} from './DataContext'
import {useState } from 'react';
import DesignTest from './components/DesignTest';

function App() {
  const [authenticated, setAuth] = useState(false)
  const [user, setUser] = useState(false)
  const [isLoggedIn, setLoggedIn] = useState(true)
  const [currentBank, setCurrentBank] = useState({})
  const [refresh, setRefresh]= useState(0)
  const [testData, setTestData] = useState([])

//Login is username:dev password:dev
  return (

    
    <DataContext.Provider value ={{authenticated, setAuth,
                            user,setUser,
                            isLoggedIn, setLoggedIn,
                            currentBank, setCurrentBank,
                            refresh, setRefresh,
                            testData, setTestData}}>
    <div className="App">
      <Header/>
      <main className='main'>
        <Routes>
          <Route exact path ='/' element = {<Landing/>}/>
          <Route exact path ='/SignUp' element = {<SignUp/>}/>
          <Route exact path ='/profile' element = {<Profile/>}/>
          <Route exact path ='/login' element = {<Login/>}/>
          <Route exact path ='/editBank' element ={<EditBank/>}/>
          <Route exact path ='/test_maker' element = {<TestMaker/>}/>
          <Route exact path ='/design_test' element = {<DesignTest/>}/>
        </Routes>
      </main>
      
    </div>
    </DataContext.Provider>
  );
}

export default App;
