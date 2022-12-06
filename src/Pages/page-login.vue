<template>
  <div class="login">



    <div class="main-row">
      <!-- main left-->
      <div class="main-col-50">
        <div class="login-wrapper">

          <div class="card login-card">
            <div class="logo">
              <img src="	https://mythemestore.com/beehive-preview/wp-content/uploads/2020/07/logo-icon.svg"
                   alt="">
            </div>
            <h2 class="card-title">Welcome</h2>
            <p class="text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper.
            </p>


            <div class="form-group">
              <input class="form-control shadow-none" type="text" placeholder="Email or Username">
              <div class="input-icon-wrapper">
                <div class="input-icon">
                  <img src="/assets/icon/user.svg" alt="">
                </div>
              </div>
            </div>

            <div class="form-group">
              <input class="form-control shadow-none" type="password" placeholder="Password">
              <div class="input-icon-wrapper">
                <div class="input-icon">
                  <img src="/assets/icon/key.svg" alt="">
                </div>
              </div>
            </div>
            <!--options-->
            <div class="form-group">
              <div class="row">
                <div class="col-6">
                  <div class="remember">
                    <label for="remember">Remember me</label>
                    <input type="checkbox" class="form-check" id="remember">
                  </div>
                </div>
                <div class="col-6">
                  <div class="forgot">
                    <a href="#">Lost password?</a>
                  </div>
                </div>
              </div>
            </div>

            <button type="btn" class="btn btn-login">Log into your account</button>

            <div class="reg-link text-center">
              <p>Signup disabled</p>
            </div>
          </div>
        </div>
      </div>

      <!--main right-->
      <div class="main-col-50">
        <div class="slider-content-wrapper">
          <div class="slider-wrapper">
            <carousel :items-to-show="1" class="slider">
              <!--slide 1-->
              <slide class="slider-item"
                     style="background-image: url('/assets/images/slide-1.jpg')">
                <div class="slider-content">
                  <h3 class="slider-subtitle">
                    Join the club
                  </h3>
                  <h2 class="slider-title">Join gazillions of people</h2>

                  <p class="slider-text">At vero eos et accusamus et iusto odio dignissimos ducimus qui
                    blanditiis praesentium voluptatum deleniti.</p>

                  <a href="#" class="btn btn-outline-white">Register</a>
                </div>
              </slide>
              <!--slide 2-->
              <slide class="slider-item"
                     style="background-image: url('/assets/images/slide-2.jpg')">
                <div class="slider-content">
                  <h3 class="slider-subtitle">
                    Search jobs
                  </h3>
                  <h2 class="slider-title">From top companies</h2>

                  <p class="slider-text">At vero eos et accusamus et iusto odio dignissimos ducimus qui
                    blanditiis praesentium voluptatum deleniti.</p>

                  <a href="#" class="btn btn-outline-white">Search jobs</a>
                </div>
              </slide>
              <!--slide 3-->
              <slide class="slider-item"
                     style="background-image: url('/assets/images/slide-3.jpg')">
                <div class="slider-content">
                  <h3 class="slider-subtitle">
                    Buy and sell
                  </h3>
                  <h2 class="slider-title">Buy and sell confidentialy</h2>

                  <p class="slider-text">At vero eos et accusamus et iusto odio dignissimos ducimus qui
                    blanditiis praesentium voluptatum deleniti.</p>

                  <a href="#" class="btn btn-outline-white">Classifieds</a>
                </div>
              </slide>
              <!--slide 4-->
              <slide class="slider-item"
                     style="background-image: url('/assets/images/slide-4.jpg')">
                <div class="slider-content">
                  <h3 class="slider-subtitle">
                    Shop online
                  </h3>
                  <h2 class="slider-title">Shopping made easy</h2>

                  <p class="slider-text">At vero eos et accusamus et iusto odio dignissimos ducimus qui
                    blanditiis praesentium voluptatum deleniti.</p>

                  <a href="#" class="btn btn-outline-white">Buy Products</a>
                </div>
              </slide>

              <template #addons>
                <navigation/>
                <pagination/>
              </template>
            </carousel>
          </div>
        </div>

      </div>
    </div>


  </div>

</template>

<script>
import 'vue3-carousel/dist/carousel.css'
import {Carousel, Slide, Pagination, Navigation} from 'vue3-carousel'

export default {
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  methods: {},
  mounted() {
  }
}
</script>

