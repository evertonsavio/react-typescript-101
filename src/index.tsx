import ReactDom from 'react-dom';
import GuestList from './state/guestList';
import UserSearch from './state/userSearch';

const App = () => {
    return (
    <div>
        <GuestList />
        <UserSearch />
    </div>
    )
}

ReactDom.render(<App />, document.querySelector('#root'));