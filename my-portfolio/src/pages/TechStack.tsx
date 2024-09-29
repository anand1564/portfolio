
const techstack=[{
    name: 'HTML', icon: './icons8-html-5-96.png'
},{name:'CSS', icon: './icons8-css3-96.png'},{name:'JS',icon:'./icons8-javascript-96.png'},
{name:'Typescript',icon:'./icons8-typescript-96.png'},{name:'React',icon:'./images.png',width:96,height:96},{
    name:'Postgresql',icon:'./postgresql.png',width:96,height:96
}]

const TechStack = ()=>{
    return (
        <div className="flex items-center justify-center flex-col">
            <h3 className="text-2xl text-white">Tech Stack</h3>
            <div className="w-full flex items-center justify-center">
            {techstack.map((tech)=>{
                return (
                    <div>
                        <img src={tech.icon} alt={tech.name} width={tech.width}/>
                    </div>
                    )
            })}
            </div>
        </div>
    )
}
export default TechStack;