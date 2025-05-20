import { toast } from 'react-toastify';

export const successToaster = (msg) => {
    toast.success(msg)
}

export const errorToaster = (msg) => {
    toast.error(msg)
}