const data = [
  {
    id: 1,
    img: 'images/WhatsApp-Image-2021-04-12-at-18.01.04-1.jpeg',
    name: 'Abdu-Rashid Altair',
    title: 'Endowed chair professor',
    text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur',
  },
  {
    id: 2,
    img: 'images/WhatsApp-Image-2021-04-12-at-18.01.04-1.jpeg',
    name: 'Daneen Haadiyah Eyad',
    title: 'Endowed chair professor',
    text: 'Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular.',
  },
  {
    id: 3,
    img: 'images/WhatsApp-Image-2021-04-12-at-18.01.04-1.jpeg',
    name: 'Salima Fadhiler',
    title: 'Endowed chair professor',
    text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi.',
  },
  {
    id: 4,
    img: 'images/WhatsApp-Image-2021-04-12-at-18.01.04-1.jpeg',
    name: 'Abdul-Nasser Hachim',
    title: 'Endowed chair professor',
    text: 'Aliquam nisl augue, aliquet ac tristique elementum, vehicula sit amet sem. Vestibulum et lacinia dolor. Ut ullamcorper est lacus, a ultrices nisl pretium nec. Cras.',
  },
  {
    id: 5,
    img: 'images/WhatsApp-Image-2021-04-12-at-18.01.04-1.jpeg',
    name: 'Hakem Basil Basharaat',
    title: 'Endowed chair professor',
    text: 'Suspendisse maximus mattis sem non congue. Curabitur pellentesque ultrices enim non dignissim. Fusce in dui tincidunt, pharetra libero a, gravida magna. Donec posuere et nisl.',
  },
  {
    id: 6,
    img: 'images/WhatsApp-Image-2021-04-12-at-18.01.04-1.jpeg',
    name: 'Jamaal Udeen Bekir',
    title: 'Endowed chair professor',
    text: 'Praesent tristique velit sit amet magna aliquam posuere. Praesent varius fermentum sem. Nam vel faucibus lectus. Nulla sem urna, posuere at efficitur non, sollicitudin id..',
  }];

const adding = document.querySelector('.section-3');

const container = document.createElement('div');
const gridContainer = document.createElement('div');
const gridContainer1 = document.createElement('div');

adding.append(container);
container.append(gridContainer);
container.append(gridContainer1);

container.setAttribute('class', 'row container-fluid section-3-grid');
gridContainer.setAttribute('class', 'col-md-6 col-sm-12 col-12');
gridContainer1.setAttribute('class', 'col-md-6 col-sm-12 col-12');

let count = 0;
data.forEach((speakers) => {
  const card1 = document.createElement('div');
  const cardRow1 = document.createElement('div');
  const imgDiv1 = document.createElement('div');
  const img1 = document.createElement('img');
  const bodyDiv1 = document.createElement('div');
  const cardBody = document.createElement('div');
  const title = document.createElement('h5');
  const position = document.createElement('p');
  const lines = document.createElement('span');
  const mainText = document.createElement('p');

  card1.setAttribute('class', 'card my-4');
  cardRow1.setAttribute('class', 'row no-gutters');
  imgDiv1.setAttribute('class', 'col-4');
  img1.setAttribute('src', speakers.img);
  img1.setAttribute('class', 'card-img');
  bodyDiv1.setAttribute('class', 'col-8');
  cardBody.setAttribute('class', 'card-body');
  title.innerText = speakers.name;
  title.setAttribute('class', 'card-title');
  position.innerText = speakers.title;
  position.setAttribute('class', 'card-text section-3-text');
  lines.setAttribute('class', 'line1');
  mainText.innerHTML = speakers.text;
  mainText.setAttribute('class', 'card-text');

  card1.append(cardRow1);
  cardRow1.append(imgDiv1);
  imgDiv1.append(img1);
  cardRow1.append(bodyDiv1);
  bodyDiv1.append(cardBody);
  cardBody.append(title);
  cardBody.append(position);
  cardBody.append(lines);
  cardBody.append(mainText);

  if (count < 3) {
    gridContainer.append(card1);
  } else {
    gridContainer1.append(card1);
  }

  count += 1;
});