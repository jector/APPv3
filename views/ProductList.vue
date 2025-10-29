<script>
export default {
  name: "ProductList",

  data: function() {
    return {
    };
  },

  // methods: usually "events" triggered by v-on:
  methods: {
    getItemById(id) {
      return this.productsList.find(item => item.idProduct === id);
    }

  },

  props:{
    productsList: Array,
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
                    <h5>Showing {{ productsList.length }} games</h5>
                    <small>of {{ productsList.length }} games in total</small>
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

</template>