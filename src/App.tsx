
import { useState } from "react"
import { CategoryPills } from "./components/CategoryPills"
import { categories, videos } from "./data/home"
import { PageHeader } from "./layouts/PageHeader"
import { VideoGridItem } from "./components/VideoGridItem"
import { Sidebar } from "./layouts/Sidebar"
import { SidebarProvider } from "./contexts/SidebarContext"

export default function App() {

  const [selectedCategory, setSelectedCategory] = useState(categories[0])
  return (
    <SidebarProvider>
      <div className="max-h-screen flex flex-col">
        <PageHeader />
        <div className="grid grid-cols-[auto,1fr] flex-grow-1 overflow-auto">
          <Sidebar />
          <div className="overflow-x-hidden px-4 pb-4">
            <div className="sticky top-0 bg-white z-10 pb-4">
              <CategoryPills categories={categories} selectedCategory={selectedCategory} onSelect={setSelectedCategory} />
            </div>
            <div className="grid [grid-template-columns:repeat(auto-fill,_minmax(300px,_1fr))] gap-5">
              {videos.map(video => (
                <VideoGridItem key={video.id} {...video} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </SidebarProvider>
  )
}
