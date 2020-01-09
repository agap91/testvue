<template>
  <section class="container gray-white">
    <section class="caption-block">
      <h1>Заказы</h1>
      <ul class="select-filter" @click="removeFilter($event)">
        <li data-filter="phone" data-type_element="input">
          <span class="filter-name">Телефон:</span>
          <span class="filter-value">3844</span>
          <svg
            class="clear-filter-item"
            data-item="phone"
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="17"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="15" y1="9" x2="9" y2="15" />
            <line x1="9" y1="9" x2="15" y2="15" />
          </svg>
        </li>
      </ul>
      <ul class="select-filter-status" v-html="filterStatusBlock" @click="removeFilter($event)">
        <li class="money">
          <span class="status-btn status-group-4">Отправленно</span>
          <svg
            class="clear-filter-item"
            data-item="sent"
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="17"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="15" y1="9" x2="9" y2="15" />
            <line x1="9" y1="9" x2="15" y2="15" />
          </svg>
        </li>
        <li class="sent">
          <span class="status-btn status-group-5">Деньги получены</span>
          <svg
            class="clear-filter-item"
            data-item="money"
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="17"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="15" y1="9" x2="9" y2="15" />
            <line x1="9" y1="9" x2="15" y2="15" />
          </svg>
        </li>
      </ul>
    </section>
    <section class="content">
      <div class="tabel">
        <div class="t-controll-panel">
          <div class="left">
            <button class="btn settings-btn" v-on:click="openBlock('settings')">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-settings"
              >
                <circle cx="12" cy="12" r="3" />
                <path
                  d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"
                />
              </svg>
            </button>
            <div class="selected-order">
              Выбрано
              <span class="font-weight_bold">2</span> из
              <span class="font-weight_bold">100</span>
            </div>
          </div>
          <div class="right justify-content_end">
            <div class="pagination">
              <input type="number" name="page" value="1" />
              / 134
            </div>
            <button class="btn additional-btn" v-on:click="openBlock('additional')">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-chevron-down"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
            <button class="btn add-order-btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-plus"
              >
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
            </button>
          </div>
          <div class="clear"></div>
          <div class="additional-buttons" v-if="additionalVisible">
            <button class="btn">лог просмотров</button>
            <button class="btn">лог входов</button>
            <button class="btn">лог выходов</button>
            <button class="btn">импорт треков</button>
            <button class="btn">импорт комментариев</button>
            <button class="btn">импорт прозвонов Доставка</button>
            <button class="btn">Аптрек</button>
            <button class="btn">Автонабор</button>
            <button class="btn">Export аппрув</button>
            <button class="btn">Создать заказ</button>
          </div>
          <div class="settings-block additional-wrap" v-if="settingsVisible">
            <h3>Отобразить поля</h3>
            <ul class="settings-items">
              <li>
                <input type="checkbox" name="show[]" value="web_id" id="web_id" />
                <label for="web_id">
                  <div class="check">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="4"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-check"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>ID вебмастера
                </label>
              </li>
              <li>
                <input type="checkbox" name="show[]" value="payout" id="payout" />
                <label for="payout">
                  <div class="check">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="4"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-check"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>Ставка
                </label>
              </li>
              <li>
                <input type="checkbox" name="show[]" value="target" id="target" />
                <label for="target">
                  <div class="check">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="4"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-check"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>Ресурс
                </label>
              </li>
            </ul>
          </div>
        </div>
        <div class="t-filter">
          <div class="left">
            <span class="status-block-open" v-on:click="openBlock('status')">
              Статус
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-chevron-down"
                v-bind:class="[statusVisible ? 'rotate' : '']"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </span>
          </div>
          <div class="right">
            <span class="filter-block-open" v-on:click="openBlock('filter')">
              Фильтр
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                viewBox="0 0 24 17"
                fill="none"
                stroke="currentColor"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-sliders"
              >
                <line x1="4" y1="21" x2="4" y2="14" />
                <line x1="4" y1="10" x2="4" y2="3" />
                <line x1="12" y1="21" x2="12" y2="12" />
                <line x1="12" y1="8" x2="12" y2="3" />
                <line x1="20" y1="21" x2="20" y2="16" />
                <line x1="20" y1="12" x2="20" y2="3" />
                <line x1="1" y1="14" x2="7" y2="14" />
                <line x1="9" y1="8" x2="15" y2="8" />
                <line x1="17" y1="16" x2="23" y2="16" />
              </svg>
            </span>
          </div>
          <div
            class="status-block additional-wrap"
            v-show="statusVisible"
            @change="filterSelect($event)"
          >
            <div v-for="(sg, sgKey) in statusGroup" :style="{background:sg.color}" v-bind:key="sg">
              <input
                type="checkbox"
                name="filter[status-group][]"
                :value="sgKey"
                :id="'status-group-'+sgKey"
                :data-color="sg.color"
                data-type="group"
              />
              <label :for="'status-group-'+sgKey">
                <div class="check">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-check"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                {{sg.name}}
              </label>
              <tamplate v-for="(st, stKey) of sg.status" v-bind:key="st">
                <input
                  type="checkbox"
                  name="filter[status][]"
                  :value="stKey"
                  :id="'status-'+stKey"
                  :data-color="sg.color"
                  data-type="status"
                  :data-group="sgKey"
                />
                <label :for="'status-'+stKey">
                  <div class="check">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="4"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-check"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  {{st.name}}
                  <span v-if="st.count">
                    (
                    <span class="font-weight_bold">{{st.count}}</span>)
                  </span>
                </label>
              </tamplate>
            </div>
          </div>
          <div class="clear"></div>
          <div class="filter-block" v-if="filterVisible">
            <label>
              ID
              <input type="number" name="filter[id]" />
            </label>
            <label>
              ФИО
              <input type="text" name="filter[fio]" />
            </label>
            <label>
              Ресурс
              <input type="text" name="filter[target]" />
            </label>
            <label class="between">
              Сумма заказа
              <div class="row align-items_center justify-content_space-between">
                <input type="number" name="filter[amount_start]" /> –
                <input type="number" name="filter[amount_end]" />
              </div>
            </label>
            <label>
              Трек номер
              <input type="text" name="filter[tracknumber]" />
            </label>
            <label>
              Индекс
              <input type="number" name="filter[zip]" />
            </label>
            <label class="between">
              Дата заказа
              <div class="row align-items_center justify-content_space-between">
                <input type="text" name="filter[date-start]" /> –
                <input type="text" name="filter[date-end]" />
              </div>
            </label>
            <label>
              Телефон
              <input type="number" name="filter[phone]" value="3844" />
            </label>
          </div>
        </div>
        <div class="t-content">
          <div class="t-header">
            <div class="td order-check">
              <input type="checkbox" name="total_order_check" id="total-order-check" />
              <label for="total-order-check">
                <div class="check">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-check"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
              </label>
            </div>
            <div class="td id">
              <input type="checkbox" name="sort[]" value="id" id="sort-id" />
              <label for="sort-id">
                ID
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-bar-chart"
                >
                  <line x1="12" y1="20" x2="12" y2="10" />
                  <line x1="18" y1="20" x2="18" y2="4" />
                  <line x1="6" y1="20" x2="6" y2="16" />
                </svg>
              </label>
            </div>
            <div class="td date">
              <input type="checkbox" name="sort[]" value="id" id="sort-date" />
              <label for="sort-date">
                Дата
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-bar-chart"
                >
                  <line x1="12" y1="20" x2="12" y2="10" />
                  <line x1="18" y1="20" x2="18" y2="4" />
                  <line x1="6" y1="20" x2="6" y2="16" />
                </svg>
              </label>
            </div>
            <div class="td zone">
              <input type="checkbox" name="sort[]" value="id" id="sort-zone" />
              <label for="sort-zone">
                Временная зона
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-bar-chart"
                >
                  <line x1="12" y1="20" x2="12" y2="10" />
                  <line x1="18" y1="20" x2="18" y2="4" />
                  <line x1="6" y1="20" x2="6" y2="16" />
                </svg>
              </label>
            </div>
            <div class="td fio">ФИО</div>
            <div class="td phone">Телефон</div>
            <div class="td goods">Товар</div>
            <div class="td atribute">Атрибут</div>
            <div class="td sum">Сумма</div>
            <div class="td opis">Опись</div>
            <div class="td comment">Комментарий</div>
            <div class="td status">
              <input type="checkbox" name="sort[]" value="id" id="sort-status" />
              <label for="sort-status">
                Статус
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-bar-chart"
                >
                  <line x1="12" y1="20" x2="12" y2="10" />
                  <line x1="18" y1="20" x2="18" y2="4" />
                  <line x1="6" y1="20" x2="6" y2="16" />
                </svg>
              </label>
            </div>
            <div class="td zip">Индекс</div>
            <div class="td tracknumber">Трек номер</div>
          </div>
          <div class="t-body moreload" @click="actionOnOrder($event)">
            <div
              v-for="n in 20"
              :key="n"
              :class="'row order-item-'+(368455+n)"
              :data-id="(368455+n)"
            >
              <div class="additional-option" data-order="368455">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 24 20"
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
              </div>
              <div class="td order-check">
                <input type="checkbox" name="order_check" id="check-368455" value="368455" />
                <label for="check-368455">
                  <div class="check">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="4"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-check"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                </label>
              </div>
              <div class="td id">
                <a href="#">368455</a>
              </div>
              <div class="td date">
                09.11.2019
                <br />21:52
              </div>
              <div class="td zone">3</div>
              <div class="td fio">Михаил</div>
              <div class="td phone">
                <a href="#">
                  <div class="btn">
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
                      class="feather feather-phone"
                    >
                      <path
                        d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                      />
                    </svg>
                  </div>
                </a>
              </div>
              <div class="td goods">Samsung Galaxy S10+ (1шт.)</div>
              <div class="td atribute">–</div>
              <div class="td sum">8340</div>
              <div class="td opis">–</div>
              <div class="td comment">
                <textarea></textarea>
              </div>
              <div class="td status">
                <span class="status-btn status-group-4">Деньги получены</span>
              </div>
              <div class="td zip">0</div>
              <div class="td tracknumber">
                <input type="text" name="tracknumber" value />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>
