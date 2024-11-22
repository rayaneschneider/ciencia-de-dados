const url = 'https://raw.githubusercontent.com/rayaneschneider/ciencia-de-dados/refs/heads/main/base-de-dados/esportes-dados-globais.json'
async function vizualizarInformacoesGlobais() {
    const res = await fetch(url)
    const dados = await res.json()
    const pessoasPraticantes = (dados.total_pessoas_que_praticam_esportes_regularmente) / 1e9
    const pessoasNoMundo = (dados.total_pessoas_mundo)  / 1e9
    const horas = parseInt (dados.tempo_medio_semana_praticando_esportes)
    const minutos = Math.round((dados.tempo_medio_semana_praticando_esportes - horas) * 100)
    const porcentagemPraticantes = ((pessoasPraticantes / pessoasNoMundo) * 100).toFixed(2)
    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container__texto')
    paragrafo.innerHTML = `Você sabia que o mundo tem <span>${pessoasNoMundo}</span> de pessoas e que aproximadamente <span>${pessoasPraticantes} bilhões</span> praticam esportes e passam em média <span>${horas}</span> horas e <span>${minutos}</span> minutos praticando.
    <br> Isso significa que aproximadamente <span>${porcentagemPraticantes}%</span> de pessoas praticam algum esporte.`
    const container = document.getElementById('graficos-container')
    container.appendChild(paragrafo)
  }
  
  vizualizarInformacoesGlobais()
  
