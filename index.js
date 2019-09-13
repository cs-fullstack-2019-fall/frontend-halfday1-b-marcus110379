let but1 = document.getElementById("btn1");
let but2 = document.getElementById("btn2");
let p1= document.getElementById("pad1");
let p2 = document.getElementById('pad2');
let leader= document.getElementById("lead");
but1.addEventListener("click",change1);
but2.addEventListener("click", change2);
counter=1;
counter2=1;
function change1() {

    p1.innerText= counter;
    counter++;
    keeper()
}

function change2() {

    p2.innerText= counter2;
    counter2++;
    keeper()
}
// while (counter > counter2){
//     leader.innerText="p1";
//     if(counter < counter2){
//         leader.innerText= "p2"
//     }
//
// }
function keeper() {

    if(counter > counter2) {
        leader.innerText = "p1";
    }else if (counter < counter2){
        leader.innerText="p2";
    }else{
        leader.innerText= "Tied"
    }

}
