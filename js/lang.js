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
        about:{
            name:"Manh",
            fullname:"Nguyen The Manh",
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
        about:{
            name:"Mạnh",
            fullname:"Nguyễn Thế Mạnh",
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
  }
  // Create VueI18n instance with options
  const i18n = new VueI18n({
    messages, // set locale messages
  })
  
  
  // Create a Vue instance with `i18n` option
new Vue({ 
    i18n,
    data:{
        lang:'en'
    },
    created:function(){
        i18n.locale = this.lang;
    },
    methods:{
        changeLang:function(){
            i18n.locale = (i18n.locale == this.lang )? 'vi' : this.lang;
            console.log(i18n.locale )
        }
    }
}).$mount('#colorlib-page')