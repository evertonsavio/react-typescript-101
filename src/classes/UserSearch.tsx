import { Component } from "react";


interface User {
    name: string;
    age: number;
}

interface UserSearchProps {
/*     users: {
        name: string;
        age: number;
    }[] //Array of objects */
    users: User[]
}

interface UserSearchState {
    name: string;
    //user: {name: string; age: number} | undefined;
    user: User | undefined;
}

class UserSearch extends Component<UserSearchProps> {

    state: UserSearchState = {
        name: '',
        user: undefined
    };

    findUser = () => {
        const foundUser = this.props.users.find((user) => {
            return user.name === this.state.name;
        });
        this.setState({user: foundUser});
    }

    render(){

        const {user} = this.state;

        return(
            <div>
            User Search 
            <input value={this.state.name} onChange={e => this.setState({name: e.target.value})} />
            <button onClick={this.findUser}> Find User</button>
            <div>
                {this.state.user?.name}
                {user && user.age}
            </div>
        </div>
        )
    }

}

export default UserSearch;