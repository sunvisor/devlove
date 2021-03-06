Ext.define('ContactList.controller.List', {
    extend: 'Ext.app.Controller',

    requires: [
        'ContactList.view.Detail'
    ],

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

    onDisclose: function(list, record) {
        var me = this,
        detail = Ext.create('ContactList.view.Detail');

        me.getNavi().push(detail);
    }
});
