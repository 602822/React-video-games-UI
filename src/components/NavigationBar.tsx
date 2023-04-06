import { useState } from "react";
function NavigationBar() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const handleclick = (index: number) => {
    setSelectedIndex(index);
  };

  return (
    <ul className="nav nav-pills">
      <li className="nav-item">
        <a
          className={selectedIndex === 0 ? "nav-link active" : "nav-link"}
          href="#"
          onClick={() => handleclick(0)}
        >
          Games
        </a>
      </li>
      <li className="nav-item">
        <a
          className={selectedIndex === 1 ? "nav-link active" : "nav-link"}
          href="#"
          onClick={() => handleclick(1)}
        >
          Favourite Games
        </a>
      </li>
    </ul>
  );
}

export default NavigationBar;
