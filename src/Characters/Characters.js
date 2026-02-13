import {Link} from "react-router-dom";
import React from "react";
import "./Characters.css"

import warrior from "./Characters_img/warrior.png"
import mage from "./Characters_img/mage.png"
import ranger from "./Characters_img/Ranger.png"
import assasin from "./Characters_img/assasin.png"
import paladin from "./Characters_img/paladin.png"
import dark_knight from "./Characters_img/dark_knight.png"



let items = [
    {
        id: 1,
        name: "Arkon Blaze",
        role: "Warrior",
        description: "A frontline melee fighter with high durability and powerful flame-infused attacks.",
        image: warrior,
        weapon: "Flame Greatsword",
        abilities: ["Inferno Slash", "Shield Guard", "Berserker Rage"],
        difficulty: "Medium"
    },
    {
        id: 2,
        name: "Lyra Moonshadow",
        role: "Assassin",
        description: "A stealth-based assassin who eliminates enemies before they even notice her presence.",
        image: assasin,
        weapon: "Twin Shadow Daggers",
        abilities: ["Shadow Step", "Backstab", "Vanish"],
        difficulty: "Hard"
    },
    {
        id: 3,
        name: "Eldon Frost",
        role: "Mage",
        description: "Master of frost magic capable of freezing entire battlefields.",
        image: mage,
        weapon: "Ancient Ice Staff",
        abilities: ["Frost Nova", "Blizzard Storm", "Ice Barrier"],
        difficulty: "Easy"
    },
    {
        id: 4,
        name: "Kael Stormrider",
        role: "Ranger",
        description: "An elite archer who commands lightning and strikes from long range.",
        image: ranger,
        weapon: "Thunder Bow",
        abilities: ["Lightning Arrow", "Eagle Eye", "Storm Volley"],
        difficulty: "Medium"
    },
    {
        id: 5,
        name: "Seraphina Dawn",
        role: "Paladin",
        description: "A holy warrior who protects allies and heals them during combat.",
        image: paladin,
        weapon: "Sacred Hammer",
        abilities: ["Divine Shield", "Holy Smite", "Healing Light"],
        difficulty: "Easy"
    },
    {
        id: 6,
        name: "Draven Nightfall",
        role: "Dark Knight",
        description: "A corrupted knight wielding forbidden dark energy.",
        image: dark_knight,
        weapon: "Cursed Blade",
        abilities: ["Dark Slash", "Soul Drain", "Nightmare Form"],
        difficulty: "Hard"
    },
];

function renderCharacters() {
    return items.map((item) => (
        <div className="card" key={item.id}>
            <img src={item.image} alt={item.name} className="card__image" />

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
