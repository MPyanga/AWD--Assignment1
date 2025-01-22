//var name = prompt("Enter your name below");
name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
document.getElementById('pop-up').innerHTML="Hi "+name+"!";

function submit() {
    const inputValue1 = document.getElementById("emailAdd").value; 
    const inputValue2 = document.getElementById("subject").value;            
    const inputValue3 = document.getElementById("message").value;   
    const hiddenElement = document.getElementById("hidden");


    if (inputValue1 == "" || inputValue2 == "" || inputValue3 == "") {
        alert('incomplete field');
        hiddenElement.style.visibility = "hidden";
    }
    
    else  {            
        const inputValue1 = document.getElementById("emailAdd").value; 
        const inputValue2 = document.getElementById("subject").value;            
        const inputValue3 = document.getElementById("message").value;  

        document.getElementById("emailAdd").value = "";
        document.getElementById("subject").value = "";
        document.getElementById("message").value = "";
        hiddenElement.style.visibility = "visible";
        }
}
function btn(){
const input = document.getElementById('input').value;
const output = document.getElementById('output');

    if (input > 100){
        alert('You\'ve reached the maximum limit');
    }
    else if (input <= 0){
        alert('invalid input');

    }
    else{
        output.innerHTML = ''; 
        
            for (let i = 0; i < parseInt(input); i++) {
            const newIcon = document.createElement('i');
            newIcon.className = 'fa-solid fa-basketball'; 
            output.appendChild(newIcon);
        }
    }

}


