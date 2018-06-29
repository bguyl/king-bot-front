<template>
  <div>
    <md-app md-waterfall md-mode="fixed">
      <md-app-toolbar class="md-primary">
        <span class="md-title">King bot dashboard</span>
      </md-app-toolbar>

      <md-app-drawer md-permanent="full">
        <md-toolbar class="md-transparent" md-elevation="0">
          Navigation
        </md-toolbar>

        <md-list>
          <md-list-item>
            <md-icon>public</md-icon>
            <span class="md-list-item-text"><router-link to="/dashboard">Overview</router-link></span>
          </md-list-item>

          <md-list-item md-expand>
            <font-awesome-icon class="md-icon" :icon="['fab', 'discord']"/>
            <span class="md-list-item-text">Discord</span>
            <md-list slot="md-expand">
              <md-list-item class="md-inset"><router-link to="/dashboard/discord">Overview</router-link></md-list-item>
              <md-list-item class="md-inset"><router-link to="/dashboard/discord/welcome">Welcome</router-link></md-list-item>
              <!-- <md-list-item class="md-inset"><router-link to="/dashboard/discord/commands">Commands</router-link></md-list-item>
              <md-list-item class="md-inset"><router-link to="/dashboard/discord/twitch">Twitch</router-link></md-list-item>
              <md-list-item class="md-inset"><router-link to="/dashboard/discord/twitter">Twitter</router-link></md-list-item>
              <md-list-item class="md-inset"><router-link to="/dashboard/discord/youtube">Youtube</router-link></md-list-item>
              <md-list-item class="md-inset"><router-link to="/dashboard/discord/vote">Vote</router-link></md-list-item>
              <md-list-item class="md-inset"><router-link to="/dashboard/discord/speedrun">Speedrun</router-link></md-list-item>
              <md-list-item class="md-inset"><router-link to="/dashboard/discord/timers">Timers</router-link></md-list-item> -->
            </md-list>
          </md-list-item>

          <md-list-item md-expand>
            <font-awesome-icon class="md-icon" :icon="['fab', 'twitch']"/>
            <span class="md-list-item-text">Twitch</span>
            <md-list slot="md-expand">
              <md-list-item class="md-inset">Comming soon</md-list-item>
            </md-list>
          </md-list-item>

          <md-list-item md-expand>
            <font-awesome-icon class="md-icon" :icon="['fab', 'youtube']"/>
            <span class="md-list-item-text">Youtube</span>
            <md-list slot="md-expand">
              <md-list-item class="md-inset">Comming soon</md-list-item>
            </md-list>
          </md-list-item>

        </md-list>
      </md-app-drawer>

      <md-app-content>
        <router-view></router-view>
      </md-app-content>
    </md-app>
  </div>
</template>

<style lang="scss" scoped>
  .md-app {
    min-height: 100vh;
    border: 1px solid rgba(#000, .12);
  }

   // Demo purposes only
  .md-drawer {
    width: 230px;
    max-width: calc(100vw - 125px);
  }
</style>
