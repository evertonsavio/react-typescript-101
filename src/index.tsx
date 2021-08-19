import ReactDom from 'react-dom';
import GuestList from './state/guestList';

const App = () => {
    return (
    <div>
        <GuestList />
    </div>
    )
}

ReactDom.render(<App />, document.querySelector('#root'));