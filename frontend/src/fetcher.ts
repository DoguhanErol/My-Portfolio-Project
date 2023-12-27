import axios from "axios";
import {IProject, ITables,ITableContents , IImage, IPrice, IEducation, ICertificate} from './types';
import globalVariables from "./globals";

// GET All Projects
export  const fetchProjects = async ()  => {
    console.log('Fetching Projects Data ...');
    const response = await axios.get<IProject[]>(globalVariables.baseUrlApi+'projects/');
    const projects: IProject[] = response.data;
    console.log('Projects: ', projects);
    return projects
};

// GET Project By Id
export  const fetchProject  = async (id: string)  => {
    console.log('Fetching Projects Data ...');
    const response = await axios.get<IProject>(globalVariables.baseUrlApi+'projects/'+id);
    const project: IProject = response.data;
    console.log('Project: ', project);
    return project
};

//GET Tables
export  const fetchTables = async ()  => {
    console.log('Fetching Tables Data ...');
    const response = await axios.get<ITables[]>(globalVariables.baseUrlApi+'tables/');
    const tables: ITables[] = response.data;
    console.log('Tables: ', tables);
    return tables
};

//GET Table Content
export  const fetchTableContent  = async (content_id: string)  => {
    console.log('Fetching Table Content Data ...');
    const response = await axios.get<ITableContents[]>(globalVariables.baseUrlApi + 'tablecontents/' + content_id);
    const tableContent: ITableContents[] = response.data;
    console.log('Table Content: ', tableContent);
    return tableContent;
};

//GET Education
export  const fetchEducations = async ()  => {
    console.log('Fetching Educations Data ...');
    const response = await axios.get<IEducation[]>(globalVariables.baseUrlApi+'educations/');
    const educations: IEducation[] = response.data;
    console.log('Educations: ', educations);
    return educations
};
//GET Certificates
export  const fetchCertificates = async ()  => {
    console.log('Fetching Certificates Data ...');
    const response = await axios.get<ICertificate[]>(globalVariables.baseUrlApi+'certificates/');
    const certificates: ICertificate[] = response.data;
    console.log('Certificates: ', certificates);
    return certificates
};

//GET Images
export  const fetchImages = async ()  => {
    console.log('Fetching Images Data ...');
    const response = await axios.get<IImage[]>(globalVariables.baseUrlApi+'images/');
    const images: IImage[] = response.data;
    console.log('Tables: ', images);
    return images
};

//GET Prices
export  const fetchPrices = async ()  => {
    console.log('Fetching Prices Data ...');
    const response = await axios.get<IPrice[]>(globalVariables.baseUrlApi+'prices/');
    const prices: IPrice[] = response.data;
    console.log('Tables: ', prices);
    return prices
};

//POST Mail

// export  const fetchPostMail = async (mail: IMail) => {
//     console.log('Fetching Images Data ...');
//     const response = await axios.post<IMail>(globalVariables.baseUrlApi+'mail/' + mail);
//     return response.data
// };