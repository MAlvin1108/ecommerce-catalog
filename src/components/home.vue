<template>
  <div>
    <section class="hero" id="home">
      <main class="content">
        <h1>High and Class</h1>
        <p>we're here for your stylish outfit</p>
      </main>
    </section>

    <section class="hero2">
        <h2>CATEGORY</h2>
            <ul class="section-card">
                <li>
                     <router-link to="/men" class="card-content men-bg">
                        <div class="overlay">
                            <span>MEN</span>
                         </div>s
                      </router-link>
                </li>
                <li>
                    <router-link to="/women" class="card-content women-bg">
                        <div class="overlay">
                            <span>WOMEN</span>
                         </div>
                    </router-link>
                </li>
            </ul>
        </section>
    </div>
</template>

<script>
export default {
  name: 'homePage',
}
</script>

<style scoped>
/* Tambahkan styling sesuai kebutuhan */
</style>
