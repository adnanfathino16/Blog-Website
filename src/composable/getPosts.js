import { ref } from "vue";
import { projectFireStore } from "@/firebase/config";

const getPosts = () => {
  const posts = ref([]);
  const error = ref(null);

  const load = async () => {
    try {
      // // misalnya lama meminta data ke server
      // await new Promise((resolve) => {
      //   setTimeout(resolve, 2000);
      // });

      // let data = await fetch("http://localhost:3000/posts");
      // if (!data.ok) {
      //   throw Error("Tidak ada data");
      // }
      // posts.value = await data.json();
      // --------------json-server digantikan dengan firebase dibawah ini---------

      const res = await projectFireStore.collection("posts").get();
      // console.log(res);

      // docs didapat dari object pada res
      posts.value = res.docs.map((doc) => {
        return {
          ...doc.data(),
          id: doc.id,
        };
      });
      // ---------------atau-----------------------
      // let data2 = res.docs.map((doc) => {
      //   return {
      //     title: doc.data().title,
      //     body: doc.data().body,
      //     tags: doc.data().tags,
      //     id: doc.id,
      //   };
      // });

      // console.log(data);
      // console.log(data2);
    } catch (err) {
      error.value = err.message;
    }
  };

  return { posts, error, load };
};

export default getPosts;
