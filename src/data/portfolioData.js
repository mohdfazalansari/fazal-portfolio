export const personalInfo = {
  name: "Mohammad Fazal",
  title: "Software Engineer",
  headline: "Building Backend Systems. Exploring AI. Growing into Full-Stack.",
  shortBio:
    "Building backend applications with Java & Spring Boot. Exploring AI and modern full-stack development.",
  coreStackSummary: "Java • Spring Boot • REST APIs • Databases",
  email: "mohdfazal.cs@gmail.com",
  github: "https://github.com/mohdfazalansari",
  githubUsername: "mohdfazalansari",
  linkedin: "https://linkedin.com/in/mohdfazal-sde",
  linkedinUsername: "mohdfazal-sde",
  location: "Indore, India",
  profileImage: "/images/profile.jpg",
};

export const aboutContent = {
  paragraphs: [
    "I’m a Computer Science & Engineering student at Medicaps University, graduating in 2027, with a primary focus on Java full-stack development.",
    "I enjoy building backend applications with Java and Spring Boot, designing REST APIs, working with databases, and implementing secure application architectures. I have also studied AI/ML concepts and am currently expanding into JavaScript, React and Spring AI.",
  ],
  education: {
    degree: "B.Tech — Computer Science & Engineering",
    institution: "Medicaps University",
    cgpa: "8.76 / 10",
    expected: "2027",
  },
};

export const experienceData = [
  {
    role: "Java Full Stack Virtual Internship",
    company: "EduSkills",
    period: "Oct 2025 – Dec 2025",
    description:
      "Covered Core Java, Spring Boot, REST API development, and relational database integration. Developed an Employee Leave Management System with leave application submission, admin approval workflows, status tracking, and MySQL persistence.",
    highlights: [
      "Core Java & Spring Boot architecture",
      "RESTful API design and Postman validation",
      "Relational database integration with MySQL",
      "Employee Leave Management System project",
    ],
  },
  {
    role: "Google AI/ML In-House Training Program",
    company: "Medi-Caps University, Indore",
    period: "Training Program",
    description:
      "Completed hands-on training in TensorFlow and Keras, covering core concepts of Machine Learning and Computer Vision through the Google Developer Program, and earned badges including TensorFlow, Image Classification, Object Detection, Product Image Search, and Android Studio.",
    highlights: [
      "Hands-on training with TensorFlow and Keras",
      "Machine Learning and Computer Vision fundamentals",
      "Google Developer Program training and badges",
      "TensorFlow, Image Classification, Object Detection, Product Image Search, and Android Studio badges",
      "Built an Automatic Facial Attendance System as a team project",
      "Applied MTCNN for face detection, FaceNet for face recognition, Deep SORT for real-time tracking, OpenCV for video processing, and database integration for attendance management",
    ],
    certificateUrl:
      "https://drive.google.com/drive/folders/1uJK6EApEKUK9HT7TFPpKXuGs0GGToGh2?usp=drive_link",
  },
  {
    role: "Societal Internship Program",
    company: "Medicaps University",
    location: "Government Sandeepni School, Burhar",
    period: "60-Hour Program",
    description:
      "Completed a 60-hour community teaching internship focusing on student mentoring, communication, and community interaction.",
    highlights: [
      "Technical mentoring and foundational teaching",
      "Stakeholder and community interaction",
    ],
  },
];

