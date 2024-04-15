import React, { ReactNode } from 'react'
// Header of Every grid element
// Right Element: An OPTIONAL Element in the right of the title that has (buttons,searchbars etc.)
const GridElementHeader = ({title,rightElement}:{title:string,rightElement?:ReactNode}) => {
  return (
    <div className="flex justify-between items-center h-12">
    <div className="h-12 min-h-12 flex items-center">
      <h3 className="text-xl font-bold text-txt2">{title}</h3>
    </div>
    {rightElement ?? null}
  </div>
  )
}

export default GridElementHeader