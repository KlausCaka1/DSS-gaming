import {Link} from "react-router-dom";
import React from "react";
import "./Characters.css"
import characters from "./Characters.json"

import warrior from "./Characters_img/warrior.png"
import mage from "./Characters_img/mage.png"
import ranger from "./Characters_img/Ranger.png"
import assasin from "./Characters_img/assasin.png"
import paladin from "./Characters_img/paladin.png"
import dark_knight from "./Characters_img/dark_knight.png"

const imageMap = {
    warrior: warrior,
    assasin: assasin,
    mage: mage,
    ranger: ranger,
    paladin: paladin,
    dark_knight: dark_knight,
};

let items = characters;

function renderCharacters() {
    return items.map((item) => (
        <div className="card" key={item.id}>
            <img src={imageMap[item.image]} alt={item.name} className="card__image" />

            <h3>{item.name}</h3>
            <h5>{item.role}</h5>

            <p>{item.description}</p>

            <p><strong>Weapon:</strong> {item.weapon}</p>
            <p><strong>Difficulty:</strong> {item.difficulty}</p>

            <div>
                <strong>Abilities:</strong>
                <ul>
                    {item.abilities.map((ability, index) => (
                        <li key={index}>{ability}</li>
                    ))}
                </ul>
            </div>
        </div>
    ));
}

function Characters() {
    return (

        <div className={'container'}>
            <div className={'back-button'}>
                <Link to={'/'}>
                    <span>Go Home</span>
                </Link>
            </div>

            {renderCharacters()}
        </div>
    );
}

export default Characters
