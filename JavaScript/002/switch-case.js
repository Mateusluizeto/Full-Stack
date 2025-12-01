/* CONTROLE DE FLUXO - CONDICIONAIS - SWITCH CASE

*/

const temperature = 36;

switch(temperature){
    case 30:
        console.log("A pessoa está com a temperatura MUITO abaixo do normal")
        break;

        case 33:
            console.log("A pessoa está com a temperatura abaixo do normal")
        break

        case 36:
            console.log('A pessoa está com a temperatura abaixo do normal')
        break
        
    default:
        console.log('temperatura não encontrada')
        break;
}