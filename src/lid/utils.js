import project1 from "../assets/image/musicwebsite.png";
import project2 from "../assets/image/moviewebsite.png";
import project3 from "../assets/image/portfoliowebsite.png";
import project4 from "../assets/image/Landingpage.png";
import project5 from "../assets/image/Myshop.png";
import project6 from "../assets/image/homepageblogWebApp.png";
// export const projects = [
//     {
//         id: 1,
//         title: "MyShop",
//         Description:
//             "MyShop is a modern and responsive React-based E-commerce web application built to demonstrate real-world frontend development skills. The project features dynamic routing, category-based product filtering through interactive home page images, centralized state management using Redux Toolkit, and complete cart and order functionality.",
//         image: project5,
//         tags: [
//             "React",
//             "Redux Toolkit",
//             "React Router",
//             "Tailwind CSS",
//             "Responsive UI",
//         ],
//         demoUrl: "https://myshopdev.vercel.app/",
//         gitUrl: "https://github.com/ajitdevv/myshop",
//     },
//     {
//         id: 6,
//         title: "Blog WebApp",
//         Description:
//             "A production-ready Blog Application built using Next.js (App Router) with Server-Side Rendering (SSR). The platform allows users to create, edit, and manage blogs through a structured dashboard with full CRUD functionality. It includes rich text formatting (headings, lists, images, links, bold/italic styling), dynamic routing for blog detail pages, and proper SEO implementation using metadata optimization. The application follows clean UI principles with TailwindCSS and is deployed for live access.",
//         image: project6,
//         tags: [
//             "Next.js",
//             "React",
//             "API Route Handlers",
//             "Rich Text Editor Integration",
//             "Tailwind CSS",
//             "Responsive UI",
//             "Vercel Deployment",
//         ],
//         demoUrl: "https://blog-webapp-mu-eight.vercel.app/",
//         gitUrl: "https://github.com/ajitdevv/blog-webapp",
//     },

//     {
//         id: 2,
//         title: "Movie Day",
//         Description:
//             "Built a responsive Movie Web App with a clean UI, allowing users to browse, search, and explore movie details. Integrated a real-time Movies API for dynamic content. Optimized for mobile and desktop, and deployed on Vercel for fast, reliable performance.",
//         image: project2,
//         tags: ["React.js ", "Tailwind CSS ", "API ", "Vercel"],
//         demoUrl: "https://movie-app-nine-opal.vercel.app/",
//         gitUrl: "https://github.com/ajitdevv/movie-app",
//     },
//     {
//         id: 3,
//         title: "Marketing Landing Page",
//         Description:
//             "Designed and developed a modern, conversion-focused marketing landing page with a clean UI and responsive layout. Built reusable sections such as hero, features, testimonials, and call-to-action using React.js and Tailwind CSS. Optimized for performance and deployed to production on Vercel.",
//         image: project4,
//         tags: ["React.js ", "Tailwind CSS ", "Responsive UI ", "Vercel"],
//         demoUrl: "https://morden-landing-page-psi.vercel.app/",
//         gitUrl: "https://github.com/ajitdevv/MordenLandingPage",
//     },
//     {
//         id: 4,
//         title: "Music Night",
//         Description:
//             "Designed and developed a clean and responsive Music Website UI that allows users to seamlessly explore various music categories. The interface focuses on a modern layout, smooth interactions, and mobile-first responsiveness to ensure an optimized experience across all devices.",
//         image: project1,
//         tags: ["HTML ", "CSS ", "JavaScript ", "Responsive UI "],
//         demoUrl: "https://ajitdevv.github.io/music-website/",
//         gitUrl: "https://github.com/ajitdevv/music-website",
//     },
//     {
//         id: 5,
//         title: "Developer Portfolio",
//         Description:
//             "Architected and developed a modern, production-ready personal portfolio to showcase frontend projects and skills. Built with React.js and Tailwind CSS using a component-driven approach, featuring responsive layouts, dark/light theme support, smooth animations, and optimized performance. Deployed to Vercel with a focus on clean UI, accessibility, and fast load times.",
//         image: project3,
//         tags: [
//             "React.js ",
//             "Tailwind CSS ",
//             "Responsive UI ",
//             "Dark Mode ",
//             "Vercel",
//         ],
//         demoUrl: "https://ajit-portfolio-rust.vercel.app/",
//         gitUrl: "https://github.com/ajitdevv/portfolio",
//     },
// ];









