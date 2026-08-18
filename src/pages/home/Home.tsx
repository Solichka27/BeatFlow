import HeroBanner from "./components/heroBanner/HeroBanner";
import AlbumSection from "./components/albumSection/AlbumSection";

function Home() {
    return (
        <main>
            <h1>Welcome to BeatFlow 🎵</h1>
            <HeroBanner />
            <AlbumSection />
        </main>
    );
}

export default Home;