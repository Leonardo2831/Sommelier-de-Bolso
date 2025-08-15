import wines from "./wines.js";

const wineSparkling = wines.filter((wine) => wine.type === 'sparkling');
const wineWhite = wines.filter((wine) => wine.type === 'white');
const wineRose = wines.filter((wine) => wine.type === 'rose');
const wineRed = wines.filter((wine) => wine.type === 'red');
const wineLiqueur = wines.filter((wine) => wine.type === 'liqueur');

export const infosSparkling = {
    title: 'Espumante',
    text: '',
    listCharacteristics: [],
    wineSelected: wineSparkling[Math.floor(Math.random() * wineSparkling.length)],
};

export const infosWhite = {
    title: 'Branco',
    text: '',
    listCharacteristics: [],
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
    text: '',
    listCharacteristics: [],
    wineSelected: wineRed[Math.floor(Math.random() * wineRed.length)],
};

export const infosLiqueur = {
    title: 'Licoroso',
    text: '',
    listCharacteristics: [],
    wineSelected: wineLiqueur[Math.floor(Math.random() * wineLiqueur.length)],
};