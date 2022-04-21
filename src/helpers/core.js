

const themes = ([
    "light",
    "dark",
    "cupcake",
    "bumblebee",
    "emerald",
    "corporate",
    "synthwave",
    "retro",
    "cyberpunk",
    "valentine",
    "halloween",
    "garden",
    "forest",
    "aqua",
    "lofi",
    "pastel",
    "fantasy",
    "wireframe",
    "black",
    "luxury",
    "dracula",
    "cmyk",
    "autumn",
    "business",
    "acid",
    "lemonade",
    "night",
    "coffee",
    "winter",
]);

// export the function
export const randomTheme = async () => {
    // Find the html element and change the theme using data-theme attribute
    const theme = document.querySelector("html");
    // Add atribute to the html element randomly
    theme.setAttribute(
        "data-theme",
        themes[Math.floor(Math.random() * themes.length)]
    );
};
