function mean(a){
    let moy=0;
    for(let i=0; i < a.length; i++){
        moy = moy + a[i];
    }
     return moy / a.length;
}
module.exports=mean;