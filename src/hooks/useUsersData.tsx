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

    //Caching des Données:
    // Par défaut, React Query met en cache les données pendant 5 minutes (300000 ms). Cela signifie que si vous refaites la même requête dans ce délai, les données mises en cache seront utilisées au lieu de faire un nouvel appel réseau.
  
    // Refetch on Window Focus:
    // Par défaut, React Query va refaire la requête lorsque la fenêtre du navigateur regagne le focus. Cela permet de s'assurer que les données affichées sont à jour lorsque l'utilisateur revient sur l'application.
    
    // Stale Time:
    // Le staleTime par défaut est de 0 ms. Cela signifie que dès que les données sont récupérées, elles sont immédiatement considérées comme "périmées" (stale). Cependant, grâce à la mise en cache, elles peuvent toujours être utilisées jusqu'à expiration du cache.
    
    // Retry:
    // Par défaut, React Query va réessayer la requête 3 fois en cas d'échec, avec des délais croissants entre chaque tentative.
    
    // Refetch on Mount:
    // Par défaut, React Query refait la requête à chaque fois que le composant est monté si les données sont considérées comme "périmées".

    const { data: users, isLoading: loading, error } = useQuery(['users', page], () => fetchUsers(page));

    if (error) {
        console.error("Error fetching users:", error);
    }

    return { users, loading, error };
}
