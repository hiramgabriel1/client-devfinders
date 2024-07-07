export interface User {
    id?: number;
    username: string;
    avatar_url: string;
    profesion: string;
    email: string;
    skills: string[];
    descriptionLong: string;
    about: string;
    social: string[];
    workExperience: string;
    ownerProjectId: string;
    companyName: string;
    employmentType: string;
    titleWork: string;
    isCurrent: boolean;
    isAdminUser?: boolean;
    isUserPremium?: boolean;
    date?: Date;
    description: string;
    titleProject: string;
    descriptionProject: string;
    workSkills: string[];
    role: string;
    createdAt?: Date;
    password: string;
}