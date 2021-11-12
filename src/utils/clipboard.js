import { ElMessage } from 'element-plus';
import Clipboard from 'clipboard'

function clipboardSuccess() {
 ElMessage({
   type:'success',
   message:'copy success!'
 })
}

function clipboardError() {
  ElMessage({
    type:'error',
    message:'copy error!'
  })
}

export default function handleClipboard(text, event) {
  const clipboard = new Clipboard(event.target, {
    text: () => text
  })
  clipboard.on('success', () => {
    clipboardSuccess()
    clipboard.destroy()
  })
  clipboard.on('error', () => {
    clipboardError()
    clipboard.destroy()
  })
  clipboard.onClick(event)
}
