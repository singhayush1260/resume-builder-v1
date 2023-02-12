import * as Yup from 'yup';

export const projectsSchema=Yup.object({
    Project1:Yup.string().min(10).max(50).required('Please enter project idea'),
    Project1Link:Yup.string().min(10).max(15),
    Project1D:Yup.string().min(50).max(100).required('Cannot be empty'),
    Project2:Yup.string().min(10).max(50).required('Please enter project idea'),
    Project2Link:Yup.string().min(10).max(15),
    Project2D:Yup.string().min(50).max(100).required('Cannot be empty'),
});


