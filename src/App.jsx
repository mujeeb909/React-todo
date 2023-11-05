const App = () => {
  return (
    <>
      <div class="container text-center">
        <h1>TodoList App</h1>
        <div class="row">
          <div class="col">
            <input type="text" placeholder="Title" />
          </div>
          <div class="col">
            <input type="text" placeholder="Description" />
          </div>
          <div class="col">
            <button className="rounded bg-success p-1">Add Task</button>
          </div>
        </div>
        <div class="row my-1">
          <h2>Tasks</h2>
          <div class="col">
            <h3>Title</h3>
          </div>
          <div class="col">
            <h3>Description</h3>
          </div>
          <div class="col">
            <button className="rounded bg-danger p-1">Delete</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
