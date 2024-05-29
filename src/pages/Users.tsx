import useUsersData from "../hooks/useUsersData";
import './Users.css'

export default function Users() {

    const { loading, users, error } = useUsersData(2)

    return <div className="users">
        {loading && "loading..."}
        {users && users.map((user) => <a href={`/users/${user.id}`} key={user.id}>{user.first_name}</a>)}
    </div>;
};
