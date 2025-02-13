import {
    ChevronDown,
    ChevronUp,
    Clapperboard,
    Clock,
    Home,
    Library,
    PlaySquare,
    Repeat,
    History,
    ListVideo,
    Flame,
    ShoppingBag,
    Music2,
    Film,
    Radio,
    Gamepad2,
    Newspaper,
    Trophy,
    Lightbulb,
    Shirt,
    Podcast,
  } from "lucide-react"
import { Children, ElementType, ReactNode, useState } from "react";
import { Button, buttonStyles } from "../components/Button";
import { twMerge } from "tailwind-merge";
import { playlists, subscriptions } from "../data/sidebar";
import { useSidebarContext } from "../contexts/SidebarContext";
import { PageHeaderFirstSection } from "./PageHeader";


export function Sidebar() {

    const { isLargeOpen, isSmallOpen, close } = useSidebarContext()

    return (
        <>
        <aside className={`sticky top-0 overflow-y-auto scrollbar-hidden pb-4 flex flex-col w-16 ml-1 ${isLargeOpen ? "lg:hidden" : "lg:flex" }`}>
            <SmallSidebarItem Icon={Home} title="Home" url="/" />

            <SmallSidebarItem Icon={Repeat} title="Shorts" url="https://jasonjayoo.github.io/jasonyoo-fullstack-portfolio/portfolio" />
            <SmallSidebarItem Icon={Clapperboard} title="Subscriptions" url="https://jasonjayoo.github.io/jasonyoo-fullstack-portfolio/portfolio" />
            <SmallSidebarItem Icon={Library} title="Library" url="https://jasonjayoo.github.io/jasonyoo-fullstack-portfolio/portfolio" />
        </aside>
        {isSmallOpen && (
            <div onClick={close} className="lg:hidden fixed inset-0 z-[999] bg-secondary-dark opacity-50"/>
        )}
        <aside className={`w-56 lg:sticky absolute pb-4 flex-col gap-2 px-2 top-0 overflow-y-auto scrollbar-hidden ${isLargeOpen ? "lg:flex" : "lg:hidden" } ${isSmallOpen ? "flex z-[999] bg-white max-h-screen" : "hidden" }`}>
            
            <div className="lg:hidden pt-2 pb-4 px-2 sticky top-0 bg-white">
            <PageHeaderFirstSection />
            </div>
            <LargeSidebarSection>
                <LargeSidebarItem isActive IconOrImgUrl={Home} title="Home" url="/"/>
    
                <LargeSidebarItem isActive={false} IconOrImgUrl={Clapperboard} title="Subscriptions" url="https://jasonjayoo.github.io/jasonyoo-fullstack-portfolio/portfolio"/>

            </LargeSidebarSection>
            <hr />
        <LargeSidebarSection visibleItemCount={5}>
          <LargeSidebarItem
            IconOrImgUrl={Library}
            title="Library"
            url="https://jasonjayoo.github.io/jasonyoo-fullstack-portfolio/portfolio"
          />
          <LargeSidebarItem
            IconOrImgUrl={History}
            title="History"
            url="https://jasonjayoo.github.io/jasonyoo-fullstack-portfolio/portfolio"
          />
          <LargeSidebarItem
            IconOrImgUrl={PlaySquare}
            title="Your Videos"
            url="https://jasonjayoo.github.io/jasonyoo-fullstack-portfolio/portfolio"
          />
          <LargeSidebarItem
            IconOrImgUrl={Clock}
            title="Watch Later"
            url="https://jasonjayoo.github.io/jasonyoo-fullstack-portfolio/portfolio"
          />
          {playlists.map(playlist => (
            <LargeSidebarItem
              key={playlist.id}
              IconOrImgUrl={ListVideo}
              title={playlist.name}
              url={`https://jasonjayoo.github.io/jasonyoo-fullstack-portfolio/portfolio?list=${playlist.id}`}
            />
          ))}
        </LargeSidebarSection>
        <hr />
        <LargeSidebarSection title="Subscriptions">
          {subscriptions.map(subscription => (
            <LargeSidebarItem
              isActive={false} 
              key={subscription.id}
              IconOrImgUrl={subscription.imgUrl}
              title={subscription.channelName}
              url={`https://jasonjayoo.github.io/jasonyoo-fullstack-portfolio/portfolio@${subscription.id}`}
            />
          ))}
        </LargeSidebarSection>
        <hr />
        <LargeSidebarSection title="Explore">
          <LargeSidebarItem
            isActive={false} 
            IconOrImgUrl={Flame}
            title="Trending"
            url="https://jasonjayoo.github.io/jasonyoo-fullstack-portfolio/about"
          />
          <LargeSidebarItem
            isActive={false} 
            IconOrImgUrl={ShoppingBag}
            title="Shopping"
            url="https://jasonjayoo.github.io/jasonyoo-fullstack-portfolio/about"
          />
          <LargeSidebarItem isActive={false}  IconOrImgUrl={Music2} title="Music" url="https://jasonjayoo.github.io/jasonyoo-fullstack-portfolio/portfolio" />
          <LargeSidebarItem
            isActive={false} 
            IconOrImgUrl={Film}
            title="Movies & TV"
            url="https://jasonjayoo.github.io/jasonyoo-fullstack-portfolio/about"
          />
          <LargeSidebarItem isActive={false}  IconOrImgUrl={Radio} title="Live" url="https://jasonjayoo.github.io/jasonyoo-fullstack-portfolio/portfolio" />
          <LargeSidebarItem
            isActive={false} 
            IconOrImgUrl={Gamepad2}
            title="Gaming"
            url="https://jasonjayoo.github.io/jasonyoo-fullstack-portfolio/about"
          />
          <LargeSidebarItem isActive={false} IconOrImgUrl={Newspaper} title="News" url="https://jasonjayoo.github.io/jasonyoo-fullstack-portfolio/portfolio" />
          <LargeSidebarItem
            isActive={false} 
            IconOrImgUrl={Trophy}
            title="Sports"
            url="https://jasonjayoo.github.io/jasonyoo-fullstack-portfolio/about"
          />
          <LargeSidebarItem
            isActive={false} 
            IconOrImgUrl={Lightbulb}
            title="Learning"
            url="https://jasonjayoo.github.io/jasonyoo-fullstack-portfolio/about"
          />
          <LargeSidebarItem
            isActive={false} 
            IconOrImgUrl={Shirt}
            title="Fashion & Beauty"
            url="https://jasonjayoo.github.io/jasonyoo-fullstack-portfolio/about"
          />
          <LargeSidebarItem
            isActive={false} 
            IconOrImgUrl={Podcast}
            title="Podcasts"
            url="https://jasonjayoo.github.io/jasonyoo-fullstack-portfolio/about"
          />
        </LargeSidebarSection>
        </aside>
        </>
    )
}

