/* SCRIPT para obter a DATA ATUAL e transformar em formato oficial. */
function obterNomeMes(numeroMes) {
    // Array com os nomes dos meses (janeiro é o índice 0)
    var nomesMeses = [
        'janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho',
        'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'
    ];
    return nomesMeses[numeroMes - 1];
}


/* SCRIPT para obter a DATA ATUAL e transformar em formato oficial. */
function obterData() {
    var data = new Date();

    // Obtenha os componentes da data
    var dia = data.getDate();
    // Os meses são indexados a partir de zero, então é necessário adicionar 1
    var mes = data.getMonth() + 1; 
    ano = data.getFullYear();  // retirado o var para escopo GLOBAL

    // Montar a representação da data no padrão desejado (exemplo: DD de MMMM de AAAA)
    var valdatareq = dia + ' de ' + obterNomeMes(mes) + ' de ' + ano;

    // Exiba a representação da data
    return valdatareq;
}
/* FIM DO SCRIPT para obter a DATA ATUAL e transformar em formato oficial.*/
  
/* INICIO DO SCRIPT para configurar abreviatura e e-mail do policial*/
function nomePolicial() {
    const elpolicial = document.querySelector('#policial')
    const valpolicial = elpolicial.value
    switch (valpolicial) {
        case 'avar':
            varsiglapolicial = 'AVAR';
            varemailpolicial = '"andre-avanci@pc.sc.gov.br" e "regis-stang@pc.sc.gov.br" ';
            break;
        case 'gab':
            varsiglapolicial = 'GAB';
            varemailpolicial = 'regis-stang@pc.sc.gov.br ';
            break;
        case 'dm':
            varsiglapolicial = 'DM';
            varemailpolicial = '"demostenes-menin@pc.sc.gov.br" e "regis-stang@pc.sc.gov.br" ';
            break;
        case 'jrp':
            varsiglapolicial = 'JRP';
            varemailpolicial = '"jeferson-pereira@pc.sc.gov.br" e "regis-stang@pc.sc.gov.br" ';
            break;
        case 'prpg':
            varsiglapolicial = 'PRPG';
            varemailpolicial = '"paulo-graff@pc.sc.gov.br" e "regis-stang@pc.sc.gov.br" ';
            break;
        case 'mpb':
            varsiglapolicial = 'MPB';
            varemailpolicial = '"marcelo-bezerra@pc.sc.gov.br" e "regis-stang@pc.sc.gov.br" ';
            break;       
    } 

}
/* FIM DO SCRIPT para configurar abreviatura e e-mail do policial*/

/*INÍCIO do SCRIPT para obter DATA INÍCIO e DATA FIM da requisição */

function obterPeriodo() {
    const inpdatain = document.querySelector('#datainicio');
    valdatain = inpdatain.value.split('-').reverse().join('/');

    const inpdatafim = document.querySelector('#datafim');
    valdatafim = inpdatafim.value.split('-').reverse().join('/');
}