type MenuOptions = "" | "all" | "dogs" | "cats" | "fishes";

export const createMenuObject = (activeMenu: MenuOptions) => {
    const menu = {
        all: false,
        dogs: false,
        cats: false,
        fishes: false
    };

    if (activeMenu !== "") {
        menu[activeMenu] = true;
    }

    return menu;
}