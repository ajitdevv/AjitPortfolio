import Musicwebsite from "../assets/image/musicwebsite.png";
import Moviewbsite from "../assets/image/moviewebsite.png";
import Portfoliowebsite from "../assets/image/portfoliowebsite.png";
// import Landingpage from "../assets/image/Landingpage.png";
import MyShopwebapp from "../assets/image/Myshop.png";
import BlogwebApp from "../assets/image/homepageblogWebApp.png";
import AdminDashboardImage from "../assets/image/AdminDashboard.png"
export const projects = [
    {
        id: 20,
        title: "Admin Dashboard System",
        category: "Full Stack",
        level: "Advanced",
        featured: true,

        description:
            "Production-ready Admin Dashboard built using React with real-time data handling, filtering, pagination, authentication, and complete CRUD operations for managing deals, reports, and contacts.",

        highlights: [
            "Authentication with cookies (secure login)",
            "Advanced filtering & sorting system",
            "Pagination for large datasets",
            "Reusable component architecture",
            "Real-time UI feedback (loading, error, retry)",
            "Protected routes with role-based access"
        ],

        features: [
            "Manage Deals (Create, View, Delete)",
            "Reports filtering (type, status, priority, user)",
            "Contacts management with sorting",
            "Search + filter combination",
            "Toast notifications for actions",
            "Retry system on API failure",
            "Skeleton loaders for better UX"
        ],

        stack: [
            "React",
            "Tailwind CSS",
            "Node.js",
            "Express",
            "MongoDB",
            "Vercel"
        ],

        learning:
            "Learned real-world dashboard architecture, API integration, performance optimization using useMemo and React.memo, authentication flow using cookies, and scalable component design.",

        challenges:
            "Handling unnecessary re-renders in large lists, managing filter + pagination together, maintaining consistent API structure, and optimizing UX with loaders and error states.",

        image: AdminDashboardImage, 
        screenshots: [AdminDashboardImage],

        tags: ["React", "Dashboard", "CRUD", "Authentication", "Performance"],

        demoUrl: "https://admin-dashboard-rose-tau-43.vercel.app/",
        gitUrl: "https://github.com/ajitdevv/GoldenGlowBeautyParlour",  

        status: "Live",
        createdAt: "2026-03-30T10:00:00"
    },
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

        image: BlogwebApp,
        screenshots: [BlogwebApp],

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

        image: MyShopwebapp,
        screenshots: [MyShopwebapp],

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

        image: Portfoliowebsite,
        screenshots: [Portfoliowebsite],

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

        image: Moviewbsite,
        screenshots: [Moviewbsite],

        tags: ["React", "API", "Tailwind"],

        demoUrl: "https://movie-app-nine-opal.vercel.app/",
        gitUrl: "https://github.com/ajitdevv/movie-app",

        status: "Live",
        createdAt: "2025-12-15T19:40:00"
    },

    // {
    //     id: 5,
    //     title: "Marketing Landing Page",
    //     category: "UI / Frontend",
    //     level: "Intermediate",
    //     featured: false,

    //     description:
    //         "Modern marketing landing page designed with reusable UI sections and conversion-focused layout.",

    //     highlights: [
    //         "Hero section",
    //         "Feature blocks",
    //         "Testimonials",
    //         "Call-to-action"
    //     ],

    //     stack: ["React", "Tailwind CSS", "Vercel"],

    //     image: Landingpage,
    //     screenshots: [Landingpage],

    //     tags: ["React", "Tailwind"],

    //     demoUrl: "https://morden-landing-page-psi.vercel.app/",
    //     gitUrl: "https://github.com/ajitdevv/MordenLandingPage",

    //     status: "Live",
    //     createdAt: "2025-11-30T18:20:00"
    // },

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

        image: Musicwebsite,
        screenshots: [Musicwebsite],

        tags: ["HTML", "CSS", "JavaScript"],

        demoUrl: "https://ajitdevv.github.io/music-website/",
        gitUrl: "https://github.com/ajitdevv/music-website",

        status: "Live",
        createdAt: "2025-10-12T17:00:00"
    }
];