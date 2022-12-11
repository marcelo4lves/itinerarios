const sex = document.querySelectorAll('.sex');
const inti = document.querySelectorAll('.intin');
const btn_sex = document.querySelector('#btn_sex');
const btn_int = document.querySelector('#btn_int');
const div_sex = document.querySelector('.sexo');
const div_int = document.querySelector('.int');
let div_fim = document.querySelector('.fim');
const audio = new Audio('../confirma-urna.mp3');
let sexo =['M','F'];
let itinerario = ['Linguagens','Humanas','Natureza','Biologicas'];
let votos = null;
let sex_info;
let int_esc;


function votar(){
div_sex.style.display = "block";
// Atribuindo função de clique para escolha do sexo
for(let i=0;  i <  sex.length; i++){
    sex[i].addEventListener('click', function(){
        selected(this,sex,btn_sex);

        //Recebendo o valor do sexo
        sex_info = this.value;
        console.log(sex_info);

        //ativando o botão
        buttonActive(btn_sex);
    });

}

// Atribuindo função de clique para escola dos itinerários
for(let i=0; i <inti.length; i++){
    inti[i].addEventListener('click',function(){
        selected(this, inti,btn_sex);

        //Recebendo valor do itinerário escolhido;
        int_esc = this.value;
        console.log(int_esc);
        buttonActive(btn_int);

    });

}


//Visibilidade do botão caso algum inti tenha sido informado;
function buttonActive(btn){
     btn.disabled = false; 
           
}
//Selecionar a div
function selected(div,arr,btn){
    for(let i=0; i<arr.length; i++){
        if(arr[i].classList.contains('select')){
            arr[i].classList.toggle('select');
        }
    }
    div.classList.add('select');
    buttonActive(btn);
    
}

//Votação no sexo
btn_sex.addEventListener('click',function(){
    //esconde a tela do sexo
    div_sex.style.display = "none";
    //mostra a tela do itinerario
    div_int.style.display = "block";
    console.log('votou'+div_sex);

    
})

//votacão no itinerário
btn_int.addEventListener('click',function(){
    //esconde a tela do itinerario
    div_int.style.display = "none";
    
    
    div_fim.style.display="block";
    console.log('votou nega'+div_int);
    
    concluirVotacao();
    
});

function concluirVotacao(){
    //atribui o valor do sexo a variavel que irá contabilizar
    switch(sex_info){
        case 'M':
            sexo['M']+=1;
        break;
        case 'F':
            sexo['F']+=1;
        break;
        default:
            return;
        
    }
    //atribui o valor do intinerário escolhido a variavel que irá contabilizar;
    switch(int_esc){
        case 'Linguagens':
            itinerario['Linguagens']+=1;
        break;

        case 'Humanas':
            itinerario['Humanas']+=1;
        break;

        case 'Natureza':
            itinerario['Natureza']+=1;
        break;

        case 'Matematica':
            itinerario['matenatica']+=1;
        break;

        default:
            return
    }

    votos++;
}

function limparSelect(){
    
}

}

votar();
let vtr = document.querySelector('#votar');

vtr.addEventListener('click',function(){
    div_fim.style.display="none";
    votar();
});