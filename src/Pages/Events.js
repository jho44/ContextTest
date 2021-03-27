import React, { useContext } from 'react'
import { EventsContext } from "../Providers/EventsProvider"
import { lsAddEvents, lsDeleteEvents } from "../helpers"

export default function Events() {
    const { events, setEvents } = useContext(EventsContext)

    const titles = events.titles
    const dates = events.dates
    const addrs = events.addrs

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
                                    }}>Delete</button>
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

            <button onClick={() => window.location = 'events+users'}>Go to Events+Users Page</button>
            <button onClick={() => window.location = 'users'}>Go to Users Page</button>
        </>
    )
}
