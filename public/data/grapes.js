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

export const grapesInfo = {
    riesling: createGrapeInfo(
        'Riesling',
        'Ela enfrenta enorme dificuldade para se adaptar fora de suas regiões de origem (principalmente Alemanha e Alsácia). Sua sensibilidade ao tipo de solo e clima é muito alta, não se adaptando a ficar com outras uvas. Além disso, ela não se beneficia do envelhecimento em madeira, o que dificulta ainda mais seu cultivo e vinificação em outras regiões.',
        'https://upload.wikimedia.org/wikipedia/commons/7/76/Riesling_grapes_leaves.jpg'
    ),
    pinot_noir: createGrapeInfo(
        'Pinot Noir',
        'Para seu cultivo, é necessário solo e clima em perfeita sintonia, leveduras nativas e o cuidadoso uso do amadurecimento em madeira, são eles requisitos mínimos para o sucesso dessa exigente uva. Contudo, com todos os requisitos, a recompensa é extremamente compensadora, resultando em vinhos elegantes e de complexidade singurares.',
        'https://upload.wikimedia.org/wikipedia/commons/c/c4/Grape_near_Sancerre.jpg'
    ),
    cabernet_sauvignon: createGrapeInfo(
        'Cabernet Sauvignon',
        'Considerada a rainha das uvas tintas, é conhecida por sua casca grossa, resultando em vinhos com taninos firmes e grande potencial de envelhecimento. Adapta-se bem a diferentes climas, mas brilha em solos bem drenados, como os de Bordeaux, onde expressa notas de cassis, cedro e especiarias.',
        'https://upload.wikimedia.org/wikipedia/commons/d/dd/Cabernet_Sauvignon_Gaillac.jpg'
    ),
    merlot: createGrapeInfo(
        'Merlot',
        'Mais macia e com maturação mais rápida que a Cabernet Sauvignon, a Merlot produz vinhos aveludados e fáceis de beber. Seus aromas remetem a frutas vermelhas e negras, como ameixa e amora. É sensível a geadas tardias, o que pode comprometer sua produção em climas mais frios.',
        'https://upload.wikimedia.org/wikipedia/commons/e/ee/Merlot_Grape.jpg'
    ),
    chardonnay: createGrapeInfo(
        'Chardonnay',
        'É uma das uvas brancas mais versáteis do mundo, capaz de produzir desde vinhos leves e frescos até exemplares encorpados e amanteigados, dependendo do terroir e do uso de carvalho. Sua maleabilidade a torna uma tela em branco para o enólogo, refletindo fielmente as condições de seu cultivo.',
        'https://upload.wikimedia.org/wikipedia/commons/0/06/Chardonnay_Moldova.JPG'
    ),
    sauvignon_blanc: createGrapeInfo(
        'Sauvignon Blanc',
        'Famosa por sua acidez vibrante e aromas penetrantes de notas herbáceas, aspargos e frutas cítricas como maracujá e limão. Prefere climas mais frios para desenvolver sua intensidade aromática característica. É uma uva de maturação precoce, o que exige atenção na colheita para não perder sua acidez.',
        'https://upload.wikimedia.org/wikipedia/commons/b/bc/Sauvignon_blanc_vlasotince_vineyards.jpg'
    ),
    syrah: createGrapeInfo(
        'Syrah',
        'Também conhecida como Shiraz, esta uva prospera em climas quentes e ensolarados, desenvolvendo sabores de frutas negras, azeitona e um toque picante de pimenta preta. Seus vinhos são geralmente encorpados e com taninos robustos. O controle do vigor da videira é crucial para garantir a qualidade.',
        'https://upload.wikimedia.org/wikipedia/commons/e/eb/Shiraz_Grapes.jpg'
    ),
    malbec: createGrapeInfo(
        'Malbec',
        'Embora de origem francesa, encontrou sua melhor expressão na Argentina. A altitude e o clima seco de Mendoza permitem que ela amadureça plenamente, criando vinhos com cor profunda, taninos doces e notas de ameixa e violeta. É sensível a geadas e doenças fúngicas em climas mais úmidos.',
        'https://upload.wikimedia.org/wikipedia/commons/a/a2/Malbec_grapes.jpg'
    ),
    zinfandel: createGrapeInfo(
        'Zinfandel',
        'Conhecida por sua maturação desigual, onde um mesmo cacho pode ter uvas passas e uvas ainda verdes, exigindo uma colheita cuidadosa. Gera vinhos potentes, com alto teor alcoólico e sabores de geleia de frutas vermelhas. É geneticamente idêntica à Primitivo da Itália e à Crljenak Kaštelanski da Croácia.',
        'https://upload.wikimedia.org/wikipedia/commons/e/ef/Zinfandel_Cluster_and_Roses.jpg'
    ),
    nebbiolo: createGrapeInfo(
        'Nebbiolo',
        'Nativa do Piemonte, Itália, é uma uva de maturação tardia e muito exigente com o local de plantio. Seu nome deriva de "nebbia" (névoa), comum na região durante a colheita. Produz vinhos estruturados, tânicos e com enorme potencial de guarda, revelando aromas complexos de rosas, alcatrão e cereja.',
        'https://upload.wikimedia.org/wikipedia/commons/9/91/Close_up_of_Nebbiolo_cluster_in_Italy.jpg'
    ),
    sangiovese: createGrapeInfo(
        'Sangiovese',
        'A alma da Toscana e a base de vinhos como o Chianti e o Brunello di Montalcino. Possui alta acidez e taninos firmes, com aromas de cereja ácida, tomate e ervas. Sua qualidade é altamente dependente do clone e do terroir, mostrando grande variação de estilo conforme a região de cultivo.',
        'https://upload.wikimedia.org/wikipedia/commons/1/1f/Sangiovese_grapes_for_chianti.jpg'
    ),
    tempranillo: createGrapeInfo(
        'Tempranillo',
        'Principal uva da Espanha, seu nome significa "cedo", referindo-se à sua maturação precoce. Adapta-se bem a diferentes solos e climas, mas prefere dias quentes e noites frias para equilibrar açúcar e acidez. Gera vinhos com notas de frutas vermelhas, couro, tabaco e baunilha, especialmente com envelhecimento em carvalho.',
        'https://blogvinhotinto.com.br/wp-content/uploads/2017/06/Tempranillo.jpg.webp'
    ),
    gamay: createGrapeInfo(
        'Gamay',
        'Famosa por ser a estrela dos vinhos Beaujolais, na França. É uma uva de alta produtividade que prefere solos graníticos para mostrar seu melhor potencial. Produz vinhos leves, com poucos taninos, alta acidez e aromas frescos de banana, morango e framboesa, ideais para consumo jovem.',
        'https://upload.wikimedia.org/wikipedia/commons/3/38/Gamay.jpg'
    ),
    grenache: createGrapeInfo(
        'Grenache',
        'Também conhecida como Garnacha, é uma uva que tolera muito bem o calor e a seca, sendo amplamente plantada no sul da França e na Espanha. Produz vinhos com alto teor alcoólico, corpo médio e sabores de frutas vermelhas maduras, como morango, e notas de especiarias. É fundamental em blends como o Châteauneuf-du-Pape.',
        'https://upload.wikimedia.org/wikipedia/commons/b/b6/Grenache_noir_grapes.jpg'
    ),
    viognier: createGrapeInfo(
        'Viognier',
        'Uva branca aromática, famosa no norte do Rhône. É de cultivo difícil, com rendimentos naturalmente baixos e suscetível a doenças. Quando bem vinificada, produz vinhos encorpados e perfumados, com notas de damasco, pêssego e flores como violeta e madressilva. A colheita no ponto certo é crucial.',
        'https://upload.wikimedia.org/wikipedia/commons/7/78/Viognier.jpg'
    ),
    gewurztraminer: createGrapeInfo(
        'Gewürztraminer',
        'Extremamente aromática, esta uva é inconfundível no nariz, com intensos aromas de lichia, pétalas de rosa e gengibre. Sua casca rosada resulta em vinhos brancos com uma cor dourada profunda. É uma casta de baixa acidez, que prospera em climas frios como o da Alsácia para manter seu equilíbrio.',
        'https://upload.wikimedia.org/wikipedia/commons/5/5a/Gew%C3%BCrztraminer.jpg'
    ),
    moscato: createGrapeInfo(
        'Moscato',
        'Uma família de uvas com mais de 200 variedades, famosa por seus vinhos doces, frisantes e muito aromáticos, com notas de flor de laranjeira, pêssego e uva fresca. A Moscato Bianco é a mais nobre, utilizada para o Moscato d\'Asti. É cultivada em todo o mundo, sendo uma das uvas mais antigas conhecidas.',
        'https://www.embrapa.br/bme_images/thumb/58560040thumb.jpg'
    ),
    montepulciano: createGrapeInfo(
        'Montepulciano',
        'Esta é a segunda uva tinta mais plantada na Itália, predominante na região de Abruzzo. Não deve ser confundida com o Vino Nobile di Montepulciano (que é feito de Sangiovese). Produz vinhos com cor escura, taninos suaves e sabores de amora e ameixa, com um final levemente amargo.',
        'https://enologuia.com.br/wp-content/uploads/2018/08/Montepulciano_Reduzida.jpg'
    ),
    petit_verdot: createGrapeInfo(
        'Petit Verdot',
        'Uma das seis uvas permitidas no corte bordalês, é usada em pequenas proporções para adicionar cor, taninos e estrutura. Sua maturação é muito tardia, o que a torna difícil de cultivar em Bordeaux, mas prospera em climas mais quentes. Possui notas de violeta, mirtilo e um toque de sálvia.',
        'https://www.bordeaux.com/wp-content/uploads/2018/01/Petit-Verdot-8.jpg'
    ),
    cabernet_franc: createGrapeInfo(
        'Cabernet Franc',
        'Parente da Cabernet Sauvignon, a Cabernet Franc é mais leve em corpo e taninos, com uma maturação mais precoce. É famosa por seus aromas distintos de pimentão, framboesa e folha de tabaco. No Vale do Loire, onde é a principal uva tinta, produz vinhos vibrantes e elegantes.',
        'https://upload.wikimedia.org/wikipedia/commons/6/63/Cab_Franc_grape.JPG'
    ),
    glera: createGrapeInfo(
        'Glera',
        'Uva branca anteriormente conhecida como Prosecco, é a alma do famoso espumante italiano. É uma variedade de alta produtividade, cultivada principalmente no Vêneto. Seus vinhos são leves e refrescantes, com aromas delicados de maçã verde, pera, flores brancas e um toque cítrico.',
        'https://www.divvino.com.br/blog/wp-content/uploads/2021/01/uva-glera-glera-ou-prosecco.jpg'
    ),
    touriga_nacional: createGrapeInfo(
        'Touriga Nacional',
        'Considerada a uva mais nobre de Portugal, é a espinha dorsal de muitos Vinhos do Porto e tintos do Douro e Dão. Possui casca grossa, taninos intensos e aromas concentrados de frutas negras, violeta e bergamota. É uma uva de baixo rendimento, mas de altíssima qualidade.',
        'https://enologuia.com.br/wp-content/uploads/2018/07/Touriga_Nacional_Reduzida_450.jpg'
    ),
    camaraou_noir: createGrapeInfo(
        'Camaraou Noir',
        'Uva tinta rara, encontrada no sudoeste da França, na região de Jurançon. É conhecida por sua cor profunda e caráter rústico. Geralmente usada em pequenas quantidades em blends para adicionar cor e estrutura, não sendo comum encontrá-la como varietal.',
        ''
    ),
};

export default grapesInfo;