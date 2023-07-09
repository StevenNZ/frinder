import "./HeroStyles.css";

function Hero (props) {
    return (
        <>
        <div className={props.cName}>
            <img alt="HeroImg" src={props.heroImg}/>
        </div>
        <div className="hero-text">
            <h1>{props.title}</h1>
        </div>
        </>
    )
}

export default Hero;