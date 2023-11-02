import Vue from "vue";
import Vuex from "vuex";
import Localbase from "localbase";

let db = new Localbase("db");

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    sorting: false,
    letlogin: false,
    search: null,
    username: "",
    snackbar: {
      show: false,
      text: "",
    },
    tasks: [],
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
    user(state) {
      return state.username;
    },
  },
  mutations: {
    setUser(state, payload) {
      state.letlogin = true;
      state.username = payload.username;
    },
    setUserdetails(state) {
      state.username = localStorage.getItem("username");
    },
    setSearch(state, payload) {
      state.search = payload;
    },
    taskAdd(state, payload) {
      console.log("logged");
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
          i.details = payload.taskDetails;
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
    setTasks(state, tasks) {
      state.tasks = tasks;
    },
    logout(state) {
      state.username = "";

      state.letlogin = false;
      localStorage.removeItem("username");
    },
  },
  actions: {
    deleteTask(context, payload) {
      db.collection("tasks").doc({ id: payload }).delete();
      context.commit("taskDelete", payload);
      context.commit("showSnackbar", "Task Deleted !");
    },
    editTask(context, payload) {
      db.collection("tasks").doc({ id: payload.id }).update({
        title: payload.taskTitle,
        details: payload.taskDetails,
      });
      context.commit("taskEdit", payload);
      context.commit("showSnackbar", "Task Edited !");
    },
    updateDate(context, payload) {
      console.log(payload, "payloadd");
      db.collection("tasks").doc({ id: payload.id }).update({
        dueDate: payload.dueDate,
      });
      context.commit("dateEdit", payload);
      context.commit("showSnackbar", "Date Updated !");
    },
    checkTask(context, payload) {
      context.commit("taskCheck", payload);
    },
    addTask(context, payload) {
      console.log("payload", payload);
      let task = {
        id: Date.now(),
        title: payload.title,
        dueDate: null,
        done: false,
        details: "",
        createdby: payload.user,
      };
      db.collection("tasks")
        .add(task)
        .then(() => {
          context.commit("taskAdd", task);
          context.commit("showSnackbar", "Task Added !");
        });
    },
    getTasks(context) {
      db.collection("tasks")
        .get()
        .then((tasks) => {
          context.commit("setTasks", tasks);
        });
    },
    registerUser(context, payload) {
      let user = {
        id: Date.now(),
        username: payload.username,
        password: payload.password,
      };
      localStorage.setItem("username", payload.username);
      db.collection("users")
        .add(user)
        .then(() => {
          context.commit("setUser", payload);
        });
    },
    loginUser(context, payload) {
      localStorage.setItem("username", payload.username);
      db.collection("users")
        .get()
        .then((users) => {
          for (let document of users) {
            if (document.password === payload.password) {
              context.commit("setUser", payload);
              console.log("hi2");
            }
          }
          localStorage.setItem("username", payload.username);
        });
    },
  },
  modules: {},
});
