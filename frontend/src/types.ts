export interface ICertificate{
	certificate_id:number;
	certificate_school_name:string;
	certificate_date?:string;
	certificate_title:string;
}

export interface IEducation{
	education_id:number;
	education_school_name:string;
	education_date?:string;
	education_title:string;
}

export interface IImage{
    image_id:number;
    image_path:string;
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
    project_budget?: string;
    project_delivery_date?: string;
    project_frontend_tecnologies?: string;
    project_backend_tecnologies?: string;
    project_live_url?: string;
    project_github_url?: string;
    project_details?: string;
    project_image_path: string;
}

export interface ITableContents{
    content_id:number;
    table_id:string;
    content_left_text:string;
    content_right_text?:string;
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
  price_sub_content_1?:String;
  price_sub_content_2?:String;
  price_sub_content_3?:String;
  price_sub_content_4?:String;
  price_sub_content_5?:String;
}