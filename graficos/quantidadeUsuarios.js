import { getCSS, tickConfig } from "./common.js"

async function quantidadeDePraticantes() {
    const url = 'https://raw.githubusercontent.com/rayaneschneider/ciencia-de-dados/refs/heads/main/base-de-dados/esportes-mais-praticados.json'
    const res = await fetch(url)
    const dados = await res.json()
    const nomeDosEsportes = Object.keys(dados)
    const quantidadeDePraticantes = Object.values(dados)

    const data = [
        {
            x: nomeDosEsportes,
            y: quantidadeDePraticantes,
            type: 'bar',
            marker: {
                color: getCSS('--primary-color')
            }
        }
    ]

    const layout = {
        plot_bgcolor: getCSS('--bg-color'),
        paper_bgcolor: getCSS('--bg-color'),
        title: {
            text: 'Esportes com mais praticantes',
            x: 0,
            font: {
                color: getCSS('--primary-color'),
                size: 30,
                font: getCSS('--font')
            }
        },
        xaxis: {
            tickfont: tickConfig,
            title: {
                text: 'Nome dos esportes',
                font: {
                    color: getCSS('--secondary-color')
                }
            }
        },
        yaxis: {
            tickfont: tickConfig,
            title: {
                text: 'Bilhões de praticantes ativos',
                font: {
                    color: getCSS('--secondary-color')
                }
            }
        }
    }

    const grafico = document.createElement('div')
    grafico.className = 'grafico'
    document.getElementById('graficos-container').appendChild(grafico)
    Plotly.newPlot(grafico, data, layout)
}

quantidadeDePraticantes();