type SmallSidebarItemProps = {
    Icon: ElementType
    title: string
    url: string
}

function SmallSidebarItem({ Icon, title, url }:
    SmallSidebarItemProps) {
        return <a href={url} className={twMerge(buttonStyles({ variant: "ghost" }), "py-4 px-1 flex flex-col items-center rounded-lg gap-1")}>
            <Icon className="w-6 h-6" />
            <div className="text-[10px]">{title}</div>
        </a>
    } 

type LargeSidebarSectionProps = {
    children: ReactNode
    title?: string
    visibleItemCount?: number
}
    
function LargeSidebarSection({ 
    children, 
    title, 
    visibleItemCount= Number.POSITIVE_INFINITY, 
}: LargeSidebarSectionProps ) {
    const [isExpanded, setIsExpanded] = useState(false)
    const childrenArray = Children.toArray(children).flat()
    const visibleChildren = isExpanded ? childrenArray : childrenArray.slice(0, visibleItemCount)
    const showExpandButton = childrenArray.length > visibleItemCount
    const ButtonIcon = isExpanded ? ChevronUp : ChevronDown

    return <div>
        {title && <div className="ml-4 mt-2 text-lg mb-1">{title}</div>}
        {visibleChildren}
        {showExpandButton && 
        <Button
        onClick={() => setIsExpanded(e => !e)}
         variant="ghost" className="w-full flex items-center rounded-lg gap-4 p-3">
            <ButtonIcon className="w-6 h-6" />
            <div> {isExpanded ? "Show Less" : "Show More"} </div>
        </Button>

        }
        </div>
    
}

type LargeSidebarItemProps = {
    IconOrImgUrl: ElementType | string
    title: string
    url: string
    isActive?: boolean
}

function LargeSidebarItem({ IconOrImgUrl, title, url, isActive = false }:
    LargeSidebarItemProps) {
    return <a href={url} className={twMerge(buttonStyles( {variant: "ghost"}), `w-full flex items-center rounded-lg gap-4 p-3 ${isActive ? "font-bold bg-neutral-100 hover:bg-secondary" : undefined}`)}>
        
        {typeof IconOrImgUrl === "string" ? (
            <img src={IconOrImgUrl} className="w-6 h-6 rounded-full" />
        ): (
            <IconOrImgUrl className="w-6 h-6" />
        )}
        

        <div className="whitespace-nowrap overflow-hidden text-ellipsis">
            {title}
        </div>
    </a>
}