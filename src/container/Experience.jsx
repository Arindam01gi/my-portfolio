import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaBriefcase, FaCode } from 'react-icons/fa';
import PopUp from '../utils/PopUp';

const experiences = [
  {
    company: "Mindscale Infinity Solution",
    role: "Senior Web Developer",
    duration: "Aug,2023 - Present",
    description: "Developing scalable web applications using modern technologies like React, Node.js, and MongoDB.",
    icon: <FaCode />
  },
  {
    company: "MSQube Technology",
    role: "Backend Django Developer",
    duration: "Feb,2023 - Aug,2023",
    description: "Built responsive user interfaces and collaborated with design teams to implement pixel-perfect designs.",
    icon: <FaBriefcase />
  }
];

const Experience = () => {
  return (
    <div className='bg-blue-100 py-8 md:py-12 lg:py-16'>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <h1 className='text-3xl sm:text-4xl lg:text-5xl font-extrabold text-body-blue tracking-wide mb-8' 
            style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
          Experience
        </h1>

        <VerticalTimeline lineColor="#3b82f6">
          {experiences.map((exp, index) => (
            <PopUp key={index} duration={0.5} delay={index * 0.2} whileInView={true}>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: 'white',
                  color: '#1e3a8a',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                  borderRadius: '0.5rem',
                  marginBottom: '2rem'
                }}
                contentArrowStyle={{
                  borderRight: '7px solid white'
                }}
                date={exp.duration}
                dateClassName="text-gray-600"
                iconStyle={{
                  background: '#3b82f6',
                  color: '#fff',
                  boxShadow: '0 0 0 4px #dbeafe'
                }}
                icon={exp.icon}
                position={index % 2 === 0 ? 'left' : 'right'}
              >
                <h3 className="vertical-timeline-element-title text-xl font-bold text-body-blue">
                  {exp.company}
                </h3>
                <h4 className="vertical-timeline-element-subtitle text-lg font-semibold text-gray-700 mb-2">
                  {exp.role}
                </h4>
                <p className="text-gray-600">
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