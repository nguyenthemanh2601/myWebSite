  var app = new Vue({ 
    i18n,
    data:{
        api_key:'AIzaSyCNse-XkpinHLc19NVfVsU5pg6h-drpHJM',
        client_id:'458833184457-qp8rtn3ql1vsfka4urcb0iruu837jo3s.apps.googleusercontent.com',
        lang:'en',
        copyright:'',
        authorize:{
            token:'',
            userInfoUrl:"https://github.com/users",
            accessUrl:'https://github.com/login/oauth/authorize?',
            accessTokenUrl:'https://www.googleapis.com/oauth2/v1/userinfo?alt=json',
            client_id:'20bb1c4a338408adbca2',
            client_secret:'284a707bb4bd28006f28284d2075a02873e59612',
        },
        ggAuth:_ggAuth,
        loginUser:'',
        driveScope:'https://www.googleapis.com/auth/drive'
    },
    mounted() {
        _ggAuth.signin2.render('google-signin-button', {
            onsuccess: this.onSignIn
        });
    },
    created:function() {
        i18n.locale = this.lang;

        this.copyright = new Date().getFullYear() +'';
        let searchParams = new URLSearchParams(window.location.search);
        if(searchParams.has('code')){
            this.getAccessToken(searchParams.get('code'));
        }
        document.head.querySelectorAll("[property*='title'][content]").forEach((e) => {
            e.content = i18n.t("about.fullname")
        })
        document.head.querySelectorAll("[name*='title'][content]").forEach((e) => {
            e.content = i18n.t("about.fullname")
        })
        document.head.querySelectorAll("[property*='url'][content]").forEach((e) => {
            e.content = location.origin
        })
        document.head.querySelectorAll("[property*='site_name'][content]").forEach((e) => {
            e.content = location.origin
        })
        document.head.querySelectorAll("[property*='description'][content]").forEach((e) => {
            e.content = i18n.t("about.position")
        })
        document.head.querySelectorAll("[name*='description'][content]").forEach((e) => {
            e.content = i18n.t("about.position")
        })
        document.head.querySelectorAll("[name*='author'][content]").forEach((e) => {
            e.content = i18n.t("about.mail")
        })
    },
    methods:{
        handleClientLoad:function () {
            _self = this;
            _ggDriveAuth.load('client:auth2', _self.driveInitClient);
        },
        driveInitClient:function () {
            _ggDriveAuth.client.init({
              apiKey: this.api_key,
              clientId: this.client_id,
              discoveryDocs: 'https://www.googleapis.com/discovery/v1/apis/drive/v3/rest',
              scope: this.driveScope
            }).then(function () {
                // Listen for sign-in state changes.
                _ggDriveAuth.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);

                // Handle the initial sign-in state.
                updateSigninStatus(_ggDriveAuth.auth2.getAuthInstance().isSignedIn.get());
                authorizeButton.onclick = handleAuthClick;
                signoutButton.onclick = handleSignoutClick;
            }, function(error) {
                appendPre(JSON.stringify(error, null, 2));
            });
        },
        updateSigninStatus:function (isSignedIn) {
            if (isSignedIn) {
                authorizeButton.style.display = 'none';
                signoutButton.style.display = 'block';
                listFiles();
            } else {
                authorizeButton.style.display = 'block';
                signoutButton.style.display = 'none';
            }
        },
        handleAuthClick:function (event) {
            _ggDriveAuth.auth2.getAuthInstance().signIn();
        },
        handleSignoutClick:function (event) {
            _ggDriveAuth.auth2.getAuthInstance().signOut();
        },
        appendPre: function (message) {
            var pre = document.getElementById('content');
            var textContent = document.createTextNode(message + '\n');
            pre.appendChild(textContent);
        },
        listFiles: function () {
            _ggDriveAuth.client.drive.files.list({
                'pageSize': 10,
                'fields': "nextPageToken, files(id, name)"
            }).then(function(response) {
                appendPre('Files:');
                var files = response.result.files;
                if (files && files.length > 0) {
                    for (var i = 0; i < files.length; i++) {
                      var file = files[i];
                      appendPre(file.name + ' (' + file.id + ')');
                    }
                } else {
                    appendPre('No files found.');
                }
            });
        },
        changeLang:function(){
            i18n.locale = (i18n.locale == this.lang )? 'vi' : this.lang;
        },
        clickAvt:function(){
            $('#loginModal').modal('show');
            if('' != this.loginUser){
                $('#google-signin-button').hide();
                $('.avt-img').css('')
                //background-image: url(images/about.jpg);
                return this.signOut();
            }
            return this.logIn();
        },
        onSignIn(googleUser) {
            this.loginUser = googleUser.getBasicProfile();
            $.notify({
                // options
                icon: 'glyphicon glyphicon-warning-sign',
                title: 'Login success',
                message: 'Wellcome '+this.loginUser.getName(),
            },{
                // settings
                element: 'body',
                position: null,
                type: "info",
                allow_dismiss: true,
                newest_on_top: false,
                showProgressbar: false,
                placement: {
                    from: "top",
                    align: "center"
                },
                offset: 20,
                spacing: 10,
                z_index: 1031,
                delay: 5000,
                timer: 1000,
                url_target: '_blank',
                mouse_over: null,
                animate: {
                    enter: 'animated fadeInDown',
                    exit: 'animated fadeOutUp'
                },
                onShow: null,
                onShown: null,
                onClose: null,
                onClosed: null,
                icon_type: 'class',
            });
            this.loginUser.familyName = this.upperCaseFirstLetter(this.loginUser.getFamilyName());
            this.loginUser.givenName = this.upperCaseFirstLetter(this.loginUser.getGivenName());
            this.loginUser.fullName = this.loginUser.familyName + ' ' +this.loginUser.givenName;
            this.loginUser.email = this.loginUser.getEmail();
            this.loginUser.avartar = this.loginUser.getImageUrl();
            $('google-signin-button').hide();
        },
        upperCaseFirstLetter(str) {
            str = str.split(" ");
            for (var i = 0, x = str.length; i < x; i++) {
                str[i] = str[i][0].toUpperCase() + str[i].substr(1);
            }
            return str.join(" ");
        },
        signOut:function() {
            var auth2 = this.ggAuth.auth2.getAuthInstance();
            auth2.signOut().then(function () {
              console.log('User signed out.');
            });
            this.loginUser = '';
        },
    }
}).$mount('#colorlib-page')