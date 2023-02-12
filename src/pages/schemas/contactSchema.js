import * as Yup from 'yup';

const phoneRegExp = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;

export const contactSchema=Yup.object({
    Name:Yup.string().max(20).required('Please enter your name'),
    Phone:Yup.string().matches(phoneRegExp, 'Please enter a valid number').required('Please enter phone number'),
    Email:Yup.string().email().required('Please enter email'),
    Pincode:Yup.string().min(6).max(6).required('Please enter pincode'),
    City:Yup.string().min(3).max(20).required('Please enter city'),
    State:Yup.string().min(5).max(20).required('Please enter state'),
    Address:Yup.string().min(20).max(30).required('Please enter address'),
    Linkedin:Yup.string().min(4).max(10).required('Please enter Linkedin username'),
    Twitter:Yup.string().min(4).max(10).required('Please enter Twitter username'),
    Github:Yup.string().min(4).max(10).required('Please enter Github username'),

});


