export default function Footer() {
    return (
        <footer className="py-12 border-t border-slate-800 bg-slate-900/50">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-3 gap-8 mb-8 text-center md:text-left">
                    <div>
                        <div className="text-2xl font-black text-emerald-400 tracking-tighter mb-4">
                            <span className="text-slate-100">CS</span>CLUB.
                        </div>
                        <p className="text-slate-400 max-w-xs mx-auto md:mx-0">
                            Empowering students through technology, collaboration, and continuous learning.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-slate-100 mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-slate-400">
                            <li><a href="#about" className="hover:text-emerald-400 transition-colors">About Us</a></li>
                            <li><a href="#events" className="hover:text-emerald-400 transition-colors">Events</a></li>
                            <li><a href="#projects" className="hover:text-emerald-400 transition-colors">Projects</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-slate-100 mb-4">Connect</h3>
                        <ul className="space-y-2 text-slate-400">
                            <li><a href="#" className="hover:text-emerald-400 transition-colors">Discord</a></li>
                            <li><a href="#" className="hover:text-emerald-400 transition-colors">GitHub</a></li>
                            <li><a href="#" className="hover:text-emerald-400 transition-colors">Instagram</a></li>
                        </ul>
                    </div>
                </div>
                <div className="text-center text-slate-600 pt-8 border-t border-slate-800/50">
                    <p>&copy; {new Date().getFullYear()} Computer Science Club. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}
