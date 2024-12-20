export interface WrapperConfig {
    remoteName: string;
    exposedModule: string;
    tagname: string;
    inputs?:Record<string, any>
}