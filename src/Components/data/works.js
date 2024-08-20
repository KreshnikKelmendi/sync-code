import work1 from "../Assets/orientimi2.png"
import work2 from "../Assets/dyti.png"
import work4 from "../Assets/verve-1.jpg"
import orientimiNeKarriere from "../Assets/ORIENTIMI.png"
import orientimiNeKarriere2 from "../Assets/mobileOrientimi.png"
import orientimiNeKarriere3 from "../Assets/orientimi-4.jpg"
import orientimiNeKarriere4 from "../Assets/orientimi-6.jpg"
import orientimiNeKarriere5 from "../Assets/orientimi-7.jpg"
import flipgrc from "../Assets/flipGrc.png"
import flipgrc1 from "../Assets/flipGrc1.png"
import verve from "../Assets/verve-1.jpg"
import verve2 from "../Assets/verve-2e.jpg"
import verve3 from "../Assets/verve-3.jpg"
import gdpr from "../Assets/gdpr.jpg"
import gdpr2 from "../Assets/smartmockups_lqcuv410.jpg"
import gdpr3 from "../Assets/gdpr1.png"
import via from "../Assets/Via-ks.jpg"
import via2 from "../Assets/via3.jpg"
import via3 from "../Assets/via-3.jpg"
import eurokos from "../Assets/eurokos.jpg"
import eurokos1 from "../Assets/eurokos-4.jpg"
import eurokos2 from "../Assets/eurokos-mobilee.jpg"
import eurokos3 from "../Assets/eurokos-5.jpg"
import whose from "../Assets/whose-2.png"
import whose1 from "../Assets/whose-7.png"
import whose2 from "../Assets/whose-8.png"
import whose3 from "../Assets/whose-5.png"

import imator from "../Assets/IMATOR.mp4"
import imator3 from "../Assets/imator-1.png"
import imator4 from "../Assets/sr2.png"
import imator5 from "../Assets/sr3.png"
import imator6 from "../Assets/sr4.png"
import imator7 from "../Assets/sr5.png"

