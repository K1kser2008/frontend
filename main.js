const dropdownBtn = document.querySelector(".dropdown-btn");
const dropdownMenu = document.querySelector(".dropdown-menu");
const dropdownItems = document.querySelectorAll(".dropdown-item");

dropdownBtn.addEventListener("click", () => {
    dropdownMenu.classList.toggle("hidden");
})

dropdownItems.forEach(Item => {
    Item.addEventListener("click", () => {

        dropdownBtn.innerHTML = `
        ${Item.textContent}
        <span class="arrow">▼</span>
        `

        dropdownItems.forEach(i => {
            i.classList.remove("selected");
        });

        Item.classList.add("selected");

        dropdownMenu.classList.add("hidden")
    })
})