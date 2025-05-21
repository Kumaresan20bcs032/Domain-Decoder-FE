import { toast } from 'react-toastify';

/**
 * This will show the success toaster
 * @param {*} msg 
 */
export const successToaster = (msg) => {
    toast.success(msg)
}

/**
 * This will show the error toaster
 * @param {*} msg 
 */
export const errorToaster = (msg) => {
    toast.error(msg)
}