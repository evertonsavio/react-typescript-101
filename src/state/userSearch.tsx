import { useState } from "react";

//hard coded users
const users = [
    { name: 'Sarah', age: 20 },
    { name: 'Alex', age: 20 },
    { name: 'Michal', age: 20 }
]

const UserSearch: React.FC = () => {

    const [name, setName] = useState('');
    const [user, setUser] = useState<{ name: string, age: number } | undefined>();

    const findUser = () => {
        const foundUser = users.find((user) => {
            return user.name === name;
        });
        setUser(foundUser);
    }

    return <div>
        User Search 
        <input value={name} onChange={e => setName(e.target.value)} />
        <button onClick={findUser}> Find User</button>
        <div>
            {user?.name}
            {user && user.age}
        </div>
    </div>
}

export default UserSearch;