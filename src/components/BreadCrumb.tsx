function BreadCrumbs() {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <a href="#">Games</a>
        </li>
        <li className="breadcrumb-item active" aria-current="page">
          Favourite Games
        </li>
      </ol>
    </nav>
  );
}
export default BreadCrumbs;
