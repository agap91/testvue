<template>
  <div id="app">
    <app-top-pannel v-scroll="handleScroll"></app-top-pannel>
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style>
/* @import '@/assets/fonts/roboto.scss'; */

*,
*:before,
*:after {
  box-sizing: border-box;
}
a {
  color: #09d3ac;
}
body,
html {
  font-family: Roboto-Light;
  font-weight: normal;
  padding: 0;
  margin: 0;
  position: relative;
  font-size: 15px;
  color: #343434;
}
body {
  padding-top: 58px;
  transition: all 0.3s;
}
button {
  outline: none;
}
.p0 {
  padding: 0 !important;
}
.row {
  display: flex;
}
.align-items_center {
  align-items: center;
}
.caption-block {
  border-bottom: 1px solid #ededed;
  padding: 5px 3vw;
}
.gray-white .caption-block {
  background: #f2f2f2;
}
.white-gray .caption-block {
  background: #fff;
}
.caption-block h1 {
  font-size: 35px;
  margin: 0;
}
.select-filter,
.select-filter-status {
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  list-style: none;
}
.select-filter li:not(:last-child),
.select-filter-status li:not(:last-child) {
  margin-right: 15px;
}
.select-filter li,
.select-filter-status li {
  position: relative;
}
.select-filter li {
  display: flex;
  flex-direction: column;
}
.filter-name {
  font-family: Roboto-Bold;
  font-size: 12px;
  margin-bottom: 3px;
}
.filter-value {
  font-size: 14px;
}
.clear-filter-item {
  fill: #f2f2f2;
  position: absolute;
  right: -8px;
  top: -8px;
  display: none;
  cursor: pointer;
}
.select-filter li:hover .clear-filter-item,
.select-filter-status li:hover .clear-filter-item,
.clear-filter-item:hover {
  display: block;
}
.status-btn {
  display: block;
  padding: 8px 15px;
  border-radius: 2px;
}
.status-group-4 {
  background: #98d2e5;
}
.status-group-5 {
  background: #9eefd6;
}
.status-group-1 {
  background: #fdcc83;
}
.font-weight_bold {
  font-family: Roboto-Bold;
}
.gray-white .content {
  background: #fff;
}
.white-gray .content {
  background: #f2f2f2;
}
.content {
  padding: 30px 3vw;
  position: relative;
}
.t-controll-panel {
  background: #282c34;
  color: #fff;
  display: flex;
  padding: 5px;
  align-items: center;
  flex-wrap: wrap;
  position: relative;
}
.clear {
  width: 100%;
}
.t-controll-panel .left {
  flex: 2;
}
.t-controll-panel .right {
  flex: 0.5;
}
.t-controll-panel .left,
.t-controll-panel .right {
  display: flex;
  align-items: center;
}
.btn {
  background: #09d3ac;
  border: none;
  border-radius: 2px;
  display: flex;
  align-items: center;
  padding: 8px 13px;
  transition: all 0.3s;
  cursor: pointer;
}
.btn:hover,
.btn.selected {
  opacity: 0.8;
}
.selected-order {
  text-transform: uppercase;
  padding: 0 5px;
}
.pagination {
  display: flex;
  align-items: center;
}
.pagination input {
  text-align: center;
  border-radius: 2px;
  border: 1px solid #cfcfcf;
  font-size: 15px;
  width: 50px;
  padding: 8px 0px;
  background: #fff;
  margin-right: 5px;
}
input,
textarea {
  text-align: left;
  border-radius: 2px;
  border: 1px solid #cfcfcf;
  font-size: 15px;
  padding: 8px 5px;
  background: #fff;
}
.btn.additional-btn {
  margin: 0px 5px;
}
.settings-block {
  position: absolute;
  top: 45px;
  color: #343434;
  padding: 5px;
  left: 0;
}
.settings-block h3 {
  font-size: 15px;
  margin: 0;
}
.settings-block .settings-items {
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
}
.settings-block .settings-items li {
  width: 50%;
}
.additional-wrap {
  position: absolute;
  color: #343434;
  padding: 5px;
  box-shadow: 0 8px 17px rgba(0, 0, 0, 0.3);
  z-index: 2;
  background: #fff;
  width: auto;
  border-radius: 2px;
  /* display: none; */
}
.settings-block.additional-wrap {
  top: 41px;
  left: 5px;
}
input[type="checkbox"] {
  display: none;
}
input[type="checkbox"] + label .check svg {
  display: none;
}
input[type="checkbox"]:checked + label .check svg {
  display: block;
  stroke: #fff;
}
input[type="checkbox"]:checked + label .check {
  background: #282c34;
  border-color: #282c34;
}
.check {
  border: 1px solid #cfcfcf;
  width: 20px;
  height: 20px;
  border-radius: 2px;
  background: #fff;
  display: flex;
  align-items: center;
  transition: all 0.3s;
  cursor: pointer;
  justify-content: center;
  margin-right: 5px;
}
label {
  display: flex;
  align-items: center;
}
.settings-block li:not(:last-child) {
  margin-bottom: 5px;
}
.settings-block.show {
  display: block;
}
.additional-buttons {
  width: 100%;
  padding-top: 5px;
  display: none;
  flex-wrap: wrap;
  justify-content: end;
}
.additional-buttons .btn:not(:last-child) {
  margin-right: 5px;
}
.additional-buttons.show {
  display: flex;
}
.t-filter {
  background: #f2f2f2;
  padding: 10px 15px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e2e2e2;
  position: relative;
  flex-wrap: wrap;
}
.t-filter .left {
  flex: 1;
}
.status-block-open,
.filter-block-open {
  display: flex;
  align-items: center;
  font-family: Roboto-Regular;
  cursor: pointer;
}
.status-block-open svg,
.filter-block-open svg {
  margin-left: 5px;
}
.t-content {
  overflow-x: auto;
  overflow-y: hidden;
  position: relative;
  padding-top: 57px;
}
.t-header label[for^="sort-"] svg {
  transform: rotate(90deg);
}
.t-header {
  background: #f2f2f2;
  padding: 10px 15px;
  border-bottom: 1px solid #e2e2e2;
  display: flex;
  align-items: center;
  font-family: Roboto-Bold;
  position: absolute;
  left: 0;
  top: 0;
}
.t-body .row {
  align-items: center;
  width: 100%;
  padding: 5px 0;
  position: relative;
  /* cursor: pointer; */
  border-bottom: 1px solid #e2e2e2;
}
.td.id {
  min-width: 60px;
  max-width: 60px;
}
.td.date {
  min-width: 85px;
  max-width: 85px;
}
.td.zone {
  min-width: 90px;
  max-width: 90px;
}
.td.fio {
  min-width: 150px;
  max-width: 150px;
}
.td.phone {
  min-width: 105px;
  max-width: 105px;
}
.td.goods {
  min-width: 200px;
  max-width: 200px;
}
.td.atribute {
  min-width: 100px;
  max-width: 100px;
}
.td.opis {
  min-width: 45px;
  max-width: 45px;
}
.td.sum {
  min-width: 55px;
  max-width: 55px;
}
.td.comment {
  min-width: 200px;
  max-width: 200px;
}
.td.status {
  min-width: 155px;
  max-width: 155px;
}
.td.zip {
  min-width: 55px;
}
.td.tracknumber {
  min-width: 200px;
}
.td {
  margin: 0px 5px;
}
.t-body textarea {
  resize: vertical;
}
.additional-option {
  cursor: pointer;
}
label[for^="sort-"] {
  cursor: pointer;
}
.status-block.additional-wrap {
  padding: 0;
  left: 15px;
  top: 30px;
}
.status-block.additional-wrap label {
  padding: 5px;
  font-size: 13px;
  font-family: Roboto-Regular;
}
.status-block-open {
  width: 75px;
}
.status-block.show {
  display: block;
}
.filter-block.show {
  display: flex;
}
.status-block-open.open svg {
  transform: rotate(180deg);
}

