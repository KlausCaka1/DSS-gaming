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
}, {
    name: 'Tickets',
    link: '/tickets'
}, {
        name: 'Characters',
        link: '/characters'
}
]

function renderMenuItems() {
    return items.map(item => (
        <Link to={item.link} className={'dashboard__item'}>
        <div>
                <span className={'dashboard__text'}>{item.name}</span>
        </div>
        </Link>
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
