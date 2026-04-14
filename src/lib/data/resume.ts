export interface Personal {
	name: string;
	email: string;
	phone: string;
	location: string;
	tagline: string;
	bio: string;
}

export interface Experience {
	company: string;
	location: string;
	role: string;
	start: string;
	end: string;
	bullets: string[];
}

export interface Education {
	school: string;
	location: string;
	degree: string;
	graduated: string;
	gpa?: string;
}

export interface Project {
	name: string;
	tech: string[];
	description: string;
	highlights: string[];
	featured: boolean;
}

export interface Skills {
	languages: string[];
	frontend: string[];
	backend: string[];
	databases: string[];
	tools: string[];
}

export interface Social {
	github: string;
	linkedin: string;
}

export const personal: Personal = {
	name: 'Vivek Almal',
	email: 'vivek.almal99@gmail.com',
	phone: '5513585643',
	location: 'Jersey City, NJ',
	tagline: 'Full Stack Developer — from Civil Engineering to Computer Science',
	bio: "I started with a background in civil engineering before discovering a passion for software. I taught myself to code, earned an MS in Computer Science from Stevens Institute of Technology, and have since built full-stack web applications across Python/Django backends and React frontends. I write clean, tested code — hitting ~90% coverage in production — and bring a problem-solver's mindset from an unconventional path into tech."
};

export const experience: Experience[] = [
	{
		company: 'Saven Nova Technologies',
		location: 'Madhapur, Hyderabad',
		role: 'Full Stack Developer',
		start: 'Jun 2021',
		end: 'Aug 2022',
		bullets: [
			'Built and maintained REST APIs supporting core business workflows',
			'Developed reusable React components for UI consistency',
			'Wrote unit tests achieving ~90% code coverage',
			'Collaborated on Python/Django backend and database logic',
			'Supported deployment and production readiness on company cloud infrastructure'
		]
	}
];

export const education: Education[] = [
	{
		school: 'Stevens Institute of Technology',
		location: 'Hoboken, NJ',
		degree: 'MS Computer Science',
		graduated: 'May 2024',
		gpa: '3.66'
	},
	{
		school: 'CMR Institute of Technology',
		location: 'Hyderabad',
		degree: "Bachelor's in Civil Engineering",
		graduated: 'May 2020'
	}
];

export const projects: Project[] = [
	{
		name: 'Stack Overflow Clone',
		tech: [
			'Django',
			'Django REST Framework',
			'Python',
			'JavaScript',
			'HTML',
			'CSS',
			'PostgreSQL',
			'Google OAuth'
		],
		description:
			"A full-stack Q&A platform with posting, answering, voting, and threaded discussions — modeled closely on Stack Overflow's core feature set.",
		highlights: [
			'RESTful API for questions/answers/comments/voting',
			'Google OAuth + session-based auth',
			'Tagging, search, pagination, bookmarking',
			'User profile dashboards with activity metrics',
			'Relational schema for users, posts, comments, votes, tags'
		],
		featured: true
	},
	{
		name: 'HealthyByte',
		tech: ['PHP', 'MySQL', 'Apache', 'HTML', 'CSS'],
		description:
			'A personalized nutrition web app that generates meal recommendations based on user health data and dietary preferences.',
		highlights: [
			'Backend logic for user input, auth, and data storage',
			'UI for capturing dietary preferences and generating customized meal plans'
		],
		featured: false
	}
];

export const skills: Skills = {
	languages: ['Python', 'Java', 'JavaScript', 'SQL'],
	frontend: ['HTML', 'CSS', 'React', 'Tailwind CSS'],
	backend: ['Django', 'Node.js', 'Express.js'],
	databases: ['PostgreSQL', 'MySQL', 'MongoDB'],
	tools: ['Git', 'Postman', 'VS Code']
};

export const social: Social = {
	github: 'https://github.com/vivekalmal15',
	linkedin: 'https://linkedin.com/in/vivek-almal'
};
