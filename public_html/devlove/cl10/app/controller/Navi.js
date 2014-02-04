Ext.define('ContactList.controller.List', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            navi: 'contactnavi'
        },
        control: {
            contactlist: {
                disclose: 'onDisclose'
            }
        }
    },

    //called when the Application is launched, remove if not needed
    launch: function(app) {
        
    },
