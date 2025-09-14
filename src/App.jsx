import React from "react";
import { Button } from "@/components/ui/button.jsx";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.jsx";
import { Badge } from "@/components/ui/badge.jsx";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  ExternalLink,
  User,
  Briefcase,
  GraduationCap,
  Award,
  Heart,
} from "lucide-react";
import profilePhoto from "./assets/profile-photo.jpg";
import logo from "./assets/logo.jpg";
import "./App.css";

function App() {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold text-gray-800 flex items-center gap-2">
              <img
                src={logo}
                alt="Daniel Macharia Logo"
                className="w-8 h-8 rounded-full object-contain"
              />
              Daniel Macharia
            </h1>
            <div className="hidden md:flex space-x-6">
              <button
                onClick={() => scrollToSection("home")}
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("experience")}
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <img
              src={profilePhoto}
              alt="Daniel Macharia"
              className="w-32 h-32 rounded-full mx-auto mb-6 object-cover shadow-lg"
            />
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
              Daniel Macharia
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-6">
              Finance Professional & Techno-Functional Business Central
              Consultant | ERP & Systems Implementation Expert
            </p>
            <p className="text-lg text-gray-500 max-w-3xl mx-auto mb-8">
              7+ years of progressive experience in finance, accounting, and
              enterprise systems implementation across Parastatals, NGOs,
              SACCOs, Wholesale and Retail Businesses and Private organizations.
              Expert in Finance, Microsoft Dynamics 365 Business Central
              Implementation & Business Process Optimization
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                onClick={() => scrollToSection("projects")}
                className="bg-blue-600 hover:bg-blue-700"
              >
                View My Work
              </Button>
              <Button
                variant="outline"
                onClick={() => scrollToSection("contact")}
              >
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                My Approach & Mindset
              </h3>
              <p className="text-gray-600 mb-6">
                I take a collaborative, user-focused approach working closely
                with stakeholders to deliver ERP solutions that are intuitive,
                reliable, and aligned with strategic goals. I'm comfortable
                working in cross-functional and global environments, translating
                complex business requirements into actionable plans.
              </p>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                Leadership & Mentorship
              </h3>
              <p className="text-gray-600">
                Beyond project delivery, I actively mentor team members and
                clients on ERP best practices, encouraging knowledge sharing and
                long-term system ownership.
              </p>
            </div>
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <User className="w-5 h-5" />
                    Personal Info
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-gray-500" />
                    <span>Nairobi, Kenya</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-gray-500" />
                    <span>+254 711751270</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-gray-500" />
                    <span>danielhuios@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Linkedin className="w-4 h-4 text-gray-500" />
                    <a
                      href="https://www.linkedin.com/in/danielmachariag/"
                      className="text-blue-600 hover:underline"
                    >
                      LinkedIn Profile
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Skills & Expertise
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>ERP & Systems</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge>Microsoft Dynamics 365 Business Central</Badge>
                  <Badge>NAVISION</Badge>
                  <Badge>ERP Implementation</Badge>
                  <Badge>Zoho</Badge>
                  <Badge>System Configuration</Badge>
                  <Badge>UAT</Badge>
                  <Badge>Data Migration</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Finance & Accounting</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge>IFRS</Badge>
                  <Badge>Financial Reporting</Badge>
                  <Badge>Multi-Currency</Badge>
                  <Badge>Donor Compliance</Badge>
                  <Badge>Chart of Accounts Design</Badge>
                  <Badge>Account Payables</Badge>
                  <Badge>Account Receivables</Badge>
                  <Badge>Bank Reconciliation</Badge>
                  <Badge>Internal Controls</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Business & Leadership</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge>Process Automation</Badge>
                  <Badge>Requirements Gathering</Badge>
                  <Badge>Training & Mentorship</Badge>
                  <Badge>Change Management</Badge>
                  <Badge>Stakeholder Engagement</Badge>
                  <Badge>Public Speaking</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Professional Experience
          </h2>
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="w-5 h-5" />
                  Senior Functional Consultant
                </CardTitle>
                <CardDescription>
                  VertexHub Group Limited • Oct 2024 - Present • Nairobi
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Leading ERP implementations across diverse organizations,
                  ensuring smooth system adoption and stakeholder satisfaction.
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>
                    Successfully implemented HR, Supply Chain, and Finance
                    modules for SND (NGO)
                  </li>
                  <li>
                    Led NewFortis SACCO implementation with Temenos (T24)
                    integration as well as Finance, Payroll and Human Resource
                    Implementation
                  </li>
                  <li>
                    Automated SASRA report generation and regulatory compliance
                  </li>
                  <li>
                    Managed end-to-end loan management digitization for
                    microfinance institutions
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="w-5 h-5" />
                  Functional Consultant
                </CardTitle>
                <CardDescription>
                  Green Com Enterprises • Jan 2024 - Oct 2024 • Nairobi
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Delivered Microsoft Dynamics 365 solutions for government and
                  public sector organizations.
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>
                    Implemented HR and Supply Chain modules for Judiciary of
                    Kenya
                  </li>
                  <li>
                    Led National Lands Commission HR and Supply Chain
                    implementations
                  </li>
                  <li>
                    Managed KETRB Finance and Supply Chain module deployment
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="w-5 h-5" />
                  Software Developer
                </CardTitle>
                <CardDescription>
                  iTalanta • June 2022 - Dec 2023 • Nairobi
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Contributed to open-source projects and collaborated on web
                  development initiatives.
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Closed 4 individual issues for Elewa_Group Website</li>
                  <li>
                    Collaborated on 3 additional project issues with team
                    members
                  </li>
                  <li>Created and maintained technical documentation</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="w-5 h-5" />
                  Finance & Administration
                </CardTitle>
                <CardDescription>
                  CITAM • Dec 2020 - June 2022 • Nairobi
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>
                    Developed annual work plans and budget as per the company’s
                    strategic plan.
                  </li>
                  <li>
                    Excelled in using NAVISION ERP to raise imprest requisitions
                    and disbursed imprest and petty cash.
                  </li>
                  <li>
                    Helped in setting targets and monitor performance of staff
                    as per the work plans.
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="w-5 h-5" />
                  Accountant
                </CardTitle>
                <CardDescription>
                  Ongoza Institute (NGO) • Sep 2019 – Dec 2020 • Nairobi
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>
                    Managed day-to-day accounting operations, including accounts
                    payable/receivable, reconciliations, payroll processing, and
                    preparation of monthly financial statements.
                  </li>
                  <li>
                    Ensured compliance with donor requirements, statutory
                    filings, and internal financial policies.
                  </li>
                  <li>
                    Supported annual external audits by preparing schedules,
                    reconciliations, and documentation.
                  </li>
                  <li>
                    Implemented and maintained internal controls to safeguard
                    assets and improve accountability.
                  </li>
                  <li>
                    Monitored donor-funded projects, preparing grant utilization
                    reports and ensuring expenses aligned with approved budgets.
                  </li>
                  <li>
                    Participated in the rollout of ERP workflows to support
                    financial reporting and donor compliance.
                  </li>
                  <li>
                    Trained program staff on expense reporting, budget
                    monitoring, and ERP system use.
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="w-5 h-5" />
                  Research & Deal Origination
                </CardTitle>
                <CardDescription>
                  Cytonn Investments • Mar 2017 - Sep 2019 • Nairobi
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>
                    Did market research, financial modeling on real estate
                    projects.
                  </li>
                  <li>
                    Assisted in company analysis on companies in the real estate
                    sector.
                  </li>
                  <li>
                    Participated in a team that did project scheduling and risk
                    management for Cytonn real estate.
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Key Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>SND NGO Implementation</CardTitle>
                <CardDescription>NGO Implementation</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Implemented HR, Supply Chain, and Finance modules for a
                  non-governmental organization, ensuring donor compliance and
                  transparent reporting.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">HR Module</Badge>
                  <Badge variant="secondary">Payroll</Badge>
                  <Badge variant="secondary">Supply Chain</Badge>
                  <Badge variant="secondary">Finance</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>NewFortis SACCO</CardTitle>
                <CardDescription>
                  Financial Institution Transformation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Led comprehensive implementation including Temenos T24
                  integration and automated SASRA report generation for
                  regulatory compliance.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Credit Module</Badge>
                  <Badge variant="secondary">T24 Integration</Badge>
                  <Badge variant="secondary">SASRA Reports</Badge>
                  <Badge variant="secondary">Finance</Badge>
                  <Badge variant="secondary">HR Management</Badge>
                  <Badge variant="secondary">Payroll</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Judiciary of Kenya</CardTitle>
                <CardDescription>
                  Government Sector Implementation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Successfully deployed HR and Supply Chain modules for Kenya's
                  judicial system, enhancing operational efficiency and
                  transparency.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">HR Module</Badge>
                  <Badge variant="secondary">Supply Chain</Badge>
                  <Badge variant="secondary">Government Sector</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>National Lands Commission - HR Module</CardTitle>
                <CardDescription>
                  Government Sector Implementation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Implementation of the HR module: setting up leave policies,
                  payroll systems, and recruitment workflows;Supply Chain
                  module: optimizing procurement and supply chain operations.
                  Configured system settings to align with business processes
                  and facilitated user training and support
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">HR Module</Badge>
                  <Badge variant="secondary">Government Sector</Badge>
                  <Badge variant="secondary">Supply Chain</Badge>
                  <Badge variant="secondary">Payroll</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>KETRB - Finance and Supply Chain Modules</CardTitle>
                <CardDescription>Integrated ERP Solution</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Oversaw the implementation of both Finance and Supply Chain
                  modules. Configured financial management, budgeting, and
                  reporting features alongside procurement and supply chain
                  processes. Conducted data migration, integration, and user
                  training.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Finance Module</Badge>
                  <Badge variant="secondary">Supply Chain</Badge>
                  <Badge variant="secondary">Data Migration</Badge>
                  <Badge variant="secondary">Integration</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section id="education" className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Education & Certifications
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="w-5 h-5" />
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold">ALX School</h4>
                  <p className="text-gray-600">
                    Software Engineering • Jan 2023 - Jan 2024
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold">Moringa School</h4>
                  <p className="text-gray-600">
                    Software Engineering Certification (Distinction) • Aug 2022
                    - Feb 2023
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold">KCA University</h4>
                  <p className="text-gray-600">
                    Certified Public Accountant • Nov 2021
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold">Dedan Kimathi University</h4>
                  <p className="text-gray-600">
                    BCOM-Finance Major (2nd Upper Class) • Sep 2009 - May 2014
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="w-5 h-5" />
                  Certifications
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold">
                    Microsoft Dynamics 365 Business Central
                  </h4>
                  <p className="text-gray-600">Functional Consultant</p>
                </div>
                <div>
                  <h4 className="font-semibold">
                    ERP Implementation Methodology
                  </h4>
                  <p className="text-gray-600">Sure Step</p>
                </div>
                <div>
                  <h4 className="font-semibold">
                    Advanced Excel & Data Analytics
                  </h4>
                  <p className="text-gray-600">Professional Certification</p>
                </div>
                <div>
                  <h4 className="font-semibold">
                    Quickbooks Certified ProAdvisor
                  </h4>
                  <p className="text-gray-600">
                    Accounting & Financial Reporting
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Volunteer Experience */}
      <section id="volunteer" className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Volunteer Experience
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="w-5 h-5 text-red-500" />
                  Elixir Academy
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Part of a team involved in Youth Mentorship amongst low-income
                  earning neighborhoods. Creating an empowerment hub to help
                  youth achieve their dreams through entrepreneurship.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="w-5 h-5 text-red-500" />
                  Yugrow
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Part of a group that visits children's homes every two months
                  to share fun times, give donations, mentor children, and
                  encourage workers in the homes.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">
            Let's Work Together
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Ready to transform your business processes with expert ERP
            solutions? Let's discuss how I can help your organization achieve
            its goals.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Mail className="w-4 h-4 mr-2" />
              <a href="mailto:danielhuios@gmail.com">Send Email</a>
            </Button>
            <Button variant="outline">
              <Phone className="w-4 h-4 mr-2" />
              <a href="tel:+254711751270">Call Now</a>
            </Button>
            <Button variant="outline">
              <Linkedin className="w-4 h-4 mr-2" />
              <a
                href="https://www.linkedin.com/in/danielmachariag/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p>&copy; 2024 Daniel Macharia. All rights reserved.</p>
          <p className="text-gray-400 mt-2">
            Senior ERP Functional Consultant & Accountant
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
