export const optionsMap = createOptionMap();

function createOptionMap() {
    return new Map([
        ["bowl1", new Map([
            ["dalma", "Enjoy Odisha's authentic Dalma that is served as a combination of lentils and vegetables in a hot broth of spices."]
        ])],
        ["bowl2", new Map([
            ["Kadhai Paneer", "Spicy Paneer preparation with a modest amout of onion and capsicum"],
            ["Palak Paneer", "Winter's favourite paneer prepation that is made in a puree of garlic and spinach, best enjoyed with ghee rotis."],
            ["Mattar Paneer", "Paneer preparation that is blend of a thick cashew paste with cooked peas."]
        ])],
        ["bowl3", new Map()],
        ["bowl4", new Map()],
        ["bowl5", new Map()],
        ["rice", new Map()],
        ["roti", new Map()],
        ["fish", new Map()]
    ])
}

export function updateDataPanel(elementId) {
    //Todo: add the handling here
}