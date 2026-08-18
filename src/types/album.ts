export interface Album {
    id: number;
    title: string;
    cover: string;
    cover_medium: string;
    cover_big: string;

    artist: {
        id: number;
        name: string;
    };
}

export interface AlbumsResponse {
    data: Album[];
}