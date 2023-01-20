import { Carousel } from '../carousel/Carousel';
import './MainComponents.css';
import { IoIosAdd } from 'react-icons/io';

export function MainComponents() {
    return (
        <div className="main-component">
            <nav>
                <ul className="main-component-ul">
                    <li className="main-component-li">
                        <a href="">TV Series</a>
                    </li>
                    <li className="main-component-li">
                        <a href="">Movies</a>
                    </li>
                    <li className="main-component-li">
                        <a href="">Animes</a>
                    </li>
                </ul>
            </nav>
            <Carousel>
                <div className="item item-1">
                    <div className="item-content">
                        <h2 className="item-content-title">JUMANJI</h2>
                        <p className="item-content-subtitle">
                            ACTINON, ADVENTURE, COMEDY %94 Match
                        </p>
                        <div className="item-btn">
                            <button className="btn-watch">Watch</button>
                            <IoIosAdd className="btn-add" />
                        </div>
                    </div>
                </div>
                <div className="item item-2">item-2</div>
                <div className="item item-3">item-3</div>
            </Carousel>
        </div>
    );
}
