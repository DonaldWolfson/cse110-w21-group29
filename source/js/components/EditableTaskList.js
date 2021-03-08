/**
 * @file Creates and displays an editable task list.
 * @author Andy Young
 * @author Arman Mansourian
 * Date: 03/07/2021
 */

import EditableTaskListBody from './EditableTaskListBody.js';
import EditableTaskListInput from './EditableTaskListInput.js';

/**
 * Constructs the HTML of the EditableTaskListBody and EditableTaskListInput.
 * @extends HTMLElement
 */
class EditableTaskList extends HTMLElement {
  /**
   * Create and append custom elements.
   */
  constructor() {
    super();

    this.appendChild(document.querySelector('#edit-title-template').content.cloneNode(true));

    const taskListContainer = document.createElement('div');
    taskListContainer.classList.add('task-list-container');
    this.appendChild(taskListContainer);

    taskListContainer.appendChild(document.querySelector('#edit-header-row-template').content.cloneNode(true));

    taskListContainer.appendChild(new EditableTaskListBody());
    taskListContainer.appendChild(new EditableTaskListInput());
  }
}

customElements.define('editable-task-list', EditableTaskList);

export default EditableTaskList;