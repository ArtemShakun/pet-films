export default function SideBarNavigation({ category, nav }) {
    return (
        <div className="sideBar__menu">
            <p className="sideBar__menu-title">{category}</p>
            <ul className="sideBar__menu-ul">
                {nav
                    ? nav.map((item) => (
                          <li className="sideBar__menu-li" key={item.title}>
                              <a href="">
                                  <span className="sideBar__menu-li-img">
                                      <img src={item.icon} alt={item.icon} />
                                  </span>
                                  {item.title}
                              </a>
                          </li>
                      ))
                    : null}
            </ul>
        </div>
    );
}
