export interface ICertificate{
	certificate_id:number;
	certificate_school_name:string;
	certificate_date?: string | null;
	certificate_title:string;
}

export interface IEducation{
	education_id:number;
	education_school_name:string;
	education_date?: string | null;
	education_title:string;
}

export interface IImage{
    image_id:number;
    image_path:string;
}
export interface ImagesResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: IImage[];
}
export interface IProjectImage{
  id: number;
  image: string;
  created_at: string;
  project: number;
}


export interface IProject{
    project_id:number;
    project_name: string;
    project_type: string;
    project_budget?:  string | null;
    project_delivery_date?:  string | null;
    project_frontend_tecnologies?:  string | null;
    project_backend_tecnologies?:  string | null;
    project_live_url?:  string | null;
    project_github_url?:  string | null;
    project_details?:  string | null;
    project_image_path: string;
    images:IProjectImage[];
}
export interface IProjectShort{
  project_id:number;
  project_name: string;
  project_type: string;
  project_details?:  string | null;
  project_image_path: string | null;
}

export interface IProjectDetail{
  project:IProject;
  images:IProjectImage[];
}
export interface ITableContents{
    content_id:number;
    table_id:string;
    content_left_text:string;
    content_right_text?: string | null;
  }

export interface ITables{
    table_id:string;
    table_title:string;
  }

export interface IPrice{
  price_id:number;
  price_title:String;
  price_type:String;
  price_price:number;
  price_sub_content_1?: string | null;
  price_sub_content_2?: string | null;
  price_sub_content_3?: string | null;
  price_sub_content_4?: string | null;
  price_sub_content_5?: string | null;
}

export interface ITechStackCategory {
  tech_stack_category_id: number;
  tech_stack_category_title: string;
}

export interface ITechStack {
  tech_stack_category: ITechStackCategory; 
  tech_stack_id: number;
  tech_stack_title: string;
  tech_stack_info?: string | null; 
  tech_stack_image_path: string;
}
export interface ICvInformation{
  cv_info_id:number;
  cv_info_title:string;
  cv_info_lang:string;
  cv_info_path:string;
}

