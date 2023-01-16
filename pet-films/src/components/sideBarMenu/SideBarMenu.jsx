import mainLogo from '../../assets/mainLogo.png';
import homeIcon from '../../assets/home.png';
import community from '../../assets/community.png';
import compass from '../../assets/compass.png';
import stopwatch from '../../assets/stopwatch.png';
import user from '../../assets/user.png';
import friend from '../../assets/friend.png';
import play from '../../assets/play.png';
import './SideBarMenu.css';

export function SideBarMenu() {
    return (
        <div className="sideBarContainer">
            <div className="sideBarContainer-logo">
                <img src={mainLogo} alt="Main-Logo" />
            </div>
            <div className="sideBar__menu">
                <p className="sideBar__menu-title">MENU</p>
                <ul className="sideBar__menu-ul">
                    <li className="sideBar__menu-li">
                        <a href="">
                            <span className="sideBar__menu-li-img">
                                <img src={homeIcon} alt="home-icon" />
                            </span>
                            <span className="sideBar__menu-li-text">Home</span>
                        </a>
                    </li>
                    <li className="sideBar__menu-li">
                        <a href="">
                            <span className="sideBar__menu-li-img">
                                <img src={community} alt="home-icon" />
                            </span>
                            Community
                        </a>
                    </li>
                    <li className="sideBar__menu-li">
                        <a href="">
                            <span className="sideBar__menu-li-img">
                                <img src={compass} alt="home-icon" />
                            </span>
                            Discovery
                        </a>
                    </li>
                    <li className="sideBar__menu-li">
                        <a href="">
                            <span className="sideBar__menu-li-img">
                                <img src={stopwatch} alt="home-icon" />
                            </span>
                            Comming soon
                        </a>
                    </li>
                </ul>
            </div>

            <div className="sideBar__menu">
                <p className="sideBar__menu-title">SOCIAL</p>
                <ul className="sideBar__menu-ul">
                    <li className="sideBar__menu-li">
                        <a href="">
                            <span className="sideBar__menu-li-img">
                                <img src={user} alt="home-icon" />
                            </span>
                            Friends
                        </a>
                    </li>
                    <li className="sideBar__menu-li">
                        <a href="">
                            <span className="sideBar__menu-li-img">
                                <img src={friend} alt="home-icon" />
                            </span>
                            Parties
                        </a>
                    </li>
                    <li className="sideBar__menu-li">
                        <a href="">
                            <span className="sideBar__menu-li-img">
                                <img src={play} alt="home-icon" />
                            </span>
                            <span className="sideBar__menu-li-text">Media</span>
                        </a>
                    </li>
                </ul>
            </div>

            <div className="sideBar__menu">
                <p className="sideBar__menu-title">GENERAL</p>
                <ul className="sideBar__menu-ul">
                    <li className="sideBar__menu-li">
                        <a href="">
                            <span className="sideBar__menu-li-img">
                                <img src={stopwatch} alt="home-icon" />
                            </span>
                            Setting
                        </a>
                    </li>
                    <li className="sideBar__menu-li">
                        <a href="">
                            <span className="sideBar__menu-li-img">
                                <img src={stopwatch} alt="home-icon" />
                            </span>
                            Log out
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}
