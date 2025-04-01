import { getCelebrities } from "./database.js"

const celebrities = getCelebrities()

document.addEventListener(
    "click", (celebrityClickEvent) => {
        const celebrityClicked = celebrityClickEvent.target

        const celebritySport = celebrityClicked.dataset.sport
        window.alert(`${celebritySport}`)

    })
    
export const Celebrities = () => {
    let celebrityHTML = "<ol>"

    for (const celebrity of celebrities) {
        celebrityHTML += `<li data-id="${celebrity.id}" 
                    data-type="celebrity"
                    data-sport="${celebrity.sport}"
                    data-name="${celebrity.name}">
                    ${celebrity.name}
                </li>`
    }

    celebrityHTML += "</ol>"
    return celebrityHTML
}


