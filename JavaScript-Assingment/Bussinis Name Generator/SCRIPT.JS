function Adjactive() {
    let a = "Crazy";
    let b = "Amazing";
    let c = "Fire";
    let remdon = Math.floor(Math.random() * 3);

    if (remdon == 0) {
        return (a)
    }
    else if (remdon == 1) {
        return (b)
    }
    else if (remdon == 2) {
        return (c)
    }

}

function shopName() {
    let a = "Engine";
    let b = "Foods";
    let c = "Garments";
    let remdon = Math.floor(Math.random() * 3);

    if (remdon == 0) {
        return (a)
    }
    else if (remdon == 1) {
        return (b)
    }
    else if (remdon == 2) {
        return (c)
    }
}
function anotherWord() {
    let a = "Bros";
    let b = "Limited";
    let c = "Hub";
    let remdon = Math.floor(Math.random() * 3);

    if (remdon == 0) {
        return (a)
    }
    else if (remdon == 1) {
        return (b)
    }
    else if (remdon == 2) {
        return (c)
    }
}


alert(`Your brand name is: ${Adjactive()} ${shopName()} ${anotherWord()}`)

