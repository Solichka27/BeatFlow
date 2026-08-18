import type { Album } from '../types/album';

export const albums: Album[] = [
    {
        id: 1,
        title: 'After Hours',
        cover: 'https://picsum.photos/300?random=1',
        cover_medium: 'https://picsum.photos/300?random=1',
        cover_big: 'https://picsum.photos/600?random=1',

        artist: {
            id: 1,
            name: 'The Weeknd',
        },
    },

    {
        id: 2,
        title: 'Random Access Memories',
        cover: 'https://picsum.photos/300?random=2',
        cover_medium: 'https://picsum.photos/300?random=2',
        cover_big: 'https://picsum.photos/600?random=2',

        artist: {
            id: 2,
            name: 'Daft Punk',
        },
    },

    // інші альбоми за аналогією...
];