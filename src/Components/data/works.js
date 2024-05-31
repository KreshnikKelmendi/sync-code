import work1 from "../Assets/orientimi2.png"
import work2 from "../Assets/dyti.png"
import work4 from "../Assets/e.png"
import orientimiNeKarriere from "../Assets/ORIENTIMI.png"
import orientimiNeKarriere2 from "../Assets/mobileOrientimi.png"
import flipgrc from "../Assets/flipGrc.png"
import verve from "../Assets/verde.png"
import verve2 from "../Assets/verveDecor.png"
import gdpr from "../Assets/gdpr.jpg"
import gdpr2 from "../Assets/smartmockups_lqcuv410.jpg"
import via from "../Assets/Via-ks.jpg"
import via2 from "../Assets/via3.jpg"
import eurokos from "../Assets/eurokos.jpg"

const works = [{
    id:1,
    workName: "Orientim në Karrierë",
    technologies: "Angular JS / Tailwind CSS / C# .NET / Sql Server",
    image: work1,
    jobImage1: orientimiNeKarriere,
    jobImage2: orientimiNeKarriere2,
    shortTitle: "Carrier orientation platform for Kosovar students",
    category: "Web Design & Web Development",
    clientExpectations: "Clients expect the website to have an intuitive and user-friendly navigation structure. Information about academic programs, admissions, faculty, and campus life should be easily accessible.",
    partnershipResult: "The client expressed immense satisfaction with Sync-Code's work on the career platform. The meticulously developed web-based interfaces not only met but exceeded expectations, providing a highly effective and secure solution. The client's happiness is a testament to Sync-Code's commitment to delivering quality products that streamline processes, enhance user experiences, and contribute to the overall success of their initiatives. This positive feedback reinforces the strong partnership between Sync-Code and the client, highlighting the successful collaboration in achieving the desired outcomes.",
    description: "Orientim ne Karriere is a carrier orientation platform for Kosovar students. It helps students to find their recommended field of study based on their personality and skills then find out universities and colleges that are ready to accept students in that field. The platform also includes an admin panel for volunteers to add studying advice and post scholarship events. The platform is online since August 2017 and for more information, you can follow the link below.",
    liveLink: "https://orientimnekarriere.com/",
    backgroundColor: '#FF5733' 
},{
    id:"via-construction",
    workName: "VIA Construction",
    technologies:"React JS / Tailwind CSS / Strapi CMS",
    image: via,
    jobImage1: via2,
    jobImage2: via,
    shortTitle: "Innovative Construction Solutions",
    category: "Web Design & Web Development",
    clientExpectations: "Expect a dynamic and user-friendly website that showcases VIA Shpk's innovative construction solutions. Ensure the platform highlights their portfolio, services, and client testimonials effectively, emphasizing their commitment to quality and excellence in the construction industry.",
    partnershipResult: "Partnering with VIA Shpk is more than a project; it's a collaboration towards excellence. Our website development for VIA Shpk not only enhances their online presence but also supports their mission to deliver top-notch construction services. The intuitive design and robust functionality provide a seamless experience for potential clients, showcasing VIA Shpk's expertise and dedication.",
    description: "VIA Shpk is a leading construction company renowned for its innovative solutions and high-quality projects. The website we developed for VIA Shpk offers a comprehensive overview of their services, including residential, commercial, and infrastructure projects. It features a modern design, easy navigation, and integrated tools for client interaction.",
    liveLink: "http://www.via-ks.com/",
},{
    id:3,
    workName: "Flip3 GRC",
    technologies:"Angular JS / Bootstrap / C# .NET / Sql Server",
    image: work2,
    jobImage1: work2,
    jobImage2: flipgrc,
    shortTitle: "Manage governance, risk and compliance platform",
    category: "Web Design & Web Development",
    clientExpectations: "Expect a robust system that effectively manages governance, risk, and compliance aspects within your organization. Ensure that Flip3 provides comprehensive tools for overseeing and optimizing governance processes.",
    partnershipResult: "Choosing Flip3 as your governance, risk, and compliance (GRC) management platform is not just a transaction; it's a commitment to a successful partnership. As you leverage the platform and build a foundation for success. The platform's robust tools help create a risk-resilient environment, minimizing the impact of potential challenges.",
    description: "Flip3 helps your company manage governance, risk and compliance. You can extend Flip3 by adding other modules such as Request Management, Change Management or Privacy Management. It can be hosted on premise or in cloud and also comes with a ready to use expsed API, which you can use for faster integration with other systems.",
    liveLink: "http://www.flip3grc.com/",
    tutorialLink: "https://www.youtube.com/watch?v=eMgwe-c02Zk"
},{
    id:4,
    workName: "GDPR Platform",
    technologies:"Angular JS / Bootstrap / C# .NET / Sql Server",
    image: gdpr,
    jobImage1: gdpr,
    jobImage2: gdpr2,
    shortTitle: "General Data Protection Regulation (GDPR)",
    category: "Web Design & Web Development",
    clientExpectations: "A data controller determines the purposes and means of processing personal data. In other words, the data controller decides the how and why of a data processing operation.",
    partnershipResult: "",
    description: "Our platform helps your company to easily become GDPR compliant. The solution can be integrated into all applications including those that were developed before GDPR became enforceable. The main modules are anonymization, report, and consent. With our platform implemented your customers can request and receive all the information you have about them, have their data deleted, and manage consent for processing their data.",
    // liveLink: "http://www.flip3grc.com/",
    tutorialLink: "https://www.youtube.com/watch?v=653svNH-0Vs&t=7s"
},{
    id: "eurokos",
    workName: "EUROKOS",
    technologies: "React JS / Bootstrap",
    image: eurokos,
    // jobImage1: projectImage1,
    // jobImage2: projectImage2,
    shortTitle: "Innovative Construction and Solar Solutions",
    category: "Web Design & Web Development",
    clientExpectations: "Eurokos aimed to establish a robust online presence that highlights their cutting-edge technology projects in construction and solar energy across Kosovo and Albania. The goal was to create an intuitive and visually appealing platform that showcases their expertise and innovation.",
    partnershipResult: "Through collaborative efforts, we successfully delivered a platform that meets the highest standards of user experience and functionality, effectively communicating Eurokos' industry leadership.",
    description: "Eurokos is a leading construction and solar company in Kosovo and Albania. Our platform highlights their innovative projects and technological advancements. Visitors can explore their portfolio, discover their solutions, and understand their impact on sustainability. The site offers seamless navigation and a responsive design for optimal viewing on any device.",
    liveLink: "http://www.eurokos.net/",
},{
    id:6,
    workName: "VERVE Decor",
    technologies:"React JS / Tailwind CSS / Strapi CMS / PostgreSQL",
    image: work4,
    jobImage1: verve,
    jobImage2: verve2,
    shortTitle: "e-Commerce website",
    category: "Web Design & Web Development",
    clientExpectations: "Clients expect an intuitive and easy-to-navigate user interface that provides a seamless shopping experience for their customers. An efficient and streamlined shopping cart and checkout process are crucial. Clients expect a minimal number of steps, easy form filling, and various payment options to reduce cart abandonment.",
    partnershipResult: "We express our deepest gratitude for entrusting us with your vision. We look forward to witnessing your brand's continued happiness and success in the digital realm.",
    description: "Experience the power of easy navigation, intuitive filters, and a smooth checkout process that makes eCommerce shopping a joy. Our application is optimized for performance, ensuring a quick and secure transaction every time you indulge in the convenience of online shopping. Your data security is our top priority, and our robust payment systems guarantee a safe and reliable eCommerce experience.",
    liveLink: "https://vdecor.vercel.app/",
    // tutorialLink: "https://www.youtube.com/watch?v=653svNH-0Vs&t=7s"
}
]

export { works }