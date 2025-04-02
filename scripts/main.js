import { Pairings } from "./Pairings.js"
import { Celebrities } from "./CelebrityList.js"
import { kiddos } from "./Kids.js"

const mainContainer = document.querySelector("#container")

const applicationHTML = `
    <h1>Make a Memory for Kids</h1>
    <article class="details">
        <section class="detail--column list details__kids">
            <h2>Kids</h2>
            ${kiddos()}
        </section>
        <section class="detail--column details__celebrities">
            <h2>Celebrities</h2>
            ${Celebrities()}
        </section>
    </article>

    <article class="pairings">
        <h2>Pairings</h2>
        ${Pairings()}
    </article>
`

mainContainer.innerHTML = applicationHTML

