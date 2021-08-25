import React from "react";
import { SearchPanel } from "./components/app/SearchPanel";
import { Ip } from "./components/app/Ip";
import { Mail } from "./components/app/Mail";
import { Nickname } from "./components/app/Nickname";
import { RealName } from "./components/app/RealName";
import { Phone } from "./components/app/Phone";
import { Route, Switch, useHistory } from "react-router-dom";

export const App: React.FC = () => {
  const history = useHistory();
  const addHandler = (request: string) => {
    console.log(request, "from App request");

    const regNickname = new RegExp(/^[^0-9]\w+$/),
      regName = new RegExp(/^[a-z ,.'-]+$/i),
      regMail = new RegExp(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      ),
      regIp = new RegExp(
        /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/
      );

    if (regNickname.test(request) === true) {
      console.log("is it Nickname");
      history.push("/Nickname");
    } else if (regMail.test(request) === true) {
      history.push("/Mail");
    } else if (regName.test(request) === true) {
      history.push("/Name");
    } else if (regIp.test(request) === true) {
      history.push("/Ip");
    } else {
      console.log("Write normal text");
    } // запилить обычную константу с данным
  };

  return (
    <Switch>
      <Route path="/" render={() => <SearchPanel onAdd={addHandler} />} exact />
      <Route path="/Nickname" component={Nickname} />;
      <Route path="/Ip" component={Ip} />
      <Route path="/Mail" component={Mail} />
      <Route path="/Phone" component={Phone} />
      <Route path="/Name" component={RealName} />
    </Switch>
  );
};
