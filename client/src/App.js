import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import {Spinner} from "react-bootstrap";
import NavBar from "./components/NavBar";
import {observer} from "mobx-react";
import {useContext, useEffect, useState} from "react";
import {Context} from "./index";
import {check} from "./http/userApi";


const App = observer(() =>{
    const {user} = useContext(Context)
    const [loading, setLoading] = useState(true)

    useEffect(()=>{

            check().then(data =>{
                user.setUser(data)
                user.setIsAuth(true)

            }).finally(()=> setLoading(false))

    },[])
    if(loading){
        return <Spinner animation={"grow"} className='d-flex justify-content-center'/>
    }

  return (
    <BrowserRouter >
        <NavBar/>
      <AppRouter/>
    </BrowserRouter>
  );
})

export default App;
