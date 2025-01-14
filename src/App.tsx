import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, ChevronDown } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Hero Section */}
      <header className="min-h-screen relative flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?auto=format&fit=crop&q=80')] opacity-5 bg-cover bg-center" />
        <div className="max-w-4xl mx-auto px-4 py-16 text-center relative">
          <div className="mb-8 relative">
            <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-yellow-500/20 shadow-lg shadow-yellow-500/10">
              <img 
                src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&q=80"
                alt="Profile"
                className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          </div>
          <h1 className="text-5xl font-bold mb-6 text-gray-100">Maddipatla Vignesh Srinivas</h1>
          <p className="text-xl text-yellow-500 mb-8 font-light tracking-wider">SOFTWARE ENGINEER</p>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12">
            Currently working as a Full Stack Software Development Engineer at JP Morgan Chase & Co, Bengaluru, INDIA.
          </p>
          <div className="flex justify-center space-x-6">
            <a href="https://github.com/vignesh-creator" className="text-gray-400 hover:text-yellow-500 transition-colors">
              <Github size={24} />
            </a>
            <a href="https://in.linkedin.com/in/vignesh-srinivas-maddipatla-9b61a81b4" className="text-gray-400 hover:text-yellow-500 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:vigneshprofessional321@gmail.com" className="text-gray-400 hover:text-yellow-500 transition-colors">
              <Mail size={24} />
            </a>
          </div>
          {/* <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <ChevronDown className="text-yellow-500/50" size={32} />
          </div> */}
        </div>
      </header>

      {/* Projects Section */}
      {/* <section className="py-20 px-4 bg-gray-800/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-100">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((project) => (
              <div key={project} className="bg-gray-900/50 p-6 rounded-lg border border-gray-700 hover:border-yellow-500/30 transition-all duration-300">
                <div className="aspect-video bg-gray-800 rounded-md mb-4 overflow-hidden">
                  <img 
                    src={`https://images.unsplash.com/photo-${project === 1 ? '1517694712202-14dd9538aa97' : 
                      project === 2 ? '1605379399642-2bc065aa6265' : 
                      project === 3 ? '1526374965328-7f61d4dc18c5' : 
                      '1537432376769-00f5c2f4c8d2'}?auto=format&fit=crop&w=800&q=80`}
                    alt={`Project ${project}`}
                    className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-100">Project {project}</h3>
                <p className="text-gray-400 mb-4">A brief description of the project and the technologies used.</p>
                <div className="flex space-x-4">
                  <a href="#" className="inline-flex items-center text-sm text-gray-400 hover:text-yellow-500">
                    <Code2 size={16} className="mr-1" /> View Code
                  </a>
                  <a href="#" className="inline-flex items-center text-sm text-gray-400 hover:text-yellow-500">
                    <ExternalLink size={16} className="mr-1" /> Live Demo
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Skills Section */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-100">Arsenal</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
            {['React.js', 'HTML+CSS', 'Core JavaScript', 'TypeScript', 'Redux', 'RxJs', 'Java', 'Kotlin', 'Spring + Springboot', 
            'Kubernetes', 'Docker', 'Python', 'PyTorch', 'Django', 'SQL'].map((skill) => (
              <div key={skill} className="p-4 rounded-lg bg-gray-800/30 border border-gray-700 hover:border-yellow-500/30 transition-all duration-300">
                <p className="font-medium text-gray-300">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-gray-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-100">Signal</h2>
          <p className="text-lg text-gray-400 mb-8">
            Ready to collaborate on your next project?
          </p>
          <a
            href="mailto:vigneshprofessional321@gmail.com"
            className="inline-flex items-center px-6 py-3 bg-yellow-500/10 text-yellow-500 border border-yellow-500/30 rounded-lg hover:bg-yellow-500/20 transition-all duration-300"
          >
            <Mail size={20} className="mr-2" />
            Send Message
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-500 border-t border-gray-800">
        <p>© {new Date().getFullYear()} Maddipatla Vignesh Srinivas. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;