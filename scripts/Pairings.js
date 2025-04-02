import { getChildren } from "./database.js"
import { getCelebrities } from "./database.js"

const kiddos = getChildren()
const celebrities = getCelebrities()

const findCelebrityMatch = (kidObject, celebrityArray) => {
    for (const celebrity of celebrityArray) {
        if (celebrity.id === kidObject.celebrityId) {

            return celebrity
        }
    }
}

export const Pairings = () => {
    let pairingHTML = "<ul>"

    for (const kid of kiddos) {
        const kidsStar = findCelebrityMatch(kid, celebrities)
        pairingHTML += `
            <li>
                ${kid.name} will be making memories with ${kidsStar.name}, a ${kidsStar.sport} star, by ${kid.wish}
            </li>
        `
    }

    pairingHTML += "</ul>"

    return pairingHTML
}

