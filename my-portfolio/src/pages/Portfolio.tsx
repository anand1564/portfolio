import GridBackground from '@/ui/grid-backgroung'
import ProjectCard from './project'
import React from 'react'
const Portfolio=React.forwardRef<HTMLDivElement>((props, ref)=> {
  return (
    <div ref={ref}>
    <GridBackground />
    <ProjectCard />
    </div>
  )
});

export default Portfolio