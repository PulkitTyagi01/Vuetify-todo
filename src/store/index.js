import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    sorting: false,
    search: null,
    tasks: [
      { id: 1, title: "Wake UP!", done: false, dueDate: "2018-10-17" },
      { id: 2, title: "Get Bananas", done: false, dueDate: "2019-11-20" },
      { id: 3, title: "Eat Bananas", done: false, dueDate: "2018-08-10" },
      { id: 4, title: "Go for Walk", done: false, dueDate: null },
      { id: 5, title: "Sleep!", done: false, dueDate: "2012-10-10" },
    ],
    snackbar: {
      show: false,
      text: "",
    },
  },
  getters: {
    tasks(state) {
      return state.tasks;
    },
    tasksfiltered(state) {
      if (!state.search) {
        return state.tasks;
      }
      return state.tasks.filter((task) =>
        task.title.toLowerCase().includes(state.search.toLowerCase())
      );
    },
  },
  mutations: {
    setSearch(state, payload) {
      state.search = payload;
    },
    taskAdd(state, payload) {
      state.tasks.push(payload);
    },
    taskCheck(state, payload) {
      for (let i in state.tasks) {
        if (state.tasks[i].id === payload) {
          state.tasks[i].done = !state.tasks[i].done;
        }
      }
    },
    taskDelete(state, payload) {
      state.tasks = state.tasks.filter((task) => task.id !== payload);
    },
    showSnackbar(state, payload) {
      let timeout = 0;
      if (state.snackbar.show) {
        state.snackbar.show = false;
        timeout = 300;
      }
      setTimeout(() => {
        state.snackbar.text = payload;
        state.snackbar.show = true;
      }, timeout);
    },
    taskEdit(state, payload) {
      for (let i of state.tasks) {
        if (i.id === payload.id) {
          i.title = payload.taskTitle;
        }
      }
    },
    dateEdit(state, payload) {
      for (let i of state.tasks) {
        if (i.id === payload.id) {
          i.dueDate = payload.dueDate;
        }
      }
    },
    toggleSorting(state) {
      state.sorting = !state.sorting;
    },
  },
  actions: {
    deleteTask(context, payload) {
      context.commit("taskDelete", payload);
      context.commit("showSnackbar", "Task Deleted !");
    },
    editTask(context, payload) {
      context.commit("taskEdit", payload);
      context.commit("showSnackbar", "Task Edited !");
    },
    updateDate(context, payload) {
      context.commit("dateEdit", payload);
      context.commit("showSnackbar", "Date Updated !");
    },
    checkTask(context, payload) {
      context.commit("taskCheck", payload);
    },
    addTask(context, payload) {
      let task = {
        id: Date.now(),
        title: payload,
        done: false,
      };
      context.commit("taskAdd", task);
      context.commit("showSnackbar", "Task Added !");
    },
  },
  modules: {},
});
