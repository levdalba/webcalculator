let appearance = document.getElementById('appearance');

let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map( button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'C':
                appearance.innerText = '';
                break;
            case '←':
                if(appearance.innerText){
                    appearance.innerText = appearance.innerText.slice(0, -1);
                }
                break;
            case '=':
                try{
                    appearance.innerText = eval(appearance.innerText);
                
            }catch {
                appearance.innerText = 'Error';
            }
            
            break;
        default:
            appearance.innerText += e.target.innerText;
        } 
    })
})