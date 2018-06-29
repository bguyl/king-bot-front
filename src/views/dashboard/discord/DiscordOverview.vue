<template>
    <div id="discord-overview" class="md-layout md-gutter md-alignment-center-center">
      <form novalidate class="md-layout-item md-layout md-alignment-top-center">
        <md-card class="md-layout-item md-size-50 md-small-size-100">
        <md-card-header>
          <div class="md-title">Discord connection</div>
        </md-card-header>
        <md-card-content>
          <md-field>
            <label>Discord token</label>
            <md-input v-model="token"></md-input>
          </md-field>
        </md-card-content>
         <md-card-actions>
          <md-button type="submit" class="md-raised md-primary" :disabled="sending">Submit</md-button>
        </md-card-actions>
        </md-card>
        <md-snackbar :md-active.sync="tokenSend">Token successfully send !</md-snackbar>
      </form>
    </div>
</template>

<script>
  export default {
    name: 'discord-overview',
    data() {
      return {
        token
      };
    },
  };
</script>


<style lang="scss" scoped>
#discord-overview {
  width: calc(100% - 3px);
}
</style>

