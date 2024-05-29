// Standard React
// import { useEffect, useState } from "react";

// export default function useUsersData() {

//     const [users, setUsers] = useState<User[]>();
//     const [loading, setLoading] = useState(true);

//     const getUsers = async (page: number) => {
//         try {
//             const response = await fetch(`https://reqres.in/api/users?page=${page}`)
//             const responseJson = await response.json()
//             return responseJson.data
//         } catch (error) {
//             console.log(error)
//         }
//     }

//     useEffect(() => {
//         getUsers(1).then((users) => {
//             setUsers(users)
//             setLoading(false)
//         })
//     }, [])

//     return { users, loading };
// };


// React Query
import { useQuery } from "react-query";

async function fetchUsers(page: number) {
    const response = await fetch(`https://reqres.in/api/users?page=${page}`);
    const responseJson = await response.json();
    return responseJson.data as User[];
}

export default function useUsersData(page: number) {
    const { data: users, isLoading: loading, error } = useQuery(['users', page], () => fetchUsers(page));

    if (error) {
        console.error("Error fetching users:", error);
    }

    return { users, loading, error };
}
