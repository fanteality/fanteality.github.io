import React from 'react';
import ReactDOM from 'react-dom';
import Icon from 'components/Icon';
import './index.scss';
export default class Toast extends React.Component {
  isShow: boolean = false;
  static timer: NodeJS.Timeout | null = null;
  static info(msg: string = 'info', timeout: number = 2000) {
    init();
    setTime(timeout);
    ReactDOM.render(
      <React.Fragment>
        <div className="dark-toast-box">
          <Icon name="warn" />
          {msg}
        </div>
      </React.Fragment>,
      document.getElementById('dark-toast')
    );
  }
}
function init() {
  Toast.timer && clearTimeout(Toast.timer);
  let dark_toast = document.getElementById('dark-toast');
  if (dark_toast) {
    dark_toast.style.display = 'block';
  } else {
    let div = document.createElement('div');
    div.setAttribute('id', 'dark-toast');
    document.body.appendChild(div);
  }
}
function setTime(timeout: number) {
  Toast.timer = setTimeout(() => {
    let dark_toast = document.getElementById('dark-toast');
    if (dark_toast) {
      dark_toast.style.display = 'none';
    }
  }, timeout);
}
