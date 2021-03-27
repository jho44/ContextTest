import React, { useContext } from 'react'
import { EventsContext } from "../Providers/EventsProvider"
import { UsersContext } from "../Providers/UsersProvider"

import { lsAddEvents, lsAddUsers, lsDeleteEvents, lsDeleteUsers } from "../helpers"

export default function EventsAndUsers() {
    const { events, setEvents } = useContext(EventsContext)
    const { users, setUsers } = useContext(UsersContext)

    const titles = events.titles
    const dates = events.dates
    const addrs = events.addrs

    const names = users.names
    const phones = users.phones
    const userAddrs = users.addrs

    return (
        <>
            <div>
                <h1>Events</h1>
                <div>
                    {
                        titles.map((title, ind) => {
                            return (
                                <>
                                    <p>Title: {title}</p>
                                    <p>Date: {dates[ind]}</p>
                                    <p>Address: {addrs[ind]}</p>
                                    <button onClick={() => {
                                        setEvents({ type: "delete", index: ind })
                                        lsDeleteEvents(ind)
                                    }}>
                                        Delete
                                    </button>
                                </>
                            )
                        })
                    }
                </div>
                <button style={{ backgroundColor: "pink" }}
                    onClick={() => {
                        const title = "Pancakes", date = "12-04-12", addr = "408 Fluff Town"
                        setEvents({ type: "add", title: title, date: date, addr: addr })
                        lsAddEvents(title, date, addr)
                    }}
                >Add to Events</button>
            </div>
            <div style={{ margin: "10px 0px", width: "100vw", height: 7, backgroundColor: "black" }} />
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
            <button onClick={() => window.location = 'users'}>Go to Users Page</button>
            <button onClick={() => window.location = 'events'}>Go to Events Page</button>
        </>
    )
}
