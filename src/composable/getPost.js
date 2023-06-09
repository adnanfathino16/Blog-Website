import { ref } from "vue";
import { projectFireStore } from "@/firebase/config";

const getPost = (id) => {
  const post = ref(null);
  const error = ref(null);

  const load = async () => {
    try {
      // // misalnya lama meminta data ke server
      // await new Promise((resolve) => {
      //   setTimeout(resolve, 2000);
      // });

      // let data = await fetch("http://localhost:3000/posts/" + id);
      // if (!data.ok) {
      //   throw Error("Tidak ada data");
      // }
      // post.value = await data.json();
      // ---------------json-server diganti dengan firebase------
      const res = await projectFireStore.collection("posts").doc(id).get();

      if (!res.exists) {
        throw Error("data not available.");
      }

      post.value = {
        ...res.data(),
        id: res.id,
      };
    } catch (err) {
      error.value = err.message;
    }
  };

  return { post, error, load };
};

export default getPost;
