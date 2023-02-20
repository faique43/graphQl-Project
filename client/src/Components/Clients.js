import { useQuery } from '@apollo/client'

import ClientRow from './ClientRow'
import Spinner from './Spinner';
import { GET_CLIENTS } from './GraphQl/Queries/ClientQueries'

export default function Clients() {
    const { loading, error, data } = useQuery(GET_CLIENTS);

    if (loading) return <Spinner />;
    if (error) return <p>Error :(</p>;

  return (
    <>
        {!loading && !error && (
            <table className="table table-hover mt-3  ">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col"></th>
                    </tr>

                </thead>
                <tbody>
                    {data.clients.map(client => (
                        <ClientRow key={client.id} client={client} />
                    ))}
                </tbody>
            </table>

        )}
    </>
  )
}
