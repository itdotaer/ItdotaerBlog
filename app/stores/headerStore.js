/**
 * Header Store
 */

 // Reflux
 var Reflux = require('reflux');
var HeaderActions = require('../actions/headerActions');
var NotificationActions = require('../actions/notificationActions');

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
                    name: 'Index',
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
        //Listen history
        var listener = history.listen(location=>{
            var currentPath = location.pathname;

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
    onSelectMenu: function(menuType, selectedKey){
        if(isDebug) console.log('menuType', menuType);
        if(isDebug) console.log('selectKey', selectedKey)
        switch (menuType) {
            case 'mainMenu':
                history.pushState(null, this.menu.mainMenu.items[selectedKey].path);
                this.menu.userMenu.activeKey = -1;
                this.menu.mainMenu.activeKey = selectedKey;
                this.trigger(this.menu);
                break;
            case 'userMenu':
                history.pushState(null, this.menu.userMenu.items[selectedKey].path);
                this.menu.userMenu.activeKey = selectedKey;
                this.menu.mainMenu.activeKey = -1;
                this.trigger(this.menu);
                break;
            default:
                NotificationActions.add('Error', 'Error MenuType(' + menuType + ')!', 'error');
        }
    }
});

module.exports = HeaderStore;
