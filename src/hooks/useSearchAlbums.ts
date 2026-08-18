import { useQuery } from '@tanstack/react-query';
import { searchAlbums } from '../api/search';

export function useSearchAlbums(query: string) {

    return useQuery({
        queryKey: ['search-albums', query],
        queryFn: () => searchAlbums(query),
        enabled: query.trim().length > 0,
    });

}