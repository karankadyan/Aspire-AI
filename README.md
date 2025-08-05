# AspireAI Career Coach

**An AI-powered full-stack project designed to enhance your resume and career prospects.** This application, named **AspireAI**, offers a range of features including an AI Resume Builder, mock interview preparation, and industry insights, all within a fully responsive and beautiful user interface.

## Features

*   **User Onboarding and Interactive Dashboard**: Upon logging in, users are presented with an onboarding page to select their industry (e.g., technology), sub-industry (e.g., software developer), years of experience, and skills (e.g., JavaScript, React, PostgreSQL, Node.js). This generates an interactive dashboard displaying in-demand skills and salary trends in their chosen industry, which is updated weekly. The dashboard shows market outlook, industry growth, job demand, top skills, and various job roles with minimum, median, and maximum salary ranges. Key industry trends and recommended skills are also displayed, with all data constantly updated every single week via a background cron job.
*   **AI Resume Builder**: This feature generates ATS (Applicant Tracking System) optimised content based on your industry and skills. It is fully customisable, supporting the addition of work experience, education, and projects, including links. Users can download their resume as a PDF. A notable "Improve with AI" button uses Gemini AI to generate complete, ATS-friendly descriptions with analytics for work experience. The complete resume is rendered in markdown format, which can be directly edited or saved to the database.
*   **Mock Interview Feature**: **AspireAI** provides role-specific questions to prepare for upcoming interviews. It displays performance over time, including average score, questions practiced, and latest score. Users can start new quizzes, which generate 10 questions using the Gemini API. After attempting a quiz, it displays the score and offers AI-generated improvement tips. For each question, it provides a summary of the user's answer, the correct answer, and an explanation. This data, including assessment results, is stored in the PostgreSQL database.
*   **Intelligent Cover Letter Generator**: This feature analyses job descriptions and creates tailored content accordingly. It allows users to create new cover letters by entering company name, job title, and job description, then generates a full cover letter in markdown format. (Note: The tutorial presents this as an assignment for the user to build, but its functionality is described).
*   **Professional and Modern User Interface**: The application boasts a professional and modern user interface, built using Next.js and Shadcn UI. It features beautiful scroll animations on the landing page and is fully responsive. Components from Shadcn UI, such as cards, accordions, dialogs, dropdown menus, and input fields, are used throughout.
*   **Industry Insights**: Provides detailed market outlook, industry growth, job demand, top skills, job roles with salary ranges (minimum, median, maximum), key industry trends, and recommended skills. This data is updated constantly, every single week, using a background cron job set up with Ingest.
*   **User Management**: Integrates **Clerk** for robust user authentication and management. It supports Google login, email, and password. Features include managing accounts, updating profiles (first name, last name, email addresses, profile picture), and security logs, offering production-grade features out of the box. Protected routes ensure that unauthenticated users are redirected to the sign-in page.
*   **Database Management**: Utilises **Neon (PostgreSQL)** as the relational database and **Prisma ORM** for efficient data management. Prisma simplifies database queries and is used for defining database models (User, IndustryInsight, Assessment, Resume, CoverLetter) and performing CRUD operations. User information, resume content (in markdown format), industry insights, and assessment results are all persistently stored.

## Technologies Used

*   **Frontend**:
    *   **Next.js**: The full-stack React framework used for building the application. It leverages App Router for routing and server components for improved performance and SEO.
    *   **React**: The JavaScript library for building user interfaces.
    *   **Shadcn UI**: A collection of beautifully designed, pre-built, and customisable components built on top of Tailwind CSS. This includes components like buttons, cards, accordions, alert dialogs, badges, dialogs, dropdown menus, inputs, labels, progress bars, radio groups, select components, Sonner (toasts), tabs, and text areas.
    *   **Tailwind CSS**: A utility-first CSS framework for rapid UI development and responsive design.
    *   **Recharts**: A charting library used for rendering data visualisations such as performance trends and salary range charts.
    *   **React Hook Form & Zod**: Used for robust form management and validation, ensuring adherence to industry standards.
    *   **`next-themes`**: For implementing light and dark modes.
    *   **`@uiw/react-md-editor`**: For rendering and editing markdown content, particularly for the resume builder.
    *   **`html2pdf.js`**: For generating PDF versions of the resume from markdown content.
    *   **`date-fns`**: A comprehensive library for date formatting and distance calculations.
    *   **`react-spinners`**: For displaying loading indicators.

*   **Backend / API**:
    *   **Clerk**: For comprehensive user authentication and management, handling login, sign-up, and protecting routes.
    *   **Neon (PostgreSQL)**: The relational database used to store application data.
    *   **Prisma ORM**: An object-relational mapper for interacting with the PostgreSQL database, simplifying database queries. It's used for defining database models (User, IndustryInsight, Assessment, Resume, CoverLetter) and performing CRUD operations.
    *   **Google Gemini API**: Used for AI functionalities such as generating interview questions, improvement tips, industry insights, and resume/cover letter content.
    *   **Ingest**: A service for managing background jobs, specifically for running cron jobs (e.g., updating industry insights weekly).
    *   **Next.js Server Actions**: For building server-side API endpoints directly within the application, offering a modern way to handle backend logic.

