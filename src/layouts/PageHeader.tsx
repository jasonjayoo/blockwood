import { Menu } from "lucide-react"
import logo from "../assets/blockwood.png"

export function PageHeader() {
    return <div className="flex gap-10 lg:gap-20 justify-between">
        <div className="flex gap-4 items-center flex-shrink-0">
            <button>
                <Menu />
            </button>
            <a href="/">
                <img src={logo} className="h-14 w-40"  />
            </a>
        </div>
        <div></div>
        <div></div>
    </div>
}