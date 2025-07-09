function dragElement(tankelement){
  let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0; //pos 1 and 2 store the change, pos 3 and 4 store the current position
  tankelement.onpointerdown = pointerDrag;

function pointerDrag(e){ //e represents event object , event = pointer/mousepress
e.preventDefault(); //prevents default action
console.log(e); // logs event action to console
pos3 = e.clientX;//gives horizontal to store current
pos4 = e.clientY;//gives vertical to store current
document.onpointermove = elementDrag;//while the pointer is moving, drag funtion is called
document.onpointerup = stopElementDrag;// when u release pointer, drag function is stopped
}

function elementDrag(e){
  pos1 = pos3 - e.clientX;
  pos2 = pos4 - e.clientY;
  pos3 = e.clientX;
  pos4 = e.clientY;

  tankelement.style.top = (tankelement.offsetTop-pos2) + 'px';
  tankelement.style.left = (tankelement.offsetLeft - pos1) + 'px';

}

function stopElementDrag(){
  document.onpointerup = null;
  document.onpointermove = null;
}
}//closure

dragElement(document.getElementById('plant1')); //select element by their id
dragElement(document.getElementById('plant2'));
dragElement(document.getElementById('plant3'));
dragElement(document.getElementById('plant4'));
dragElement(document.getElementById('plant5'));
dragElement(document.getElementById('plant6'));
dragElement(document.getElementById('plant7'));
dragElement(document.getElementById('plant8'));
dragElement(document.getElementById('plant9'));
dragElement(document.getElementById('plant10'));
