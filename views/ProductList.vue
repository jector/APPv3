<script>
export default {
  name: "ProductList",

  data: function() {
    return {

      productsList: [
        {
          idProduct: "0",
          promoProduct: true,
          trendingProduct: true,
          activeProduct: "active",
          nameProduct: 'The First Berserker: Khazan',
          mainPrice: 59.99,
          soldPrice: 37.79,
          discount: 37,
          endOffer: 'September 29',
          mainPicture: '../images/product01/mainPict00.jpg',
          thumbnail01: 'images/product01/th01.jpg',
          thumbnail02: 'images/product01/th02.jpg',
          thumbnail03: 'images/product01/th03.jpg',
          thumbnail04: 'images/product01/th04.jpg',
          thumbnail05: 'images/product01/th05.jpg',
          thumbnail06: 'images/product01/th06.jpg',
          logoPicture: 'images/product01/logoMain00.png',
          publisher: 'NEOWIZ',
          developer: 'Lizard Smoothie',
          sourceP: 'NEOWIZ',
          genres: 'Action, Adventure, Indie, RPG',
          platform: 'PC',
          released: 'Thursday, September 11, 2025',
          sLanguages: 'English, French, German, Italian, Japanese, Korean, Polish, Portuguese-Brazil, Russian, Simplified Chinese, Spanish, Spanish-Latin America, Traditional Chinese, Turkish',
          systemMin:'Windows 10 (64-bit)Windows 10 (64-bit)',
          systemRec:'Windows 10 (64-bit) or higher',
          processorMin:'Intel Core i5-4690 / AMD FX 4350',
          processorRec:'Intel Core i5-7600K / AMD Ryzen 5 1600X',
          memoryMin:'8 GB RAM',
          memoryRec:'16 GB RAM',
          graphicsMin:'NVIDIA GeForce GTX 780 / AMD Radeon R9 280X',
          graphicsRec:'NVIDIA GeForce GTX 1660/1060 / AMD Radeon RX 580 AMD | For Ray Tracing: GeForce RTX 2060',
          directXMin:'Version 11',
          directXRec:'Version 12',
          storageMin:'42 GB available space',
          storageRec:'42 GB available space',
          sortDescription: "The First Berserker: Khazan is a hardcore action role-playing game. The player will become Khazan, the great general of the Pell Los Empire, who overcame death, and sets out to reveal the incidents that led to his downfall and seek vengeance on his enemies.",
          longDescription: "Experience the brutal action of The First Berserker: Khazan, a hardcore Action RPG adventure set 800 years before the events of the Dungeon Fighter Online (DNF) Universe. You will experience the vast universe and journey to the continent of Arad and discover the untold story of General Khazan. Master deep and immersive combat mechanics while you engage in strategic battles against a diverse array of foes and bosses. Will you embrace the path of the First Berserker and embark on Khazan\'s path of revenge? THE FIRST BERSERKER The Great General Khazan is falsely branded a traitor and mercilessly tortured. After narrowly escaping death, Khazan forms an unlikely alliance with the ghostly entity Blade Phantom, gaining otherworldly powers. Witness Khazan's journey for revenge and learn his path to becoming the first berserker in the DNF Universe.",
        },
        {
          idProduct: "1",
          promoProduct: true,
          nameProduct: 'Hades',
          mainPrice: 24.99,
          soldPrice: 6.24,
          discount: 75,
          mainPicture: 'images/product02/mainPict01.jpg',
          endOffer: 'WEEKEND DEAL!',
          sortDescription: "Defy the god of the dead as you hack and slash out of the Underworld in this rogue-like dungeon crawler from the creators of Bastion, Transistor, and Pyre.",
          longDescription: "Hades is a god-like rogue-like dungeon crawler that combines the best aspects of Supergiant's critically acclaimed titles, including the fast-paced action of Bastion, the rich atmosphere and depth of Transistor, and the character-driven storytelling of Pyre. As the immortal Prince of the Underworld, you'll wield the powers and mythic weapons of Olympus to break free from the clutches of the god of the dead himself, while growing stronger and unraveling more of the story with each unique escape attempt. UNLEASH THE FURY OF OLYMPUS. The Olympians have your back! Meet Zeus, Athena, Poseidon, and many more, and choose from their dozens of powerful Boons that enhance your abilities. There are thousands of viable character builds to discover as you go.",
          logoPicture: 'images/product02/logoMain01.png',
          publisher: 'Supergiant Games',
          developer: 'Supergiant Games',
          sourceP: 'Supergiant Games',
          genres: 'Action, Indie, RPG',
          platform: 'PC',
          released: 'Sep 17, 2020',
          sLanguages: 'English, French, German, Italian, Japanese, Korean, Polish, Portuguese-Brazil, Russian, Simplified Chinese, Spanish, Spanish-Latin America, Traditional Chinese, Turkish',

        },
        {
          idProduct: "2",
          nameProduct: 'Clair Obscur: Expedition 33',
          trendingProduct: true,
          mainPrice: 59.99,
          soldPrice: 53.99,
          discount: 10,
          mainPicture: 'images/product03/mainPict02.jpg',
          endOffer: 'September 29',
          sortDescription: "Lead the members of Expedition 33 on their quest to destroy the Paintress so that she can never paint death again. Explore a world of wonders inspired by Belle Époque France and battle unique enemies in this turn-based RPG with real-time mechanics.",
          longDescription:"Once a year, the Paintress wakes and paints upon her monolith. Paints her cursed number. And everyone past that age turns to smoke and fades away. Year by year, that number ticks down and more of us are erased. Tomorrow she’ll wake and paint “33.” And tomorrow we depart on our final mission - Destroy the Paintress, so she can never paint death again. We are Expedition 33. Clair Obscur: Expedition 33 is a ground-breaking turn-based RPG with unique real-time mechanics, making battles more immersive and addictive than ever. Explore a fantasy world inspired by Belle Époque France in which you battle devastating enemies.",
          logoPicture: 'images/product03/logoMain02.png',
          publisher: 'Supergiant Games',
          developer: 'Supergiant Games',
          sourceP: 'Supergiant Games',
          genres: 'Action, Indie, RPG',
          platform: 'PC',
          released: 'Sep 17, 2020',
          sLanguages: 'English, French, German, Italian, Japanese, Korean, Polish, Portuguese-Brazil, Russian, Simplified Chinese, Spanish, Spanish-Latin America, Traditional Chinese, Turkish',

        },
        {
          idProduct: "3",
          promoProduct: true,
          trendingProduct: true,
          nameProduct: 'Blasphemous 2',
          mainPrice: 44.99,
          soldPrice: 26.99,
          discount: 40,
          mainPicture: 'images/product04/mainPict03.jpg',
          endOffer: 'September 29',
          sortDescription: "The Penitent One awakens as Blasphemous 2 joins him once again in an endless struggle against The Miracle. Dive into a perilous new world filled with mysteries and secrets to discover, and tear your way through monstrous foes that stand between you and your quest to end the cycle once and for all. ",
          longDescription:"Once a year, the Paintress wakes and paints upon her monolith. Paints her cursed number. And everyone past that age turns to smoke and fades away. Year by year, that number ticks down and more of us are erased. Tomorrow she’ll wake and paint “33.” And tomorrow we depart on our final mission - Destroy the Paintress, so she can never paint death again. We are Expedition 33. Clair Obscur: Expedition 33 is a ground-breaking turn-based RPG with unique real-time mechanics, making battles more immersive and addictive than ever. Explore a fantasy world inspired by Belle Époque France in which you battle devastating enemies.",
          logoPicture: 'images/product04/logoMain03.png',
          publisher: 'Supergiant Games',
          developer: 'Supergiant Games',
          sourceP: 'Supergiant Games',
          genres: 'Action, Indie, RPG',
          platform: 'PC',
          released: 'Sep 17, 2020',
          sLanguages: 'English, French, German, Italian, Japanese, Korean, Polish, Portuguese-Brazil, Russian, Simplified Chinese, Spanish, Spanish-Latin America, Traditional Chinese, Turkish',

        },
      ],

    };
  },

  // methods: usually "events" triggered by v-on:
  methods: {
    getItemById(id) {
      return this.productsList.find(item => item.idProduct === id);
    }

  },

  props:{
  },

  // computed: values that are updated and cached if dependencies change
  computed: {
    filteredMainCarousel() {
      return this.productsList.filter(item => item.promoProduct);
    },
    filteredMainTrending() {
      return this.productsList.filter(item => item.trendingProduct);
    }
  }
}
</script>

