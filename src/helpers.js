export function lsAddEvents(title, date, addr) {
    let titles = localStorage.getItem("events.titles")
    titles = titles === null ? title : titles + "," + title
    let dates = localStorage.getItem("events.dates")
    dates = dates === null ? date : dates + "," + date
    let addrs = localStorage.getItem("events.addrs")
    addrs = addrs === null ? addr : addrs + "," + addr

    localStorage.setItem("events.titles", titles)
    localStorage.setItem("events.dates", dates)
    localStorage.setItem("events.addrs", addrs)
}

export function lsAddUsers(name, phone, addr) {
    let names = localStorage.getItem("users.names")
    names = names === null ? name : names + "," + name
    let phones = localStorage.getItem("users.phones")
    phones = phones === null ? phone : phones + "," + phone
    let addrs = localStorage.getItem("users.addrs")
    addrs = addrs === null ? addr : addrs + "," + addr

    localStorage.setItem("users.names", names)
    localStorage.setItem("users.phones", phones)
    localStorage.setItem("users.addrs", addrs)
}

export function lsDeleteEvents(ind) {
    let titles = localStorage.getItem("events.titles")
    titles = titles.split(",")
    titles.splice(ind, 1)
    titles.join(",")
    let dates = localStorage.getItem("events.dates")
    dates = dates.split(",")
    dates.splice(ind, 1)
    dates.join(",")
    let addrs = localStorage.getItem("events.addrs")
    addrs = addrs.split(",")
    addrs.splice(ind, 1)
    addrs.join(",")

    localStorage.setItem("events.titles", titles)
    localStorage.setItem("events.dates", dates)
    localStorage.setItem("events.addrs", addrs)
}

export function lsDeleteUsers(ind) {
    let names = localStorage.getItem("users.names")
    names = names.split(",")
    names.splice(ind, 1)
    names.join(",")
    let phones = localStorage.getItem("users.phones")
    phones = phones.split(",")
    phones.splice(ind, 1)
    phones.join(",")
    let addrs = localStorage.getItem("users.addrs")
    addrs = addrs.split(",")
    addrs.splice(ind, 1)
    addrs.join(",")

    localStorage.setItem("users.names", names)
    localStorage.setItem("users.phones", phones)
    localStorage.setItem("users.addrs", addrs)
}