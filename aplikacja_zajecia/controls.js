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

function createInput() {

  return {
    render: function (host) {
    }
  }
}

function createSelect(props) {

  return {
    render: function (host) {
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