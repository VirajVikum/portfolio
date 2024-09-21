import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
// import { Cover } from "./ui/cover";
const Header = () => {
    return (
        <header className="py-6 xl:py-10 text-white">
            <div className="container mx-auto flex justify-between items-center">
            
                {/* logo */}
                <Link href="/">
                    <h1 className="text-4xl font-semibold">
                     {/* <Cover> */}
                        <span className="text-white">VJ</span> <span className="text-accent">Styles</span><span className="text-white">.</span>
                        {/* </Cover> */}
                        
                    </h1>
                </Link>
                {/* desktop nav and hire me button*/}
                <div className="hidden xl:flex items-center gap-8">
                    <Nav />
                    <Link href="/contact">
                        {/* <Button>Hire me</Button> */}
                        {/* <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-lg border border-accent bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:50%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                            Hire me
                        </button> */}
                        <button className="inline-flex h-10 w-24 items-center justify-center rounded-lg border border-slate-800 bg-green-500 text-white animate-glow">
                            Hire Me
                        </button>

                    </Link>
                </div>

                {/* mobile nav */}
                <div className="xl:hidden">
                    <MobileNav />
                </div>
            </div>
        </header>
    );

};

export default Header;