// import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { fetchUsers } from '../actions';
//
// const UsersListPage = () => {
//     const dispatch = useDispatch();
//     const users = useSelector(state => state.users);
//
//     useEffect(() => {
//         dispatch(fetchUsers());
//     }, [dispatch]);
//
//     const renderUsers = () => {
//         if (!users) {
//             return null; // or some other placeholder
//         }
//         return users.map(user => <li key={user.id}>{user.name}</li>);
//     }
//
//     return (
//         <div>
//             Users List
//             <ul>
//                 {renderUsers()}
//             </ul>
//         </div>
//     );
// };
//
// export const loadData = ({ dispatch }) => {
//     return dispatch(fetchUsers());
// };
//
// export default {
//     component: UsersListPage,
//     loadData
// }


import React, {Component} from 'react';
import {connect} from "react-redux"
import {fetchUsers} from "../actions";

class UsersListPage extends Component {
    componentDidMount() {
        this.props.fetchUsers();
    }

    renderUsers() {
        if (!this.props.users) {
            return null; // or some other placeholder
        }
        return this.props.users.map(user => <li key={user.id}>{user.name}</li>);
    }

    render() {
        return (
            <div>
                Users List
                <ul>
                    {this.renderUsers()}
                </ul>
            </div>
        )
    }
}

const  mapStateToProps = (state) => {
    return {users: state.users}
}
export const loadData = ({dispatch}) => {
    return dispatch(fetchUsers())
}

export default {
    component: connect(mapStateToProps, {fetchUsers})(UsersListPage),
    loadData
}