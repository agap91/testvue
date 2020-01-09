<template>
  <section class="top-panel show">
    <div class="menu">
      <span class="mobile-menu-btn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-menu"
        >
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </span>
      <ul>
        <router-link v-for="menuItem of menu" v-bind:key="menuItem" tag="li" v-bind:to="menuItem.link" active-class="active">
          <a>{{menuItem.name}}</a>
        </router-link>
      </ul>
    </div>
    <div class="user-block">
      <span class="user-name">{{userFIO}}</span>
      <span class="second-menu-btn" v-on:click="openSubmenu">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-more-vertical"
        >
          <circle cx="12" cy="12" r="1" />
          <circle cx="12" cy="5" r="1" />
          <circle cx="12" cy="19" r="1" />
        </svg>
      </span>
    </div>
    <div class="second-menu" v-if="secondMenuIsVisible">
      <ul>
        <li>
          <a href="#">Отчеты</a>
        </li>
        <li>
          <a href="#">Справка</a>
        </li>
        <li>
          <a href="#">Скрипты</a>
        </li>
        <li>
          <a href="#">Настройки</a>
        </li>
      </ul>
      <div class="row align-items_center">
        <div class="left">ID: {{userID}}</div>
        <div class="right justify-content_end">
          <a href="#" class="logout">
            Выйти
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-log-out"
            >
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
              <polyline points="16 17 21 12 16 7" />
              <line x1="21" y1="12" x2="9" y2="12" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      userID: 511,
      userFIO: "Агапов Евгений",
      secondMenuIsVisible: false,
      menu: [
        {
          name: "Заказа",
          link: "/order_edit"
        },
        {
          name: "Склад",
          link: "/warehouse"
        },
        {
          name: "Статистика",
          link: "/statistic"
        },
        {
          name: "Вебы",
          link: "/webmasters"
        },
      ]
    };
  },
  methods: {
    openSubmenu: function() {
      this.secondMenuIsVisible = !this.secondMenuIsVisible;
    }
  }
};
</script>

<style scoped>
.mobile-menu-btn {
  display: none;
}

.menu ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
}

.top-panel {
  position: fixed;
  width: 100%;
  left: 0;
  top: -100%;
  background: #282c34;
  display: flex;
  align-items: center;
  padding: 0px 3vw;
  color: #fff;
  transition: all 0.3s;
  z-index: 999;
}

.top-panel.show {
  display: flex;
  top: 0;
}

.menu {
  flex: 1;
}

.menu ul li:not(:last-child) {
  margin-right: 15px;
}

.menu a {
  color: #fff;
  text-decoration: none;
  font-size: 15px;
  display: block;
  padding: 20px 0px;
  position: relative;
  transition: all 0.3s;
  font-weight: bold;
  font-family: Roboto-Regular;
}

.menu a:hover,
.menu a.active {
  color: #09d3ac;
}

.menu a.active::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 5px;
  background: #09d3ac;
}

.user-block {
  display: flex;
  align-items: center;
}

.user-block .user-name {
  font-weight: bold;
  font-family: Roboto-Regular;
}

.second-menu-btn {
  cursor: pointer;
}

.second-menu {
  position: absolute;
  right: 3vw;
  top: 50px;
  background: #282c34;
  width: 200px;
  padding: 5px 10px;
  color: #fff;
  /* display: none; */
}

.second-menu ul {
  padding: 0;
  list-style: none;
}

.second-menu ul a {
  color: #fff;
  text-decoration: none;
  font-weight: bold;
  font-family: Roboto-Regular;
  font-size: 14px;
  transition: all 0.3s;
}

.second-menu ul a:hover {
  color: #09d3ac;
}

.justify-content_end {
  justify-content: end;
}

.second-menu .row > div {
  display: flex;
  width: 50%;
}

.logout {
  display: flex;
  align-items: center;
  text-decoration: none;
}

.logout svg {
  margin-left: 5px;
}

.second-menu ul li:not(:last-child) {
  margin-bottom: 5px;
}

.show {
  display: block;
}
</style>