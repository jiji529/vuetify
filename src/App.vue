<template>
  <v-app>
    <v-app-bar color="grey">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />

      <v-toolbar-title>logo</v-toolbar-title>

      <v-btn
        icon="mdi-dots-vertical"
        variant="text"
      />
    </v-app-bar>

    <!-- 1depth -->
    <!-- 반응형-아래에서 등장 : :location="$vuetify.display.mobile ? 'bottom' : undefined" -->
    <v-navigation-drawer
      v-model="drawer"
      color="grey-darken-2"
      rail
    >
      <v-list nav>
        <v-list-item
          prepend-icon="mdi-view-dashboard"
          value="dashboard"
        />
        <v-list-item
          prepend-icon="mdi-forum"
          value="messages"
        />
      </v-list>
    </v-navigation-drawer>

    <!-- 2depth -->
    <v-navigation-drawer
      v-model="drawer"
    >
      <v-list>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :title="item.title"
          :value="item.value"
          :to="item.to"
          link
        />
      </v-list>
    </v-navigation-drawer>

    <v-system-bar color="grey-darken-3" />

    <v-main>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

      data: () => ({
      drawer: false,
      items: [
        {
          title: 'DashBoardPage',
          value: 'dashboardpage',
          to: '/'
        },
        {
          title: 'GridSystem',
          value: 'gridsystem',
          to: '/grid-system'
        }
      ],
    })

}
</script>
