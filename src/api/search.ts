import { api } from './client';
import type { Album } from '../types/album';

interface SearchResponse {
    data: Album[];
    total: number;
}

export async function searchAlbums(query: string) {
    const { data } = await api.get<SearchResponse>(
        '/search/album',
        {
            params: {
                q: query,
            },
        }
    );

    return data.data;
}