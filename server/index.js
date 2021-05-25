const Hapi = require('hapi');

const server = Hapi.server({
  host: 'localhost',
  routes: {
    cors: true,
  },
  port: 8000,
});

let todoList = [{ id: 1, item: 'Eat Food'}, { id: 2, item: 'Answer Calls'}];

server.route({
  method: 'GET',
  path: '/api/todo',
  handler(request, h) {
    return {
      todo: todoList
    };
  },
});

server.route({
  method: 'PUT',
  path: '/api/todo',
  handler(request, h) {
    const requestPayload = (JSON.parse(request.payload));
    const newItem = { id: `t${Date.now()}`, item: requestPayload.item };
    
    todoList.push(newItem);
    return newItem;
  },
});

server.route({
  method: 'GET',
  path: '/api/someOtherRequest',
  handler(request, h) {
    return {
      name: 'Batman'
    };
  },
});

server.route({
  method: 'DELETE',
  path: '/api/todo/{id}',
  handler(request, h) {
    todoList = todoList.filter(item => item.id != request.params.id);
    return request.params.id;
  },
})

// Start the server
async function start() {
  try {
    await server.start();
  } catch (err) {
    console.log(err);
    process.exit(1);
  }

  console.log('Server running at:', server.info.uri);
}

start();
