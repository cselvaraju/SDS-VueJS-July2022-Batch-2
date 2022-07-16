<template>
  <div class="container">
    <h1>REST API Access Demo</h1>
    <div>
      <button @click="getPostsUsingAsyncAwait">Get All Posts</button>
      <div>
        <label> Post ID: <input type="text" v-model="postId" /> </label>
        <br />
        <label> Post Title: <input type="text" v-model="postTitle" /> </label>
        <br />
        <label> Post Body: <input type="text" v-model="postBody" /> </label>
      </div>
      <div>
        <button @click="getPost">Get Post</button>
        <button @click="editPost">Edit Post</button>
        <button @click="deletePost">Delete Post</button>
      </div>
    </div>
    <div>
      <div class="card mb-2" v-for="(post, index) in posts" :key="index">
        <div class="card-body">
          <h5 class="card-title">{{ post.title }}</h5>
          <h6 class="card-subtitle mb-2 text-muted">Post ID: {{ post.id }}</h6>
          <p class="card-text">{{ post.body }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import axios from 'axios';

const URL = "http://localhost:3000";

export default {
  name: "App",

  data() {
    return {
      posts: [],
      postId: null,
      postTitle: '',
      postBody: ''
    };
  },

  methods: {
    getPostsUsingFetchPromise() {
      fetch(`${URL}/posts`)
        .then((response) => response.json())
        .then((data) => (this.posts = data));
    },

    async getPostsUsingAsyncAwait() {
      const response = await fetch(`${URL}/posts`);
      const data = await response.json();
      this.posts = data;
    },

    async getPost() {
      const response = await axios.get(`${URL}/posts/${this.postId}`)
      this.posts = [response.data];
    },

    async editPost() {
      const post = {
        id: this.postId,
        title: this.postTitle,
        body: this.postBody
      };
      
      await axios.put(`${URL}/posts/${this.postId}`, post);
      await this.getPostsUsingAsyncAwait();
    },

    async deletePost() {
      await axios.delete(`${URL}/posts/${this.postId}`);
      await this.getPostsUsingAsyncAwait();
    }
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
