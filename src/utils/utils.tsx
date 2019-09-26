

export function firstLetter(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1)
}

export function capitalize(str: string) {
    return str
        .split(" ")
        .map(item => item.length > 2 ? item.charAt(0).toUpperCase() + item.slice(1) : item)
        .join(" ")
}