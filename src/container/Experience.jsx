import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaBriefcase, FaCode } from 'react-icons/fa';
import PopUp from '../utils/PopUp';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const experiences = [
  {
    company: "Mindscale Infinity Solution",
    role: "Senior Developer",
    duration: "Aug,2023 - Present",
    description: "Leading the development of scalable web applications using React, Node.js, and MongoDB. Architecting robust backend systems, optimizing database performance, and implementing RESTful APIs. Mentoring junior developers and ensuring code quality through code reviews and best practices.",
    icon: <FaCode />
  },
  {
    company: "MSQube Technology",
    role: "Backend Django Developer",
    duration: "Feb,2023 - Aug,2023",
    description: "Developed and maintained backend systems using Django and Django REST Framework. Designed and implemented database schemas, optimized queries, and built REST APIs for various web applications. Collaborated with frontend teams to ensure seamless integration between backend and frontend systems.",
    icon: <FaBriefcase />
  }
];

const Experience = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className='bg-blue-100 dark:bg-gray-900 py-8 md:py-12 lg:py-16'>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <h1 className='text-3xl sm:text-4xl lg:text-5xl font-extrabold text-body-blue tracking-wide mb-8' 
            style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
          Experience
        </h1>

        <VerticalTimeline lineColor={theme === 'dark' ? '#4a5568' : '#3b82f6'}>
          {experiences.map((exp, index) => (
            <PopUp key={index} duration={0.5} delay={index * 0.2} whileInView={true}>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: theme === 'dark' ? '#334155' : 'white',
                  color: theme === 'dark' ? '#f8fafc' : '#1e3a8a',
                  boxShadow: theme === 'dark' ? '0 4px 6px -1px rgba(0, 0, 0, 0.5), 0 2px 4px -1px rgba(0, 0, 0, 0.25)' : '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                  borderRadius: '0.5rem',
                  marginBottom: '2rem'
                }}
                contentArrowStyle={{
                  borderRight: theme === 'dark' ? '7px solid #334155' : '7px solid white'
                }}
                date={exp.duration}
                dateClassName="text-gray-600 dark:text-gray-400"
                iconStyle={{
                  background: theme === 'dark' ? '#1f2937' : '#3b82f6',
                  color: '#fff',
                  boxShadow: theme === 'dark' ? '0 0 0 4px #4b5563' : '0 0 0 4px #dbeafe'
                }}
                icon={exp.icon}
                position={index % 2 === 0 ? 'left' : 'right'}
              >
                <h3 className="vertical-timeline-element-title text-xl font-bold text-body-blue dark:text-body-blue">
                  {exp.company}
                </h3>
                <h4 className="vertical-timeline-element-subtitle text-lg font-semibold text-gray-700 dark:text-gray-200 mb-2">
                  {exp.role}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-left">
                  {exp.description}
                </p>
              </VerticalTimelineElement>
            </PopUp>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Experience;