const allQuestions = [
    // MODULE 1: Understanding Tech Basics
    { module: "Module 1", q: "What are the four stages of the computing cycle?", options: ["Input, Storage, Processing, Output", "Input, Processing, Storage, Output", "Gathering, Analysis, Loading, Saving", "Reading, Thinking, Writing, Storing"], correct: 1 },
    { module: "Module 1", q: "Give an example of an input device.", options: ["Monitor", "Printer", "Keyboard", "Speakers"], correct: 2 },
    { module: "Module 1", q: "What is the primary purpose of a server compared to a personal computer?", options: ["It is smaller and more portable", "It provides resources and services to multiple users", "It is only used for high-end gaming", "It cannot connect to a network"], correct: 1 },
    { module: "Module 1", q: "Define 'Digital Citizenship' in a professional context.", options: ["Having citizenship in more than one country", "The responsible, ethical, and safe use of digital tools", "Developing high-speed internet hardware", "Working exclusively in an office environment"], correct: 1 },
    { module: "Module 1", q: "What is 'Malware' and how does it typically enter a system?", options: ["Useful software that enters via official updates", "Malicious software entering via risky links or attachments", "Hardware that breaks over time", "A type of internet browser"], correct: 1 },
    { module: "Module 1", q: "Identify one type of wearable computing device.", options: ["Desktop PC", "Smartwatch", "Database Server", "Router"], correct: 1 },
    { module: "Module 1", q: "What role does 'Storage' play in the computing cycle?", options: ["Displaying images to the user", "Saving data for later use", "Receiving user clicks", "Calculating math equations"], correct: 1 },
    { module: "Module 1", q: "Describe the difference between AR and VR.", options: ["AR replaces the world; VR adds to it", "AR adds digital images to the physical world; VR creates a new interactive world", "VR requires no headset; AR does", "There is no difference"], correct: 1 },
    { module: "Module 1", q: "What is the Internet of Things (IoT)?", options: ["The list of every website on the web", "A network of non-traditional devices connected to the internet", "A programming language", "A type of physical firewall"], correct: 1 },
    { module: "Module 1", q: "How do jobs adapt when new technology is introduced?", options: ["Jobs are always eliminated immediately", "Workers use technology to solve problems and improve efficiency", "Technology has no impact on professional roles", "Jobs require less training"], correct: 1 },
    { module: "Module 1", q: "List one benefit of pursuing a career in IT.", options: ["No need to ever learn new skills", "Remote work flexibility and high demand", "Physical labor requirement", "Guaranteed 100% safety from hackers"], correct: 1 },
    { module: "Module 1", q: "What is the 'Output' phase of the computing cycle?", options: ["The computer saves a file to the disk", "Information is presented to the user via screen or printer", "The CPU performs a calculation", "The user types on a keyboard"], correct: 1 },
    { module: "Module 1", q: "Why is it important to report inappropriate online behavior?", options: ["To win a digital award", "To maintain a safe and ethical digital environment", "To increase internet speed", "To help companies collect more data"], correct: 1 },
    { module: "Module 1", q: "What does 'Processing' refer to in a computer?", options: ["Typing on a keyboard", "The manipulation of data to follow instructions", "Printing a document", "Sending an email"], correct: 1 },
    { module: "Module 1", q: "Name a common computing device used for mobile productivity.", options: ["Mainframe", "Tablet", "Workstation", "Rack Server"], correct: 1 },
    { module: "Module 1", q: "How can a user protect their identity online?", options: ["Sharing passwords with trusted friends", "Using strong passwords and protecting personal data", "Posting their zip code on all public profiles", "Clicking every link to verify security"], correct: 1 },
    { module: "Module 1", q: "What is the main outcome of effective technology use?", options: ["Using more electricity", "Successfully implementing technology to solve problems", "Building a computer from scratch", "Memorizing every coding language"], correct: 1 },
    { module: "Module 1", q: "Give an example of an IoT device found in a modern home.", options: ["Smart Thermostat", "Wired Mouse", "Standard Toaster", "CRT Monitor"], correct: 0 },
    { module: "Module 1", q: "What is a 'Smart Thermostat' categorized as?", options: ["Legacy Device", "IoT Device", "Input-only Device", "Central Server"], correct: 1 },
    { module: "Module 1", q: "Why must digital tools be used ethically?", options: ["To ensure the computer doesn't crash", "To maintain trust and safety in the digital world", "Because the internet is owned by a single person", "To avoid paying for software"], correct: 1 },

    // MODULE 2: Data and Privacy
    { module: "Module 2", q: "What does PII stand for?", options: ["Public Internet Interface", "Personally Identifiable Information", "Personal Internal Index", "Private Information Integration"], correct: 1 },
    { module: "Module 2", q: "Give an example of 'Direct PII.'", options: ["Zip Code", "Gender", "Social Security Number", "Favorite Color"], correct: 2 },
    { module: "Module 2", q: "What is 'Indirect PII'?", options: ["A person's full legal name", "Information that reveals identity when combined with other data", "Data that has been deleted", "Information only known by the government"], correct: 1 },
    { module: "Module 2", q: "Define a 'Threat Actor.'", options: ["An actor in a movie about hackers", "A cybercriminal that steals or compromises personal data", "A software program that fixes errors", "A user who forgets their password"], correct: 1 },
    { module: "Module 2", q: "How do companies typically 'monetize' user data?", options: ["By deleting it to save space", "By selling it or using it for targeted advertising", "By giving it away for free", "By encrypting it so no one can see it"], correct: 1 },
    { module: "Module 2", q: "What are browser 'Cookies'?", options: ["Physical snacks", "Small files used to store user preferences and track sessions", "Hardware components", "Software that blocks all advertisements"], correct: 1 },
    { module: "Module 2", q: "Why is encryption fundamental to cybersecurity?", options: ["It makes the computer run faster", "It protects data by making it unreadable without a key", "It allows everyone to see your data", "It is only used for internet speed"], correct: 1 },
    { module: "Module 2", q: "What is the first step in resetting a Windows 11 password?", options: ["Turning off the monitor", "Going to Start, then 'Settings'", "Deleting the 'Users' folder", "Opening the command prompt"], correct: 1 },
    { module: "Module 2", q: "When should a company change its passwords immediately?", options: ["Every morning at 8 AM", "If the company or a user was hacked", "Only when a new employee is hired", "Once every five years"], correct: 1 },
    { module: "Module 2", q: "What is the role of a Data Privacy Specialist?", options: ["To design computer chips", "To understand and implement privacy regulations", "To sell customer data", "To write code for mobile games"], correct: 1 },
    { module: "Module 2", q: "How does a Data Analyst contribute to a company’s use of data?", options: ["By building computer hardware", "By finding patterns and trends in data", "By managing physical security", "By cleaning the server room"], correct: 1 },
    { module: "Module 2", q: "What is 'Identity Fraud'?", options: ["Losing your ID card", "When someone pretends to be you using your personal info", "Using a fake name on a video game", "Upgrading your computer's OS"], correct: 1 },
    { module: "Module 2", q: "Name one way to maintain privacy in online spaces.", options: ["Posting your home address", "Using strong, unique passwords and privacy settings", "Sharing your password hint publicly", "Accepting all cookies without reading"], correct: 1 },
    { module: "Module 2", q: "What is the difference between data and information?", options: ["Data is useful; information is raw", "Data is raw facts; information is data processed to be useful", "There is no difference", "Information is only for humans"], correct: 1 },
    { module: "Module 2", q: "Why might a zip code be considered Indirect PII?", options: ["It reveals your exact SSN", "It identifies a location but needs more data to identify a person", "It is a secret code for the government", "It can never be used to identify anyone"], correct: 1 },
    { module: "Module 2", q: "What is the purpose of a 'password hint'?", options: ["To tell everyone what your password is", "To help the user remember their password", "To replace your password entirely", "To make your password easier for hackers"], correct: 1 },
    { module: "Module 2", q: "How do algorithms use collected data?", options: ["To delete the user's files", "To make predictions or target content to the user", "To physically heat up the CPU", "To translate English into Binary"], correct: 1 },
    { module: "Module 2", q: "What is a Data Privacy Attorney?", options: ["A software program", "B) A legal professional who advocates for data protection laws", "C) An IT technician", "D) A person who sells data"], correct: 1 },
    { module: "Module 2", q: "Why do users try to keep data private while companies collect it?", options: ["Users are afraid of electricity", "Users want protection while companies want to monetize", "Companies want to protect users from the internet", "There is no conflict of interest"], correct: 1 },
    { module: "Module 2", q: "What is the 'foundation of cybersecurity' mentioned in this module?", options: ["Internet speed", "Passswords and encryption", "The color of the computer", "The type of keyboard used"], correct: 1 },

    // MODULE 3: Internet Technologies
    { module: "Module 3", q: "What is the 'Internet'?", options: ["A single computer", "A global network of computing devices sharing info", "A specific website like Google", "A physical cable connecting two houses"], correct: 1 },
    { module: "Module 3", q: "Define TCP/IP.", options: ["A type of computer screen", "The primary suite of protocols used for internet communication", "A brand of router", "A wireless password format"], correct: 1 },
    { module: "Module 3", q: "What is the difference between the Internet and the World Wide Web?", options: ["They are exactly the same", "Internet is the infrastructure; the Web is a service on it", "Web is hardware; Internet is software", "Internet is only for email"], correct: 1 },
    { module: "Module 3", q: "What does 'latency' mean?", options: ["The total weight of the computer", "The delay or time it takes for data to travel", "The maximum speed of the download", "The number of users"], correct: 1 },
    { module: "Module 3", q: "Identify three types of ISPs.", options: ["Monitor, Mouse, Keyboard", "Fiber, Cable, Satellite", "Windows, MacOS, Linux", "RAM, CPU, GPU"], correct: 1 },
    { module: "Module 3", q: "What equipment is required for Satellite Internet?", options: ["Just a cell phone", "Satellite dish, modem, and router", "A very long ethernet cable", "A standard TV antenna"], correct: 1 },
    { module: "Module 3", q: "What is a 'Web Browser'?", options: ["A piece of hardware", "A software application used to access and view websites", "An ISP", "D) A type of search engine only"], correct: 1 },
    { module: "Module 3", q: "How does P2P architecture differ from traditional models?", options: ["P2P has no central server; devices connect directly", "P2P is much slower", "P2P requires a specialized mainframe", "Traditional models do not use the internet"], correct: 0 },
    { module: "Module 3", q: "What is the purpose of a browser extension?", options: ["To make the window larger", "To add specific features or tools to the browser", "To increase monitor size", "To change the operating system"], correct: 1 },
    { module: "Module 3", q: "List a safe browsing habit.", options: ["Clicking every pop-up ad", "Checking for 'HTTPS' and avoiding suspicious links", "Sharing your browser history", "Turning off your firewall"], correct: 1 },
    { module: "Module 3", q: "What is 'Fixed Wireless Internet'?", options: ["Moving internet on a train", "Internet delivered via radio waves to a fixed antenna", "A wired fiber optic connection", "Internet that only works at night"], correct: 1 },
    { module: "Module 3", q: "Name a common job role involving Internet technologies.", options: ["Chef", "Internet Service Technician", "Carpenter", "Pilot"], correct: 1 },
    { module: "Module 3", q: "What is a 'Web Designer'?", options: ["Someone who fixes broken routers", "A professional who creates the visual layout of websites", "A person who installs satellite dishes", "A data privacy attorney"], correct: 1 },
    { module: "Module 3", q: "How many bits are typically in a kilobit?", options: ["10", "1,000", "1,024", "8"], correct: 1 },
    { module: "Module 3", q: "What is the typical speed range for Satellite Internet?", options: ["1 Mbps to 5 Mbps", "3 Mbps up to 250 Mbps", "1,000 Mbps and over", "Only 1 kbps"], correct: 1 },
    { module: "Module 3", q: "What does a modem do?", options: ["It prints documents", "It converts signals to allow an internet connection", "It stores large video files", "It acts as a primary input device"], correct: 1 },
    { module: "Module 3", q: "Why is the Internet a 'network of networks'?", options: ["It is one single cable", "It connects millions of private and public networks", "It is only used by large companies", "It is owned by one government"], correct: 1 },
    { module: "Module 3", q: "What is a 'Website'?", options: ["A type of hardware", "A collection of related web pages under one domain", "A web browser", "A social media marketing manager"], correct: 1 },
    { module: "Module 3", q: "How does a router assist in Internet connectivity?", options: ["It converts light to electricity", "It directs data traffic between different networks", "It increases RAM", "It scans for physical viruses"], correct: 1 },
    { module: "Module 3", q: "What is the role of a Social Media Marketing Manager?", options: ["To build hardware", "To help businesses engage with customers/promote brands", "To fix broken cables", "To write machine code"], correct: 1 },

    // MODULE 4: Cybersecurity
    { module: "Module 4", q: "List the three components of the CIA Triad.", options: ["Computer, Internet, Access", "Confidentiality, Integrity, Availability", "Control, Identity, Authentication", "Coding, Integrity, Accounting"], correct: 1 },
    { module: "Module 4", q: "Define 'Integrity' in security.", options: ["Keeping secrets", "Ensuring data has not been modified by unauthorized users", "Making sure the computer is always on", "D) Telling the truth to your boss"], correct: 1 },
    { module: "Module 4", q: "What is 'Non-repudiation'?", options: ["Being able to fix a broken computer", "Ensuring a person cannot deny an action they performed", "Having a very strong password", "Deleting your browser history"], correct: 1 },
    { module: "Module 4", q: "Identify the five functions of the NIST Framework.", options: ["Input, Process, Output, Storage, Feedback", "Identify, Protect, Detect, Respond, Recover", "Read, Write, Execute, Delete, Move", "Login, Logout, Lock, Unlock, Reset"], correct: 1 },
    { module: "Module 4", q: "What is the difference between Authentication and Authorization?", options: ["They are the same", "Auth proves who you are; Authorization determines what you can do", "Auth is for hardware; Authorization is for software", "Authentication is always physical"], correct: 1 },
    { module: "Module 4", q: "What is a 'Firewall'?", options: ["A wall to stop fires", "A tool that monitors/controls network traffic", "A type of computer virus", "A browser extension for shopping"], correct: 1 },
    { module: "Module 4", q: "Why is 'Patch Management' important?", options: ["It makes the computer look better", "It ensures computers run reliably and fixes vulnerabilities", "It increases download speed", "It is only for video games"], correct: 1 },
    { module: "Module 4", q: "What does a Cybersecurity Analyst do?", options: ["Writes blog posts", "Defends networks and data from cyber threats", "Sells computers", "Designs laptop casings"], correct: 1 },
    { module: "Module 4", q: "Define 'MFA'.", options: ["Using the same password for ten years", "Using two or more methods to verify identity", "Letting multiple people use one account", "Writing your password on a post-it"], correct: 1 },
    { module: "Module 4", q: "What is a 'Penetration Tester'?", options: ["Someone who tests how waterproof a phone is", "A professional hired to find vulnerabilities via simulated attacks", "A person who installs antivirus", "A full stack developer"], correct: 1 },
    { module: "Module 4", q: "How does antivirus software protect a device?", options: ["By cleaning dust", "By detecting and removing malicious software", "By making the battery last longer", "By increasing CPU speed"], correct: 1 },
    { module: "Module 4", q: "What happens to an OS at 'End of Life'?", options: ["It becomes free", "It no longer receives security updates or support", "It automatically deletes all user files", "It runs faster because it is older"], correct: 1 },
    { module: "Module 4", q: "What is the 'Identify' function in NIST?", options: ["Finding a hacker in a crowd", "Understanding the business context and resources", "Changing your profile picture", "Deleting suspicious emails"], correct: 1 },
    { module: "Module 4", q: "Give an example of a 'Physical' security factor.", options: ["A password", "A fingerprint or keycard", "A secret question", "A username"], correct: 1 },
    { module: "Module 4", q: "What is 'Accounting' in security?", options: ["Doing company taxes", "Tracking user activity and resource usage", "Saving money on licenses", "Calculating the cost of a breach"], correct: 1 },
    { module: "Module 4", q: "Why should you clear your browser history?", options: ["To make the internet faster", "To protect privacy and remove traces of activity", "To delete the websites", "To upgrade your browser"], correct: 1 },
    { module: "Module 4", q: "What is a 'Security Breach'?", options: ["When a computer is turned off incorrectly", "An incident resulting in unauthorized access to data", "A regular software update", "Buying a new firewall"], correct: 1 },
    { module: "Module 4", q: "Define 'Availability' in the CIA Triad.", options: ["Making sure data is kept secret", "Ensuring systems and data are accessible to authorized users", "Having a backup of your password", "The speed of the connection"], correct: 1 },
    { module: "Module 4", q: "What is a 'Cybersecurity Engineer'?", options: ["Someone who fixes monitors", "A professional who designs and creates secure systems", "A person who writes marketing emails", "A data analyst"], correct: 1 },
    { module: "Module 4", q: "What is the goal of 'Software Patching'?", options: ["To add game levels", "To fix bugs and close security holes", "To make software expensive", "To uninstall the program"], correct: 1 },

    // MODULE 5: Networking
    { module: "Module 5", q: "What is the base of the Binary numbering system?", options: ["Base 10", "Base 2", "Base 16", "Base 8"], correct: 1 },
    { module: "Module 5", q: "How many bits are in one byte?", options: ["4", "8", "16", "1024"], correct: 1 },
    { module: "Module 5", q: "What is the decimal value of binary 10?", options: ["1", "2", "10", "0"], correct: 1 },
    { module: "Module 5", q: "What is 'ASCII' used for?", options: ["Cooling the computer", "Coding formats that represent text", "A type of network cable", "A wireless frequency"], correct: 1 },
    { module: "Module 5", q: "How many bytes are in 1 megabyte (MB)?", options: ["1,000", "1,048,576", "100", "8"], correct: 1 },
    { module: "Module 5", q: "Describe Hexadecimal.", options: ["System with only 1s and 0s", "Base-16 system used to represent binary for humans", "System using only the letters A-Z", "System for counting physical items"], correct: 1 },
    { module: "Module 5", q: "What digits/letters are used in Hexadecimal?", options: ["0-9 and A-F", "1-10 and G-M", "Only 0 and 1", "0-7 only"], correct: 0 },
    { module: "Module 5", q: "Define a LAN.", options: ["A network for an entire country", "A network confined to a small area like a home", "A network using only satellites", "The entire internet"], correct: 1 },
    { module: "Module 5", q: "What is 'Virtualization'?", options: ["Playing a video game", "Running multiple OSs on one physical machine", "Buying a new computer", "Connecting to a website"], correct: 1 },
    { module: "Module 5", q: "What is a 'Hypervisor'?", options: ["A very fast computer", "Software that creates and runs virtual machines", "A type of network router", "A specialized keyboard"], correct: 1 },
    { module: "Module 5", q: "List one benefit of virtual servers.", options: ["They are physically larger", "They are more cost-effective and easier to manage", "They do not require electricity", "They cannot be hacked"], correct: 1 },
    { module: "Module 5", q: "What is 'Cloud Virtualization'?", options: ["Putting a computer in the sky", "Virtual copies of resources hosted over the internet", "Weather forecasting software", "A physical hard drive"], correct: 1 },
    { module: "Module 5", q: "Describe 'Container Virtualization.'", options: ["Putting a computer in a shipping container", "A lightweight way to run apps with their own environments", "A very slow way to run software", "Only used for storing photos"], correct: 1 },
    { module: "Module 5", q: "What is the role of a Network Architect?", options: ["Cleaning network cables", "Creating network plans and design guidelines", "Selling internet packages", "Writing mobile apps"], correct: 1 },
    { module: "Module 5", q: "Difference between a bit and a byte?", options: ["A byte is smaller than a bit", "A bit is a single 0 or 1; a byte is 8 bits", "There is no difference", "Bits are for storage; bytes are for speed"], correct: 1 },
    { module: "Module 5", q: "In Hexadecimal, what value does 'F' represent?", options: ["10", "15", "100", "0"], correct: 1 },
    { module: "Module 5", q: "Why is binary used for storage?", options: ["Easy for humans to read", "Hardware uses electrical states (on/off) mapping to 1/0", "No other systems exist", "To make computers expensive"], correct: 1 },
    { module: "Module 5", q: "What does a Network Administrator do?", options: ["Designs building architecture", "Keeps businesses and organizations connected and protected", "Writes newspaper articles", "Acts in movies"], correct: 1 },
    { module: "Module 5", q: "What is a WAN?", options: ["A network inside a room", "A network covering a large area like a city/country", "A network with no security", "A network that only uses Bluetooth"], correct: 1 },
    { module: "Module 5", q: "How does virtualization protect against viruses?", options: ["It kills viruses physically", "It isolates infected systems in a virtual environment", "It makes the computer too fast", "It uninstalls all software"], correct: 1 },

    // MODULE 6: Applications and Software
    { module: "Module 6", q: "What is 'Software'?", options: ["Physical parts", "A set of instructions telling hardware what to do", "The plastic casing", "A type of internet cable"], correct: 1 },
    { module: "Module 6", q: "Name three popular operating systems.", options: ["Chrome, Firefox, Safari", "Windows, macOS, Linux", "Word, Excel, PowerPoint", "Dell, HP, Apple"], correct: 1 },
    { module: "Module 6", q: "What is 'Productivity Software'?", options: ["Software for playing games", "Apps helping users complete tasks efficiently", "Programs making computer slower", "Software used to create viruses"], correct: 1 },
    { module: "Module 6", q: "List the steps of CompTIA Troubleshooting Methodology.", options: ["Turn off, Turn on, Call help", "Identify, Establish theory, Test, Plan, Verify, Document", "Delete files, Reinstall, Buy new", "Search Google, Ask, Give up"], correct: 1 },
    { module: "Module 6", q: "What is the first step in troubleshooting?", options: ["Replacing the hard drive", "Identifying the problem", "Documenting findings", "Testing a theory"], correct: 1 },
    { module: "Module 6", q: "What to do during the 'Document' stage?", options: ["Throw away notes", "Record problem, steps taken, and final solution", "Tell no one", "Only write what didn't work"], correct: 1 },
    { module: "Module 6", q: "Why is 'Software Licensing' important?", options: ["Makes software look better", "Defines legal right to use and prevents piracy", "Increases speed", "Only for free software"], correct: 1 },
    { module: "Module 6", q: "Role of an Application Developer?", options: ["Fix broken printers", "Design, build, and maintain software apps", "Sell software", "Clean the server room"], correct: 1 },
    { module: "Module 6", q: "Define a 'Full Stack Developer.'", options: ["Someone who only knows Word", "A developer working on both front and back end", "Someone who builds physical computer stacks", "A data privacy specialist"], correct: 1 },
    { module: "Module 6", q: "What does a Software QA Analyst do?", options: ["Writes final code", "Tests software to find bugs and ensure quality", "Designs company logo", "Manages company budget"], correct: 1 },
    { module: "Module 6", q: "Example of 'Collaboration Software.'", options: ["Microsoft Word (Offline)", "Microsoft Teams or Slack", "Windows Calculator", "A solitaire game"], correct: 1 },
    { module: "Module 6", q: "How to safely remove software?", options: ["Deleting desktop icon", "Using official 'Uninstall' process or Add/Remove programs", "Deleting 'Program Files' manually", "Formatting the hard drive"], correct: 1 },
    { module: "Module 6", q: "What is an email client?", options: ["A person sending emails", "A software application to manage email (Outlook)", "An ISP", "A type of web browser"], correct: 1 },
    { module: "Module 6", q: "Why is a 'Theory of Probable Cause' established?", options: ["To blame someone", "To narrow down the most likely reason before acting", "To waste time", "To prove you know more"], correct: 1 },
    { module: "Module 6", q: "What is 'Messaging Software'?", options: ["Software for spreadsheets", "Apps for real-time text communication (WhatsApp)", "Programs that only send emails", "A type of OS"], correct: 1 },
    { module: "Module 6", q: "Difference between mobile and desktop software?", options: ["Mobile is more powerful", "Mobile is designed for small touchscreens/mobile hardware", "Desktop cannot connect to internet", "No difference"], correct: 1 },
    { module: "Module 6", q: "What is 'Preventative Maintenance'?", options: ["Fixing after it breaks", "Actions to prevent a problem from reoccurring", "Buying a new PC monthly", "Using the PC for one hour a day"], correct: 1 },
    { module: "Module 6", q: "Why test a theory before acting?", options: ["To see if right without making it worse", "To wait for it to fix itself", "Required by law", "To use shift time"], correct: 0 },
    { module: "Module 6", q: "What is a 'Knowledge Base'?", options: ["A very smart person", "A centralized collection of solutions and documentation", "A box for old disks", "The brain of the computer"], correct: 1 },
    { module: "Module 6", q: "Purpose of software uninstallation?", options: ["To make software faster", "To completely remove software and associated files", "To hide it", "To update to newer version"], correct: 1 },

    // MODULE 7: Operating Systems
    { module: "Module 7", q: "What is an OS?", options: ["An app like Instagram", "Foundational software managing hardware/allowing apps to run", "The physical monitor", "An internet connection"], correct: 1 },
    { module: "Module 7", q: "Two main types of user interfaces?", options: ["Keyboard and Mouse", "CLI and GUI", "Internal and External", "Fast and Slow"], correct: 1 },
    { module: "Module 7", q: "Define 'Open-Source OS' and give an example.", options: ["Paid OS; Windows", "OS whose code is free to use; Linux", "Apple-only OS; macOS", "OS closed to public"], correct: 1 },
    { module: "Module 7", q: "What is an 'Embedded OS'?", options: ["OS for supercomputer", "Specialized OS built into a device (microwave/car)", "OS installed on USB", "Gaming version of Windows"], correct: 1 },
    { module: "Module 7", q: "How often does macOS release a new update?", options: ["Every day", "Usually once a year", "Every ten years", "When a device breaks"], correct: 1 },
    { module: "Module 7", q: "What is the 'File System'?", options: ["A physical filing cabinet", "Method OS uses to organize and store data on disk", "A type of antivirus", "A spreadsheet application"], correct: 1 },
    { module: "Module 7", q: "Why regular data backups?", options: ["To make hard drive heavier", "To ensure data recovery if lost or damaged", "To clear space", "To make computer faster"], correct: 1 },
    { module: "Module 7", q: "Where are deleted files moved first?", options: ["The cloud", "Recycle Bin or Trash", "The CPU", "A hidden internet folder"], correct: 1 },
    { module: "Module 7", q: "What is 'Backup Testing'?", options: ["Deleting files to see if found", "Verifying that backups work and can be restored", "Checking internet speed", "Installing new OS"], correct: 1 },
    { module: "Module 7", q: "Role of a Systems Administrator?", options: ["Designing graphics", "Keeping the computers and networks running smoothly", "Writing marketing copy", "Managing financial records"], correct: 1 },
    { module: "Module 7", q: "How does an OS manage hardware?", options: ["By moving parts", "Using 'Drivers' to communicate with components", "By turning off when hot", "It doesn't need to"], correct: 1 },
    { module: "Module 7", q: "Difference between 32-bit and 64-bit?", options: ["32-bit is newer", "64-bit handles larger amounts of data and RAM", "No modern difference", "32-bit for video; 64-bit for text"], correct: 1 },
    { module: "Module 7", q: "Name one 'Commercial OS.'", options: ["Linux", "Windows", "Python", "HTML"], correct: 1 },
    { module: "Module 7", q: "What is a 'Driver'?", options: ["Delivery person", "Small software allowing OS to talk to hardware", "Storage device", "A car game"], correct: 1 },
    { module: "Module 7", q: "Core functions of file management?", options: ["Typing, Printing, Scanning", "Creating, Deleting, Copying, and Moving files", "Gaming, Surfing, Chatting", "Coding, Compiling, Debugging"], correct: 1 },
    { module: "Module 7", q: "What is 'Carbonite' used for?", options: ["Cleaning screen", "Automatic cloud-based backup services", "High-speed processor", "Video editing"], correct: 1 },
    { module: "Module 7", q: "What is a 'Test Restore'?", options: ["Deleting current files", "Mock recovery process to ensure backup validity", "Reinstalling OS", "Buying new backup drive"], correct: 1 },
    { module: "Module 7", q: "Role of Computer and Info Systems Manager?", options: ["Fixing keyboards", "Planning/directing tech activities for a company", "Creating social posts", "Data scientist"], correct: 1 },
    { module: "Module 7", q: "How does an OS act as a mediator?", options: ["Arguing with user", "Sitting between user/apps and hardware", "Connecting to power", "Translating English to Spanish"], correct: 1 },
    { module: "Module 7", q: "Why use a CLI?", options: ["Better graphics", "Speed, automation, and deep system control via text", "Easier for beginners", "Required for games"], correct: 1 },

    // MODULE 8: Hardware
    { module: "Module 8", q: "Difference between volatile and persistent storage?", options: ["Volatile is slower", "Volatile loses data when off (RAM); persistent keeps it (SSD)", "Persistent is inside; volatile outside", "No difference"], correct: 1 },
    { module: "Module 8", q: "How many bytes in one Kilobyte (KB)?", options: ["1,000", "1,024", "8", "1,000,000"], correct: 1 },
    { module: "Module 8", q: "Unit used for photo and music files?", options: ["Kilobytes", "Megabytes (MB)", "Terabytes", "Bits"], correct: 1 },
    { module: "Module 8", q: "What is 'Throughput'?", options: ["Physical size of cable", "Actual amount of data moving through a system", "Maximum possible network speed", "Time to turn on computer"], correct: 1 },
    { module: "Module 8", q: "Define 'Bandwidth.'", options: ["Number of people in a band", "Maximum capacity of a communication channel", "Actual download speed", "Physical width of motherboard"], correct: 1 },
    { module: "Module 8", q: "What unit measures CPU speed?", options: ["Megabytes", "Hertz (Hz) or Gigahertz (GHz)", "Watts", "Bits per second"], correct: 1 },
    { module: "Module 8", q: "Purpose of the Motherboard?", options: ["Display images", "Main circuit board connecting all internal components", "Provide internet", "Store user photos"], correct: 1 },
    { module: "Module 8", q: "What does 'Hertz' represent in a CPU?", options: ["Weight of processor", "Number of cycles/instructions per second", "Amount of RAM", "Temperature"], correct: 1 },
    { module: "Module 8", q: "List three internal components.", options: ["Monitor, Mouse, Printer", "CPU, RAM, Motherboard", "Desk, Chair, Lamp", "Windows, Word, Excel"], correct: 1 },
    { module: "Module 8", q: "What is a 'GPU' used for?", options: ["General Processing; text", "Graphics Processing; rendering images/video", "Great Power Unit; electricity", "Global Position; maps"], correct: 1 },
    { module: "Module 8", q: "Role of the NIC?", options: ["To store data", "Network Interface Card; allows computer to connect to network", "To process graphics", "To manage power supply"], correct: 1 },
    { module: "Module 8", q: "What are peripheral devices?", options: ["Components inside CPU", "External devices connected to computer (mouse, printer)", "Internal wires", "Software applications"], correct: 1 },
    { module: "Module 8", q: "Example of external input device?", options: ["Monitor", "Mouse", "Speakers", "CPU"], correct: 1 },
    { module: "Module 8", q: "How to add a new network printer in Windows?", options: ["Throwing it away", "Settings > Devices > Printers & Scanners > Add a device", "Opening Microsoft Word", "Restarting the router"], correct: 1 },
    { module: "Module 8", q: "What is a 'Computer Hardware Design Engineer'?", options: ["Fixes screens", "Professional who designs/builds efficient components", "Laptop salesperson", "Web designer"], correct: 1 },
    { module: "Module 8", q: "What is 'RAM'?", options: ["Random Access Memory; fast, volatile temporary storage", "Read Access Memory; persistent storage", "Network cable", "Power source"], correct: 0 },
    { module: "Module 8", q: "What does 1 Gbps stand for?", options: ["1 Gigabyte per second", "1 Gigabit per second", "1 Gigahertz per second", "1 Great bit per second"], correct: 1 },
    { module: "Module 8", q: "What is 'Latency' in hardware?", options: ["Total system speed", "Delay/lag in communication between components", "Storage amount", "Physical size of RAM"], correct: 1 },
    { module: "Module 8", q: "What is a 'Form Factor'?", options: ["Math equation", "Physical size, shape, and layout of a component", "License agreement", "Processor speed"], correct: 1 },
    { module: "Module 8", q: "Why standardizing units is important in IT?", options: ["To make exams harder", "To ensure compatibility and common language", "To sell more hardware", "It is not"], correct: 1 },

    // MODULE 9: Databases
    { module: "Module 9", q: "What is a 'Database'?", options: ["Single text file", "Highly organized, multi-table digital storage system", "Web browser", "Physical filing cabinet"], correct: 1 },
    { module: "Module 9", q: "List three characteristics of a database.", options: ["Red, Blue, Green", "Scalability, Security, Centralized Access", "Portable, Disposable, Random", "Heavy, Large, Expensive"], correct: 1 },
    { module: "Module 9", q: "Difference between database and spreadsheet?", options: ["Spreadsheets for large; databases for small", "Databases are multi-table and handle complex relationships", "No difference", "Databases for numbers only"], correct: 1 },
    { module: "Module 9", q: "What is a 'Relational Database'?", options: ["Database for family", "Database organizing data into tables that can be linked", "Database with one table", "Database that cannot be shared"], correct: 1 },
    { module: "Module 9", q: "Define a 'Primary Key.'", options: ["Main key on keyboard", "Unique identifier for every record in a table", "Database password", "First name in list"], correct: 1 },
    { module: "Module 9", q: "What is a 'Foreign Key'?", options: ["Key from another country", "Field in one table linking to Primary Key of another", "Incorrect password", "Hidden column"], correct: 1 },
    { module: "Module 9", q: "Describe 'One-to-Many' relationship.", options: ["One person having one heart", "One customer having many different orders", "Many people sharing one sandwich", "One computer with one monitor"], correct: 1 },
    { module: "Module 9", q: "What is a 'One-to-One' relationship?", options: ["One student with one unique Student ID", "One teacher with 30 students", "One book with many chapters", "Many users on one website"], correct: 0 },
    { module: "Module 9", q: "What does a DBA do?", options: ["Writes blog posts", "Organizes, stores, and protects an organization's data", "Fixes hardware", "Designs graphics"], correct: 1 },
    { module: "Module 9", q: "What is a 'Data Scientist'?", options: ["Invents computers", "Professional who finds patterns in data for decisions", "Installs database software", "Data privacy attorney"], correct: 1 },
    { module: "Module 9", q: "What is 'Scalability' in a database?", options: ["Weight of database", "Ability to grow as data amount increases", "How many colors used", "Speed of delete function"], correct: 1 },
    { module: "Module 9", q: "Example of a database action in Microsoft Access.", options: ["Playing a video", "Adding, deleting, or changing a record", "Browsing internet", "Designing a logo"], correct: 1 },
    { module: "Module 9", q: "What is 'Data Centralization'?", options: ["Data in middle of room", "Storing data in a single location for multiple users", "Deleting all but one file", "Encrypting data"], correct: 1 },
    { module: "Module 9", q: "Why is data recovery important in databases?", options: ["To make it smaller", "To ensure data isn't lost if system fails", "To increase software cost", "Only for temporary data"], correct: 1 },
    { module: "Module 9", q: "What is a 'Record'?", options: ["Musical disc", "Complete set of information (a row) in a table", "A category like 'Last Name'", "Name of database"], correct: 1 },
    { module: "Module 9", q: "What is a 'Field'?", options: ["Football field", "Single piece of data (a column) within a record", "Total number of rows", "Type of primary key"], correct: 1 },
    { module: "Module 9", q: "How is data retrieved from a database?", options: ["Guessing", "Using 'Queries' (often SQL)", "Manual search", "Printing the whole database"], correct: 1 },
    { module: "Module 9", q: "What is a 'Data Engineer'?", options: ["Fixes laptops", "Professional who creates and manages data systems", "Writes marketing emails", "Web designer"], correct: 1 },
    { module: "Module 9", q: "Why large companies use DBMS?", options: ["To make things complicated", "To handle massive data efficiently and securely", "To avoid internet", "To save electricity"], correct: 1 },
    { module: "Module 9", q: "Value of finding patterns in data?", options: ["Looks pretty", "Allows businesses to make better decisions/predictions", "Makes computer faster", "No value"], correct: 1 },

    // MODULE 10: Coding
    { module: "Module 10", q: "What is 'Coding'?", options: ["Spy language", "Translating human instructions into computer tasks", "Typing fast", "Buying software"], correct: 1 },
    { module: "Module 10", q: "What is 'Machine Language'?", options: ["English", "Patterns of ones and zeros used as direct commands", "For car engines", "Type of pseudocode"], correct: 1 },
    { module: "Module 10", q: "Define 'Syntax' in programming.", options: ["Software tax", "Specific rules for writing a programming language", "Keyboard speed", "Computer virus"], correct: 1 },
    { module: "Module 10", q: "Difference between Compiled and Interpreted?", options: ["Text vs Video", "Compiled converted all at once; Interpreted read line-by-line", "Interpreted is always faster", "No difference"], correct: 1 },
    { module: "Module 10", q: "What is a 'Variable' in code?", options: ["Something that never changes", "Container for storing data values that can change", "Type of monitor", "Programming error"], correct: 1 },
    { module: "Module 10", q: "What is a 'String'?", options: ["Piece of yarn", "Sequence of characters (text) used in programming", "Network cable", "Part of motherboard"], correct: 1 },
    { module: "Module 10", q: "Define 'Logical Operations.'", options: ["Math on paper", "Decisions based on conditions (e.g., IF/THEN)", "Typing in straight line", "Deleting files in order"], correct: 1 },
    { module: "Module 10", q: "What is 'Pseudocode'?", options: ["Real code that doesn't work", "Using plain language to map out logic before coding", "Secret language", "Coding in binary"], correct: 1 },
    { module: "Module 10", q: "What is 'Debugging'?", options: ["Cleaning dust", "Finding and fixing mistakes or errors in code", "Installing app", "Writing comments"], correct: 1 },
    { module: "Module 10", q: "List two careers in coding.", options: ["Pilot and Chef", "Web Developer and Game Developer", "Driver and Salesperson", "Janitor and Security Guard"], correct: 1 },
    { module: "Module 10", q: "What does a 'Web Developer' do?", options: ["Fixes routers", "Designs and builds websites (Front and Back-end)", "Installs satellite dishes", "Sells internet plans"], correct: 1 },
    { module: "Module 10", q: "What is a 'Machine Learning Engineer'?", options: ["Fixes washing machines", "Professional who teaches computers to learn from data", "Hardware designer", "Data privacy attorney"], correct: 1 },
    { module: "Module 10", q: "Why is code documentation important?", options: ["Makes file larger", "Explains how code works for future maintenance", "Required to run code", "Hides code from users"], correct: 1 },
    { module: "Module 10", q: "What is a 'Query Language'?", options: ["For asking questions", "For interacting with/retrieving data from databases", "For mobile games", "Type of machine code"], correct: 1 },
    { module: "Module 10", q: "What is 'Assembly Language'?", options: ["For furniture", "Low-level language close to machine code", "For web design", "High-level like Python"], correct: 1 },
    { module: "Module 10", q: "Describe 'Divide and Conquer' debugging.", options: ["Deleting half code", "Breaking code into smaller pieces to test individually", "Asking two people", "Ignoring problem"], correct: 1 },
    { module: "Module 10", q: "What is a 'Function' in programming?", options: ["Developer party", "Reusable block of code for a specific task", "Power button", "Variable that never changes"], correct: 1 },
    { module: "Module 10", q: "Why check comments and logs when debugging?", options: ["Check if pretty", "Gather details about errors and developer intent", "Save space", "Change text color"], correct: 1 },
    { module: "Module 10", q: "What is a 'Game Developer'?", options: ["Plays games", "Professional designing logic/graphics for video games", "Builds gaming PCs", "Social media manager"], correct: 1 },
    { module: "Module 10", q: "First step in good programming planning?", options: ["First line of code", "Identifying problem/goal and mapping a road map", "Buying new monitor", "Choosing background color"], correct: 1 }
];

