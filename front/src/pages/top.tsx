import { HandleScroll } from '../components/handleScroll';
import { FVblur } from '../components/FVblur';

export const Top = () => {
    return (
        <main>
            <FVblur />
            <h1 className="FV__title">sayatto</h1>
            <div className="contents">
                <HandleScroll sectionId="Profile" />
                <HandleScroll sectionId="works" />
                <footer className="footer">
                    <div className="inner"></div>
                </footer>
            </div>
        </main>
    );
}

