import { Navbar, Hero, About, Stats, PracticeArea, Testimonials, RecentProjects, Attorneys, Article, Footer } from './components/list'

export default function App() {
    return (
        <div className="w-full overflow-hidden mx-auto">
            <Navbar />
            <Hero />
            <About />
            <Stats />
            <PracticeArea />
            <Testimonials />
            <RecentProjects />
            <Attorneys />
            <Article />
            <Footer />
        </div>
    )
}
