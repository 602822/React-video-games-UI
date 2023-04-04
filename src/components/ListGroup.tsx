function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  if (items.length === 0)
    return (
      <>
        <h1>My List</h1>
        <p> No Items Found</p>
      </>
    );

  return (
    <>
      <h1>My List</h1>
      <ul className="list-group">
        <ol className="list-group list-group-numbered">
          {items.map((item) => (
            <li key={item} className="list-group-item">
              {item}
            </li>
          ))}
        </ol>
      </ul>
    </>
  );
}

export default ListGroup;
