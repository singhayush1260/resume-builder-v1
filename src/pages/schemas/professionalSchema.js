import * as Yup from 'yup';

export const professionalSchema=Yup.object({
    Org1:Yup.string().min(2).max(20).required('Cannot be empty'),
    Org1SY:Yup.string().required('Cannot be empty'),
    Org1EY:Yup.string().required('Cannot be empty'),
    Org1D:Yup.string().min(80).max(150).required('Cannot be empty'),
    Org2:Yup.string().min(2).max(20).required('Cannot be empty'),
    Org2SY:Yup.string().required('Cannot be empty'),
    Org2EY:Yup.string().required('Cannot be empty'),
    Org2D:Yup.string().min(80).max(150).required('Cannot be empty')
});
