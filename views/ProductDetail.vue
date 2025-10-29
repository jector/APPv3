const ProductDetail = {
    name: 'ProductDetail',


    props: {
        productsList: Array,
    },

    methods: {

      getItemById(id) {
            return this.productsList.find(item => item.idProduct === id);
        }
    },

    computed: {
    },

    watch: {

    },

    template: `

      <main>
        <div class="bg-black">
          <div class="container">
            <h1 class="fs-4 fw-bold pt-2 text-start">{{ getItemById().nameProduct }}</h1>

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
    `,
};
export default ProductDetail;