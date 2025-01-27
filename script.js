const numerator = document.getElementById('numerator')
const denominator = document.getElementById('denominator')
const result = document.getElementById("output");
const submit = document.getElementById('submit')
function myfunction(a,b){
    let smaller = Math.min(a, b);
    let hcf;
    for(let i =1;  i<=smaller ; i++){
        if(a % i === 0 && b % i === 0){
            hcf = i;
        }
    }
    return hcf;
}
numerator.addEventListener('click',()=>{
    console.log(numerator.value,denominator.value);
   console.log(myfunction(numerator.value,denominator.value));
   console.log("submitted");
    const HCF = myfunction(numerator.value,denominator.value);
    let newNumerator = parseInt(numerator.value) / HCF;
    let newDenominator = parseInt(denominator.value) / HCF;    
    console.log(newNumerator+"/"+newDenominator)
    result.innerHTML = ` <h1>Your resultant fraction is : ${newNumerator+"/"+newDenominator}</h1>`

})
denominator.addEventListener('click',()=>{
    console.log(numerator.value,denominator.value);
   console.log(myfunction(numerator.value,denominator.value));
   console.log("submitted");
    const HCF = myfunction(numerator.value,denominator.value);
    let newNumerator = parseInt(numerator.value) / HCF;
    let newDenominator = parseInt(denominator.value) / HCF;    
    console.log(newNumerator+"/"+newDenominator)
    result.innerHTML = ` <h1>Your resultant fraction is : ${newNumerator+"/"+newDenominator}</h1>`
})