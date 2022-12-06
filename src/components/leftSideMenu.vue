<template>
  <!--left side contaainer-->
  <div class="left-side-container">
      <div class="dark-panel">
          <div class="panel-logo text-center">
              <img src="	https://mythemestore.com/beehive-preview/wp-content/themes/beehive/assets/images/logo-vertical.svg"
                   alt="">
          </div>
  
          <div class="card login-card">
              <h4 class="card-title">
                  Login now
              </h4>
  
              <div class="form-group">
                  <input class="form-control" type="text" placeholder="Email or Username">
                  <span><img src="images/user.svg" alt=""></span>
              </div>
  
              <div class="form-group">
                  <input class="form-control" type="password" placeholder="password">
                  <span>
                      <img src="images/key.svg" alt="">
                  </span>
              </div>
  
              <button type="button" class="btn btn-login w-100">Login</button>
              <div class="reg-link mt-1">
                  <p class="text-center color-theme" style="font-size: 14px">Signup disabled</p>
              </div>
          </div>
      </div>
      <div class="light-panel">
          <div class="panel-menu">
              <ul class="menu">
                  <li>
                      <router-link :to="{ name: 'Dashboard'}">
                          <i class="las la-wallet"></i>
                          <span>Feed</span>
                      </router-link>
                  </li>
  
                  <li>
                      <router-link :to="{ name: 'Photos'}">
                          <i class="las la-image"></i>
                          <span>Photos</span>
                      </router-link>
                  </li>
  
                  <li>
                      <a href="#">
                          <i class="las la-play"></i>
                          <span>Watch</span>
                      </a>
                  </li>
  
                  <li>
                      <router-link :to="{ name: 'Members'}">
                          <i class="las la-user"></i>
                          <span>People</span>
                      </router-link>
                  </li>
                  <li>
                      <a href="#">
                          <i class="las la-user-friends"></i>
                          <span>Group</span>
                      </a>
                  </li>
  
                  <li>
                      <a href="#">
                          <i class="las la-tv"></i>
                          <span>Adverts</span>
                      </a>
                  </li>
                  <li>
                      <a href="#">
                          <i class="las la-shopping-cart"></i>
                          <span>Shop</span>
                      </a>
                  </li>
  
                  <li>
                      <router-link :to="{ name: 'Jobs'}">
                          <i class="las la-briefcase"></i>
                          <span>Jobs</span>
                      </router-link>
                  </li>
  
                  <li>
                      <a href="#">
                          <i class="lab la-rocketchat"></i>
                          <span>Forums</span>
                      </a>
                  </li>
  
                  <li>
                      <a href="#">
                          <i class="las la-clipboard"></i>
                          <span>Blog</span>
                      </a>
                  </li>
  
              </ul>
          </div>
      </div>
  </div>  
</template>

<script>


export default {
  components: {}
}

</script>
