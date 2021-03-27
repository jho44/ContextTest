import React, { useContext } from 'react'
import { UsersContext } from "../Providers/UsersProvider"
import { lsAddUsers, lsDeleteUsers } from "../helpers"

export default function Users() {
    const { users, setUsers } = useContext(UsersContext)

    const names = users.names
    const phones = users.phones
    const userAddrs = users.addrs

    return (
        <>
            <div>
                <h1>Users</h1>
                <div>
                    {
                        names.map((name, ind) => {
                            return (
                                <>
                                    <p>Name: {name}</p>
                                    <p>Phone Number: {phones[ind]}</p>
                                    <p>Address: {userAddrs[ind]}</p>
                                    <button onClick={() => {
                                        setUsers({ type: "delete", index: ind })
                                        lsDeleteUsers(ind)
                                    }}>Delete</button>
                                </>
                            )
                        })
                    }
                </div>
                <button style={{ backgroundColor: "pink" }}
                    onClick={() => {
                        const name = "Nanami", phone = "1-800-uwu", addr = "I don't think so"
                        setUsers({ type: "add", name: name, phone: phone, addr: addr });
                        lsAddUsers(name, phone, addr)
                    }}
                >Add to Users</button>
            </div>
            <button onClick={() => window.location = 'events'}>Go to Events Page</button>
            <button onClick={() => window.location = 'events+users'}>Go to Events+Users Page</button>
        </>
    )
}
