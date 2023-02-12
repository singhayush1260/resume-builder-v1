import * as Yup from 'yup';

export const educationSchema=Yup.object({
    School:Yup.string().min(10).max(50).required('Please enter school'),
    SchoolSY:Yup.string().required('Cannot be empty'),
    SchoolEY:Yup.string().required('Cannot be empty'),
    College:Yup.string().min(10).max(20).required('Please enter College'),
    CollegeSY:Yup.string().required('Cannot be empty'),
    CollegeEY:Yup.string().required('Cannot be empty'),
    CollegeD:Yup.string().min(20).max(30).required('Cannot be empty')
});


