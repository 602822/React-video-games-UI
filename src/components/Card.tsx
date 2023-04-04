type CardProps = {
  img: string;
  title: string;
  description: string;
};

function Card(props: CardProps) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={props.img} className="card-img-top" alt="image not loading" />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
        <a href="#" className="btn btn-primary">
          Add to favourite
        </a>
      </div>
    </div>
  );
}

export default Card;
