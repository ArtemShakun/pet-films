import { MainComponents } from './components/mainComponents/MainComponents';
import { SideBarInform } from './components/sideBarInform/SideBarInform';
import { SideBarMenu } from './components/sideBarMenu/SideBarMenu';
import './index.css';

function App() {
    return (
        <div className="container">
            <SideBarMenu />
            <MainComponents />
            <SideBarInform />
        </div>
    );
}

export default App;
