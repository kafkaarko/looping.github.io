//ini yang while 1-50
i = 1;
while(i <= 50){
    if(i %2 == 0){
        document.write("<p>genap" + i +  "</p>")
    }
    else{
        document.write("<p>ganjil" + i  + "</p>")
    }

    i++
}
//ini yang while 1-100 yang genap aja
i = 1;
while(i <= 100){
    if(i %2 == 0){
        document.write("<p>genap" + i +  "</p>")
    }
    else{
        console.log(null)
    }

    i++
}
//ini yang  100 - 1 yang ganjil aja
i = 100;
while(i >= 1){
    if(i %2 == 0){
        console.log(null)
    }
    else{
        document.write("<p>ganjil" + i +  "</p>")
    }

    i--
}
//ini yang for 1-50 ganjil dan genap
for(i = 1; i <= 50; i++){
    if(i %2 == 0){
        document.write("<p>genap:" + i +  "</p>")
    }
    else{
        document.write("<p>ganjil:" + i  + "</p>")
    }

}
//ini yang do while 1-50 genap dan ganjil di console.log
i = 0
do{
    i++
    if(i %2 == 0){
        console.log("genap:" + i )
    }
    else{
        console.log("ganjil:" + i)
    }
}while( i <= 50)
//in yang for 1 - 100 yang genap
for(i = 1; i <= 100; i++){
    if(i %2 == 0){
        document.write("<p>genap:" + i +  "</p>")
    }
    else{
        console.log(null)
    }

}
//ini yang 1 - 100 yang ganjil aja
for(i = 1; i <= 100; i++){
    if(i %2 == 0){
        console.log(null)
    }
    else{
        document.write("<p>ganjil:" + i  + "</p>")
    }

}
//ini yang 100 - 1 yang ganjil aja
for(i = 100; i >= 1; i--){
    if(i %2 == 0){
        console.log(null)
    }
    else{
        document.write("<p>ganjil:" + i  + "</p>")
    }

}
