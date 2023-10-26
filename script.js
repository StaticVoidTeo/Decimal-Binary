//dek can be any number
let dek = 654, bin = 0, bin1 = 32768;

while(parseInt(bin1)>0){
    if(dek/bin1 >= 1){
        dek = dek - (bin1);
        bin1 /= 2;
        bin = bin * 10 + 1;
    }
    else{
        bin1 /= 2;
        bin = bin * 10;
    }
}

console.log(bin);