export const projects = [
  {
    id: "inventrack",
    featured: true,
    name: "InvenTrack",
    title: "InvenTrack",
    subtitle: "Inventory & Order Management System",
    category: "Spring Boot Architecture",
    image: "/images/projects/inventrack.png",
    projectImage: "/images/projects/inventrack.png",
    keyTech: ["Java", "Spring Boot", "PostgreSQL", "JWT"],
    description:
      "A role-based inventory and order management backend built with Spring Boot and PostgreSQL, featuring secure JWT-driven authorization, real-time stock adjustment APIs, and automated low-stock threshold alerts.",
    technologies: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "PostgreSQL",
      "REST APIs",
      "JWT",
      "Spring Data JPA",
      "Hibernate",
    ],
    githubUrl: "https://github.com/mohdfazalansari/InvenTrack",
    liveDemoUrl: null,
    keyFeatures: [
      "Product catalog management with SKU mapping and inventory tracking.",
      "Real-time stock adjustment APIs preventing negative inventory.",
      "Order processing pipeline with transactional status updates.",
      "Role-based authorization separating ADMIN and STAFF operations.",
      "Stateless JWT authentication with BCrypt hashed passwords.",
      "Tested REST API collections via Postman.",
    ],
    caseStudy: {
      overview:
        "InvenTrack is an enterprise-oriented backend system designed to address inventory discrepancy and untracked order state transitions in supply workflows. It provides a clean, stateless REST API built on the Spring ecosystem, persisting data to PostgreSQL with full referential integrity.",
      problem:
        "Warehouses and small businesses frequently struggle with concurrent order placements causing race conditions, negative inventory, lack of role isolation between managers and floor staff, and untracked stock adjustments without audit trails.",
      techChoices: [
        {
          tech: "Java & Spring Boot 3",
          reason: "Enforces architectural separation (Controller-Service-Repository), reliable dependency injection, and declarative transaction management (@Transactional).",
        },
        {
          tech: "Spring Security & JWT",
          reason: "Enables stateless session management ideal for REST APIs, eliminating server-side session memory overhead while securing endpoints with role-based method security.",
        },
        {
          tech: "PostgreSQL",
          reason: "Ensures strict relational constraints, transactional ACID compliance during checkout operations, and robust indexing on SKUs and order timestamps.",
        },
        {
          tech: "Spring Data JPA & Hibernate",
          reason: "Simplifies object-relational mapping, eliminates boilerplate JDBC queries, and leverages derived query methods.",
        },
      ],
      securityArchitecture: {
        mechanism: "Stateless JWT Authentication & Spring Security Filter Chain",
        details: [
          "Incoming requests intercept at custom JwtAuthenticationFilter.",
          "Token extraction from Authorization header ('Bearer <token>') and signature verification using secret key.",
          "Claims deserialization to extract username and granted authorities ('ROLE_ADMIN', 'ROLE_STAFF').",
          "UsernamePasswordAuthenticationToken populated and injected into SecurityContextHolder.",
          "Method-level authorization enforced via @PreAuthorize('hasRole(\"ADMIN\")') on sensitive catalog manipulation routes.",
        ],
      },
      databaseDesign: {
        dbType: "PostgreSQL 15+",
        entities: [
          "Users: id, username, email, password_hash, role (ENUM: ADMIN, STAFF), created_at",
          "Products: id, sku, name, description, unit_price, quantity_in_stock, min_threshold, created_at",
          "Orders: id, order_number, user_id (FK), total_amount, order_status (ENUM: PENDING, CONFIRMED, CANCELLED), created_at",
          "OrderItems: id, order_id (FK), product_id (FK), quantity, unit_price, subtotal",
        ],
      },
      sampleEndpoints: [
        { method: "POST", path: "/api/v1/auth/login", desc: "Authenticate credentials and issue JWT bearer token" },
        { method: "POST", path: "/api/v1/auth/register", desc: "Register staff/admin user (Admin only)" },
        { method: "GET", path: "/api/v1/products", desc: "List paginated products with optional low-stock filter" },
        { method: "POST", path: "/api/v1/products", desc: "Add new product with initial stock & threshold [ADMIN]" },
        { method: "PATCH", path: "/api/v1/products/{id}/stock", desc: "Atomically adjust stock count (+ / -) [ADMIN]" },
        { method: "POST", path: "/api/v1/orders", desc: "Place order with items list; checks stock and reduces inventory in transaction" },
        { method: "GET", path: "/api/v1/orders/{id}", desc: "Fetch order details and itemized breakdown" },
        { method: "PATCH", path: "/api/v1/orders/{id}/status", desc: "Update status: CONFIRMED, SHIPPED, DELIVERED [ADMIN]" },
      ],
    },
  },
  {
    id: "myfinancecoach",
    featured: false,
    name: "MyFinanceCoach",
    title: "MyFinanceCoach",
    subtitle: "Personal Finance Management Platform",
    category: "Spring Boot Architecture",
    image: "/images/projects/myfinancecoach.png",
    projectImage: "/images/projects/myfinancecoach.png",
    keyTech: ["Java", "Spring Boot", "MySQL", "REST APIs"],
    description:
      "A personal finance platform with transaction management and financial reporting capabilities, providing monthly summaries, category-wise spending analysis, and relational data modeling.",
    technologies: [
      "Java",
      "Spring Boot",
      "MySQL",
      "REST APIs",
      "Spring Data JPA",
      "Hibernate",
      "Maven",
    ],
    githubUrl: "https://github.com/mohdfazalansari/MyFinanceCoach",
    liveDemoUrl: null,
    keyFeatures: [
      "User profile management and isolated financial ledgers.",
      "Transaction tracking for inflow and outflow records.",
      "Monthly summaries and category-wise spending analysis.",
      "Normalized relational database modeling in MySQL.",
      "Decoupled service-layer business logic for financial calculations.",
    ],
    caseStudy: {
      overview:
        "MyFinanceCoach is a backend service designed to give users clear visibility into their financial habits by recording daily cashflows and computing structured monthly spending distributions.",
      problem:
        "Unorganized financial tracking across cash and multiple accounts leads to lack of clarity on discretionary vs essential expenses and poor budget discipline.",
      techChoices: [
        {
          tech: "Java & Spring Boot",
          reason: "Strong typing, reliable calculations for financial aggregates, and clean MVC layered architecture.",
        },
        {
          tech: "MySQL",
          reason: "Reliable relational indexing on user_id, transaction_date, and category_id for fast monthly aggregate queries.",
        },
        {
          tech: "Spring Data JPA & JPQL",
          reason: "Enables custom aggregate queries like SUM(amount) grouped by category without writing error-prone manual SQL strings.",
        },
      ],
      securityArchitecture: {
        mechanism: "User Context Isolation",
        details: [
          "Data operations are strictly scoped to the authenticated user ID.",
          "Prevents horizontal privilege escalation where User A could query User B's transactions.",
        ],
      },
      databaseDesign: {
        dbType: "MySQL 8.0",
        entities: [
          "Users: id, full_name, email, currency_code, created_at",
          "Categories: id, name, type (INCOME/EXPENSE), icon_identifier",
          "Transactions: id, user_id (FK), category_id (FK), amount, type, transaction_date, description",
          "Budgets: id, user_id (FK), category_id (FK), monthly_limit, alert_threshold",
        ],
      },
      sampleEndpoints: [
        { method: "POST", path: "/api/v1/transactions", desc: "Record a new credit or debit transaction" },
        { method: "GET", path: "/api/v1/transactions", desc: "Retrieve filtered transactions by date range and category" },
        { method: "GET", path: "/api/v1/reports/monthly", desc: "Get aggregated income, expense, and net balance for year/month" },
        { method: "GET", path: "/api/v1/reports/categories", desc: "Get percentage breakdown by spending category" },
        { method: "POST", path: "/api/v1/budgets", desc: "Set monthly budget limit per category" },
      ],
    },
  },
  {
    id: "myblog",
    featured: false,
    name: "MyBlog",
    title: "MyBlog",
    subtitle: "Full-Stack Blogging Platform",
    category: "Spring Boot Architecture",
    image: "/images/projects/myblog.png",
    projectImage: "/images/projects/myblog.png",
    keyTech: ["Java", "Spring Boot", "MongoDB", "React"],
    description:
      "A secure blogging platform with authentication, full CRUD operations, comments, and category-based filtering, backed by Spring Boot, Spring Security, JWT, and MongoDB.",
    technologies: [
      "Java",
      "Spring Boot",
      "REST APIs",
      "Spring Security",
      "JWT",
      "MongoDB",
      "JavaScript",
      "Tailwind CSS",
    ],
    githubUrl: "https://github.com/mohdfazalansari/MyBlog",
    liveDemoUrl: null,
    keyFeatures: [
      "User authentication and authorization with JWT.",
      "Article CRUD operations with markdown support.",
      "Interactive comment threads mapped to articles.",
      "Category and topic filtering.",
      "MongoDB document storage for flexible article schemas.",
    ],
    caseStudy: {
      overview:
        "MyBlog provides an end-to-end publishing pipeline pairing a lightweight modern frontend with a robust Spring Boot and MongoDB backend.",
      problem:
        "Standard blogging templates often intertwine presentation with database queries without strict API boundaries or flexible article document modeling.",
      techChoices: [
        {
          tech: "MongoDB & Spring Data MongoDB",
          reason: "Articles vary in content structure, embedded comment lists, and tags, making document-oriented persistence highly natural.",
        },
        {
          tech: "Spring Boot & Spring Security",
          reason: "Provides robust role checks so only the verified author or admin can update or delete their respective articles.",
        },
        {
          tech: "JavaScript & Tailwind CSS",
          reason: "Enables a responsive, readable reading interface with clean layout utilities.",
        },
      ],
      securityArchitecture: {
        mechanism: "JWT Authentication & Author Ownership Verification",
        details: [
          "Public GET endpoints for listing articles and reading content.",
          "Protected POST/PUT/DELETE endpoints requiring valid Authorization header.",
          "Service layer checks article.authorId == authenticatedUserId prior to mutation.",
        ],
      },
      databaseDesign: {
        dbType: "MongoDB (Document Store)",
        entities: [
          "Users Collection: _id, username, email, passwordHash, role, bio",
          "Articles Collection: _id, title, slug, content, authorId, category, tags[], comments[], createdAt, updatedAt",
          "Comments (Embedded): id, userId, username, commentText, createdAt",
        ],
      },
      sampleEndpoints: [
        { method: "POST", path: "/api/v1/auth/signup", desc: "Create reader/author account" },
        { method: "POST", path: "/api/v1/auth/login", desc: "Authenticate and receive JWT token" },
        { method: "GET", path: "/api/v1/articles", desc: "Get published articles with pagination and tag/category query" },
        { method: "GET", path: "/api/v1/articles/{slug}", desc: "Get full article content and comments" },
        { method: "POST", path: "/api/v1/articles", desc: "Publish new article [Authenticated]" },
        { method: "PUT", path: "/api/v1/articles/{id}", desc: "Update existing article [Author only]" },
        { method: "POST", path: "/api/v1/articles/{id}/comments", desc: "Add comment to article [Authenticated]" },
      ],
    },
  },
  {
    id: "employee-leave",
    featured: false,
    name: "Employee Leave Management System",
    title: "Employee Leave Management System",
    subtitle: "Enterprise Workflow & Persistence",
    category: "Java & Spring Boot",
    image: "/images/projects/employee-leave.png",
    projectImage: "/images/projects/employee-leave.png",
    keyTech: ["Java", "Spring Boot", "MySQL", "REST APIs"],
    description:
      "A full-stack workflow system developed during the EduSkills Java Full Stack Virtual Internship featuring leave request submissions, multi-tier admin approval hierarchies, real-time status tracking, and MySQL persistence.",
    technologies: [
      "Java",
      "Spring Boot",
      "MySQL",
      "REST APIs",
      "Spring Data JPA",
      "Hibernate",
      "Maven",
    ],
    githubUrl: "https://github.com/mohdfazalansari",
    liveDemoUrl: null,
    keyFeatures: [
      "Leave application submission with automated balance checks.",
      "Multi-tier role approval workflow for department managers and HR.",
      "Real-time status updates and historical leave audit records.",
      "Normalized relational database schemas in MySQL.",
    ],
    caseStudy: {
      overview:
        "Developed during the EduSkills Java Full Stack Virtual Internship to streamline enterprise leave approvals with clean REST architecture and relational data modeling.",
      problem:
        "Manual email-based leave requests lead to lost records, untracked balances, and conflicting managerial approvals.",
      techChoices: [
        {
          tech: "Java & Spring Boot",
          reason: "Encapsulates enterprise business rules and declarative transaction management.",
        },
        {
          tech: "MySQL",
          reason: "Maintains referential integrity between employee profiles, department hierarchies, and leave ledgers.",
        },
      ],
      databaseDesign: {
        dbType: "MySQL 8.0",
        entities: [
          "Employees: id, full_name, email, department_id, leave_balance",
          "LeaveRequests: id, employee_id, start_date, end_date, reason, status (PENDING, APPROVED, REJECTED)",
          "Departments: id, name, manager_id",
        ],
      },
      sampleEndpoints: [
        { method: "POST", path: "/api/v1/leaves/apply", desc: "Submit new leave application" },
        { method: "GET", path: "/api/v1/leaves/balance", desc: "Get remaining leave quotas" },
        { method: "PATCH", path: "/api/v1/leaves/{id}/status", desc: "Manager approval or rejection" },
      ],
    },
  },
  {
    id: "image-classification",
    featured: false,
    name: "Image Classification with Deep Learning",
    title: "Image Classification with Deep Learning",
    subtitle: "Computer Vision & Attendance Pipeline",
    category: "AI & Computer Vision",
    image: "/images/projects/image-classification.png",
    projectImage: "/images/projects/image-classification.png",
    keyTech: ["Python", "TensorFlow", "Keras", "OpenCV"],
    description:
      "Deep learning models and an Automatic Facial Attendance System built with TensorFlow and Keras during the Google Developer Program training, featuring MTCNN face detection, FaceNet facial recognition, and OpenCV real-time video processing.",
    technologies: [
      "Python",
      "TensorFlow",
      "Keras",
      "OpenCV",
      "Deep SORT",
      "Computer Vision",
    ],
    githubUrl: "https://github.com/mohdfazalansari",
    liveDemoUrl: null,
    keyFeatures: [
      "Convolutional neural networks for multi-class image classification.",
      "Automatic facial detection pipeline using MTCNN.",
      "High-accuracy facial verification with FaceNet embeddings.",
      "Real-time video tracking and stream processing with OpenCV and Deep SORT.",
    ],
    caseStudy: {
      overview:
        "Developed during the Google AI/ML In-House Training Program at Medi-Caps University, this project combines deep convolutional networks and video tracking to automate student attendance.",
      problem:
        "Traditional manual attendance recording in academic halls is time-consuming, prone to proxy attendance, and lacks automated digital auditing.",
      techChoices: [
        {
          tech: "TensorFlow & Keras",
          reason: "Enables building, evaluating, and fine-tuning deep convolutional backbones.",
        },
        {
          tech: "OpenCV & MTCNN",
          reason: "Provides low-latency frame extraction and robust bounding box detection under variable lighting.",
        },
      ],
      databaseDesign: {
        dbType: "Attendance Log Store",
        entities: [
          "Students: id, roll_number, name, embedding_vector, department",
          "AttendanceRecords: id, student_id, timestamp, confidence_score, session_id",
        ],
      },
      sampleEndpoints: [
        { method: "POST", path: "/api/v1/vision/detect", desc: "Extract bounding boxes and facial landmarks" },
        { method: "POST", path: "/api/v1/attendance/verify", desc: "Match incoming frame vector against student database" },
      ],
    },
  },
];

