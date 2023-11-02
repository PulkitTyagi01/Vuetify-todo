<template>
  <div>
    <v-menu bottom left>
      <template v-if="user === task.createdby" v-slot:activator="{ on, attrs }">
        <v-btn icon v-bind="attrs" v-on="on">
          <v-icon color="primary">mdi-dots-vertical</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          @click="handleClick(i)"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <the-dialogdelete
      v-if="dialogs.delete"
      @close="dialogs.delete = false"
      :item="task"
    ></the-dialogdelete>
    <dialog-edit
      v-if="dialogs.edit"
      @close="dialogs.edit = false"
      :item="task"
    ></dialog-edit>
    <dialog-duedate
      v-if="dialogs.duedate"
      @close="dialogs.duedate = false"
      :item="task"
    ></dialog-duedate>
  </div>
</template>

<script>
import TheDialogdelete from "./Dialogs/TheDialogdelete.vue";
import DialogEdit from "./Dialogs/DialogEdit.vue";
import DialogDuedate from "./Dialogs/DialogDuedate.vue";
export default {
  props: ["task"],
  components: {
    "the-dialogdelete": TheDialogdelete,
    "dialog-edit": DialogEdit,
    "dialog-duedate": DialogDuedate,
  },
  data() {
    return {
      dialogs: {
        delete: false,
        edit: false,
        duedate: false,
      },
      items: [
        {
          title: "Edit",
          icon: "mdi-pencil",
          click() {
            this.dialogs.edit = true;
          },
        },
        {
          title: "Due Date",
          icon: "mdi-calendar",
          click() {
            this.dialogs.duedate = true;
          },
        },
        {
          title: "Delete",
          icon: "mdi-delete",
          click() {
            this.dialogs.delete = true;
          },
        },
        {
          title: "Sort",
          icon: "mdi-drag-horizontal-variant",
          click() {
            this.$store.commit("toggleSorting");
          },
        },
      ],
    };
  },
  methods: {
    handleClick(i) {
      this.items[i].click.call(this);
    },
  },
  computed: {
    user() {
      return this.$store.getters.user;
    },
  },
};
</script>
