/* eslint-disable */
import { ElMessage} from "element-plus";

const msg = (fun, messages) => {
  if (fun === 'messages') {
    message(messages)
  } else if (fun === 'success') {
    success(messages)
  } else if (fun === 'warning') {
    warning(messages)
  } else if (fun === 'error') {
    error(messages)
  }
}
const message = (message) => {
  ElMessage({
    showClose: true,
    message: message,
    type: 'message',
  })
}

const success = (message) => {
  ElMessage({
    showClose: true,
    message: message,
    type: 'success',
  })
}
const warning = (message) => {
  ElMessage({
    showClose: true,
    message: message,
    type: 'warning',
  })
}
const error = (message) => {
  ElMessage({
    showClose: true,
    message: message,
    type: 'error',
  })
}

export { msg }
