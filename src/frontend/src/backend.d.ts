import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Stats {
    totalStudents: bigint;
    certifications: bigint;
    activeCourses: bigint;
    trainers: bigint;
}
export interface Course {
    id: string;
    status: string;
    duration: string;
    name: string;
    level: string;
    enrollment: bigint;
    category: string;
}
export interface backendInterface {
    getCourses(): Promise<Array<Course>>;
    getStats(): Promise<Stats>;
    login(email: string, password: string): Promise<{
        __kind__: "ok";
        ok: {
            user: {
                role: string;
                email: string;
            };
            sessionToken: string;
        };
    } | {
        __kind__: "err";
        err: string;
    }>;
    logout(token: string): Promise<void>;
    verifySession(token: string): Promise<{
        __kind__: "ok";
        ok: {
            role: string;
            email: string;
        };
    } | {
        __kind__: "err";
        err: string;
    }>;
}
