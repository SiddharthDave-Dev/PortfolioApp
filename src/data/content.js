export const portfolioContent = {
    // Header Content
    header: {
        name: "Siddharth Dave",
        navItems: ["Home", "About", "Skills", "Projects", "Contact"],
        // navItems: ["Home", "About", "Skills", "Contact"],
        logo: "SD"
    },

    // Profile Section Content
    profile: {
        greeting: "Hi there!",
        name: "Siddharth Dave",
        roles: [
            "iOS Developer",
            "Data Science Enthusiast",
            "Mobile App Creator",
            "Problem Solver",
            "Swift Expert",
            "AIML Explorer"
        ],
        description: "Passionate iOS developer with 2+ years of professional experience building high-quality mobile applications. Currently expanding expertise in Data Science, focusing on leveraging data-driven insights to enhance user experiences and solve real-world problems through innovative technology solutions.",
        resumeText: "Download Resume",
        contactText: "Let's Connect",
        profileImage: "/images/profile-avatar.jpg",
        backgroundParticles: "/images/background-particles.svg",
        social: [
            {
                icon: "/images/github.png",
                name: "GitHub",
                url: "https://github.com/SiddharthDave-Dev"
            },
            {
                icon: "/images/linkedin.png",
                name: "LinkedIn",
                url: "https://www.linkedin.com/in/davesiddharth23"
            },
            {
                icon: "/images/twitter.png",
                name: "X (Twitter)",
                url: "https://x.com/Siddharth012304"
            },
            {
                icon: "/images/tableau-icon.png",
                name: "Tableau Public",
                url: "https://public.tableau.com/app/profile/siddharth.dave2404/vizzes"
            }
        ]
    },

    // About Section Content
    about: {
        title: "About Me",
        subtitle: "Discover my journey & passion",
        description: `
                    I began my career as an iOS Developer, building user-focused mobile applications and developing strong skills in clean architecture, problem-solving, and structured thinking. Along the way, I discovered a deep interest in data—understanding patterns, uncovering insights, and solving real-world challenges through analytics.

                Today, I am transitioning into Data Analytics and Data Science with growing expertise in Python, SQL, data visualization, and statistical analysis. My goal is to combine my development experience with analytical thinking to help organizations make smarter, data-driven decisions.
        `,
        education: {
            title: "Education",
            degrees: [
                {
                    degree: "B.E. / B.Tech. in Information Technology",
                    university: "LJ University",
                    year: "2022 - 2025",
                    gpa: "9.00/10.0",
                    achievements: [
                        "Maintained Strong Academic Performance",
                        "Completed Multiple Academic Projects"
                    ],
                    description: "Specializing in software engineering and programming with exposure to emerging technologies. Focused on developing real-world projects and currently exploring Artificial Intelligence, Machine Learning, and Data Science."
                },
                {
                    degree: "Diploma in Information Technology",
                    university: "LJ Polytechnic",
                    year: "2019 - 2022",
                    gpa: "9.03/10.0",
                    achievements: [
                        "Graduated with Distinction",
                        "Completed Final Year Project"
                    ],
                    description: "Built a solid foundation in software development, databases, and Android application programming. Gained hands-on experience through coursework and team-based projects."
                }
            ]
        },

        // NEW: Experience Section
        experience: {
            title: "Experience",
            jobs: [
                {
                    role: "iOS Developer",
                    company: "DotPixel Ventures",
                    period: "Aug 2023 – Aug 2025",
                    location: "Ahmedabad, India",
                    description: "Developed scalable, high-performance native iOS applications with emphasis on clean architecture, modular code, and smooth user experience.",
                    responsibilities: [
                        "Developed native iOS applications using Swift, focusing on performance and clean architectural patterns.",
                        "Integrated RESTful APIs to ensure reliable and smooth backend communication.",
                        "Built user-friendly interfaces using UIKit and basic SwiftUI components.",
                        "Performed debugging, profiling, and testing to enhance app stability and performance.",
                        "Managed App Store submissions, provisioning profiles, and application updates."
                    ],
                    tech: ["Swift", "UIKit", "SwiftUI", "REST APIs", "Xcode", "App Store Connect"],
                    achievements: [
                        "Delivered multiple production-ready app features within deadlines",
                        "Improved app performance and reduced crash rates through optimization"
                    ]
                }
            ]
        },

        highlights: [
            {
                icon: "/images/ios-icon.png",
                title: "iOS Development",
                description:
                    "Experienced in building high-quality iOS applications using Swift, SwiftUI, UIKit, and Core Data. Developed multiple apps with clean architecture, reusable components, and a strong focus on performance and user experience.",
                skills: ["Swift", "SwiftUI", "UIKit", "Core Data", "Xcode", "Swift Packages"]
            },
            {
                icon: "/images/data-science-icon.png",
                title: "Data Science",
                description:
                    "Building a strong foundation in Python, machine learning basics, data cleaning, and exploratory analysis. Applying analytical thinking to derive meaningful insights from raw data.",
                skills: ["Python", "Data Cleaning", "SQL", "Pandas", "NumPy"]
            },
            {
                icon: "/images/data-viz-icon.png",
                title: "Data Visualization & Analytics",
                description:
                    "Proficient in creating interactive dashboards and analytical reports using Tableau and Matplotlib. Skilled at transforming complex data into clear, actionable insights through visual storytelling and performance-optimized dashboards.",
                skills: ["Tableau", "Matplotlib", "Seaborn", "Dashboards", "Data Storytelling"]
            },
            {
                icon: "/images/innovation-icon.png",
                title: "Innovation",
                description:
                    "Driven by curiosity and focused on solving real-world problems through technology. Continually exploring new tools, frameworks, and ideas to build impactful prototypes and creative solutions.",
                skills: ["Problem Solving", "Creative Thinking", "Research", "Prototyping"]
            }
        ],

        stats: [
            { number: "10+", label: "iOS Projects Developed", icon: "" },
            { number: "2+", label: "Years Experience", icon: "" },
            { number: "Currently", label: "Learning Data Science", icon: "" },
            { number: "0", label: "Published Apps (Self-Learning Focus)", icon: "" }
        ],
        journey: {
            title: "My Professional Journey",
            milestones: [
                {
                    year: "2019",
                    title: "Started Diploma in IT",
                    description: "Began academic journey in Information Technology at LJ Polytechnic, building a foundation in programming, databases, and Android development.",
                    type: "education"
                },
                {
                    year: "2022",
                    title: "Started B.E. in IT",
                    description: "Enrolled in LJ University to pursue a Bachelor's degree in Information Technology, focusing on software engineering and emerging technologies.",
                    type: "education"
                },
                {
                    year: "2023",
                    title: "First iOS Developer Role",
                    description: "Started professional career as an iOS Developer, working on real-world projects using Swift, UIKit, SwiftUI, and Core Data.",
                    type: "work"
                },
                {
                    year: "2025",
                    title: "Exploring Data Science",
                    description: "Currently expanding knowledge in Data Science and Machine Learning with Python, aiming to integrate AI/ML capabilities into mobile applications.",
                    type: "current"
                }
            ]

        }
    },

    // Skills Section Content
    skills: {
        title: "Skills & Expertise",
        subtitle: "Technologies and tools I work with",

        technical: [
            {
                name: "Working with Tableau",
                level: 100,
                levelText: "Advanced",
                icon: "/images/tableau-icon.png",
                fallback: "📊",
                color: "#2F4B7C",
                colorEnd: "#A05195",
                description:
                    "Advanced in Tableau: builds interactive dashboards, creates LOD expressions, performs data modeling, connects to SQL & cloud sources, applies performance optimization, publishes dashboards, and designs visually compelling analytics."
            },
            {
                name: "Data Cleaning",
                level: 70,
                levelText: "Intermediate",
                icon: "/images/data-cleaning-icon.png",
                fallback: "🧹",
                color: "#3E5151",
                colorEnd: "#DECBA4",
                description:
                    "Skilled in identifying, correcting, and transforming raw data for analytics. Experienced with handling missing values, duplicates, formatting issues, outliers, and preparing clean datasets using SQL, Pandas, and Tableau."
            },
            {
                name: "SQL",
                level: 85,
                levelText: "Advanced",
                icon: "/images/SQL.png",
                fallback: "🧩",
                color: "#3A7BD5",
                colorEnd: "#00D2FF",
                description:
                    "Strong SQL skills: writing complex queries, joins, CTEs, views, stored procedures, data cleaning, aggregation, and using SQL for analytics and dashboard integration."
            },
            {
                name: "Swift & iOS",
                level: 85,
                levelText: "Advanced",
                icon: "/images/swift-icon.png",
                fallback: "📱",
                color: "#FF6A00",
                colorEnd: "#EE0979",
                description:
                    "Experienced iOS developer skilled in Swift, SwiftUI, UIKit, Core Data, REST APIs, and building production-ready mobile apps with clean architecture and performance optimization."
            },
            {
                name: "SwiftUI",
                level: 60,
                levelText: "Intermediate",
                icon: "/images/swiftui-icon.png",
                fallback: "🧩",
                color: "#11998E",
                colorEnd: "#38EF7D",
                description:
                    "Intermediate SwiftUI developer: builds scalable, declarative UI components, animations, adaptive layouts, and integrates MVVM patterns."
            },
            {
                name: "React (Web)",
                level: 50,
                levelText: "Intermediate",
                icon: "/images/react-icon.png",
                fallback: "⚛️",
                color: "#1F4037",
                colorEnd: "#99F2C8",
                description:
                    "Experience with React for component-driven web development. Familiar with hooks, state management, reusable UI components, and REST API integration."
            },
            {
                name: "Python (Data Science)",
                level: 60,
                levelText: "Beginner–Intermediate",
                icon: "/images/python-icon.png",
                fallback: "🐍",
                color: "#FDB99B",
                colorEnd: "#CF8BF3",
                description:
                    "Learning Python for Data Science: working with NumPy, Pandas, Matplotlib, and basic machine learning concepts using scikit-learn."
            },
            {
                name: "Database Management",
                level: 70,
                levelText: "Intermediate",
                icon: "/images/database-icon.png",
                fallback: "🗄️",
                color: "#4568DC",
                colorEnd: "#B06AB3",
                description:
                    "Experience with Firebase, Core Data, and basic SQL databases. Skilled in designing schemas, managing data flow, and integrating storage with applications."
            },
            {
                name: "Version Control & Tools",
                level: 80,
                levelText: "Proficient",
                icon: "/images/git-icon.png",
                fallback: "🛠️",
                color: "#FF512F",
                colorEnd: "#DD2476",
                description:
                    "Proficient in Git, GitHub, Xcode, VS Code, Postman, and command-line tools. Familiar with version control best practices and workflow automation."
            }
        ],

        tools: [
            {
                category: "Programming Languages",
                items: ["Swift", "Python", "SQL", "HTML", "CSS"]
            },
            {
                category: "Frameworks & Libraries",
                items: ["SwiftUI", "UIKit", "React"]
            },
            {
                category: "Data Visualization",
                items: ["Tableau", "Matplotlib", "Seaborn"]
            },
            {
                category: "Data Handling & Analysis",
                items: ["Data Cleaning", "Pandas", "NumPy"]
            },
            {
                category: "Tools & Platforms",
                items: ["Xcode", "VS Code", "Jupyter", " Git", "GitHub", "SourceTree", "Terminal", "Postman", "Anaconda"]
            },
            {
                category: "Cloud & Backend Services",
                items: ["Firebase", "MondoDB", "Realm", "App Store Connect", "Analytics"]
            },
            {
                category: "Database Management",
                items: ["SQL", "MongoDB", "Realm", "Core Data", "Firebase", "Swift Data"]
            },
            {
                category: "Soft Skills",
                items: ["Teamwork", "Communication", "Problem-Solving", "Adaptability", "Time Management", "Leadership", "Creativity"]
            }
        ],

        soft: [
            {
                name: "Problem Solving",
                icon: "🧩",
                description:
                    "Strong analytical thinking with the ability to break down complex challenges and find efficient, creative solutions."
            },
            {
                name: "Team Leadership",
                icon: "👥",
                description:
                    "Experience guiding teams, providing technical direction, and mentoring peers to achieve high-quality outcomes."
            },
            {
                name: "Teamwork",
                icon: "🤗",
                description:
                    "Works effectively with diverse teams, contributes proactively, supports others, and helps maintain a positive and collaborative work environment."
            },
            {
                name: "Communication",
                icon: "💬",
                description:
                    "Clear and effective communicator, skilled at explaining technical concepts to teammates, stakeholders, and non-technical audiences."
            },
            {
                name: "Adaptability",
                icon: "🔄",
                description:
                    "Quick learner who adapts easily to new technologies, tools, and evolving project needs."
            },
            {
                name: "Time Management",
                icon: "⏰",
                description:
                    "Highly organized with the ability to prioritize tasks, manage deadlines, and consistently deliver work on time."
            },
            {
                name: "Innovation",
                icon: "💡",
                description:
                    "Passionate about exploring new ideas, experimenting with technologies, and building innovative, user-focused solutions."
            },
            {
                name: "Collaboration",
                icon: "🤝",
                description:
                    "Works cooperatively in group environments, shares knowledge, and ensures smooth coordination across roles and responsibilities."
            },
            {
                name: "Attention to Detail",
                icon: "🔍",
                description:
                    "Detail-oriented approach ensuring accuracy in coding, data analysis, debugging, and UI/UX quality."
            }
        ],

        certifications: [
            {
                name: "iOS App Development",
                issuer: "Apple Developer",
                date: "2023",
                badge: "/images/apple-cert.png",
                fallback: "🍎",
                credentialId: "APD-2023-001"
            },
            {
                name: "Machine Learning Engineer",
                issuer: "Google Cloud",
                date: "2024",
                badge: "/images/google-cert.png",
                fallback: "🎓",
                credentialId: "GCP-ML-2024"
            },
            {
                name: "AWS Cloud Practitioner",
                issuer: "Amazon Web Services",
                date: "2024",
                badge: "/images/aws-cert.png",
                fallback: "☁️",
                credentialId: "AWS-CP-2024"
            },
            {
                name: "React Native Specialist",
                issuer: "Meta",
                date: "2023",
                badge: "/images/meta-cert.png",
                fallback: "⚛️",
                credentialId: "META-RN-2023"
            }
        ]
    },
    // projects: {
    //     title: "My Projects",
    //     subtitle: "A showcase of my recent work and creative solutions",

    //     items: [
    //         {
    //             id: "music-nest",
    //             name: "Music Nest",
    //             category: "Music & Entertainment",
    //             summary: "A comprehensive music streaming app built with Swift and Core Data",
    //             description: "Music Nest is a feature-rich music streaming application that provides users with an intuitive interface to discover, organize, and play their favorite tracks. Built using Swift and UIKit, it offers seamless playlist management, offline downloads, and social sharing features.",
    //             thumbnail: "/images/projects/music-nest/thumbnail.jpg",
    //             images: [
    //                 "/images/projects/MusicNest/Screen1.jpg",
    //                 "/images/projects/MusicNest/Screen2.jpg",
    //                 "/images/projects/MusicNest/Screen3.jpg",
    //                 "/images/projects/MusicNest/Screen4.jpg",
    //                 "/images/projects/MusicNest/Screen5.jpg",
    //                 "/images/projects/MusicNest/Screen6.jpg",
    //                 "/images/projects/MusicNest/Screen7.jpg",
    //                 "/images/projects/MusicNest/Screen8.jpg",
    //                 "/images/projects/MusicNest/Screen9.jpg",
    //                 "/images/projects/MusicNest/Screen10.jpg",
    //                 "/images/projects/MusicNest/Screen11.jpg",
    //                 "/images/projects/MusicNest/Screen12.jpg",
    //                 "/images/projects/MusicNest/Screen13.jpg",
    //                 "/images/projects/MusicNest/Screen14.jpg",
    //                 "/images/projects/MusicNest/Screen15.jpg",
    //                 "/images/projects/MusicNest/Screen16.jpg",
    //                 "/images/projects/MusicNest/Screen17.jpg",
    //                 "/images/projects/MusicNest/Screen18.jpg",
    //                 "/images/projects/MusicNest/Screen19.jpg",
    //                 "/images/projects/MusicNest/Screen20.jpg",
    //                 "/images/projects/MusicNest/Screen21.jpg",
    //                 "/images/projects/MusicNest/Screen22.jpg",
    //                 "/images/projects/MusicNest/Screen23.jpg",
    //                 "/images/projects/MusicNest/Screen24.jpg",
    //                 "/images/projects/MusicNest/Screen25.jpg"
    //             ],
    //             technologies: ["Swift", "UIKit", "Core Data", "AVFoundation"],
    //             duration: "4 months",
    //             status: "Completed",
    //             role: "Lead iOS Developer",
    //             features: [
    //                 "Music streaming and offline downloads",
    //                 "Custom playlist creation and management",
    //                 "Social sharing and friend recommendations",
    //                 "Dark mode and customizable themes",
    //                 "Audio equalizer and sound effects",
    //                 "Background playback and lock screen controls"
    //             ],
    //             demoUrl: "https://apps.apple.com/music-nest",
    //             githubUrl: "https://github.com/siddharthdave/music-nest"
    //         },
    //         {
    //             id: "chatter-box",
    //             name: "Chatter Box",
    //             category: "Social & Communication",
    //             summary: "Real-time messaging app with advanced chat features",
    //             description: "Chatter Box is a modern messaging application built with Swift and UIKit. It provides real-time communication with features like group chats, media sharing, message encryption, and custom chat themes for an engaging user experience.",
    //             thumbnail: "/images/projects/chatter-box/thumbnail.jpg",
    //             images: [
    //                 "/images/projects/chatter-box/screen1.jpg",
    //                 "/images/projects/chatter-box/screen2.jpg",
    //                 "/images/projects/chatter-box/screen3.jpg"
    //             ],
    //             technologies: ["Swift", "UIKit", "Firebase", "Push Notifications"],
    //             duration: "3 months",
    //             status: "In Development",
    //             role: "iOS Developer",
    //             features: [
    //                 "Real-time messaging with Socket.IO",
    //                 "Group chats and broadcast messages",
    //                 "Media sharing (photos, videos, documents)",
    //                 "End-to-end message encryption",
    //                 "Custom chat themes and wallpapers",
    //                 "Voice messages and video calls"
    //             ],
    //             demoUrl: "https://chatterbox-demo.netlify.app",
    //             githubUrl: "https://github.com/siddharthdave/chatter-box"
    //         },
    //         {
    //             id: "photo-heaven",
    //             name: "Photo Heaven",
    //             category: "Photography & Social",
    //             summary: "Social photo sharing platform with advanced editing tools",
    //             description: "Photo Heaven is a comprehensive photo sharing platform that combines social networking with powerful editing capabilities. Built with Swift and UIKit, it offers professional-grade filters, community features, and seamless sharing across platforms.",
    //             thumbnail: "/images/projects/photo-heaven/thumbnail.jpg",
    //             images: [
    //                 "/images/projects/photo-heaven/screen1.jpg",
    //                 "/images/projects/photo-heaven/screen2.jpg",
    //                 "/images/projects/photo-heaven/screen3.jpg"
    //             ],
    //             technologies: ["Swift", "UIKit", "Core Image", "CloudKit"],
    //             duration: "5 months",
    //             status: "Beta Testing",
    //             role: "Lead Developer",
    //             features: [
    //                 "Advanced photo editing with filters and effects",
    //                 "Social feed with likes, comments, and shares",
    //                 "Professional camera controls and RAW support",
    //                 "Community challenges and photography contests",
    //                 "Portfolio creation and showcase galleries",
    //                 "Cross-platform sharing and export options"
    //             ],
    //             demoUrl: "https://photo-heaven-demo.com",
    //             githubUrl: "https://github.com/siddharthdave/photo-heaven"
    //         },
    //         {
    //             id: "tier-list",
    //             name: "Tier List",
    //             category: "Productivity & Tools",
    //             summary: "Interactive ranking and tier list creation app",
    //             description: "Tier List is an intuitive app for creating custom ranking systems and tier lists for any topic. Built with Swift and UIKit, it provides drag-and-drop functionality, customizable tiers, and sharing capabilities for personal or collaborative ranking projects.",
    //             thumbnail: "/images/projects/tier-list/thumbnail.jpg",
    //             images: [
    //                 "/images/projects/tier-list/screen1.jpg",
    //                 "/images/projects/tier-list/screen2.jpg",
    //                 "/images/projects/tier-list/screen3.jpg"
    //             ],
    //             technologies: ["Swift", "UIKit", "Core Data", "CloudKit"],
    //             duration: "2 months",
    //             status: "Completed",
    //             role: "iOS Developer",
    //             features: [
    //                 "Drag-and-drop tier list creation",
    //                 "Customizable tier colors and labels",
    //                 "Import images from gallery or camera",
    //                 "Save and share tier lists with friends",
    //                 "Template library for popular categories",
    //                 "Export as image or PDF formats"
    //             ],
    //             demoUrl: null,
    //             githubUrl: "https://github.com/siddharthdave/tier-list"
    //         },
    //         {
    //             id: "gesture-masters",
    //             name: "GestureMasters",
    //             category: "Accessibility & Innovation",
    //             summary: "Hand gesture recognition app using machine learning",
    //             description: "GestureMasters leverages Core ML and Vision frameworks to recognize and interpret hand gestures in real-time. Built with Swift and advanced ML models, it provides accessible interaction methods and gesture-based controls for various applications.",
    //             thumbnail: "/images/projects/gesture-masters/thumbnail.jpg",
    //             images: [
    //                 "/images/projects/gesture-masters/screen1.jpg",
    //                 "/images/projects/gesture-masters/screen2.jpg",
    //                 "/images/projects/gesture-masters/screen3.jpg"
    //             ],
    //             technologies: ["Swift", "UIKit", "Core ML", "Vision", "AVFoundation"],
    //             duration: "4 months",
    //             status: "Completed",
    //             role: "iOS Developer",
    //             features: [
    //                 "Real-time hand gesture recognition",
    //                 "Custom gesture training and learning",
    //                 "Accessibility features for motor impairments",
    //                 "Integration with system controls",
    //                 "Gesture library and preset commands",
    //                 "Performance analytics and accuracy tracking"
    //             ],
    //             demoUrl: "https://gesture-masters-demo.com",
    //             githubUrl: "https://github.com/siddharthdave/gesture-masters"
    //         },
    //         {
    //             id: "weather-app-swiftui",
    //             name: "Weather App SwiftUI",
    //             category: "Utility & Lifestyle",
    //             summary: "Modern weather app built entirely with SwiftUI",
    //             description: "A beautifully designed weather application showcasing SwiftUI's capabilities. Features real-time weather data, interactive animations, and location-based forecasts with a clean, modern interface that adapts to different weather conditions.",
    //             thumbnail: "/images/projects/weather-app/thumbnail.jpg",
    //             images: [
    //                 "/images/projects/weather-app/screen1.jpg",
    //                 "/images/projects/weather-app/screen2.jpg",
    //                 "/images/projects/weather-app/screen3.jpg"
    //             ],
    //             technologies: ["Swift", "SwiftUI", "Core Location", "WeatherKit"],
    //             duration: "1.5 months",
    //             status: "Completed",
    //             role: "iOS Developer",
    //             features: [
    //                 "Real-time weather data and forecasts",
    //                 "Location-based weather detection",
    //                 "Interactive weather animations",
    //                 "7-day weather forecast with hourly details",
    //                 "Weather alerts and notifications",
    //                 "Multiple location management"
    //             ],
    //             demoUrl: "https://weather-swiftui-demo.com",
    //             githubUrl: "https://github.com/siddharthdave/weather-app-swiftui"
    //         },
    //         {
    //             id: "streak-app",
    //             name: "Streak App",
    //             category: "Productivity & Habits",
    //             summary: "Habit tracking app with streak counting and motivation",
    //             description: "Streak App helps users build and maintain positive habits through visual tracking, streak counting, and motivational features. Built with Swift and UIKit, it provides customizable habits, progress analytics, and reminder systems.",
    //             thumbnail: "/images/projects/streak-app/thumbnail.jpg",
    //             images: [
    //                 "/images/projects/streak-app/screen1.jpg",
    //                 "/images/projects/streak-app/screen2.jpg",
    //                 "/images/projects/streak-app/screen3.jpg"
    //             ],
    //             technologies: ["Swift", "UIKit", "Core Data", "UserNotifications"],
    //             duration: "2.5 months",
    //             status: "App Store Review",
    //             role: "iOS Developer",
    //             features: [
    //                 "Custom habit creation and tracking",
    //                 "Visual streak counters and progress bars",
    //                 "Daily reminders and notifications",
    //                 "Progress analytics and insights",
    //                 "Achievement badges and milestones",
    //                 "Data export and backup functionality"
    //             ],
    //             demoUrl: null,
    //             githubUrl: "https://github.com/siddharthdave/streak-app"
    //         },
    //         {
    //             id: "glycemic",
    //             name: "Glycemic",
    //             category: "Health & Fitness",
    //             summary: "Blood glucose tracking app for diabetes management",
    //             description: "Glycemic is a comprehensive diabetes management app built with Swift and HealthKit integration. It helps users track blood glucose levels, manage medication schedules, and monitor dietary habits with detailed analytics and health insights.",
    //             thumbnail: "/images/projects/glycemic/thumbnail.jpg",
    //             images: [
    //                 "/images/projects/glycemic/screen1.jpg",
    //                 "/images/projects/glycemic/screen2.jpg",
    //                 "/images/projects/glycemic/screen3.jpg"
    //             ],
    //             technologies: ["Swift", "UIKit", "HealthKit", "Core Data", "Charts"],
    //             duration: "3.5 months",
    //             status: "Beta Testing",
    //             role: "Lead iOS Developer",
    //             features: [
    //                 "Blood glucose level logging and tracking",
    //                 "Medication reminders and schedules",
    //                 "Food diary with carb counting",
    //                 "HealthKit integration for comprehensive data",
    //                 "Trend analysis and glucose pattern insights",
    //                 "Doctor report generation and sharing"
    //             ],
    //             demoUrl: "https://glycemic-demo.com",
    //             githubUrl: "https://github.com/siddharthdave/glycemic"
    //         },
    //         {
    //             id: "country-app",
    //             name: "Country App",
    //             category: "Education & Reference",
    //             summary: "Comprehensive country information and geography learning app",
    //             description: "Country App is an educational application providing detailed information about world countries. Built with Swift and UIKit, it features interactive maps, country statistics, cultural information, and geography learning tools.",
    //             thumbnail: "/images/projects/country-app/thumbnail.jpg",
    //             images: [
    //                 "/images/projects/country-app/screen1.jpg",
    //                 "/images/projects/country-app/screen2.jpg",
    //                 "/images/projects/country-app/screen3.jpg"
    //             ],
    //             technologies: ["Swift", "UIKit", "MapKit", "Core Data"],
    //             duration: "2 months",
    //             status: "Completed",
    //             role: "iOS Developer",
    //             features: [
    //                 "Comprehensive country database with statistics",
    //                 "Interactive world map with country selection",
    //                 "Cultural information and historical facts",
    //                 "Flag recognition quiz and learning games",
    //                 "Favorites and bookmarking system",
    //                 "Offline mode for limited connectivity"
    //             ],
    //             demoUrl: "https://country-app-demo.com",
    //             githubUrl: "https://github.com/siddharthdave/country-app"
    //         },
    //         {
    //             id: "caloric-tracking-app",
    //             name: "Caloric Tracking App",
    //             category: "Health & Fitness",
    //             summary: "Comprehensive calorie counting and nutrition tracking app",
    //             description: "A feature-rich nutrition tracking application that helps users monitor their daily caloric intake and nutritional goals. Built with Swift and HealthKit, it provides barcode scanning, meal planning, and detailed nutritional analysis.",
    //             thumbnail: "/images/projects/caloric-app/thumbnail.jpg",
    //             images: [
    //                 "/images/projects/caloric-app/screen1.jpg",
    //                 "/images/projects/caloric-app/screen2.jpg",
    //                 "/images/projects/caloric-app/screen3.jpg"
    //             ],
    //             technologies: ["Swift", "UIKit", "HealthKit", "Vision", "Core Data"],
    //             duration: "4 months",
    //             status: "In Development",
    //             role: "Lead iOS Developer",
    //             features: [
    //                 "Barcode scanning for quick food logging",
    //                 "Extensive food database with nutritional info",
    //                 "Daily calorie and macro tracking",
    //                 "Meal planning and recipe suggestions",
    //                 "HealthKit integration for fitness data",
    //                 "Progress tracking with visual charts and insights"
    //             ],
    //             demoUrl: null,
    //             githubUrl: "https://github.com/siddharthdave/caloric-tracking"
    //         },
    //         {
    //             id: "calculator",
    //             name: "Calculator",
    //             category: "Utility & Productivity",
    //             summary: "Advanced scientific calculator with history and themes",
    //             description: "A sophisticated calculator app featuring both basic and scientific operations. Built with Swift and UIKit, it includes calculation history, multiple themes, and advanced mathematical functions for students and professionals.",
    //             thumbnail: "/images/projects/calculator/thumbnail.jpg",
    //             images: [
    //                 "/images/projects/calculator/screen1.jpg",
    //                 "/images/projects/calculator/screen2.jpg",
    //                 "/images/projects/calculator/screen3.jpg"
    //             ],
    //             technologies: ["Swift", "UIKit", "Core Data"],
    //             duration: "1 month",
    //             status: "Completed",
    //             role: "iOS Developer",
    //             features: [
    //                 "Basic and scientific calculation modes",
    //                 "Calculation history with search functionality",
    //                 "Multiple themes and customization options",
    //                 "Memory functions and variable storage",
    //                 "Unit conversion tools",
    //                 "Export calculations and share results"
    //             ],
    //             demoUrl: "https://calculator-demo.com",
    //             githubUrl: "https://github.com/siddharthdave/calculator"
    //         },
    //         {
    //             id: "airbnb-clone",
    //             name: "Airbnb Clone",
    //             category: "Travel & Lifestyle",
    //             summary: "Property rental app inspired by Airbnb with booking features",
    //             description: "A complete property rental application replicating core Airbnb functionality. Built with Swift and UIKit, it features property listings, booking management, user profiles, and integrated payment processing for a seamless rental experience.",
    //             thumbnail: "/images/projects/airbnb-clone/thumbnail.jpg",
    //             images: [
    //                 "/images/projects/airbnb-clone/screen1.jpg",
    //                 "/images/projects/airbnb-clone/screen2.jpg",
    //                 "/images/projects/airbnb-clone/screen3.jpg"
    //             ],
    //             technologies: ["Swift", "UIKit", "MapKit", "CloudKit", "In-App Purchase"],
    //             duration: "6 months",
    //             status: "Beta Testing",
    //             role: "Lead Developer",
    //             features: [
    //                 "Property search with filters and map integration",
    //                 "User authentication and profile management",
    //                 "Booking system with calendar availability",
    //                 "In-app messaging between hosts and guests",
    //                 "Payment processing and booking confirmation",
    //                 "Review and rating system for properties"
    //             ],
    //             demoUrl: "https://airbnb-clone-demo.com",
    //             githubUrl: "https://github.com/siddharthdave/airbnb-clone"
    //         },
    //         {
    //             id: "otp-based-app",
    //             name: "OTP Based App",
    //             category: "Security & Authentication",
    //             summary: "Secure authentication app with OTP generation and verification",
    //             description: "A security-focused application demonstrating OTP (One-Time Password) implementation for secure user authentication. Built with Swift and UIKit, it features multi-factor authentication, secure token generation, and biometric verification.",
    //             thumbnail: "/images/projects/otp-app/thumbnail.jpg",
    //             images: [
    //                 "/images/projects/otp-app/screen1.jpg",
    //                 "/images/projects/otp-app/screen2.jpg",
    //                 "/images/projects/otp-app/screen3.jpg"
    //             ],
    //             technologies: ["Swift", "UIKit", "Security", "LocalAuthentication", "CryptoKit"],
    //             duration: "2 months",
    //             status: "Completed",
    //             role: "iOS Developer",
    //             features: [
    //                 "Time-based OTP generation (TOTP)",
    //                 "SMS and email OTP verification",
    //                 "Biometric authentication (Face ID/Touch ID)",
    //                 "Secure token storage with Keychain",
    //                 "Multi-account OTP management",
    //                 "Backup and recovery options for accounts"
    //             ],
    //             demoUrl: null,
    //             githubUrl: "https://github.com/siddharthdave/otp-based-app"
    //         },
    //         {
    //             id: "stopwatch",
    //             name: "Stop Watch",
    //             category: "Utility & Sports",
    //             summary: "Professional stopwatch with lap timing and precision controls",
    //             description: "A high-precision stopwatch application designed for sports and professional timing needs. Built with Swift and UIKit, it provides accurate timing, lap recording, and detailed time analysis with export capabilities.",
    //             thumbnail: "/images/projects/stopwatch/thumbnail.jpg",
    //             images: [
    //                 "/images/projects/stopwatch/screen1.jpg",
    //                 "/images/projects/stopwatch/screen2.jpg",
    //                 "/images/projects/stopwatch/screen3.jpg"
    //             ],
    //             technologies: ["Swift", "UIKit", "Core Data", "AVFoundation"],
    //             duration: "1 month",
    //             status: "Completed",
    //             role: "iOS Developer",
    //             features: [
    //                 "High-precision timing with millisecond accuracy",
    //                 "Lap time recording and analysis",
    //                 "Multiple simultaneous timers",
    //                 "Audio alerts and vibration feedback",
    //                 "Time history with statistics",
    //                 "Export timing data to CSV format"
    //             ],
    //             demoUrl: "https://stopwatch-demo.com",
    //             githubUrl: "https://github.com/siddharthdave/stopwatch"
    //         },
    //         {
    //             id: "pdf-combiner",
    //             name: "PDF Combiner",
    //             category: "Productivity & Documents",
    //             summary: "Document management app for merging and organizing PDFs",
    //             description: "PDF Combiner is a comprehensive document management tool for merging, splitting, and organizing PDF files. Built with Swift and PDFKit, it provides intuitive document manipulation with cloud storage integration and batch processing.",
    //             thumbnail: "/images/projects/pdf-combiner/thumbnail.jpg",
    //             images: [
    //                 "/images/projects/pdf-combiner/screen1.jpg",
    //                 "/images/projects/pdf-combiner/screen2.jpg",
    //                 "/images/projects/pdf-combiner/screen3.jpg"
    //             ],
    //             technologies: ["Swift", "UIKit", "PDFKit", "CloudKit", "Document Provider"],
    //             duration: "3 months",
    //             status: "App Store Review",
    //             role: "iOS Developer",
    //             features: [
    //                 "Merge multiple PDFs into single document",
    //                 "Split PDFs into separate pages or sections",
    //                 "Reorder and organize PDF pages",
    //                 "Cloud storage integration (iCloud, Dropbox)",
    //                 "Batch processing for multiple documents",
    //                 "Password protection and security features"
    //             ],
    //             demoUrl: null,
    //             githubUrl: "https://github.com/siddharthdave/pdf-combiner"
    //         }
    //     ]

    // },
    projects: {
        title: "My Projects",
        subtitle: "A categorized showcase of my work",
        // Each category includes subcategories, each of which receives relevant projects
        categories: [
            {
                id: "swift",
                name: "Swift",
                subCategories: [
                    {
                        id: "ios-apps",
                        name: "iOS Apps",
                        projects: [
                            {
                                id: "music-nest",
                                name: "Music Nest",
                                subCategory: "iOS Apps",
                                category: "Swift",
                                summary: "A comprehensive music streaming app built with Swift and Core Data",
                                description: "Music Nest is a feature-rich music streaming application...",
                                thumbnail: "/images/projects/music-nest/thumbnail.jpg",
                                images: [
                                    "/images/projects/MusicNest/Screen1.jpg",
                                    // ...more
                                ],
                                technologies: ["Swift", "UIKit", "Core Data", "AVFoundation"],
                                duration: "4 months",
                                status: "Completed",
                                role: "Lead iOS Developer",
                                features: [
                                    "Music streaming and offline downloads",
                                    "Custom playlist creation and management",
                                    // ...
                                ],
                                demoUrl: "https://apps.apple.com/music-nest",
                                githubUrl: "https://github.com/siddharthdave/music-nest"
                            },
                            {
                                id: "music-nest",
                                name: "Music Nest",
                                category: "Music & Entertainment",
                                summary: "A comprehensive music streaming app built with Swift and Core Data",
                                description: "Music Nest is a feature-rich music streaming application that provides users with an intuitive interface to discover, organize, and play their favorite tracks. Built using Swift and UIKit, it offers seamless playlist management, offline downloads, and social sharing features.",
                                thumbnail: "/images/projects/music-nest/thumbnail.jpg",
                                images: [
                                    "/images/projects/MusicNest/Screen1.jpg",
                                    "/images/projects/MusicNest/Screen2.jpg",
                                    "/images/projects/MusicNest/Screen3.jpg",
                                    "/images/projects/MusicNest/Screen4.jpg",
                                    "/images/projects/MusicNest/Screen5.jpg",
                                    "/images/projects/MusicNest/Screen6.jpg",
                                    "/images/projects/MusicNest/Screen7.jpg",
                                    "/images/projects/MusicNest/Screen8.jpg",
                                    "/images/projects/MusicNest/Screen9.jpg",
                                    "/images/projects/MusicNest/Screen10.jpg",
                                    "/images/projects/MusicNest/Screen11.jpg",
                                    "/images/projects/MusicNest/Screen12.jpg",
                                    "/images/projects/MusicNest/Screen13.jpg",
                                    "/images/projects/MusicNest/Screen14.jpg",
                                    "/images/projects/MusicNest/Screen15.jpg",
                                    "/images/projects/MusicNest/Screen16.jpg",
                                    "/images/projects/MusicNest/Screen17.jpg",
                                    "/images/projects/MusicNest/Screen18.jpg",
                                    "/images/projects/MusicNest/Screen19.jpg",
                                    "/images/projects/MusicNest/Screen20.jpg",
                                    "/images/projects/MusicNest/Screen21.jpg",
                                    "/images/projects/MusicNest/Screen22.jpg",
                                    "/images/projects/MusicNest/Screen23.jpg",
                                    "/images/projects/MusicNest/Screen24.jpg",
                                    "/images/projects/MusicNest/Screen25.jpg"
                                ],
                                technologies: ["Swift", "UIKit", "Core Data", "AVFoundation"],
                                duration: "4 months",
                                status: "Completed",
                                role: "Lead iOS Developer",
                                features: [
                                    "Music streaming and offline downloads",
                                    "Custom playlist creation and management",
                                    "Social sharing and friend recommendations",
                                    "Dark mode and customizable themes",
                                    "Audio equalizer and sound effects",
                                    "Background playback and lock screen controls"
                                ],
                                demoUrl: "https://apps.apple.com/music-nest",
                                githubUrl: "https://github.com/siddharthdave/music-nest"
                            },
                            {
                                id: "chatter-box",
                                name: "Chatter Box",
                                category: "Social & Communication",
                                summary: "Real-time messaging app with advanced chat features",
                                description: "Chatter Box is a modern messaging application built with Swift and UIKit. It provides real-time communication with features like group chats, media sharing, message encryption, and custom chat themes for an engaging user experience.",
                                thumbnail: "/images/projects/chatter-box/thumbnail.jpg",
                                images: [
                                    "/images/projects/chatter-box/screen1.jpg",
                                    "/images/projects/chatter-box/screen2.jpg",
                                    "/images/projects/chatter-box/screen3.jpg"
                                ],
                                technologies: ["Swift", "UIKit", "Firebase", "Push Notifications"],
                                duration: "3 months",
                                status: "In Development",
                                role: "iOS Developer",
                                features: [
                                    "Real-time messaging with Socket.IO",
                                    "Group chats and broadcast messages",
                                    "Media sharing (photos, videos, documents)",
                                    "End-to-end message encryption",
                                    "Custom chat themes and wallpapers",
                                    "Voice messages and video calls"
                                ],
                                demoUrl: "https://chatterbox-demo.netlify.app",
                                githubUrl: "https://github.com/siddharthdave/chatter-box"
                            },
                            {
                                id: "photo-heaven",
                                name: "Photo Heaven",
                                category: "Photography & Social",
                                summary: "Social photo sharing platform with advanced editing tools",
                                description: "Photo Heaven is a comprehensive photo sharing platform that combines social networking with powerful editing capabilities. Built with Swift and UIKit, it offers professional-grade filters, community features, and seamless sharing across platforms.",
                                thumbnail: "/images/projects/photo-heaven/thumbnail.jpg",
                                images: [
                                    "/images/projects/photo-heaven/screen1.jpg",
                                    "/images/projects/photo-heaven/screen2.jpg",
                                    "/images/projects/photo-heaven/screen3.jpg"
                                ],
                                technologies: ["Swift", "UIKit", "Core Image", "CloudKit"],
                                duration: "5 months",
                                status: "Beta Testing",
                                role: "Lead Developer",
                                features: [
                                    "Advanced photo editing with filters and effects",
                                    "Social feed with likes, comments, and shares",
                                    "Professional camera controls and RAW support",
                                    "Community challenges and photography contests",
                                    "Portfolio creation and showcase galleries",
                                    "Cross-platform sharing and export options"
                                ],
                                demoUrl: "https://photo-heaven-demo.com",
                                githubUrl: "https://github.com/siddharthdave/photo-heaven"
                            },
                            {
                                id: "tier-list",
                                name: "Tier List",
                                category: "Productivity & Tools",
                                summary: "Interactive ranking and tier list creation app",
                                description: "Tier List is an intuitive app for creating custom ranking systems and tier lists for any topic. Built with Swift and UIKit, it provides drag-and-drop functionality, customizable tiers, and sharing capabilities for personal or collaborative ranking projects.",
                                thumbnail: "/images/projects/tier-list/thumbnail.jpg",
                                images: [
                                    "/images/projects/tier-list/screen1.jpg",
                                    "/images/projects/tier-list/screen2.jpg",
                                    "/images/projects/tier-list/screen3.jpg"
                                ],
                                technologies: ["Swift", "UIKit", "Core Data", "CloudKit"],
                                duration: "2 months",
                                status: "Completed",
                                role: "iOS Developer",
                                features: [
                                    "Drag-and-drop tier list creation",
                                    "Customizable tier colors and labels",
                                    "Import images from gallery or camera",
                                    "Save and share tier lists with friends",
                                    "Template library for popular categories",
                                    "Export as image or PDF formats"
                                ],
                                demoUrl: null,
                                githubUrl: "https://github.com/siddharthdave/tier-list"
                            },
                            {
                                id: "gesture-masters",
                                name: "GestureMasters",
                                category: "Accessibility & Innovation",
                                summary: "Hand gesture recognition app using machine learning",
                                description: "GestureMasters leverages Core ML and Vision frameworks to recognize and interpret hand gestures in real-time. Built with Swift and advanced ML models, it provides accessible interaction methods and gesture-based controls for various applications.",
                                thumbnail: "/images/projects/gesture-masters/thumbnail.jpg",
                                images: [
                                    "/images/projects/gesture-masters/screen1.jpg",
                                    "/images/projects/gesture-masters/screen2.jpg",
                                    "/images/projects/gesture-masters/screen3.jpg"
                                ],
                                technologies: ["Swift", "UIKit", "Core ML", "Vision", "AVFoundation"],
                                duration: "4 months",
                                status: "Completed",
                                role: "iOS Developer",
                                features: [
                                    "Real-time hand gesture recognition",
                                    "Custom gesture training and learning",
                                    "Accessibility features for motor impairments",
                                    "Integration with system controls",
                                    "Gesture library and preset commands",
                                    "Performance analytics and accuracy tracking"
                                ],
                                demoUrl: "https://gesture-masters-demo.com",
                                githubUrl: "https://github.com/siddharthdave/gesture-masters"
                            },
                            {
                                id: "weather-app-swiftui",
                                name: "Weather App SwiftUI",
                                category: "Utility & Lifestyle",
                                summary: "Modern weather app built entirely with SwiftUI",
                                description: "A beautifully designed weather application showcasing SwiftUI's capabilities. Features real-time weather data, interactive animations, and location-based forecasts with a clean, modern interface that adapts to different weather conditions.",
                                thumbnail: "/images/projects/weather-app/thumbnail.jpg",
                                images: [
                                    "/images/projects/weather-app/screen1.jpg",
                                    "/images/projects/weather-app/screen2.jpg",
                                    "/images/projects/weather-app/screen3.jpg"
                                ],
                                technologies: ["Swift", "SwiftUI", "Core Location", "WeatherKit"],
                                duration: "1.5 months",
                                status: "Completed",
                                role: "iOS Developer",
                                features: [
                                    "Real-time weather data and forecasts",
                                    "Location-based weather detection",
                                    "Interactive weather animations",
                                    "7-day weather forecast with hourly details",
                                    "Weather alerts and notifications",
                                    "Multiple location management"
                                ],
                                demoUrl: "https://weather-swiftui-demo.com",
                                githubUrl: "https://github.com/siddharthdave/weather-app-swiftui"
                            },
                            {
                                id: "streak-app",
                                name: "Streak App",
                                category: "Productivity & Habits",
                                summary: "Habit tracking app with streak counting and motivation",
                                description: "Streak App helps users build and maintain positive habits through visual tracking, streak counting, and motivational features. Built with Swift and UIKit, it provides customizable habits, progress analytics, and reminder systems.",
                                thumbnail: "/images/projects/streak-app/thumbnail.jpg",
                                images: [
                                    "/images/projects/streak-app/screen1.jpg",
                                    "/images/projects/streak-app/screen2.jpg",
                                    "/images/projects/streak-app/screen3.jpg"
                                ],
                                technologies: ["Swift", "UIKit", "Core Data", "UserNotifications"],
                                duration: "2.5 months",
                                status: "App Store Review",
                                role: "iOS Developer",
                                features: [
                                    "Custom habit creation and tracking",
                                    "Visual streak counters and progress bars",
                                    "Daily reminders and notifications",
                                    "Progress analytics and insights",
                                    "Achievement badges and milestones",
                                    "Data export and backup functionality"
                                ],
                                demoUrl: null,
                                githubUrl: "https://github.com/siddharthdave/streak-app"
                            },
                            {
                                id: "glycemic",
                                name: "Glycemic",
                                category: "Health & Fitness",
                                summary: "Blood glucose tracking app for diabetes management",
                                description: "Glycemic is a comprehensive diabetes management app built with Swift and HealthKit integration. It helps users track blood glucose levels, manage medication schedules, and monitor dietary habits with detailed analytics and health insights.",
                                thumbnail: "/images/projects/glycemic/thumbnail.jpg",
                                images: [
                                    "/images/projects/glycemic/screen1.jpg",
                                    "/images/projects/glycemic/screen2.jpg",
                                    "/images/projects/glycemic/screen3.jpg"
                                ],
                                technologies: ["Swift", "UIKit", "HealthKit", "Core Data", "Charts"],
                                duration: "3.5 months",
                                status: "Beta Testing",
                                role: "Lead iOS Developer",
                                features: [
                                    "Blood glucose level logging and tracking",
                                    "Medication reminders and schedules",
                                    "Food diary with carb counting",
                                    "HealthKit integration for comprehensive data",
                                    "Trend analysis and glucose pattern insights",
                                    "Doctor report generation and sharing"
                                ],
                                demoUrl: "https://glycemic-demo.com",
                                githubUrl: "https://github.com/siddharthdave/glycemic"
                            },
                            {
                                id: "country-app",
                                name: "Country App",
                                category: "Education & Reference",
                                summary: "Comprehensive country information and geography learning app",
                                description: "Country App is an educational application providing detailed information about world countries. Built with Swift and UIKit, it features interactive maps, country statistics, cultural information, and geography learning tools.",
                                thumbnail: "/images/projects/country-app/thumbnail.jpg",
                                images: [
                                    "/images/projects/country-app/screen1.jpg",
                                    "/images/projects/country-app/screen2.jpg",
                                    "/images/projects/country-app/screen3.jpg"
                                ],
                                technologies: ["Swift", "UIKit", "MapKit", "Core Data"],
                                duration: "2 months",
                                status: "Completed",
                                role: "iOS Developer",
                                features: [
                                    "Comprehensive country database with statistics",
                                    "Interactive world map with country selection",
                                    "Cultural information and historical facts",
                                    "Flag recognition quiz and learning games",
                                    "Favorites and bookmarking system",
                                    "Offline mode for limited connectivity"
                                ],
                                demoUrl: "https://country-app-demo.com",
                                githubUrl: "https://github.com/siddharthdave/country-app"
                            },
                            {
                                id: "caloric-tracking-app",
                                name: "Caloric Tracking App",
                                category: "Health & Fitness",
                                summary: "Comprehensive calorie counting and nutrition tracking app",
                                description: "A feature-rich nutrition tracking application that helps users monitor their daily caloric intake and nutritional goals. Built with Swift and HealthKit, it provides barcode scanning, meal planning, and detailed nutritional analysis.",
                                thumbnail: "/images/projects/caloric-app/thumbnail.jpg",
                                images: [
                                    "/images/projects/caloric-app/screen1.jpg",
                                    "/images/projects/caloric-app/screen2.jpg",
                                    "/images/projects/caloric-app/screen3.jpg"
                                ],
                                technologies: ["Swift", "UIKit", "HealthKit", "Vision", "Core Data"],
                                duration: "4 months",
                                status: "In Development",
                                role: "Lead iOS Developer",
                                features: [
                                    "Barcode scanning for quick food logging",
                                    "Extensive food database with nutritional info",
                                    "Daily calorie and macro tracking",
                                    "Meal planning and recipe suggestions",
                                    "HealthKit integration for fitness data",
                                    "Progress tracking with visual charts and insights"
                                ],
                                demoUrl: null,
                                githubUrl: "https://github.com/siddharthdave/caloric-tracking"
                            },
                            {
                                id: "calculator",
                                name: "Calculator",
                                category: "Utility & Productivity",
                                summary: "Advanced scientific calculator with history and themes",
                                description: "A sophisticated calculator app featuring both basic and scientific operations. Built with Swift and UIKit, it includes calculation history, multiple themes, and advanced mathematical functions for students and professionals.",
                                thumbnail: "/images/projects/calculator/thumbnail.jpg",
                                images: [
                                    "/images/projects/calculator/screen1.jpg",
                                    "/images/projects/calculator/screen2.jpg",
                                    "/images/projects/calculator/screen3.jpg"
                                ],
                                technologies: ["Swift", "UIKit", "Core Data"],
                                duration: "1 month",
                                status: "Completed",
                                role: "iOS Developer",
                                features: [
                                    "Basic and scientific calculation modes",
                                    "Calculation history with search functionality",
                                    "Multiple themes and customization options",
                                    "Memory functions and variable storage",
                                    "Unit conversion tools",
                                    "Export calculations and share results"
                                ],
                                demoUrl: "https://calculator-demo.com",
                                githubUrl: "https://github.com/siddharthdave/calculator"
                            },
                            {
                                id: "airbnb-clone",
                                name: "Airbnb Clone",
                                category: "Travel & Lifestyle",
                                summary: "Property rental app inspired by Airbnb with booking features",
                                description: "A complete property rental application replicating core Airbnb functionality. Built with Swift and UIKit, it features property listings, booking management, user profiles, and integrated payment processing for a seamless rental experience.",
                                thumbnail: "/images/projects/airbnb-clone/thumbnail.jpg",
                                images: [
                                    "/images/projects/airbnb-clone/screen1.jpg",
                                    "/images/projects/airbnb-clone/screen2.jpg",
                                    "/images/projects/airbnb-clone/screen3.jpg"
                                ],
                                technologies: ["Swift", "UIKit", "MapKit", "CloudKit", "In-App Purchase"],
                                duration: "6 months",
                                status: "Beta Testing",
                                role: "Lead Developer",
                                features: [
                                    "Property search with filters and map integration",
                                    "User authentication and profile management",
                                    "Booking system with calendar availability",
                                    "In-app messaging between hosts and guests",
                                    "Payment processing and booking confirmation",
                                    "Review and rating system for properties"
                                ],
                                demoUrl: "https://airbnb-clone-demo.com",
                                githubUrl: "https://github.com/siddharthdave/airbnb-clone"
                            },
                            {
                                id: "otp-based-app",
                                name: "OTP Based App",
                                category: "Security & Authentication",
                                summary: "Secure authentication app with OTP generation and verification",
                                description: "A security-focused application demonstrating OTP (One-Time Password) implementation for secure user authentication. Built with Swift and UIKit, it features multi-factor authentication, secure token generation, and biometric verification.",
                                thumbnail: "/images/projects/otp-app/thumbnail.jpg",
                                images: [
                                    "/images/projects/otp-app/screen1.jpg",
                                    "/images/projects/otp-app/screen2.jpg",
                                    "/images/projects/otp-app/screen3.jpg"
                                ],
                                technologies: ["Swift", "UIKit", "Security", "LocalAuthentication", "CryptoKit"],
                                duration: "2 months",
                                status: "Completed",
                                role: "iOS Developer",
                                features: [
                                    "Time-based OTP generation (TOTP)",
                                    "SMS and email OTP verification",
                                    "Biometric authentication (Face ID/Touch ID)",
                                    "Secure token storage with Keychain",
                                    "Multi-account OTP management",
                                    "Backup and recovery options for accounts"
                                ],
                                demoUrl: null,
                                githubUrl: "https://github.com/siddharthdave/otp-based-app"
                            },
                            {
                                id: "stopwatch",
                                name: "Stop Watch",
                                category: "Utility & Sports",
                                summary: "Professional stopwatch with lap timing and precision controls",
                                description: "A high-precision stopwatch application designed for sports and professional timing needs. Built with Swift and UIKit, it provides accurate timing, lap recording, and detailed time analysis with export capabilities.",
                                thumbnail: "/images/projects/stopwatch/thumbnail.jpg",
                                images: [
                                    "/images/projects/stopwatch/screen1.jpg",
                                    "/images/projects/stopwatch/screen2.jpg",
                                    "/images/projects/stopwatch/screen3.jpg"
                                ],
                                technologies: ["Swift", "UIKit", "Core Data", "AVFoundation"],
                                duration: "1 month",
                                status: "Completed",
                                role: "iOS Developer",
                                features: [
                                    "High-precision timing with millisecond accuracy",
                                    "Lap time recording and analysis",
                                    "Multiple simultaneous timers",
                                    "Audio alerts and vibration feedback",
                                    "Time history with statistics",
                                    "Export timing data to CSV format"
                                ],
                                demoUrl: "https://stopwatch-demo.com",
                                githubUrl: "https://github.com/siddharthdave/stopwatch"
                            },
                            {
                                id: "pdf-combiner",
                                name: "PDF Combiner",
                                category: "Productivity & Documents",
                                summary: "Document management app for merging and organizing PDFs",
                                description: "PDF Combiner is a comprehensive document management tool for merging, splitting, and organizing PDF files. Built with Swift and PDFKit, it provides intuitive document manipulation with cloud storage integration and batch processing.",
                                thumbnail: "/images/projects/pdf-combiner/thumbnail.jpg",
                                images: [
                                    "/images/projects/pdf-combiner/screen1.jpg",
                                    "/images/projects/pdf-combiner/screen2.jpg",
                                    "/images/projects/pdf-combiner/screen3.jpg"
                                ],
                                technologies: ["Swift", "UIKit", "PDFKit", "CloudKit", "Document Provider"],
                                duration: "3 months",
                                status: "App Store Review",
                                role: "iOS Developer",
                                features: [
                                    "Merge multiple PDFs into single document",
                                    "Split PDFs into separate pages or sections",
                                    "Reorder and organize PDF pages",
                                    "Cloud storage integration (iCloud, Dropbox)",
                                    "Batch processing for multiple documents",
                                    "Password protection and security features"
                                ],
                                demoUrl: null,
                                githubUrl: "https://github.com/siddharthdave/pdf-combiner"
                            }
                        ]
                    }
                    // ...other Swift sub-categories (e.g., "Frameworks")
                ]
            },
            {
                id: "tableau",
                name: "Tableau",
                subCategories: [
                    {
                        id: "dashboards",
                        name: "Dashboards",
                        projects: [
                            {
                                id: "sales-dashboard",
                                name: "Sales Insights Dashboard",
                                subCategory: "Dashboards",
                                category: "Tableau",
                                summary: "Interactive sales analytics dashboard",
                                description: "This dashboard visualizes multi-year sales data...",
                                thumbnail: "/images/projects/tableau/sales-thumb.jpg",
                                images: ["/images/projects/tableau/sales-1.jpg"],
                                technologies: ["Tableau", "SQL"],
                                duration: "2 months",
                                status: "Completed",
                                role: "Data Viz Developer",
                                features: [
                                    "Drill-down charts",
                                    "Dynamic filters"
                                ],
                                demoUrl: "https://public.tableau.com/views/sales-insights",
                                githubUrl: ""
                            }
                            // ...other Tableau projects
                        ]
                    },
                    // ...other Tableau sub-categories
                ]
            },
            // ...other categories (e.g., "React", "Node.js")
        ]
    },
    contact: {
        title: "Get In Touch",
        subtitle: "Have a project in mind or want to discuss opportunities? Let's connect!",

        methods: [
            {
                icon: "📧",
                label: "Email",
                value: "davesiddharth76@gmail.com"
            },
            {
                icon: "📱",
                label: "Phone",
                value: "+91 9313142820"
            },
            {
                icon: "📍",
                label: "Location",
                value: "Ahmedabad, India"
            }
        ],

        social: [
            {
                icon: "/images/github.png",
                url: "https://github.com/SiddharthDave-Dev"
            },
            {
                icon: "/images/linkedin.png",
                url: "https://www.linkedin.com/in/davesiddharth23"
            },
            {
                icon: "/images/twitter.png",
                url: "https://x.com/Siddharth012304"
            },
            {
                icon: "/images/tableau-icon.png",
                url: "https://public.tableau.com/app/profile/siddharth.dave2404/vizzes"
            }
        ]
    }
};
