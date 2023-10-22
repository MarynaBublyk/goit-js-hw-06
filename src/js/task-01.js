const itemEl = document.querySelectorAll("#categories .item");

console.log(`Number of categories: ${itemEl.length}`);

itemEl.forEach((elem, i) => {
    const title = elem.querySelector("h2");
    console.log("");
    console.dir(title.textContent);
    const liItemEl = elem.querySelectorAll("li");
    console.dir(`Element: ${liItemEl.length}`);
});
