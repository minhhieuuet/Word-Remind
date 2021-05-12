<template lang="">
  <div>
    <div>
      <input type="text" v-model="newWord.content" />
      <input type="text" v-model="newWord.meaning" />
      <button @click="createWord">Submit</button>
    </div>
    <ul>
      <li v-for="word of words" :key="word">
        {{ word.content }} : {{ word.meaning }}
        <button @click="deleteWord(word)">x</button>
      </li>
    </ul>
  </div>
</template>
<script>
import { db } from "../services/firebase";
export default {
  data() {
    return {
      words: [],
      newWord: {
        content: "",
        meaning: "",
      },
    };
  },
  methods: {
    async getData() {
      let snapshot = await db.collection("words").get();
      this.words = snapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
    },
    async createWord() {
      await db
        .collection("words")
        .doc()
        .set(this.newWord);
      await this.getData();
      this.newWord = {};
    },
    async deleteWord(word) {
      await db.collection("words").doc(word.id).delete();
      await this.getData();
    },
  },
  async mounted() {
    this.getData();
  },
};
</script>
<style lang=""></style>
