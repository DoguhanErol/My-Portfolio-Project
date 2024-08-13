import axios from "axios";
import {ImagesResponse ,IProject, ITables,ITableContents , IPrice, IEducation, ICertificate, IProjectImage, ITechStackCategory, ITechStack, IProjectDetail, ICvInformation} from './Types';
import globalVariables from "./Config";

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
    const response = await axios.get<IProjectDetail>(globalVariables.baseUrlApi+'projects/'+id);
    const project: IProjectDetail = response.data;
    console.log('Project: ', project);
    return project
};

// GET Project Images By Project Id
export  const fetchProjectImages  = async (id: string)  => {
    console.log('Fetching Projects Data ...');
    const response = await axios.get<IProjectImage[]>(globalVariables.baseUrlApi+'projects/'+id+'/images/');
    const projectImages: IProjectImage[] = response.data;
    console.log('Project Images: ', projectImages);
    return projectImages
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
export  const fetchImages = async (page: string)  => {
    console.log('Fetching Images Data ...');
    const response = await axios.get<ImagesResponse>(globalVariables.baseUrlApi+'images/?page='+page);
    const images: ImagesResponse = response.data;
    console.log('Images: ', images);
    return images
};

//GET Prices
export  const fetchPrices = async ()  => {
    console.log('Fetching Prices Data ...');
    const response = await axios.get<IPrice[]>(globalVariables.baseUrlApi+'prices/');
    const prices: IPrice[] = response.data;
    console.log('Prices: ', prices);
    return prices
};

//GET Tech Stack Categories
export  const fetchTechStackCategories = async ()  => {
    console.log('Fetching Tech Stack Categories ...');
    const response = await axios.get<ITechStackCategory[]>(globalVariables.baseUrlApi+'techstackcategories/');
    const techStackCategories: ITechStackCategory[] = response.data;
    console.log('Tech Stack Categories: ', techStackCategories);
    return techStackCategories
};

//GET Tech Stacks By Id
export  const fetchTechStacksByCategoryId  = async (id: number)  => {
    console.log('Fetching Tech Stacks By Category Id ...');
    const response = await axios.get<ITechStack[]>(globalVariables.baseUrlApi+'techstacks/'+id);
    const techStacks: ITechStack[] = response.data;
    console.log('Tech Stacks :', techStacks);
    return techStacks
};
//GET Cv Infortmation By Language
export const fetchCvInformationByLang = async (lang:string) => {
    console.log('Fetching Cv Information By Language ...');
    const response = await axios.get<ICvInformation[]>(globalVariables.baseUrlApi +'cvinfo/' + lang);
    const cvInformation: ICvInformation[] = response.data;
    console.log('Cv Informations : ', cvInformation);
    return cvInformation;
}
//POST Mail

// export  const fetchPostMail = async (mail: IMail) => {
//     console.log('Fetching Images Data ...');
//     const response = await axios.post<IMail>(globalVariables.baseUrlApi+'mail/' + mail);
//     return response.data
// };