export const projects = [
    {
        id: 1,
        title: "Blog WebApp",
        category: "Full Stack",
        level: "Advanced",
        featured: true,

        description:
            "Production-ready Blog Application built using Next.js (App Router) with SSR, SEO optimization, and full CRUD functionality through a structured dashboard.",

        highlights: [
            "Server-Side Rendering (SSR)",
            "SEO optimized metadata",
            "Rich Text Editor integration",
            "Full CRUD dashboard",
            "Dynamic routing"
        ],

        features: [
            "Create, Edit, Delete Blogs",
            "Rich text formatting",
            "Dynamic blog pages",
            "SEO metadata handling"
        ],

        stack: [
            "Next.js",
            "React",
            "Tailwind CSS",
            "Next.js API Routes",
            "Vercel"
        ],

        learning:
            "Deep understanding of SSR, SEO optimization, metadata handling, and structured dashboard architecture in Next.js App Router.",

        challenges:
            "Handling rich text editor state management with SSR and maintaining SEO-friendly dynamic routes.",

        image: project6,
        screenshots: [project6],

        tags: ["Next.js", "SSR", "SEO", "Tailwind", "Vercel"],

        demoUrl: "https://blog-webapp-mu-eight.vercel.app/",
        gitUrl: "https://github.com/ajitdevv/blog-webapp",

        status: "Live",
        createdAt: "2026-02-20T22:30:00"
    },

    {
        id: 2,
        title: "MyShop",
        category: "Frontend",
        level: "Advanced",
        featured: true,

        description:
            "Modern React-based E-commerce application with dynamic routing, category filtering, centralized state management, and complete cart system.",

        highlights: [
            "Redux Toolkit state management",
            "Dynamic product filtering",
            "Cart & order functionality",
            "Responsive UI"
        ],

        features: [
            "Add to cart",
            "Remove from cart",
            "Category-based filtering",
            "Product detail pages"
        ],

        stack: [
            "React",
            "Redux Toolkit",
            "Tailwind CSS",
            "Vercel"
        ],

        learning:
            "Improved understanding of scalable state management and reusable component architecture.",

        challenges:
            "Managing global state consistency across multiple pages using Redux Toolkit.",

        image: project5,
        screenshots: [project5],

        tags: ["React", "Redux Toolkit", "Tailwind", "Vercel"],

        demoUrl: "https://myshopdev.vercel.app/",
        gitUrl: "https://github.com/ajitdevv/myshop",

        status: "Live",
        createdAt: "2026-01-28T21:15:00"
    },

    {
        id: 3,
        title: "Developer Portfolio",
        category: "Frontend",
        level: "Intermediate",
        featured: false,

        description:
            "Modern personal portfolio showcasing frontend projects with dark/light mode support and smooth animations.",

        highlights: [
            "Dark/Light mode",
            "Reusable components",
            "Responsive design",
            "Optimized performance"
        ],

        stack: [
            "React",
            "Tailwind CSS",
            "Vercel"
        ],

        learning:
            "Improved UI/UX structuring and responsive design implementation.",

        challenges:
            "Creating scalable component structure and maintaining design consistency.",

        image: project3,
        screenshots: [project3],

        tags: ["React", "Tailwind", "Dark Mode"],

        demoUrl: "https://ajit-portfolio-rust.vercel.app/",
        gitUrl: "https://github.com/ajitdevv/portfolio",

        status: "Live",
        createdAt: "2026-01-10T20:00:00"
    },

    {
        id: 4,
        title: "Movie Day",
        category: "Frontend",
        level: "Intermediate",
        featured: false,

        description:
            "Responsive movie web app with real-time API integration for browsing and searching movies.",

        highlights: [
            "API integration",
            "Search functionality",
            "Responsive UI"
        ],

        stack: ["React",
            "Tailwind CSS",
            "Movie API",
            "Vercel"]
        ,

        learning:
            "Handling asynchronous API data and improving loading states management.",

        image: project2,
        screenshots: [project2],

        tags: ["React", "API", "Tailwind"],

        demoUrl: "https://movie-app-nine-opal.vercel.app/",
        gitUrl: "https://github.com/ajitdevv/movie-app",

        status: "Live",
        createdAt: "2025-12-15T19:40:00"
    },

    {
        id: 5,
        title: "Marketing Landing Page",
        category: "UI / Frontend",
        level: "Intermediate",
        featured: false,

        description:
            "Modern marketing landing page designed with reusable UI sections and conversion-focused layout.",

        highlights: [
            "Hero section",
            "Feature blocks",
            "Testimonials",
            "Call-to-action"
        ],

        stack: ["React", "Tailwind CSS", "Vercel"],

        image: project4,
        screenshots: [project4],

        tags: ["React", "Tailwind"],

        demoUrl: "https://morden-landing-page-psi.vercel.app/",
        gitUrl: "https://github.com/ajitdevv/MordenLandingPage",

        status: "Live",
        createdAt: "2025-11-30T18:20:00"
    },

    {
        id: 6,
        title: "Music Night",
        category: "Frontend",
        level: "Beginner",
        featured: false,

        description:
            "Clean and responsive music website UI built using HTML, CSS, and JavaScript.",

        highlights: [
            "Responsive layout",
            "Clean UI structure",
            "Mobile-first approach"
        ],

        stack: ["HTML", "CSS", "JavaScript", "GitHub Pages"]
        ,

        image: project1,
        screenshots: [project1],

        tags: ["HTML", "CSS", "JavaScript"],

        demoUrl: "https://ajitdevv.github.io/music-website/",
        gitUrl: "https://github.com/ajitdevv/music-website",

        status: "Live",
        createdAt: "2025-10-12T17:00:00"
    }
];