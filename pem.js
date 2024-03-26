let uang = 100.000;
let belanja = prompt("isi")
let kembalian = (uang - belanja)
let bulet = Math.round(kembalian)

if(belanja){
    document.write("<p>Rp." + kembalian + "</p>") ||  document.write("<p>Rp." + bulet + "</p>")
}else{
    null
}