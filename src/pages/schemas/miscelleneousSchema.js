import * as Yup from 'yup';

export const miscelleneousSchema=Yup.object({
    Skills:Yup.string().min(10).max(50).required('Enter atleast 5 skills'),
    Hobbies:Yup.string().min(10).max(50).required('Enter atleast 2 hobbies'),
    Languages:Yup.string().min(5).max(20).required('Enter atleast 1 language'),
});
