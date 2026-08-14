import os
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, HRFlowable, KeepTogether
)
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_CENTER, TA_LEFT, TA_JUSTIFY, TA_RIGHT

def generate_pdf(filename):
    # Standard 0.5 inch margins (36pt)
    doc = SimpleDocTemplate(
        filename,
        pagesize=letter,
        rightMargin=36,
        leftMargin=36,
        topMargin=36,
        bottomMargin=36
    )
    
    styles = getSampleStyleSheet()
    
    # Custom styles to match original resume format perfectly
    name_style = ParagraphStyle(
        'NameStyle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=20,
        leading=24,
        textColor=colors.black,
        alignment=TA_LEFT
    )
    
    header_contact_style = ParagraphStyle(
        'HeaderContactStyle',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9,
        leading=13,
        textColor=colors.HexColor('#111827'),
        alignment=TA_RIGHT
    )
    
    section_heading = ParagraphStyle(
        'SectionHeading',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=12,
        leading=15,
        textColor=colors.black,
        spaceBefore=10,
        spaceAfter=2
    )
    
    body_style = ParagraphStyle(
        'BodyStyle',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9.5,
        leading=13.5,
        textColor=colors.HexColor('#1F2937'),
        alignment=TA_JUSTIFY,
        spaceAfter=4
    )

    bullet_style = ParagraphStyle(
        'BulletStyle',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9.5,
        leading=13.5,
        textColor=colors.HexColor('#1F2937'),
        leftIndent=14,
        firstLineIndent=-10,
        spaceAfter=3
    )

    sub_bullet_style = ParagraphStyle(
        'SubBulletStyle',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9.5,
        leading=13.5,
        textColor=colors.HexColor('#1F2937'),
        leftIndent=24,
        firstLineIndent=-10,
        spaceAfter=3
    )

    company_heading = ParagraphStyle(
        'CompanyHeading',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=10.5,
        leading=14,
        textColor=colors.black,
        spaceBefore=6,
        spaceAfter=2
    )

    job_title_style = ParagraphStyle(
        'JobTitleStyle',
        parent=styles['Normal'],
        fontName='Helvetica-Oblique',
        fontSize=10,
        leading=13,
        textColor=colors.HexColor('#111827'),
        spaceAfter=4
    )

    project_title_style = ParagraphStyle(
        'ProjectTitleStyle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=10,
        leading=13,
        textColor=colors.black,
        spaceBefore=4,
        spaceAfter=1
    )

    meta_style = ParagraphStyle(
        'MetaStyle',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9,
        leading=12,
        textColor=colors.HexColor('#374151'),
        spaceAfter=2
    )

    story = []

    # 1. HEADER (Left: Name, Right: Contact Links)
    header_left = Paragraph("<b>Rohit Kumar Tiwari</b>", name_style)
    header_right_text = (
        "+91-7052515866<br/>"
        "tripathirohit297@gmail.com<br/>"
        "<a href='https://linkedin.com/in/rohit-kumar-tiwari-9996ba237' color='#0284C7'>rohit-kumar-tiwari-9996ba237</a><br/>"
        "<a href='https://github.com/Rohitiwari297' color='#0284C7'>github.com/Rohitiwari297</a><br/>"
        "<a href='https://rohit-tiwari.netlify.app/' color='#0284C7'>https://rohit-tiwari.netlify.app/</a>"
    )
    header_right = Paragraph(header_right_text, header_contact_style)
    
    header_table = Table([[header_left, header_right]], colWidths=[280, 260])
    header_table.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ('TOPPADDING', (0,0), (-1,-1), 0),
        ('BOTTOMPADDING', (0,0), (-1,-1), 0),
    ]))
    story.append(header_table)
    story.append(Spacer(1, 8))

    # Helper function for section headings with underline
    def add_section_header(title):
        story.append(Paragraph(f"<b>{title.upper()}</b>", section_heading))
        story.append(HRFlowable(width="100%", thickness=0.8, color=colors.black, spaceBefore=1, spaceAfter=6))

    # 2. SUMMARY
    add_section_header("SUMMARY")
    summary_bullets = [
        "Full Stack Developer specializing in <b>JavaScript (ES6+), React.js, Next.js, Node.js, Express.js, and MongoDB/SQL</b> databases.",
        "Hands-on experience configuring, deploying, and hosting full-stack web applications on <b>AWS EC2, Linux VPS, Hostinger, Hosting Raja, cPanel, and Netlify</b> environments.",
        "Proficient in leveraging AI tools including <b>ChatGPT, Claude AI, and Generative AI</b> to optimize development workflows, debug complex code, and accelerate feature delivery.",
        "Hands-on expertise in RESTful API development, data integration from backend services, Redis caching, and Nginx load balancing.",
        "Experienced in troubleshooting, debugging, and optimizing web application performance for low latency and high concurrency.",
        "Strong version control proficiency with <b>Git & GitHub</b>, combined with CI/CD concepts and cloud/server administration.",
        "Analytical problem solver with excellent communication and teamwork abilities, thriving in fast-paced, dynamic team environments."
    ]
    for pt in summary_bullets:
        story.append(Paragraph(f"• {pt}", bullet_style))

    # 3. TECHNICAL SKILLS
    add_section_header("TECHNICAL SKILLS")
    skills_list = [
        "<b>Programming Languages:</b> JavaScript (ES6+), TypeScript, HTML5, CSS3, SQL, C",
        "<b>Front-End Development:</b> React.js, Next.js, Redux Toolkit, Responsive Web Design, Mobile Compatibility, UI/UX Collaboration, Tailwind CSS, Bootstrap.",
        "<b>Back-End Development:</b> Node.js, Express.js, RESTful APIs, Web Services, Data Integration, Redis Caching, Nginx (Reverse Proxy & Load Balancing).",
        "<b>Cloud & Hosting Platforms:</b> AWS EC2 (Instance Setup & Security Groups), Linux VPS, Hostinger, Hosting Raja, cPanel Hosting, Netlify, Basic Docker.",
        "<b>AI Tools & Generative AI:</b> ChatGPT, Claude AI, Generative AI (Prompt Engineering, Code Refactoring, Debugging & Workflow Optimization).",
        "<b>Databases & Storage:</b> MongoDB, Mongoose, SQL / MySQL.",
        "<b>Version Control & Tools:</b> Git, GitHub, Postman, VS Code, Bash.",
        "<b>Engineering Practices:</b> Troubleshooting & Debugging, Performance Optimization, Web Security (JWT, Role-Based Access, Rate Limiting), Agile Teamwork."
    ]
    for sk in skills_list:
        story.append(Paragraph(f"• {sk}", bullet_style))

    # 4. KEY STRENGTHS
    add_section_header("Key Strengths")
    strengths = [
        "<b>Problem-Solving & Debugging:</b> Efficient root-cause diagnosis and code optimization.",
        "<b>Cross-Functional Collaboration:</b> Seamless teamwork with UI/UX designers, backend developers, and product teams.",
        "<b>Adaptability:</b> Fast learner staying continuously updated with emerging web technologies, cloud infrastructure, and AI tools."
    ]
    for st in strengths:
        story.append(Paragraph(f"• {st}", bullet_style))

    # 5. CERTIFICATIONS
    add_section_header("CERTIFICATIONS")
    certs = [
        "Full-Stack Web Development Bootcamp – Physics Wallah",
        "JavaScript Essentials – Physics Wallah",
        "React.js Basics – Physics Wallah"
    ]
    for c in certs:
        story.append(Paragraph(f"• {c}", bullet_style))

    # 6. EDUCATION
    add_section_header("EDUCATION")
    story.append(Paragraph("<b>Master of Computer Science (CS)</b>, Veer Bahadur Singh Purvanchal University, Uttar Pradesh", ParagraphStyle('EduTitle', parent=styles['Normal'], fontName='Helvetica-Oblique', fontSize=10, leading=13, spaceAfter=3)))
    story.append(Paragraph("• Specialized in Full-Stack Web Development (MERN Stack: React.js, Node.js, JavaScript)", bullet_style))
    story.append(Paragraph("• Coursework in Software Engineering, Web Development, Database Management, and Data Structures", bullet_style))

    # 7. PROFESSIONAL EXPERIENCE
    add_section_header("Professional Experience")

    # Entry 1: Drishtee
    story.append(Paragraph("<b>1. Company: Drishtee Development & Communication Limited</b> (Oct 2024 – Mar 2025)", company_heading))
    story.append(Paragraph("React.js Developer Intern", job_title_style))
    story.append(Paragraph("<b>Roles and Responsibilities:</b>", ParagraphStyle('RolesTitle', parent=styles['Normal'], fontName='Helvetica-Bold', fontSize=9.5, leading=13, spaceAfter=2)))
    drishtee_roles = [
        "Developed and implemented high-quality front-end features using <b>JavaScript, React.js, HTML, and CSS</b> for the Drishtee Kiosk Portal.",
        "Collaborated with UX/UI designers to craft user-friendly, responsive interfaces optimized for mobile and desktop compatibility.",
        "Integrated data from backend RESTful services and databases to streamline document verification workflows for internal users.",
        "Troubleshot and debugged front-end web application issues, improving UI responsiveness and user productivity by 35%."
    ]
    for r in drishtee_roles:
        story.append(Paragraph(f"• {r}", bullet_style))
    story.append(Spacer(1, 6))

    # Entry 2: RSS Infotech
    story.append(Paragraph("<b>2. Company: RSS Infotech Pvt. Ltd.</b> (Apr 2025 – Present)", company_heading))
    story.append(Paragraph("Junior Full Stack Developer", job_title_style))

    # Project 1: TaazaIt (Frontend & Backend)
    story.append(Paragraph("<b>1. Multi-Vendor Grocery Platform – TaazaIt (Frontend & Backend)</b>", project_title_style))
    story.append(Paragraph("<b>Live:</b> <a href='https://taazait.com/' color='#0284C7'>https://taazait.com/</a> | <b>GitHub:</b> <a href='https://github.com/Rohitiwari297/backend-node-grocery-api' color='#0284C7'>backend-node-grocery-api</a>", meta_style))
    story.append(Paragraph("<b>Tech Stack:</b> JavaScript, React.js, Node.js, Express.js, MongoDB, Redis, Nginx, AWS EC2, RESTful APIs, Git", meta_style))
    story.append(Paragraph("<b>Roles and Responsibilities:</b>", ParagraphStyle('RolesTitle1', parent=styles['Normal'], fontName='Helvetica-Bold', fontSize=9.5, leading=13, spaceAfter=2)))
    taazait_roles = [
        "Engineered full-stack web application features using <b>React.js and Node.js</b> for a multi-vendor grocery e-commerce platform.",
        "Built RESTful APIs and integrated MongoDB database services with role-based access control, OTP authentication, and HTTP-only JWT cookies.",
        "Configured server environments and hosted application services on <b>AWS EC2</b> instances using Nginx reverse proxying and PM2.",
        "Implemented Redis rate-limiting and Nginx reverse proxying to troubleshoot latency and optimize web application performance."
    ]
    for r in taazait_roles:
        story.append(Paragraph(f"• {r}", bullet_style))
    story.append(Spacer(1, 4))

    # Project 2: ERP System Branch-Wise
    story.append(Paragraph("<b>2. ERP System (Branch-Wise Management)</b>", project_title_style))
    story.append(Paragraph("<b>GitHub:</b> <a href='https://github.com/Rohitiwari297/ERP_SYSTEM_BRANCH_WISE' color='#0284C7'>ERP_SYSTEM_BRANCH_WISE</a>", meta_style))
    story.append(Paragraph("<b>Tech Stack:</b> JavaScript, TypeScript, Node.js, Express.js, Redis, MongoDB, RESTful APIs", meta_style))
    story.append(Paragraph("<b>Roles and Responsibilities:</b>", ParagraphStyle('RolesTitle2', parent=styles['Normal'], fontName='Helvetica-Bold', fontSize=9.5, leading=13, spaceAfter=2)))
    erp_roles = [
        "Architected and implemented enterprise resource management backend APIs using <b>Node.js, Express, and MongoDB</b>.",
        "Designed multi-branch data isolation, inventory tracking, role-based access, and financial reporting RESTful services."
    ]
    for r in erp_roles:
        story.append(Paragraph(f"• {r}", bullet_style))
    story.append(Spacer(1, 4))

    # Project 3: Freedom Voyages
    story.append(Paragraph("<b>3. Freedom Voyages – Tour & Travel Platform (Complete Backend & Admin Panel Frontend)</b>", project_title_style))
    story.append(Paragraph("<b>Live:</b> <a href='https://freedomvoyages.com/' color='#0284C7'>https://freedomvoyages.com/</a> | <b>GitHub:</b> <a href='https://github.com/Rohitiwari297/BACKEND_FREEDOM_VOYAGES_-tours_-_travels-' color='#0284C7'>BACKEND_FREEDOM_VOYAGES</a>", meta_style))
    story.append(Paragraph("<b>Tech Stack:</b> JavaScript, React.js, Node.js, Express.js, MongoDB, RESTful APIs, Git", meta_style))
    story.append(Paragraph("<b>Roles and Responsibilities:</b>", ParagraphStyle('RolesTitle3', parent=styles['Normal'], fontName='Helvetica-Bold', fontSize=9.5, leading=13, spaceAfter=2)))
    freedom_roles = [
        "Developed complete Node.js backend services and responsive <b>React.js Admin Panel</b> for tour and travel booking platform.",
        "Integrated backend data with custom React UI components, enabling real-time package updates and user trip management."
    ]
    for r in freedom_roles:
        story.append(Paragraph(f"• {r}", bullet_style))
    story.append(Spacer(1, 4))

    # Project 4: Simhasth TV (Uff-TV) Admin Panel
    story.append(Paragraph("<b>4. Simhasth TV (Uff-TV) – Admin Panel</b>", project_title_style))
    story.append(Paragraph("<b>Hosted on:</b> cPanel Server | <b>Live:</b> <a href='https://rssindia.in.net/uff-tv/' color='#0284C7'>https://rssindia.in.net/uff-tv/</a> | <b>GitHub:</b> <a href='https://github.com/Rohitiwari297' color='#0284C7'>github.com/Rohitiwari297</a>", meta_style))
    story.append(Paragraph("<b>Tech Stack:</b> JavaScript, React.js, Node.js, Bootstrap, RESTful APIs", meta_style))
    story.append(Paragraph("<b>Roles and Responsibilities:</b>", ParagraphStyle('RolesTitle4', parent=styles['Normal'], fontName='Helvetica-Bold', fontSize=9.5, leading=13, spaceAfter=2)))
    simhasth_roles = [
        "Created a user-friendly, responsive Admin Panel in <b>React.js</b> for a large video-streaming platform.",
        "Built interactive analytics dashboards (top-viewed videos, user metrics) and push notification moderation tools."
    ]
    for r in simhasth_roles:
        story.append(Paragraph(f"• {r}", bullet_style))
    story.append(Spacer(1, 4))

    # Project 5: Shyam Aura Backend & Admin Panel
    story.append(Paragraph("<b>5. Shyam Aura – Matrimonial Application (Backend & Admin Panel)</b>", project_title_style))
    story.append(Paragraph("<b>Live:</b> <a href='https://aura.suryapolypack.com/' color='#0284C7'>https://aura.suryapolypack.com/</a> | <b>GitHub:</b> <a href='https://github.com/Rohitiwari297/Backend---Aura-Matrimonial-App-' color='#0284C7'>Backend-Aura-Matrimonial-App</a>", meta_style))
    story.append(Paragraph("<b>Tech Stack:</b> JavaScript, TypeScript, Node.js, Express.js, Redis, AWS EC2 / VPS, RESTful APIs", meta_style))
    story.append(Paragraph("<b>Roles and Responsibilities:</b>", ParagraphStyle('RolesTitle5', parent=styles['Normal'], fontName='Helvetica-Bold', fontSize=9.5, leading=13, spaceAfter=2)))
    aura_roles = [
        "Architected scalable backend microservices for matrimonial user onboarding, profile matching, search filters, and chat APIs.",
        "Integrated JWT authentication, Redis caching, rate-limiting, and deployed Node.js backend on <b>AWS EC2</b> / VPS cloud environment."
    ]
    for r in aura_roles:
        story.append(Paragraph(f"• {r}", bullet_style))
    story.append(Spacer(1, 4))
    story.append(Spacer(1, 6))

    # 8. LANGUAGE
    add_section_header("Language")
    story.append(Paragraph("• English", bullet_style))
    story.append(Paragraph("• Hindi", bullet_style))

    doc.build(story)
    print(f"Successfully generated resume in exact original format at: {filename}")

if __name__ == '__main__':
    base_dir = os.path.dirname(os.path.abspath(__file__))
    out_dir = os.path.join(base_dir, "..", "public")
    os.makedirs(out_dir, exist_ok=True)
    pdf_path = os.path.join(out_dir, "Rohit_Kumar_Tiwari_Resume.pdf")
    generate_pdf(pdf_path)
