import { SIDEBAR_AUTO_DISPLAY, SIDEBAR_AUTO_NONE } from './constant'

export const sidebar_auto_diplay = data => ({ type: SIDEBAR_AUTO_DISPLAY, data: data })
export const sidebar_auto_none = data => ({ type: SIDEBAR_AUTO_NONE, data: data })