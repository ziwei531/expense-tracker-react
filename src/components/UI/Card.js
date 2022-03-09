import './Card.css'

function Card(props) {
    const classes = 'card ' + props.className;

    return <div className={classes}>{props.children}</div>; //props.children allows additional html elements to be wrapped under <Card />
}

export default Card;