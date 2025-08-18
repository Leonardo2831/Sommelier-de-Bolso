import wines from "./wines.js";

const wineSparkling = wines.filter((wine) => wine.type === 'sparkling');
const wineWhite = wines.filter((wine) => wine.type === 'white');
const wineRose = wines.filter((wine) => wine.type === 'rose');
const wineRed = wines.filter((wine) => wine.type === 'red');
const wineLiqueur = wines.filter((wine) => wine.type === 'liqueur');

export const infosSparkling = {
    title: 'Espumante',
    text: 'O espumante é um vinho no qual em sua segunda fermentação, ocorre um processo de aprisionamento do dióxido de carbono liberado. Esse aprisionamento da origem à sua perlage e tras aromas e sabores únicos para cada produção.',
    listCharacteristics: ['Os aromas presentes vão de frutas cítricas até aromas mais complexos.', 'Elevada e crocante, conferindo grande frescor.', 'Apresenta uma vasta gama por sua variedade, como seco e suave, podendo ser uma boa opção em várias ocasiões.'],
    wineSelected: wineSparkling[Math.floor(Math.random() * wineSparkling.length)],
};

export const infosWhite = {
    title: 'Branco',
    text: 'O vinho branco é porduzido majoritariamente a partir de fermentação de mosto sem contato com as cascas. Ele revela um paladar que pode variar de leve e crítico ao escorpado e amanteigado pelo fato de ter pouco tanino pela falta de contato da casca.',
    listCharacteristics: ['Seu corpo varia de leve a untuoso e incorpado.', 'Com uma acidez mais perceptível e refrescante, trazendo leveza ao paladar.', 'Um amplo espectro de aromas, trazendo com tons frutados e florais, como mel, flores, frutas cítricas, variando de cada vinho.'],
    wineSelected: wineWhite[Math.floor(Math.random() * wineWhite.length)],
};

export const infosRose = {
    title: 'Rosé',
    text: 'O vinho rosé é um ponto de equilíbrio entre o frescor do branco e a estrutura do tinto, leve, versátil e visualmente atraente. Ele não é uma mistura de branco com tinto; sua cor e aromas vêm do breve contato da casca da uva tinta com o mosto.',
    listCharacteristics: ['Geralmente de corpo leve a médio, com taninos suaves.', 'Aromas de frutas vermelhas e cítricas, variando de vinho para vinho.', 'Acidez viva, conferindo recrescência.'],
    wineSelected: wineRose[Math.floor(Math.random() * wineRose.length)],
};

export const infosRed = {
    title: 'Tinto',
    text: 'O vinho tinto é a complexidade do mundo do vinho, vindo do contato do mosto da uva durante sua fermentação. Esse processo, a maceração, lhe traz taninos, cor e uma grande gama de aromas, seu resultado pode ser um vinho jovem para algo até mesmo um exemplar potente e robusto.',
    listCharacteristics: ['Sua acidez geralmente sendo menos pontiaguda perante os vinhos brancos, é algo vital e único do vinho tinto', 'Aromas tendem a ser de frutas vermelhas e pretas (como morango e ameixa) e também especíarias. Esses aromas podem variar com nas ena maturação.', 'Apresenta um corpo de enorme variação, podendo ser leve e elegante, até mesmo encorpado e potente, influenciado principalmente pelas uvas usadas, teor alcóolico e concentração de taninos.'],
    wineSelected: wineRed[Math.floor(Math.random() * wineRed.length)],
};

export const infosLiqueur = {
    title: 'Licoroso',
    text: 'Vinho licoroso ou fortificado, é uma categoria especial onde é adicionado um destilado. Esse método aumenta o grau alcoólico e, na maioria dos casos, preserva a doçura natural da uva. O resultado são vinhos duradouros após abertos e também com grande potencial de envelhecimento.',
    listCharacteristics: ['Traz uma doçura extremamente variável, podendo ser seco aos vinhos mais doces do mundo.', 'GEralmente são vinhos encorpados e densos.', 'Geralmente traz um teor alcoólico alto, situando-se entre 15% e 22%, contribuindo para a estrutura e também capacidade de conservação.'],
    wineSelected: wineLiqueur[Math.floor(Math.random() * wineLiqueur.length)],
};