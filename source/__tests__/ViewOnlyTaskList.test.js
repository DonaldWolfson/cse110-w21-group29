import { beforeEach } from '@jest/globals';
import ViewOnlyTaskList from '../js/ViewOnlyTaskList.js';

beforeEach(() => {
  document.body.innerHTML = `
    <div class="app-container">
    <div class="app-header">
        <a href="./" class="mb-4 mb-lg-0">
            <div class="text-white">
                <h1 class="mb-0">Electric Pomato</h1>
                <h4 class="mb-0">Plan. Track. Record.</h4>
            </div>
        </a>
        <h1 class="app-title"></h1>
    </div>
    <template id="edit-title-template">
        <div class="row g-0">
            <div class="col-10">
                <h2 class="subtitle">Task List</h2>
            </div>
            <div class="col-2">
                <button class="btn btn-secondary btn-block">Start My Day!</button>
            </div>
        </div>
    </template>
    <template id="view-title-template">
        <h2 class="subtitle text-center"></h2>
    </template>
    <template id="edit-header-row-template">
        <div class="row g-0 header row-bordered">
            <div class="d-none d-lg-block col-1"><input type="text" value="#" disabled></div>
            <div class="col-7 col-lg-6"><input type="text" value="Name" disabled></div>
            <div class="col-3"><input type="text" value="Estimated Pomos" disabled></div>
            <div class="col-2"></div>
        </div>
    </template>
    <template id="task-row-template">
        <div class="row g-0 row-bordered">
            <div class="d-none d-lg-block col-lg-1"><input type="number" value="" disabled></div>
            <div class="col-7 col-lg-6"><input type="text" value="" disabled></div>
            <div class="col-3"><input type="number" value="" disabled></div>
            <div class="col-2 actions">
                <div class="edit-remove-container">
                    <i class="fas fa-pencil-alt text-warning edit-icon"></i>
                    <i class="fas fa-trash-alt text-danger remove-icon"></i>
                </div>
                <div class="save-cancel-container">
                    <i class="fas fa-check text-success save-icon"></i>
                    <i class="fas fa-times text-danger cancel-icon"></i>
                </div>
            </div>
        </div>
    </template>
    <template id="view-header-row-template">
        <div class="row g-0 header row-bordered">
            <div class="d-none d-lg-block col-lg-1"><input type="text" value="#" disabled></div>
            <div class="col-6 col-lg-5"><input type="text" value="Name" disabled></div>
            <div class="col-3"><input type="text" value="Estimated Pomos" disabled></div>
            <div class="col-3"><input type="text" value="Actual Pomos" disabled></div>
        </div>
    </template>
    <template id="view-row-template">
        <div class="row g-0 row-bordered">
            <div class="d-none d-lg-block col-lg-1"><input type="number" value="" disabled></div>
            <div class="col-6 col-lg-5"><input type="text" value="" disabled></div>
            <div class="col-3"><input type="number" value="" disabled></div>
            <div class="col-3"><input type="number" value="" disabled></div>
        </div>
    </template>
    <template id="add-row-template">
        <div class="row g-0">
            <div class="d-none d-lg-block col-lg-1"></div>
            <div class="col-7 col-lg-6"><input type="text" value=""></div>
            <div class="col-3"><input type="number" value="" min="1"></div>
            <div class="col-2">
                <button class="btn btn-success btn-block">Add Task</button>
            </div>
        </div>
    </template>
    <template id="timer-template">
        <div class="timer-container position-relative mh-100 mw-100">
            <svg class="w-100 h-100 position-absolute top-50 start-50 translate-middle" viewBox="0 10 128 128" xmlns="http://www.w3.org/2000/svg">
                <g class="timer-image red-tomato">
                    <path
                        d="m81.1 31.4h-34.2c-25.051 0-45.36 21.4-45.36 47.8 0 26.4 20.309 47.8 45.36 47.8h34.2c25.051 0 45.36-21.4 45.36-47.8-.002-26.4-20.311-47.8-45.36-47.8z" />
                    <path
                        d="m126.456 79.193c0 26.4-20.311 47.807-45.354 47.807h-34.202a44.1 44.1 0 0 1 -32.07-14 46.977 46.977 0 0 1 -3.156-3.685 43.451 43.451 0 0 0 23.294 6.774h34.189c25.057 0 45.367-21.411 45.367-47.806a49.2 49.2 0 0 0 -10.124-30.108 45.773 45.773 0 0 1 8.777 7.225 48.944 48.944 0 0 1 13.279 33.793z" />
                    <path
                        d="m81.1 128h-34.2c-25.561 0-46.358-21.9-46.358-48.8s20.8-48.8 46.36-48.8h34.198c25.563 0 46.36 21.891 46.36 48.8s-20.799 48.8-46.36 48.8zm-34.2-95.6c-24.46 0-44.36 20.994-44.36 46.8s19.902 46.8 44.36 46.8h34.2c24.46 0 44.36-20.994 44.36-46.8s-19.9-46.8-44.36-46.8z" />
                    <path
                        d="m75.032 26.024c4.09-1.082 8.531-.848 12.861-.722s8.826.1 12.695-1.422c-1.247 7.926-8.241 14.866-17.319 17.186 11.27 4.022 19.578 13.6 20.589 23.742a45.848 45.848 0 0 1 -19.3-5.157c-2.905-1.537-5.578-3.381-8.533-4.847a19.7 19.7 0 0 0 -9.678-2.367c-5.966.338-10.623 13.647-31.6 12.739-2.077-14.862 10.368-22.054 9.282-23.558-7.46-10.342-18.015-7.055-21.256-11.634 25.974-13.6 35.632.275 40.255 1.223 4.539.932 7.972-4.116 12.004-5.183z"
                        fill="#6fc682" />
                    <path
                        d="m36.744 66.22c-.665 0-1.345-.015-2.044-.045a1 1 0 0 1 -.947-.861c-1.553-11.085 4.769-18.214 7.807-21.644a19.355 19.355 0 0 0 1.449-1.747c-4.223-5.661-9.488-6.884-13.732-7.87-3.116-.724-5.808-1.349-7.324-3.491a1 1 0 0 1 .353-1.463c21.175-11.084 31.919-4.258 37.694-.593a12.8 12.8 0 0 0 3.229 1.722c2.332.478 4.422-.976 6.635-2.514a16.411 16.411 0 0 1 4.916-2.657c3.929-1.038 8.126-.908 12.186-.784l.961.029c4.181.123 8.573.116 12.3-1.352a1 1 0 0 1 1.355 1.085c-1.184 7.523-7.2 14.144-15.333 17.151 10.292 4.625 17.64 13.791 18.611 23.523a1 1 0 0 1 -.269.786.993.993 0 0 1 -.769.312 46.678 46.678 0 0 1 -19.729-5.272c-1.328-.7-2.619-1.474-3.867-2.221-1.5-.9-3.05-1.824-4.642-2.614a18.649 18.649 0 0 0 -9.184-2.264c-1.661.093-3.406 1.57-5.616 3.439-4.444 3.758-11.051 9.344-24.04 9.345zm-1.112-2.014c12.963.34 19.26-4.968 23.86-8.858 2.5-2.111 4.466-3.778 6.8-3.91a20.58 20.58 0 0 1 10.18 2.47c1.662.825 3.247 1.773 4.78 2.69 1.226.733 2.493 1.491 3.775 2.169a44.56 44.56 0 0 0 17.692 4.976c-1.468-9.35-9.271-17.984-19.78-21.735a1 1 0 0 1 .088-1.91c8.081-2.066 14.391-7.861 16.226-14.712a38.036 38.036 0 0 1 -11.383.915l-.964-.029c-3.917-.12-7.966-.246-11.614.718a14.779 14.779 0 0 0 -4.292 2.366c-2.348 1.631-5.009 3.481-8.179 2.831a13.261 13.261 0 0 1 -3.9-1.993c-5.323-3.381-15.139-9.615-34.493.063 1.216.9 3.073 1.331 5.3 1.848 4.639 1.078 10.412 2.418 15.107 8.928.778 1.077-.185 2.164-1.779 3.964-2.972 3.354-8.433 9.517-7.424 19.209z" />
                    <g fill="#f0f5f9" opacity=".5">
                        <path
                            d="m7.687 86.589a1 1 0 0 1 -.991-.878c-1.896-15.437 2.947-25.418 7.342-31.072a1 1 0 1 1 1.579 1.227c-4.163 5.358-8.747 14.842-6.935 29.6a1 1 0 0 1 -.871 1.114 1.019 1.019 0 0 1 -.124.009z" />
                        <path
                            d="m18.386 52.417a1 1 0 0 1 -.665-1.747 16.506 16.506 0 0 1 1.64-1.313 1 1 0 0 1 1.109 1.664 15.281 15.281 0 0 0 -1.42 1.143 1 1 0 0 1 -.664.253z" />
                    </g>
                    <text class="timer-text" x="50%" y="75%" text-anchor="middle"></text>
                </g>
            </svg>
        </div>
    </template>
    <template id="prompt-template">
        <h2 class="text-white">Did you complete your task?</h2>
        <input type="checkbox">
    </template>
    </div>
  `;
});

