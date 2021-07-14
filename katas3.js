const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];


const main = document.getElementById('principal');

const square = document.getElementsByClassName('div1');

function showResults (title, result) {
    
    
    const div1 = document.createElement('div')
    const katas = document.createElement('h2')
    const text = document.createElement('p')
    const newTitle = document.createTextNode(title)
    const newText = document.createTextNode(result)
    
    katas.appendChild(newTitle)
    text.appendChild(newText)
    div1.appendChild(katas)
    div1.appendChild(text) 
    main.appendChild(div1)
}


function kata1() {
    let newArray = [];
    for (let i = 1; i <= 25; i++) {
        newArray.push(i);
    } 
    showResults("KATA 1", newArray)
    return newArray
}
kata1()

function kata2() {
    let newArray = [];
    for (let i = 25; i >= 1; i--) {
        newArray.push(i);
    }
    showResults("KATA02", newArray)
    return newArray
}
kata2()

function kata3() {
    let newArray = [];
    for (let i = -1; i >= -25; i--) {
        newArray.push(i);
    }
    showResults("KATA 03", newArray)
    return newArray
}
kata3()

function kata4() {
    let newArray = [];
    for (let i = -25; i <= -1; i++) {
        newArray.push(i);
    }
    showResults("KATA 04", newArray)
    return newArray
}
kata4()

function kata5() {
    let newArray = [];
        for (let i = 25; i >= -25; i--) {
            if (i % 2 !== 0) { 
                newArray.push(i)
            } 
        } showResults("KATA 05", newArray)
        return newArray
}
kata5()

function kata6() {
    let newArray = [];
        for (let i = 1; i <= 100; i++) {
            if (i % 3 === 0) { 
                newArray.push(i)
            } 
        } showResults("KATA06", newArray)
        return newArray
}
kata6()

function kata7() {
    let newArray = [];
        for (let i = 1; i <= 100; i++) {
            if (i % 7 === 0) { 
                newArray.push(i)
            } 
        } showResults("KATA 07", newArray)
        return newArray
}
kata7()

function kata8() {
    let newArray = [];
        for (let i = 100; i >= 1; i--) {
            if (i % 3 === 0) {    
                newArray.push(i)
                } else if (i % 7 === 0) {
                    newArray.push(i)
                }       
        } showResults("KATA 08", newArray)
        return newArray        
}
kata8()


function kata9() {
    let newArray = [];
        for (let i = 1; i <= 100; i++) {
            if (i % 2 !== 0 && i % 5 === 0) {
                newArray.push(i)
            }
        } showResults("KATA 09", newArray)
        return newArray
}
kata9()

function kata10() {
    showResults("KATA 10", sampleArray)
    return 
}
kata10()


function kata11() {
        let newArray = [];
        for (let i = 0; i <= sampleArray.length; i++) {
            if (sampleArray[i] % 2 === 0) {
                newArray.push(sampleArray[i])
            }
        } showResults("KATA 11", newArray)
        return newArray
} 
kata11()

function kata12() {
    let newArray = [];
        for (let i = 0; i <= sampleArray.length; i++) {
            if (sampleArray[i] % 2 !== 0) {
                newArray.push(sampleArray[i])
            }
        } showResults("KATA 12", newArray)
        return newArray
}
kata12()

function kata13() {
    let newArray = [];
        for (let i = 0; i <= sampleArray.length; i++) {
            if (sampleArray[i] % 8 === 0) {
                newArray.push(sampleArray[i])
            }
        } showResults("KATA 13", newArray)
        return newArray
}
kata13()

function kata14() {
    let newArray = [];
        for (let i = 0; i <= sampleArray.length; i++) {
                newArray.push(sampleArray[i] * sampleArray[i])
        } 
        showResults("KATA 14", newArray)
        return
}
kata14()

function kata15() {
    let newArray = 0;
        for (let i = 1; i <= 20; i++) {
            newArray += i
        } 
        showResults("KATA 15", newArray)
        return newArray
}   
kata15()

function kata16() {
    let newArray = 0;
    for (let i = 0; i < sampleArray.length; i++) {
        newArray += sampleArray[i];
    }
    showResults("KATA 16", newArray)
    return newArray
}
kata16()

function kata17() {
    let newArray = sampleArray[0];
    for (let i = 0; i < sampleArray.length; i++) {
        if (sampleArray[i] < newArray) {
            newArray = sampleArray[i];
        }
    } showResults("KATA 17", newArray)
    return newArray
}
kata17()

function kata18() {
    let newArray = sampleArray[0];
    for (let i = 0; i < sampleArray.length; i++) {
        if (sampleArray[i] > newArray) {
            newArray = sampleArray[i];
        }
    } showResults("KATA 18", newArray)
    return newArray
}
kata18()

/**
 * Daqui em diante são os bônus, por sua conta e risco
 */

function kataBonus1() {

}
function kataBonus2() {
    // implemente o código do kata bonus 2 aqui
}

function kataBonus3() {
    // implemente o código do kata bonus 3 aqui
}

function kataBonus4() {
    // implemente o código do kata bonus 4 aqui
}

function kataBonus5() {
    // implemente o código do kata bonus 5 aqui
}
