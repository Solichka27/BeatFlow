import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import type { Album } from '../types/album';

interface FavoritesStore {
    favorites: Album[];

    addFavorite: (album: Album) => void;

    removeFavorite: (id: number) => void;

    toggleFavorite: (album: Album) => void;

    isFavorite: (id: number) => boolean;

    clearFavorites: () => void;
}

export const useFavoritesStore = create<FavoritesStore>()(
    persist(
        (set, get) => ({
            favorites: [],

            addFavorite: (album) =>
                set((state) => ({
                    favorites: [...state.favorites, album],
                })),

            removeFavorite: (id) =>
                set((state) => ({
                    favorites: state.favorites.filter(
                        (album) => album.id !== id
                    ),
                })),

            toggleFavorite: (album) => {
                const exists = get().favorites.some(
                    (item) => item.id === album.id
                );

                if (exists) {
                    get().removeFavorite(album.id);
                } else {
                    get().addFavorite(album);
                }
            },

            isFavorite: (id) =>
                get().favorites.some(
                    (album) => album.id === id
                ),

            clearFavorites: () =>
                set({
                    favorites: [],
                }),
        }),
        {
            name: 'beatflow-favorites',
        }
    )
);