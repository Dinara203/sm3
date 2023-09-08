let a= Number(prompt('Введите стоимость товара'));
let b = Number(prompt('Введите вашу сумму'));


if(a==b){
    alert('Покупка совершена');
}else{
    if(a <b){
        let x= b - a;
        alert('Покупка совершена. Сдача: '+ x +'р.');
    }else if(a > b){
        let x= a - b;
        alert('Для покупки не хватает: '+ x +'р.');
    }
}