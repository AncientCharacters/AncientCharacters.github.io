
import React, { useState } from 'react'
import Sidebar from '../../partials/Sidebar'
import Header from '../../partials/Header'
import CharacterCard from './CharacterCard'
import regular_image from "../../images/爸/楷书.png";

function Character18() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="flex h-[100vh] overflow-hidden">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="relative flex flex-col flex-1 overflow-y-auto">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <main className="grow p-8">
          <div className="max-w-9xl mx-auto">
            <h1 className="text-3xl font-bold text-left mb-8">详细信息</h1>
            <div className="grid grid-cols-12 gap-4">
              <CharacterCard image={regular_image} scriptName="楷书" />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Character18
