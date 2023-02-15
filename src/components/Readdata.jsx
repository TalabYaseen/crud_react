import axios from 'axios';
import React, { Component } from 'react'
import UserService from './UserService'
class ListUserComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: []
        }
        this.addUser = this.addUser.bind(this);
        this.editUser = this.editUser.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
    }
    // fetchData(){
    //     axios.get('http://localhost/api_service/Backend/read.php').then(response => console.log(response)).catch(e=>console.log(e))
        
    // }
    // state_api(){
    //     UserService.getUsers().then((res) => {
    //         return res.users})
    // }
    deleteUser(id) {
        UserService.deleteUser(id).then(res => {
            this.setState({ users: this.state.users.filter(user => 
                            user.id !== id) });
        });
    }
    viewUser(id) {
        this.props.history.push(`/view-user/${id}`);
    }
    editUser(id) {
        this.props.history.push(`/add-user/${id}`);
    }
    componentDidMount(){
        // console.log(UserService.getUsers());
        UserService.getUsers().then((res) => {
            this.setState({ users: res.data });
            console.log(res.data);
        });
    }
    addUser() {
        this.props.history.push('/add-user/_add');
    }
    render() {
        console.log(this.state.users)
        return (
            <div>
                <h2 className="text-center">Users List</h2>
                <div className="row">
                    <button className="btn btn-primary" onClick={this.addUser}> 
                          Add User</button>
                </div>
                <br></br>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th> User First Name</th>
                                <th> User second Name</th>
                                <th> User last Name</th>
                                <th> User Occupation</th>
                                <th> User password</th>
                                <th> User photo</th>
                                <th> User Email</th>
                                <th> Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.users.map(
                                    user =>
                                        <tr key={user.id}>
                                            <td> {user.first_name} </td>
                                            <td> {user.second_name}</td>
                                            <td> {user.last_name}</td>
                                            <td> {user.Occupation}</td>
                                            <td> {user.password}</td>
                                            <td> {user.photo}</td>
                                            <td> {user.email}</td>
                                            <td>
     <button onClick={() => this.editUser(user.id)} className="btn btn-warning">
                Update </button>
         <button style={{ marginLeft: "10px" }} onClick=
  {() => this.deleteUser(user.id)} className="btn btn-danger">Delete </button>
          <button style={{ marginLeft: "10px" }} onClick=
  {() => this.viewUser(user.id)} className="btn btn-info">View </button>
                                            </td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
export default ListUserComponent