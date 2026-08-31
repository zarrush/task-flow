
import { FaGithub, FaXTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa6';
import { FiMail } from 'react-icons/fi';

export default function About() {
  const socials = [
    {
      name: 'GitHub',
      icon: FaGithub,
      url: 'https://github.com',
      color: 'hover:bg-gray-900 hover:text-white',
    },
    {
      name: 'X',
      icon: FaXTwitter,
      url: 'https://twitter.com',
      color: 'hover:bg-black hover:text-white',
    },
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      url: 'https://linkedin.com',
      color: 'hover:bg-blue-700 hover:text-white',
    },
    {
      name: 'Instagram',
      icon: FaInstagram,
      url: 'https://instagram.com',
      color: 'hover:bg-pink-600 hover:text-white',
    },
    {
      name: 'Email',
      icon: FiMail,
      url: 'mailto:contact@zask.com',
      color: 'hover:bg-indigo-600 hover:text-white',
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-800 mb-2">
          About Zask
        </h1>

        <p className="text-slate-600">
          Zask is a modern task management platform designed to help you
          plan, organize, and achieve your goals.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-slate-800 mb-4">
          Connect With Us
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {socials.map((social) => {
            const Icon = social.icon;

            return (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative flex flex-col items-center justify-center p-6 bg-white border border-slate-200 rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${social.color}`}
              >
                <Icon
                  size={32}
                  className="transition-transform duration-300 group-hover:scale-110"
                />

                <span className="absolute -bottom-8 text-sm font-medium text-slate-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {social.name}
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

