// import images from './images';

const wines = [
  {
    image: "https://i.ibb.co/5FN2qHk/burger1.jpg",
    choose: "valitse liha: voner/falafel",
    title: 'KEBAB PITALE',
    price: '€9,90',
    tags: 'tomaattikastiketta | tzatzikia | tomaatti-kurkkusalaatti | pikkeloity punakaali | marinoitu punasipuli',
  },
  {
    image: "https://i.ibb.co/5FN2qHk/burger1.jpg",
    choose: "valitse liha: nauta/kana",
    title: 'DONER BOX JR',
    price: '€7,50',
    tags: 'tomaattikastiketta | ranskalaiset | ketsuppi',
  },
  {
    image: "https://i.ibb.co/5FN2qHk/burger1.jpg",
    choose: "valitse liha: nauta/kana",
    title: 'KEBAB RIISILLA',
    price: '€10,90',
    tags: 'tomaattikastiketta | tzatzikia | tomaatti-kurkkusalaatti | pikkeloity punakaali | marinoitu punasipuli',
  },
  {
    image: "https://i.ibb.co/5FN2qHk/burger1.jpg",
    choose: "valitse liha: nauta/kana",
    title: 'KEBAB ',
    price: '€10,90',
    tags: 'tomaattikastiketta | tzatzikia | tomaatti-kurkkusalaatti | pikkeloity punakaali | marinoitu punasipuli',
  },
  {
    image: "https://i.ibb.co/5FN2qHk/burger1.jpg",
    choose: "valitse liha: nauta/kana",
    title: 'RULLAKERAN SKALAISILLA',
    price: '€11,90',
    tags: 'tomaattikastiketta | tzatzikia | tomaatti-kurkkusalaatti | pikkeloity punakaali | marinoitu punasipuli',
  },
  // {
  //   image: "https://i.ibb.co/5FN2qHk/burger1.jpg",
  //   choose: "valitse liha: nauta/kana",
  //   title: 'RULLAKEBAB',
  //   price: '€13,90',
  //   tags: 'tomaattikastiketta | tzatzikia | tomaatti-kurkkusalaatti | pikkeloity punakaali | marinoitu punasipuli',
  // },
  {
    image: "https://i.ibb.co/5FN2qHk/burger1.jpg",
    choose: "valitse liha: nauta/kana",
    title: 'ISKENDER',
    price: '€11,90',
    tags: 'paahdettua pide-leipa kuutiota | tomaattikastiketta | tzatzikia | tomaatti-kurkkusalaatti | pikkeloity punakaali |  marinoitu punasipuli | yrtit',
  },
  {
    image: "https://i.ibb.co/5FN2qHk/burger1.jpg",
    choose: "valitse proteiini: nauta/voner/falafel,ranskalaiset",
    title: 'TALON SPESSU',
    price: '€13,50',
    tags: 'tomaattikastiketta | tzatzikia | tomaatti-kurkkusalaatti | pikkeloity punakaali | marinoitu punasipuli | hommusta | fetamurua | yrtit | paahdettua pide-leipaa',
  },
];

const cocktails = [
  {
    image: "https://plus.unsplash.com/premium_photo-1673439305009-821f62df6d31?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: 'CLASSIC BOLOGNESE',
    price: '€10,20',
    tags: 'home made jauheliha kastike',
  },
  {
    image: "https://plus.unsplash.com/premium_photo-1673439305009-821f62df6d31?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: 'PIZZA MARGHERITA',
    price: '€10,80',
    tags: 'tuore tomaatti | mozzarella | rucola',
  },
  {
    image: "https://plus.unsplash.com/premium_photo-1673439305009-821f62df6d31?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: 'PIZZA DONER SPECIAL',
    price: '€12,80',
    tags: 'kebab | punasipuli | chilli | tomatti | feta',
  },
  {
    image: "https://plus.unsplash.com/premium_photo-1673439305009-821f62df6d31?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: 'PIZZA NAPOLI',
    price: '€12,20',
    tags: 'katkarapu | aurajuusto | rucola',
  },
  {
    image: "https://plus.unsplash.com/premium_photo-1673439305009-821f62df6d31?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: 'PIZZA CHICKEN BBQ',
    price: '€12,80',
    tags: 'kana | punasipuli | mozzarella | rucola | bbq-kastike',
  },
  {
    image: "https://plus.unsplash.com/premium_photo-1673439305009-821f62df6d31?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: 'PIZZA SALAMI',
    price: '€10,80',
    tags: 'tupla salami',
  },
  {
    image: "https://plus.unsplash.com/premium_photo-1673439305009-821f62df6d31?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: 'PIZZA GREEN DAY',
    price: '€10,80',
    tags: 'paprika | punasipuli | kapris | kirsikka tomaatti | rucola',
  },
  {
    image: "https://plus.unsplash.com/premium_photo-1673439305009-821f62df6d31?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: 'PIZZA FANTASIA',
    price: '€12,80',
    tags: 'oma valinta neljalla taytteella',
  },

];

// const awards = [
//   {
//     imgUrl: images.award02,
//     title: 'Bib Gourmond',
//     subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
//   },
//   {
//     imgUrl: images.award01,
//     title: 'Rising Star',
//     subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
//   },
//   {
//     imgUrl: images.award05,
//     title: 'AA Hospitality',
//     subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
//   },
//   {
//     imgUrl: images.award03,
//     title: 'Outstanding Chef',
//     subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
//   },
// ];

export default { wines, cocktails };
