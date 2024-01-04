
for( let tahun_kabisat = 1600; tahun_kabisat <= 2024; tahun_kabisat++){
  if(tahun_kabisat % 400 == 0){
        console.log("ini adalah tahun kabisat= = = = = =" + tahun_kabisat)
    }
    else if(tahun_kabisat % 100 == 0){
        console.log("ini bukan" + tahun_kabisat)
    }
    else if(tahun_kabisat % 4 == 0){
        console.log('ini adalah tahun kabisat = = = = = ='  + tahun_kabisat)
    }
    else{
        console.log("ini bukan" + tahun_kabisat)
    }
}