<script>
export default {
  data() {
    return {
      filterVisible: false,
      statusVisible: false,
      settingsVisible: false,
      additionalVisible: false,
      filterStatusBlock: "",
      statusGroup: {},
      filterStatus: {},
      allOrder: 0,
      selectOrder: 0
    };
  },
  beforeCreate() {
    this.$nextTick(() => {
      this.statusGroup = {
        1: {
          group: "1",
          name: "Группа Новые",
          color: "#fdcc83",
          status: {
            new: { name: "Новый", count: "10", checked: 0 },
            new_hot: { name: "Новый горячий", count: "", checked: 0 },
            new_cold: { name: "Новый холодный", count: "", checked: 0 }
          },
          checked: 0
        },
        4: {
          group: "4",
          name: "Группа Доставки",
          color: "#98d2e5",
          status: {
            send: { name: "Отправлено", count: 56, checked: 1 }
          },
          checked: 0
        },
        5: {
          name: "Группа Доставки",
          color: "#9eefd6",
          status: {
            money: { name: "Деньги получены", count: 10956, checked: 1 }
          },
          checked: 0
        }
      };
    });
  },
  methods: {
    bildFilterStatus: function() {
      this.filterStatusBlock = "";
      for (var key in this.filterStatus) {
        this.filterStatusBlock +=
          `<li class="` +
          key +
          `">
          <span class="status-btn" style="background: ` +
          this.filterStatus[key].color +
          `">` +
          this.filterStatus[key].name +
          `</span>
          <svg
            class="clear-filter-item"
            data-item="` +
          key +
          `"
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="17"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="15" y1="9" x2="9" y2="15" />
            <line x1="9" y1="9" x2="15" y2="15" />
          </svg>
        </li>`;
      }
      // this.filterStatus.forEach(function(value, key) {
      //   this.filterStatusBlock +=
      //     `<li class="` +
      //     key +
      //     `">
      //     <span class="status-btn" style="background: ` +
      //     value.color +
      //     `">` +
      //     value.name +
      //     `</span>
      //     <svg
      //       class="clear-filter-item"
      //       data-item="` +
      //     key +
      //     `"
      //       xmlns="http://www.w3.org/2000/svg"
      //       width="17"
      //       height="17"
      //       viewBox="0 0 24 24"
      //       fill="none"
      //       stroke="currentColor"
      //       stroke-width="2"
      //       stroke-linecap="round"
      //       stroke-linejoin="round"
      //     >
      //       <circle cx="12" cy="12" r="10" />
      //       <line x1="15" y1="9" x2="9" y2="15" />
      //       <line x1="9" y1="9" x2="15" y2="15" />
      //     </svg>
      //   </li>`;
      // });
    },
    openBlock: function(blok) {
      switch (blok) {
        case "filter":
          this.filterVisible = !this.filterVisible;
          break;
        case "status":
          this.statusVisible = !this.statusVisible;
          break;
        case "settings":
          this.settingsVisible = !this.settingsVisible;
          break;
        case "additional":
          this.additionalVisible = !this.additionalVisible;
          break;
      }
    },
    actionOnOrder: function(event) {
      let target = event.target;
      if (target.closest("div.td") == null) {
        if (document.querySelector(".additional-order-block") === null) {
          let blockStatusChange = false;
          var orderOptions = `<div class="additional-order-block additional-wrap">
                <div class="order-additional-menu">
                  <button class="post-rf active" data-block="post-rf">Почта России</button>
                  <button class="status-change" data-block="status-change">Сменить статус</button>
                  <button class="sms-sent" data-block="sms-sent">Отправить смс</button>
                </div>
                <div class="action-block block-status-change">
                  <label class="data-label">
                      <div class="label-caption">Сменить на</div>
                      <div class="myselect">
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="feather feather-code"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
                        <select name="">
                          <option value="+78008008080" selected>Новый</option>
                          <option value="+79155556644">Отправлено</option>
                          <option value="+79155556644">Доставлено</option>
                        </select>
                      </div>
                    </label>
                </div>
                <div class="action-block block-post-rf show">
                  <ul class="list-senders">
                    <li>
                      <span class="sender">Агапов Е.Н.</span>
                        <ul class="sender-blank">
                          <li>ф.7</li>
                          <li>ф.7 наклейка</li>
                          <li>EMS</li>
                          <li>112 ЭП</li>
                        </ul>
                    </li>
                    <li>
                      <span class="sender">Агапов Е.Н.</span>
                        <ul class="sender-blank">
                          <li>ф.7</li>
                          <li>ф.7 наклейка</li>
                          <li>EMS</li>
                          <li>112 ЭП</li>
                        </ul>
                    </li>
                    <li>
                      <span class="sender">Агапов Е.Н.</span>
                        <ul class="sender-blank">
                          <li>ф.7</li>
                          <li>ф.7 наклейка</li>
                          <li>EMS</li>
                          <li>112 ЭП</li>
                        </ul>
                    </li>
                    <li>
                      <span class="sender">Агапов Е.Н.</span>
                        <ul class="sender-blank">
                          <li>ф.7</li>
                          <li>ф.7 наклейка</li>
                          <li>EMS</li>
                          <li>112 ЭП</li>
                        </ul>
                    </li>
                    <li>
                      <span class="sender">Агапов Е.Н.</span>
                        <ul class="sender-blank">
                          <li>ф.7</li>
                          <li>ф.7 наклейка</li>
                          <li>EMS</li>
                          <li>112 ЭП</li>
                        </ul>
                    </li>
                  </ul>
                </div>
              </div>`;
          target
            .closest("div.row")
            .insertAdjacentHTML("beforeEnd", orderOptions);
          
        } else {
          var container = document.querySelector(".additional-order-block");
          if (!container.contains(target)) {
            document.querySelector(".additional-order-block").remove();
          }
        }
      } else {
        switch (target.closest("div.td").classList[1]) {
          case "order-check":
            break;
          default:
        }
      }
    },
    removeFilter: function(event) {
      let target = event.target; // где был клик?
      switch (target.closest("ul").classList["value"]) {
        case "select-filter-status":
          var value = target.closest("li").classList["value"];
          document.querySelector(
            '.status-block input[value="' + value + '"]'
          ).checked = false;
          delete this.filterStatus[value];
          this.bildFilterStatus();
          break;
        case "select-filter":
          var tag = target.closest("li").getAttribute("data-type_element");
          var filter_name = target.closest("li").getAttribute("data-filter");
          switch (tag) {
            case "input":
              document.querySelector(
                ".filter-block " + tag + '[name="filter[' + filter_name + ']"]'
              ).value = "";
              target.closest("li").remove();
            case "select":
              break;
            case "checkbox":
              break;
          }
          // var tag = document.querySelector(
          //   '.filter-block [value="' + obj.value + '"]'
          // );
          // var tag = document.querySelector(
          //   '.filter-block [value="' + obj.value + '"]'
          // );
          break;
      }
    },
    filterSelect: function(event) {
      let target = event.target;
      let color = target.getAttribute("data-color");
      let type = target.getAttribute("data-type");
      switch (type) {
        case "group":
          var group = event.target.value;

          if (event.target.checked) {
            this.filterStatus[group] = {
              name: this.statusGroup[group].name,
              color: color,
              group: group
            };
            // var html =
            //   `<li class="` +
            //   group +
            //   `"><span class="status-btn" style="background: ` +
            //   color +
            //   `">` +
            //   this.statusGroup[group].name +
            //   `</span> <svg v-on:click="removeFilter($event,{value:'` +
            //   group +
            //   `',type:'status'})" xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="clear-filter-item"><circle data-v-6494985a="" cx="12" cy="12" r="10"></circle> <line data-v-6494985a="" x1="15" y1="9" x2="9" y2="15"></line> <line data-v-6494985a="" x1="9" y1="9" x2="15" y2="15"></line></svg></li>`;
            // // this.filterStatusBlock += html;

            // // this.filterStatus = html;
            // // this.$refs.filterStatusBlock.append(html);
            // document
            //   .querySelector(".select-filter-status")
            //   .insertAdjacentHTML("beforeEnd", html); //.append(html);
          } else {
            // document
            //   .querySelector(".select-filter-status li." + group)
            //   .remove();
            // this.removeFilter(event);
            delete this.filterStatus[group];
          }
          this.bildFilterStatus();
          break;
        case "status":
          var group = target.getAttribute("data-group");
          if (event.target.checked) {
            this.filterStatus[event.target.value] = {
              name: this.statusGroup[group].status[event.target.value].name,
              color: color,
              group: group
            };
          } else {
            delete this.filterStatus[event.target.value];
          }
          this.bildFilterStatus();
          break;
      }
    }
  }
};
</script>
<style>
.list-senders {
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
}
.list-senders > li {
  padding-right: 5px;
  min-width: 120px;
}
.sender {
  font-family: Roboto-Bold;
  font-size: 16px;
}
.sender-blank {
  padding-left: 10px;
  margin-top: 10px;
  list-style: none;
  display: none;
}
.list-senders li:hover .sender-blank,
.list-senders li:hover:active .sender-blank,
.sender-blank:hover,
.sender-blank:active {
  display: block;
}
.sender-blank li {
  margin-bottom: 5px;
  font-size: 14px;
  cursor: pointer;
}
.sender-blank li:hover {
  text-decoration: underline;
}
.action-block {
  display: none;
}
.action-block.show {
  display: block;
}
</style>