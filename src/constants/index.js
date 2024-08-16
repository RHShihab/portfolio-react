import IubBongomarine from "../assets/projects/IubBongomarine.png";
import Shuchimita from "../assets/projects/Shuchimita.png";

export const HERO_CONTENT = `I am a multidisciplinary engineer with a passion for blending technology and design. From crafting intricate 3D models to developing seamless web interfaces and building robust embedded systems, I bring your ideas to life with creativity and precision. Proficient in tech stacks like React, Node.js, C++, python, and Fusion 360, I excel in both solo projects and collaborative environments. Let's create something extraordinary together.`;

export const ABOUT_TEXT = `With 4 years of experience in designing medical products that adhere to international standards, I specialize in offering all-in-one IoT solutions. My expertise spans 3D modeling using Fusion 360, circuit design, and coding for embedded systems. I'm well-versed in creating custom web interfaces using React, along with mobile apps using Flutter.
I'm also deeply passionate about robotics, having led a team to represent Bangladesh in the SAUVC 2024 competition. My interest in robotics drives me to innovate and collaborate, making me a strong team player who thrives on challenging projects. Whether it's an IoT project or a complex robotic system, I'm here to turn your vision into reality.`;

export const EXPERIENCES = [
  {
    year: "2023 - 2024",
    role: "Junior Web Developer",
    company: "Bioforge Health Systems Ltd",
    description: `-	Develop front-end of HMS software using tools such Material UI, Recharts, React Leaflet which serves to over 9000 patients monthly\n
    - Create wireframes of website UI using software such figma
-	Over 300+ contributions and issues closed in GitHub project board
`,
    technologies: ["React.js", "Node.js", "MaterialUI", "PostgreSQL"],
  },
  {
    year: "2019 - 2023",
    role: "3D Product Designer",
    company: "Bioforge Health Systems Ltd",
    description: `-	3D model and fabricate 12 biomedical devices using rapid prototyping tools such 3D modeling, 3D printing, laser cutting\n
-	Collaborate with MIT Solve community, Gates Foundation, Nonfiction Design on developing human-centric medical devices\n
-	Navigate through IEC Standards while developing Neonatal Incubator, Photo Therapy Light
`,
    technologies: ["Fusion360", "3D Printing", "Laser Cutting"],
  },
];

export const PROJECTS = [
  {
    title: "IUB Bongomarine",
    subTitle: "Autonomous Underwater Vehicle",
    image: IubBongomarine,
    description: `-	Research and design watertight autonomous vehicle using ESP32 and Raspberry Pi\n
-	Implement object tracking with OpenCV and closed loop control system using custom Inertial Measurement Unit\n
-	Lead a team in representing Bangladesh in the international, SAUVC 2024 competition
`,
    technologies: ["esp32", "Raspberry Pi", "OpenCV", "Python"],
  },
  {
    title: "Shuchimita",
    subTitle: "IoT Based Sanitary Napkin Dispenser",
    image: Shuchimita,
    description: `-	Develop an automated dispenser solution using ESP32 with WiFi-enabled transmission to the database using JSON via WebSocket and MQTT Protocols\n
-	Fabricate contactless interaction utilizing student RFID cards
`,
    technologies: ["IoT", "ESP32", "React", "Node.js", "Supabase"],
  },
];

export const CONTACT = {
  address: "Dhaka, Bangladesh",
  email: "shihab.hasan3322@gmail.com",
};
