
for( let tahun_kabisat = 1600; tahun_kabisat <= 2024; tahun_kabisat++){
  if(tahun_kabisat % 400 == 0){
        document.write("<p>ini adalah tahun kabisat</p>" + tahun_kabisat)
    }
    else if(tahun_kabisat % 100 == 0){
        document.write("<p>ini bukan" + tahun_kabisat + "</p>")
    }
    else if(tahun_kabisat % 4 == 0){
        document.write("<p>ini adalah tahun kabisat" + tahun_kabisat + "</p>")
    }
    else{
        document.write("<p>ini bukan" + tahun_kabisat + "</p>")
    }
}

