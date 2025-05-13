<template>
  <div class="product-section">
    <h1>Women's Section</h1>

    <transition name="fade" mode="out-in">
         <!-- Loading Spinner -->   
      <div v-if="loading" key="loading" class="spinner-container">
        <div class="spinner"></div>
      </div>

          <!-- Product Card -->
      <div v-else-if="product" :key="product.id">
        <div class="product-card">
          <img :src="product.image" alt="Product Image" class="product-image" />

          <div class="product-details">
            <h2 class="product-title">{{ product.title }}</h2>
            <p class="product-category">{{ product.category }}</p>
            <p class="product-description">{{ product.description }}</p>
            
            <div class="rating">
            <span class="product-price-women">${{ product.price }}</span>
            <div class="rating-women">
              <span class="rating-number">{{ product.rating.rate }}/5</span>
              <div class="rating-dots-women">
                <span
                  v-for="n in 5"
                  :key="n"
                  :class="{ filled: n <= Math.round(product.rating.rate) }"
                ></span>
              </div>
            </div>
          </div>

            <div class="product-buttons">
              <button class= "btn next-btn" @click="getPrevProduct">Previous</button>
              <button class="btn next-btn" @click="getNextProduct">Next</button>
              <button class="btn buy-btn">Buy now</button>
            </div>
          </div>
        </div>
      </div>

       <div v-else-if="outOfStock" key="empty" class="no-product-wrapper">
          <div class="no-product">
            <i data-feather="frown" class="icon-sad"></i>
            <p>This product is unavailable to show</p>
            <button class="btn next-btn" @click="resetProduct">Try Again</button>
          </div>
        </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'WomenSection',
  data() {
    return {
      index: 1,
      product: null,
      loading: false,
      outOfStock: false
    };
  },
  methods: {
    async fetchProduct() {
      this.loading = true;
      this.outOfStock = false;

      if (this.index > 20) {
        this.product = null;
        this.loading = false;
        this.outOfStock = true;
        return;
      }

      try {
        const response = await fetch(`https://fakestoreapi.com/products/${this.index}`);
        const data = await response.json();

        if (data.category === "women's clothing") {
          setTimeout(() => {
            this.product = data;
            this.loading = false;
          }, 400);
        } else {
          this.index++;
          this.fetchProduct(); // continue searching
        }
      } catch (error) {
        console.error('Fetch failed:', error);
        this.loading = false;
      }
    },
    getNextProduct() {
      this.index++;
      this.fetchProduct();
    },
    getPrevProduct() {
      this.index--;
      if (this.index < 1) this.index = 20;
      this.fetchProduct();
    },
    resetProduct() {
      this.index = 1;
      this.outOfStock = false;
      this.fetchProduct();
    }
  },
  mounted() {
    this.fetchProduct();
  }
};
</script>
