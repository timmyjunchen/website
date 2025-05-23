import { Experience } from '@/types';

export const experiences: Experience[] = [
  {
    jobTitle: 'Undergraduate Teaching Assistant',
    company: 'Cornell University',
    startDate: 'Aug 2023',
    endDate: 'Present',
    description: `Conducted office hours and led discussions in Java for 600+ students in Object-Oriented Programming and Data
    Structures, and in C for 400+ students in Computer System Organization and Programming.
    Provided timely and frequent feedback for students, fostering an environment of learning and discovery.
    Extensively ran unit tests for programming projects and exams throughout the semester, ensuring correctness and
    completeness.`,
  },

  {
    jobTitle: 'Software Development Engineer Intern',
    company: 'Amazon Web Services',
    startDate: 'May 2024',
    endDate: 'Aug 2024',
    description: `Collaborated with cross-disciplinary team to develop Infrastructure as Code debugging tool for on-call engineers. 
    Designed and implemented an API Lambda 
    function to enable efficient retrieval from a cross-account DynamoDB table through role assumption, 
    integrating with prior infrastructure to switch region access automatically.
    Integrated Lambda function with an internal web-based operational tool through API Gateway and pushed project
    to production, enhancing visibility and troubleshooting capabilities for engineers across teams.`,
  },

  {
    jobTitle: 'Full Stack Software Engineering Intern',
    company: 'GradeWiz',
    startDate: 'Dec 2023',
    endDate: 'Nov 2024',
    description: `Designed and implemented tailwind-styled react frontend with RESTful flask backend, utilizing SQLite and S3
    bucket for storage along with Anthropic’s Claude 3.5 Large Language Model for computation.
    Coordinated with cross-functional team to develop dynamic web platform aiding in grading professor assignments.
    Worked directly with customers to develop features for platform, growing pilot program to more than 1000 users.`,
  },
];
