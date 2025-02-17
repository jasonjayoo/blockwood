
import { useState, useEffect } from "react"
import { ArrowLeft, Bell, Menu, Mic, Moon, Search, Sun, User } from "lucide-react"
import logo from "../assets/blockwood-transparent2.png"
import { Button } from "../components/Button"
import { useSidebarContext } from "../contexts/SidebarContext"
import { useTheme } from "../contexts/ThemeContext";

export function PageHeader() {
    const [showFullWidthMobile, setShowFullWidthMobile] = useState(false);
    const { theme, toggleTheme } = useTheme();

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setShowFullWidthMobile(false)
            }
        }
        window.addEventListener("resize", handleResize)
        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])

    return <div className="flex gap-10 lg:gap-20 justify-between pt-2 mb-6 mx-[6px] md:mx-4">
    <PageHeaderFirstSection hidden={showFullWidthMobile} />
        <form className={`gap-4 flex-grow justify-center ${showFullWidthMobile ? "flex" : "hidden md:flex"}`}>
            {showFullWidthMobile && (
                <Button onClick={() => setShowFullWidthMobile(false)} type="button" size="icon" variant="ghost" className="flex-shrink-0">
                    <ArrowLeft />
                </Button> 
            )}  
            <div className="flex flex-grow  max-w-[600px]">
                <input type="search" placeholder="Search" className="rounded-l-full border border-secondary-border shadow-inner shadow-secondary py-1 px-4 text-lg w-full focus:border-blue-500 outline-none" />
                    <Button className="py-2 px-4 rounded-r-full border-secondary-border border border-l-0 flex-shrink-0">
                        <Search />
                    </Button>
            </div>
            <Button type="button" size="icon" className="flex-shrink-0">
                <Mic />
            </Button>
        </form>
        <div className={`flex-shrink-0 md:gap-2 ${showFullWidthMobile ? "hidden" : "flex"}`}>
            <Button onClick={() => setShowFullWidthMobile(true)} size="icon" variant="ghost" className="md:hidden">
                <Search />
            </Button>
            <Button size="icon" variant="ghost" className="md:hidden">
                <Mic />
            </Button>
            {/* <Button size="icon" variant="ghost">
                <Upload />
            </Button> */}
            <Button size="icon" variant="ghost">
                <Bell />
            </Button>
            <Button size="icon" variant="ghost">
                <User />
            </Button>
            <Button onClick={toggleTheme} size="icon" variant="ghost">
                    {theme === "light" ? <Moon /> : <Sun className="text-yellow-400" />}
            </Button>
        </div>
    </div>
}

type PageHeaderFirstSectionProps = {
    hidden?: boolean
}   

export function PageHeaderFirstSection({ hidden = false }: PageHeaderFirstSectionProps) {

    const { toggle } = useSidebarContext()
    
    return <div 
            className={`gap-4 items-center flex-shrink-0 ${hidden ? "hidden" : "flex"}`}>
            <Button onClick={toggle} variant="ghost" size="icon" >
                <Menu />
            </Button>
            <a href="/">
                <img src={logo} className="h-6 dark:invert" />
            </a>
        </div>
}