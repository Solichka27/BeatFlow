import { api } from './client';
import type { AlbumsResponse } from '../types/album';

export async function getTrendingAlbums() {
    const {data} = await api.get<AlbumsResponse>(
        '/chart/0/albums'
    );

    return data.data;
}