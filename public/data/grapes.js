/**
 * 
 * @param {String} name nome da uva
 * @param {String} infos texto sobre a uva.
 * @param {String} url url da wikipedia para pegar a imagem da uva.
 * @returns Retorna um objeto com os dados da uva.
 */
function createGrapeInfo(name, infos, url){
    return { 
        grapeName: name, 
        textInfoGrape: infos, 
        urlImageGrape: url,
    };
}

const grapesInfo = {
    riesling: createGrapeInfo(
        'Riesling',
        'Ela enfrenta enorme dificuldade para se adaptar fora de suas regiões de origem (principalmente Alemanha e Alsácia). Sua sensibilidade ao tipo de solo e clima é muito alta, não se adaptando a ficar com outras uvas. Além disso, ela não se beneficia do envelhecimento em madeira, o que dificulta ainda mais seu cultivo e vinificação em outras regiões.',
        'https://upload.wikimedia.org/wikipedia/commons/c/c4/Grape_near_Sancerre.jpg'
    ),
    pinot_noir: createGrapeInfo(
        'Pinot Noir',
        'Para seu cultivo, é necessário solo e clima em perfeita sintonia, leveduras nativas e o cuidadoso uso do amadurecimento em madeira, são eles requisitos mínimos para o sucesso dessa exigente uva. Contudo, com todos os requisitos, a recompensa é extremamente compensadora, resultando em vinhos elegantes e de complexidade singurares.',
        'https://upload.wikimedia.org/wikipedia/commons/7/76/Riesling_grapes_leaves.jpg'
    ),
};

export default grapesInfo;