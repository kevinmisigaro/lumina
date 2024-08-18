import TitleItem from "./TitleItem";

function NavBar() {

  return (
    <div className="navbar bg-base-100 mb-5">
      <div className="flex-1">
        <TitleItem title="Lumina Ventures" />
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Services</a>
          </li>
          <li>
            <a>Products</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
