let son1 = +prompt("запишите число")

let son2 = +prompt("запишите 2-ое число")

let amal = prompt(`выберите одно.
1 . сложение (+) 
2 . вычитание (-) 
3 . умножение (*) 
4 . деление (/)`)

if ( amal === "1" ) {
    alert ("ответ: " + (son1 + son2) )
} else if ( amal === "2") {
    alert ("ответ: " + (son1 - son2) )
} else if ( amal === "3" ) {
    alert ("ответ: " + (son1 * son2) )
} else if ( amal === "4" ) {
    alert("ответ: " + (son1 / son2) )
} else {
    alert("НЕПРАВИЛЬНОЕ РЕШЕНИЕ! попробуйте ещё раз.")
}