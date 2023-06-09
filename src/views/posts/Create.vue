<template>
    <!-- Page Header-->
    <header class="masthead">
        <div class="container position-relative px-4 px-lg-5">
            <div class="row gx-4 gx-lg-5 justify-content-center">
                <div class="col-md-10 col-lg-8 col-xl-7">
                    <div class="page-heading">
                        <h1>Buat Berita Baru</h1>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <!-- Main Content-->
    <main class="mb-4">
        <div class="container px-4 px-lg-5">
            <div class="row gx-4 gx-lg-5 justify-content-center">
                <div class="col-md-10 col-lg-8 col-xl-7">
                    <div class="my-5">
                        <form @submit.prevent="handleSubmit">
                            <div class="form-floating">
                                <input class="form-control" type="text" placeholder="Title Post" v-model="title" />
                                <label for="name">Title</label>
                                <!-- <div class="invalid-feedback" data-sb-feedback="name:required">A name is required.</div> -->
                            </div>
                            <div class="form-floating">
                                <textarea class="form-control" placeholder="Input body post" style="height: 12rem"
                                    v-model="body"></textarea>
                                <label for="message">Body</label>
                                <!-- <div class="invalid-feedback" data-sb-feedback="message:required">A message is required.
                                </div> -->
                            </div>
                            <div class="form-floating">
                                <input class="form-control" type="text" placeholder="input tags" v-model="tag"
                                    @keydown.enter.prevent="handleKeydown" />
                                <label for="name">Tags</label>
                                <!-- <div class="invalid-feedback" data-sb-feedback="name:required">A name is required.</div> -->
                                <span v-for="tag in tags" :key="tag">
                                    #{{ tag }}
                                </span>
                            </div>
                            <br />
                            <!-- Submit Button-->
                            <button class="btn btn-primary text-uppercase " type="submit">Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { projectFireStore } from '@/firebase/config'

export default {
    setup() {
        const router = useRouter()
        const title = ref('')
        const body = ref('')
        const tag = ref('')
        const tags = ref([])

        const handleKeydown = () => {
            if (!tags.value.includes(tag.value)) {
                tag.value = tag.value.replace(/\s/g, '')

                tags.value.push(tag.value)
            }
            tag.value = ''
        }

        const handleSubmit = async () => {
            const post = {
                title: title.value,
                body: body.value,
                tags: tags.value
            }

            // await fetch('http://localhost:3000/posts/', {
            //     // untuk mengirim data menggunakan method post
            //     method: 'POST',
            //     // mendefinisikan bahwa konten yang kita kirimkan sifatnya adalah json
            //     headers: { 'Content-Type': 'application/json' },
            //     // mengubah object menjadi json
            //     body: JSON.stringify(post)
            // })
            // ---------------json-server diganti dengan firebase--------
            const res = await projectFireStore.collection('posts').add(post)


            router.push({
                name: 'home'
            })
        }

        return { title, body, tag, tags, handleKeydown, handleSubmit }
    }
}
</script>

<style scoped>
.masthead {
    background-image: url('../../../public/img/about-bg.jpg');
}
</style>