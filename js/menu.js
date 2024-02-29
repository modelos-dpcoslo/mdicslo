document.addEventListener("DOMContentLoaded", function criarMenu() { 
    
    // rastreia os elementos <body> <div id=conteudo> e <footer>, para injeção de script
    let elbody = window.document.getElementsByTagName('body');
    let elconteudo = window.document.getElementById('conteudo');
    let elfooter = window.document.getElementById('rodape');

    // cria header e insere antes da DIV #conteudo 
    let elheader = document.createElement('header');           
    elconteudo.parentNode.insertBefore(elheader, elconteudo);
    elconteudo.style.margin = 'auto';
    elheader.style.backgroundImage = 'linear-gradient(to top, black 60%, var(--cor-3))'; 
    elheader.style.textAlign = 'center';
    elheader.style.padding = '0px 0px 5px 0px';
    
    // cia IMG do logo PCSC e insere no HEADER
    let elpcsc = document.createElement('img');      
    elheader.appendChild(elpcsc);
    elpcsc.src = 'icones/logpcsc.png';
    elpcsc.alt = 'Logo PCSC';
    elpcsc.width = '60';
    //elpcsc.height = '115';
    elpcsc.style.float = 'top';
    elpcsc.style.paddingLeft = '15px';
    
    // cria p1 e insere no header 
    let elheaderp1 = document.createElement('p');              
    elheaderp1.textContent = 'POLÍCIA CIVIL DO ESTADO DE SANTA CATARINA';
    elheader.appendChild(elheaderp1); 
    elheaderp1.style.fontWeight = 'bolder';
    elheaderp1.style.color = 'var(--cor-5)';
    elheaderp1.style.fontSize = '0.8em';
    
    
    // cria p2 e insere no header 
    let elheaderp2 = document.createElement('p');               
    elheaderp2.textContent = 'DIC/Fron SLO';
    elheader.appendChild(elheaderp2);
    elheaderp2.style.fontStyle = 'Arial';
    elheaderp2.style.fontWeight = '800';
    elheaderp2.style.color = 'white';
    
    // cria DIV #menutopo e insere após header
    let elmenutopo = document.createElement('div');           
    elmenutopo.id = 'menutopo';
    // insere DIV logo após o HEADER
    elconteudo.parentNode.insertBefore(elmenutopo, elheader.nextSibling);  
    elmenutopo.style.background = 'linear-gradient(to top, var(--cor-3) 15%, black)';
    elmenutopo.style.padding = '0px';
    elmenutopo.style.height = '100px';
    elmenutopo.style.margin = 'auto';
    elmenutopo.style.marginBottom = '5px';
    elmenutopo.style.display = 'flex';
    elmenutopo.style.flexBasis = 'row';
    elmenutopo.style.alignItems = 'center';
    elmenutopo.style.justifyContent = 'space-evenly';

    

    // cria link e botao para página de REQUISIÇÃO BANCOS
    let ellinkbanco = document.createElement('a'); 
    let elbotaobanco = document.createElement('button');
    let elimgbank = document.createElement('img');
    let elh3bank = document.createElement('h3');
    elmenutopo.appendChild(ellinkbanco);
    ellinkbanco.appendChild(elbotaobanco);
    elbotaobanco.appendChild(elimgbank);
    elbotaobanco.appendChild(elh3bank);
    ellinkbanco.href = 'index.html';
    elbotaobanco.className = 'botaolink';
    elh3bank.className = 'nomelink';
    elimgbank.src = 'icones/bank.png';
    elimgbank.alt = 'GERADOR DE OFICIO PARA BANCOS';
    elimgbank.width = '40';
    elh3bank.textContent = 'REQUISIÇÃO PARA BANCOS';
    elh3bank.style.marginTop = '2px';

    // cria link e botao para página de REQUISIÇÃO PARA OPERADORAS
    let ellinkopera = document.createElement('a'); 
    let elbotaoopera = document.createElement('button');
    let elimgtower = document.createElement('img');
    let elh3opera = document.createElement('h3');
    elmenutopo.appendChild(ellinkopera);
    ellinkopera.appendChild(elbotaoopera);
    elbotaoopera.appendChild(elimgtower);
    elbotaoopera.appendChild(elh3opera);
    ellinkopera.href = 'opera.html';
    elbotaoopera.className = 'botaolink';
    elh3opera.className = 'nomelink';
    elimgtower.src = 'icones/tower.png';
    elimgtower.width = '30';
    //elimgtower.height = '60';
    elimgtower.alt = 'GERADOR DE OFICIO PARA OPERADORAS DE TELEFONIA';
    elh3opera.textContent = 'REQUISIÇÃO OPERADORAS';
    elh3opera.style.marginTop = '2px';
    
    // cria link e botao para página de REQUISIÇÃO PARA GOOGLE
    let ellinkgoogle = document.createElement('a'); 
    let elbotaogoogle = document.createElement('button');
    let elimggoogle = document.createElement('img');
    let elh3google = document.createElement('h3');
    elmenutopo.appendChild(ellinkgoogle);
    ellinkgoogle.appendChild(elbotaogoogle);
    elbotaogoogle.appendChild(elimggoogle);
    elbotaogoogle.appendChild(elh3google);
    ellinkgoogle.href = 'goog.html';
    elbotaogoogle.className = 'botaolink';
    elh3google.className = 'nomelink';
    elimggoogle.src = 'icones/google.png';
    elimggoogle.width = '60';
    elimggoogle.alt = 'GERADOR DE OFICIO PARA GOOGLE';
    elh3google.textContent = 'DADOS GOOGLE';

    
    // cria link e botao para página de REQUISIÇÃO PARA APPLE
    let ellinkapple = document.createElement('a'); 
    let elbotaoapple = document.createElement('button');
    let elimgapple = document.createElement('img');
    let elh3apple = document.createElement('h3');
    elmenutopo.appendChild(ellinkapple);
    ellinkapple.appendChild(elbotaoapple);
    elbotaoapple.appendChild(elimgapple);
    elbotaoapple.appendChild(elh3apple);
    ellinkapple.href = '####################';
    elbotaoapple.className = 'botaolink';
    elh3apple.className = 'nomelink';
    elimgapple.src = 'icones/apple.png';
    elimgapple.width = '35';
    elimgapple.alt = 'GERADOR DE OFICIO PARA APPLE';
    elh3apple.textContent = 'DADOS APPLE';
    elh3apple.style.marginTop = '10px';

    // PADRONIZAR BOTOES do MENU - Seleciona todos os elementos <button> com a classe "botaolink" 
    let botoes = document.querySelectorAll(".botaolink");   
    botoes.forEach(x => {                         // Itera sobre os elementos <BUTTON> e muda estilos CSS
        x.style.width = '100px';
        x.style.height = '90px';
        x.style.backgroundImage = 'linear-gradient(to bottom, black, var(--cor-3))'; 
        x.style.margin = '10px';
        x.style.transition = '0.4s';
        x.style.borderRadius = '6px';

        /*
        .botaolink:hover {
            height: 160px;
            box-shadow: 3px 3px 15px 2px white;
        }  */
    });


    // PADRONIZAR BOTOES do MENU - Seleciona todos os H3 que nomeiam os botoes - classe "nomelink" 
    let nomelinks = document.querySelectorAll(".nomelink");    
    nomelinks.forEach(x => {                         // Itera sobre os elementos e muda estilos CSS
        x.style.color = 'var(--cor-5)';       // troar por ;
        x.style.fontSize = '0.8em';
    });

    // Cria elementos do <footer>  Link para sugestôes e DATA DA ÚLTIMA ATUALIZAÇÂO
    let elsugestoes = document.createElement('a');
    elsugestoes.href = 'https://docs.google.com/spreadsheets/d/18J7v1jp0gUWQrGLB41MPKwgaOwpfW_763MsNvpkcBfs/edit?usp=sharing';
    elsugestoes.textContent = 'LINK PARA SUGESTÕES / ATUALIZAÇÃO';
    elfooter.appendChild(elsugestoes);

    let elatualizacao = document.createElement('em');
    elatualizacao.innerText = "\nAtualizado em: 28/02/2024 (Stang)";
    elfooter.appendChild(elatualizacao);

    // configura CSS do rodape
    elfooter.style.textAlign = 'center';
    elfooter.style.padding = '0px 0px 20px 0px';
    elsugestoes.style.padding = '2px';
    elsugestoes.style.textDecoration = 'none';
    elsugestoes.style.fontSize = '0.9em';
    elsugestoes.style.transition = '0.5s';
    elatualizacao.style.color = 'rgb(59, 59, 59)';
    elatualizacao.style.fontSize = '0.9em';

});
