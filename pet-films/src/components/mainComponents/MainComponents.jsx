import { Carousel } from '../carousel/Carousel';
import './MainComponents.css';

export function MainComponents() {
    return (
        <div className="main-component">
            <nav>
                <ul>
                    <li>
                        <a href="">TV Series</a>
                    </li>
                    <li>
                        <a href="">Movies</a>
                    </li>
                    <li>
                        <a href="">Animes</a>
                    </li>
                </ul>
            </nav>
            <Carousel>
                <div className="item item-1">item-1</div>
                <div className="item item-2">item-2</div>
                <div className="item item-3">item-3</div>
            </Carousel>
        </div>
    );
}
