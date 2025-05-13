<template>
  <div id="app">
    <nav class="navbar">
      <div class="container-navbar">
        <div class="tittle">
          <i data-feather="shopping-cart" style="color: orange;"></i>
            <h1>Go-Shop</h1>
        </div>
          <router-link to="/">Home</router-link>
          <router-link to="/men">Men</router-link>
          <router-link to="/women">Women</router-link>
      </div>
    </nav>

    <main>
      <router-view/>
    </main>

    <footer>
      <div class="footer-content">
        <h3>Go-Shop</h3>
        <p>the classy cloth in here yow</p>

        <div class="footer-socials">
          <a href="#" aria-label="Facebook"><i data-feather="facebook"></i></a>
          <a href="#" aria-label="Twitter"><i data-feather="twitter"></i></a>
          <a href="#" aria-label="Instagram"
            ><i data-feather="instagram"></i
          ></a>
          <a href="#" aria-label="Github"><i data-feather="github"></i></a>
        </div>

        <div class="footer-bottom">&copy; 2025 Go-shop | Dibuat oleh Alvin</div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