## Getting Started (Local Development)

To set up and run the **AspireAI** Career Coach locally, follow these steps:

1.  **Clone the Repository**: (Assuming you have access to the repository where this project's code resides.)
    ```bash
    git clone [repository-url]
    cd AspireAI
    ```
2.  **Initialise Next.js App**:
    ```bash
    npx create-next-app@latest .
    # Select 'No' for TypeScript, 'Yes' for ESLint, 'Yes' for Tailwind CSS, 'No' for SRC directory, 'Yes' for App Router, 'Yes' for TurboPack, 'No' for custom import alias.
    ```
3.  **Install Dependencies**:
    ```bash
    npm install
    # Additionally, install specific libraries not automatically included by create-next-app.
    npm install recharts date-fns react-spinners @uiw/react-md-editor html2pdf.js
    npm install react-hook-form zod @hookform/resolvers
    npm install @google/generative-ai
    npm install @clerk/nextjs @clerk/themes
    npm install injust
    npm install -D prisma
    ```
4.  **Initialise Shadcn UI**:
    ```bash
    npx shadcn-ui@latest init
    # When prompted, choose 'Yes' for base colour neutral, 'Yes' for CSS variables.
    # IMPORTANT: When asked "How would you like to proceed?", select 'use legacy peer deps' because of React 19 compatibility.
    ```
    Then, install the necessary Shadcn UI components:
    ```bash
    npx shadcn-ui@latest add accordion alert-dialog badge button card dialog dropdown-menu input label progress radio-group select sonner tabs textarea
    # Again, select 'use legacy peer deps' if prompted.
    # Overwrite 'button' if it already exists.
    ```
5.  **Set up Dark Mode**:
    ```bash
    npm install next-themes
    ```
6.  **Set up Clerk for Authentication**:
    *   Go to **[Clerk](https://clerk.com/)** and create a new application named `AspireAI`.
    *   Choose authentication types (e.g., Email, Google).
    *   You have already installed `@clerk/nextjs` in step 3.
7.  **Set up Neon PostgreSQL Database**:
    *   Go to **[Neon](https://neon.tech/)** and create a new project.
    *   Create a new role (e.g., `roadsidecoder`) and a database (e.g., `AspireAI`).
    *   Copy the **connection string**.
8.  **Set up Ingest for Background Jobs**:
    *   Go to **[Ingest](https://ingest.com/)** and sign in.
    *   You have already installed `injust` in step 3.
    *   Run `npx injust@latest dev` in a separate terminal to start the local Ingest server.
9.  **Configure Environment Variables (`.env`)**:
    Create a `.env` file in your project root and add the following, replacing placeholders with your actual keys and URLs:
    ```
    DATABASE_URL="YOUR_NEON_POSTGRES_CONNECTION_STRING"
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="YOUR_CLERK_PUBLISHABLE_KEY"
    CLERK_SECRET_KEY="YOUR_CLERK_SECRET_KEY"
    NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
    NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
    NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/onboarding
    NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/onboarding
    GEMINI_API_KEY="YOUR_GEMINI_API_KEY"
    ```
    *   **Clerk Keys**: Obtain these from your Clerk dashboard after creating an application.
    *   **Gemini API Key**: Obtain this from **[ai.google.dev](https://ai.google.dev/)**.
10. **Run Prisma Migrations**:
    ```bash
    npx prisma migrate dev --name create-models
    ```
    This command will push the database schema defined in `prisma/schema.prisma` to your Neon database.
11. **Run the Application**:
    ```bash
    npm run dev
    ```
    The application should now be running at `http://localhost:3000`.

## Deployment

The project can be deployed to Vercel.

1.  **Push to GitHub**:
    *   Ensure your `.env` file is excluded from Git (check `.gitignore` for `/.env`).
    *   Add a `postinstall` script to your `package.json` to run Prisma generate after deployment:
        ```json
        "scripts": {
            "postinstall": "prisma generate"
        }
        ```
       
    *   Initialise Git and push your code to a new GitHub repository (e.g., named `AspireAI`).
        ```bash
        git init
        git add .
        git commit -m "Initial commit for AspireAI Career Coach"
        git remote add origin [your-github-repo-url]
        git push -u origin master
        ```
       
2.  **Deploy on Vercel**:
    *   Go to **[Vercel](https://vercel.com/)** and import your GitHub repository as a new project.
    *   Add all the environment variables from your local `.env` file into Vercel's project settings (under "Environment Variables").
    *   Click **Deploy**.
3.  **Connect Ingest with Vercel**:
    *   After successful Vercel deployment, navigate to the Ingest deployment overview.
    *   Connect your Vercel account to Ingest and select your deployed **AspireAI** project.
    *   **Important**: Disable "Deployment Protection" in your Vercel project settings (under "Settings" -> "Deployment Protection") as it might block syncing with Ingest.
    *   In Ingest, sync your app by providing your Vercel deployment URL followed by `/api/ingest` (e.g., `https://aspireai-1.vercel.app/api/ingest`).
