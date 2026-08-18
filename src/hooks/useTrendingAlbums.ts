import { useQuery } from '@tanstack/react-query';

import { getTrendingAlbums } from '../api/albums';

export function useTrendingAlbums() {
    return useQuery({
        queryKey: ['trending-albums'],

        queryFn: getTrendingAlbums,
    });
}