test('Simple ViewOnlyTaskList construction', () => {
  // Create new ViewOnlyTaskList
  const taskList = new ViewOnlyTaskList();

  taskList.render();
  expect(true).toBe(true);
});

test('Insert Row to ViewOnlyTaskList', () => {
  // Create new ViewOnlyTaskList
  const taskList = new ViewOnlyTaskList();

  // Insert new row with index, name, expected, and actual
  taskList.insertRow(1, 'first task', 1, 2);
  expect(true).toBe(true);
});

test('Add Pomo From ViewOnlyTaskList', () => {
  // Create new ViewOnlyTaskList
  const taskList = new ViewOnlyTaskList();

  // Create a task and add it to TaskList
  const taskName = 'first task';
  const taskExpectedPomo = 3;
  taskList.data.createTask(taskName, taskExpectedPomo);

  // Add a pomo
  taskList.addPomo();

  // Check to see if an actual pomo was added
  expect(taskList.data.todo[0].name).toBe(taskName);
  expect(taskList.data.todo[0].expected).toBe(taskExpectedPomo);
  expect(taskList.data.todo[0].actual).toBe(1);

  // taskList always tries to initialize from localStorage in proceeding tests
  // so we must reset at the end of tests
  taskList.data.reset();
});

test('Finish Task from ViewOnlyTaskList', () => {
  // Create new ViewOnlyTaskList
  const taskList = new ViewOnlyTaskList();

  // Create a task and add it to TaskList
  const taskName = 'first task';
  const taskExpectedPomo = 3;
  taskList.data.createTask(taskName, taskExpectedPomo);
  taskList.finishTask();

  // completed list should be 1 and the todo list should be empty
  expect(taskList.data.todo.length).toBe(0);
  expect(taskList.data.completed.length).toBe(1);

  // check to see if completed task is the same as the original task we made
  expect(taskList.data.completed[0].name).toBe(taskName);
  expect(taskList.data.completed[0].expected).toBe(taskExpectedPomo);
  expect(taskList.data.completed[0].actual).toBe(0);

  // taskList always tries to initialize from localStorage in proceeding tests
  // so we must reset at the end of tests
  taskList.data.reset();
});

test('Position ViewOnlyTaskList When Visible', () => {
  // Create new ViewOnlyTaskList
  const taskList = new ViewOnlyTaskList();

  // Connected callback just calls position()
  taskList.connectedCallback();

  // Check for correct top value
  expect(taskList.style.top).toBe(`${taskList.appHeader.offsetHeight}px`);
});

test('Position ViewOnlyTaskList When Not Visible', () => {
  // Create new ViewOnlyTaskList
  const taskList = new ViewOnlyTaskList();

  // Change visibility
  taskList.visible = !taskList.visible;

  // Connected callback just calls position()
  taskList.connectedCallback();

  // Check for correct top value
  expect(taskList.style.top).toBe(`${taskList.appContainer.offsetHeight - (taskList.querySelector('.header').getBoundingClientRect().top - taskList.getBoundingClientRect().top)}px`);
});
