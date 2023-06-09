<template>
    <div v-for="post in posts" :key="post.id">
        <!-- Post preview-->
        <div class="post-preview">
            <PostSingle :post="post" />
        </div>
        <!-- Divider-->
        <hr class="my-4" />
    </div>
</template>

<script>
import { onMounted, onUnmounted, onUpdated } from 'vue';
import PostSingle from './PostSingle.vue';

export default {
    props: ['posts'],
    components: {
        PostSingle
    },
    setup(props) {
        onMounted(() => console.log('component mounted'))
        onUnmounted(() => console.log('component unmounted'))
        onUpdated(() => console.log('component updated'))
    }
}
</script>