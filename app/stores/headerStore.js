/**
 * Header Store
 */

 // Reflux
 var Reflux = require('reflux');
var HeaderActions = require('../actions/headerActions');
var NotificationActions = require('../actions/notificationActions');
var UserLoginActions = require('../actions/userLoginActions');

// IsDebug
var isDebug = require('../../config').appInfo.isDebug;

// React-Router
var history = require('../history');

var HeaderStore = Reflux.createStore({
    menu: {
        mainMenu: {
            activeKey: 0,
            items: [
                {
                    id: 0,
                    name: 'Posts',
                    path: '/main'
                },
                {
                    id: 1,
                    name: 'About',
                    path: '/about'
                }
            ]
        },
        userMenu: {
            activeKey: -1,
            user: null,
            items: [
                {
                    id: 0,
                    name: 'Login',
                    path: '/login'
                }
            ]
        }
    },
    listenables: HeaderActions,
    onGet: function(){
        if(isDebug) console.log('Location', window.location)
        //Listen history
        var listener = history.listen(location=>{
            var currentPath = location.pathname;
            if(isDebug) console.log('triggered', location);

            var that = this;
            //Search mainMenus
            this.menu.mainMenu.items.forEach(function(item){
                if(currentPath === item.path){
                    that.menu.mainMenu.activeKey = item.id;
                    that.menu.userMenu.activeKey = -1;
                }
            });

            //Search userMenus
            this.menu.userMenu.items.forEach(function(item){
                if(currentPath === item.path){
                    that.menu.mainMenu.activeKey = -1
                    that.menu.userMenu.activeKey = item.id;
                }
            });

            this.trigger(this.menu);
        });
    },
    onLoginSuccessed: function(user){
        if(isDebug) console.log('user', user);
        this.menu.userMenu.user = user;

        this.menu.userMenu.items[0].name = 'New Post';
        this.menu.userMenu.items[0].path = '/newPost';

        this.menu.userMenu.items.push({id: this.menu.userMenu.items.length, name: 'Logout', path: '/logout'});

        history.pushState(null, '/main');
        this.trigger(this.menu);
    },
    onSelectMenu: function(menuType, selectedKey){
        if(isDebug) console.log('menu', this.menu);
        if(isDebug) console.log('menuType', menuType);
        if(isDebug) console.log('selectKey', selectedKey);
        switch (menuType) {
            case 'mainMenu':
                history.pushState(null, this.menu.mainMenu.items[selectedKey].path);
                break;
            case 'userMenu':
                // If user has login, logout;
                // else navigate to login page.
                if(this.menu.userMenu.items[selectedKey].path == '/logout'){
                    this.menu.userMenu.user = null;
                    this.menu.userMenu.items[0].name = 'Login';
                    this.menu.userMenu.items[0].path = '/login';

                    this.menu.userMenu.items.splice(1, this.menu.userMenu.items.length - 1);

                    UserLoginActions.logout();

                    history.pushState(null, '/main');
                    this.trigger(this.item);
                }else{
                    history.pushState(null, this.menu.userMenu.items[selectedKey].path);
                }

                break;
            default:
                NotificationActions.add('Error', 'Error MenuType(' + menuType + ')!', 'error');
        }
    }
});

module.exports = HeaderStore;
