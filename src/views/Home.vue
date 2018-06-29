<template>
  <div class="home">
    <a href="https://github.com/bguyl/king-bot-server"><img style="position: absolute; top: 0; right: 0; border: 0;" src="https://s3.amazonaws.com/github/ribbons/forkme_right_red_aa0000.png" alt="Fork me on GitHub"></a>
    <div class="intro">
      <h1>King bot 👑</h1>
      <p>Full featured and open source bot for Discord, Twitch and more !</p>
      <md-button v-on:click="goTo('signin')" class="md-raised md-primary">Sign in</md-button>
      <md-button v-on:click="goTo('login')" class="md-raised md-accent">Log in</md-button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import store from '@/store';

@Component
export default class Home extends Vue {
  public goTo(route: string) {
    this.$router.push(route);
  }
  public login() {
    store.commit('login');
  }
}
</script>

<style lang="scss" scoped>
  .home {
    background: url('../assets/background.jpg');
    background-size:cover;
    text-align: center;
    min-height: 100vh;
    display: flex;
  }
  .intro {
    margin: auto;
    padding: 20vh;
    h1 {
      font-size: 5rem;
			line-height: 1;
    }
    p {
			font-size: 1.25rem;
			font-style: italic;
			margin-top: -0.25rem;
			text-align: center;
    }
  }
</style>