const works = [
    {
        id: "imator",
        workName: "IMATOR",
        specificDescription: "In today’s digital landscape, managing security features like authentication, authorization, and user permissions across multiple applications is a critical task for organizations. The challenge becomes even more daunting when dealing with multi-tenancy and integrating with third-party services. Imator is designed to streamline these processes, offering a unified platform to handle single sign-on (SSO), multi-tenancy, and permission access control efficiently.",
        image: imator,
        jobImage3: imator3,
        category: "Software Development",
        shortTitle: "Comprehensive Management of Single Sign-On, Multi-Tenancy, and Access Control with Imator",
        // liveLink: "https://orientimnekarriere.com/",
        backgroundColor: '#FF5733',
        fullDescription2: `
            Imator is an innovative solution designed to address these challenges by providing a centralized platform for managing authentication, authorization, and access control across multiple applications. By integrating Imator into your workflow, you can maintain consistent security standards, simplify the user management process, and enhance overall efficiency. Here’s how Imator can transform your security infrastructure:
        `,
        sections: [
        {
            title: "1. Consistent User Security Standards Across Applications",
            descriptionTitle: "With Imator, you can enforce a unified set of user security standards across all applications within your organization. This ensures that every application adheres to the same security policies, reducing the risk of vulnerabilities caused by inconsistent implementations."
        },
        {
            title: "2. Centralized Authentication and Authorization",
            descriptionTitle: "Imator allows you to offload authentication and authorization responsibilities from individual applications to a centralized system. This not only simplifies the development process but also ensures that all applications benefit from the same high standards of security, including features like multi-factor authentication (MFA) and secure password policies."
        },
        {
            title: "3. Multi-Tenant Identity Management",
            descriptionTitle: "Managing multiple tenants within an application can be complex, especially when each tenant requires distinct configurations and security settings. Imator streamlines this process by providing centralized management of tenant identities, allowing you to define specific policies and access controls for each tenant without duplicating efforts."
        },
        {
            title: "4. Comprehensive Permission Access Control",
            descriptionTitle: "Imator offers robust tools for defining and managing permissions within your applications. You can create fine-grained access controls for various resources and actions, ensuring that users have access only to the data and features necessary for their roles. This not only enhances security but also simplifies compliance with regulatory requirements."
        },
        {
            title: "5. Seamless Integration with Third-Party Authentication Providers",
            descriptionTitle: "In today’s interconnected world, integrating with third-party authentication providers is often essential. Imator supports seamless integration with popular providers like Google, Facebook, and Microsoft, enabling users to log in using their existing accounts. This simplifies the user experience and reduces the overhead of managing multiple login systems."
        },
        {
            title: "6. Secure Service-to-Service Communication",
            descriptionTitle: "For applications that need to communicate with each other or with external services, Imator provides secure service-to-service communication. It uses tokens and encryption to ensure that all data exchanges are secure and authenticated, protecting your systems from unauthorized access and data breaches."
        }, 
    ],
        practicalTitleExample: "A Practical Example: Sync Code and Imator",
        practicalTitleDescription: "As part of the process of integrating Imator into your organization, you may need to register a company account. This involves sending a registration request to the Imator endpoint. The required information includes both user and organization details. Here’s an example of the data that needs to be sent in the request to the account/register-company endpoint. Sync Code decided to use Imator to manage authentication, authorization, and multi-tenancy across all its apps.",
        practicalTitleDescription2: "Orientim në Karrierë (ONK) and FLIP3 are a simple application developed by Sync Code that utilizes Imator for authentication and permission management. The configuration involves defining API resources and scopes to control access to various features. Each client organization can have specific permissions and access controls, managed centrally through Imator. When a user from one of these organizations logs in, the Flip3 app sends a request to Imator with the relevant organization ID and application ID. Imator then generates a self-signed token, encrypted with keys unique to the organization, ensuring secure and authenticated access to the application.",
        specialSections: [
            {
              titleS: "Registering an application user",
              description: "After The user who registers the company is the first company admin and can add other admins or application users by sending a request to the account/register endpoint:",
              imageS: imator3
            },
            {
              titleS: "Logging in a User",
              description: "After registering a company and setting up applications, users need to log in to access the system. This is done by sending a login request to the /account/login endpoint. The required information includes the user’s email, password, organization ID, and application ID. Here’s an example of the data that needs to be sent in the login request. When this request is sent, Imator will authenticate the user and, if successful, generate an access token. This access token is self-signed and includes the necessary information about the user, their organization, and their permissions. The token allows the user to interact with the applications they have access to, ensuring that they can only access resources they are authorized to use. The self-signed access token can be validated by the ONK or Flip3 applications, ensuring that each request made by the user is secure and authenticated. This validation process is crucial for maintaining the integrity and security of the applications, as it ensures that only legitimate users can access and interact with the system.",
              imageS: imator4
            },
            {
              titleS: "",
              description: "This process allows ONK and Flip3 to securely manage user authentication and authorization through Imator, maintaining a consistent and secure approach to user management across the organization.",
              imageS: imator5
            },
            {
              titleS: "Validate self signed tokens from applications like ONK or Flip3",
              description: "To ensure secure and authenticated communication, applications like ONK and Flip3 can validate self-signed tokens generated by Imator. The process involves configuring the authentication middleware in the application to validate these tokens using specific parameters. Here’s an example of how to set up this configuration in an ASP.NET Core application:",
              imageS: imator6
            },
            {
              titleS: "Verifying User API Scopes with Imator",
              description: "After successfully authenticating a user, ONK and Flip3 can further enhance security by verifying the user’s permissions for specific API scopes with Imator. This verification process involves sending a request to Imator with the user ID, organization ID, and the desired API scopes. Imator responds with whether the user has the necessary permissions to perform the requested actions. After successfully authenticating a user, ONK and Flip3 can further enhance security by verifying the user’s permissions for specific API scopes with Imator. This verification process involves sending a request to Imator with the user ID, organization ID, and the desired API scopes. Imator responds with whether the user has the necessary permissions to perform the requested actions. For instance, the application could make an API call to Imator like this:",
              imageS: imator7
            }
          ],
          conclusion: "The Power of Imator",
          conclusion2: "Imator offers a comprehensive solution for managing authentication, authorization, and multi-tenancy in modern applications. By centralizing these critical security functions, Imator not only simplifies the development process but also enhances security and compliance. Whether you’re managing a handful of applications or a complex multi-tenant environment, Imator provides the tools you need to implement robust security measures and streamline user management.",
          conclusion3: "For organizations like Sync Code, Imator has proven invaluable in managing security across a diverse range of applications. By adopting Imator, you can ensure that your applications are secure, compliant, and easy to manage, allowing you to focus on delivering value to your users. In a world where security threats are constantly evolving, having a reliable and comprehensive security solution like Imator is essential. Start integrating Imator into your applications today and experience the benefits of a unified security platform.",
          writeEmail: "If you want to learn more for Imator or are interested in implementing similar solutions for your business, purposes do not hesitate to contact us at Sync Code"
    }
,    
    {
    id:"orientimi-ne-karriere",
    workName: "Orientim në Karrierë",
    technologies: "Angular JS / Tailwind CSS / C# .NET / Sql Server",
    image: work1,
    jobImage1: orientimiNeKarriere,
    jobImage2: orientimiNeKarriere2,
    jobImage3: orientimiNeKarriere3,
    jobImage4: orientimiNeKarriere4,
    jobImage5: orientimiNeKarriere5,    
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
    jobImage3: via3,
    shortTitle: "Innovative Construction Solutions",
    category: "Web Design & Web Development",
    clientExpectations: "Expect a dynamic and user-friendly website that showcases VIA Shpk's innovative construction solutions. Ensure the platform highlights their portfolio, services, and client testimonials effectively, emphasizing their commitment to quality and excellence in the construction industry.",
    partnershipResult: "Partnering with VIA Shpk is more than a project; it's a collaboration towards excellence. Our website development for VIA Shpk not only enhances their online presence but also supports their mission to deliver top-notch construction services. The intuitive design and robust functionality provide a seamless experience for potential clients, showcasing VIA Shpk's expertise and dedication.",
    description: "VIA Shpk is a leading construction company renowned for its innovative solutions and high-quality projects. The website we developed for VIA Shpk offers a comprehensive overview of their services, including residential, commercial, and infrastructure projects. It features a modern design, easy navigation, and integrated tools for client interaction.",
    liveLink: "http://www.via-ks.com/",
},{
    id:"flip3-grc",
    workName: "Flip3 GRC",
    technologies:"Angular JS / Bootstrap / C# .NET / Sql Server",
    image: work2,
    jobImage1: work2,
    jobImage2: flipgrc,
    jobImage3: flipgrc1,
    shortTitle: "Manage governance, risk and compliance platform",
    category: "Web Design & Web Development",
    clientExpectations: "Expect a robust system that effectively manages governance, risk, and compliance aspects within your organization. Ensure that Flip3 provides comprehensive tools for overseeing and optimizing governance processes.",
    partnershipResult: "Choosing Flip3 as your governance, risk, and compliance (GRC) management platform is not just a transaction; it's a commitment to a successful partnership. As you leverage the platform and build a foundation for success. The platform's robust tools help create a risk-resilient environment, minimizing the impact of potential challenges.",
    description: "Flip3 helps your company manage governance, risk and compliance. You can extend Flip3 by adding other modules such as Request Management, Change Management or Privacy Management. It can be hosted on premise or in cloud and also comes with a ready to use expsed API, which you can use for faster integration with other systems.",
    liveLink: "http://www.flip3grc.com/",
    tutorialLink: "https://www.youtube.com/watch?v=eMgwe-c02Zk"
},{
    id:"gdpr-platform",
    workName: "GDPR Platform",
    technologies:"Angular JS / Bootstrap / C# .NET / Sql Server",
    image: gdpr,
    jobImage1: gdpr,
    jobImage2: gdpr2,
    jobImage3: gdpr3,
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
    jobImage1: eurokos1,
    jobImage2: eurokos2,
    jobImage3: eurokos3,
    shortTitle: "Innovative Construction and Solar Solutions",
    category: "Web Design & Web Development",
    clientExpectations: "Eurokos aimed to establish a robust online presence that highlights their cutting-edge technology projects in construction and solar energy across Kosovo and Albania. The goal was to create an intuitive and visually appealing platform that showcases their expertise and innovation.",
    partnershipResult: "Through collaborative efforts, we successfully delivered a platform that meets the highest standards of user experience and functionality, effectively communicating Eurokos' industry leadership.",
    description: "Eurokos is a leading construction and solar company in Kosovo and Albania. Our platform highlights their innovative projects and technological advancements. Visitors can explore their portfolio, discover their solutions, and understand their impact on sustainability. The site offers seamless navigation and a responsive design for optimal viewing on any device.",
    liveLink: "http://www.eurokos.net/",
},{
    id:"verve-decor",
    workName: "VERVE Decor",
    technologies:"React JS / Tailwind CSS / Strapi CMS / PostgreSQL",
    image: work4,
    jobImage1: verve,
    jobImage2: verve3,
    jobImage3: verve2,
    shortTitle: "e-Commerce website",
    category: "Web Design & Web Development",
    clientExpectations: "Clients expect an intuitive and easy-to-navigate user interface that provides a seamless shopping experience for their customers. An efficient and streamlined shopping cart and checkout process are crucial. Clients expect a minimal number of steps, easy form filling, and various payment options to reduce cart abandonment.",
    partnershipResult: "We express our deepest gratitude for entrusting us with your vision. We look forward to witnessing your brand's continued happiness and success in the digital realm.",
    description: "Experience the power of easy navigation, intuitive filters, and a smooth checkout process that makes eCommerce shopping a joy. Our application is optimized for performance, ensuring a quick and secure transaction every time you indulge in the convenience of online shopping. Your data security is our top priority, and our robust payment systems guarantee a safe and reliable eCommerce experience.",
    liveLink: "https://vdecor.vercel.app/",
    // tutorialLink: "https://www.youtube.com/watch?v=653svNH-0Vs&t=7s"
},{
    id:"whose-app",
    workName: "WhoseApp",
    technologies:"Ionic / Swift ",
    image: whose,
    jobImage1: whose1,
    jobImage2: whose2,
    jobImage3: whose3,
    shortTitle: "You lost it, WHOSE GOT IT!",
    category: "Mobile Development",
    clientExpectations: "Clients expect a reliable and user-friendly mobile application that simplifies the process of recovering lost items. The app should feature intuitive navigation, real-time notifications, and secure handling of user data. A smooth onboarding process, seamless integration with smart stickers, and efficient communication tools are key to reducing the stress associated with lost belongings.",
    partnershipResult: "We express our deepest gratitude for entrusting us with your vision. We look forward to witnessing WhoseApp's impact as it brings peace of mind and security to users everywhere.",
    description: `Discover the convenience and security of WhoseApp – because losing your valuables doesn’t have to be the end of the story. With WhoseApp, you can confidently say, "You lost it, WHOSE GOT IT!" Our innovative mobile application, built with Ionic and Swift, pairs seamlessly with WHOSE smart stickers to secure your belongings. Simply attach a sticker to your item, and if it ever goes missing, the finder can scan it to notify you instantly.`,
}
]

export { works }



