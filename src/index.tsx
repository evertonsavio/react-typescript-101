import ReactDom from 'react-dom';
import EventComponent from './events/eventComponent';
import GuestList from './state/guestList';
import UserSearch from './refs/userSearch';

const App = () => {
    return (
    <div>
        <GuestList />
        <UserSearch />
        <EventComponent />
    </div>
    )
}

ReactDom.render(<App />, document.querySelector('#root'));