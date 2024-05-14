function CharacterCard({ image, scriptName }) {
  return (
    <div className="col-span-4 bg-white shadow-lg rounded-sm border border-slate-200">
      <div className="flex flex-col items-center p-4">
        <div className="w-full h-48 flex items-center justify-center">
          <img src={image} alt={scriptName} className="object-scale-down" />
        </div>
        <div className="text-center mt-3">
          <h2 className="font-bold text-xl">{scriptName}</h2>
        </div>
      </div>
    </div>
  )
}

export default CharacterCard
