import './Form.scss'
import {Link} from "react-router-dom";
import React from "react";

let items = [
    {
        Title: 'Questionnaire for games',
        link: 'https://docs.google.com/forms/d/e/1FAIpQLSe1uJmkgc8VlEkvJYLRFg5F18cDgRO_dFyAYHHj8TzxQu30Eg/viewform',
        desc: 'This is a general questionnaire related to develop of games which can indicate what user would love to see on their games and what they might dislike from games in general'
    },
    {
        Title: 'Story game questionnaire ',
        link: 'https://docs.google.com/forms/d/e/1FAIpQLSeGYm54rgavXH47mIrkSDhGUJeS2lX-fgsgn2m07eJ6JWs7aw/viewform',
        desc: 'This is to question what type of story you like in game. Also making sure to see which aspects of the story are liked by users and how we can indicate if what we are building is the correct way '
    },
    {
        Title: 'Gameplay Experience Survey',
        link: 'https://docs.google.com/forms/d/e/1FAIpQLSdKHmVl6gzqeSQC6qJAyHHAAdeyNWK31O6egmu4dUSZyqnkbQ/viewform',
        desc: 'Experience is one of the most important part in games since that is what the player will be interacted. We created this questionnaire so you can give to us what you want to experience the most in games and what part you want to see further development '
    }
]

function renderCard() {
    return items.map((item) =>  (
        <div className={'card'}>
            <h4>
                {item.Title}
            </h4>
            <span>{item.desc}</span>
            <div className={'link-container'}>
                <a className={'card__button'} target={'_blank'} href={item.link}>Go to Questionnaire</a>
            </div>
        </div>
    ))
}

function Form() {
    return (

        <div className={'container'}>
            <div className={'back-button'}>
                <Link to={'/'}>
                    <span>Go Home</span>
                </Link>
            </div>

            {renderCard()}
        </div>
    );
}

export default Form
