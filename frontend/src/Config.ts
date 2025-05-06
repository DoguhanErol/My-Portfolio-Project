type Globals = {
    websiteUrl: string;
    baseUrl: string;
    baseUrlApi: string;
    baseUrlMediaImages: string;
    baseUrlMediaProjects: string;
    baseUrlMediaCv: string;
    whatsAppApiUrl: string;
    adminLoginUrl: string;
    linkedingUrl: string;
    githubUrl: string;
    instagramIUrl: string;
    discordUrl: string;
    mailAddress: string;
    cvUrl: string;
};

const globalVariables: Globals = {
    websiteUrl: import.meta.env.VITE_WEBSITE_URL || '',
    baseUrl: import.meta.env.VITE_BASE_URL || '',
    baseUrlApi: import.meta.env.VITE_BASE_URL_API || '',
    baseUrlMediaImages: import.meta.env.VITE_BASE_URL_MEDIA_IMAGES || '',
    baseUrlMediaProjects: import.meta.env.VITE_BASE_URL_MEDIA_PROJECTS || '',
    baseUrlMediaCv: import.meta.env.VITE_BASE_URL_MEDIA_CV || '',
    whatsAppApiUrl: import.meta.env.VITE_WHATSAPP_API_URL || '',
    adminLoginUrl: import.meta.env.VITE_ADMIN_LOGIN_URL || '',
    linkedingUrl: import.meta.env.VITE_LINKEDIN_URL || '',
    githubUrl: import.meta.env.VITE_GITHUB_URL || '',
    instagramIUrl: import.meta.env.VITE_INSTAGRAM_URL || '',
    discordUrl: import.meta.env.VITE_DISCORD_URL || '',
    mailAddress: import.meta.env.VITE_MAIL_ADDRESS || '',
    cvUrl: import.meta.env.VITE_CV_URL || '',
};

export default globalVariables;