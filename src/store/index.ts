import Vue from 'vue';
import Vuex from 'vuex';
import clone from '@/lib/clone';

Vue.use(Vuex); //把store 绑到 Vue.prototype.$store = store

const store = new Vuex.Store({
  state: { //data
    recordList: [] as RecordItem[]
  },
  mutations: { //methods
    fetchRecords() {
      state.recordList = JSON.parse(window.localStorage.getItem('recordList') || '[]') as RecordItem[];
    },
    createRecord(record: RecordItem) {
      const record2: RecordItem = clone(record);
      record2.createdAt = new Date();
      this.recordList && this.recordList.push(record2);
      store.commit('saveRecords');
    },
    saveRecords() {
      window.localStorage.setItem('recordList', JSON.stringify(this.recordList));
    },
  },
  actions: {},
  modules: {}
});

export default store;