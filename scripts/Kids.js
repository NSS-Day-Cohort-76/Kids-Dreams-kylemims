import { getChildren } from "./database.js"


const children = getChildren()

document.addEventListener(
    "click", (kidClickEvent) => {
        const kidsClicked = kidClickEvent.target

        const childWish = kidsClicked.dataset.wish
        window.alert(`${childWish}`)

    }
)

export const Kids = () => {
    let KidHTML = "<ol>"

    for (const child of children) {
        KidHTML += `<li data-id="${child.id}" 
                    data-type="child" 
                    data-wish="${child.wish}"
                    data-name="${child.name}">
                    ${child.name}</li>`
    }

    KidHTML += "</ol>"
    
    return KidHTML
}


