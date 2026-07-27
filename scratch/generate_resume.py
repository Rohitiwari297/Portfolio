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
        "Skilled in MERN stack: React.js, Node.js, Express.js, MongoDB, TypeScript, Redis, Nginx.",
        "Built responsive, user-friendly web apps with real-time features and high concurrency.",
        "Experience in API integration, database handling, Redis caching, rate-limiting, and authentication.",
        "Proficient with Git, GitHub, Docker, Git-Actions (CI/CD) and deployment (Hostinger, Hosting Raja, VPS, cPanel, Netlify).",
        "Quick learner with strong debugging and problem-solving skills.",
        "Collaborative team player with a passion for clean, scalable code."
    ]
    for pt in summary_bullets:
        story.append(Paragraph(f"• {pt}", bullet_style))

    # 3. TECHNICAL SKILLS
    add_section_header("TECHNICAL SKILLS")
    skills_list = [
        "<b>Language:</b> C, JavaScript, TypeScript, SQL",
        "<b>Front-End:</b> HTML5, CSS3, JavaScript (ES6+), React.js, Redux Toolkit, Tailwind, Responsive Design.",
        "<b>Back-End:</b> Node.js, Express.js, RESTful APIs, Redis, Nginx (Reverse Proxy & Load Balancing).",
        "<b>Database:</b> MongoDB, Mongoose, SQL/MySQL.",
        "<b>Version Control:</b> Git, GitHub, Git Actions (CI/CD).",
        "<b>Other Tools:</b> Postman, VS Code, Bash, Familiar with AWS S3, Netlify, Docker, Basic understanding of Docker and CI/CD concepts, Interest in DevOps practices and automation."
    ]
    for sk in skills_list:
        story.append(Paragraph(f"• {sk}", bullet_style))

    # 4. KEY STRENGTH
    add_section_header("Key Strength")
    strengths = [
        "Strong problem-solving and debugging skills.",
        "Effective communication and teamwork abilities.",
        "Quick learner with a passion for staying updated on emerging technologies."
    ]
    for st in strengths:
        story.append(Paragraph(f"• {st}", bullet_style))

    # 5. CERTIFICATION
    add_section_header("CERTIFICATION")
    certs = [
        "Full-Stack Web Development Bootcamp, Physics Wallah",
        "JavaScript Essentials, Physics Wallah",
        "React.js Basics, Physics Wallah"
    ]
    for c in certs:
        story.append(Paragraph(f"• {c}", bullet_style))

    # 6. EDUCATION
    add_section_header("EDUCATION")
    story.append(Paragraph("<b>Master of Computer Science (CS)</b>, Veer Bahadur Singh Purvanchal University Uttar Pradesh", ParagraphStyle('EduTitle', parent=styles['Normal'], fontName='Helvetica-Oblique', fontSize=10, leading=13, spaceAfter=3)))
    story.append(Paragraph("• Specialized in Full-Stack Web Development (MERN Stack)", bullet_style))
    story.append(Paragraph("• Focused on building scalable web applications using Node.js and React", bullet_style))

    # 7. PROFESSIONAL EXPERIENCE
    add_section_header("Professional Experience")

    # Entry 1: Drishtee
    story.append(Paragraph("<b>1. Company: Drishtee Development & Communication Limited</b> (Oct 2024 – Mar 2025)", company_heading))
    story.append(Paragraph("React.Js Developer Intern", job_title_style))
    story.append(Paragraph("<b>Roles and Responsibilities:</b>", ParagraphStyle('RolesTitle', parent=styles['Normal'], fontName='Helvetica-Bold', fontSize=9.5, leading=13, spaceAfter=2)))
    drishtee_roles = [
        "Contributed to the development of the Drishtee Kiosk Portal, enhancing the user experience for Customer Service Points (CSPs) and streamlining document verification for employees.",
        "Collaborated with design and backend teams to create responsive, user-friendly interfaces for both the CSP interface and Admin Portal.",
        "Developed and implemented front-end features using HTML, CSS, JavaScript, and React.js, ensuring seamless integration with backend systems.",
        "Assisted in data validation mechanisms, enabling employees to efficiently verify CSP-submitted documents, enhancing accuracy and productivity.",
        "Focused on UI/UX improvements, creating a clean and intuitive design, improving usability for both internal (Admin) and external (CSP) users.",
        "Resolved bugs, optimized performance, and conducted testing to ensure platform responsiveness across multiple devices."
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
    story.append(Paragraph("<b>Tech Stack:</b> React.js, Node.js, Express.js, MongoDB, Redis, Nginx, REST APIs", meta_style))
    story.append(Paragraph("<b>Roles and Responsibilities:</b>", ParagraphStyle('RolesTitle1', parent=styles['Normal'], fontName='Helvetica-Bold', fontSize=9.5, leading=13, spaceAfter=2)))
    taazait_roles = [
        "Developing a multi-vendor grocery e-commerce platform enabling multiple sellers to list and manage products while customers can browse, add to cart, and place orders.",
        "Built secure user authentication (OTP, JWT cookies) and role-based access for customers, vendors, and administrators.",
        "Implemented product management system allowing vendors to add, update, and manage inventory in real time.",
        "Developed shopping cart and order management functionality with dynamic price calculations, Redis rate limiting, and Nginx load balancing.",
        "Integrated responsive React.js UI to ensure smooth user experience across mobile and desktop devices.",
        "Designed RESTful APIs for efficient communication between frontend and backend."
    ]
    for r in taazait_roles:
        story.append(Paragraph(f"• {r}", bullet_style))
    story.append(Spacer(1, 4))

    # Project 2: ERP System Branch-Wise
    story.append(Paragraph("<b>2. ERP System (Branch-Wise Management)</b>", project_title_style))
    story.append(Paragraph("<b>GitHub:</b> <a href='https://github.com/Rohitiwari297/ERP_SYSTEM_BRANCH_WISE' color='#0284C7'>ERP_SYSTEM_BRANCH_WISE</a>", meta_style))
    story.append(Paragraph("<b>Tech Stack:</b> TypeScript, Node.js, Express.js, Redis, MongoDB, REST APIs", meta_style))
    story.append(Paragraph("<b>Roles and Responsibilities:</b>", ParagraphStyle('RolesTitle2', parent=styles['Normal'], fontName='Helvetica-Bold', fontSize=9.5, leading=13, spaceAfter=2)))
    erp_roles = [
        "Architected and implemented the entire backend system for branch-wise enterprise resource planning.",
        "Designed multi-branch data isolation, role-based access control, inventory tracking, staff management, and financial analytics APIs."
    ]
    for r in erp_roles:
        story.append(Paragraph(f"• {r}", bullet_style))
    story.append(Spacer(1, 4))

    # Project 3: Freedom Voyages
    story.append(Paragraph("<b>3. Freedom Voyages – Tour & Travel Platform (Complete Backend & Admin Panel Frontend)</b>", project_title_style))
    story.append(Paragraph("<b>Live:</b> <a href='https://freedomvoyages.com/' color='#0284C7'>https://freedomvoyages.com/</a> | <b>GitHub:</b> <a href='https://github.com/Rohitiwari297/BACKEND_FREEDOM_VOYAGES_-tours_-_travels-' color='#0284C7'>BACKEND_FREEDOM_VOYAGES</a>", meta_style))
    story.append(Paragraph("<b>Tech Stack:</b> Node.js, Express.js, React.js, MongoDB, REST APIs", meta_style))
    story.append(Paragraph("<b>Roles and Responsibilities:</b>", ParagraphStyle('RolesTitle3', parent=styles['Normal'], fontName='Helvetica-Bold', fontSize=9.5, leading=13, spaceAfter=2)))
    freedom_roles = [
        "Architected the complete backend and frontend of Admin Panel for travel platform offering curated tour packages, instant booking, and trip management.",
        "Designed REST APIs powering user authentication, package management, booking systems, and admin dashboard workflows."
    ]
    for r in freedom_roles:
        story.append(Paragraph(f"• {r}", bullet_style))
    story.append(Spacer(1, 4))

    # Project 4: Simhasth TV (Uff-TV) Admin Panel
    story.append(Paragraph("<b>4. Simhasth TV (Uff-TV) – Admin Panel</b>", project_title_style))
    story.append(Paragraph("<b>Hosted on:</b> cPanel Server | <b>Live:</b> <a href='https://rssindia.in.net/uff-tv/' color='#0284C7'>https://rssindia.in.net/uff-tv/</a> | <b>GitHub:</b> <a href='https://github.com/Rohitiwari297' color='#0284C7'>github.com/Rohitiwari297</a>", meta_style))
    story.append(Paragraph("<b>Roles and Responsibilities:</b>", ParagraphStyle('RolesTitle4', parent=styles['Normal'], fontName='Helvetica-Bold', fontSize=9.5, leading=13, spaceAfter=2)))
    simhasth_roles = [
        "Developed and maintained a scalable Admin Panel for a large video-streaming platform, enabling content management, notification control, streaming moderation, and dashboard analytics.",
        "Built insightful dashboards displaying top-viewed videos, top-liked videos, and real-time engagement metrics.",
        "Improved backend API performance, allowing admins to send push notification alerts with images or video thumbnails.",
        "Created a responsive UI using React.js and Bootstrap Icons with smooth cPanel deployment."
    ]
    for r in simhasth_roles:
        story.append(Paragraph(f"• {r}", bullet_style))
    story.append(Spacer(1, 4))

    # Project 5: Shyam Aura Backend & Admin Panel
    story.append(Paragraph("<b>5. Shyam Aura – Matrimonial Application (Backend & Admin Panel)</b>", project_title_style))
    story.append(Paragraph("<b>Live:</b> <a href='https://aura.suryapolypack.com/' color='#0284C7'>https://aura.suryapolypack.com/</a> | <b>GitHub:</b> <a href='https://github.com/Rohitiwari297/Backend---Aura-Matrimonial-App-' color='#0284C7'>Backend-Aura-Matrimonial-App</a>", meta_style))
    story.append(Paragraph("<b>Roles and Responsibilities:</b>", ParagraphStyle('RolesTitle5', parent=styles['Normal'], fontName='Helvetica-Bold', fontSize=9.5, leading=13, spaceAfter=2)))
    aura_roles = [
        "Architected complete backend and real-time admin analytics panel for a matrimonial platform featuring user onboarding, profile matching algorithms, search filters, chat, and subscription plans.",
        "Implemented JWT auth, Redis caching, rate-limiting, and deployed on VPS Node.js and cPanel servers."
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
