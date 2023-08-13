let output="";
let input=document.querySelector('input')
const buttons=document.querySelectorAll('.btns');
buttons.forEach((button)=>{
    button.addEventListener('click',(e)=>{
    if(e.target.innerHTML=="AC"){
            output="";
            input.value=output;
    }
    // evaluating answer
    else if (e.target.innerHTML=='='){
        output=output.replace('X','*')
        output=output.replace('÷','/')
        
        try{
        output=eval(output);
        input.value=output;
        }
        catch(error){
          input.value=" ERROR"
        }
    }
    else if(e.target.innerHTML=="DEL"){
        output=output.substring(0,output.length-1);
        input.value=output;
    }
    else{
        output=output+e.target.innerHTML;
        input.value=output;
    }
    })
})