export const skillsGroups = [
  {
    title: "Backend",
    subtitle: "Building scalable APIs & services",
    items: [
      "Java",
      "Spring Boot",
      "Spring MVC",
      "REST APIs",
      "Spring Security",
      "JWT",
      "JPA",
      "Hibernate",
    ],
  },
  {
    title: "Frontend",
    subtitle: "Building modern user interfaces",
    items: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
    ],
    expandingNote: "Currently expanding into React",
  },
  {
    title: "Databases",
    subtitle: "Data storage & modeling",
    items: [
      "MySQL",
      "PostgreSQL",
      "MongoDB",
    ],
  },
  {
    title: "Tools",
    subtitle: "Development & productivity",
    items: [
      "Git",
      "GitHub",
      "Maven",
      "Postman",
      "IntelliJ IDEA",
    ],
  },
];

export const aiKnowledge = [
  "Machine Learning",
  "Neural Networks",
  "Deep Learning",
  "Generative AI",
  "LLMs",
  "RAG",
  "Embeddings",
  "Vector Databases",
];

export const currentlyLearningData = {
  description:
    "Expanding my full-stack development skills with modern JavaScript and React while exploring Spring AI for integrating AI capabilities into Java applications.",
  items: ["JavaScript", "React", "Spring AI"],
};
