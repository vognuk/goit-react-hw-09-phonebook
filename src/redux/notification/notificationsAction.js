import { createAction } from '@reduxjs/toolkit';

const errorPopup = createAction('error/showNotification');

export default {
    errorPopup,
}