let filteredQuestions = [...allQuestions];
let currentQuestionIndex = 0;
let score = 0;

// UI Elements
const questionEl = document.getElementById('question-text');
const optionsEl = document.getElementById('options-container');
const nextBtn = document.getElementById('next-btn');
const progressBar = document.getElementById('progress-bar');
const scoreEl = document.getElementById('score');
const currentQNum = document.getElementById('current-q-num');
const moduleTitle = document.getElementById('module-title');

function loadQuestion() {
    resetState();
    let currentQ = filteredQuestions[currentQuestionIndex];
    
    moduleTitle.innerText = currentQ.module;
    questionEl.innerText = currentQ.q;
    currentQNum.innerText = currentQuestionIndex + 1;
    document.getElementById('total-q').innerText = filteredQuestions.length;

    currentQ.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.innerText = option;
        button.classList.add('option-btn');
        button.addEventListener('click', () => selectOption(index, currentQ.correct));
        optionsEl.appendChild(button);
    });
}

function selectOption(index, correct) {
    const buttons = optionsEl.getElementsByClassName('option-btn');
    if (index === correct) {
        buttons[index].classList.add('correct');
        score++;
    } else {
        buttons[index].classList.add('wrong');
        buttons[correct].classList.add('correct');
    }
    
    Array.from(buttons).forEach(btn => btn.disabled = true);
    nextBtn.classList.remove('hidden');
    scoreEl.innerText = score;
    updateProgress();
}

function updateProgress() {
    const progress = ((currentQuestionIndex + 1) / filteredQuestions.length) * 100;
    progressBar.style.width = progress + '%';
}

function resetState() {
    nextBtn.classList.add('hidden');
    while (optionsEl.firstChild) {
        optionsEl.removeChild(optionsEl.firstChild);
    }
}

nextBtn.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < filteredQuestions.length) {
        loadQuestion();
    } else {
        questionEl.innerHTML = `<h2>Quiz Completed!</h2><p>Final Score: ${score} / ${filteredQuestions.length}</p>`;
        resetState();
        nextBtn.classList.add('hidden');
    }
});

// This ensures the script waits for the HTML to be fully ready
window.onload = function() {
    loadQuestion();
};
