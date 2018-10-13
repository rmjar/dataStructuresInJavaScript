'use strict';

function createContainerWithTitle(props) { // { className: '', children: [] }
  const control = document.createElement('div');
  control.className = props.className;
  const title = document.createElement(props.titleSelector);
  title.innerText = props.title;
  control.appendChild(title);
  return {
    render(host) {
      host.appendChild(control);
      props.children.forEach(x => {
        x.render(control);
      });
    }
  }
}

function createInput(props) {
  const inputField = document.createElement('input');
  inputField.className = props.className;
  return {
    render: function (host) {
      host.appendChild(inputField);
    }
  }
}

function createSelect(props) {
  const selectField = document.createElement('select');
  selectField.className = props.className;
  props.options.forEach(x => {
    const option = document.createElement('option');
    option.text = x;
    selectField.options.add(option);
  });
  return {
    render: function (host) {
      host.appendChild(selectField);
    }
  }
}

function createCheckbox(props) {

  return {
    render: function (host) {
    }
  }
}

function createLabel(props) {

  return {
    render: function (host) {
    }
  }
}

function createButton(props) {
  const button = document.createElement('span');
  button.innerText = props.title;
  button.className = props.className;
  button.addEventListener('click', props.onclick);
  return {
    render: function (host) {
      host.appendChild(button);
    }
  }
}