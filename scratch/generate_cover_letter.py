import os
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, HRFlowable, Table, TableStyle
)
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_LEFT, TA_JUSTIFY, TA_RIGHT

def generate_cover_letter(filename):
    doc = SimpleDocTemplate(
        filename,
        pagesize=letter,
        rightMargin=45,
        leftMargin=45,
        topMargin=45,
        bottomMargin=45
    )
    
    styles = getSampleStyleSheet()
    
    name_style = ParagraphStyle(
        'HeaderName',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=18,
        leading=22,
        textColor=colors.HexColor('#0F172A'),
        alignment=TA_LEFT
    )
    
    contact_style = ParagraphStyle(
        'HeaderContact',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9,
        leading=13,
        textColor=colors.HexColor('#334155'),
        alignment=TA_RIGHT
    )
    
    date_style = ParagraphStyle(
        'DateStyle',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=10,
        leading=14,
        textColor=colors.HexColor('#475569'),
        spaceBefore=10,
        spaceAfter=10
    )
    
    recipient_style = ParagraphStyle(
        'RecipientStyle',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=10,
        leading=14,
        textColor=colors.HexColor('#1E293B'),
        spaceAfter=12
    )

    subject_style = ParagraphStyle(
        'SubjectStyle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=10.5,
        leading=14,
        textColor=colors.HexColor('#0369A1'),
        spaceBefore=6,
        spaceAfter=14
    )
    
    body_style = ParagraphStyle(
        'BodyStyle',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=10,
        leading=15,
        textColor=colors.HexColor('#1E293B'),
        alignment=TA_JUSTIFY,
        spaceAfter=10
    )

    bullet_style = ParagraphStyle(
        'BulletStyle',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9.5,
        leading=14,
        textColor=colors.HexColor('#1E293B'),
        leftIndent=15,
        firstLineIndent=-10,
        spaceAfter=6
    )

    story = []

    # Header
    header_left = Paragraph("<b>Rohit Kumar Tiwari</b><br/><font size=9 color='#64748B'>Full Stack Developer (React.js & Node.js)</font>", name_style)
    header_right_text = (
        "+91-7052515866<br/>"
        "tripathirohit297@gmail.com<br/>"
        "<a href='https://linkedin.com/in/rohit-kumar-tiwari-9996ba237' color='#0284C7'>LinkedIn Profile</a> | "
        "<a href='https://github.com/Rohitiwari297' color='#0284C7'>GitHub Profile</a><br/>"
        "Noida, Uttar Pradesh, India"
    )
    header_right = Paragraph(header_right_text, contact_style)
    
    header_table = Table([[header_left, header_right]], colWidths=[280, 242])
    header_table.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ('TOPPADDING', (0,0), (-1,-1), 0),
        ('BOTTOMPADDING', (0,0), (-1,-1), 0),
    ]))
    story.append(header_table)
    story.append(Spacer(1, 8))
    story.append(HRFlowable(width="100%", thickness=1, color=colors.HexColor('#0284C7'), spaceBefore=2, spaceAfter=12))

    # Date
    story.append(Paragraph("<b>Date:</b> July 27, 2026", date_style))

    # Recipient
    recipient_text = (
        "<b>To,</b><br/>"
        "Hiring Manager / Talent Acquisition Team<br/>"
        "<b>HCL Technologies</b><br/>"
        "Noida, Uttar Pradesh"
    )
    story.append(Paragraph(recipient_text, recipient_style))

    # Subject
    story.append(Paragraph("<b>SUBJECT: Application for Developer Role (JavaScript | React.js | Node.js)</b>", subject_style))

    # Body
    story.append(Paragraph("Dear Hiring Manager,", body_style))
    
    p1 = (
        "I am writing to express my strong interest in the <b>Developer role</b> at HCL Technologies in Noida. "
        "With over 1+ years of hands-on experience as a Full Stack Developer, I specialize in building scalable web applications "
        "using <b>JavaScript (ES6+), React.js, Node.js, Express.js, and RESTful APIs</b>. Having architected multi-vendor e-commerce engines, "
        "enterprise resource backends, and streaming analytics portals, I am confident in my ability to deliver high-quality solutions for HCL."
    )
    story.append(Paragraph(p1, body_style))
    story.append(Spacer(1, 4))

    p2 = "During my work at RSS Infotech Pvt. Ltd. and Drishtee, my key achievements closely align with your job requirements:"
    story.append(Paragraph(p2, body_style))

    bullets = [
        "<b>High-Quality Web Applications:</b> Developed responsive, scalable web applications using JavaScript, React.js, and Node.js with MongoDB/SQL databases.",
        "<b>UI/UX & Mobile Compatibility:</b> Collaborated with UX/UI designers to transform designs into intuitive, mobile-friendly interfaces.",
        "<b>Data Integration & Performance:</b> Integrated RESTful APIs with backend services, optimizing web performance by 40% via Redis caching and Nginx reverse proxies.",
        "<b>Troubleshooting & Version Control:</b> Efficiently debugged web application issues and maintained clean code workflows using Git version control."
    ]
    for b in bullets:
        story.append(Paragraph(f"• {b}", bullet_style))
    story.append(Spacer(1, 6))

    p3 = (
        "I am eager to contribute my problem-solving skills, technical expertise, and collaborative mindset to HCL’s dynamic team in Noida. "
        "Thank you for your time and consideration. I look forward to the opportunity to discuss my qualifications in an interview."
    )
    story.append(Paragraph(p3, body_style))
    story.append(Spacer(1, 14))

    # Closing
    closing_text = (
        "Sincerely,<br/><br/>"
        "<b>Rohit Kumar Tiwari</b><br/>"
        "Full Stack Developer (React.js & Node.js)<br/>"
        "+91-7052515866 | tripathirohit297@gmail.com"
    )
    story.append(Paragraph(closing_text, ParagraphStyle('Closing', parent=styles['Normal'], fontName='Helvetica', fontSize=10, leading=14, textColor=colors.HexColor('#1E293B'))))

    doc.build(story)
    print(f"Successfully generated HCL Cover Letter PDF at: {filename}")

if __name__ == '__main__':
    base_dir = os.path.dirname(os.path.abspath(__file__))
    out_dir = os.path.join(base_dir, "..", "public")
    os.makedirs(out_dir, exist_ok=True)
    pdf_path = os.path.join(out_dir, "Rohit_Kumar_Tiwari_Cover_Letter_HCL.pdf")
    generate_cover_letter(pdf_path)
