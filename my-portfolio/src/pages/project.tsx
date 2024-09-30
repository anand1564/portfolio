
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from 'lucide-react'
import {motion} from 'framer-motion'
const projects = [
  {
    title: "Notes App",
    description: "An app where users can create and joing groups and upload notes for different subjects",
    image: "./notes-app.png",
    tags: ["React", "Node.js", "Supabase", "Express","Typescript"],
    liveLink: "https://notes-app-dusky-nine.vercel.app/",
    githubLink: "https://github.com/anand1564/notes-app"
  },
  {
    title: "Chat Application",
    description: "A real-time chat application built with React and socket.io",
    image: "./chat-app.png",
    tags: ["React", "Socket.io", "Express","Typescript","postgresql"],
    liveLink: "https://chat-app-green-chi.vercel.app/",
    githubLink: "https://github.com/anand1564/chat-app"
  },
  {
    title: "Blogging App",
    description: "A blogging app where users can create, read, update and delete posts",
    image: "./blog-app.png",
    tags: ["React.js", "Postgresql", "Express","Typescript"],
    githubLink: "https://github.com/anand1564/medium-blog"
  }
];
//@ts-ignore
const ProjectCard = ({ project }) => (
  <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
  <Card className="w-full max-w-md">
    <CardHeader>
      <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-t-lg" />
      <CardTitle className="mt-4">{project.title}</CardTitle>
      <CardDescription>{project.description}</CardDescription>
    </CardHeader>
    <CardContent>
      <div className="flex flex-wrap gap-2">
         {project.tags.map((tag:any, index:any) => (
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
  </motion.div>
);

const ProjectCards = () => (
  <div className="container mx-auto px-4 py-8 mb-10">
    <h2 className="text-3xl font-bold mb-6 text-center text-white">My Projects</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  </div>
);

export default ProjectCards;