import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    title: "Notes App",
    description: "An app where users can create and joing groups and upload notes for different subjects",
    image: "/placeholder.svg?height=200&width=400",
    tags: ["React", "Node.js", "Supabase", "Express","Typescript"],
    liveLink: "https://example.com/ecommerce",
    githubLink: "https://github.com/yourusername/ecommerce"
  },
  {
    title: "Chat Application",
    description: "A real-time chat application built with React and socket.io",
    image: "/placeholder.svg?height=200&width=400",
    tags: ["React", "Socket.io", "Express","Typescript","postgresql"],
    liveLink: "https://example.com/weather-app",
    githubLink: "https://github.com/yourusername/weather-app"
  },
  {
    title: "Blogging App",
    description: "A blogging app where users can create, read, update and delete posts",
    image: "/placeholder.svg?height=200&width=400",
    tags: ["React.js", "Postgresql", "Express","Typescript"],
    liveLink: "https://example.com/task-manager",
    githubLink: "https://github.com/yourusername/task-manager"
  }
];
//@ts-ignore
const ProjectCard = ({ project }) => (
  <Card className="w-full max-w-md">
    <CardHeader>
      <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-t-lg" />
      <CardTitle className="mt-4">{project.title}</CardTitle>
      <CardDescription>{project.description}</CardDescription>
    </CardHeader>
    <CardContent>
      <div className="flex flex-wrap gap-2">
         {project.tags.map((tag, index) => (
          <Badge key={index} variant="secondary">{tag}</Badge>
        ))}
      </div>
    </CardContent>
    <CardFooter className="flex justify-between">
      <Button variant="outline" asChild>
        <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
          <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
        </a>
      </Button>
      <Button variant="outline" asChild>
        <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
          <Github className="mr-2 h-4 w-4" /> GitHub
        </a>
      </Button>
    </CardFooter>
  </Card>
);

const ProjectCards = () => (
  <div className="container mx-auto px-4 py-8">
    <h2 className="text-3xl font-bold mb-6 text-center">My Projects</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  </div>
);

export default ProjectCards;