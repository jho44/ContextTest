import React, { useReducer, useEffect } from "react"

const EventsContext = React.createContext()

function reducer(state, action) {
    let newState = { ...state }
    switch (action.type) {
        case "add":
            newState.titles.push(action.title)
            newState.dates.push(action.date)
            newState.addrs.push(action.addr)
            return newState
        case "delete":
            newState.titles.splice(action.index, 1)
            newState.dates.splice(action.index, 1)
            newState.addrs.splice(action.index, 1)
            return newState
        // case "edit":
        //     return {}
        default:
            throw new Error()
    }
}

function EventsProvider(props) {
    const [events, setEvents] = useReducer(reducer, { titles: [], dates: [], addrs: [] })

    useEffect(() => {
        let titles = localStorage.getItem("events.titles")
        if (titles) { // sth here before
            titles = titles.split(",")
            let dates = localStorage.getItem("events.dates").split(",")
            let addrs = localStorage.getItem("events.addrs").split(",")
            for (var i = 0; i < titles.length; i++) {
                const title = titles[i], date = dates[i], addr = addrs[i]
                setEvents({ type: "add", title: title, date: date, addr: addr })
            }
        }
    }, [])

    return (
        <EventsContext.Provider value={{ events, setEvents }}>
            {props.children}
        </EventsContext.Provider>
    )
}

export { EventsContext, EventsProvider }