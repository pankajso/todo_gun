

var gun = Gun(['http://localhost:8765/gun']);

var user = gun.user();


// {"!":{"":0}}
var todolist = {
  activeTask: 0,
  newTaskEstimate : 30,
  newTaskName: "",
  

}

const tasklist = { Lwe: {actual: 0, estimate: 30, id: 1, name: "aa", status: "Pause" }, 
                Lwf: {actual: 0, estimate: 30, id: 2, name: "bb", status: "Pause"}, 
                Lwg: {actual: 0, estimate: 30, id: 3, name: "cc", status: "Pause"}, 
                Lwh: {actual: 0, estimate: 30, id: 4, name: "dd", status: "Pause"}, 
                Lwi: {actual: 0, estimate: 30, id: 5, name: "ee", status: "Pause"}
              }

var dummy = {"Person": {name: "Ram", age: 30}}

// console.log("tasklist = ", todolist.tasklist);  
// const myJSON = JSON.stringify(todolist);
// gun.get('tododatar').put(todolist).put( {tasklist: tasklist})

gun.get('tododatab').put(todolist).put ( {tasklist: tasklist})

// gun.get('tododatad/tasklist').put(tasklist)
// gun.get('tasklist').put(tasklist)

// gun.get('tododatax').put({name: "Davex"})
// gun.get('Person').put(dummy)
// gun.put(dummy)

// var td = gun.get('tododatao').on((data, key) => {
//   console.log(data)
// })

// (function(startup){
//   console.log("The startup:", startup);
// });

// gun.get('tododataa').get("tasklist").once((data, key) => {
//   gun.get(data).on((value, field) => { console.log("list = ", field , value)})
// })

gun.get('tododatab').once(function (todo, id) {
  // console.log(todo.newTaskEstimate);
  // console.log(todo.newTaskName);
  // console.log(todo.activeTask);
  var tododata = {}
  tododata["newTaskName"] = todo.newTaskName
  tododata["newTaskEstimate"] = todo.newTaskEstimate
  tododata["activeTask"] = todo.activeTask

  // console.log(todo.tasklist);
  // todo.tasklist.map().on(function (task, id) {
  //    console.log(task.name)
  //    console.log(task.id)
  //    console.log(task.estimate)
  //    console.log(task.actual)
  // })

  ////////
  var tlist = {}
  gun.get('tododatab').get('tasklist').map().on(function (task, id) {
    
    // console.log(task)
    // console.log("task id ", id)
    var data =  { actual: task.actual, estimate: task.estimate, name: task.name, status: task.status}
    tlist[id] = data
    // console.log("data = ", tlist);
    if (task) {
    
    } else {
      
    }
  })
  //////
  tododata["tasklist"] = tlist
  const json = JSON.stringify(tododata);
  console.log("Todo data =",json)
})

var tlist = {}
var uniqid = Date.now();



newTask = {actual: 0, estimate: 30, name: "newTask", id: 10, status: "Pause"}
tlist[uniqid] = newTask
console.log(tlist)
console.log(uniqid)
// 
tl = gun.get('tododatab').get('tasklist');
tl.put(tlist);
console.log("newTask written");
// gun.get('tododataa').map().on(function (todo, id) {
//   // Check if the todo element already exists.
//   // This can happen because GUN sometimes sends mulitple change events for the same item.
//   console.log(todo)
//   // console.log(todo.newTaskEstimate)
//   // console.log(todo.newTaskName)
//   // var li = $('#' + id)
//   // Does is not yet exist?
//   // if (!li.get(0)) {
//   //   // Create it.
//   //   // Set the id to the GUN id of the item.
//   //   // GUN automatically creates id's for all items.
//   //   // Finally set the new todo element to the end of the list.
//   //   li = $('<li>').attr('id', id).appendTo('ul')
//   //   // console.log(li)
//   // }
//   // Does the GUN item contain any data?
//   // (It sends null if it was removed from GUN.)
//   if (todo) {
//     // Create an element with the title of the GUN item in it.
//     // var html = '<span onclick="clickTitle(this)">' + todo.title + '</span>'
//     // // Add a checkbox in front and check it if the GUN item has a done state.
//     // html = '<input type="checkbox" onclick="clickCheck(this)" ' + (todo.done ? 'checked' : '') + '>' + html
//     // // Add a trashcan icon and make it clickable.
//     // html += '<img onclick="clickDelete(this)" src="https://cdnjs.cloudflare.com/ajax/libs/foundicons/3.0.0/svgs/fi-x.svg"/>'
//     // // Set it to the element.
//     // li.html(html)
//     // console.log(todo);
//   } else {
//     // The item was removed from GUN, because we got null.
//     // Delete it from the screen.
//     // li.remove()
//   }
// })



// gun.get('tododatad/tasklist').once
// (
//   (data, key) => 
//   {
//     gun.get(data).on
//     (
//       (value, field) => 
//       { 
//         gun.get(value).on
//         (
//           (v, k) => 
//           { 
//             console.log("list = ", k , v)
//           }
//         )
//       }
//     )
//   }
// )


// gun.get('tododatad/tasklist').get('spouse').get('employer').get('employees').map().get('name').val(function(data, key){
//   console.log("The employee's", key, data);
// });
// var items = gun.get('tododata');
// console.log("items: ", items);

// var items = gun.get('items');
// console.log("items: ", items);

// $('form').on('submit', function(e){
//     e.preventDefault();
//     items.set($('input').val());
//     $('input').val("");
// })

// items.map().on(function(item, id){
//     console.log("item: ", item);
//     console.log("id: ", id);
//     var li = $('#' + id).get(0) || $('<li>').attr('id', id).appendTo('ul');
//     if(item){
//         $(li).text(item);
//     } else {
//         $(li).hide();
//     }
// })

$('body').on('dblclick', 'li', function(e){
    items.get(this.id).put(null);
})
