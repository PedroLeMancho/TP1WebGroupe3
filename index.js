const button1 = document.getElementById('btn1');
console.log(button1);
const button2 = document.getElementById('btn2');
const button3 = document.getElementById('btn3');



button1.addEventListener('click', () => { alert('Bottes de moto ajouté au panier') });
button2.addEventListener('click', () => { alert('Bottes qui appartenait à ma grand mère ajouté au panier') });
button3.addEventListener('click', () => { alert('Bottes bon marché ajouté au panier') });