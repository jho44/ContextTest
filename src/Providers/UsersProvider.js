import React, { useReducer, useEffect } from "react"

const UsersContext = React.createContext()

function reducer(state, action) {
    let newState = { ...state }
    switch (action.type) {
        case "add":
            newState.names.push(action.name)
            newState.phones.push(action.phone)
            newState.addrs.push(action.addr)
            return newState
        case "delete":
            newState.names.splice(action.index, 1)
            newState.phones.splice(action.index, 1)
            newState.addrs.splice(action.index, 1)
            return newState
        // case "edit":
        //     return {}
        default:
            throw new Error()
    }
}

function UsersProvider(props) {
    const [users, setUsers] = useReducer(reducer, { names: [], phones: [], addrs: [] })

    useEffect(() => {
        let names = localStorage.getItem("users.names")
        if (names) { // sth here before
            names = names.split(",")
            let phones = localStorage.getItem("users.phones").split(",")
            let addrs = localStorage.getItem("users.addrs").split(",")
            for (var i = 0; i < names.length; i++) {
                const name = names[i], phone = phones[i], addr = addrs[i]
                setUsers({ type: "add", name: name, phone: phone, addr: addr })
            }
        }
    }, [])

    return (
        <UsersContext.Provider value={{ users, setUsers }}>
            {props.children}
        </UsersContext.Provider>
    )
}

export { UsersContext, UsersProvider }