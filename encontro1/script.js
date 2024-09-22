function main(){
    gerarOpcoes()
    escutarSeletor()
}


//Executa os scripts apenas quando todo o HTML ser carregado
document.addEventListener('DOMContentLoaded', main)

//Formata os valores de uma maneira segura (sem arredondar)
const formatador = new Intl.NumberFormat('pt-BR',
    {
        style: 'currency',
        currency: 'BRL',
        maximumFractionDigits: 2,
        minimumFractionDigits: 2,
    })

// Consome a API que retorna todas as moedas disponiveis, retornando essas mesmas
// moedas em formato JSON
async function obterMoedasDisponiveis(){
    const url = 'https://economia.awesomeapi.com.br/json/available'

    const dados = await fetch(url)
    const moedas = await dados.json()

    return moedas
}

// Remove as moedas de outros países e deixa apenas as que referenciam o brasil
async function moedasBrasileiras(){
    const moedas = await obterMoedasDisponiveis()
    const moedasPaises = Object.entries(moedas)

    const moedasBrasileiras = moedasPaises.filter(
        moeda => moeda[0].match(/-BRL$/))

    return moedasBrasileiras
}

// Gera o elemento 'option' para cada moeda e acrescenta eles dentro do seletor
async function gerarOpcoes(){
    const moedas = await moedasBrasileiras()

    const opcoes = moedas.map(moeda => {
        const opcao = document.createElement("option")
        opcao.innerText = moeda[1].split('/')[0]
        opcao.value = moeda[0]
        return opcao
    })

    //A primeira opção sempre será a selecionada
    opcoes[0].setAttribute('selected', 'selected')

    //Injeta as opções no seletor
    const seletor = document.getElementById('seletor')
    opcoes.forEach(opcao => seletor.appendChild(opcao))

    //Muda a moeda para a primeira opção
    mudarMoeda()
}

//Adiciona um eventListener toda vez que um item é selecionado no seletor
function escutarSeletor(){
    const seletor = document.getElementById('seletor')

    seletor.addEventListener('input', mudarMoeda)
}


//Atualiza a cotação da moeda no site, de acordo com a escolha do usuário
async function mudarMoeda(){
    const seletor = document.getElementById('seletor')
        const moedaSelecionada = seletor.value

    //Evita o usuário fazer 1000 requests para a API de uma vez
    seletor.setAttribute('disabled', true)

    //Variavel global para se comunicar entre as promessas, POR QUE APARENTEMENTE
    //É IMPOSSIVEL DE SE COMUNICAR DE OUTRO JEITO (ou pelo menos complexo demais
    //para o meu gosto)
    window.PARE_AGORA = false

    await sleep(10)

    const [cotacao, pais] = await Promise.race(
        [
            obterCotacaoMoeda(moedaSelecionada),
            embaralhaElem('cotacao', "123456790R$,."),
            embaralhaElem('pais', "abcdefghijklmnpqrstuvwxyzABCDEFGHJKLMNOPQRSTUVWXYZ"),
            embaralhaElem('titulo', "abcdefghijklmnpqrstuvwxyzABCDEFGHJKLMNOPQRSTUVWXYZ")
        ])

    const cotacaoForm = formatador.format(cotacao).normalize("NFKD")
    const paisSplit = pais.split('/')[0]

    await sleep(500)

    //PARE, PARE, PARE AGORAAAAA
    window.PARE_AGORA = true

    await sleep(75)

    await Promise.all(
        [
            desembralhaElem('cotacao', cotacaoForm.includes(" 0,00") ? 'MUITO pouco >:(' : cotacaoForm),
            desembralhaElem('pais', paisSplit),
            desembralhaElem('titulo', `${paisSplit} em Real`),
        ]
    )

    seletor.removeAttribute('disabled')
}

//Consume a API obtendo a cotação da moeda selecionada, retorna o valor low e
//o país da moeda
async function obterCotacaoMoeda(moeda){
    const url = `https://economia.awesomeapi.com.br/json/${moeda}`

    const dados = await fetch(url)
    const cotacao = await dados.json()

    return [cotacao[0].low, cotacao[0].name]
}

//Muda o texto de um elemento para um novo texto, de uma maneira suave
async function desembralhaElem(id, novoTexto){

    let elem = document.getElementById(id)
    let elemTexto = elem.innerText.split('')
    let arrNovoTexto = novoTexto.split('')

    for (let i = 0; i <= arrNovoTexto.length; i++){
        await sleep(75)

        elemTexto[i] = arrNovoTexto[i]

        if (elemTexto.length > arrNovoTexto.length){
            elemTexto.pop()
        }

        elem.innerText = elemTexto.join('')
    }

    if (elemTexto.length > arrNovoTexto.length){
        elem.innerText = arrNovoTexto.join('')
    }
}


//Fica constantemente mudando o texto de um elemento aleatoriamente, apenas para
//quando a variável global 'window.PARE_AGORA' é modificada para true
async function embaralhaElem(id, chars){

    let elem = document.getElementById(id)
    let elemTexto = elem.innerText.split('')
    let arrChars = chars.split('')


    for (let i = 0; true; i++){
        if (window.PARE_AGORA){
            break
        }
        else if (i >= elemTexto.length){
            i = 0;
            continue
        }
        else if(elemTexto[i] == " "){
            continue
        }
        await sleep(50)

        randomChar = arrChars[Math.floor(Math.random() * arrChars.length)]
        elemTexto[i] = randomChar
        elem.innerText = elemTexto.join('')
    }
}

//Peguei do mdn:
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
