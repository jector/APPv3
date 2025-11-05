<script>
export default {
  name: 'ProductDetail',


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


  props: {
  },

  methods: {

    getItemById(id) {
      return this.productsList.find(item => item.idProduct === id);
    }
  },

  computed: {
    productId() {
      return this.$route.params.id;
    }
  },

  watch: {

  },
}

</script>
<template>

      <main>
        <div class="bg-black">
          <div class="container">


            <h1 class="fs-4 fw-bold pt-2 text-start">{{ getItemById(productId).nameProduct }}</h1>

            <div class="row">
              <div class="col-md-4 offset-md-8 position-relative">
                <div class="position-absolute z-2 top-0 end-0 p-4 text-center mt-4 container">
                  <img :src="getItemById(productId).logoPicture" alt="logMain" class="w-100 h-auto">
                </div>
              </div>
            </div>
          </div>
          <div class="card text-bg-dark border-0 rounded-0 productMainPicture">
            <img :src="getItemById(productId).mainPicture" class="opacity-75" alt="Main">
          </div>
          <div class="container">
            <div class="row">
              <div class="col-md-4 offset-md-8 position-relative">
                <div
                    class="position-absolute z-2 bottom-0 end-0 bg-dark bg-gradient mb-2 p-4 shadow container rounded-0 rounded-top-2 ">
                  <div class="border-bottom pb-3 mb-3 row">
                    <div class="col">{{ getItemById(productId).sortDescription }}</div>
                  </div>
                  <div class="row">
                    <div class="col-12 pb-3">Buy {{ getItemById(productId).nameProduct }}
                      SPECIAL PROMOTION! Offer ends {{ getItemById(productId).endOffer }}
                    </div>
                    <div class="col-4 border fs-4 text-center py-2"><strong>-{{ getItemById(productId).discount }}
                      %</strong>
                    </div>
                    <div class="col-4 text-center">
                      <small class="small fs-6 text-decoration-line-through">$
                        {{ getItemById(productId).mainPrice }}</small>
                      <p class="fs-2 m-0 lh-1"><strong class="lh-1">$ {{ getItemById(productId).soldPrice }}</strong>
                      </p>
                    </div>
                  </div>
                  <div class="row py-2">
                    <div class="col">
                      <a href="cart.html" class="btn btn-primary col-12 my-2">Add to cart</a>
                      <a href="cart.html" class="btn btn-success col-12">Buy Now</a>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="container">
            <div class="row">
              <div class="col-md-8 position-relative">
                <div class="position-absolute z-2  translate-middle top-0 start-50 p-4 text-center container ">
                  <div id="carouselIndicators" class="carousel slide py-4">
                    <div class="carousel-indicators mb-0">
                      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                              class="active"
                              aria-current="true" aria-label="Slide 1"></button>
                      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                              aria-label="Slide 2"></button>
                    </div>
                    <div class="carousel-inner">
                      <div class="carousel-item active">
                        <div class="container">
                          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                            <div class="col">
                              <a href="#" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                <div class="card shadow-sm border-0 rounded-0 shadow">
                                  <img :src="getItemById(productId).thumbnail01" class="shadow" alt="th01">
                                </div>
                              </a>
                            </div>
                            <div class="col">
                              <a href="#" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                <div class="card shadow-sm border-0 rounded-0 shadow">
                                  <img :src="getItemById(productId).thumbnail02" class="shadow" alt="th02">
                                </div>
                              </a>
                            </div>
                            <div class="col">
                              <a href="#" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                <div class="card shadow-sm border-0 rounded-0 shadow">
                                  <img :src="getItemById(productId).thumbnail03" class="shadow" alt="th03">
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="carousel-item">
                        <div class="container">
                          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                            <div class="col">
                              <a href="#" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                <div class="card shadow-sm border-0 rounded-0 shadow">
                                  <img :src="getItemById(productId).thumbnail04" class="shadow" alt="th04">
                                </div>
                              </a>
                            </div>
                            <div class="col">
                              <a href="#" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                <div class="card shadow-sm border-0 rounded-0 shadow">
                                  <img :src="getItemById(productId).thumbnail05" class="shadow" alt="th05">
                                </div>
                              </a>
                            </div>
                            <div class="col">
                              <a href="#" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                <div class="card shadow-sm border-0 rounded-0 shadow">
                                  <img :src="getItemById(productId).thumbnail06" class="shadow" alt="th06">
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselIndicators"
                            data-bs-slide="prev">
                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselIndicators"
                            data-bs-slide="next">
                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Next</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="container px-5">
          <div class="row mt-4">
            <div class="col-md-8 pe-5">
              <div class="pt-5 mt-5">
                <h5>Description</h5>
                <p>{{ getItemById(productId).longDescription }}</p>
              </div>
              <div class="py-3">
                <h5>System requirements</h5>
                <table class="table table-dark shadow">
                  <thead>
                  <tr>
                    <th colspan="2" scope="col">Minimum system requirements:</th>
                    <th scope="col">Recommended system requirements:</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <th scope="row">System:</th>
                    <td>{{ getItemById(productId).systemMin }}</td>
                    <td>{{ getItemById(productId).systemRec }}</td>
                  </tr>
                  <tr>
                    <th scope="row">Processor:</th>
                    <td>{{ getItemById(productId).processorMin }}</td>
                    <td>{{ getItemById(productId).processorRec }}</td>
                  </tr>
                  <tr>
                    <th scope="row">Memory:</th>
                    <td>{{ getItemById(productId).memoryMin }}</td>
                    <td>{{ getItemById(productId).memoryRec }}</td>
                  </tr>
                  <tr>
                    <th scope="row">Graphics:</th>
                    <td>{{ getItemById(productId).graphicsMin }}</td>
                    <td>{{ getItemById(productId).graphicsRec }}</td>
                  </tr>
                  <tr>
                    <th scope="row">DirectX:</th>
                    <td>{{ getItemById(productId).directXMin }}</td>
                    <td>{{ getItemById(productId).directXRec }}</td>
                  </tr>
                  <tr>
                    <th scope="row">Storage:</th>
                    <td>{{ getItemById(productId).storageMin }}</td>
                    <td>{{ getItemById(productId).storageRec }}</td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="col-md-4">
              <div class="py-3">
                <h5>Game details</h5>
                <table class="table table-dark shadow">
                  <tbody>
                  <tr>
                    <td>Publisher:</td>
                    <td>{{ getItemById(productId).publisher }}</td>
                  </tr>
                  <tr>
                    <td>Developer:</td>
                    <td>{{ getItemById(productId).developer }}</td>
                  </tr>
                  <tr>
                    <td>Source:</td>
                    <td>{{ getItemById(productId).sourceP }}</td>
                  </tr>
                  <tr>
                    <td>Genres:</td>
                    <td>{{ getItemById(productId).genres }}</td>
                  </tr>
                  <tr>
                    <td>Platform:</td>
                    <td>{{ getItemById(productId).platform }}</td>
                  </tr>
                  <tr>
                    <td>Released:</td>
                    <td>{{ getItemById(productId).released }}</td>
                  </tr>
                  <tr>
                    <td>Supported Languages</td>
                    <td>{{ getItemById(productId).sLanguages }}</td>
                  </tr>

                  </tbody>
                </table>
              </div>
              <div class="py-3 container px-0">
                <h5>You may like these products</h5>
                <div class="row my-2 gy-3">
                  <div class="col-6" v-for="game in productsList" :key="game.idProduct">
                    <a href="product.html" class="card bg-dark text-white position-relative shadow overflow-hidden">
                      <img :src="game.mainPicture" height="150"
                           class="position-absolute top-0 start-50 translate-middle-x opacity-75"
                           alt="\`{{game.nameProduct}}\`"/>
                      <svg class="bd-placeholder-img bd-placeholder-img-lg card-img" width="100%" height="125"
                           xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Card image"
                           preserveAspectRatio="xMidYMid slice" focusable="false">
                      </svg>

                      <div class="card-img-overlay container">
                        <div class="row">
                          <h5 class="card-title mt-1 mb-4 p-0">Neversong</h5>
                          <div class="col-4 fs-6 text-center py-2 px-0 bg-primary rounded shadow"><strong>-90%</strong>
                          </div>
                          <div class="col-8 text-end bg-bg-dark-opacity-75">
                            <small class="small fs-6 text-decoration-line-through">$39.99</small>
                            <p class="fs-6 m-0 lh-1"><strong class="lh-1">$3.99</strong></p>
                          </div>
                        </div>

                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
</template>
