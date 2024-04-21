const orderQty =document.getElementById("orderQty");
function stepper(btn){
    let id = btn.getAttribute("id");
    let min = orderQty.getAttribute("min");
    let max = orderQty.getAttribute("max");
    let step = orderQty.getAttribute("step");
    let val = orderQty.getAttribute("value");
    let calcStep= (id=="increment") ? (step*1) : (step*-1);
    
    let newValue= parseInt(val) + calcStep;
    if(newValue >=min && newValue <= max){
        orderQty.setAttribute("value",newValue);
    }
}