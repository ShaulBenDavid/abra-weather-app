export interface EmptyPageProps {
    src: string;
    title?: string;
    p?: string;
    children?: React.ReactNode;
    className?: string;
}

// export type EmptyPageProps = EmptyFailedTypes | EmptyPageTypes;
// // empty
// export type EmptyPageTypes = {
//     src: string;
//     title: string;
//     p: string;
// }

// // empty faild
// export type EmptyFailedTypes = {
//     src: string;
//     children?: React.ReactNode;
// }