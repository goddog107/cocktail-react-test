import React from 'react';
import { notify } from 'react-notify-toast';
import $ from 'jquery';


export default class Common extends React.Component {

  static notify(type, msg) {
    if (type === 'success') {
      notify.show(msg, 'success');
    } else if (type === 'error') {
      notify.show(msg, 'error');
    } else if (type === 'warning') {
      notify.show(msg, 'warning');
    }
  }

  static handleError(error) {
    $('.loading').hide();

    if (Common.isNone(error.status) || (error.status >= 200 && error.status < 400)) {
      return false;
    }

    console.error(error);
    if (error.status === 401) {
      Common.notify('error', 'Invalid token!');
      return;
    }
    if (error.status === 0) {
      Common.notify('error', 'Server connection error!');
      if (Common.loggedIn()) {
        Common.logout();
      }
      return;
    }
    let msg = '';
    if (error.responseJson !== undefined) {
      msg = error.responseJson.message;
    } else if (error.errorMessage !== undefined) {
      msg = error.errorMessage;
    } else if (error.responseJSON !== undefined) {
      if (error.responseJSON.message !== undefined) {
        if (error.responseJSON.message.message !== undefined) {
          msg = error.responseJSON.message.message;
        } else {
          msg = error.responseJSON.message;
        }
      } else if (error.responseJSON.error) {
        msg = error.responseJSON.error;
      } else {
        msg = 'Some errors happended!';
      }
    } else {
      msg = 'Some errors happended!';
    }
    if (Common.isNone(msg)) {
      msg = 'Some errors happended!';
    }

    Common.notify('error', msg);

    return true;
  }

  static handleSuccess(data, instance, first, second) {
    $('.loading').hide();

    let success = !Common.handleError(data);
    if (success) {
      let state = instance.state;
      if (first !== null) state[first] = data;
      if (first !== null) state[second] = data;
      instance.setState(state);
    }
  }

  static isNone(value) {
    return value === '' || value === undefined || value === 'undefined' || value === null || value === 'null';
  }
}