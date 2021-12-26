<script setup>
import MainSection from '@/components/MainSection.vue'
import NewsCard from '@/components/NewsCard'
</script>

<template>
  <main-section>
    <div
      v-for="i in 10"
      :key="i"
      class="flex justify-center pt-8"
    >
      <news-card
        :img="newsContent.img"
        :content="newsContent.content"
        :hashtags="newsContent.hashtags"
        :title="newsContent.title"
        :img-alt="newsContent.alt"
      />
    </div>
  </main-section>
</template>

<script>
export default {
  data () {
    return {
      newsContent: {
        img: 'https://marmotamaps.com/de/fx/wallpaper/download/faszinationen/Marmotamaps_Wallpaper_Berchtesgaden_Desktop_1920x1080.jpg',
        alt: 'No image found',
        title: 'Some news title',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut neque maximus, elementum ipsum et, ornare tortor. Donec posuere ante elit, in imperdiet dolor ullamcorper eu. Aliquam erat volutpat. Cras orci magna, placerat non vestibulum ultricies, ornare et nibh. Suspendisse ultrices varius turpis ac pharetra. Duis ornare elementum fermentum. Vivamus molestie ante vestibulum eros maximus, a interdum velit vestibulum. Phasellus molestie massa quis leo egestas bibendum. In id nisi condimentum, consequat felis nec, tempus metus. Vestibulum sagittis mattis diam, in imperdiet turpis convallis et. Maecenas vestibulum metus mauris, vel maximus velit laoreet nec. Phasellus tempus ut est non tempor. Maecenas iaculis ante dui, sit amet ultrices orci bibendum imperdiet. Maecenas id ultricies quam. Proin ante leo, mollis a ex a, rhoncus posuere tortor. Vivamus vitae quam at ex efficitur condimentum eu et lectus.',
        hashtags: ['travel', 'mountain', 'sky']
      }
    }
  }
}
</script>
