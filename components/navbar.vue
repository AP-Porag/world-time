<template>
<div class="navigation_bar">
  <header id="header">
    <div class="container">
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="navbar-top">
          <div class="d-flex justify-content-between align-items-center">
            <ul class="navbar-top-left-menu">
              <li class="nav-item">
                <nuxt-link to="/advertise" class="nav-link">Advertise</nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link to="/about" class="nav-link">About</nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link to="/events" class="nav-link">Events</nuxt-link>
              </li>
            </ul>
            <div>
              <nuxt-link class="navbar-brand" to="/">
                <img src="~/assets/images/logo.svg" alt=""/>
              </nuxt-link>
            </div>
            <ul class="navbar-top-right-menu">
              <li class="nav-item">
                <a href="#" class="nav-link"><i class="mdi mdi-magnify"></i></a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">Login</a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">Sign in</a>
              </li>
              <li>
                <ul class="social-media">
                  <li>
                    <a href="#">
                      <i class="mdi mdi-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="mdi mdi-youtube"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="mdi mdi-twitter"></i>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div class="navbar-bottom">
          <div class="d-flex justify-content-between align-items-center">
            <div>
              <button
                class="navbar-toggler"
                type="button"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div
                class="navbar-collapse justify-content-center collapse"
                id="navbarSupportedContent"
              >
                <ul
                  class="navbar-nav d-lg-flex justify-content-between align-items-center"
                >
                  <li>
                    <button class="navbar-close">
                      <i class="mdi mdi-close"></i>
                    </button>
                  </li>
                  <li class="nav-item active">
                    <nuxt-link class="nav-link" to="/">Home</nuxt-link>
                  </li>
                  <li class="nav-item" v-for="category in categories" :key="category.id">
                    <nuxt-link class="nav-link" :to="'/categories/'+category.slug">{{category.name}}</nuxt-link>
                  </li>
<!--                  <li class="nav-item">-->
<!--                    <nuxt-link class="nav-link" to="/categories/magazine">MAGAZINE</nuxt-link>-->
<!--                  </li>-->
<!--                  <li class="nav-item">-->
<!--                    <nuxt-link class="nav-link" to="/categories/business">Business</nuxt-link>-->
<!--                  </li>-->
<!--                  <li class="nav-item">-->
<!--                    <nuxt-link class="nav-link" to="/categories/sports">Sports</nuxt-link>-->
<!--                  </li>-->
<!--                  <li class="nav-item">-->
<!--                    <nuxt-link class="nav-link" to="/categories/art">Art</nuxt-link>-->
<!--                  </li>-->
<!--                  <li class="nav-item">-->
<!--                    <nuxt-link class="nav-link" to="/categories/politics">POLITICS</nuxt-link>-->
<!--                  </li>-->
<!--                  <li class="nav-item">-->
<!--                    <nuxt-link class="nav-link" to="/categories/travel">Travel</nuxt-link>-->
<!--                  </li>-->
                  <li class="nav-item">
                    <nuxt-link class="nav-link" to="/contact">Contact</nuxt-link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </header>
  <div class="flash-news-banner">
    <div class="container">
      <div class="d-lg-flex align-items-center justify-content-between">
        <div class="d-flex align-items-center">
          <span class="badge badge-dark mr-3">Flash news</span>
          <marquee width="740px" direction="left" scrollamount="3" onmouseover="this.stop();" onmouseout="this.start();">
            <ul class="d-flex">
              <li v-for="headline in headlines" :key="headline.id">
                <nuxt-link class="mb-0" :to="'/post/'+headline.slug">
                  <p><span>WT</span>{{headline.title}}</p>
                </nuxt-link>
              </li>
            </ul>
          </marquee>
        </div>
        <div class="d-flex">
          <span class="mr-3 text-danger">Wed, March 4, 2020</span>
          <span class="text-danger">30°C,London</span>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "navbar",
  data(){
    return{
      categories:[],
      headlines:[]
    }
  },
  created() {
    this.getCategories();
    this.getFlashNews()
  },
  methods: {
    async getCategories() {
      const data = await this.$axios.$get('http://127.0.0.1:8000/api/categories')
      this.categories = data;
    },
    async getFlashNews() {
      const data = await this.$axios.$get('http://127.0.0.1:8000/api/post/topNews')
      this.headlines = data;
    }
  }
}
</script>

<style scoped>

</style>
