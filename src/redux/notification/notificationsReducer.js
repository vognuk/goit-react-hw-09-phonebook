import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
// import authActions from './authActions';
import notificationActions from './notificationsAction';

const initialNotificationState = { massage: '', error: '' };

const notification = createReducer(initialNotificationState, {
    [notificationActions.errorPopup]: (_, { payload }) => payload,
});

export default notification;
