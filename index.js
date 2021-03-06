function initial() {
    new Vue({
        el: Todolist,
        data: {
            newTask: '',
            lists: [{ name: "買牛奶", done: false }, { name: "唸日文", done: false }],
            certain: 'Add!',
        },
        methods: {
            addTask: function() {
                if (this.newTask) {
                    this.lists.push({ name: this.newTask, done: false }); //把清單都push上去
                    this.newTask = '';
                } else { alert('不可輸入空白'); }

            },
            remove: function(index) {
                this.lists.splice(index, 1);
            }
        }

    });
}