<template>
      <main class="container">
        <div class="row g-5">
          <div class="col-md-7 col-lg-9">
            <div class="pb-5">
              <div class="container">
                <div class="row pt-5 pb-2">
                  <div class="col-5">
<!--                    <h5>Showing {{ productsList.length }} games</h5>
                    <small>of {{ productsList.length }} games in total</small>-->
                  </div>
                </div>

                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                  <div class="col-md-4 position-relative " v-for="game in productsList" :key="game.idProduct">
                    <RouterLink  class="card text-bg-dark overflow-hidden rounded-2 shadow" :to="{ name: 'ProductDetail', params: { id: game.idProduct } }">
                      <img :src="game.mainPicture" height="200"
                           class="position-absolute top-0 start-50 translate-middle-x" alt="\`{{game.nameProduct}}\`">
                      <svg aria-label="Placeholder: Card image"
                           class="bd-placeholder-img bd-placeholder-img-lg card-img"
                           height="200" preserveAspectRatio="xMidYMid slice" role="img" width="100%"
                           xmlns="http://www.w3.org/2000/svg"><title>Placeholder</title>
                        <rect width="100%" height="100%" fill="#868e96"></rect>
                      </svg>
                      <div class="card-img-overlay bg-bg-dark-opacity-25">
                        <h4 class="card-title fw-bold">{{ game.nameProduct }}</h4>
                        <p class="card-text position-absolute bottom-0 start-0 bg-bg-dark-opacity-75 w-100 p-2 rounded-top-2 d-flex align-items-center">
                          <span class="bg-info p-2 align-middle me-3 text-light rounded-2 fw-bold bg-discount">-
                            {{ game.discount }}%</span>
                          <span><small class="text-decoration-line-through">$ {{ game.mainPrice }}</small>
                          <br>$ {{ game.soldPrice }}</span>
                        </p>
                      </div>
                    </RouterLink>
                  </div>
                </div>
              </div>
              <nav aria-label="navigation" class="border-top border-white mt-5">
                <ul class="pagination justify-content-end mt-3 ">
                  <li class="page-item disabled">
                    <a class="page-link bg-transparent border-0 text-secondary">Previous</a>
                  </li>
                  <li class="page-item active"><a class="page-link bg-secondary box-shadow-inset border-0" href="#">1</a></li>
                  <li class="page-item"><a class="page-link bg-transparent border-0 text-light shadow" href="#">2</a>
                  </li>
                  <li class="page-item"><a class="page-link bg-transparent border-0 text-light shadow" href="#">3</a>
                  </li>
                  <li class="page-item">
                    <a class="page-link bg-transparent border-0 text-light shadow" href="#">Next</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>

          <div class="col-md-5 col-lg-3 py-5">
            <div class="accordion accordion-flush" id="accordionPanelsStayOpenExample">
              <div class="accordion-item bg-transparent text-light">
                <h2 class="accordion-header">
                  <button class="accordion-button bg-transparent text-light" type="button" data-bs-toggle="collapse"
                          data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true"
                          aria-controls="panelsStayOpen-collapseOne">
                    Price range
                  </button>
                </h2>
                <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show">
                  <div class="accordion-body">
                    <div class="range-slider-container">
                      <!--For the future
                      https://medium.com/@predragdavidovic10/native-dual-range-slider-html-css-javascript-91e778134816
                      https://codepen.io/predragdavidovic/pen/mdpMoWo
                      ////
                      https://github.com/w3collective/price-range-slider
                      -->

                      <label for="range4" class="form-label">Example range</label>
                      <input type="range" class="form-range" min="0" max="90" value="90" id="range4">
                      <span>$</span>
                      <output for="range4" id="rangeValue" aria-hidden="true"></output>
                    </div>
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item bg-transparent text-light text-center">
                        <input class="form-check-input me-1" type="checkbox" value="" aria-label="...">
                        Show only free games
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="accordion-item bg-transparent text-light">
                <h2 class="accordion-header">
                  <button class="accordion-button bg-transparent text-light" type="button" data-bs-toggle="collapse"
                          data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="true"
                          aria-controls="panelsStayOpen-collapseThree">
                    Genres
                  </button>
                </h2>
                <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse show">
                  <div class="accordion-body">
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item bg-transparent text-light">
                        <input class="form-check-input me-1" type="checkbox" value="" aria-label="...">
                        Action
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="accordion-item bg-transparent text-light">
                <h2 class="accordion-header">
                  <button class="accordion-button bg-transparent text-light" type="button" data-bs-toggle="collapse"
                          data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="true"
                          aria-controls="panelsStayOpen-collapseTwo">
                    Release Status
                  </button>
                </h2>
                <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse show">
                  <div class="accordion-body">
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item bg-transparent text-light">
                        <input class="form-check-input me-1" type="checkbox" value="" aria-label="...">
                        New arrivals
                      </li>
                      <li class="list-group-item bg-transparent text-light">
                        <input class="form-check-input me-1" type="checkbox" value="" aria-label="...">
                        Upcoming
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

<!--
      <div>
          <h1>Lista de Productos</h1>
          <ul>
            <li v-for="product in products" :key="product.id">
              <router-link :to="{ name: 'ProductDetail', params: { id: product.id } }">
                {{ product.name }} {{product.id}}
              </router-link>
            </li>
          </ul>
      </div>
-->

</template>