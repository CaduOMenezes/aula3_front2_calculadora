export function dividir(num1, num2){
    if(num1 == 0 || num2 == 0){
        return "Não se pode dividir por zero!";
    }else{
        return num1/num2;
    };
};

console.log(dividir(4,2))
//export default dividir;