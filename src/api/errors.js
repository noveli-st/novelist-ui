export const err = (status, data=null) => ({code: status.code, message: status.text, data: data})