.filter-block {
  display: flex;
  flex-wrap: wrap;
}
.filter-block label {
  flex-direction: column;
  justify-content: start;
  text-align: left;
  align-items: start;
  font-family: Roboto-Regular;
  font-size: 13px;
  margin-bottom: 5px;
}
.filter-block label:not(:last-child) {
  margin-right: 10px;
}
.between input {
  width: 45%;
}
.filter-block .between {
  width: 200px;
}
.filter-block input,
.filter-block .myselect {
  margin-top: 5px;
}
.justify-content_space-between {
  justify-content: space-between;
}
.additional-order-block.additional-wrap {
  z-index: 9999999999;
  left: 20px;
  top: 75%;
  padding: 0;
}
.order-additional-menu {
  background: #f2f2f2;
  padding: 5px;
  padding-bottom: 0;
  border-bottom: 1px solid #e2e2e2;
}
.order-additional-menu button {
  border: none;
  background: none;
  padding-top: 7px;
  padding-bottom: 15px;
  font-size: 13px;
  font-family: Roboto-Regular;
  padding-left: 0;
  padding-right: 0;
  transition: all 0.3s;
  position: relative;
  text-transform: uppercase;
  cursor: pointer;
  margin: 0px 10px;
}
.order-additional-menu button::after {
  content: "";
  width: 100%;
  bottom: -1px;
  position: absolute;
  left: 0;
  opacity: 0;
  transition: all 0.3s;
  height: 1px;
  background: #282c34;
}
.order-additional-menu button:hover:after,
.order-additional-menu button.active:after {
  opacity: 1;
}
.action-block {
  padding: 5px;
  display: flex;
  flex-wrap: wrap;
}
.action-block {
  padding: 5px;
  display: flex;
  flex-wrap: wrap;
}
.action-block.block-export label {
  width: 50%;
}
.additional-order-block.additional-wrap {
  width: 500px;
}
.block-export label {
  margin-bottom: 5px;
  width: 33.333333333% !important;
  font-size: 13px;
  font-family: Roboto-Regular;
}
.t-body .row.select {
  background: #09d3ac;
}
.t-body .row.select a {
  color: #343434;
}
.justify-content_end {
  justify-content: end !important;
}
.t-controll-panel .right.justify-content_end {
  justify-content: end !important;
}
.rotate {
  transform: rotate(180deg);
}
.myselect {
  position: relative;
  overflow-x: hidden;
  border: 1px solid #dbdbdb;
  width: 100%;
  font-family: Roboto-Bold;
  margin-top: 3px;
  border-radius: 2px;
  border: 1px solid #cfcfcf;
  font-size: 15px;
  padding: 6.7px 5px;
  background: #fff;
}
.myselect svg {
  transform: rotate(90deg);
  position: absolute;
  right: 5px;
  top: 0;
  bottom: 0;
  margin: auto;
}
.myselect select {
  width: 120%;
  height: 100%;
  font-size: 15px;
  padding: 0;
  margin: 0;
  border: none;
  background: none;
}
.data-label {
  display: flex;
  justify-content: start;
  flex-direction: column;
  align-items: start;
}
</style>