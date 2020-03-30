const messages = {
    en: {
        lang:"English",
        langTitle:"Change to Vietnamese",
        hi:'Hi ',
        greeting: 'I\'m',
        download:"Download CV(en) ",
        downloadLink:"CV.pdf",
        aboutMe:"About me",
        howAmI:"Who Am I?",
        noWebsite:'No website',
        about:{
            name:"Manh",
            shortName:'The Manh',
            fullname:"Nguyen The Manh",
            mail:'nguyenthemanh26011996@gmail.com',
            tel:'+84 966 173 668',
            messenger:'https://m.me/100006430680178',
            skype:'hoangtupro.a4@gmail.com',
            instagram:'https://www.instagram.com/nthe_manh/',
            position:'PHP DEVELOPER',
            positionTitle:'in VietNam',
            introduction:'I am <br>a Web deverloper',
            aboutIntroduction:"I graduated in Information Technology Engineer in 2018 at Saigon Technology University.",
        },
        skills:{
            webDesign:"Web Design",
            specialty:"My Specialty",
            mySkill:'My Skills',
            backEnd:"Back-end",
            frontEnd:"Front-end",
            graphicDesign:"Graphic Design",
        },
        expertise:{
            quesiton:"What I do?",
            introduction:"Here are some of my skills",
            item:[
                {
                    title:'PHP',
                    level:'75', //percent(%)
                    imageSrc:'fonts/icon/svg/php.svg',
                    introduction:'5 years of learning and working experience with php 5 - 7',
                },
                {
                    title:'Laravel',
                    level:'75', //percent(%)
                    imageSrc:'fonts/icon/svg/laravel.svg',
                    introduction:'3 years of learning and working experience with laravel 4.2 - 5.8',
                },
                {
                    title:'MySql',
                    level:'60', //percent(%)
                    imageSrc:'fonts/icon/svg/mysql.svg',
                    introduction:'5 years of learning and working experience with MySql ',
                },
                {
                    title:'Javascipt',
                    level:'60', //percent(%)
                    imageSrc:'fonts/icon/svg/js.svg',
                    introduction:'I have a lot of experience working with javscript with libraries like jquery, angularjs, vuejs, reacjs ...',
                },
                {
                    title:'Design',
                    level:'50', //percent(%)
                    imageSrc:'fonts/icon/svg/adobe.svg',
                    introduction:'I can use some adobe graphics software such as Photoshop, Illustrator, After Effect ...',
                },
                {
                    title:'Operating system',
                    level:'50', //percent(%)
                    imageSrc:'fonts/icon/svg/linux.svg',
                    introduction:'Many years experience with Windows, Linux operating systems such as ubuntu, kali, parrot, ...'
                }
            ]
        },
        education:{
            title: 'Education',
            school: 'Saigon Technology University',
            item:[
                {
                    title:'Study introductory subjects',
                    year:'2014-2015',
                    introduction:'Learn general subjects and basic programming with the C ++ language.',
                },
                {
                    title:'Advanced programming techniques',
                    year:'2015-2016',
                    introduction:'Learn advanced programming with c ++, C # languages. Learn the basics of database structure.',
                },
                {
                    title:'Mixed learning',
                    year:'2016-2017',
                    introduction:'Advanced learning about database structure. Familiar with web programming and programming with the Java language. Learn some more subjects about security and network security.',
                },
                {
                    title:'Learning practice combined',
                    year:'2017-2018',
                    introduction:'Learn in depth about the web. Complete subject projects. Practicing at school. At the same time working at capgeminiVn.',
                },
            ]
        },
        experience:{
            title:'Experience',
            introduction:'Work Experience',
            item:[
                {
                    position:'SOFTWARE ENGINER',
                    company:'CapgeminiVN',
                    time:'06/2018-12/2018',
                    url:'https://www.capgemini.com/',
                    project:'Working on ESkillMatrix project:',
                    content:[
                        'Scale: Internal projects for all 43 branches of corporation',
                        'Desing, built API,built feature for member management, write unit test.',
                        'Techonogies: Php7, Laravel 5.4, Angularjs 1.5, Typescript, MySQL.',
                        'OS: Windows, linux.'
                    ]
                },
                {
                    position:'SOFTWARE ENGINER',
                    company:'Sprite +',
                    time:'02/2019-10/2019',
                    url:'',
                    project:'Working on “Umbilical cord blood management” project:',
                    content:[
                        'Scale: Manage blood bank and umbilical cord for hospital.',
                        'Building the core, built API,built validation, write test tool, write screen code.',
                        'Techonogies: Php7, Angularjs 1.5, PostgreSQl, Perl.',
                        'OS: Windows, linux.'
                    ]
                },
                {
                    position:'SOFTWARE ENGINER',
                    company:'Primelabo',
                    time:'10/2019-now',
                    url:'http://primelabo.com.vn',
                    project:'Working on “MediSystem Employment Management” project:',
                    content:[
                        'Scale: Manage the work related to the company\'s working time.',
                        'Research documents, design and build websites on demand from Japanese customers.',
                        'Techonogies: Php5, Laravel4.2, Twig, Vuejs, Jquery, Bootstrap3, MariaDB, MySql.',
                        'OS: Windows, linux.'
                    ]
                },

            ],
        },
        contact:{
            title:'Contact',
            introduction:'Get in Touch',
            form:{
                name:'Name',
                mail:'Email',
                subject:'Subject',
                message:'Message',
                button:'Send Message',
            }
        },
        menu: {
            home:"Home",
            about:"About",
            expertise:"Expertise",
            skills:"Skills",
            education:"Education",
            experience:"Work Experience",
            contact:"Contact",
        },
    },
    vi: {
        lang:"Tiếng Việt",
        langTitle:"Đổi sang Tiếng Anh",
        hi:'Xin chào! ',
        greeting: 'Tôi là ',
        download:"Tải xuống CV(vi) ",
        downloadLink:"CV.pdf",
        aboutMe:"Về tôi",
        howAmI:"Tôi là ai?",
        noWebsite:'Không có trang web nào',
        about:{
            name:"Mạnh",
            shortName:'Thế Mạnh',
            fullname:"Nguyễn Thế Mạnh",
            mail:'nguyenthemanh26011996@gmail.com',
            tel:'+84 966 173 668',
            messenger:'https://m.me/100006430680178',
            skype:'hoangtupro.a4@gmail.com',
            instagram:'https://www.instagram.com/nthe_manh/',
            position:'Nhà phát triển PHP',
            positionTitle:'tại Việt Nam',
            introduction:'Tôi là <br>một<br>nhà phát triển Web',
            aboutIntroduction:"Tôi tốt nghiệp Kỹ sư công nghệ thông tin năm 2018 tại Đại học Công nghệ Sài Gòn.",
        },
        skills:{
            webDesign:"Thiết kế website",
            specialty:"Chuyên môn của tôi",
            mySkill:'Kỹ năng của tôi',
            backEnd:"Back-end",
            frontEnd:"Front-end",
            graphicDesign:"Thiết kế đồ hoạ",
        },
        expertise:{
            quesiton:"Tôi làm gì?",
            introduction:"Dưới đây là một số kỹ năng của tôi",
            item:[
                {
                    title:'PHP',
                    level:'75', //phần trăm(%)
                    imageSrc:'fonts/icon/svg/php.svg',
                    introduction:'5 năm kinh nghiệm học tập và làm việc với PHP 5 - 7',
                },
                {
                    title:'Laravel',
                    level:'75', //phần trăm(%)
                    imageSrc:'fonts/icon/svg/laravel.svg',
                    introduction:'3 năm kinh nghiệm học tập và làm việc với laravel 4.2 - 5.8',
                },
                {
                    title:'MySql',
                    level:'60', //phần trăm(%)
                    imageSrc:'fonts/icon/svg/mysql.svg',
                    introduction:'5 năm kinh nghiệm học tập và làm việc với MySql ',
                },
                {
                    title:'Javascipt',
                    level:'60', //phần trăm(%)
                    imageSrc:'fonts/icon/svg/js.svg',
                    introduction:'Tôi có nhiều kinh nghiệm làm việc với các thư viện javscript như jquery, angularjs, vuejs, reacjs ...',
                },
                {
                    title:'Thiết kế',
                    level:'50', //phần trăm(%)
                    imageSrc:'fonts/icon/svg/adobe.svg',
                    introduction:'Tôi có thể sử dụng một số phần mềm đồ hoạ như Photoshop, Illustrator, After Effect ...',
                },
                {
                    title:'Hệ điều hành',
                    level:'50', //phần trăm(%)
                    imageSrc:'fonts/icon/svg/linux.svg',
                    introduction:'Nhiều năm kinh nghiệm với hệ điều hành Windows, Linux như ubuntu, kali, parrot, ...',
                }
            ]
        },
        education:{
            title: 'Học vấn',
            school: 'Đại học Công nghệ Sài Gòn',
            item:[
                {
                    title:'Học các môn giới thiệu',
                    year:'2014-2015',
                    introduction:'Học các môn học chung và lập trình cơ bản với ngôn ngữ C ++.',
                },
                {
                    title:'Kỹ thuật lập trình nâng cao',
                    year:'2015-2016',
                    introduction:'Học lập trình nâng cao với các ngôn ngữ C++, C#. Tìm hiểu những điều cơ bản về cấu trúc cơ sở dữ liệu.',
                },
                {
                    title:'Học hỗn hợp',
                    year:'2016-2017',
                    introduction:'Học nâng cao về cấu trúc cơ sở dữ liệu. Làm quen với lập trình web và lập trình với ngôn ngữ Java. Tìm hiểu thêm một số môn học về bảo mật và an ninh mạng.',
                },
                {
                    title:'Học thực hành kết hợp',
                    year:'2017-2018',
                    introduction:'Tìm hiểu sâu về web. Hoàn thành dự án môn học. Thực tập tại trường. Đồng thời làm việc tại capgeminiVn.',
                },
            ]
        },
        experience:{
            title:'Kinh nghiệm',
            introduction:'Kinh nghiệm làm việc',
            item:[
                {
                    position:'Kỹ sư phần mềm',
                    company:'CapgeminiVN',
                    url:'https://www.capgemini.com/',
                    time:'06/2018-12/2018',
                    project:'Làm việc trong dự án ESkillMatrix:',
                    content:[
                        'Quy mô: Dự án nội bộ cho tất cả 43 chi nhánh của tập đoàn',
                        'Thiết kế,  xây dựng API, xây dựng tính năng để quản lý thành viên, viết unit test.',
                        'Công nghệ: Php7, Laravel 5.4, Angularjs 1.5, Typescript, MySQL.',
                        'Hệ điều hành: Windows, linux.'
                    ]
                },
                {
                    position:'Kỹ sư phần mềm',
                    company:'Sprite +',
                    time:'02/2019-10/2019',
                    url:'',
                    project:'Làm việc trong dự án “Quản lý ngân hàng máu và cuống rốn” :',
                    content:[
                        'Quy mô: Quản lý ngân hàng máu và cuống rốn cho bệnh viện.',
                        'Xây dựng core, xây dựng API, validation. Viết test tool, thiết kế giao diện',
                        'Công nghệ: Php7, Angularjs 1.5, PostgreSQl, Perl.',
                        'Hệ điều hành: Windows, linux.'
                    ]
                },
                {
                    position:'Kỹ sư phần mềm',
                    company:'Primelabo',
                    url:'http://primelabo.com.vn',
                    time:'10/2019-now',
                    project:'Làm việc trong dự án “Hệ thống quản lý nhân sự (MediSystem)”:',
                    content:[
                        'Quy mô: Quản lý các công việc liên quan đến nhân sự thời gian làm việc của nhân viên của công ty',
                        'Nghiên cứu tài liệu, thiết kế và xây dựng trang web theo yêu cầu từ khách hàng Nhật Bản.',
                        'Công nghệ: Php5, Laravel4.2, Twig, Vuejs, Jquery, Bootstrap3, MariaDB, MySql.',
                        'Hệ điều hành: Windows, linux.'
                    ]
                },

            ],
        },
        contact:{
            title:'Liên hệ với tôi',
            introduction:'Liên hệ',
            form:{
                name:'Họ tên',
                mail:'Địa chỉ thư điện tử',
                subject:'Tiêu đề',
                message:'Thông điệp của bạn',
                button:'Gửi thông điệp',
            }
        },
        menu: {
            home:"Trang chủ",
            about:"Giới thiệu",
            expertise:"Kinh nghiệm",
            skills:"Kỹ năng",
            education:"Học vấn",
            experience:"Kinh nghiệm làm việc",
            contact:"Liên hệ",
        },
    }
  };
  // Create VueI18n instance with options
  const i18n = new VueI18n({
    messages, // set locale messages
  });