
import React, { useState } from 'react'
import Sidebar from '../../partials/Sidebar'
import Header from '../../partials/Header'
import CharacterCard from './CharacterCard'
import bronze_image from "../../images/铜/金文.png";
import seal_image from "../../images/铜/篆书.png";
import clerical_image from "../../images/铜/隶书.png";
import regular_image from "../../images/铜/楷书.png";

function Character3() {
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
              <CharacterCard image={bronze_image} scriptName="金文" /> <CharacterCard image={seal_image} scriptName="篆书" /> <CharacterCard image={clerical_image} scriptName="隶书" /> <CharacterCard image={regular_image} scriptName="楷书" />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Character3
