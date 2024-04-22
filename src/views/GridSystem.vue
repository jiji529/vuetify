<template>
  <v-container fluid>
    <v-card>
      <!-- 기본 gutter 24px, dense: gutter 8px, no-gutters: gutter 0px -->
      <v-layout>
        <v-col>
          <v-card
            class="bg-yellow"
            border
          >
            Cell
          </v-card>
        </v-col>
        <v-col>
          <v-card
            class="bg-yellow"
            border
          >
            Cell
          </v-card>
        </v-col>
        <v-col>
          <v-card
            class="bg-yellow"
            border
          >
            Cell
          </v-card>
        </v-col>
      </v-layout>
    </v-card>
  </v-container>
</template>

<script>
export default {
    name: 'GridSystem',
}
</script>

<style>

</style>
