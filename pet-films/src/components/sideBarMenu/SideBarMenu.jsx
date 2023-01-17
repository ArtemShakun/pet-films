import mainLogo from '../../assets/mainLogo.png';
import './SideBarMenu.css';
import { navBarMenu } from '../../mock/navBarMenu';
import SideBarNavigation from './SideBarNavigate';

export function SideBarMenu() {
    return (
        <div className="sideBarContainer">
            <div className="sideBarContainer-logo">
                <img src={mainLogo} alt="Main-Logo" />
            </div>
            {navBarMenu.map((item) => (
                <SideBarNavigation
                    category={item.category}
                    nav={item.nav}
                    key={item.category}
                />
            ))}
        </div>
    );
}
