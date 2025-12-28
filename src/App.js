import {Route, Routes} from "react-router";
import './App.scss'
import {Link} from "react-router-dom";
import DSSHome from "./form/DSS-Home";

let items = [{
    name: "From",
    link: "/form"
}, {
    name: 'Feedback From',
    link: '/feedback'
}]

function renderMenuItems() {
    return items.map(item => (
        <div className={'dashboard__item'}>
            <Link to={item.link}>
                <span className={'dashboard_text'}>{item.name}</span>
            </Link>
        </div>
    ))
}

function App() {
  return (
    <div className="App">
        <div className={'dashboard'}>
            {renderMenuItems()}
        </div>
        <div className={'home'}>
            <DSSHome/>
        </div>
    </div>
  );
}

export default App;
