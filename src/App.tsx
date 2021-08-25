import React, {useState} from "react";
import { SearchPanel } from "./components/app/SearchPanel";
import { Ip } from "./components/app/Ip";
import { Mail } from "./components/app/Mail";
import { Nickname } from "./components/app/Nickname";
import { RealName } from "./components/app/RealName";
import { Phone } from "./components/app/Phone";


import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
export const App: React.FC = () => {
    const [request, setRequest] = useState([])

    const addHandler = (title: string) => {
        console.log('add new reqwest', title);
    }

  return (
      
      <Router> 
          <Switch>
            <Route  path="/" render={()=> (<SearchPanel onAdd = {addHandler}/>)}
            exact/>
            
          <Route path="/Ip" component={Ip}/>
          <Route path="/Mail" component={Mail}/>
          <Route path="/Nickname" component={Nickname}/>
          <Route path="/Phone" component={Phone}/>
          <Route path="/RealName" component={RealName}/>
          <Redirect to="/"/>
          </Switch>
    </Router>
  );
};
