import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { useDebounce } from '../../hooks/useDebounce';
import { useSearchAlbums } from '../../hooks/useSearchAlbums';

import MusicCard from '../../components/ui/card/MusicCard';
import ErrorState from '../../components/ui/error-state/ErrorState';
import EmptyState from '../../components/ui/empty-state/EmptyState';
import SkeletonGrid from '../../components/ui/skeleton/SkeletonGrid';

import styles from './Search.module.scss';

function Search() {

    const [searchParams, setSearchParams] = useSearchParams();

    const [inputValue, setInputValue] = useState(
        searchParams.get('q') ?? ''
    );

    const debouncedQuery = useDebounce(inputValue, 400);

    const {
        data: albums,
        isLoading,
        error,
    } = useSearchAlbums(debouncedQuery);

    useEffect(() => {
        const value = debouncedQuery.trim();

        if (value) {
            setSearchParams({ q: value });
        } else {
            setSearchParams({});
        }
    }, [debouncedQuery, setSearchParams]);

    return (
        <section className={styles.page}>

            <div className={styles.searchContainer}>

                <input
                    value={inputValue}
                    onChange={(event) =>
                        setInputValue(event.target.value)
                    }
                    placeholder="Search songs..."
                />

            </div>

            {isLoading && <SkeletonGrid />}

            {error && <ErrorState />}

            {!isLoading &&
                !error &&
                inputValue &&
                !albums?.length && (
                    <EmptyState
                        title="Nothing found"
                        description={`We couldn't find anything for "${inputValue}".`}
                    />
                )}

            {albums && albums.length > 0 && (
                <div className={styles.grid}>
                    {albums.map((album) => (
                        <MusicCard
                            key={album.id}
                            album={album}
                        />
                    ))}
                </div>
            )}

        </section>
    );
}

export default Search;