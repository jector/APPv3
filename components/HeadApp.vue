<script>
export default {
  name: "HeadApp",
}

</script>

<template>
        <header class="p-1 text-bg-dark">
            <div class="container">
                <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start py-2">
                    <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                    </a>
                    <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                      <li> <RouterLink class="nav-link px-2 text-secondary" to="/"> Home </RouterLink> </li>
<!--                      <li> <RouterLink class="nav-link px-2 text-secondary" to="/about"> About </RouterLink> </li>-->

                      <li> <RouterLink class="nav-link px-2 text-white" to="/product"> Product </RouterLink> </li>
<!--
                      <li> <RouterLink class="nav-link px-2 text-white" to="/addproduct"> Add Product </RouterLink> </li>
-->

                    </ul>
                    <div class="text-end">
                        <button type="button" class="btn btn-warning">Sign-up</button>
                    </div>
                    <div class="dropdown ms-2">
                        <button class="btn btn-info dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
                                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                            </svg>
                        </button>
                        <div class="dropdown-menu p-4 dropdown-menu-end" style="min-width: 500px;">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item d-flex justify-content-between align-items-center border-bottom">
                                    1 item in your cart
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-center">
                                    <div class="card mb-3 container border-0">
                                        <div class="row g-0">
                                            <div class="col-md-2 py-3">
                                                <svg aria-label="Placeholder: Card image" class="bd-placeholder-img bd-placeholder-img-lg card-img"
                                                     height="50" preserveAspectRatio="xMidYMid slice" role="img" width="100%"
                                                     xmlns="http://www.w3.org/2000/svg"><title>Placeholder</title>
                                                    <rect width="100%" height="100%" fill="#868e96"></rect>
                                                </svg>
                                            </div>
                                            <div class="col-md-8">
                                                <div class="card-body">
                                                    <h5 class="card-title">Card title</h5>
                                                    <p class="card-text"><a href="#" class="small">Remove</a></p>
                                                </div>
                                            </div>
                                            <div class="col-md-2 text-end py-3">
                                                <small class="small text-danger">$19.5</small>
                                                <p class=""><span
                                                        class="badge text-bg-primary rounded-pill">75%</span>$4.99
                                                </p>
        
                                            </div>
                                        </div>
                                        <p class=" small">Lowest price in the last 30 days before
                                            discount: $4.99</p>
                                    </div>
        
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
</template>
