const speakerSection = document.querySelector('.speakers');

const speakerInfo = [
  {
    name: 'Jennifer Zhu Scott',
    image: 'img/speakers/jennifer-zhu.png',
    position: 'Executive Chairman at THE COMMONS PROJECT',
    description: 'Jennifer Zhu Scott is the Executive Chairman of The Commons Project, a nonprofit public trust established to build global digital infrastructure as public good. Prior, she was the founder of Radian Partners, focusing on direct investment in Artificial Intelligence and deep tech.',
  },
  {
    name: 'Rong Chen',
    image: 'img/speakers/rong-chen.png',
    position: 'Founder at ELASTOS',
    description: "Rong Chen began studying operating systems in 1985, when he began his career as a student at the University of Illinois at Urbana-Champaign. In 1987, Rong worked with four fellow students in the National Center for Supercomputing Applications (NCSA) to create software fetching data from Cray Supercomputers and render them on workstations, which eventually led to the creation of the world's first web browser, Mosaic.",
  },
  {
    name: 'Genevieve Leveille',
    image: 'img/speakers/Genevieve-Leveille.jpg',
    position: 'Founder and CEO at AGRILEDGER',
    description: 'Genevieve led AgriLedger’s collaboration with Haiti’s Ministry of Commerce and Industry to deliver a Distributed Ledger Technology pilot sponsored by the World Bank. The project went live in May 2020 allowing Haitian fruit farmers, customers and families to reap the benefits of fairer prices and improved food security.',
  },
  {
    name: 'Shelley Peterson',
    image: 'img/speakers/Shelley-Peterson.png',
    position: 'Associate Fellow for Augmented and Mixed Reality',
    description: 'Shelley Peterson has supported Lockheed Martin pursuits, diving into the rapidly evolving augmented reality, mixed reality, and wearables market to integrate emerging technologies into key solutions for Lockheed Martin.',
  },
];

window.addEventListener('DOMContentLoaded', () => {
  speakerSection.innerHTML = ` <h2 class='speakers-title'>Featured Speakers</h2>
  <hr>
    <ul>
        <li>
            <img src=${speakerInfo[0].image} alt='speakerimg1'>
            <div class='speaker-info'>
                <h2 class='speaker-name'>${speakerInfo[0].name}</h2>
                <h3 class='speaker-post'>${speakerInfo[0].position}</h3>
                <h3 class='speaker-description'>${speakerInfo[0].description}</h3>
            </div>
        </li>
        <li>
            <img src=${speakerInfo[1].image} alt='speakerimg1'>
            <div class='speaker-info'>
                <h2 class='speaker-name'>${speakerInfo[1].name}</h2>
                <h3 class='speaker-post'>${speakerInfo[1].position}</h3>
                <h3 class='speaker-description'>${speakerInfo[1].description}</h3>
            </div>
        </li>
        <li>
            <img src=${speakerInfo[2].image} alt='speakerimg1'>
            <div class='speaker-info'>
                <h2 class='speaker-name'>${speakerInfo[2].name}</h2>
                <h3 class='speaker-post'>${speakerInfo[2].position}</h3>
                <h3 class='speaker-description'>${speakerInfo[2].description}</h3>
            </div>
        </li>
        <li>
            <img src=${speakerInfo[3].image} alt='speakerimg1'>
            <div class='speaker-info'>
                <h2 class='speaker-name'>${speakerInfo[3].name}</h2>
                <h3 class='speaker-post'>${speakerInfo[3].position}</h3>
                <h3 class='speaker-description'>${speakerInfo[3].description}</h3>
            </div>
        </li>
     </ul>`;
});