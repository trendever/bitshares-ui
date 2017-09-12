import React from "react";
import {PropTypes, Component} from "react";
import cname from "classnames";


let slides = [

    {
        id:1,
        image: require('./images/landing_slide_1.png'),
        title: "1-click To Buy Crypto Portfolio",
        text: `
        Sign-up, click deposit and you already own top-5 liquid and steady growing cryptocurrencies. It’s never been easier
        `
    },
    {
        id:2,
        image: require('./images/landing_slide_2.png'),
        title: "Deposit Any Currency",
        text: `
        Invest USD, RUB, EUR, CNY or any cryptocurrency with minimal commission, at best exchange rate
        `
    },
    {
        id:3,
        image: require('./images/landing_slide_3.png'),
        title: "Uncrackable Like Bitcoin",
        text: `
        Your funds are held decentralized and secured by immutable BitShares blockchain. Only you hold the private key
        `
    },
    {
        id:4,
        image: require('./images/landing_slide_4.png'),
        title: "Fast Withdrawal Guaranteed",
        text: `
        Anytime and anywhere you can immediately withdraw funds to any account, wallet or bank card
        `
    },
    {
        id:5,
        image: require('./images/landing_slide_5.png'),
        title: "1-Click To Fix Income",
        text: `
        Fix income to wait out hyper volatility on the market. Just one click to move funds from crypto to traditional assets, e.g. Gold, USD, EUR or CNY
        `
    }

]



class Landing extends Component {

    constructor() {
        super();
    }

    render() {

        const button = <button className="land_button">INVEST NOW</button>

        const list = slides.map((slide, index)=>
            <div className="land_slide" key={slide.id}>
                <h1>{slide.title}</h1>
                <div className="_body">{slide.text}</div>
                <img className="_image" src={slide.image}/>
                {index==0||index==4?button: null}
            </div>
        );

        return (            
            <div id="landing">
                <div className="land_slides">
                    {list}
                </div>
                <div className="last_text">
                    <p>First time in history every person on earth can invest in a globally disruptive, yet infant, technology</p>
                    <p>Depositing into Trusty.Fund now is like investing in index of Internet companies of 90s, when 20 million people used Internet</p>
                </div>
            </div>
        );
    }

}

export default Landing;
