import GitHub from 'github-api';
// unauthenticated client
const gh = new GitHub();
var gist = gh.getGist(); // not a gist yet
  // Create a Vue instance with `i18n` option
  var app = new Vue({ 
    i18n,
    data:{
        lang:'en',
        copyright:'',
        authorize:{
            userInfoUrl:"https://github.com/users",
            accessUrl:'https://github.com/login/oauth/authorize?',
            accessTokenUrl:'https://github.com/login/oauth/access_token',
            client_id:'20bb1c4a338408adbca2',
            client_secret:'284a707bb4bd28006f28284d2075a02873e59612',
        },
        ggAuth:_ggAuth,
        loginUser:''
    },
    mounted() {
      gapi.signin2.render('google-signin-button', {
        onsuccess: this.onSignIn
      })
    },
    created:function() {
        i18n.locale = this.lang;

        this.copyright = new Date().getFullYear() +'';
        let searchParams = new URLSearchParams(window.location.search);
        if(searchParams.has('code')){
            this.getAccessToken(searchParams.get('code'));
        }
    },
    methods:{
        changeLang:function(){
            i18n.locale = (i18n.locale == this.lang )? 'vi' : this.lang;
        },
        login:function(){
            $('.g-signin2').click();return;
            let redirect_uri = window.location.href;
            let url = this.authorize.accessUrl +"client_id=" + this.authorize.client_id+'&allow_signup=false&redirect_uri='+redirect_uri;
            window.location.href = url;
        },
        decodeFile: function(code) {

        },
        getAccessToken:function(code) {
            let _self = this;
            let redirect_uri = window.location.href;
            $.ajax({
                url: this.authorize.accessTokenUrl,
                type: 'POST',
                data: {
                    client_id: _self.authorize.client_id,
                    client_secret: _self.authorize.client_secret,
                    code: code,
                    redirect_uri:redirect_uri
                },
            })
            .done(function(res) {
                console.log(res );
                let searchParams = new URLSearchParams(res);
                let accessToken = searchParams.get('access_token');
                return _self.getUserInfo(accessToken);
            }).fail( function(err) {
                let searchParams = new URLSearchParams(res);
                let accessToken = searchParams.get('access_token'); 
                console.log(err);
            });
        },
        getUserInfo:function (token) {
            $.ajax({
                url: this.authorize.accessUrl,
                type: 'GET',
                headers: {
                    'Authorization':'token '+token,
                },
            })
            .done(function(res) {
                console.log(res );
            }).fail( function(err) {
                console.log(err);
            });
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
			console.log('ID: ' + this.loginUser.getId()); // Do not send to your backend! Use an ID token instead.
			console.log('Name: ' + this.loginUser.getName());
			console.log('Image URL: ' + this.loginUser.getImageUrl());
			console.log('Email: ' + this.loginUser.getEmail()); // This is null if the 'email' scope is not present.
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