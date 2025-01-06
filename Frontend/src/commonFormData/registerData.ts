import { FaRegUser } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { FaKey } from "react-icons/fa6";

export const registerData = [
    {
        id: '1',
        label: 'Username',
        type: 'text',
        name: 'username',
        placeholder: 'Enter your name',
        icon: FaRegUser
    },
    {
        id: '2',
        label: 'Email',
        type: 'email',
        name: 'email',
        placeholder: 'Enter your email',
        icon: MdOutlineMail
    },
    {
        id: '3',
        label: 'Password',
        type: 'password',
        name: 'password',
        placeholder: 'Create a password',
        icon: FaKey
    },
    {
        id: '4',
        label: 'Confirm Password',
        type: 'password',
        name: 'confirmPassword',
        placeholder: 'Confirm your password',
        icon: FaKey
    }
]