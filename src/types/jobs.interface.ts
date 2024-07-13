export interface JobsInterface {
    projectTitle: string
    projectDescription: string
    projectLocation: string
    isProjectRemote: boolean
    salaryRange?: number | null,
    isPayment: boolean,
    skills: string[]   
}
